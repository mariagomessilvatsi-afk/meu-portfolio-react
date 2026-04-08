import { useState } from 'react';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import './index.css';

const meusProjetos = [
  {
    id: 1,
    titulo: 'Projeto 01 - Portfólio em HTML, CSS e JS',
    descricao: 'Meu portfólio de apresentação feito com tecnologias modernas.',
    links: [
      { label: 'Ver no GitHub Pages', url: 'https://mariagomessilvatsi-afk.github.io/portfolio-uespi-html-css-js/' },
      { label: 'Ver repositório no GitHub', url: 'https://github.com/mariagomessilvatsi-afk/portfolio-uespi-html-css-js' },
    ],
  },
  {
    id: 2,
    titulo: 'Projeto 02 - Portfólio com React',
    descricao: 'Meu portfólio de apresentação feito com React, uma biblioteca JavaScript para construção de interfaces de usuário.',
    links: [
      { label: 'Ver no GitHub Pages', url: 'https://mariagomessilvatsi-afk.github.io/meu-portfolio-react/' },
      { label: 'Ver repositório no GitHub', url: 'https://github.com/mariagomessilvatsi-afk/meu-portfolio-react' },
    ],
  },
];

const destaques = ['Transição de carreira', 'React e JavaScript', 'Interfaces responsivas'];

const habilidades = ['React', 'JavaScript', 'HTML', 'CSS', 'Vite', 'UI Responsiva'];

const contatos = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { label: 'GitHub', url: 'https://github.com/' },
  { label: 'Instagram', url: 'https://www.instagram.com/' },
  { label: 'E-mail', url: 'mailto:contato@email.com' },
];

function App() {
  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert('Preencha os campos obrigatórios!');
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' });
    }
  };

  return (
    <div className="page-shell">
      <Header />

      <main>
        <section id="sobre" className="hero-shell">
          <div className="hero-grid">
            <aside className="hero-panel">
              <div className="sobre-foto">
                <img src="/Perfil.jpeg" alt="Foto de perfil de Maria Silva" />
              </div>

              <div className="info-card">
                <span className="section-kicker">Sobre mim</span>
                <h3>Maria Silva</h3>
                <p>
                  Estudante de Sistemas para Internet, com foco em desenvolvimento front-end e na
                  criação de interfaces organizadas, acessíveis e modernas.
                </p>

                <div className="skills-cloud">
                  {habilidades.map((habilidade) => (
                    <span key={habilidade}>{habilidade}</span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="hero-copy">
              <span className="hero-kicker">Portfólio pessoal</span>
              <h2>Construindo minha trajetória em tecnologia com consistência, estudo e prática.</h2>
              <p className="hero-intro">
                Atualmente trabalho como operadora de sistemas do SUS e estou cursando o tecnólogo em
                Sistemas para Internet na UESPI, visando uma migração de carreira para a área de
                tecnologia. Sou dedicada, curiosa e estou sempre em busca de novos aprendizados para
                crescer profissionalmente no universo da tecnologia.
              </p>

              <div className="hero-chips">
                {destaques.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="hero-actions">
                <a className="btn-primary" href="#projetos">Ver projetos</a>
                <a className="btn-secondary" href="#contato">Entrar em contato</a>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection projetos={meusProjetos} />

        <section id="contato" className="section-shell section-contato">
          <div className="section-heading">
            <span className="section-kicker">Contato</span>
            <h2>Vamos conversar sobre oportunidades e próximos passos</h2>
            <p>
              Se você quiser trocar ideias, conhecer meu trabalho ou abrir uma conversa profissional,
              eu fico feliz em receber sua mensagem.
            </p>
          </div>

          <div className="contato-container">
            <form onSubmit={handleSubmit}>
              <div className="campo">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="campo">
                <label htmlFor="msg">Mensagem</label>
                <textarea
                  id="msg"
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                />
              </div>
              <button type="submit">Enviar mensagem</button>
            </form>

            <aside className="contato-social">
              <span className="section-kicker">Redes</span>
              <h3>Canais para acompanhar meu trabalho</h3>
              <p>
                Você também pode me encontrar nas redes e acompanhar meus estudos, projetos e evolução.
              </p>
              <ul>
                {contatos.map((contato) => (
                  <li key={contato.label}>
                    <a href={contato.url} target="_blank" rel="noopener noreferrer">{contato.label}</a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Maria Silva</p>
      </footer>
    </div>
  );
}

export default App;
