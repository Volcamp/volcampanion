import { useState } from 'react'
import type { Speaker } from '../data/types'

const FALLBACK = `${import.meta.env.BASE_URL}img/defaultProfile.png`

/** Local optimized avatars are stored as BASE-relative paths; remote URLs stay absolute. */
function resolvePhoto(photoUrl: string): string {
  if (!photoUrl) return FALLBACK
  return photoUrl.startsWith('http') ? photoUrl : `${import.meta.env.BASE_URL}${photoUrl}`
}

export function SpeakerAvatar({ speaker, size = 48 }: { speaker: Speaker; size?: number }) {
  const [src, setSrc] = useState(resolvePhoto(speaker.photoUrl))
  return (
    <img
      className="avatar"
      src={src}
      alt={speaker.name}
      width={size}
      height={size}
      loading="lazy"
      onError={() => src !== FALLBACK && setSrc(FALLBACK)}
      style={{ width: size, height: size }}
    />
  )
}
