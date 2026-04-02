import React from 'react';

function ProjectCard({ titulo, descricao, link, links }) {
  return (
    <article className="card-projeto">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      
      {links ? (
        links.map((l, index) => (
          <span key={index}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
            {index < links.length - 1 && <br />}
          </span>
        ))
      ) : link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ver no GitHub
        </a>
      ) : null}
    </article>
  );
}

export default ProjectCard;