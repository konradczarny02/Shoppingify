import React from 'react';
import { CustomNavLink } from './CustomNavLink';

interface NavLinkItem {
  id: string;
  icon: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  {
    id: '1',
    icon: 'format_list_bulleted',
    href: '/',
  },
  {
    id: '2',
    icon: 'replay',
    href: '/history',
  },
  {
    id: '3',
    icon: 'insert_chart',
    href: '/stats',
  },
];

export const Navigation = () => {
  return (
    <div className="h-full bg-gray-100 py-5 lg:py-7 flex flex-col justify-between items-center">
      <img src="/logo.svg" alt="logo" className="w-12" />
      <div className="flex gap-12 flex-col w-full">
        {navLinks.map((link) => (
          <CustomNavLink to={link.href} key={link.id}>
            <span className="material-symbols-outlined">{link.icon}</span>
          </CustomNavLink>
        ))}
      </div>
      <div className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined md-light">
          shopping_cart
        </span>
      </div>
    </div>
  );
};
