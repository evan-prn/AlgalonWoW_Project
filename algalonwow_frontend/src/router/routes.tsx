import type { RouteObject } from "react-router-dom";
import RootLayout           from "./RootLayout.tsx";
import App                  from "../App.tsx";

const myRoutes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [

            {
                index: true,
                element: <App />
            },
            {
                path: "classes"
                // TODO : element for 'classes'
            },
            {
                path: "talents"
                // TODO : element for 'talents'
            },
            {
                path: "guides"
                // TODO : element for 'guides'
            },
            {
                path: "forum"
                // TODO : element for 'forum'
            },
        ]
    }
]

export default myRoutes;