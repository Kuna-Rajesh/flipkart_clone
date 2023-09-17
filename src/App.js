import './CSSfiles/Home.css';
import './App.css';
import './CSSfiles/Main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Login from './components/Login.js';
import Signup from './components/Signup';
import Home from './components/Home.js';
import Main from './components/Main';
import PhoneSignUp from './components/PhoneSignUp';
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Signup />} />
          <Route path='Main' element={<Main/>} />
          <Route path='PhoneSignUp' element={<PhoneSignUp />} />
          
        </Route>
      </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
