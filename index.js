import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <>
      <div className="site-alert" role="note">
        Educational content only — always follow applicable electrical codes and workplace safety procedures.
      </div>
      <Navbar {...props} />
    </>
  );
}
