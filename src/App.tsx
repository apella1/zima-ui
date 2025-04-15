import RootLayout from "@/layouts/root-layout";
import Chat from "@/pages/chat/chat";
import Community from "@/pages/community/community";
import Conditions from "@/pages/conditions/conditions-page";
import FAQ from "@/pages/faq/faq-page";
import Home from "@/pages/home/home";
import Login from "@/pages/login/login";
import PrivacyPolicy from "@/pages/privacy/privacy-policy-page";
import Signup from "@/pages/signup/signup";
import Terms from "@/pages/terms/terms-page";
import Therapists from "@/pages/therapist/therapists";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import ErrorPage from "./pages/error/error-page";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/conditions",
        element: <Conditions />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/therapists",
        element: <Therapists />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
