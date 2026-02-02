import type { RouteObject } from "react-router-dom";
import RootLayout           from "./RootLayout.tsx";
import App                  from "../App.tsx";
import ClassesList from "../components/Classes/ClassesList/ClassesList.tsx";

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
                path: "classes",
                element: <ClassesList />,
                errorElement: <> <p> Erreur </p> </>
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