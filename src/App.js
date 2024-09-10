import { RouterProvider } from 'react-router-dom';
import routerConfig from '@router';
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
