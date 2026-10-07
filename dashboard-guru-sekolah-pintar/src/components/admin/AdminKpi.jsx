import { Icon } from '../Icon.jsx'

export function AdminKpi() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-surface-container-lowest rounded-2xl p-5 tactile-card-admin border border-outline-variant flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-label-md text-on-surface-variant">Total Pengguna Terdaftar</span>
            <div className="text-headline-md text-on-surface font-extrabold mt-1">838 Akun</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center">
            <Icon name="groups" className="text-2xl" fill />
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/50">
          <div className="text-body-sm text-on-surface-variant flex justify-between mb-1.5">
            <span>420 Siswa • 28 Guru • 390 Ortu</span>
          </div>
          <div className="flex items-center justify-between text-label-sm text-secondary font-bold">
            <span className="flex items-center gap-1">
              <Icon name="check_circle" className="text-sm" />
              Onboarding: 98.4%
            </span>
            <span className="text-on-surface-variant font-normal">Sinkron Dapodik</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-5 tactile-card-admin border border-outline-variant flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-label-md text-on-surface-variant">Tingkat Kehadiran (Bulan Ini)</span>
            <div className="text-headline-md text-secondary font-extrabold mt-1">96.8%</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
            <Icon name="co_present" className="text-2xl" fill />
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/50">
          <div className="flex items-center gap-1 text-label-sm text-tertiary font-bold mb-1">
            <Icon name="trending_up" className="text-base" />
            <span>+1.2% dari bulan lalu</span>
          </div>
          <div className="text-body-sm text-on-surface-variant">0 kasus absensi tanpa keterangan</div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-5 tactile-card-admin border border-outline-variant flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-label-md text-on-surface-variant">Rata-rata Capaian Akademik</span>
            <div className="text-headline-md text-primary font-extrabold mt-1">
              87.4 <span className="text-body-md text-on-surface-variant font-normal">/ 100</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
            <Icon name="military_tech" className="text-2xl" fill />
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/50">
          <div className="flex items-center justify-between text-body-sm mb-1">
            <span className="text-on-surface-variant">Fase A, B &amp; C Sangat Baik</span>
            <span className="text-label-sm text-secondary font-bold">Predikat A</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2">
            <div className="bg-brand-green h-2 rounded-full" style={{ width: '87.4%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-5 tactile-card-admin border border-outline-variant flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-label-md text-on-surface-variant">Status Kelengkapan E-Rapor</span>
            <div className="text-headline-md text-on-surface font-extrabold mt-1">92% Siap</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
            <Icon name="fact_check" className="text-2xl" fill />
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/50">
          <div className="flex items-center justify-between text-body-sm mb-1.5">
            <span className="text-on-surface-variant">24 dari 26 Kelas selesai</span>
            <span className="text-label-sm text-primary font-bold">Sisa 2 Kelas</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2">
            <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
