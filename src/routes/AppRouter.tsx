import BasicLayout from "@/layouts/BasicLayout";
import AccountSetting from "@/pages/account/AccountSetting";
import BookingSuccess from "@/pages/BookingSuccess";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import MyBooking from "@/pages/account/MyBooking";
import PastShows from "@/pages/PastShows";
import PersonalInfo from "@/pages/account/PersonalInfo";
import Register from "@/pages/auth/Register";
import Reservation from "@/pages/Reservation";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerificationCode from "@/pages/auth/VerificationCode";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "reservation",
          element: <Reservation />,
        },
        {
          path: "contactus",
          element: <Contact />,
        },
        {
          path: "past-shows",
          element: <PastShows />,
        },
        {
          path: "reservation/booking-success",
          element: <BookingSuccess />,
        },
        {
          path: "account",
          element: <AccountSetting />,
          children: [
            {
              index: true,
              element: <PersonalInfo />,
            },
            {
              path: "my-booking",
              element: <MyBooking />,
            },
          ],
        },
      ],
    },
    {
      element: <BasicLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },

        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "verification-code",
          element: <VerificationCode />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
