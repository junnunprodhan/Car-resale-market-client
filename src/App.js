
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='w-10/12 mx-auto'>
      <RouterProvider router={routes} ></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
