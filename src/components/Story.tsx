import { useLocation } from "react-router";
import {useState, useEffect} from 'react';

import ShowImage from "./showImage";

export default function Story(){
   let location = useLocation();
   console.log(location.state)
   return (
      <div>
         <p>Hello World</p>
         <br />
      </div>
   );
}