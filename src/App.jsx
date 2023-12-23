import SwiperComponent from "./components/swiper";
import NavBar from "./components/navBar";
import SubCategory from "./components/subCategory";
import Allcategoriespage from "./pages/allCategoriesPage/allcategoriespage";
import ProductsPage from "./pages/productsPage";
import LoginPage from "./pages/loginPage";
const App = () => {
  return (
    <>
    <NavBar />
    {/* <Allcategoriespage/> */}
    {/* <ProductsPage/> */}
    <LoginPage/>
    {/* <SwiperComponent />
      <SubCategory buttonName={"المزيد"} categoryName={"الاكثر مبيعا"}/>
      <SubCategory buttonName={"المزيد"} categoryName={"اشهر الماركات"} isCard/>
      <SubCategory buttonName={"المزيد"} categoryName={"الاكثر مبيعا"}/>
      <SubCategory buttonName={"المزيد"} categoryName={"الاكثر مبيعا"}/>
      <SubCategory buttonName={"المزيد"} categoryName={"اشهر الماركات"} isCard/> */}


    </>
  );
};
export default App;