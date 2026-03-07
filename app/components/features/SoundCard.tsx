type Props = {
  id: string
  emoji: string
  label: string
  isActive: boolean
  onToggle: (id: string) => void
}

export default function SoundCard({ id, emoji, label, isActive, onToggle }: Props) {
  return (
    <div
      onClick={() => onToggle(id)}
      className={`
        aspect-square rounded-2xl border flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300
        ${isActive
          ? "border-blue-400/50 bg-blue-400/10"
          : "border-white/10 bg-white/5 hover:border-white/20"
        }
      `}
    >
      <span className="text-3xl">{emoji}</span>
      <span className={`text-xs tracking-widest uppercase ${isActive ? "text-blue-300" : "text-white/40"}`}>
        {label}
      </span>
    </div>
  )
}