import type { NextPage } from 'next';

import { Meta, MainLayout } from '@/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout
      meta={
        <Meta
          title="Next.js Tailwind Enterprise Starter"
          description="Starter template to make a great Next Js Project"
        />
      }
    >
      <div className="mt-3 flex h-[100vh] items-center  justify-center bg-gradient-to-br from-green-300/50 to-sky-800/50 p-4 px-5">
        <div className="mt-10 flex max-w-md flex-col justify-center rounded-lg bg-white px-3 shadow-2xl sm:p-lg">
          <h1 className="bg-clip-text text-center font-bold text-black ">
            Im your new Tailwind Project...
          </h1>
          <p className="text-center text-[#504e63]">
            Delete this and make something great!
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
