import { useState } from "react"

const modes: ("集中" | "睡眠" | "休憩")[] = ["集中", "睡眠", "休憩"]

const modeLabels = {
  集中: "FOCUS MODE",
  睡眠: "SLEEP MODE",
  休憩: "BREAK MODE",
}

const durationsByMode = {
  集中: ["25:00", "50:00", "90:00"],
  睡眠: ["30:00", "60:00", "90:00"],
  休憩: ["05:00", "10:00", "15:00"],
}

export default function TimerPanel() {
  const [activeMode, setActiveMode] = useState<"集中" | "睡眠" | "休憩">("集中")
  const [activeDuration, setActiveDuration] = useState("25:00")
  const durations = durationsByMode[activeMode]

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
        Timer
      </p>

      {/* モード切替ボタン */}
      <div className="flex gap-2 mb-4">
        {modes.map((mode) => (
          <button key={mode} onClick={() => {
            setActiveMode(mode)
            setActiveDuration(durationsByMode[mode][0])
          }} className={`flex-1 py-2 rounded-lg border text-xs transition-all ${activeMode === mode ? "border-blue-400/50 bg-blue-400/10 text-blue-300" : "border-white/10 text-white/40 hover:border-white/20"}`}>
            {mode}
          </button>
        ))}
      </div>

      {/* タイマー表示 */}
      <div className="text-center my-6">
        <p className="text-5xl font-light tracking-widest">{activeDuration}</p>
        <p className="text-xs text-white/40 tracking-widest mt-2">{modeLabels[activeMode]}</p>
      </div>

      {/* 時間選択ボタン */}
      <div className="flex gap-2">
        {durations.map((duration) => (
          <button onClick={() => setActiveDuration(duration)} key={duration} className={`flex-1 py-1 rounded-lg border text-xs transition-all ${activeDuration === duration ? "border-white/20 bg-white/5 text-white" : "border-white/10 text-white/40 hover:border-white/20"}`}>
            {duration}
          </button>
        ))}
      </div>
    </div>
  )
}