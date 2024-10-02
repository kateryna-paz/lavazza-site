import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/UI/header/Header.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Footer from "./components/UI/footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
