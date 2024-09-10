import { createBrowserRouter } from "react-router-dom";
import Home from '@pages/home';
import NotFound from '@components/notFound';

const routerConfig = createBrowserRouter([
    
    {
        path: '/home',
        element: (<Home/>),
        errorElement: (<NotFound/>)
        // ,
        // children: [
        //     {
        //         index: true,
        //         element: (<HotRecommands/>)
        //     },
        //     {
        //         path: '/home/rate',
        //         element: (<Rate/>)
        //     },
        //     {
        //         path: '*',
        //         element: (<NotFound/>)
        //     }
        // ]
    }
    // ,
    // {
    //     path: '/detail',
    //     element: (<Detail/>)
    // },
    // {
    //     path: '/',
    //     element: (<Home/>),
    //     errorElement: <NotFound/>,
    // }
]);

export default routerConfig;