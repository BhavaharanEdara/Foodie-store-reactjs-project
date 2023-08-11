import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header.js'
import Body from './Components/Body.js';
import Orders from './Components/Orders';
import About from './Components/About';
import Footer from './Components/Footer';
import {Provider} from "react-redux"
import store from './Constants/Store';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Cart from './Components/Cart';
function App() {
  return (
    <Provider store = {store}>
      <div className='font-sans no-scrollbar'>
        <Header />
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
    );
}


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/menu",
        element: <Orders/>,
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);


