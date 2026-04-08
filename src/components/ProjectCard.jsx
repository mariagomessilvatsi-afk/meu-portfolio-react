import React from 'react';

function ProjectCard({ titulo, descricao, links }) {
  return (
    <article className="card-projeto">
      <div className="card-projeto-topo">
        <span className="card-tag">Projeto em destaque</span>
        <h3>{titulo}</h3>
      </div>

      <p>{descricao}</p>

      <div className="card-links">
        {links?.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
