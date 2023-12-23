import ss from "../../../public/assets/react.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import "./style.css"
import { useState } from "react";
import { useMediaQuery, useTheme } from '@mui/material';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isToggle, setIsToggle] = useState(false); // Start with menu closed
  return (
    <nav style={{position:"sticky",top:"0",background:"black",zIndex:"99",margin:"0",color:"white"}} >
      <div style={{display:"flex",gap:"10px"}}>

        <button className="nav-button" onClick={() => setIsToggle(!isToggle)}>
          Responsive
        </button>


            <input style={{width:"70%",display:!isMobile?"none":"flex"}}/>
            <img src={ss} style={{display:!isMobile?"none":"flex",width:"50px",height:"50px"}}/>


      </div>
      <ul style={{ display: isMobile ? (isToggle ? 'flex' : 'none') : 'flex',margin:"0" }}>

      <li style={{display:"flex",alignItems:"center",gap:"5px"}}>
          <span>العربة</span>
          <ShoppingCartIcon/>
        </li>
        <li style={{display:"flex",alignItems:"center",gap:"5px"}}>
          <span>دخول</span>
         <LoginIcon/>
        </li>
        <li style={{width:"70%",display:isMobile?"none":"flex"}} >
            <input style={{width:"100%"}}/>
        </li>
        <li><img src={ss} style={{display:isMobile?"none":"flex",width:"50px",height:"50px"}}/></li>
      </ul>
    </nav>
  )
}

export default NavBar;
