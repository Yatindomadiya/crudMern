import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './components/getUser/user';
import Update from './components/updateUSer/update';
import Adduser from './components/addUser/Adduser';


const route = createBrowserRouter([
  {
    path: '/',
    element: <User/>
  },
  {
    path: '/add',
    element: <Adduser/>
  },
  { 
    path: '/update/:id',
    element: <Update/>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
