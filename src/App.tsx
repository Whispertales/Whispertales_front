import { BrowserRouter, Routes, Route } from "react-router-dom";

import SD from './view/SD';
import Instruction from './view/Instruction';
import UserSetting from './view/UserSetting';
import Faq from './view/Faq';
import AboutUs from './view/AboutUs';
import Sleep from './components/Sleep';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* http://localhost:3000/stable_diffusion */}
          <Route path='stable_diffusion' element={<SD />} />
          {/* http://localhost:3000/instruction */}
          <Route path='instruction' element={<Instruction />}></Route>
          {/* {http://localhost:3000/user_setting} */}
          <Route path='user_setting' element={<UserSetting />}></Route>
          {/* {http://localhost:3000/faq} */}
          <Route path='faq' element={<Faq />}></Route>
          {/* {http://localhost:3000/about_us} */}
          <Route path='about_us' element={<AboutUs />}></Route>
          {/* {http://localhost:3000/sleep} */}
          <Route path='sleep' element={<Sleep />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
