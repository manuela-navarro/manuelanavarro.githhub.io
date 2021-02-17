import Link from 'next/link'
import { FunctionComponent } from 'react'
import './navBar.scss'

interface NavBarItem {
  label: string
  path: string
}

const items: NavBarItem[] = [
  {
    label: 'Proyectos',
    path: '#projects',
  },
  {
    label: 'Contacto',
    path: '#contacto',
  },
]

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      {items.map((item: NavBarItem) => (
        <Link key={item.path} href={item.path}>
          <a className="link">{item.label}</a>
        </Link>
      ))}
    </div>
  )
}

export default NavBar
