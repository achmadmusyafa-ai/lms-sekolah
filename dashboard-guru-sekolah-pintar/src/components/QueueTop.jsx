import { Icon } from './Icon.jsx'

const rows = [
  {
    name: 'Budi Pratama',
    badge: 'IPA Tematik',
    badgeClass: 'bg-tertiary-container/50 text-on-tertiary-container',
    desc: 'LKS: Daur Hidup Kupu-kupu & Katak',
    status: 'Dikumpulkan 09:15',
    statusClass: 'font-semibold text-secondary',
    ring: 'ring-primary-container',
    btn: 'Beri Nilai & Komentar',
    btnClass: 'bg-primary-container hover:bg-primary-fixed text-on-primary-container stamp-yellow',
    btnIcon: 'rate_review',
  },
  {
    name: 'Siti Aisyah',
    badge: 'Matematika',
    badgeClass: 'bg-primary-container/40 text-on-primary-container',
    desc: 'Kuis Pecahan Senilai',
    status: 'Skor Otomatis 100/100',
    statusClass: 'font-bold text-secondary',
    ring: 'ring-secondary-container',
    btn: 'Verifikasi',
    btnClass: 'bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container stamp-green',
    btnIcon: 'verified',
  },
]

export function QueueTop() {
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div
          key={r.name}
          className="p-4 rounded-2xl border border-outline-variant/40 bg-surface-bright hover:bg-surface-container-low transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center ring-2 ${r.ring} text-on-surface font-bold`}>
              {r.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-title-md font-bold text-on-surface">{r.name}</h3>
                <span className={`px-2 py-0.5 rounded-full text-label-sm font-bold ${r.badgeClass}`}>
                  {r.badge}
                </span>
              </div>
              <p className="text-body-sm text-on-surface-variant">
                {r.desc} • <span className={r.statusClass}>{r.status}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button className={`px-4 py-2 rounded-xl text-label-sm font-bold flex items-center gap-1.5 transition-transform ${r.btnClass}`}>
              <Icon name={r.btnIcon} className="text-base" fill />
              {r.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
