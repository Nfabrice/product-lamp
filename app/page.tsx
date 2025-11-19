import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeHelp from "@/components/HowWeHelp";
import Navbar from "@/components/NavBar";
import Solutions from "@/components/Solutions";
import Trainings from "@/components/Trainings";
import TrustedCompanies from "@/components/TrustedCompanies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="max-w-screen-2xl w-full mx-auto px-6">
        <TrustedCompanies />
        <Expertise />
        <HowWeHelp />
        <Solutions />
        <Trainings />
        <Footer />
      </div>
    </>
  );
}
