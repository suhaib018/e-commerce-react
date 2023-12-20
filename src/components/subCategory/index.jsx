import "./style.css";
import ss from "../../../public/assets/react.svg";
import Card from "../card";
const SubCategory = ({ buttonName, categoryName,isCard }) => {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" ,alignItems:"center"}}>
        {
            buttonName &&
        <button className="subCategoryButton">
          {buttonName}
        </button>
        }
        <h2>
          {categoryName}
        </h2>
      </div>




{
  isCard?(
    <div className="cardGrid">
    <Card /><Card /><Card /><Card /></div>
):(
  <div className="grid-container">
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    </div>

  )
}





    </div>
  );
};

export default SubCategory;
