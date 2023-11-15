import { useEffect } from "react";
import MainRoutes from "./route/MainRoutes";
import { useDispatch } from "react-redux";
import { checkUpdate } from "./store/posts/postsAction";
import NewNavbar from "./components/ui/NewNavbar/NewNavbar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUpdate());
  }, []);
  return (
    <div>
      <NewNavbar />
      <MainRoutes />
    </div>
  );
}

export default App;
