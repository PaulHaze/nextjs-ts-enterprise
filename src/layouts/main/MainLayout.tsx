import styles from './MainLayout.module.scss';

export type MainLayoutProps = {
  sampleText: string;
};

export const MainLayout = ({ sampleText }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <p>{sampleText}</p>
    </div>
  );
};
