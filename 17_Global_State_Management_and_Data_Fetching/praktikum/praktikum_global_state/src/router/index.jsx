import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList/TodoList";
import AboutApp from "../pages/AboutApp/AboutApp";
import AboutAuthor from "../pages/AboutAuthor/AboutAuthor"
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";

const SetupRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
          <Route path="/" element={<TodoList/>} />
          <Route path="/about" element={<About />} />
          <Route path="/about-app" element={<AboutApp />} />
          <Route path="/about-author" element={<AboutAuthor />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
		</BrowserRouter>
	);
};

export default SetupRouter;