import { RouterProvider } from 'react-router-dom';
import routerConfig from '@router';

function App() {
  return (
    <div>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
