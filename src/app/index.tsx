import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Menu from "../pages/Menu/Menu";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Admin from "../pages/Admin/Admin";
import {ConfigProvider} from "antd";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>main</div>,
        errorElement: <Error/>
    },
    {
        path: "/admin",
        element: <Admin/>,
        errorElement: <Error/>
    },
    {
        path: "/:name",
        element: <Menu/>,
        errorElement: <Error/>,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <Error/>
    },

]);

function App() {

  return (
      <ConfigProvider
          theme={{
              token: {
                  // Seed Token
                  colorPrimary: '#00b96b',
                  borderRadius: 2,

                  // Alias Token
                  colorBgContainer: '#f6ffed',
              },
          }}
      >
          <RouterProvider router={router} />
      </ConfigProvider>
  )
}

export default App
