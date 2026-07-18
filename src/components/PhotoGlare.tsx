import GlareHover from './GlareHover'

interface PhotoGlareProps {
  src: string
  alt: string
  className?: string
  rounded?: string
}

/* Wraps an academy photo with the gold glare-sweep hover effect. `className`
   carries the frame's aspect ratio, border and shadow classes (no rounded-*
   utility — pass the radius via `rounded` so it stays in sync with the
   glare layer, which clips to this same radius). */
export default function PhotoGlare({
  src,
  alt,
  className = '',
  rounded = '1rem',
}: PhotoGlareProps) {
  return (
    <GlareHover
      width="100%"
      height="auto"
      background="transparent"
      borderColor="transparent"
      borderRadius={rounded}
      glareColor="#e6b93c"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={220}
      transitionDuration={700}
      className={className}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </GlareHover>
  )
}
