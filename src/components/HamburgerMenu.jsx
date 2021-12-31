import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from '@material-ui/core';

const HamburgerMenu = function () {
  return (
    <Menu right>
      <Link href="/" underline="none" style={{ color: '#333333', fontSize: '18px', marginBottom: '10px' }}>
        トップページ
      </Link>
      <Link href="/about" underline="none" style={{ color: '#333333', fontSize: '18px', marginBottom: '10px' }}>
        このサイトについて
      </Link>
      <Link href="/privacy_policy" underline="none" style={{ color: '#333333', fontSize: '18px', marginBottom: '10px' }}>
        プライバシーポリシー
      </Link>
    </Menu>
  );
};

export default HamburgerMenu;
