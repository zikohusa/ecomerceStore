import {Route, Routes} from "react-router-dom"
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/Authentication/Authentication";

const Shop = () => {
  return <h1>i am the shop page bitcheeees</h1>
}

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
