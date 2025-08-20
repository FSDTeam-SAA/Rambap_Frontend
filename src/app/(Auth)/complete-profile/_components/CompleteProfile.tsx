"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else alert("Form submitted!");
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
            <div className="w-full container py-10 shadow-[0px_5px_10px_0px_#00000029] bg-white rounded-lg">

                <h2 className="text-3xl font-medium mb-5 text-[#4B1E2F] text-center">
                    Complete Your Profile
                </h2>
                <p className="text-[#282828] text-[18px] font-normal mb-6 text-center">
                    Please provide accurate information to get the most accurate credit rating.
                </p>

                {/* Stepper */}
                <div className="mb-8 relative w-full mt-16 mx-auto">
                    <div className="absolute top-4 left-4 right-4 h-1 bg-gray-300 z-0"></div>
                    <div
                        className="absolute top-4 left-4 h-1 bg-[#4B1E2F] z-10 transition-all duration-300"
                        style={{ width: `${((step - 1) / 2) * 100}%`, minWidth: "0" }}
                    ></div>

                    <div className="flex justify-between relative z-20">
                        {[
                            { number: 1, label: "Personal" },
                            { number: 2, label: "Contact" },
                            { number: 3, label: "Financial" },
                        ].map((s) => (
                            <div key={s.number} className="flex flex-col items-center relative">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-300 ${step === s.number
                                        ? "bg-[#4B1E2F]"
                                        : s.number < step
                                            ? "bg-[#4B1E2F]"
                                            : "bg-[#808080] text-white"
                                        }`}
                                >
                                    {s.number}
                                </div>
                                <span className={`mt-2 text-[18px] font-medium ${s.number < step ? "text-[#4B1E2F]" : "text-[#808080]"}`}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Steps */}
                <div className="space-y-4">
                    {step === 1 && (
                        <div className="space-y-[32px]">
                            <div>
                                <h1 className="text-[#4B1E2F] text-[20px] font-medium mb-[40px]">Personal Information</h1>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-3">First Name</label>
                                    <Input placeholder="Enter your First Name" className="py-6" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-3">Last Name</label>
                                    <Input placeholder="Enter your Last Name" className="py-6" />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-3">Date of Birth</label>
                                    <Input type="date" className="py-6" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-3">Gender</label>
                                    <Select >
                                        <SelectTrigger className="py-6">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent >
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-[32px]">
                            <div>
                                <h1 className="text-[#4B1E2F] text-[20px] font-medium mb-[40px]">Contact Information</h1>
                            </div>
                            <div>
                                <label className="block text-sm text-[#4B1E2F] font-medium mb-3">Address</label>
                                <Input type="text" placeholder="Enter your Address" className="py-6" />
                            </div>
                            <div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm text-[#4B1E2F] font-medium mb-3">City</label>
                                        <Input type="email" placeholder="Enter your City" className="py-6" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-[#4B1E2F] font-medium mb-3">State</label>
                                        <Input type="email" placeholder="Enter your State" className="py-6" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-[#4B1E2F] font-medium mb-3">ZIP Code</label>
                                        <Input type="email" placeholder="Enter your ZIP Code" className="py-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 p-6 bg-background">
                            <h2 className="text-[#4B1E2F] text-[20px] font-medium mb-[40px]">Financial Information</h2>

                            <div className="space-y-6">
                                {/* Income and Land Value Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="annualIncome" className="block text-sm text-[#4B1E2F] font-medium mb-3">
                                            Annual Income (FCFA)
                                        </Label>
                                        <Input
                                            id="annualIncome"
                                            type="number"
                                            className="h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="landValue" className="block text-sm text-[#4B1E2F] font-medium mb-3">
                                            Value of Land ownership (FCFA)
                                        </Label>
                                        <Input
                                            id="landValue"
                                            type="number"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                {/* Electricity and Mobile Money Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="electricityBill" className="block text-sm text-[#4B1E2F] font-medium mb-3">
                                            Electricity bill (FCFA)
                                        </Label>
                                        <Input
                                            id="electricityBill"
                                            type="number"
                                            className="h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="mobileBalance" className="block text-sm text-[#4B1E2F] font-medium mb-3">
                                            Mobile money Balance (FCFA)
                                        </Label>
                                        <Input
                                            id="mobileBalance"
                                            type="number"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                {/* Existing Loans */}
                                <div className="space-y-3">
                                    <Label className="block text-sm text-[#4B1E2F] font-medium mb-3">Existing Loans</Label>
                                    <RadioGroup defaultValue="" className="flex gap-6">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="loans-yes" />
                                            <Label htmlFor="loans-yes" className="text-sm font-normal text-foreground cursor-pointer">
                                                Yes
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="loans-no" />
                                            <Label htmlFor="loans-no" className="text-sm font-normal text-foreground cursor-pointer">
                                                No
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Agreement Checkbox */}
                                <div className="flex items-start space-x-2">
                                    <Checkbox id="agreement" className="mt-0.5" />
                                    <Label htmlFor="agreement" className="text-sm text-foreground leading-5 cursor-pointer">
                                        I agree to share my data with GUEHI AND CO to process my credit score
                                    </Label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-between">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-4 py-2 border rounded-md hover:bg-gray-100">
                            Back
                        </button>
                    )}
                    <button
                        onClick={nextStep}
                        className="ml-auto px-6 py-2 bg-[#4B1E2F] text-white rounded-md hover:bg-[#3a1521]"
                    >
                        {step === 3 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}
