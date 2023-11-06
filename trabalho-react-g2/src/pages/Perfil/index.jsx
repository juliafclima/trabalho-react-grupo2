import React from 'react';
import './style.css';
import imgPerfil from '../../assets/image.png';
import Header from '../../components/Header';

const Perfil = () => {

    return (
        <>
            <Header />
            <div class="principal">
                <div class="fundo-azul">
                    <div class="pai">


                        <div class="coluas-esquerda"> {/*div's da esquerda */}
                            <div class="div-orientacao-esquerda">

                                <div class="logo">REKUT</div> {/*logo */}

                                <div class="bio">{/*bio */}
                                    <div class="borda-rosa">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\image.png"
                                            class="img-perfil"
                                        />
                                    </div>
                                    <div class="div-nome-perfil">
                                        <div class="barra-rosa"></div>
                                        <div class="nome-bio">Lucas José Gonçalves</div>
                                    </div>
                                    <div class="letrinhas-cinzas">
                                        Masculino Casado
                                        <br />
                                        Brasil
                                    </div>
                                    <div class="linha-cinza"></div>
                                    <div class="div-do-editar-perfil">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\lapis.png"
                                            class="lapis"
                                        />
                                        <div class="editar-perfil">Editar Perfil</div>
                                    </div>
                                    <div class="div-do-recado">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\correspondencia.png"
                                            class="recado"
                                        />
                                        <div class="recados">Recados</div>
                                    </div>
                                    <div class="div-da-galeria">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\galeria-de-imagens.png"
                                            class="galery"
                                        />
                                        <div class="galeria">Galeria</div>
                                    </div>
                                    <div class="div-depoimento">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\depoimentos.png"
                                            class="dep"
                                        />
                                        <div class="galeria">depomentos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ########################################################################################################################################################################################################################################## */}


                        <div class="coluas-meio"> {/*div's do meio */}

                            <div class="div-orientacao-meio"> {/*perfil */}
                                <div class="perfil">
                                    <div class="nome-perfil">Lucas José Gonçalves</div>
                                    <div class="frase-pensamento">
                                        Nasci para ser vintage em um mundo digital. Sou o charme do cringe
                                        em pessoa! 💁‍♀️📻
                                    </div>
                                    <div class="div-letrinhas-cinzas-cima">
                                        <div class="fa">fãs</div>
                                        <div class="confiavel">confíavel</div>
                                        <div class="legal">legal</div>
                                        <div class="sexy">sexy</div>
                                    </div>
                                    <div class="div-icones">
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\estrela.png"
                                            class="estrela"
                                        />
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\emoji2.png"
                                            class="smile"
                                        />
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\like.png"
                                            class="like"
                                        />
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\coração.png"
                                            class="love"
                                        />
                                    </div>
                                    <div class="relacionamento">
                                        <div class="relacionamento-cinza">relacionamento</div>
                                        <div class="casado">Casado</div>
                                    </div>
                                    <div class="quem-sou-eu">
                                        <div class="quem-sou-eu-cinza">quem sou eu</div>
                                        <div class="texto-quem-sou-eu"> A vida é curta demais para ser normal, eu sou a pitada
                                            <br />
                                            de loucura que faltava no seu dia! 🌟😜</div>
                                    </div>
                                    <div class="pais">
                                        <div class="pais-cinza">pais</div>
                                        <div class="brasil">Brasil</div>
                                    </div>
                                    <div class="linha-cinza-perfil"></div>
                                    <div class="div-interesses-musicas">
                                        <div class="musicas">musicas</div>
                                        <div class="banda-1">Fall Out Boy</div>
                                        <div class="banda-2">Linkin Park</div>
                                        <div class="banda-3">Blink-182</div>
                                    </div>
                                    <div class="div-interesses-filmes">
                                        <div class="filmes">filmes</div>
                                        <div class="filme1">Jogos Mortais</div>
                                        <div class="filme2">Harry Potter e a Ordem da Fênix</div>
                                    </div>
                                    <div class="div-interesses-livro">
                                        <div class="livros">livros</div>
                                        <div class="livro1">Diário de um Banana</div>
                                    </div>
                                </div>

                                {/* ########################################################################################################################################################################################################################################## */}


                                <div class="div-50">  {/*DEPOIMENTOS */}
                                    <div class="div-51">
                                        <div class="div-52">Depoimentos</div>
                                        <img
                                            loading="lazy"
                                            srcset="src\assets\seta.png"
                                            class="img-11"
                                        />
                                    </div>
                                    <div class="div-53">
                                        <div class="div-54">
                                            <div class="column-3">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\amigo3.jpeg"
                                                    class="img-12"
                                                />
                                            </div>
                                            <div class="column-4">
                                                <div class="div-55">
                                                    <div class="div-56">Carluxo</div>
                                                    <div class="div-57">TENDEU TENDEU!!</div>
                                                    <div class="div-58">03/11/2008 - 18:13</div>
                                                </div>
                                            </div>
                                            <div class="column-5">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\lixeira.png"
                                                    class="img-13"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ########################################################################################################################################################################################################################################## */}

                        <div class="coluna-direita">   {/*div's do canto direto */}
                            <div class="div-orientacao-direita">

                                <div class="div-amigos">  {/*amigos */}
                                    <div class="div-primeira-dupla-foto">
                                        <div class="div-primeira-dupla-foto-lado ">
                                            <div class="column-7">
                                                <div class="div-63">
                                                    <div class="palavra-amigo">Amigos</div>
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\amigo3.jpeg"
                                                        class="img-14"
                                                    />
                                                </div>
                                            </div>
                                            <div class="column-8">
                                                <div class="div-65">
                                                    <div class="div-66">ver todas</div>
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\amigo4.jpeg"
                                                        class="img-15"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="div-67">
                                        <div class="div-68">
                                            <div class="column-9">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\amigo3.jpeg"
                                                    class="img-16"
                                                />
                                            </div>
                                            <div class="column-10">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\amigo4.jpeg"
                                                    class="img-17"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="div-69">
                                        <div class="div-70">
                                            <div class="column-11">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\amigo3.jpeg"
                                                    class="img-18"
                                                />
                                            </div>
                                            <div class="column-12">
                                                <img
                                                    loading="lazy"
                                                    srcset="src\assets\amigo4.jpeg"
                                                    class="img-19"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ########################################################################################################################################################################################################################################## */}

                                <div class="div-71"> {/*comunidades */}
                                    <div class="div-72">
                                        <div class="div-73">
                                            <div class="column-13">
                                                <div class="div-74">
                                                    <div class="div-75">Comunidades</div>
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\comun1.png"
                                                        class="img-20"
                                                    />
                                                    <div class="div-76">
                                                        Eu nunca terminei
                                                        <br />
                                                        uma borracha
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column-14">
                                                <div class="div-77">
                                                    <div class="div-78">ver todas</div>
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\comun2.png"
                                                        class="img-21"
                                                    />
                                                    <div class="div-79">Eu odeio acordar cedo</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="div-80">
                                        <div class="div-81">
                                            <div class="column-15">
                                                <div class="div-82">
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\comun3.png"
                                                        class="img-22"
                                                    />
                                                    <div class="div-83">Eu colho flores e TONY RAMOS!</div>
                                                </div>
                                            </div>
                                            <div class="column-16">
                                                <div class="div-84">
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\comun4.png"
                                                        class="img-23"
                                                    />
                                                    <div class="div-85">Queria sorvete, mas era feijão</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="div-86">
                                        <div class="div-87">
                                            <div class="column-17">
                                                <div class="div-88">
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\comun5.png"
                                                        class="img-24"
                                                    />
                                                    <div class="div-89">Não sei individualizar duplas</div>
                                                </div>
                                            </div>
                                            <div class="column-18">
                                                <div class="div-90">
                                                    <img
                                                        loading="lazy"
                                                        srcset="src\assets\comun6.png"
                                                        class="img-25"
                                                    />
                                                    <div class="div-91">Eu leio o shampoo no banho</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            </div >
        </>
    );
};

export default Perfil;