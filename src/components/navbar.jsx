import React from 'react';

export default function Navbar(Children) {
  return (
    <header className='Navbar'>
      <span className='logo'>Questigo</span>
      <nav className='navigationLinks'>
        <a href='#'>Get to know each other</a>
      </nav>
    </header>
  );
}
