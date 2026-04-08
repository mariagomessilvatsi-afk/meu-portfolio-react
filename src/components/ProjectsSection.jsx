import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection({ projetos }) {
  return (
    <section id="projetos" className="section-shell section-projetos">
      <div className="section-heading">
        <span className="section-kicker">Projetos</span>
        <h2>Trabalhos que mostram minha evolução</h2>
        <p>
          Cada projeto representa uma etapa da minha transição para tecnologia, com foco em
          prática, consistência e construção de interfaces.
        </p>
      </div>

      <div className="projetos-container">
        {projetos.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            links={projeto.links}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
