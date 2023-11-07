import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Perfil = () => {
    return (
        <>
            <Header />
            <div className="principal">
                <div className="fundo-azul">
                    <div className="pai">
                        <div className="coluas-esquerda">
                            <div className="div-orientacao-esquerda">
                                <div className="bio">
                                    <div className="borda-rosa">
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/image.png"
                                            className="img-perfil"
                                            alt="Imagem do perfil"
                                        />
                                    </div>
                                    <div className="div-nome-perfil">
                                        <div className="barra-rosa"></div>
                                        <a href="#" className="nome-bio">Lucas José Gonçalves</a>
                                    </div>
                                    <div className="letrinhas-cinzas">
                                        Masculino
                                        <br /> Casado
                                        <br />
                                        Brasil
                                    </div>
                                    <div className="linha-cinza"></div>
                                    <div className="div-do-editar-perfil">
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/lapis.png"
                                            className="lapis"
                                            alt="Editar perfil"
                                        />
                                        <a href="#" className="editar-perfil">Editar Perfil</a>
                                    </div>
                                    <div className="div-do-recado">
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/correspondencia.png"
                                            className="recado"
                                            alt="Recados"
                                        />
                                        <Link className="editar-perfil" to='/depoimentos'>Depoimentos</Link>
                                    </div>
                                    <div className="div-depoimento">
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/depoimentos.png"
                                            className="dep"
                                            alt="Depoimentos"
                                        />
                                        <Link className="editar-perfil" to='/comunidade'>Comunidades</Link>
                                    </div>
                                    <div className="div-da-galeria">
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/galeria-de-imagens.png"
                                            className="galery"
                                            alt="Galeria"
                                        />
                                        <Link className="editar-perfil" to='/album'>Galeria</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="coluas-meio">
                            <div className="div-orientacao-meio">
                                <div className="perfil">
                                    <div className="nome-perfil">Lucas José Gonçalves</div>
                                    <div className="frase-pensamento">
                                        Nasci para ser vintage em um mundo digital. Sou o charme do cringe em pessoa! 💁‍♀️📻
                                    </div>
                                    <div className="div-letrinhas-cinzas-cima">
                                        <div className="fa">fãs</div>
                                        <div className="confiavel">confiável</div>
                                        <div className="legal">legal</div>
                                        <div className="sexy">sexy</div>
                                    </div>
                                    <div className="div-icones">
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/estrela.png"
                                            className="estrela"
                                            alt="Estrela"
                                        />
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/emoji2.png"
                                            className="smile"
                                            alt="Emoji"
                                        />
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/like.png"
                                            className="like"
                                            alt="Curtir"
                                        />
                                        <img
                                            loading="lazy"
                                            src="src/assets/img/perfil/coração.png"
                                            className="love"
                                            alt="Coração"
                                        />
                                    </div>
                                    <div className="relacionamento">
                                        <div className="relacionamento-cinza">relacionamento</div>
                                        <div className="casado">Casado</div>
                                    </div>
                                    <div className="quem-sou-eu">
                                        <div className="quem-sou-eu-cinza">quem sou eu</div>
                                        <div className="texto-quem-sou-eu">
                                            A vida é curta demais para ser normal, eu sou a pitada de loucura que faltava no seu dia! 🌟😜
                                        </div>
                                    </div>
                                    <div className="pais">
                                        <div className="pais-cinza">país</div>
                                        <div className="brasil">Brasil</div>
                                    </div>
                                    <div className="linha-cinza-perfil"></div>
                                    <div className="div-interesses-musicas">
                                        <div className="musicas">músicas</div>
                                        <div className="banda-1">Fall Out Boy</div>
                                        <div className="banda-1">Linkin Park</div>
                                        <div className="banda-1">Blink-182</div>
                                    </div>
                                    <div className="div-interesses-filmes">
                                        <div className="filmes">filmes</div>
                                        <div className="filme1">Jogos Mortais</div>
                                        <div className="filme1">Harry Potter e a Ordem da Fênix</div>
                                    </div>
                                    <div className="div-interesses-livro">
                                        <div className="livros">livros</div>
                                        <div className="livro1">Diário de um Banana</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Perfil;
