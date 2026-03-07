type Props = {
  id: string
  emoji: string
  label: string
}

export default function SoundCard({ id, emoji, label }: Props) {
  return (
    <div className="aspect-square rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 cursor-pointer">
      <span className="text-3xl">{emoji}</span>
      <span className="text-xs text-white/40 tracking-widest uppercase">{label}</span>
    </div>
  )
}