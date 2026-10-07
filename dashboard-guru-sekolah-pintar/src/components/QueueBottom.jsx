import { Icon } from './Icon.jsx'

const rows = [
  {
    name: 'Dimas Arya',
    badge: 'B. Indonesia',
    badgeClass: 'bg-surface-container-high text-on-surface',
    desc: 'Menulis Paragraf Deskripsi',
    status: 'Status: Menunggu Koreksi',
    statusClass: 'font-bold text-outline',
    ring: 'ring-outline-variant',
    btn: 'Koreksi Esai',
    btnClass: 'bg-surface-container-high hover:bg-surface-dim text-on-surface',
    btnIcon: 'edit_note',
  },
  {
    name: 'Zahra Putri',
    badge: 'SBdP',
    badgeClass: 'bg-tertiary-container/30 text-on-tertiary',
    desc: 'Foto Kolase Bahan Alam',
    status: 'Dikumpulkan 10:02',
    statusClass: 'font-semibold text-secondary',
    ring: 'ring-tertiary-container',
    btn: 'Beri Nilai & Komentar',
    btnClass: 'bg-primary-container hover:bg-primary-fixed text-on-primary-container stamp-yellow',
    btnIcon: 'rate_review',
  },
]

export function QueueBottom() {
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
            <button className={`px-4 py-2 rounded-xl text-label-sm font-bold flex items-center gap-1.5 transition-colors ${r.btnClass}`}>
              <Icon name={r.btnIcon} className="text-base" />
              {r.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
