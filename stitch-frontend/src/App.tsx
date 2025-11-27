// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";

// Auth
import RegisterPage from "./app/auth/register/page";
import LoginPage from "@/app/auth/login/page";

// Admin
import AdminDashboardPage from "@/app/admin/dashboard/page";

// Doctor
import DoctorAppointmentsPage from "./app/doctor/appointments/page";
import DoctorDashboardPage from "@/app/doctor/dashboard/page";

// Patient
import PatientAppointmentsPage from "./app/patient/appointments";
import PatientDashboardPage from "@/app/patient/dashboard/page";
import NewAppointmentPage from "./app/patient/appointments/new";
import PatientProfilePage from "./app/patient/profile/page";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Layout><AdminDashboardPage /></Layout>} />

        {/* Doctor */}
        <Route path="/doctor/dashboard" element={<Layout><DoctorDashboardPage /></Layout>} />
        <Route path="/doctor/appointments" element={<Layout><DoctorAppointmentsPage /></Layout>} />

        {/* Patient */}
        <Route path="/patient/dashboard" element={<Layout><PatientDashboardPage /></Layout>} />
        <Route path="/patient/appointments" element={<Layout><PatientAppointmentsPage /></Layout>} />
        <Route path="/patient/appointments/new" element={<Layout><NewAppointmentPage /></Layout>} />
        <Route path="/patient/profile" element={<Layout><PatientProfilePage /></Layout>} />
      </Routes>
    </Router>
  );
}

// http://127.0.0.1:5173/auth/register
// http://127.0.0.1:5173/admin/dashboard
// http://127.0.0.1:5173/doctor/dashboard
// http://127.0.0.1:5173/patient/dashboard
// http://127.0.0.1:5173/patient/appointments
// http://127.0.0.1:5173/patient/appointments/new
// http://127.0.0.1:5173/patient/profile
// http://127.0.0.1:5173/doctor/appointments