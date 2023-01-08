import React from 'react';
import { Layout } from './Layout';
import { Header } from './components/Header';

export const App = () => {
  return (
    <Layout>
      <div className="w-full h-full pt-9 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20">
        <div className="h-full w-full px-3 lg:pl-12 lg:pr-0">
          <Header />
        </div>
        <div className="hidden lg:flex w-full h-full"></div>
      </div>
    </Layout>
  );
};
