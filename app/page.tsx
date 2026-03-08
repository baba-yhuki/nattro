"use client"
import { useState } from "react"
import { useAudioPlayer } from "@/hooks/useAudioPlayer"
import SoundGrid from "./components/features/SoundGrid"
import VolumePanel from "./components/features/VolumePanel"
import TimerPanel from "./components/features/TimerPanel"
import BottomBar from "./components/features/BottomBar"
import { sounds } from "@/data/sound"


export default function Home() {
  const [activeSounds, setActiveSounds] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleSound = (id: string) => {
    setActiveSounds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]

      if (next.length > 0) {
        setIsPlaying(true)
      } else {
        setIsPlaying(false)
      }
      return next
    }
    )
  }

  const onTogglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  useAudioPlayer(sounds, activeSounds, isPlaying)

  const sceneName =
    activeSounds.length === 0
      ? "静寂"
      : activeSounds.length === 1
        ? sounds.find((s) => s.id === activeSounds[0])?.name ?? "静寂"
        : "カスタムミックス"

  return (
    <div className="min-h-screen flex flex-col">

      {/* ナビゲーションバー */}
      <nav className="h-16 flex items-center justify-between px-8">
        <span className="text-2xl">Nattro</span>
        <button className="text-sm border border-white/20 px-4 py-2 rounded-full">ログイン</button>
      </nav>

      {/* メインエリア */}
      <main className="flex-1 flex gap-6 px-8 py-6">

        {/* サウンドグリッド */}
        <div className="flex-1">
          <p className="text-white/40 text-xs tracking-widest mb-2">
            現在のシーン
          </p>
          <h1 className="text-4xl font-light italic mb-8">
            {sceneName}
          </h1>
          <SoundGrid sounds={sounds} activeSounds={activeSounds} onToggle={toggleSound} />
        </div>

        {/* コントロールパネル */}
        <div className="w-72 flex flex-col gap-4">
          <VolumePanel sounds={sounds} activeSounds={activeSounds} />
          <TimerPanel />
        </div>
      </main>

      {/* ボトムバー */}
      <BottomBar sounds={sounds} activeSounds={activeSounds} isPlaying={isPlaying} onTogglePlay={onTogglePlay} />

    </div>
  )
}