import { Icon } from '../Icon.jsx'

export function AdminHero({ onApprove }) {
  return (
    <div className="bg-gradient-to-r from-surface-container-lowest via-surface-container-low to-primary-fixed/20 border border-outline-variant rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm">
          <Icon name="dashboard_customize" className="text-base" />
          Tata Kelola &amp; Pengawasan Akademik Terpadu
        </div>
        <h1 className="text-headline-lg md:text-display-hero text-on-surface font-extrabold tracking-tight">
          Dashboard Monitoring &amp; Tata Kelola SD Juara Bangsa
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-3xl">
          Selamat pagi, Bapak Kepala Sekolah. Seluruh ekosistem pembelajaran berjalan optimal
          dengan sinkronisasi data kurikulum merdeka sebesar 98.4% tercatat hari ini.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onApprove}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-on-secondary text-label-lg tactile-btn-secondary"
        >
          <Icon name="assignment_turned_in" className="text-base" fill />
          <span>Setujui E-Rapor (24/26)</span>
        </button>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest border-2 border-outline-variant text-on-surface text-label-lg hover:bg-surface-container">
          <Icon name="settings" className="text-base" />
          <span>Pengaturan Sekolah</span>
        </button>
      </div>
    </div>
  )
}
