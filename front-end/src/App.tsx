import { useState } from "react";
import "../src/App.css"; // local css (ensure path correct based on your setup)
import { freelancers as freelancersData } from "../components/data/freelancers";
import HomePage from "../components/pages/HomePage";
import ProfilePage from "../components/pages/ProfilePage";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "profile">("home");
  const [selectedFreelancer, setSelectedFreelancer] = useState<any | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleProfileClick = (freelancer: any) => {
    setSelectedFreelancer(freelancer);
    setCurrentView("profile");
  };

  const handleBack = () => {
    setCurrentView("home");
    setSelectedFreelancer(null);
    setSelectedDate(null);
    setFormData({ firstName: "", email: "", phone: "", company: "" });
  };

  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
    alert(`Réservation pour ${formData.firstName} le ${selectedDate?.toLocaleDateString("fr-FR")} - En attente de l'intégration back-end`);
  };

  return (
    <div className="app">
      {currentView === "home" && (
        <HomePage freelancers={freelancersData} onProfileClick={handleProfileClick} />
      )}

      {currentView === "profile" && selectedFreelancer && (
        <ProfilePage
          freelancer={selectedFreelancer}
          onBack={handleBack}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          formData={formData}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
