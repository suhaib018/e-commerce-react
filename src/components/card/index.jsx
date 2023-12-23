import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import "./style.css"
import ss from "../../../public/assets/react.png"

const Card = () => {
  return (
    <div className='card-container'>
    <img src={ss} style={{  height: "100%" ,width:"100%" }} />
    <FavoriteBorderIcon />
    <p>dsdskjdnsjdslkdj;dfks;jlj;</p>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>دينار</p>
      <p>4.5 <StarRateIcon sx={{color:"yellow"}}/> </p>
    </div>
  </div>
  )
}

export default Card
