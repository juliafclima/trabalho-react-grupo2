import React from "react";
import './style.css';

export default function Feed() {
    return (
        <div className="feed-container">
            <div className="fundo-azul">

                {/* LOGO */}
                <div className="title">REKUT</div>

                {/* BIO */}
                <div className="retangulo-bio">
                    <div className="nome-bio" style={{ left: 88, top: 456 }}>Lucas José Gonçalves</div>
                    <div className="link-style" style={{ left: 108, top: 642 }}><a href="https://www.google.com">Editar Perfil</a></div>
                    <div className="link-style" style={{ left: 108, top: 696 }}>Recados</div>
                    <div className="link-style" style={{ left: 108, top: 802 }}>Depoimentos</div>
                    <div className="link-style" style={{ left: 108, top: 752 }}>Galeria</div>
                    <div className="barra-rosa" style={{ left: 40, top: 446 }}></div>
                    <div className="pink-background" style={{ left: 34, top: 17 }}></div>
                    <img className="foto-perfil" style={{ left: 38, top: 22 }} src="src\assets\image.png" alt="Imagem de perfil" />
                    <img className="iconezinhos" style={{ left: 71, top: 812 }} src="src\assets\depoimentos.png" alt="Ícone de depoimentos" />
                    <img className="iconezinhos" style={{ left: 71, top: 757 }} src="src\assets\galeria-de-imagens.png" alt="Ícone de galeria de imagens" />
                    <img className="iconezinhos" style={{ left: 71, top: 704 }} src="src\assets\correspondencia.png" alt="Ícone de correspondência" />
                    <img className="iconezinhos" style={{ left: 70, top: 651 }} src="src\assets\lapis.png" alt="Ícone de lápis" />
                    <div className="barra-cinza" style={{ left: 40, top: 610 }}></div>
                    <div className="info-perfil" style={{ left: 131, top: 518 }}>Masculino Casado<br />Brasil</div>
                </div>

                {/* AMIGOS */}
                <div className="amigos-container">
                    <div className="retangulo-amigos"></div>
                    <div className="text-style" style={{ left: 30, top: 19 }}>Amigos</div>
                    <div className="link-style" style={{ left: 377, top: 24 }}>ver todas</div>
                    <img className="img-amigos" style={{ left: 283, top: 470 }} src="src\assets\amigo1.jpeg" alt="Amigo 1" />
                    <img className="img-amigos" style={{ left: 78, top: 475 }} src="src\assets\amigo2.jpeg" alt="Amigo 2" />
                    <img className="img-amigos" style={{ left: 283, top: 250 }} src="src\assets\amigo1.jpeg" alt="Amigo 3" />
                    <img className="img-amigos" style={{ left: 78, top: 255 }} src="src\assets\amigo2.jpeg" alt="Amigo 4" />
                    <img className="img-amigos" style={{ left: 283, top: 60 }} src="src\assets\amigo1.jpeg" alt="Amigo 5" />
                    <img className="img-amigos" style={{ left: 78, top: 65 }} src="src\assets\amigo2.jpeg" alt="Amigo 6" />
                </div>

                {/* COMUNIDADES */}
                <div className="communidades-container">
                    <div className="retangulo-comunidades"></div>
                    <div className="text-style" style={{ left: 30, top: 38, width: 208, height: 55 }}>Comunidades</div>
                    <div className="link-style" style={{ left: 377, top: 43, width: 109, height: 36 }}>ver todas</div>

                    <div className="letrinhas" style={{ left: 57, top: 301 }}>Eu nunca terminei<br /> uma borracha</div>
                    <div className="letrinhas" style={{ left: 57, top: 638 }}>Eu colho flores e TONY RAMOS!</div>
                    <div className="letrinhas" style={{ left: 57, top: 964 }}>Não sei individualizar duplas</div>
                    <div className="letrinhas" style={{ left: 299, top: 964 }}>Eu leio o shampoo no banho</div>
                    <div className="letrinhas" style={{ left: 314, top: 301 }}>Eu odeio acordar cedo</div>
                    <div className="letrinhas" style={{ left: 314, top: 638 }}>Queria sorvete, mas era feijão</div>

                    <img className="rounded-image" style={{ left: 57, top: 117 }} src="src\assets\comun1.png" alt="Comunidade 1" />
                    <img className="rounded-image" style={{ left: 310, top: 443 }} src="src\assets\comun4.png" alt="Comunidade 4" />
                    <img className="rounded-image" style={{ left: 315, top: 117 }} src="src\assets\comun2.png" alt="Comunidade 2" />
                    <img className="rounded-image" style={{ left: 57, top: 443 }} src="src\assets\comun3.png" alt="Comunidade 3" />
                    <img className="rounded-image" style={{ left: 50, top: 758 }} src="src\assets\comun5.png" alt="Comunidade 5" />
                    <img className="rounded-image" style={{ left: 315, top: 759 }} src="src\assets\comun6.png" alt="Comunidade 6" />
                    <img className="rounded-image" style={{ left: 54, top: 1084 }} src="src\assets\comun7.png" alt="Comunidade 7" />
                    <img className="rounded-image" style={{ left: 314, top: 1084 }} src="src\assets\comun8.png" alt="Comunidade 8" />
                </div>

                {/* PERFIL */}
                <div className="perfil-container">
                    <div className="retangulo-perfil"></div>
                    <div className="nome-principal">Lucas José Gonçalves</div>
                    <div className="text-style subtitulo" style={{ width: 1145, height: 59 }}> Nasci para ser vintage em um mundo digital. Sou o charme do cringe em pessoa! 💁‍♀️📻</div>
                    <div className="barrinha-azul"></div>
                    <div className="text-style fonte-cinza" style={{ left: 72, top: 269, width: 47 }}>fãs</div>
                    <img className="star-icon" style={{ left: 74, top: 310 }} src="src\assets\estrela.png" />
                    <div className="text-style fonte-cinza" style={{ left: 808, top: 269, width: 68 }}>sexy</div>
                    <img className="icon" style={{ left: 820, top: 310 }} src="src\assets\coração.png" />
                    <div className="text-style fonte-cinza" style={{ left: 575, top: 269, width: 70 }}>legal</div>
                    <img className="like-icon" style={{ left: 582, top: 310 }} src="src\assets\like.png" />
                    <div className="text-style fonte-cinza" style={{ left: 282, top: 269, width: 130 }}>confíavel</div>
                    <img className="heart-icon" style={{ left: 324, top: 310 }} src="src\assets\emoji2.png" />

                    <div className="text-style fonte-cinza" style={{ left: 72, top: 438, width: 227 }}>relacionamento</div>
                    <div className="fonte estado-civil">Casado</div>
                    <div className="text-style fonte-cinza" style={{ left: 72, top: 508, width: 227 }}>quem sou eu</div>
                    <div className="fonte quem-sou-eu">A vida é curta demais para ser normal, eu sou a pitada de loucura que faltava no seu dia! 🌟😜</div>
                    <div className="text-style fonte-cinza" style={{ left: 72, top: 597, width: 227 }}>pais</div>
                    <div className="fonte pais-fonte">Brasil</div>

                    <div className="linha-cinza"></div>

                    <div className="text-style fonte-cinza" style={{ left: 72, top: 909, width: 227 }}>filmes</div>
                    <div className="text-style" style={{ left: 325, top: 913 }}>Jogos Mortais</div>
                    <div className="pink-border-medium" style={{ left: 304, top: 909 }}></div>

                    <div className="text-style" style={{ left: 575, top: 913 }}>Harry Potter e a Ordem da Fênix</div>
                    <div className="pink-border-long" style={{ left: 550, top: 909 }}></div>

                    {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="text-style fonte-cinza" style={{ left: 72, top: 779, width: 227 }}>musicas</div>
                    <div className="text-style" style={{ left: 585, top: 792 }}>Linkin Park</div>
                    <div className="pink-border" style={{ left: 554, top: 788 }}></div>

                    <div className="text-style" style={{ left: 330, top: 792 }}>Fall Out Boy</div>
                    <div className="pink-border" style={{ left: 304, top: 788 }}></div>

                    <div className="text-style" style={{ left: 815, top: 792 }}>Blink-182</div>
                    <div className="pink-border" style={{ left: 780, top: 788 }}></div>

                    {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="text-style fonte-cinza" style={{ left: 72, top: 1022, width: 227 }}>livros</div>
                    <div className="text-style" style={{ left: 325, top: 1015 }}>Diário de um Banana</div>
                    <div className="pink-border-medium-long" style={{ left: 304, top: 1010 }}></div>
                </div>

                {/* PERFIL */}
                <div className="depoimentos-container">
                    <div className="retangulo-depoimentos" />
                    <div className="titulo">Depoimentos</div>
                    <img className="imagem-depoimentos" src="src\assets\amigo2.jpeg" alt="Profile" />
                    <div className="nome-depoimentos">Lucas Oliveira</div>
                    <div className="comentario">RODANDO!!</div>
                    <div className="horario">03/11/2008 - 18:13</div>
                </div>
            </div>
        </div>
    );
}