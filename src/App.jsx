import React from 'react';
import Logo from './component/Logo';
import { Route, Routes } from 'react-router-dom';
import Users from './Routers/Users';
import UserInfo from './Routers/UserInfo';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:name" element={<UserInfo />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
