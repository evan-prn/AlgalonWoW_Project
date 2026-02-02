import type { RouteObject } from "react-router-dom";
import RootLayout           from "./RootLayout.tsx";
import App                  from "../App.tsx";
import ConnectionApiTest    from '../api/ConnectionApiTest.tsx';

const myRoutes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [

            {
                index: true,
                element: <App />
            },

            {   // route de test connection vers l'api du backend
                path: "connection-backend-test",
                element: <ConnectionApiTest />,
                errorElement: <h1>Error</h1>
            },
        ]
    }
]

export default myRoutes;