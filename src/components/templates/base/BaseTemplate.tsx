import styles from './BaseTemplate.module.scss';

export type BaseTemplateProps = {
  sampleText: string;
};

export const BaseTemplate = ({ sampleText }: BaseTemplateProps) => {
  return (
    <div className={styles.container}>
      <p>BaseTemplate Placeholder</p>
      <p>{sampleText}</p>
    </div>
  );
};
