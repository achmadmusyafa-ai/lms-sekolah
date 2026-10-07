import { Icon } from '../Icon.jsx'

const ranks = [
  { n: '1', name: 'Siti Aisyah', info: '14 Bantuan Kebaikan', initial: 'S', top: true },
  { n: '2', name: 'Budi Pratama (Kamu)', info: '11 Bantuan Kebaikan', initial: 'B', top: false },
  { n: '3', name: 'Dimas Arya', info: '9 Bantuan Kebaikan', initial: 'D', top: false },
]

const events = [
  { day: 'Jumat, 15 Okt', time: '08.30 WIB', dayClass: 'text-secondary', title: 'Seni Rupa: Melipat Kertas Origami Hewan Laut 🐬', desc: 'Siapkan 3 lembar kertas origami warna bebas' },
  { day: 'Senin, 18 Okt', time: '09.00 WIB', dayClass: 'text-primary', title: 'Matematika Seru: Tebak Sudut Jam Dinding ⏰', desc: 'Bersama Pak Hendra & Ibu Nurul' },
]

export function InteraksiWidgets({ onToast }) {
  return (
    <aside className="lg:col-span-3 space-y-5">
      <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
              <Icon name="military_tech" className="text-lg" fill />
            </div>
            <h3 className="text-title-md font-bold text-on-surface">Juara Keaktifan</h3>
          </div>
          <span className="text-label-sm text-secondary font-bold">Pekan Ini</span>
        </div>
        <div className="space-y-3">
          {ranks.map((r) => (
            <div key={r.n} className={r.top ? 'flex items-center justify-between p-2.5 rounded-2xl bg-amber-50 border border-primary-container/60' : 'flex items-center justify-between p-2.5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30'}>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container text-label-sm font-extrabold flex items-center justify-center">{r.n}</span>
                <div className="w-8 h-8 rounded-xl bg-surface-container flex items-center justify-center font-bold border">{r.initial}</div>
                <div>
                  <p className="text-label-md font-bold text-on-surface truncate">{r.name}</p>
                  <p className="text-body-sm text-on-surface-variant">{r.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-secondary-container/40 rounded-2xl p-3 border border-secondary-container/60 text-center">
          <p className="text-body-sm text-on-secondary-container">
            Bantu 3 teman lagi untuk raih lencana <strong>&quot;Pahlawan Kelas 4B&quot;</strong>! 🛡️✨
          </p>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
            <Icon name="event" className="text-lg" />
          </div>
          <h3 className="text-title-md font-bold text-on-surface">Jadwal Tatap Maya</h3>
        </div>
        <div className="space-y-3">
          {events.map((e) => (
            <div key={e.title} className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-1">
              <div className="flex items-center justify-between text-label-sm">
                <span className={`font-bold ${e.dayClass}`}>{e.day}</span>
                <span className="text-on-surface-variant">{e.time}</span>
              </div>
              <p className="text-label-md font-bold text-on-surface">{e.title}</p>
              <p className="text-body-sm text-on-surface-variant">{e.desc}</p>
            </div>
          ))}
        </div>
        <button onClick={() => onToast('Membuka kalender akademik.')} className="w-full py-2 text-center text-label-sm font-bold text-primary hover:bg-surface-container rounded-xl">
          Lihat Kalender Akademik Lengkap →
        </button>
      </div>

      <div className="bg-gradient-to-br from-surface-container to-surface-container-high/40 rounded-3xl border border-outline-variant/40 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Icon name="support" className="text-primary text-xl" />
          <span className="text-title-md font-bold text-on-surface">Pusat Bantuan Cepat</span>
        </div>
        <p className="text-body-sm text-on-surface-variant leading-relaxed">
          Suara tidak keluar atau kamera macet saat sesi tatap maya? Ayah &amp; Bunda bisa hubungi teknisi sekolah:
        </p>
        <button onClick={() => onToast('Menghubungi teknisi sekolah.')} className="tactile-btn-primary w-full bg-primary-container hover:bg-primary-fixed text-on-primary-container px-3.5 py-2.5 rounded-xl font-bold text-label-md flex items-center justify-center gap-2">
          <Icon name="call" className="text-base" />
          <span>Bantuan Kendala Live Room</span>
        </button>
      </div>
    </aside>
  )
}
