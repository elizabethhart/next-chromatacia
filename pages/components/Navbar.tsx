import { FC, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { MenuIcon } from '@heroicons/react/solid';

type MenuOption = {
  href: string;
  name: string;
};

const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuOptions: MenuOption[] = [
    { href: '/gallery', name: t`gallery` },
    { href: '/bookshelf', name: t`bookshelf` },
    { href: '/about', name: t`about` },
  ];

  return (
    <div className="flex justify-between items-center px-10 py-4 border-b-2 border-slate-200 bg-slate-100">
      <div className="flex items-center text-slate-900 justify-evenly">
        <a href="/">+</a>
      </div>
      <ul className="flex-row text-slate-900 hidden md:flex">
        {menuOptions.map((navItem, idx) => {
          return (
            <li className="hover:text-slate-400 pl-4" key={idx}>
              <Link href={navItem.href}>
                <a>{navItem.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex md:hidden">
        <MenuIcon
          className="h-5 w-5 text-slate-900"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="absolute top-16 right-10 z-10 rounded bg-slate-500">
            <ul className="flex-col text-slate-900  px-3">
              {menuOptions.map((navItem, idx) => {
                return (
                  <li className="hover:text-slate-400 py-4" key={idx}>
                    <Link href={navItem.href}>
                      <a onClick={() => setShowMenu(false)}>{navItem.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
