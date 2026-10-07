import { Icon } from './Icon.jsx'

export function NilaiCard() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-5 tactile-card flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-label-sm font-bold text-outline uppercase tracking-wider block">
            Rata-rata Nilai Kuis
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-lg font-extrabold text-secondary">88.5</span>
            <span className="text-label-sm font-bold text-secondary bg-secondary-container px-2 py-0.5 rounded-full">
              +4.2%
            </span>
          </div>
        </div>
        <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <Icon name="insights" />
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-surface-container">
        <div className="flex items-center justify-between text-body-sm">
          <span className="text-on-surface-variant">Tren Mingguan</span>
          <span className="text-label-sm text-secondary font-bold">Kategori Sangat Baik</span>
        </div>
        <div className="h-6 w-full mt-1.5 flex items-end gap-1.5">
          <div className="flex-1 bg-secondary-container rounded-t h-3"></div>
          <div className="flex-1 bg-secondary-container rounded-t h-4"></div>
          <div className="flex-1 bg-secondary-container rounded-t h-3.5"></div>
          <div className="flex-1 bg-secondary-container rounded-t h-5"></div>
          <div className="flex-1 bg-secondary rounded-t h-6"></div>
        </div>
      </div>
    </div>
  )
}

export function MateriCard() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-5 tactile-card flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-label-sm font-bold text-outline uppercase tracking-wider block">
            Materi Aktif Terunggah
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-lg font-extrabold text-on-surface">32</span>
            <span className="text-label-md font-bold text-outline">Modul</span>
          </div>
        </div>
        <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-on-surface">
          <Icon name="library_books" fill />
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-surface-container">
        <p className="text-body-sm text-on-surface-variant flex items-center gap-1.5">
          <Icon name="smart_display" className="text-base text-secondary" />
          <strong>14 Video Pembelajaran</strong> aktif
        </p>
        <span className="text-label-sm text-outline mt-1.5 block">
          Kurikulum Merdeka Edisi 2024
        </span>
      </div>
    </div>
  )
}
