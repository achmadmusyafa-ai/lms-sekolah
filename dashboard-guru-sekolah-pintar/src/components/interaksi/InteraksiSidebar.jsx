import { useState } from 'react'
import { channels } from '../../data/interaksi.js'
import { Icon } from '../Icon.jsx'

export function InteraksiSidebar({ onToast }) {
  const [active, setActive] = useState(0)
  return (
    <aside className="lg:col-span-3 space-y-4">
      <button onClick={() => onToast('Form pertanyaan baru dibuka.')} className="w-full tactile-btn-secondary bg-[#7EC151] hover:bg-secondary text-white py-3.5 px-4 rounded-2xl font-bold text-label-lg flex items-center justify-center gap-2 shadow-md">
        <Icon name="edit" className="text-xl" fill />
        + Buat Pertanyaan Baru
      </button>
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-4 space-y-2 shadow-sm">
        <div className="flex items-center justify-between px-2 pb-2 border-b border-outline-variant/20">
          <span className="text-label-md text-on-surface-variant uppercase tracking-wider">Saluran Kelas 4B</span>
          <Icon name="tag" className="text-base text-on-surface-variant" />
        </div>
        <nav className="space-y-1">
          {channels.map((c, i) => (
            <button key={c.label} onClick={() => setActive(i)}
              className={i === active ? 'w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-secondary-container/50 text-on-secondary-container font-bold text-label-md' : 'w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low text-label-md'}>
              <span className="flex items-center gap-2">
                <Icon name={c.icon} className={`text-base ${c.iconClass}`} fill={i === active} />
                <span>{c.label}</span>
              </span>
              {i === active
                ? <span className="bg-secondary text-white text-label-sm px-2 py-0.5 rounded-full">{c.count}</span>
                : <span className="text-label-sm px-1.5">{c.count}</span>}
            </button>
          ))}
        </nav>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl border-2 border-primary-container/70 p-4 space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-title-md">
          <Icon name="verified" className="text-primary-container text-2xl" fill />
          <span>Aturan Ramah Anak</span>
        </div>
        <p className="text-body-sm text-on-surface-variant leading-relaxed">
          Gunakan bahasa yang sopan, dukung teman yang bertanya, dan kumpulkan <strong>Bintang Kebaikan (+10 XP)</strong> untuk setiap tanggapan positif!
        </p>
        <div className="flex items-center gap-2 text-label-sm text-secondary font-bold">
          <Icon name="volunteer_activism" className="text-base" fill />
          <span>Saling Menghargai &amp; Berbagi</span>
        </div>
      </div>
    </aside>
  )
}
