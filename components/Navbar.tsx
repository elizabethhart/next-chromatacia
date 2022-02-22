import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
  BookOpenIcon,
  InformationCircleIcon,
  CubeIcon,
  MenuIcon,
  PhotographIcon,
} from '@heroicons/react/solid';

type MenuOption = {
  href: string;
  name: string;
  icon: React.ReactFragment;
};

const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuOptions: MenuOption[] = [
    {
      href: '/gallery',
      name: t`gallery`,
      icon: <PhotographIcon className="h-5 w-5 text-slate-500" />,
    },
    {
      href: '/bookshelf',
      name: t`bookshelf`,
      icon: <BookOpenIcon className="h-5 w-5 text-slate-500" />,
    },
    {
      href: '/about',
      name: t`about`,
      icon: <InformationCircleIcon className="h-5 w-5 text-slate-500" />,
    },
  ];

  return (
    <div className="flex py-4 border-b-2 border-slate-200 bg-slate-100">
      <div className="px-4 flex justify-between w-full">
        <div className="flex">
          <a href="/" aria-label="Link to Home">
            <CubeIcon className="h-5 w-5 text-slate-900" />
          </a>
        </div>
        <ul className="flex-row text-slate-900 hidden md:flex">
          {menuOptions.map((navItem, idx) => {
            return (
              <li className="hover:text-slate-400 pl-4" key={idx}>
                <Link href={navItem.href}>
                  <a aria-label={`Link to ${navItem.name}`}>{navItem.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex md:hidden px-4">
          <MenuIcon
            className="h-5 w-5 text-slate-900 fixed md:relative"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute top-14 right-4 z-10 rounded bg-slate-100 w-36">
              <ul className="flex-col text-slate-900 px-3">
                {menuOptions.map((navItem, idx) => {
                  return (
                    <li
                      className="hover:text-slate-400 py-4 text-center hover:bg-slate-200"
                      key={idx}
                    >
                      <Link href={navItem.href}>
                        <a
                          onClick={() => setShowMenu(false)}
                          aria-label={`Link to ${navItem.name}`}
                        >
                          <div className="flex flex-row">
                            <span className="mr-3">{navItem.icon}</span>
                            <span>{navItem.name}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
