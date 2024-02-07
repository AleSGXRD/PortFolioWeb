import { useState, useEffect } from "react";


const STYLE_DARK = ["#EFDB92" ,"#121212","#1a1a1a"];
const STYLE_LIGHT = ["#5b52df" ,"#fefefe","#fafafa"];

function useMode() {
    const [modeDarker,setModeDarker] = useState(false);
    const [styles, setStyles] = useState(getStyle());

    function getStyle(){
        return modeDarker == false ? STYLE_LIGHT : STYLE_DARK;
    }

    const handleClick = ()=>{
        setModeDarker((prev) => !prev)
    }
    
    useEffect(()=>{
        setStyles(getStyle());
    },[modeDarker])

    return {modeDarker,styles,handleClick}
}

export default useMode;