import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./layouts/root-layout";
import Chat from "./pages/chat/chat";
import Community from "./pages/community/community";
import Conditions from "./pages/conditions/conditions";
import ErrorPage from "./pages/error/error-page";
import FAQPage from "./pages/faq/faq-page";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Therapist from "./pages/therapist/therapists";
import TermsPage from "./pages/terms/terms-page";
import PrivacyPolicyPage from "./pages/privacy/privacy-policy-page";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/conditions", element: <Conditions /> },
      { path: "/community", element: <Community /> },
      { path: "/therapists", element: <Therapist /> },
      { path: "/chat", element: <Chat /> },
      { path: "/faq", element: <FAQPage /> },
      { path: "/terms", element: <TermsPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
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
