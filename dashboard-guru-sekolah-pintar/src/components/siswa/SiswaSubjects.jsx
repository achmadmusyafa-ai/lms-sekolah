import { siswaSubjects } from '../../data/siswaSubjects.js'
import { Icon } from '../Icon.jsx'

export function SiswaSubjects({ onToast }) {
  return (
    <section className="space-y-4" id="mata-pelajaran">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
          <Icon name="auto_stories" className="text-xl" />
        </div>
        <div>
          <h2 className="text-headline-sm text-on-surface">Ruang Belajar Interaktif</h2>
          <p className="text-body-sm text-on-surface-variant">Pilih mata pelajaran favoritmu dan kumpulkan poin petualangan!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {siswaSubjects.map((s) => (
          <div key={s.title} onClick={() => onToast(`Membuka ${s.title} — ${s.next}`)} className={`card-tactile bg-surface-container-lowest rounded-[20px] p-5 border-2 border-outline-variant/50 flex flex-col justify-between group cursor-pointer ${s.hoverBorder}`}>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`w-12 h-12 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform ${s.emojiBg}`}>
                  {s.emoji}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${s.pillClass}`}>{s.pill}</span>
              </div>
              <div>
                <h3 className={`text-title-md text-on-surface transition-colors ${s.hoverTitle}`}>{s.title}</h3>
                <p className="text-body-sm text-on-surface-variant mt-0.5">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {s.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-surface-container-low text-on-surface">{tag}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
              <span className="text-label-sm text-on-surface-variant">{s.next}</span>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${s.arrowBg}`}>
                <Icon name="chevron_right" className="text-base" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
