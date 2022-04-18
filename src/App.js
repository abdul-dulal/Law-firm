import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import useService from "./components/Hooks/useService";
import Layout from "./components/Layout";
import About from "./components/page/About";
import Blog from "./components/page/Blog";
import CheckOut from "./components/page/CheckOut";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import PageNotFound from "./components/page/PageNotFound";
import Signup from "./components/page/Signup";
import RequirAuth from "./components/RequirAuth";
import Footer from "./components/shared/Footer";
import SignleService from "./components/SignleService";
export const serviceContext = createContext();
function App() {
  const [services, setServices] = useService();
  return (
    <serviceContext.Provider value={[services]}>
      <div className="">
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/checkout"
              element={
                <RequirAuth>
                  <CheckOut />
                </RequirAuth>
              }
            />
            {/* <Route path="/singleservice" element={<SignleService />} /> */}
            <Route
              path="/singleservice/:serviceId"
              element={<SignleService />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Layout>
      </div>
    </serviceContext.Provider>
  );
}

export default App;
