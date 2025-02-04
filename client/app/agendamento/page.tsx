'use client';

import { useEffect } from 'react';

const Appointmen = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className='mt-20'>
      <div className="elfsight-app-8743ddb8-eebf-410b-b747-1e53e2cadc19" data-elfsight-app-lazy></div>
    </section>

  );
};

export default Appointmen;
