import { Routes, Route  } from "react-router-dom";
import Acceuil from "../Pages/Acceuil";
import Apropos from "../Pages/Apropos";
import Erreur from "../Pages/Erreur";

export default function Router(){
   return <Routes>        
      <Route path="/" element={<Acceuil />}  exact="true"/>
      <Route path="/apropos" element={<Apropos />}  />
      <Route path="*" element={<Erreur />}  />
   </Routes>
}