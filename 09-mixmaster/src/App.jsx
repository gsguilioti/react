import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, HomeLayout, Landing, Newsletter, Error, Cocktail } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'cocktail',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  },
  {
    path: '/error',
    element: <Error />
  },

])

const App = () => {
  return <RouterProvider router={router} />
};
export default App;
