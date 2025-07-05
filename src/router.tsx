import { BrowserRouter, Route, Routes } from "react-router";
import BasicLandingView from "./views/BasicLandingView";
import StandardLandingView from "./views/StandardLandingView";
import PremiumLandingView from "./views/PremiumLandingView";
import HomeView from "./views/HomeView";


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />}/>
            <Route path="/pagina-basica" element={<BasicLandingView />}/>
            <Route path="/pagina-estandar" element={<StandardLandingView />}/>
            <Route path="/pagina-premium" element={<PremiumLandingView />}/>
        </Routes>
    </BrowserRouter>
  )
}
