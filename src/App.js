import {Route, Routes} from "react-router-dom"
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/shop";


function App() {
  return(
    <Routes >
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
