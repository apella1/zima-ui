import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Conditions from "./pages/conditions/conditions";
import ErrorPage from "./pages/error/error-page";
import Groups from "./pages/groups/groups";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Therapist from "./pages/therapist/therapists";
import RootLayout from "./layouts/root-layout";
import Chat from "./pages/chat/chat";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/conditions", element: <Conditions /> },
      { path: "/groups", element: <Groups /> },
      { path: "/therapists", element: <Therapist /> },
      { path: "/chat", element: <Chat /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
