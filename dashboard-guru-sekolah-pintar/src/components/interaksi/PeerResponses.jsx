import { useState } from 'react'
import { Icon } from '../Icon.jsx'

const peers = [
  { initial: 'S', bg: 'border-secondary-container', name: 'Siti Aisyah', time: '10 Menit lalu', text: 'Wah keren banget fotonya Bud! Jangan lupa nanti pas keluar dari kepompong difoto lagi yaa, penasaran sayapnya warna apa! 🌸', likes: 4 },
  { initial: 'D', bg: 'border-primary-container', name: 'Dimas Arya', time: '5 Menit lalu', text: 'Aku kemarin baca di buku sains komik, kalau sayapnya basah harus dikeringkan dulu sebelum terbang! Nanti kita tanya Ibu guru lagi ya! 🚀', likes: 6 },
]

export function PeerResponses({ onToast }) {
  const [liked, setLiked] = useState({})
  return (
    <div className="space-y-3 pt-2">
      {peers.map((p) => (
        <div key={p.name} className="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
          <div className={`w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center font-bold border ${p.bg} flex-shrink-0`}>{p.initial}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-label-md font-bold text-on-surface">{p.name}</span>
                <span className="text-label-sm text-on-surface-variant">Kelas 4B</span>
              </div>
              <span className="text-body-sm text-on-surface-variant/70">{p.time}</span>
            </div>
            <p className="text-body-sm text-on-surface-variant mt-1">{p.text}</p>
            <div className="flex items-center gap-3 mt-2 text-label-sm text-on-surface-variant">
              <button onClick={() => { setLiked((s) => ({ ...s, [p.name]: !s[p.name] })); onToast('Menyukai tanggapan.'); }} className="hover:text-primary flex items-center gap-1">
                <Icon name="thumb_up" className="text-sm" />
                {p.likes + (liked[p.name] ? 1 : 0)}
              </button>
              <button onClick={() => onToast('Membalas tanggapan.')} className="hover:underline">Balas</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
