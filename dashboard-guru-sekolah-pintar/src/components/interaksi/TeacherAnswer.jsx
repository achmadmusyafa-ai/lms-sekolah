import { Icon } from '../Icon.jsx'

export function TeacherAnswer({ onToast }) {
  return (
    <div className="bg-gradient-to-br from-amber-50/70 via-white to-secondary-container/20 rounded-2xl border-2 border-primary-container p-4 md:p-5 space-y-3 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-bold text-label-sm">
          <Icon name="workspace_premium" className="text-base" fill />
          Jawaban Terverifikasi Guru (Bintang Emas)
        </div>
        <span className="text-body-sm text-secondary font-semibold">15 Menit lalu</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold flex-shrink-0">N</div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-title-md font-bold text-on-surface">Ibu Nurul, S.Pd.</span>
            <span className="px-2 py-0.5 rounded-full bg-secondary text-white text-label-sm">Wali Kelas 4B</span>
          </div>
          <p className="text-body-sm text-on-surface-variant">Guru Tematik &amp; Pembimbing Sains Juara</p>
        </div>
      </div>
      <div className="text-body-md text-on-surface-variant space-y-2 leading-relaxed">
        <p>
          Pertanyaan yang luar biasa hebat dari Budi! 🌟 Di dalam kepompong (disebut fase <em>Pupa</em>), tubuh ulat sebenarnya sedang melakukan keajaiban biologi yang disebut <strong>Metamorfosis Sempurna</strong>.
        </p>
        <p>
          Sel-sel khusus bernama <em>Imaginal Discs</em> mulai merangkai bagian baru seperti sayap, antena lentur, dan mata majemuk. Warna-warni indah pada sayap kupu-kupu berasal dari sisik-sisik mikroskopis tipis yang memantulkan sinar matahari seperti prisma! Nanti jam 10.00 kita putar video animasinya di sesi tatap maya ya! 🔬✨
        </p>
      </div>
      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-outline-variant/30">
        <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0">
          <Icon name="play_arrow" fill />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-label-md font-bold text-on-surface truncate">Animasi Ringkas: Perjalanan Ulat Menjadi Kupu-Kupu (2 Menit)</p>
          <p className="text-body-sm text-on-surface-variant">Bahan Ajar Tematik IPA Kelas 4</p>
        </div>
        <button onClick={() => onToast('Membuka animasi metamorfosis.')} className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface text-label-sm hover:bg-surface-container-high">
          Buka
        </button>
      </div>
      <div className="pt-2 flex items-center justify-between text-body-sm">
        <span className="text-tertiary font-bold flex items-center gap-1">
          <Icon name="military_tech" className="text-base" fill />
          +50 XP &amp; Lencana Rasa Ingin Tahu Tinggi untuk Budi!
        </span>
        <button onClick={() => onToast('Balasan ke guru dikirim.')} className="text-primary hover:underline font-bold text-label-sm">Balas Guru</button>
      </div>
    </div>
  )
}
