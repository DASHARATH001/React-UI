import './App.css'
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Header from './components/Header';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gallary",
          element: <Gallary />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blog",
          element: <Blog />
        },
      ]
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
