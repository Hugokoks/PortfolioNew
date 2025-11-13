import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Notification from "./components/Notification/Notification";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
export default function App() {
  return (
    <>
      <Notification />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
