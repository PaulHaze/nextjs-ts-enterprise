/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';
import { CatCard } from '@Components';
import { mockCatCardProps } from '@/components/cards/CatCard.mocks';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJs Enterprise Template</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>

      <div className="bg-red-500 h-[64px]">nav bar</div>

      <div className="flex flex-col min-h-[calc(100vh-64px)] bg-gradient-to-br from-green-300/50 to-sky-800/50 items-center justify-center px-4">
        <CatCard {...mockCatCardProps.base} />
      </div>
    </div>
  );
};

export default Home;
