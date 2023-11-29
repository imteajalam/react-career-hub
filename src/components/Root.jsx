import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div>
        <Navbar />
        {
          navigation.state === 'loading' ? <span className={`loading  loading-bars absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 text-white`}></span> : <Outlet></Outlet>
        }
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;