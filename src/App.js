import { useEffect } from "react";
import Navbar from "./components/ui/NavBar/Navbar";
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
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
