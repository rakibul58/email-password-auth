import './App.css';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LoginBootstrap from './components/LoginBootstrap';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
     { 
      path: '/',
      element:<RegisterReactBootstrap />
     },
     { 
      path: '/register',
      element:<RegisterReactBootstrap />
     },
     { 
      path: '/login',
      element:<LoginBootstrap></LoginBootstrap>
     },
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
