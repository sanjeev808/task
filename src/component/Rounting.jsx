
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import FirstPage from './FirstPage.jsx'
import Secondpage from './Secondpage.jsx';
import ThirdPage from './ThirdPage.jsx';
import Fourthpage from './Fourthpage';

export default function Rounting() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/secondpage" element={<Secondpage />} />
      <Route path="/thirdpage" element={<ThirdPage />} />
      <Route path="/fourthpage" element={<Fourthpage />} />



    </Routes>
  </BrowserRouter>
    </div>
  )
}
