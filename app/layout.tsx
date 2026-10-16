import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { SiteFooter } from '../components/site-footer'
import { GITHUB_URL } from '../components/links'

export const metadata = {
  title: {
    default: 'Ovra Docs',
    template: '%s – Ovra Docs'
  },
  description: 'Developer documentation for Ovra: themes, automation, plugins, Web Extensions and contributing.'
}

const navbar = (
  <Navbar
    logo={
      <span className="ovra-logo">
        <img src="/ovra-mark.png" alt="" width={22} height={22} />
        <span className="ovra-logo-name">Ovra</span>
        <span className="ovra-logo-docs">Docs</span>
      </span>
    }
    projectLink={GITHUB_URL}
  />
)

const footer = (
  <Footer>
    <SiteFooter />
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        // Ovra's indigo accent (#5E5CE6) and the app's page backgrounds
        color={{ hue: 241, saturation: 74, lightness: { light: 56, dark: 70 } }}
        backgroundColor={{ light: '#f5f5f7', dark: '#1c1c1e' }}
      />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/OvraBrowser/docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          feedback={{ content: 'Question? Open an issue' }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
