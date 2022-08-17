import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Login from "./layout/Login";
import FormularioLogin from "./paginas/FormularioLogin";
import FundamentoUseEffect from "./paginas/FundamentosUseEffect";
import FundamentoUseState from "./paginas/FundamentosUseState";
import LandingPage from "./paginas/LandingPage";


function App() {
  //const [count, setCount] = useState(0)

  return (
        <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin/>}/>
          {/* PARA ESPECIFICAR UNA RUTA */}
          {/* <Route path="form" element={<FormularioLogin/>}/> */} 
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState />} />
          <Route path="useffect" element={<FundamentoUseEffect />} />
        </Route>

      </Routes>
    </BrowserRouter>


  )
}

export default App
