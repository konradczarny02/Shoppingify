import React, { PropsWithChildren } from 'react';
import { Navigation } from './components/Navigation';

export const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="grid grid-cols-[64px_1fr] lg:grid-cols-[96px_1fr] h-screen bg-gray-200">
      <Navigation />
      {props.children}
    </div>
  );
};
