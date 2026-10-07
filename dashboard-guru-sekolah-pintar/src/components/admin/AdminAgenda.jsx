import { Icon } from '../Icon.jsx'

export function AdminAgenda() {
  return (
    <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-headline-sm text-on-surface font-bold flex items-center gap-2">
          <Icon name="campaign" className="text-secondary" />
          Agenda Penting
        </h3>
        <button className="text-label-sm text-primary font-bold hover:underline">Lihat Kalender</button>
      </div>
      <div className="space-y-3">
        <div className="p-3.5 rounded-2xl border-l-4 border-l-primary bg-surface-container-low border border-outline-variant/50 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              <Icon name="schedule" className="text-sm" />
              Kamis, 14 Nov • 13.00 WIB
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary-container text-on-primary-container">Wajib</span>
          </div>
          <div className="font-bold text-on-surface text-body-md">Rapat Pleno Dewan Guru &amp; Verifikasi Rapor</div>
          <p className="text-xs text-on-surface-variant">Ruang Multimedia • Pembahasan kelayakan kenaikan capaian fase.</p>
        </div>
        <div className="p-3.5 rounded-2xl border-l-4 border-l-secondary bg-surface-container-low border border-outline-variant/50 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-secondary flex items-center gap-1">
              <Icon name="schedule" className="text-sm" />
              Senin, 18 Nov • 08.00 WIB
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-secondary-fixed text-on-secondary-fixed">Dinas</span>
          </div>
          <div className="font-bold text-on-surface text-body-md">Supervisi Akademik Pengawas Sekolah</div>
          <p className="text-xs text-on-surface-variant">Monitoring keterlaksanaan modul ajar Kurikulum Merdeka.</p>
        </div>
        <div className="p-3.5 rounded-2xl border-l-4 border-l-error bg-surface-container-low border border-outline-variant/50 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-error flex items-center gap-1">
              <Icon name="alarm" className="text-sm" />
              Batas Akhir: 20 Nov 2024
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-error-container text-on-error-container">Deadline</span>
          </div>
          <div className="font-bold text-on-surface text-body-md">Finalisasi Nilai PTS &amp; Portofolio P5</div>
          <p className="text-xs text-on-surface-variant">Semua guru mapel wajib mengunci nilai di sistem.</p>
        </div>
      </div>
    </div>
  )
}
