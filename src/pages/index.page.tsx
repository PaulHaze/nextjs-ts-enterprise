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
      <div className="h-[100vh] bg-gradient-to-br from-green-300/50 to-sky-800/50 flex items-center justify-center">
        <CatCard {...mockCatCardProps.base} />
      </div>
    </div>
  );
};

export default Home;
