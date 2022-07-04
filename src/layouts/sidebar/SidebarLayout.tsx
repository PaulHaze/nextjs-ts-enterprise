import styles from './SidebarLayout.module.scss';

export type SidebarLayoutProps = {
  sampleText: string;
};

export const SidebarLayout = ({ sampleText }: SidebarLayoutProps) => {
  return (
    <div className={styles.container}>
      <p>{sampleText}</p>
    </div>
  );
};
