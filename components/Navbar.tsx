import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
  InformationCircleIcon,
  MenuIcon,
  PhotographIcon,
  GlobeIcon,
} from '@heroicons/react/solid';

const useOutsideClickHandler = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (ref.current && !ref.current.contains(evt.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

type MenuOption = {
  href: string;
  name: string;
  icon: React.ReactFragment;
};

const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const sidebarRef = useRef(null);
  useOutsideClickHandler(sidebarRef, () => setShowMenu(false));

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
    <div className="flex py-4 bg-dark-gray">
      <div className="px-4 flex justify-between w-full">
        <div className="flex">
          <a href="/" aria-label="Link to Home">
            <GlobeIcon className="h-5 w-5 text-light-gray hover:text-black" />
          </a>
        </div>
        <ul className="flex-row text-white hidden md:flex">
          {menuOptions.map((navItem, idx) => {
            return (
              <li className="text-light-gray hover:text-black pl-4" key={idx}>
                <Link href={navItem.href}>
                  <a aria-label={`Link to ${navItem.name}`}>
                    <span aria-hidden className="mr-2">{`0${idx}`}</span>
                    {navItem.name}
                  </a>
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
            <div
              ref={sidebarRef}
              className="fixed top-0 bottom-0 right-0 left-1/3 bg-dark-gray"
            >
              <ul className="flex-col text-light-gray px-3">
                {menuOptions.map((navItem, idx) => {
                  return (
                    <li className="py-4 text-center" key={idx}>
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
