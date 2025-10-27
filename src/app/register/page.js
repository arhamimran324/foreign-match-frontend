"use client";
import RegistrationForm from "@/components/components/registeration/RegistrationForm";
import { HomeLayout } from "@/components/provider/home-layout";

export default function Home() {
  return (
    <HomeLayout>
      <RegistrationForm />
    </HomeLayout>
  );
}
