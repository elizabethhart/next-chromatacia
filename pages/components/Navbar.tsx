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
    <div className="flex bg-slate-800 justify-between items-center px-10 py-5">
      <div className="flex items-center justify-evenly">
        <a href="/">
          <div
            className="rounded-full h-5 w-5 inline-block mr-3"
            id="colorWheel"
          >
            {Array.from(Array(10).keys()).map((_item, idx) => {
              const className = `color0${idx + 1}`;
              return <span key={idx} className={className}></span>;
            })}
          </div>
        </a>
      </div>
      <ul className="flex-row text-white hidden md:flex">
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
      <div className="flex md:hidden px-10">
        <MenuIcon
          className="h-5 w-5 text-white"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="absolute top-20 right-2">
            <ul className="flex-col text-white bg-slate-500 px-3">
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
