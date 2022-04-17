import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import About from "./components/page/About";
import Blog from "./components/page/Blog";
import CheckOut from "./components/page/CheckOut";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Signup from "./components/page/Signup";
import Footer from "./components/shared/Footer";
function App() {
  return (
    <div className="">
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" />
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
