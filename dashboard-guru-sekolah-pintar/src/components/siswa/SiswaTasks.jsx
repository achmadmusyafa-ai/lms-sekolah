import { siswaTasks } from '../../data/siswaTasks.js'
import { Icon } from '../Icon.jsx'

export function SiswaTasks({ onToast }) {
  return (
    <section className="space-y-4" id="tugas-kuis">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-container">
            <Icon name="calendar_today" className="text-xl" />
          </div>
          <div>
            <h2 className="text-headline-sm text-on-surface">Jadwal &amp; Tugas Hari Ini</h2>
            <p className="text-body-sm text-on-surface-variant">Senin, 18 November 2024 • Target: 3 Tugas Terjadwal</p>
          </div>
        </div>
        <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1 text-label-md text-secondary hover:text-primary transition-colors">
          <span>Lihat Semua Kalender Tugas</span>
          <Icon name="arrow_forward" className="text-sm" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {siswaTasks.map((t) => (
          <div key={t.title} className="card-tactile bg-surface-container-lowest rounded-[20px] p-5 border-2 border-outline-variant/60 flex flex-col justify-between relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-2 ${t.topBar}`}></div>
            <div className="space-y-3 pt-1">
              <div className="flex justify-between items-start gap-2">
                <span className={`px-3 py-1 rounded-full text-label-sm ${t.subjectClass}`}>{t.subject}</span>
                <span className={`px-2.5 py-1 rounded-full text-label-sm flex items-center gap-1 ${t.statusClass}`}>
                  <Icon name={t.statusIcon} className="text-xs fill" />
                  {t.status}
                </span>
              </div>
              <h3 className="text-title-md text-on-surface leading-snug">{t.title}</h3>
              <p className="text-body-sm text-on-surface-variant line-clamp-2">{t.desc}</p>
              <div className="flex items-center gap-2 text-label-sm text-on-surface-variant bg-surface-container-low p-2 rounded-xl">
                <Icon name={t.infoIcon} className="text-base" />
                <span>{t.info}</span>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
              <span className="text-label-sm text-secondary font-bold flex items-center gap-1">
                <Icon name="stars" className="text-base text-amber-500 fill" />
                {t.xp}
              </span>
              <button onClick={() => onToast(`${t.btn}: ${t.title}`)} className={`px-5 py-2.5 text-label-md rounded-[16px] flex items-center gap-1.5 cursor-pointer ${t.btnClass}`}>
                <span>{t.btn}</span>
                <Icon name={t.btnIcon} className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
