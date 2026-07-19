import type { Speaker } from '../data/types'

function twitterUrl(handle: string) {
  return handle.startsWith('http') ? handle : `https://x.com/${handle.replace(/^@/, '')}`
}
function githubUrl(handle: string) {
  return handle.startsWith('http') ? handle : `https://github.com/${handle}`
}
function linkedinUrl(handle: string) {
  return handle.startsWith('http') ? handle : `https://www.linkedin.com/in/${handle}`
}

export function SocialLinks({ speaker }: { speaker: Speaker }) {
  const links: { label: string; url: string }[] = []
  if (speaker.twitter) links.push({ label: 'X / Twitter', url: twitterUrl(speaker.twitter) })
  if (speaker.github) links.push({ label: 'GitHub', url: githubUrl(speaker.github) })
  if (speaker.linkedin) links.push({ label: 'LinkedIn', url: linkedinUrl(speaker.linkedin) })
  if (!links.length) return null

  return (
    <div className="social-links">
      {links.map((l) => (
        <a key={l.label} className="chip" href={l.url} target="_blank" rel="noopener noreferrer">
          {l.label} ↗
        </a>
      ))}
    </div>
  )
}
