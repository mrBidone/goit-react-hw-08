import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { apiRefreshUserThunk } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";

const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
