import { useEffect } from "react";
import "./App.css";
import MainRoutes from "./route/MainRoutes";
import { useDispatch } from "react-redux";
import { checkUpdate } from "./store/posts/postsAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUpdate());
  }, []);
  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
