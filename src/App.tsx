import { Home } from "lucide-react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import ErrorPage from "./pages/error/ErrorPage";
import Groups from "./pages/groups/Groups";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Therapist from "./pages/therapist/Therapist";
import Conditions from "./pages/conditions/Conditions";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/conditions", element: <Conditions /> },
  { path: "/groups", element: <Groups /> },
  { path: "/therapist", element: <Therapist /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
