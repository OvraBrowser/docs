import nextra from 'nextra'

const withNextra = nextra({
  // Nextra options: https://nextra.site/docs/guide/configuration
})

export default withNextra({
  // Static export: plain HTML in `out/`, served by Cloudflare (see wrangler.jsonc)
  output: 'export',
  images: { unoptimized: true }
})
