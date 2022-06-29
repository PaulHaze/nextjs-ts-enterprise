import styles from './BaseTemplate.module.scss';

export type BaseTemplateProps = {
  sampleText: string;
};

export const BaseTemplate = ({ sampleText }: BaseTemplateProps) => {
  return (
    <div className={styles.container}>
      <p>{sampleText}</p>
    </div>
  );
};
