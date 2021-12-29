import { Routes, Route  } from "react-router-dom";
import Acceuil from "../Pages/Acceuil";
import Apropos from "../Pages/Apropos";
import Erreur from "../Pages/Erreur";

export default function Router(){
   return <Routes>        
      <Route path="/" element={<Acceuil />}  exact/>
      <Route path="/apropos" element={<Apropos />}  exact/>
      <Route path="*" element={<Erreur />}  exact/>
   </Routes>
}