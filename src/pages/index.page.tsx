/* eslint-disable react/function-component-definition */
// import type { NextPage } from 'next';
// import Head from 'next/head';
import { MainLayout, SidebarLayout } from '@Layouts';
import { CatCard } from '@Components';
import { mockCatCardProps } from '@/components/cards/CatCard.mocks';

import { NextPageWithLayout } from '@/types/page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col min-h-[100vh] bg-gradient-to-br from-green-300/50 to-sky-800/50 items-center justify-center">
        <CatCard {...mockCatCardProps.base} />
      </div>
    </section>
  );
};

Home.getLayout = (page) => {
  return (
    <MainLayout>
      <SidebarLayout />
      {page}
    </MainLayout>
  );
};

export default Home;
