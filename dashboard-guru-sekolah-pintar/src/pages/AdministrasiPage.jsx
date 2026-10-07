import { AdminHeader } from '../components/admin/AdminHeader.jsx'
import { AdminHero } from '../components/admin/AdminHero.jsx'
import { AdminKpi } from '../components/admin/AdminKpi.jsx'
import { AdminTabs } from '../components/admin/AdminTabs.jsx'
import { AdminUserTable } from '../components/admin/AdminUserTable.jsx'
import { AdminKurikulum } from '../components/admin/AdminKurikulum.jsx'
import { AdminStatsWidgets } from '../components/admin/AdminStatsWidgets.jsx'
import { AdminAgenda } from '../components/admin/AdminAgenda.jsx'
import { AdminAuditTrail } from '../components/admin/AdminAuditTrail.jsx'
import { AdminFooter } from '../components/admin/AdminFooter.jsx'

export function AdministrasiPage({ onToast }) {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <AdminHeader onAddUser={() => onToast('Form tambah pengguna dibuka.')} />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-6 space-y-6">
        <AdminHero onApprove={() => onToast('24 E-Rapor disetujui. Sisa 2 kelas.')} />
        <AdminKpi />
        <AdminTabs />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-6">
            <AdminUserTable onToast={onToast} />
            <AdminKurikulum onToast={onToast} />
          </div>
          <aside className="lg:col-span-4 space-y-6">
            <AdminStatsWidgets />
            <AdminAgenda />
            <AdminAuditTrail />
          </aside>
        </div>
      </main>
      <AdminFooter />
    </div>
  )
}
