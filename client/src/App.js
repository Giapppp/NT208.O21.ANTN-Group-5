import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./containers/public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
