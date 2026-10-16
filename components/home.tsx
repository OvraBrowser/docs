import Link from 'next/link'
import { GITHUB_URL } from './links'
import { Status } from './status'

const platform = [
  {
    href: '/docs/formats/ovratheme',
    title: 'Themes',
    text: 'Share theme packs as .ovratheme files. Double-click to install.',
    status: 'available' as const
  },
  {
    href: '/docs/automation',
    title: 'Automation',
    text: 'Drive Ovra with ovra:// links, AppleScript and Shortcuts.',
    status: 'planned' as const
  },
  {
    href: '/docs/plugins',
    title: 'Ovra plugins',
    text: 'Add sidebar panels, toolbar buttons, commands and start page widgets in JavaScript.',
    status: 'planned' as const
  },
  {
    href: '/docs/extensions',
    title: 'Web Extensions',
    text: 'Run standard Manifest V3 extensions through WebKit.',
    status: 'planned' as const
  },
  {
    href: '/docs/formats/block-lists',
    title: 'Block lists',
    text: 'Publish content-blocking lists that sit next to the built-in one.',
    status: 'planned' as const
  }
]

const sample = `{
  "format": "com.ovra.theme",
  "version": 1,
  "themes": [
    {
      "name": "Lagoon",
      "colorHexes": ["#1CB5E0", "#000851"],
      "angle": 160,
      "textStyle": "auto"
    }
  ]
}`

export function Home() {
  return (
    <div className="ovra-home">
      <section className="ovra-intro">
        <div className="ovra-intro-text">
          <p className="ovra-eyebrow">Ovra for developers</p>
          <h1>Build for Ovra.</h1>
          <p className="ovra-lead">
            Themes, automation, plugins and Web Extensions for the fast browser for the Mac — and everything you need to
            work on Ovra itself.
          </p>
          <div className="ovra-actions">
            <Link href="/docs" className="ovra-pill">
              Read the docs
            </Link>
            <a href={GITHUB_URL} className="ovra-text-link">
              View source on GitHub →
            </a>
          </div>
        </div>

        <figure className="ovra-code">
          <figcaption>Lagoon.ovratheme</figcaption>
          <pre>
            <code>{sample}</code>
          </pre>
        </figure>
      </section>

      <section className="ovra-block">
        <h2>What you can build</h2>
        <ul className="ovra-list">
          {platform.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span className="ovra-list-title">{item.title}</span>
                <span className="ovra-list-text">{item.text}</span>
                <Status kind={item.status} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="ovra-block ovra-links">
        <div>
          <h3>Work on Ovra</h3>
          <p>Build the app from source and send a pull request.</p>
          <Link href="/docs/contributing">Contributing →</Link>
        </div>
        <div>
          <h3>See what's next</h3>
          <p>The order we're building the developer platform in.</p>
          <Link href="/docs/roadmap">Roadmap →</Link>
        </div>
        <div>
          <h3>Security first</h3>
          <p>How permissions and review will keep add-ons safe.</p>
          <Link href="/docs/security">Permissions &amp; security →</Link>
        </div>
      </section>
    </div>
  )
}
