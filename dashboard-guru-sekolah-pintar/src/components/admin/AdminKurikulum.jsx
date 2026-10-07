import { faseProgress, mapelProgress } from '../../data/adminKurikulum.js'
import { Icon } from '../Icon.jsx'

export function AdminKurikulum({ onToast }) {
  return (
    <section className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm bg-primary-fixed text-on-primary-fixed font-bold mb-1">
            Kurikulum Merdeka 2024
          </div>
          <h2 className="text-headline-sm text-on-surface font-bold flex items-center gap-2">
            <Icon name="menu_book" className="text-secondary text-2xl" />
            Manajemen Kurikulum &amp; Progres E-Rapor Digital
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-0.5">
            Monitoring penilaian sumatif, formatif, dan pengesahan TTE kepala sekolah.
          </p>
        </div>
        <button
          onClick={() => onToast('TTE persetujuan rapor berhasil dibubuhkan.')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-on-secondary text-label-lg font-bold tactile-btn-secondary shrink-0"
        >
          <Icon name="draw" className="text-xl" fill />
          <span>1-Klik TTE Persetujuan Rapor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {faseProgress.map((f) => (
          <div key={f.title} className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-on-surface text-label-lg">{f.title}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${f.pillClass}`}>{f.pill}</span>
              </div>
              <div className="text-body-sm text-on-surface-variant mb-3">{f.info}</div>
            </div>
            <div>
              <div className="w-full bg-surface-container-high rounded-full h-2 mb-2">
                <div className={`h-2 rounded-full ${f.bar} ${f.barClass}`}></div>
              </div>
              <div className={`text-xs font-bold flex items-center gap-1 ${f.noteClass}`}>
                <Icon name={f.noteIcon} className="text-sm" />
                {f.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-outline-variant/60">
        <h3 className="text-label-lg text-on-surface font-bold mb-3 flex items-center justify-between">
          <span>Progres Pengisian Nilai per Mata Pelajaran &amp; Projek P5</span>
          <span className="text-body-sm text-on-surface-variant font-normal">Semester Ganjil 2024/2025</span>
        </h3>
        <div className="space-y-3.5">
          {mapelProgress.map((m) => (
            <div key={m.name}>
              <div className="flex justify-between items-center text-body-sm mb-1 font-semibold">
                <span className="flex items-center gap-2 text-on-surface">
                  <span className={`w-2.5 h-2.5 rounded-full ${m.dot}`}></span>
                  {m.name}
                </span>
                <span className={`font-bold ${m.valClass}`}>{m.val}</span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-2.5">
                <div className={`h-2.5 rounded-full ${m.bar} ${m.barClass}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-primary-fixed/20 border border-primary-fixed flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon name="print" className="text-primary text-2xl" fill />
          <div>
            <div className="font-bold text-on-surface text-label-lg">Cetak Lembar Rapor Digital Massal</div>
            <div className="text-body-sm text-on-surface-variant">Format resmi Kemendikbudristek dengan barcode otentikasi digital</div>
          </div>
        </div>
        <button
          onClick={() => onToast('Pratinjau PDF rapor dibuka.')}
          className="px-4 py-2 rounded-xl bg-surface-container-lowest border-2 border-outline-variant text-label-lg text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap"
        >
          Lihat Pratinjau PDF
        </button>
      </div>
    </section>
  )
}
