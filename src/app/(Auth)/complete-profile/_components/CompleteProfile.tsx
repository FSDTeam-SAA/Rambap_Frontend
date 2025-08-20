

"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from "lucide-react";

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
        <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] md:px-4 ">
            <div className="w-full container py-10  shadow-[0px_5px_10px_0px_#00000029] bg-white px-8 rounded-lg">
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-medium mb-3 text-[#4B1E2F] ">
                        Complete Your Profile
                    </h2>
                    <p className="text-[#282828] text-[16px] sm:text-[18px] font-normal mb-6 ">
                        Please provide accurate information to get the most accurate credit rating.
                    </p>
                </div>

                {/* Stepper */}
                <div className="mb-8 relative w-full mx-auto">
                    <div className="absolute top-4 left-4 right-4 h-1 bg-gray-300 z-0"></div>
                    <div
                        className="absolute top-4 left-4 h-1 bg-[#4B1E2F] z-10 transition-all duration-300"
                        style={{ width: `${((step - 1) / 2) * 100}%`, minWidth: "0" }}
                    ></div>

                    <div className="flex justify-between relative z-20 flex-wrap">
                        {[
                            { number: 1, label: "Personal" },
                            { number: 2, label: "Contact" },
                            { number: 3, label: "Financial" },
                        ].map((s) => (
                            <div key={s.number} className="flex flex-col items-center w-1/3 sm:w-auto mb-4 sm:mb-0">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-300 ${step === s.number ? "bg-[#4B1E2F]" : s.number < step ? "bg-[#4B1E2F]" : "bg-[#808080] text-white"
                                        }`}
                                >
                                    {s.number}
                                </div>
                                <span className={`mt-2 text-[14px] sm:text-[18px] font-medium ${s.number < step ? "text-[#4B1E2F]" : "text-[#808080]"}`}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Steps */}
                <div className="space-y-6">
                    {step === 1 && (
                        <div className="space-y-6">
                            <h1 className="text-[#4B1E2F] text-[18px] sm:text-[20px] font-medium mb-4">Personal Information</h1>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">First Name</label>
                                    <Input placeholder="Enter your First Name" className="py-6" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">Last Name</label>
                                    <Input placeholder="Enter your Last Name" className="py-6" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">Date of Birth</label>
                                    <Input type="date" className="py-6" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">Gender</label>
                                    <Select>
                                        <SelectTrigger className="py-6">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent>
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
                        <div className="space-y-6">
                            <h1 className="text-[#4B1E2F] text-[18px] sm:text-[20px] font-medium mb-4">Contact Information</h1>
                            <div>
                                <label className="block text-sm text-[#4B1E2F] font-medium mb-2">Address</label>
                                <Input type="text" placeholder="Enter your Address" className="py-6" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">City</label>
                                    <Input type="text" placeholder="Enter your City" className="py-6" />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">State</label>
                                    <Input type="text" placeholder="Enter your State" className="py-6" />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#4B1E2F] font-medium mb-2">ZIP Code</label>
                                    <Input type="text" placeholder="Enter your ZIP Code" className="py-6" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-[#4B1E2F] text-[18px] sm:text-[20px] font-medium mb-4">Financial Information</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="annualIncome" className="block text-sm text-[#4B1E2F] font-medium mb-2">
                                        Annual Income (FCFA)
                                    </Label>
                                    <Input id="annualIncome" type="number" className="py-6" />
                                </div>
                                <div>
                                    <Label htmlFor="landValue" className="block text-sm text-[#4B1E2F] font-medium mb-2">
                                        Value of Land Ownership (FCFA)
                                    </Label>
                                    <Input id="landValue" type="number" className="py-6" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="electricityBill" className="block text-sm text-[#4B1E2F] font-medium mb-2">
                                        Electricity bill (FCFA)
                                    </Label>
                                    <Input id="electricityBill" type="number" className="py-6" />
                                </div>
                                <div>
                                    <Label htmlFor="mobileBalance" className="block text-sm text-[#4B1E2F] font-medium mb-2">
                                        Mobile Money Balance (FCFA)
                                    </Label>
                                    <Input id="mobileBalance" type="number" className="py-6" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm text-[#4B1E2F] font-medium">Existing Loans</Label>
                                <RadioGroup defaultValue="" className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="loans-yes" />
                                        <Label htmlFor="loans-yes" className="text-sm font-normal cursor-pointer">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="loans-no" />
                                        <Label htmlFor="loans-no" className="text-sm font-normal cursor-pointer">No</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="flex items-start space-x-2">
                                <Checkbox id="agreement" className="mt-0.5" />
                                <Label htmlFor="agreement" className="text-sm leading-5 cursor-pointer">
                                    I agree to share my data with GUEHI AND CO to process my credit score
                                </Label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
                    {step > 1 && (
                        <div className="flex items-center gap-2">
                            <ChevronLeft size={20} className="text-[#3E3E3E]" />
                            <button onClick={prevStep} className="text-[#3E3E3E] text-[16px]">
                                Back
                            </button>
                        </div>
                    )}
                    <button
                        onClick={nextStep}
                        className="px-6 py-2 bg-[#4B1E2F] text-white rounded-md hover:bg-[#3a1521] w-full sm:w-auto ml-auto"
                    >
                        {step === 3 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}
