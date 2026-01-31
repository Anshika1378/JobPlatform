import AsideFooter from "./Components/Footer/AsideFooter";
import Footer from "./Components/Footer/footer";
import CategoryCompany from "./Components/Main/Category";
import MainHead from "./Components/Main/main";
import Navbar from "./Components/Nav";
import SponsorCompaines from "./Components/Sponsor/sponsorCompanies";
import JobCompanines from "./Components/Top/jobavailable";
import TopCompanies from "./Components/Top/TopCompanies";

import { Routes, Route } from 'react-router-dom';
import Register from "./Components/Authentication/register";
import Verification from "./Components/Authentication/verification";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="bg-blue-50 relative z-0">
            <MainHead />
            <CategoryCompany />
            <TopCompanies />
            <JobCompanines />
            <SponsorCompaines />
            <AsideFooter />
            <Footer />
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </>
  )
}
export default App;