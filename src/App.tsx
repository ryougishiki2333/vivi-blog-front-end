import React, { Suspense, lazy } from "react";
import { Link, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
};

export default App;
