import { Icon } from '../Icon.jsx'

const logs = [
  { icon: 'edit_note', bg: 'bg-secondary-fixed text-on-secondary-fixed', html: '<strong>Ibu Nurul Hidayah</strong> memperbarui <strong>28 nilai LKS IPAS</strong> kelas 4B.', time: '8 menit yang lalu' },
  { icon: 'how_to_reg', bg: 'bg-primary-container text-on-primary-container', html: '<strong>Admin Sistem</strong> menyetujui mutasi masuk <strong>Rian Firmansyah (Kelas 3A)</strong>.', time: '25 menit yang lalu' },
  { icon: 'upload_file', bg: 'bg-tertiary-fixed text-on-tertiary-fixed', html: '<strong>Pak Hendra Wijaya</strong> mengunggah 20 butir <strong>Bank Soal Matematika</strong>.', time: '1 jam yang lalu' },
]

export function AdminAuditTrail() {
  return (
    <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-headline-sm text-on-surface font-bold flex items-center gap-2">
          <Icon name="history" className="text-primary" />
          Audit Trail Terkini
        </h3>
        <span className="text-xs text-on-surface-variant">Live</span>
      </div>
      <div className="space-y-3 text-body-sm">
        {logs.map((l, i) => (
          <div key={i} className={`flex items-start gap-3 ${i < logs.length - 1 ? 'pb-3 border-b border-outline-variant/40' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${l.bg}`}>
              <Icon name={l.icon} className="text-base" />
            </div>
            <div>
              <p className="text-on-surface leading-snug" dangerouslySetInnerHTML={{ __html: l.html }} />
              <span className="text-xs text-on-surface-variant">{l.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
