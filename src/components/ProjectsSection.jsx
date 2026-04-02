import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection({ projetos }) {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-container">
        {projetos.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
            links={projeto.links}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
