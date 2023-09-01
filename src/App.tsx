import { BrowserRouter, Routes, Route } from "react-router-dom";

import SD from './view/SD';
import Instruction from './view/Instruction';
import UserSetting from './view/UserSetting';
import Faq from './view/Faq';
import AboutUs from './view/AboutUs';
import Chatroom from './container/Socketio';

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
          <Route path='test_socket' element={<Chatroom />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
