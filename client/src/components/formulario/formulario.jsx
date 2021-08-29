import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import axios from "axios";

import * as S from "./formulario-styles";

import Estados from "../estados/estados";
import EstadoCivil from "../estadoCivil/estadoCivil";
import Gênero from "../gênero/gênero";
import Habilitacao from "../habilitação/habilitação";

export default function Formulario() {
  const [erro, setErro] = useState(false);

  const onSubmit = async (values) => {
    try {
      const user = await axios.post("https://jobs-net-gama-academy.herokuapp.com/registrar", values);
      if (user.status === 200) {
        alert("Cadastro efetuado com sucesso!");
      }
    } catch (err) {
      setErro(true);
    }
  };

  const onBlurCep = (ev, setFieldValue) => {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("estado", data.uf);
      });
  };

  const schema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório!"),
    cargo_pretendido: yup.string().required("Cargo é obrigatório!"),
    data_nascimento: yup.date().required("Data de nascimento é obrigatória!"),
    telefone_fixo_1: yup.number().required("Telefone é obrigatório!"),
    cep: yup.number().required("Cep é obrigatório!"),
    logradouro: yup.string().required("Logradouro é obrigatório!"),
    bairro: yup.string().required("Bairro é obrigatório!"),
    número: yup.number().required("Número é obrigatório!"),
    cidade: yup.string().required("Cidade é obrigatório!"),
    celular: yup.number().required("Celular é obrigatório!"),
    email: yup.string().required("Email é obrigatório!"),
    cpf: yup.number().required("Cpf é obrigatório!")
  });

  const initialValues = {
    nome: "",
    cargo_pretendido: "",
    estado_civil: "",
    gênero: "",
    data_nascimento: "",
    cep: "",
    logradouro: "",
    número: "",
    bairro: "",
    cidade: "",
    estado: "",
    telefone_fixo_1: "",
    telefone_fixo_2: "",
    celular: "",
    contato: "",
    email: "",
    rg: "",
    cpf: "",
    possui_veiculo: false,
    tipo_habilitação: ""
  };

  return (
    <S.Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        {({ errors, setFieldValue, values }) => (
          <Form>
            <S.Title>Dados Pessoais</S.Title>
            <S.DadosContainer>
              <S.ColumnContainer>
                <section>
                  <label>Nome Completo: </label>
                  <Field name="nome" type="text" placeholder="Nome Completo" />
                  {errors.nome && <S.Mandatory>{errors.nome}</S.Mandatory>}
                </section>

                <section>
                  <label>Data de Nascimento: </label>
                  <Field name="data_nascimento" type="date" />
                  {errors.data_nascimento && (
                    <S.Mandatory>{errors.data_nascimento}</S.Mandatory>
                  )}
                </section>

                <section>
                  <label>Cep: </label>
                  <Field
                    name="cep"
                    type="text"
                    placeholder="Cep"
                    onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                  />
                  {errors.cep && <S.Mandatory>{errors.cep}</S.Mandatory>}
                </section>

                <section>
                  <label>Logradouro: </label>
                  <Field
                    type="text"
                    name="logradouro"
                    placeholder="Logradouro"
                  />
                  {errors.logradouro && (
                    <S.Mandatory>{errors.logradouro}</S.Mandatory>
                  )}
                </section>

                <section>
                  <label>Cidade: </label>
                  <Field type="text" name="cidade" placeholder="Cidade" />
                  {errors.cidade && <S.Mandatory>{errors.cidade}</S.Mandatory>}
                </section>

                <section>
                  <label>Estado: </label>
                  <Field name="estado" as="select">
                    <Estados />
                  </Field>
                </section>

                <section>
                  <label>Telefone Fixo 1: </label>
                  <Field
                    name="telefone_fixo_1"
                    type="tel"
                    placeholder="Telefone Fixo 1"
                  />
                  {errors.telefone_fixo_1 && (
                    <S.Mandatory>{errors.telefone_fixo_1}</S.Mandatory>
                  )}
                </section>

                <section>
                  <label>Celular: </label>
                  <Field type="tel" name="celular" placeholder="Celular" />
                  {errors.celular && (
                    <S.Mandatory>{errors.celular}</S.Mandatory>
                  )}
                </section>
              </S.ColumnContainer>

              <S.ColumnContainer>
                <section>
                  <label>Cargo Pretendido: </label>
                  <Field
                    name="cargo_pretendido"
                    type="text"
                    placeholder="Cargo Pretendido"
                  />
                  {errors.cargo_pretendido && (
                    <S.Mandatory>{errors.cargo_pretendido}</S.Mandatory>
                  )}
                </section>

                <section>
                  <S.RowContainer>
                    <section>
                      <label>Estado Civil: </label>
                      <Field as="select" name="estado_civil">
                        <EstadoCivil />
                      </Field>
                    </section>

                    <section>
                      <label>Gênero: </label>
                      <Field name="gênero" as="select">
                        <Gênero />
                      </Field>
                    </section>
                  </S.RowContainer>
                </section>

                <section>
                  <label>Bairro: </label>
                  <Field type="text" name="bairro" placeholder="Bairro" />
                  {errors.bairro && <S.Mandatory>{errors.bairro}</S.Mandatory>}
                </section>

                <section>
                  <label>Número: </label>
                  <Field name="número" placeholder="Número" type="text" />
                  {errors.número && <S.Mandatory>{errors.número}</S.Mandatory>}
                </section>

                <section>
                  <label>Telefone Fixo 2: </label>
                  <Field
                    name="telefone_fixo_2"
                    type="tel"
                    placeholder="Telefone Fixo 2"
                  />
                </section>

                <section>
                  <label>Contato: </label>
                  <Field name="contato" type="text" placeholder="Contato" />
                </section>

                <section>
                  <label>Email:</label>
                  <Field name="email" type="email" placeholder="Email" />
                  {errors.email && <S.Mandatory>{errors.email}</S.Mandatory>}
                </section>
              </S.ColumnContainer>
            </S.DadosContainer>

            <S.Title>Documentos</S.Title>
            <S.DocumentosContainer>
              <S.FlexRow>
                <section>
                  <label>RG: </label>
                  <Field name="rg" type="text" placeholder="Identidade" />
                </section>

                <section>
                  <label>CPF: </label>
                  <Field name="cpf" type="text" placeholder="CPF" />
                  {errors.cpf && <S.Mandatory>{errors.cpf}</S.Mandatory>}
                </section>
              </S.FlexRow>

              <S.FlexRow>
                <section>
                  <label>Possui Veículo? </label>
                  <Field
                    type="checkbox"
                    name="possui_veiculo"
                    id="possui_veiculo"
                  />
                </section>

                {values.possui_veiculo && (
                  <section>
                    <label>Habilitação</label>
                    <Field as="select" name="tipo_habilitação">
                      <Habilitacao />
                    </Field>
                  </section>
                )}
              </S.FlexRow>
            </S.DocumentosContainer>

            <S.Button type="submit">Enviar</S.Button>
            {erro && <S.Erro>Ocorreu um erro. Tente novamente</S.Erro>}
          </Form>
        )}
      </Formik>
    </S.Container>
  );
}
