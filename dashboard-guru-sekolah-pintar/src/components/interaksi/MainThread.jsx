import { useState } from 'react'
import { TeacherAnswer } from './TeacherAnswer.jsx'
import { PeerResponses } from './PeerResponses.jsx'
import { ReplyBox } from './ReplyBox.jsx'
import { Icon } from '../Icon.jsx'

export function MainThread({ onToast }) {
  const [stars, setStars] = useState(18)
  const [thumbs, setThumbs] = useState(24)
  return (
    <article className="bg-surface-container-lowest rounded-3xl border-2 border-outline-variant/40 p-5 md:p-6 shadow-sm space-y-5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container font-bold flex-shrink-0">B</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-title-md text-on-surface font-bold">Budi Pratama</span>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-container/40 text-on-primary-container text-label-sm font-bold">Penjelajah Lv.8</span>
            </div>
            <p className="text-body-sm text-on-surface-variant">Kelas 4B • 25 Menit lalu di #Tematik Sains</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-label-sm flex items-center gap-1">
          <Icon name="bug_report" className="text-sm" />
          Metamorfosis
        </span>
      </div>
      <div className="space-y-3">
        <h2 className="text-headline-sm text-on-surface font-bold leading-snug">
          &quot;Bagaimana cara kepompong bisa berubah jadi kupu-kupu yang warnanya cantik sekali?&quot; 🐛✨🦋
        </h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Halo Ibu Guru dan teman-teman! Kemarin sore aku lihat ulat pohon belimbing mulai membungkus dirinya jadi kepompong daun. Apa yang terjadi di dalam sana sampai bisa tumbuh sayap dan pola warna warni yang indah?
        </p>
        <div className="rounded-2xl overflow-hidden border border-outline-variant/40 bg-secondary-container/20 p-6 text-center">
          <div className="text-5xl">🐛➡️🦋</div>
          <p className="text-body-sm text-on-surface-variant mt-2">Foto kepompong daun belimbing di halaman rumah Budi</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-outline-variant/20">
        <div className="flex items-center gap-2">
          <button onClick={() => { setStars((s) => s + 1); onToast('Memberi Bintang!'); }} className="px-2.5 py-1 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-label-sm flex items-center gap-1.5">
            <span>⭐</span><span className="font-bold">{stars} Bintang</span>
          </button>
          <button onClick={() => { setThumbs((s) => s + 1); onToast('Memberi Jempol!'); }} className="px-2.5 py-1 rounded-xl bg-secondary-container/40 hover:bg-secondary-container/70 border border-secondary-container text-label-sm flex items-center gap-1.5">
            <span>👍</span><span className="font-bold">{thumbs} Jempol</span>
          </button>
          <button onClick={() => onToast('Keren!')} className="px-2.5 py-1 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 text-label-sm flex items-center gap-1.5">
            <span>🦋</span><span className="font-bold">12 Keren</span>
          </button>
        </div>
        <div className="text-body-sm text-on-surface-variant flex items-center gap-1">
          <Icon name="comment" className="text-base" />
          <span>4 Tanggapan Kelas</span>
        </div>
      </div>
      <TeacherAnswer onToast={onToast} />
      <PeerResponses onToast={onToast} />
      <ReplyBox onToast={onToast} />
    </article>
  )
}
