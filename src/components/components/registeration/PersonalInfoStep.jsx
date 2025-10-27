"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

export default function PersonalInfoStep({
  formData,
  handleInputChange,
  handleArrayChange,
  handleFileChange,
}) {
  const hobbiesOptions = ["Travel", "Music", "Sports", "Cooking", "Reading"];

  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-4xl mb-2 text-[#566737]"
          style={{ fontFamily: "Juana-Light" }}
        >
          Personal Information
        </h2>
        <p className="text-muted-foreground">
          Tell us about yourself to get started
        </p>
      </div>

      {/* Name Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-[#388087] font-semibold">
            First Name *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-[#388087] font-semibold">
            Last Name *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      {/* Gender & DOB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <Label htmlFor="gender" className="text-[#388087] font-semibold">
            Gender *
          </Label>
          <Select
            value={formData.gender}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "gender", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="dateOfBirth" className="text-[#388087] font-semibold">
            Date of Birth *
          </Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <Label htmlFor="photo" className="text-[#388087] font-semibold">
          Upload Your Photo *
        </Label>
        <div className="mt-2 border-2 border-dashed border-[#424034]  rounded-lg p-8 text-center hover:border-primary transition-colors">
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="photo" className="cursor-pointer">
            <div className="text-primary text-3xl mb-2">📷</div>
            <p className="text-muted-foreground">
              {formData.photo ? formData.photo.name : "Upload Picture"}
            </p>
          </label>
        </div>
      </div>

      {/* Education & Marital Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="education" className="text-[#388087] font-semibold">
            Education *
          </Label>
          <Select
            value={formData.education}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "education", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select education" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highschool">High School</SelectItem>
              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
              <SelectItem value="master">Master's Degree</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="maritalStatus"
            className="text-[#388087] font-semibold"
          >
            Marital Status *
          </Label>
          <Select
            value={formData.maritalStatus}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "maritalStatus", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Children & Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="children" className="text-[#388087] font-semibold">
            Children *
          </Label>
          <Select
            value={formData.children}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "children", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="height" className="text-[#388087] font-semibold">
            Height *
          </Label>
          <Select
            value={formData.height}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "height", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select height" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5.2">5'2"</SelectItem>
              <SelectItem value="5.4">5'4"</SelectItem>
              <SelectItem value="5.6">5'6"</SelectItem>
              <SelectItem value="5.8">5'8"</SelectItem>
              <SelectItem value="6.0">6'0"</SelectItem>
              <SelectItem value="6.2">6'2"</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Body Type & Home Town */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="bodyType" className="text-[#388087] font-semibold">
            Body Type *
          </Label>
          <Select
            value={formData.bodyType}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "bodyType", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select body type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="slim">Slim</SelectItem>
              <SelectItem value="athletic">Athletic</SelectItem>
              <SelectItem value="average">Average</SelectItem>
              <SelectItem value="curvy">Curvy</SelectItem>
              <SelectItem value="heavyset">Heavyset</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="homeTown" className="text-[#388087] font-semibold">
            Home Town *
          </Label>
          <Input
            id="homeTown"
            name="homeTown"
            placeholder="Enter your home town"
            value={formData.homeTown}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      {/* Relationship & Occupation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label
            htmlFor="relationshipIntention"
            className="text-[#388087] font-semibold"
          >
            Relationship Intention *
          </Label>
          <Select
            value={formData.relationshipIntention}
            onValueChange={(value) =>
              handleInputChange({
                target: { name: "relationshipIntention", value },
              })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dating">Dating</SelectItem>
              <SelectItem value="marriage">Marriage</SelectItem>
              <SelectItem value="friendship">Friendship</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="occupation" className="text-[#388087] font-semibold">
            Occupation *
          </Label>
          <Input
            id="occupation"
            name="occupation"
            placeholder="Enter your occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            className="mt-2 border-[#424034] focus:border-primary"
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <Label htmlFor="bio" className="text-[#388087] font-semibold">
          Bio *
        </Label>
        <Textarea
          id="bio"
          name="bio"
          placeholder="Tell us about yourself"
          value={formData.bio}
          onChange={handleInputChange}
          className="mt-2 border-[#424034] focus:border-primary min-h-24"
        />
      </div>

      {/* Travel History */}
      <div>
        <Label htmlFor="travelHistory" className="text-[#388087] font-semibold">
          Travel History *
        </Label>
        <Select
          value={formData.travelHistory}
          onValueChange={(value) =>
            handleInputChange({ target: { name: "travelHistory", value } })
          }
        >
          <SelectTrigger className="mt-2 border-[#424034] ">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usa">USA</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="worldwide">Worldwide</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Hobbies & Interests */}
      <div>
        <Label className="text-[#388087] font-semibold mb-3 block">
          Hobbies & Interests
        </Label>
        <div className="flex flex-wrap gap-3">
          {hobbiesOptions.map((hobby) => (
            <button
              key={hobby}
              onClick={() => handleArrayChange("hobbies", hobby)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                formData.hobbies.includes(hobby)
                  ? "bg-primary text-primary-foreground"
                  : "bg-[#a4c568] text-muted-foreground hover:bg-border"
              }`}
            >
              {hobby}
            </button>
          ))}
        </div>
      </div>

      {/* Religion & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="religion" className="text-[#388087] font-semibold">
            Religion *
          </Label>
          <Select
            value={formData.religion}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "religion", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="christianity">Christianity</SelectItem>
              <SelectItem value="islam">Islam</SelectItem>
              <SelectItem value="judaism">Judaism</SelectItem>
              <SelectItem value="hinduism">Hinduism</SelectItem>
              <SelectItem value="buddhism">Buddhism</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="languages" className="text-[#388087] font-semibold">
            Languages *
          </Label>
          <Select
            value={formData.languages}
            onValueChange={(value) =>
              handleInputChange({ target: { name: "languages", value } })
            }
          >
            <SelectTrigger className="mt-2 border-[#424034] ">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="german">German</SelectItem>
              <SelectItem value="mandarin">Mandarin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Lifestyle */}
      <div>
        <h3 className="text-lg font-semibold text-[#388087] mb-4">Lifestyle</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox
              id="livingWith"
              name="livingWith"
              checked={formData.livingWith === "own"}
              onChange={() =>
                handleInputChange({
                  target: { name: "livingWith", value: "own" },
                })
              }
            />
            <Label htmlFor="livingWith" className="cursor-pointer">
              Living Situation: Own
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="pets"
              name="pets"
              checked={formData.pets}
              onChange={handleInputChange}
            />
            <Label htmlFor="pets" className="cursor-pointer">
              You like Pets?
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="drugs"
              name="drugs"
              checked={formData.drugs}
              onChange={handleInputChange}
            />
            <Label htmlFor="drugs" className="cursor-pointer">
              Drugs?
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="smoking"
              name="smoking"
              checked={formData.smoking}
              onChange={handleInputChange}
            />
            <Label htmlFor="smoking" className="cursor-pointer">
              Smoking?
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="drinking"
              name="drinking"
              checked={formData.drinking}
              onChange={handleInputChange}
            />
            <Label htmlFor="drinking" className="cursor-pointer">
              Drinking?
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="willRelocate"
              name="willRelocate"
              checked={formData.willRelocate}
              onChange={handleInputChange}
            />
            <Label htmlFor="willRelocate" className="cursor-pointer">
              Willing to relocate?
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
