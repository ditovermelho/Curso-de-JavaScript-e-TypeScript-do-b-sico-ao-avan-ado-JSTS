import React from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import Loading from "../../components/Loading";
import { Img, ProfilePicture } from "./styled.js";
import axios from "../../services/axios.js";
import history from "../../services/history.js";

export default function Fotos({ match }) {
  const id = get(match, "params.id", "");
  const [isLoading, setIsLoading] = React.useState(false);
  const [foto, setFoto] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
      } catch (err) {
        toast.error("Erro ao obter imagem");
        history.push('/');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  const handleChange = async e => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    // Preview da foto
    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', file);

    try {
      setIsLoading(true);
      const { data } = await axios.post(`/fotos/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFoto(data.url);
      toast.success("Foto enviada com sucesso!");
    } catch (err) {
      toast.error("Erro ao enviar foto!");
    } finally {
      setIsLoading(false);
    }
  };

  // Retorna erro e não envia a imagem
  return (
    <ProfilePicture>
      <Loading isLoading={isLoading} />
      <Img>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : "Selecionar"}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Img>
    </ProfilePicture>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
