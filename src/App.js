
import NavBar from "./components/ui/NavBar/Navbar";
import { useEffect } from "react";
import NavBar from "./components/ui/NavBar/NavBar";
import MainRoutes from "./route/MainRoutes";
import { useDispatch } from "react-redux";
import { checkUpdate } from "./store/posts/postsAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUpdate());
  }, []);
  return (
    <div>
      {/* <NavBar /> */}
      <MainRoutes />
    </div>
  );
}

export default App;
