import Meta from './meta'
import { Navbar } from './navbar'

export default function Layout({ preview, children, menuItems }) {
  return (
    <>
      <Meta />
      <Navbar data={menuItems} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
