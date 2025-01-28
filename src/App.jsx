import { Navigate, Route, Routes } from "react-router";
// import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { apiRefreshUserThunk } from "./redux/auth/operations";

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
      <Layout></Layout>

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
