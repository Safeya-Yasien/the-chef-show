import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Reservation = lazy(() => import("@/pages/Reservation"));
const Contact = lazy(() => import("@/pages/Contact"));
const PastShows = lazy(() => import("@/pages/PastShows"));
const BookingSuccess = lazy(() => import("@/pages/BookingSuccess"));

// Auth
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));
const VerificationCode = lazy(() => import("@/pages/auth/VerificationCode"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));

// Account
const AccountSetting = lazy(() => import("@/pages/account/AccountSetting"));
const PersonalInfo = lazy(() => import("@/pages/account/PersonalInfo"));
const MyBooking = lazy(() => import("@/pages/account/MyBooking"));

import Error from "@/pages/Error";
import RequireAuth from "@/components/authComponents/requireAuth/RequireAuth";

// Layouts
const BasicLayout = lazy(() => import("@/layouts/BasicLayout"));
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));

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
          element: (
            <RequireAuth>
              <AccountSetting />
            </RequireAuth>
          ),
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
