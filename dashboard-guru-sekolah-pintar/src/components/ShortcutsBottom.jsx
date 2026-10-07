import { Icon } from './Icon.jsx'

const shortcuts = [
  {
    icon: 'how_to_reg',
    iconBg: 'bg-tertiary-container text-on-tertiary-container',
    title: 'Absensi Digital Kelas',
    desc: "Satu klik 'Semua Hadir' atau tandai Sakit/Izin/Alfa dengan rekap instan ke wali murid.",
    cta: 'Buka Lembar Presensi',
    ctaColor: 'text-tertiary',
    hoverTitle: 'group-hover:text-tertiary',
    hoverBorder: 'hover:border-tertiary',
  },
  {
    icon: 'folder_special',
    iconBg: 'bg-surface-container text-on-surface',
    title: 'Bank Soal & RPP',
    desc: 'Akses 150+ arsip bank soal kurikulum merdeka & modul ajar siap cetak/edit.',
    cta: 'Eksplorasi Bank Soal',
    ctaColor: 'text-on-surface',
    hoverTitle: 'group-hover:text-primary',
    hoverBorder: 'hover:border-outline',
  },
]

export function ShortcutsBottom() {
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
