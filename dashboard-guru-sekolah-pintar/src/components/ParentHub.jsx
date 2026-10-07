import { Icon } from './Icon.jsx'

export function ParentHub() {
  return (
    <section
      aria-labelledby="parents-hub-heading"
      className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 shadow-sm space-y-4"
    >
      <div className="flex items-center justify-between pb-3 border-b border-surface-container">
        <div>
          <h2 className="text-title-md font-bold text-on-surface flex items-center gap-2" id="parents-hub-heading">
            <Icon name="mark_chat_unread" className="text-secondary" />
            Buku Penghubung Ortu
          </h2>
          <span className="text-label-sm text-outline">3 Pesan Baru dari Wali Murid</span>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
      </div>

      <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-label-sm">
              IB
            </div>
            <div>
              <h3 className="text-label-md font-bold text-on-surface">Ibu Dewi (Ibunda Budi Pratama)</h3>
              <span className="text-label-sm text-outline">Hari ini, 08:12 WIB</span>
            </div>
          </div>
          <span className="text-label-sm text-primary font-bold bg-primary-container/30 px-2 py-0.5 rounded shrink-0">
            Konsultasi
          </span>
        </div>
        <p className="text-body-sm text-on-surface-variant">
          &ldquo;Selamat pagi Ibu Nurul. Budi sangat antusias dengan proyek IPA daur hidup kupu-kupu.
          Mohon izin konsultasi belajar hari Jumat setelah jam sekolah ya Bu...&rdquo;
        </p>
        <div className="pt-1 flex items-center gap-2 justify-end">
          <button className="px-3 py-1 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/40 rounded-lg text-label-sm font-bold text-on-surface transition-colors">
            Tandai Dibaca
          </button>
          <button className="px-3 py-1 bg-secondary text-on-secondary rounded-lg text-label-sm font-bold flex items-center gap-1 hover:bg-secondary-fixed-dim transition-colors">
            <Icon name="reply" className="text-sm" /> Balas Pesan
          </button>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-surface-bright border border-outline-variant/30 space-y-1.5 opacity-90">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-sm">
              PA
            </div>
            <div>
              <h3 className="text-label-md font-bold text-on-surface">Pak Hendra (Ayah Dimas Arya)</h3>
              <span className="text-label-sm text-outline">Kemarin, 16:40 WIB</span>
            </div>
          </div>
          <span className="text-label-sm text-outline bg-surface-container px-2 py-0.5 rounded shrink-0">
            Izin Sakit
          </span>
        </div>
        <p className="text-body-sm text-on-surface-variant line-clamp-1">
          &ldquo;Terima kasih Bu Nurul, surat dokter untuk Dimas sudah kami lampirkan di formulir
          presensi...&rdquo;
        </p>
      </div>

      <a href="#" onClick={(e) => e.preventDefault()} className="block text-center text-label-md text-secondary font-bold hover:underline pt-1">
        Buka Kotak Pesan Komunikasi Lengkap →
      </a>
    </section>
  )
}
