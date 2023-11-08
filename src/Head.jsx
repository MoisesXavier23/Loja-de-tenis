/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const Head = ({ title }) => {
  useEffect(() => {
    if (title) {
      document.title = 'Zaphira | ' + title;
    } else {
      document.title = 'Zaphira';
    }
  }, [title]);

  return <></>;
};

export default Head;
