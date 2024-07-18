import { BrowserRouter, Routes, Route } from "react-router-dom";

import Instruction from './view/Instruction';
import UserSetting from './view/UserSetting';
import Faq from './view/Faq';
import AboutUs from './view/AboutUs';

import Generate from './components/Generate';
import Creating from "./components/Creating";
import Voice from "./components/Voice";
import Advanced from "./components/Advanced";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/generate">
            {/** http://localhost:666/generate */}
            <Route index element={<Generate />} ></Route>
            {/** http://localhost:666/generate/creating */}
            <Route path="creating" element={<Creating />}></Route>
            { }
            <Route path="creating/advanced" element={<Advanced />}></Route>
            {/** http://localhost:666/generate/voice */}
            <Route path="voice" element={<Voice />}></Route>

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
