"use client";

import { useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import ContactDetailsStep from "./ContactDetailsStep";
import AccountSetupStep from "./AccountStep";
import MembershipStep from "./MembershipStep";
import StepIndicator from "./StepIndicator";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { registerUser } from "@/api/service/auth";
import { toast } from "sonner";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    education: "",
    marital_status: "",
    children: "",
    height: "",
    body_type: "",
    home_town: "",
    relationship_intention: "",
    occupation: "",
    bio: "",
    travel_history: "",
    hobbies: [],
    religion: "",
    languages: "",
    livingWith: "",
    pets: false,
    drugs: false,
    smoking: false,
    drinking: false,
    willRelocate: false,
    photo: null,

    // Contact Details
    email: "",
    phone: "",
    city: "",
    address: "",
    telephone: "",
    fax: "",
    linkedin_id: "",
    instagram_id: "",
    facebook_id: "",
    snapchat_id: "",

    // Account Setup
    username: "",
    password: "",
    confirmPassword: "",

    // Membership
    membership_type: "",
  });

  const steps = [
    { id: 1, label: "Personal Info" },
    { id: 2, label: "Contact Details" },
    { id: 3, label: "Account Setup" },
    { id: 4, label: "Membership" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("Form submitted:", formData);
      await registerUser(formData);
      toast.success("Registration Successfull");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            handleInputChange={handleInputChange}
            handleArrayChange={handleArrayChange}
            handleFileChange={handleFileChange}
          />
        );
      case 2:
        return (
          <ContactDetailsStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <AccountSetupStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <MembershipStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <div className="mb-8 flex justify-between items-center">
        <h1
          className="text-5xl mb-2 text-[#566737]"
          style={{ fontFamily: "Juana-Light" }}
        >
          Create Your Profile
        </h1>
        <p className="font-semibold text-[#424034]">
          Step {currentStep} of {steps.length}
        </p>
      </div>

      <StepIndicator steps={steps} currentStep={currentStep} />

      <Card className="bg-[#C9D4CB] border-none shadow-lg">
        <div className="px-8 py-2">
          {renderStep()}

          <div className="flex justify-between mt-8 pt-6 border-t border-[#424034] ">
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              variant="outline"
              className="gap-2 bg-transparent"
            >
              ← Back
            </Button>

            {currentStep === steps.length ? (
              <Button
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                Complete Registration
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                Next →
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
