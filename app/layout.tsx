import type { ReactNode } from 'react'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const navbar = 
<Navbar logo={
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/zenoLogo.svg" alt="" width="24" height="24" />
    <b>Zeno Docs</b>
  </span>} 
/>

export default async function RootLayout({children,}: { children: ReactNode}) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout navbar={navbar} pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  )
}