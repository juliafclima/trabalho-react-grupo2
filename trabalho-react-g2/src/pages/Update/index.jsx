import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const validationPost = yup.object().shape({
  titulo: yup.string().required("Preencha o título").max(40, "Até 40 caract."),
  conteudo: yup
    .string()
    .required("Preencha o conteúdo")
    .max(300, "Até 300 caract."),
});

export default function Update() {

  let navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    axios.get(`https://6542dfe001b5e279de1fabce.mockapi.io/posts/${id}`)
      .then(response => {
        reset(response.data);
      }).catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  const addPost = (data) => {
    axios
      .put(`https://6542dfe001b5e279de1fabce.mockapi.io/posts/${id}`, data)
      .then(() => {
        console.log('Deu certo!');
        reset();
        navigate('/depoimentos');
         
      })
      .catch(() => {
        alert('Deu errado!');
      });
  };

  return (
    <div>
      <Header />
      <main className='divPrincipal'>
        <div className="card-post">
          <h1>Atualizar depoimento</h1>
          <hr />
          <div className="card-body-post">
            <form className='formulario' action="#" onSubmit={handleSubmit(addPost)}>
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
                  cols="50"
                  rows="11"
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