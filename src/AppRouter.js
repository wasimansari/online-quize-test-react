
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import OnlineQuize from './components/OnlineQuize';
import Question from './components/Question';
import { useFirebase } from './context/Firebase';
    // const isAuthenticated = () => {
    //   return localStorage.getItem('isLoggedIn') === 'true';
    // };


    const AppRouter = ()=> {
      const { loginStatus} = useFirebase();
      console.log(loginStatus);
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: 'signup',
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: '/dashboard',
        element: loginStatus ? <Dashboard /> : <Login />, // Protect Dashboard route
        children: [
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'portfolio',
            element: <Portfolio />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'onlinetest',
            element: <OnlineQuize />,
          },
          {
            path: 'question',
            element: <Question />,
          },
        ],
        errorElement: <Error />,
      },
    ]);
        
            return <RouterProvider router={router} />;
          }

export default AppRouter;