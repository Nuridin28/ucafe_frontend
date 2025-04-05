"use client";

import { Toaster } from "@/components/ui/toaster";
// import { useNavigation } from "react-router-dom";
import { CafeProfile } from "./Profile";
import { useAuth } from "@/context/useAuth";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const nagivation = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    nagivation("/auth/login");
  };

  return (
    <>
      <CafeProfile
        cafeName="Cafe Serenity"
        logo="/placeholder.svg?height=120&width=120"
        description="A cozy cafe serving specialty coffee, pastries, and light meals in a relaxing atmosphere."
        phone="(555) 123-4567"
        email="info@cafeserenity.com"
        businessHours={[
          { day: "Monday", hours: "7:00 AM - 6:00 PM", isOpen: true },
          { day: "Tuesday", hours: "7:00 AM - 6:00 PM", isOpen: true },
          { day: "Wednesday", hours: "7:00 AM - 6:00 PM", isOpen: true },
          { day: "Thursday", hours: "7:00 AM - 6:00 PM", isOpen: true },
          { day: "Friday", hours: "7:00 AM - 8:00 PM", isOpen: true },
          { day: "Saturday", hours: "8:00 AM - 8:00 PM", isOpen: true },
          { day: "Sunday", hours: "8:00 AM - 5:00 PM", isOpen: true },
        ]}
        onLogout={handleLogout}
      />
      <Toaster />
    </>
  );
}
