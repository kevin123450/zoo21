import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Zoo } from "./components/Zoo";
import { Animal } from "./components/Animal";
import { NotFound } from "./components/Notfound";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/zoo" element={<Zoo />}></Route>
        <Route path="/animal/:id" element={<Animal />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
