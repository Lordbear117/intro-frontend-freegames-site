import { Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="games/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
