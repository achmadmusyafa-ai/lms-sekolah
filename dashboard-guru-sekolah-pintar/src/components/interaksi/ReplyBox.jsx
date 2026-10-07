import { useState } from 'react'
import { Icon } from '../Icon.jsx'

export function ReplyBox({ onToast }) {
  const [text, setText] = useState('')
  function send() {
    if (!text.trim()) { onToast('Tulis tanggapan dulu ya.'); return }
    onToast('Balasan terkirim! +10 XP Bintang Kebaikan.')
    setText('')
  }
  return (
    <div className="pt-3 border-t border-outline-variant/30">
      <div className="bg-surface-container-low rounded-2xl p-3 border-2 border-outline-variant/40 focus-within:border-primary-container transition-all space-y-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)}
          className="w-full bg-transparent border-0 p-1 text-on-surface text-body-md resize-none focus:ring-0"
          placeholder="Tulis tanggapan atau pertanyaanmu di sini dengan kata-kata yang baik ya..." rows="2"></textarea>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1">
            <button onClick={() => onToast('Pilih foto tugas.')} className="p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-primary" title="Tambah Foto Tugas">
              <Icon name="add_photo_alternate" className="text-lg" />
            </button>
            <button onClick={() => onToast('Pilih stiker sekolah.')} className="p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-amber-600" title="Stiker">
              <Icon name="add_reaction" className="text-lg" />
            </button>
            <button onClick={() => onToast('Merekam suara...')} className="p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-secondary" title="Rekam Suara">
              <Icon name="mic" className="text-lg" />
            </button>
          </div>
          <button onClick={send} className="tactile-btn-primary bg-primary-container hover:bg-primary-fixed text-on-primary-container font-bold px-4 py-2 rounded-xl text-label-md flex items-center gap-1.5 shadow-sm">
            <span>Kirim Balasan</span>
            <Icon name="send" className="text-base" />
          </button>
        </div>
      </div>
    </div>
  )
}
