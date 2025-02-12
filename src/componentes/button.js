import 'bootstrap/dist/css/bootstrap.min.css';
export default function btnBusca({buscarEvidencias, btn}){
  return(
    
        <button 
          className="btn btn-success mt-3 p-3"
          style={{width:"48%"}} 
          onClick={buscarEvidencias} 
          disabled={btn}
        >
          {btn ? <p className="m-0 fw-bold">Buscando...</p>: <p className="m-0 fw-bold">Buscar Evidências</p>}
        </button>
      
  )
}