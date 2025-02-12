import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from "../componentes/tituloPagina";
export default function carregamento(){
  return(
    <div className="container-fluid p-0">
      <Titulo/>

    <img src="../assets/code.gif" alt='code'/>
    </div>
  );
}