import Link from 'next/link'
import { CONTACT_EMAIL, GITHUB_URL, ISSUES_URL } from './links'

const columns = [
  {
    title: 'Docs',
    links: [
      { label: 'Introduction', href: '/docs' },
      { label: 'Guides', href: '/docs/guides/theme-pack' },
      { label: 'File formats', href: '/docs/formats/ovratheme' },
      { label: 'Changelog', href: '/docs/changelog' }
    ]
  },
  {
    title: 'Platform',
    links: [
      { label: 'Web Extensions', href: '/docs/extensions' },
      { label: 'Ovra plugins', href: '/docs/plugins' },
      { label: 'Automation', href: '/docs/automation' },
      { label: 'Roadmap', href: '/docs/roadmap' }
    ]
  },
  {
    title: 'Project',
    links: [
      { label: 'Source code', href: GITHUB_URL },
      { label: 'Contributing', href: '/docs/contributing' },
      { label: 'Report a problem', href: ISSUES_URL },
      { label: 'Security', href: '/docs/security' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Use', href: '/legal/terms' },
      { label: 'Open-source licenses', href: '/legal/licenses' },
      { label: 'Contact', href: `mailto:${CONTACT_EMAIL}` }
    ]
  }
]

export function SiteFooter() {
  return (
    <div className="ovra-footer">
      <div className="ovra-footer-brand">
        <span className="ovra-logo">
          <img src="/ovra-mark.png" alt="" width={20} height={20} />
          <span className="ovra-logo-name">Ovra</span>
        </span>
        <p>Docs for building with and on Ovra.</p>
      </div>
      <nav className="ovra-footer-columns" aria-label="Footer">
        {columns.map((column) => (
          <div key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <p className="ovra-footer-copy">
        © {new Date().getFullYear()} Ovra. Made by Kilian Balaguer in Marrakech.
      </p>
    </div>
  )
}
