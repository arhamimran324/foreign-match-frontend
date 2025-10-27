"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AccountSetupStep({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-4xl mb-2 text-[#566737]"
          style={{ fontFamily: "Juana-Light" }}
        >
          Account Setup{" "}
        </h2>
        <p className="text-muted-foreground">Account setup to get started </p>
      </div>
      <div>
        <Label htmlFor="username" className="text-[#388087] font-semibold">
          User Name *
        </Label>
        <Input
          id="username"
          name="username"
          placeholder="Enter user name"
          value={formData.username}
          onChange={handleInputChange}
          className="mt-2 border-black focus:border-primary"
        />
      </div>

      <div>
        <Label htmlFor="password" className="text-[#388087] font-semibold">
          Password *
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          className="mt-2 border-[#424034] focus:border-primary"
        />
      </div>

      <div>
        <Label
          htmlFor="confirmPassword"
          className="text-[#388087] font-semibold"
        >
          Confirm Password *
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Enter confirm password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="mt-2 border-[#424034] focus:border-primary"
        />
      </div>
    </div>
  );
}
