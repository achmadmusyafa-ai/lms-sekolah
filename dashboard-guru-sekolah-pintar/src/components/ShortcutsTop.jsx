import { Icon } from './Icon.jsx'

const shortcuts = [
  {
    icon: 'upload_file',
    iconBg: 'bg-primary-container text-on-primary-container stamp-yellow',
    title: 'Unggah Materi Ajar',
    desc: 'Upload modul PDF, video animasi, link YouTube edukasi, dan slide PPT materi tematik.',
    cta: 'Buka Modul Materi',
    ctaColor: 'text-primary',
    hoverTitle: 'group-hover:text-primary',
    hoverBorder: 'hover:border-primary',
  },
  {
    icon: 'assignment_add',
    iconBg: 'bg-secondary-container text-on-secondary-container stamp-green',
    title: 'Pembuat Tugas & Penilaian',
    desc: 'Buat LKS Digital, Kuis Pilihan Ganda Otomatis, dan Tugas Esai dengan rubrik penilaian.',
    cta: 'Rancang Penilaian',
    ctaColor: 'text-secondary',
    hoverTitle: 'group-hover:text-secondary',
    hoverBorder: 'hover:border-secondary',
  },
]

export function ShortcutsTop() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {shortcuts.map((s) => (
        <div
          key={s.title}
          className={`bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-5 tactile-card flex flex-col justify-between group ${s.hoverBorder} transition-all`}
        >
          <div className="space-y-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.iconBg}`}>
              <Icon name={s.icon} className="text-2xl" />
            </div>
            <div>
              <h3 className={`text-title-md font-bold text-on-surface ${s.hoverTitle} transition-colors`}>
                {s.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">{s.desc}</p>
            </div>
          </div>
          <div className={`mt-4 pt-3 flex items-center justify-between text-label-md font-bold ${s.ctaColor}`}>
            <span>{s.cta}</span>
            <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      ))}
    </div>
  )
}
