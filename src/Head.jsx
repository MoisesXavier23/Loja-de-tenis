/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const Head = ({ title }) => {
  useEffect(() => {
    if (title) {
      document.title = 'Tênis | ' + title;
    } else {
      document.title = 'Tênis';
    }
  }, [title]);

  return <></>;
};

export default Head;
