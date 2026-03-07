"use client"
import { useState } from "react"
import SoundGrid from "./components/features/SoundGrid"
import VolumePanel from "./components/features/VolumePanel"

const sounds = [
  { id: "rain", emoji: "🌧️", label: "Rain", name: "雨" },
  { id: "thunder", emoji: "⚡", label: "Thunder", name: "雷" },
  { id: "wave", emoji: "🌊", label: "Waves", name: "波" },
  { id: "wind", emoji: "🍃", label: "Wind", name: "風" },
  { id: "fire", emoji: "🔥", label: "Fire", name: "焚き火" },
  { id: "forest", emoji: "🌲", label: "Forest", name: "森" },
  { id: "river", emoji: "💧", label: "River", name: "川" },
  { id: "night", emoji: "🌉", label: "Night", name: "夜" },
  { id: "cafe", emoji: "☕", label: "Café", name: "カフェ" },
  { id: "train", emoji: "🚂", label: "Train", name: "電車" },
  { id: "snow", emoji: "❄️", label: "Snow", name: "雪" },
  { id: "space", emoji: "🌌", label: "Space", name: "宇宙" },
]


export default function Home() {
  const [activeSounds, setActiveSounds] = useState<string[]>([])

  const toggleSound = (id: string) => {
    setActiveSounds((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    )
  }

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
            雨の夜
          </h1>
          <SoundGrid sounds={sounds} activeSounds={activeSounds} onToggle={toggleSound} />
        </div>

        {/* コントロールパネル */}
        <div className="w-72 flex flex-col gap-4">
          <VolumePanel sounds={sounds} activeSounds={activeSounds} />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Timer
            </p>
            <p className="text-white/40 text-sm">ここにタイマーが入ります</p>
          </div>
        </div>
      </main>

      {/* ボトムバー */}
      <div className="h-20 border-t border-white/10 flex items-center justify-center px-8">
        <button className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-black">
          ▶
        </button>
      </div>

    </div>
  )
}