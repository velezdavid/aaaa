import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

import CreateNote from "./screens/CreateNote/CreateNote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <CreateNote />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
