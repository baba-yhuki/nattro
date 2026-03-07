import SoundCard from "./SoundCard"

type Sound = {
  id: string
  emoji: string
  label: string
  name: string
}

type Props = {
  sounds: Sound[]
}

export default function SoundGrid({ sounds }: Props) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {sounds.map((sound) => (
        <SoundCard key={sound.id} id={sound.id} emoji={sound.emoji} label={sound.label} />
      ))}
    </div>
  )
}