import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";


const validationPost = yup.object().shape({
  titulo: yup.string().required("Preencha o título").max(60, "Até 60 caract."),
  conteudo: yup
    .string()
    .required("Preencha o conteúdo")
    .max(500, "Até 500 caract."),
});

export default function Posts() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => {
    axios
      .post("https://6542dfe001b5e279de1fabce.mockapi.io/posts", data)
      .then(() => {
        console.log('Deu certo!');
        reset();
        navigate('/depoimentos');
      })
      .catch(() => {
        alert('Deu errado!');
      });
  }

  return (
    <div>
      <Header />
      <main className="divPrincipal">
        <div className="formulario card-post">
          <h1>Criar depoimento</h1>
          <hr />
          <div className="card-body-post">
            <form action="#" onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label htmlFor="titulo">Titulo</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  {...register("titulo")}
                />
                <p className="error-message">{errors.titulo?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="conteudo">Conteúdo</label>
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  id="conteudo"
                  {...register("conteudo")}
                ></textarea>
                <p className="error-message">{errors.conteudo?.message}</p>
              </div>

              <div className="btn-post">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}