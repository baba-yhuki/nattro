type Sound = {
  id: string
  emoji: string
  label: string
  name: string
}

type Props = {
  sounds: Sound[]
  activeSounds: string[]
}

export default function VolumePanel({ sounds, activeSounds }: Props) {
  const activeSoundList = sounds.filter((s) => activeSounds.includes(s.id))
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
        Volume Mix
      </p>
      {activeSoundList.length === 0 ? (
        <p className="text-white/20 text-sm">音を選択してください。</p>
      ) : (
        <div className="flex flex-col gap-4">
          {activeSoundList.map((sound) => (
            <div key={sound.id} className="flex items-center gap-3">
              <span className="text-sm w-6">{sound.emoji}</span>
              <input type="range" min={0} max={100} defaultValue={70} className="flex-1 accent-blue-400" />
            </div>
          ))}
        </div>
      )
      }
    </div >
  )
}