import "./App.css";
// import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
// import Profile from "./Components/Profile";
import Category from "./Components/Category";
import { StateProvider } from "./Components/Contexts";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <StateProvider>
      <BrowserRouter>
      <ToastContainer />
        {/* <Navbar />
      <Routes>
      <Route path='/profile' element={<Profile />}/>
    </Routes> */}
        <Category />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
