import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import './index.css'; 

const meusProjetos = [
  { 
    id: 1, 
    titulo: "Projeto 01 - Portfólio em HTML, CSS e JS", 
    descricao: "Meu portfólio de apresentação feito com tecnologias modernas.", 
    links: [
        { label: "Ver no GitHub Pages", url: "https://mariagomessilvatsi-afk.github.io/portfolio-uespi-html-css-js/" },
        { label: "Ver repositório no GitHub", url: "https://github.com/mariagomessilvatsi-afk/portfolio-uespi-html-css-js" }
    ]
  },
  { 
    id: 2, 
    titulo: "Projeto 02 - Portfólio com React", 
    descricao: "Meu portfólio de apresentação feito com React, uma biblioteca JavaScript para construção de interfaces de usuário.", 
    links: [
        { label: "Ver no GitHub Pages", url: "https://mariagomessilvatsi-afk.github.io/meu-portfolio-react/" },
        { label: "Ver repositório no GitHub", url: "https://github.com/mariagomessilvatsi-afk/meu-portfolio-react" }
    ]
  }
];

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [temaEscuro]);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert("Preencha os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' }); 
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header temaEscuro={temaEscuro} onAlternarTema={alternarTema} />

      <main>
        
        <section id="sobre">
            <div className="sobre-container">
                <div className="sobre-foto">
                    <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Foto de perfil genérica" />
                </div>
                <div className="sobre-texto">
                    <h2>Sobre Mim</h2>
                    <p>Atualmente trabalho como operadora de sistemas do SUS e estou cursando o tecnólogo em Sistemas para Internet na UESPI, visando uma migração de carreira para a área de tecnologia. Sou dedicada, curiosa e estou sempre em busca de novos aprendizados para crescer profissionalmente no universo da tecnologia.</p>
                </div>
            </div>
        </section>

        <ProjectsSection projetos={meusProjetos} />
        
        <section id="contato">
          <h2>Contato</h2>
          <div className="contato-container">
            <form onSubmit={handleSubmit}>
              <div className="campo">
                <label htmlFor="nome">Nome:</label>
                <input 
                  id="nome" 
                  type="text" 
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              <div className="campo">
                <label htmlFor="email">E-mail:</label>
                <input 
                  id="email" 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="campo">
                <label htmlFor="msg">Mensagem:</label>
                <textarea 
                  id="msg" 
                  value={formData.msg}
                  onChange={(e) => setFormData({...formData, msg: e.target.value})}
                />
              </div>
              <button type="submit">Enviar Mensagem</button>
            </form>

            <aside className="contato-social">
              <h3>Redes Sociais</h3>
              <ul>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="mailto:contato@email.com">contato@email.com</a></li>
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
