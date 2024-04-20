import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const SharedLayout = lazy(() =>
  import("./components/sharedLayout/SharedLayout")
);

const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));
const RegulaminPage = lazy(() => import("./pages/RegulaminPage/RegulaminPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const CennikPage = lazy(() => import("./pages/CennikPage/CennikPage"));

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route index element={<HomePage />}></Route>
          <Route path="gallery" element={<GalleryPage />}></Route>
          <Route path="regulamin" element={<RegulaminPage />}></Route>
          <Route path="kontakt" element={<ContactPage />}></Route>
          <Route path="cennik" element={<CennikPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
