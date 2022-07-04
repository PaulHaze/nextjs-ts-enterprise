import Image from 'next/image';

import styles from './CatCard.module.scss';

export type CatCardProps = {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
};

export const CatCard = ({ tag, title, body, author, time }: CatCardProps) => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col overflow-hidden bg-gradient-to-r from-[#ffffff] to-[#ece9e6] shadow-lg rounded-[20px] max-w-[400px]">
        <div>
          <Image
            src="/assets/img/time-cat.jpg"
            alt="Cat Image"
            width="600"
            height="400"
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <span className="bg-gradient-to-b from-[#276bc4] to-[#56ccf2] text-white text-sm font-bold px-5 py-0.5 rounded-[1em] self-start">
            {tag}
          </span>
          <h4 className="text-3xl font-bold text-black/80">{title}</h4>
          <p className="text-gray-700 ">{body}</p>
        </div>
        <div className="p-4">
          <div className="flex gap-3">
            <div
              className={`${styles.user} relative w-11 h-11 mt-1 rounded-[50%] overflow-hidden`}
            >
              <Image
                src="https://openclipart.org/image/800px/324734"
                alt="User Image"
                className={styles.user__image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.user__info}>
              <h5 className="mt-1 text-sm font-semibold text-gray-700">
                {author}
              </h5>
              <small className="text-gray-500">{time}</small>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.test}>Test block</div>
    </div>
  );
};
