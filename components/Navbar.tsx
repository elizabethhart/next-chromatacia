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
      icon: <PhotographIcon className="h-5 w-5 text-white" />,
    },
    // {
    //   href: '/bookshelf',
    //   name: t`bookshelf`,
    //   icon: <BookOpenIcon className="h-5 w-5 text-white" />,
    // },
    {
      href: '/about',
      name: t`about`,
      icon: <InformationCircleIcon className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <div className="flex py-4 bg-slate-900">
      <div className="px-4 flex justify-between w-full">
        <div className="flex">
          <a href="/" aria-label="Link to Home">
            <CubeIcon className="h-5 w-5 text-white" />
          </a>
        </div>
        <ul className="flex-row text-white hidden md:flex">
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
            className="h-5 w-5 text-white fixed md:relative"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="fixed top-0 bottom-0 right-0 left-1/3 bg-white bg-opacity-40">
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
