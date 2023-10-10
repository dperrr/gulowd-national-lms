import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./pages/Login.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;