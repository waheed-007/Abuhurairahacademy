import { Image } from 'lucide-react'

/* Stand-in block for a real academy photo. `label` names the photo the
   academy should supply, e.g. "Quran class in session". */
interface PlaceholderProps {
  label: string
  className?: string
}

export default function Placeholder({ label, className = '' }: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50 text-brand-500 ${className}`}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <Image size={28} aria-hidden />
      <span className="px-4 text-center text-xs font-medium">{label}</span>
    </div>
  )
}
