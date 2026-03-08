import SoundCard from "./SoundCard"
import { Sound } from "@/types/sound"

type Props = {
  sounds: Sound[]
  activeSounds: string[]
  onToggle: (id: string) => void
}

export default function SoundGrid({ sounds, activeSounds, onToggle }: Props) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {sounds.map((sound) => (
        <SoundCard key={sound.id} id={sound.id} emoji={sound.emoji} label={sound.label} isActive={activeSounds.includes(sound.id)} onToggle={onToggle} />
      ))}
    </div>
  )
}