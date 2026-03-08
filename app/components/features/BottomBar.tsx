import { Sound } from "@/types/sound"


type Props = {
  sounds: Sound[]
  activeSounds: string[]
  isPlaying: boolean
  onTogglePlay: () => void
}

export default function BottomBar({ sounds, activeSounds, isPlaying, onTogglePlay }: Props) {
  const activeSoundList = sounds.filter((s) => activeSounds.includes(s.id))
  return (
    <div className="h-20 border-t border-white/10 flex items-center justify-between px-8">

      {/* 左：再生中のサウンド一覧 */}
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {/* 再生中のサウンドの絵文字を並べる */}
          {activeSoundList.map((sound) => (
            <span key={sound.id} className="text-lg">{sound.emoji}</span>
          ))}
        </div>
        <p className="text-sm text-white/60">
          {/* 再生中のサウンド数を表示 "3 sounds playing" */}
          {activeSoundList.length > 0 ? `${activeSoundList.length} sounds playing` : "音を選択してください"}
        </p>
      </div>

      {/* 中央：再生・停止ボタン */}
      <button
        onClick={onTogglePlay}
        className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-black text-lg transition-all hover:scale-105"
      >
        {/* isPlayingがtrueなら"⏸"、falseなら"▶" */}
        {isPlaying ? "⏸" : "▶"}
      </button>

      {/* 右：余白（将来的に機能追加予定） */}
      <div className="w-24" />

    </div >
  )
}