import { RichText as RT } from 'prismic-reactjs';
import React from 'react';

import markdownStyles from './markdown-styles.module.css';

interface Props {
  content: any;
}

const RichText: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className={markdownStyles['markdown']}>
        <RT render={content} />
      </div>
    </>
  );
};

export default RichText;
