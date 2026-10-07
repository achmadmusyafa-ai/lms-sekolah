import { useState } from 'react'
import { filterTabs } from '../../data/interaksi.js'
import { MainThread } from './MainThread.jsx'
import { Icon } from '../Icon.jsx'

export function ThreadSection({ onToast }) {
  const [tab, setTab] = useState(0)
  return (
    <section className="lg:col-span-6 space-y-5">
      <div className="bg-surface-container-lowest rounded-2xl p-2 border border-outline-variant/40 flex items-center gap-1 shadow-sm overflow-x-auto">
        {filterTabs.map((t, i) => (
          <button key={t.label} onClick={() => setTab(i)}
            className={i === tab ? 'px-3.5 py-1.5 rounded-xl bg-primary-container text-on-primary-container font-bold text-label-sm whitespace-nowrap shadow-sm' : 'px-3 py-1.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low text-label-sm whitespace-nowrap'}>
            {t.label}
          </button>
        ))}
      </div>
      <MainThread onToast={onToast} />
      <article className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-5 shadow-sm space-y-3 hover:border-primary-container/80 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container flex-shrink-0">S</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-title-md text-on-surface font-bold">Siti Aisyah</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container text-label-sm font-semibold">Juara MTK Cilik</span>
            </div>
            <p className="text-body-sm text-on-surface-variant">2 Jam lalu di #Teka-teki Angka</p>
          </div>
        </div>
        <h3 className="text-headline-sm text-on-surface font-bold">&quot;Trik cepat perkalian 9 pakai jari tangan! Ada yang mau coba bareng?&quot; 🖐️✨</h3>
        <p className="text-body-md text-on-surface-variant">Tadi waktu belajar PR, aku diajarin trik kalau 9 x 4 itu cukup tekuk jari ke-4, jadinya 3 jari di kiri dan 6 jari di kanan = 36! Ternyata gampang banget!</p>
        <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20 text-body-sm">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-label-sm font-bold">👍 28 Jempol</span>
            <span className="px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-label-sm font-bold">💡 14 Ide Cemerlang</span>
          </div>
          <button onClick={() => onToast('Membuka 12 tanggapan.')} className="text-primary font-bold hover:underline flex items-center gap-1 text-label-sm">
            <span>Lihat 12 Tanggapan</span>
            <Icon name="chevron_right" className="text-sm" />
          </button>
        </div>
      </article>
    </section>
  )
}
