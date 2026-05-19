const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function IconCoroplast() {
  return (
    <svg {...props}><rect x="2" y="5" width="20" height="14" rx="1.5" /><line x1="2" y1="9" x2="22" y2="9" /><line x1="7" y1="5" x2="7" y2="19" /></svg>
  )
}

export function IconAluminum() {
  return (
    <svg {...props}><rect x="3" y="4" width="18" height="16" rx="1" /><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /><line x1="8" y1="8" x2="8" y2="16" /></svg>
  )
}

export function IconBanner() {
  return (
    <svg {...props}><path d="M4 4h16v10H4z" /><path d="M4 14l2 4M20 14l-2 4" /><line x1="4" y1="4" x2="4" y2="20" /><line x1="20" y1="4" x2="20" y2="20" /></svg>
  )
}

export function IconSticker() {
  return (
    <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5A3.5 3.5 0 0 0 12 12H8.5" /><path d="M12 12v3.5" /></svg>
  )
}

export function IconCustom() {
  return (
    <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
  )
}

export function IconBulk() {
  return (
    <svg {...props}><rect x="2" y="14" width="8" height="7" rx="1" /><rect x="9" y="14" width="13" height="7" rx="1" /><rect x="5" y="7" width="14" height="7" rx="1" /><rect x="8" y="3" width="8" height="4" rx="1" /></svg>
  )
}
