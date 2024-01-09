import { navitems } from '@/lib/nav-items';
import { NavItem } from './NavItem';

interface NavProps {}

export const NavPanel = ({}: NavProps) => {
  return (
    <div>
      {navitems.map((navitem, key) => (
        <div className='flex flex-col gap-[4px]' key={key}>
          <NavItem
            href={navitem.href}
            label={navitem.label}
            logo={navitem.icon}
            badge={navitem.badge}
            beta={navitem.beta}
          />
        </div>
      ))}
    </div>
  );
};
