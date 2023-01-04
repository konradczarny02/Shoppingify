import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLinkClassName =
  "after:absolute after:top-0 after:left-0 after:h-full after:w-2 after:content-[''] after:bg-orange-400 after:rounded-tr after:rounded-br";
const baseLinkClassName = 'py-4 w-full flex justify-center relative';

export const CustomNavLink: React.FC<
  React.PropsWithChildren<{ to: string }>
> = (props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${baseLinkClassName} ${activeLinkClassName}`
          : baseLinkClassName
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
};
