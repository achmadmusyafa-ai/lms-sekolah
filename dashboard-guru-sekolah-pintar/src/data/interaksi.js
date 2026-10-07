export const interaksiUser = {
  name: 'Budi (Siswa)',
  teacher: 'Ibu Nurul',
  xp: '580 XP',
  level: 'Lv.8',
}

export const interaksiNav = [
  { icon: 'forum', label: 'Forum Diskusi', href: '#forum', active: true },
  { icon: 'videocam', label: 'Sesi Tatap Maya', href: '#live-session', active: false },
  { icon: 'dashboard_customize', label: 'Papan Ide & Mading', href: '#mading', active: false },
  { icon: 'support_agent', label: 'Tanya Guru Privat', href: '#tanya-guru', active: false },
]

export const channels = [
  { icon: 'eco', iconClass: 'text-secondary', label: '# Tematik Sains Cilik', count: '8', active: true },
  { icon: 'calculate', iconClass: 'text-primary', label: '# Teka-teki Angka (MTK)', count: '14', active: false },
  { icon: 'auto_stories', iconClass: 'text-amber-700', label: '# Cerita Fabel & Bahasa', count: '5', active: false },
  { icon: 'palette', iconClass: 'text-pink-600', label: '# Pojok Menggambar', count: '11', active: false },
  { icon: 'chat_bubble', iconClass: 'text-indigo-600', label: '# Tanya Bebas & PR', count: '19', active: false },
]

export const filterTabs = [
  { label: 'Semua Pertanyaan', active: true },
  { label: 'Dijawab Guru', active: false },
  { label: 'Paling Populer', active: false },
  { label: 'Pertanyaan Saya', active: false },
]
