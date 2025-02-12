import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/logoFundoBranco.png";

export default function TituloPagina() {
  return (
    <div id="divManifesto" className="row m-0">
      <div className="col-12 d-flex align-items-center justify-content-between text-white px-3" 
           style={{ backgroundColor: "rgb(12, 52, 80)", maxHeight: "10vh" }}>

        {/* Logo Responsivo - Alinhado à esquerda */}
        <img className="img-fluid" src={logo} alt="logo" 
             style={{ maxWidth: "200px", height: "auto" }} />

        {/* Título Responsivo - Centralizado */}
        <h2 className="text-center flex-grow-1 m-0" 
            style={{ fontSize:30, fontFamily:'fantasy', letterSpacing:1, }}>
          Portal das Evidências
        </h2>

      </div>
    </div>
  );
}
