import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carregamento from "../paginaCarregamento/carregamento";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/carregamento" element={<Carregamento/>} />
      </Routes>
    </Router>
  );
}

export default App;
