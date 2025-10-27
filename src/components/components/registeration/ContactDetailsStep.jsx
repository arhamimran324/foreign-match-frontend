"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ContactDetailsStep({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div>
        <div>
          <h2
            className="text-4xl mb-2 text-[#566737]"
            style={{ fontFamily: "Juana-Light" }}
          >
            Contact Details
          </h2>
          <p className="text-muted-foreground">Tell us how we can reach you </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-[#388087] font-semibold">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-[#388087] font-semibold">
            Phone *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="city" className="text-[#388087] font-semibold">
            City *
          </Label>
          <Input
            id="city"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
        <div>
          <Label htmlFor="address" className="text-[#388087] font-semibold">
            Address *
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="telephone" className="text-[#388087] font-semibold">
            Telephone *
          </Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="Enter your telephone"
            value={formData.telephone}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
        <div>
          <Label htmlFor="fax" className="text-[#388087] font-semibold">
            Fax *
          </Label>
          <Input
            id="fax"
            name="fax"
            placeholder="Enter your fax"
            value={formData.fax}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="linkedin" className="text-[#388087] font-semibold">
            LinkedIn *
          </Label>
          <Input
            id="linkedin"
            name="linkedin"
            placeholder="Enter your LinkedIn URL"
            value={formData.linkedin}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
        <div>
          <Label htmlFor="instagram" className="text-[#388087] font-semibold">
            Instagram *
          </Label>
          <Input
            id="instagram"
            name="instagram"
            placeholder="Enter your Instagram handle"
            value={formData.instagram}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>
    </div>
  );
}
