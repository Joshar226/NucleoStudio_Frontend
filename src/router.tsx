import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const HomeView = lazy(() => import('./views/HomeView'))
const AboutUsView = lazy(() => import('./views/AboutUsView'))
const PrivacyPolicyView = lazy(() => import('./views/PrivacyPolicyView'))
const ContactView = lazy(() => import('./views/ContactView'))


export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Spinner/>}>
        <Routes >
          <Route element={<AppLayout/>}>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/about" element={<AboutUsView/>}/>
            <Route path="/privacy-policy" element={ <PrivacyPolicyView />}/>
            <Route path="/contact" element={<ContactView/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
