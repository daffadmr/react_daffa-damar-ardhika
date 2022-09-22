import "./App.css";
import TodoList from "./pages/TodoList/TodoList";
import { Routes, Route } from "react-router-dom";
import AboutApp from "./pages/AboutApp/AboutApp";
import AboutAuthor from "./pages/AboutAuthor/AboutAuthor";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/about" element={<About/>} />
      <Route path="/about-app" element={<AboutApp/>} />
      <Route path="/about-author" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
