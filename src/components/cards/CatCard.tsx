import styles from './CatCard.module.scss';

export type CatCardProps = {
  sampleText: string;
};

export const CatCard = ({ sampleText }: CatCardProps) => {
  return (
    <div className={styles.container}>
      <p>{sampleText}</p>
    </div>
  );
};
