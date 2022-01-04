import React from 'react';
import { Link } from '@material-ui/core';
import HamburgerMenu from './HamburgerMenu';

const Header = function () {
  return (
    <div className="title">
      <HamburgerMenu width={250} />
      <Link href="/" underline="none" style={{ color: '#333333', fontSize: '18px', marginBottom: '10px' }}>
        <h1>
          プログラミング学習
          <br />
          技術書
          <br />
          おすすめまとめ
        </h1>
      </Link>
    </div>
  );
};

export default Header;
