import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPagina from '../componentes/tituloPagina';
import Campo from "../componentes/input";
import Botao from "../componentes/button";
import { useState } from 'react';
import { FaDownload } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function Home() {
  const [numManifesto, setNumManifesto] = useState("");
  const [erro, setErro] = useState(null);
  const [imagens, setImagens] = useState([]);
  const [btn, setBtn] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    swipeToSlide: false,
    slidesToShow: imagens.length < 3 ? imagens.length : 3, // Ajusta slides conforme a quantidade de imagens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: imagens.length < 3 ? imagens.length : 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const buscarEvidencias = async () => {
    setBtn(true);
    try {
      const response = await axios.get(`http://localhost:1207/imagens/${numManifesto}`);
      
      if (response.data.success && Array.isArray(response.data.imagens) && response.data.imagens.length > 0) {
        const imagensComMinuta = response.data.imagens
          .filter(img => img.base64)
          .map(img => ({
            src: `data:image/*;charset=utf-8;base64,${img.base64}`,
            minuta: img.minuta
          }));

        setImagens(imagensComMinuta);
        setErro(null);
      } else {
        setErro("Nenhuma imagem encontrada.");
        setImagens([]);
      }
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      setErro("Erro ao buscar imagens.");
      setImagens([]);
    } finally {
      setBtn(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      <TituloPagina />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', maxWidth: '100vw' }}>

        {imagens.length === 0 && (
          <>
            <Campo numManifesto={numManifesto} setNumManifesto={setNumManifesto} />
            <Botao btn={btn} buscarEvidencias={buscarEvidencias} />
          </>
        )}

        {imagens.length > 0 && (
          <div className="m-2 text-left w-100">
            <h4 className="text-left mb-2">Manifesto: {numManifesto}</h4>
            <Slider {...settings} className="justify-content-between align-items-around">
              {imagens.map((imagem, index) => (
                <div key={index} className="d-flex flex-column justify-content-start align-items-center m-2">
                  <div>
                
                  <p>Minuta: {imagem.minuta}</p>
                  </div>
                  
                  <img
                    src={imagem.src}
                    alt={`Imagem ${index}`}
                    style={{
                      width: "95%",
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      marginBottom: "10px" // Espaço entre a imagem e o ícone
                    }}
                    className="m-2"
                  />
                  {/* Botão de download com a minuta como nome do arquivo */}
                  <a
                    href={imagem.src}
                    download={`${numManifesto}_${imagem.minuta}.jpg`}
                    className="d-flex justify-content-center align-items-center m-1 p-2"
                    style={{
                      width: "95%",
                      backgroundColor: "#28a745", // Cor verde para o fundo
                      borderRadius: "5px",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <FaDownload size={35} style={{ color: "white" }} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        )}
        
      </div>

      {erro && (
        <div className="alert alert-danger mt-3 text-center">
          {erro}
        </div>
      )}
    </div>
  );
}

export default Home;
