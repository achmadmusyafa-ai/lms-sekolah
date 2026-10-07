import { badges } from '../../data/siswaArena.js'
import { Icon } from '../Icon.jsx'

export function SiswaBadges({ onToast }) {
  return (
    <div className="card-tactile bg-surface-container-lowest rounded-[24px] p-6 border-2 border-outline-variant/60 flex flex-col justify-between space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Icon name="stars" className="text-amber-500 fill text-2xl" />
          <h3 className="text-headline-sm text-on-surface">Lencana Baru</h3>
        </div>
        <p className="text-body-sm text-on-surface-variant mb-4">
          Selesaikan misi untuk mengumpulkan lencana kehormatan kelas!
        </p>
        <div className="space-y-3">
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3 p-2.5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:bg-surface-container transition-colors">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${b.bg}`}>{b.emoji}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-label-md text-on-surface">{b.title}</span>
                  <span className="text-[11px] font-bold text-secondary">{b.prog}</span>
                </div>
                <div className="w-full h-2 bg-outline-variant/30 rounded-full mt-1.5 overflow-hidden">
                  <div className={`h-full bg-secondary rounded-full ${b.bar}`}></div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-surface-container-low border border-outline-variant/40 opacity-75">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-2xl">🔒</div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-label-md text-on-surface">Kolektor Buku</span>
                <span className="text-[11px] font-bold text-on-surface-variant">Terkunci</span>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-1">Baca 5 komik edukasi</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => onToast('Membuka galeri 12 lencana!')} className="w-full py-2.5 bg-surface-container-lowest border-2 border-outline-variant text-on-surface text-label-md rounded-[16px] hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5 mt-2 cursor-pointer">
        <Icon name="workspace_premium" className="text-base" />
        <span>Lihat Galeri 12 Lencana Saya</span>
      </button>
    </div>
  )
}
