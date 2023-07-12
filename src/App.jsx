import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const SharedLayout = lazy(() =>
  import("./components/sharedLayout/SharedLayout")
);

const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route index element={<HomePage />}></Route>
          <Route path="gallery" element={<GalleryPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
