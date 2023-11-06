import React from 'react';
import './style.css';
import Header from '../../components/Header';

const Perfil = () => {

    return (
        <>
            <Header />
            <div className="principal">
                <div className="fundo-azul">
                    <div className="pai">
                        <div className="coluas-esquerda"> {/*div's da esquerda */}
                            <div className="div-orientacao-esquerda">

                                <div className="logo">REKUT</div> {/*logo */}

                                <div className="bio">{/*bio */}
                                    <div className="borda-rosa">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\image.png"
                                            className="img-perfil"
                                        />
                                    </div>
                                    <div className="div-nome-perfil">
                                        <div className="barra-rosa"></div>
                                        <div className="nome-bio">Lucas José Gonçalves</div>
                                    </div>
                                    <div className="letrinhas-cinzas">
                                        Masculino Casado
                                        <br />
                                        Brasil
                                    </div>
                                    <div className="linha-cinza"></div>
                                    <div className="div-do-editar-perfil">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\lapis.png"
                                            className="lapis"
                                        />
                                        <div className="editar-perfil">Editar Perfil</div>
                                    </div>
                                    <div className="div-do-recado">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\correspondencia.png"
                                            className="recado"
                                        />
                                        <div className="recados">Recados</div>
                                    </div>
                                    <div className="div-da-galeria">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\galeria-de-imagens.png"
                                            className="galery"
                                        />
                                        <div className="galeria">Galeria</div>
                                    </div>
                                    <div className="div-depoimento">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\depoimentos.png"
                                            className="dep"
                                        />
                                        <div className="galeria">depomentos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="coluas-meio"> {/*div's do meio */}
                            <div className="div-orientacao-meio"> {/*perfil */}
                                <div className="perfil">
                                    <div className="nome-perfil">Lucas José Gonçalves</div>
                                    <div className="frase-pensamento">
                                        Nasci para ser vintage em um mundo digital. Sou o charme do cringe
                                        em pessoa! 💁‍♀️📻
                                    </div>
                                    <div className="div-letrinhas-cinzas-cima">
                                        <div className="fa">fãs</div>
                                        <div className="confiavel">confíavel</div>
                                        <div className="legal">legal</div>
                                        <div className="sexy">sexy</div>
                                    </div>
                                    <div className="div-icones">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\estrela.png"
                                            className="estrela"
                                        />
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\emoji2.png"
                                            className="smile"
                                        />
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\like.png"
                                            className="like"
                                        />
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\coração.png"
                                            className="love"
                                        />
                                    </div>
                                    <div className="relacionamento">
                                        <div className="relacionamento-cinza">relacionamento</div>
                                        <div className="casado">Casado</div>
                                    </div>
                                    <div className="quem-sou-eu">
                                        <div className="quem-sou-eu-cinza">quem sou eu</div>
                                        <div className="texto-quem-sou-eu"> A vida é curta demais para ser normal, eu sou a pitada
                                            <br />
                                            de loucura que faltava no seu dia! 🌟😜</div>
                                    </div>
                                    <div className="pais">
                                        <div className="pais-cinza">pais</div>
                                        <div className="brasil">Brasil</div>
                                    </div>
                                    <div className="linha-cinza-perfil"></div>
                                    <div className="div-interesses-musicas">
                                        <div className="musicas">musicas</div>
                                        <div className="banda-1">Fall Out Boy</div>
                                        <div className="banda-2">Linkin Park</div>
                                        <div className="banda-3">Blink-182</div>
                                    </div>
                                    <div className="div-interesses-filmes">
                                        <div className="filmes">filmes</div>
                                        <div className="filme1">Jogos Mortais</div>
                                        <div className="filme2">Harry Potter e a Ordem da Fênix</div>
                                    </div>
                                    <div className="div-interesses-livro">
                                        <div className="livros">livros</div>
                                        <div className="livro1">Diário de um Banana</div>
                                    </div>
                                </div>
                                <div className="div-50">  {/*DEPOIMENTOS */}
                                    <div className="div-51">
                                        <div className="div-52">Depoimentos</div>
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\img\perfil\seta.png"
                                            className="img-11"
                                        />
                                    </div>
                                    <div className="div-53">
                                        <div className="div-54">
                                            <div className="column-3">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\img\perfil\amigo3.jpeg"
                                                    className="img-12"
                                                />
                                            </div>
                                            <div className="column-4">
                                                <div className="div-55">
                                                    <div className="div-56">Carluxo</div>
                                                    <div className="div-57">TENDEU TENDEU!!</div>
                                                    <div className="div-58">03/11/2008 - 18:13</div>
                                                </div>
                                            </div>
                                            <div className="column-5">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\img\perfil\lixeira.png"
                                                    className="img-13"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="coluna-direita">   {/*div's do canto direto */}
                            <div className="div-orientacao-direita">
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default Perfil;