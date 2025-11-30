import { useState } from "react";
import "../src/App.css";
import { useEffect } from "react";
import { api } from "./services/api";
import HomePage from "../components/pages/HomePage";
import ProfilePage from "../components/pages/ProfilePage";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "profile">("home");
  const [selectedFreelancer, setSelectedFreelancer] = useState<any | null>(null);
  const [freelancers, setFreelancers] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await api.getFreelancers();
        setFreelancers(data);
      } catch (e) { }
    })();
  }, []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    timeSlot: ""
  });

  const handleProfileClick = (freelancer: any) => {
    setSelectedFreelancer(freelancer);
    setCurrentView("profile");
  };

  const handleBack = () => {
    setCurrentView("home");
    setSelectedFreelancer(null);
    setSelectedDate(null);
    setFormData({ firstName: "", email: "", phone: "", company: "", timeSlot: "" });
  };

  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.email || !formData.phone || !formData.timeSlot || !selectedDate || !selectedFreelancer) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
    try {
      const payload = {
        freelancer_id: selectedFreelancer.id,
        booking_date: selectedDate.toISOString(),
        time_slot: formData.timeSlot,
        client_first_name: formData.firstName,
        client_email: formData.email,
        client_phone: formData.phone,
        client_company: formData.company || "",
      };
      const resp = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error('Erreur lors de la création de la réservation');
      const data = await resp.json();
      alert(`Réservation confirmée pour ${data.client_first_name} le ${new Date(data.booking_date).toLocaleDateString('fr-FR')} (${data.time_slot}). Un email de confirmation a été envoyé.`);
      setSelectedDate(null);
      setFormData({ firstName: "", email: "", phone: "", company: "", timeSlot: "" });
    } catch (e: any) {
      alert(e.message || 'Une erreur est survenue');
    }
  };

  return (
    <div className="app">
      {currentView === "home" && (
        <HomePage freelancers={freelancers} onProfileClick={handleProfileClick} />
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
