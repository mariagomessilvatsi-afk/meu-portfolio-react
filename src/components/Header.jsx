import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <h1>Maria Silva</h1>
      </div>

      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
