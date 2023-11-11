import { BrowserRouter, Routes, Route } from "react-router-dom";

import Instruction from './view/Instruction';
import UserSetting from './view/UserSetting';
import Faq from './view/Faq';
import AboutUs from './view/AboutUs';
import Story from './components/Story';
import Generate from './components/Generate';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/generate">
            {/** http://localhost:666/generate */}
            <Route path="" element={<Generate />} ></Route>
            {/** http://localhost:666/generate/story */}
            <Route path="story" element={<Story/>}></Route>
          </Route>

          <Route path="/">
            {/* http://localhost:666/instruction */}
            <Route path='instruction' element={<Instruction />}></Route>
            {/* {http://localhost:666/user_setting} */}
            <Route path='user_setting' element={<UserSetting />}></Route>
            {/* {http://localhost:666/faq} */}
            <Route path='faq' element={<Faq />}></Route>
            {/* {http://localhost:666/about_us} */}
            <Route path='about_us' element={<AboutUs />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
