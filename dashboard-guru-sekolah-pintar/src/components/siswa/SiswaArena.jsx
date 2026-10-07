import { leaderboard } from '../../data/siswaArena.js'
import { Icon } from '../Icon.jsx'

export function SiswaArena({ onToast }) {
  return (
    <div className="lg:col-span-2 card-tactile bg-surface-container-lowest rounded-[24px] p-6 border-2 border-outline-variant/60 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
            <Icon name="emoji_events" className="text-2xl fill" />
          </div>
          <div>
            <h2 className="text-headline-sm text-on-surface">Arena Cerdas Cermat Kelas 4B</h2>
            <p className="text-body-sm text-on-surface-variant">Tantangan Mingguan: Musim Penjelajah Cilik</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onToast('Kuis Cepat 5 menit dimulai!')} className="px-4 py-2 bg-secondary text-white text-label-md rounded-[14px] btn-tactile-secondary flex items-center gap-1 cursor-pointer">
            <Icon name="bolt" className="text-base" />
            <span>Kuis Cepat (5 Mnt)</span>
          </button>
          <button onClick={() => onToast('Undangan tantangan dikirim ke teman!')} className="px-3 py-2 bg-surface-container-high text-on-surface text-label-md rounded-[14px] hover:bg-surface-container transition-colors flex items-center gap-1 cursor-pointer">
            <Icon name="swords" className="text-base" />
            <span>Tantang Teman</span>
          </button>
        </div>
      </div>
      <div className="space-y-2.5">
        {leaderboard.map((r) => (
          <div key={r.name} className={`flex items-center justify-between p-3 rounded-2xl ${r.cardClass}`}>
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full font-extrabold text-sm flex items-center justify-center ${r.rankBg}`}>{r.rank}</span>
              <div>
                <p className="text-label-md text-on-surface">{r.name}</p>
                <p className="text-body-sm text-on-surface-variant">{r.info}</p>
              </div>
            </div>
            <span className={r.rightClass}>{r.right}</span>
          </div>
        ))}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-primary-fixed/40 border-2 border-primary-container">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-extrabold text-sm flex items-center justify-center">🥉</span>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-label-md text-on-surface font-extrabold">Kamu (Budi Pratama)</p>
                <span className="px-2 bg-secondary text-white rounded-full text-[10px] font-bold">Hebat!</span>
              </div>
              <p className="text-body-sm text-on-surface-variant">Lvl 8 • 850 XP</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-label-md text-secondary font-extrabold">Posisi #3</span>
            <p className="text-[11px] text-on-surface-variant">Hanya butuh 60 XP lagi!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
