import React, { ReactNode } from "react"
import Head from "next/head"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "Next App" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
    {children}
    </main>
    <footer>
      <hr />
      <span></span>
    </footer>
  </div>
)

export default Layout
