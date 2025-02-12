import 'bootstrap/dist/css/bootstrap.min.css';
export default function input({numManifesto, setNumManifesto}){
  return(
    <div className="w-50 row mt-2 justify-content-center">
    <input
      className="form-control form-control-lg b-2 p-3"
      style={{ width: "100%",}}
      name="campoManifesto"
      type="text"
      placeholder='Numero do Manifesto...'
      value={numManifesto}
      onChange={(e) => setNumManifesto(e.target.value)}
    />
  </div>
  )
}