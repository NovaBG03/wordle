import React from 'react';

function Banner({variant, children}) {
  return (
    <div className={variant ? `${variant} banner` : 'banner'}>
      {children}
    </div>
  );
}

export default Banner;
