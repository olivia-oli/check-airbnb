import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {Footer} from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './Pages/Home/Home';
import SearchPage from "./Pages/SearchPage/SearchPage";
import Modal from "./components/Modal";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Modal/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
