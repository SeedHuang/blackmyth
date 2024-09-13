import { createBrowserRouter } from "react-router-dom";
import Home from '@pages/home';
import NotFound from '@components/notFound';
import Editor from '@pages/editor';

const homeOptions = {
    element: (<Home/>),
    errorElement: (<NotFound/>)
}

const routerConfig = createBrowserRouter([
    {
        path: '/home',
        ...homeOptions
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
    },
    // ,
    // {
    //     path: '/detail',
    //     element: (<Detail/>)
    // },
    {
        path: '/editor',
        element: (<Editor/>)
    },
    {
        path: '/',
        ...homeOptions
    }
]);

export default routerConfig;