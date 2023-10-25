import {} from "react";
import Home from "./Home"
import Contato from "./Contato";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Formulario from "./Formulario";



const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}><Route/>
                <Route path="/" element={<Contato />}></Route>
                <Route path="/" element={<Formulario />}></Route>               
              </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;
