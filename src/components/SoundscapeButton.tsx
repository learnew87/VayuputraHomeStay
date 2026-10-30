"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundscapeButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    gainNode?: GainNode;
    intervalId?: NodeJS.Timeout;
    noiseSource?: AudioNode;
  }>({});

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Create gentle river water ripple effect with filtered noise
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // pinkish gentle noise
        lastOut = output[i];
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const waterFilter = ctx.createBiquadFilter();
      waterFilter.type = "lowpass";
      waterFilter.frequency.setValueAtTime(450, ctx.currentTime);

      // Gentle LFO to simulate gentle waves/ripples
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.25, ctx.currentTime); // 0.25 Hz wave cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(200, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(waterFilter.frequency);
      lfo.start();

      whiteNoise.connect(waterFilter);
      waterFilter.connect(masterGain);
      whiteNoise.start();

      // Occasional gentle distant backwater bird chirps
      const playChirp = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const chirpGain = audioCtxRef.current.createGain();

        osc.type = "sine";
        const baseFreq = 2200 + Math.random() * 800;
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.18);

        chirpGain.gain.setValueAtTime(0, now);
        chirpGain.gain.linearRampToValueAtTime(0.03, now + 0.03);
        chirpGain.gain.linearRampToValueAtTime(0, now + 0.2);

        osc.connect(chirpGain);
        chirpGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.22);
      };

      const intervalId = setInterval(() => {
        if (Math.random() > 0.45) {
          playChirp();
          if (Math.random() > 0.5) {
            setTimeout(playChirp, 220);
          }
        }
      }, 3500);

      nodesRef.current = {
        gainNode: masterGain,
        intervalId,
      };

      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopSoundscape = () => {
    if (nodesRef.current.intervalId) {
      clearInterval(nodesRef.current.intervalId);
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close();
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute backwater river ambience" : "Listen to backwater river & birds ambience"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 shadow-sm ${
        isPlaying
          ? "bg-[#647B54] text-white ring-2 ring-[#EDE7D9]/60 shadow-md animate-pulse"
          : "bg-[#254638]/70 hover:bg-[#254638] text-[#EDE7D9] border border-[#A5AD83]/30 backdrop-blur-md"
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-white" />
          <span className="hidden sm:inline">River Ambience: On</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#EDE7D9]" />
          <span className="hidden sm:inline">River Ambience</span>
        </>
      )}
    </button>
  );
}
