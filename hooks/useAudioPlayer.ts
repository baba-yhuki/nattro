import { useRef, useEffect } from "react";
import type { Sound } from "@/types/sound";

export function useAudioPlayer(sounds: Sound[], activeSounds: string[], isPlaying: boolean) {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})

  useEffect(() => {
    sounds.forEach((sound) => {
      if (!sound.audioSrc) return
      if (!audioRefs.current[sound.id]) {
        const audio = new Audio(sound.audioSrc)
        audio.loop = true
        audioRefs.current[sound.id] = audio
      }

      const audio = audioRefs.current[sound.id]
      const shouldPlay = activeSounds.includes(sound.id) && isPlaying

      if (shouldPlay) {
        audio.play().catch(() => { })
      } else {
        audio.pause()
      }

    })

  }, [sounds, activeSounds, isPlaying])
}