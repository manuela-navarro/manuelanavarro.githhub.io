import { FunctionComponent } from 'react';
import './navBar.scss';

interface NavBarItem {
  label: string;
  path: string;
}

const items: NavBarItem[] = [
  {
    label: 'Proyectos',
    path: '/#projects',
  },
  {
    label: 'Contacto',
    path: '/#contact',
  },
];

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      {items.map((item: NavBarItem) => (
        <a key={item.path} className="link" href={item.path}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
