'use client';

import { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-e3b8497d-37d7-48d4-a561-84558002e862" data-elfsight-app-lazy></div>
  );
};

export default ElfsightWidget;
