"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartColumnDecreasing, CheckCircle, CreditCard, Eye, SaveAll } from "lucide-react";
import { DashboardChirt } from "./Chart";

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4 space-y-6">
            {/* Header */}
            <div className="text-sm text-gray-600 font-semibold">
                M. GUEHI – Dashboard
            </div>

            {/* Credit Score + Suggested Limit */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Credit Score Card */}
                <Card className="flex-1 ">
                    <div className="flex justify-between py-4 px-6 bg-[#F5F5F5] items-center  mb-9">
                        <h1 className="text-[18px] font-medium text-[#282828]">Your Credit Score</h1>
                        <p className="text-[#282828] text-[14px] font-normal">Updated today</p>
                    </div>
                    <div className="p-6">

                        <DashboardChirt />
                        <hr />
                        {/* Factors */}
                        <div className="mt-6 space-y-3">
                            <div className="space-y-4">
                                <h1 className="text-[#4B1E2F] font-medium text-[20px] mb-[40px] text-center">Factors affecting your score</h1>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Annual Income (FCFA)</span>
                                    <span>30/30</span>
                                </div>
                                <Progress
                                    value={100}
                                    className="h-2 rounded-full bg-gray-200 [&>div]:bg-[#039B06]" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Electricity bill (FCFA)</span>
                                    <span>30/30</span>
                                </div>
                                <Progress value={100} className="h-2 rounded-full bg-gray-200 [&>div]:bg-[#3B82F6]" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Mobile money Balance (FCFA)</span>
                                    <span>30/30</span>
                                </div>
                                <Progress value={100} className="h-2 rounded-full bg-gray-200 [&>div]:bg-[#039B06]" />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Suggested Limit & Application Status */}
                <div className="flex flex-col gap-6 w-full lg:w-1/3">
                    <Card >
                        <div className="flex justify-between py-4 px-6 bg-[#F5F5F5] items-center  mb-9">
                            <h1 className="text-[18px] font-medium text-[#282828]">Suggested Credit Limit</h1>
                        </div>
                        <CardContent className="space-y-4 text-center">
                            <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center mx-auto text-gray-600">$</div>
                            <div className="text-lg font-bold">FCFA 100,000</div>
                            <div className="text-sm text-gray-500">Based on your credit score of 95/100</div>

                            <div className="mt-4 bg-[#F9FAFB] flex flex-col p-4 rounded-md">

                                <div className="text-sm font-medium text-gray-600 text-start  mb-8">Credit Limit Ranges</div>

                                <div className="text-sm text-gray-500 space-y-[24px] w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className="text-[16px] text-[#282828] font-normal ">Excellent (80-100):</h3>
                                        <p className=" text-[#353535] text-[18px] font-medium">FCFA 100,000</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className="text-[16px] text-[#282828] font-normal ">Good (60-79):</h3>
                                        <p className=" text-[#353535] text-[18px] font-medium">FCFA 50,000</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className="text-[16px] text-[#282828] font-normal ">Fair (40-59):</h3>
                                        <p className=" text-[#353535] text-[18px] font-medium">FCFA 30,000</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className="text-[16px] text-[#282828] font-normal ">Poor (0-39):</h3>
                                        <p className=" text-[#353535] text-[18px] font-medium">FCFA 10,000</p>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="">
                        <div className="flex justify-between py-4 px-6 bg-[#F5F5F5] items-center  mb-9">
                            <h1 className="text-[18px] font-medium text-[#282828]">Application Status</h1>
                        </div>
                        <CardContent className="space-y-[32px] text-sm text-gray-600">
                            <div className="flex   gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <div className="flex flex-col justify-center space-y-[8px]">
                                    <span className="text-[#282828] font-medium text-[16px]"> Profile Complete</span>
                                    <span className="text-[#282828] text-[14px] font-normal" >Your profile information is complete.</span>
                                </div>
                            </div>
                            <div className="flex   gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <div className="flex flex-col justify-center space-y-[8px]">
                                    <span className="text-[#282828] font-medium text-[16px]"> Score Generated</span>
                                    <span className="text-[#282828] text-[14px] font-normal" >Your credit score has been calculated.</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Financial Summary */}
            <Card className="">
                <div className="flex justify-between py-4 px-6 bg-[#F5F5F5] items-center  mb-9">
                    <h1 className="text-[18px] font-medium text-[#282828]">Financial Summary</h1>
                </div>
                <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4  text-gray-600">
                    <div className="bg-[#F9FAFB] flex  items-center gap-5 p-3 border border-[#E5E7EB] rounded-md px-7">
                        <div className="text-[#039B06] bg-[#039B0633] w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">$</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm mt-1">Annual Income</div>
                            <div className=" text-[#353535] text-[18px] font-medium">FCFA 500,000</div>
                        </div>
                    </div>
                    <div className="bg-[#F9FAFB] flex  items-center gap-5 p-3 border border-[#E5E7EB] rounded-md px-7">
                        <div className="text-[#4B1E2F] bg-[#4B1E2F33] w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"> <CreditCard /> </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm mt-1">Value of Land ownership</div>
                            <div className=" text-[#353535] text-[18px] font-medium">FCFA 2,000,010</div>
                        </div>
                    </div>
                    <div className="bg-[#F9FAFB] flex  items-center gap-5 p-3 border border-[#E5E7EB] rounded-md px-7">
                        <div className="text-[#E0AB0B] bg-[#E0AB0B33] w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"><ChartColumnDecreasing /> </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm mt-1">Debt-to-Income Ratio</div>
                            <div className=" text-[#353535] text-[18px] font-medium">17/17</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="">
                <div className="flex justify-between py-4 px-6 bg-[#F5F5F5] items-center  mb-9">
                    <h1 className="text-[18px] font-medium text-[#282828]">Recent Activity</h1>
                </div>
                <CardContent className="space-y-[24px] text-gray-600">
                    <div className="bg-[#F9FAFB] flex  items-center justify-between gap-5 p-3 border border-[#E5E7EB] rounded-md px-7">
                        <div className="flex items-center p-6   gap-4">
                            <div className="text-[#E0AB0B] bg-[#E0AB0B33] w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"><ChartColumnDecreasing /> </div>
                            <div className="text-[18px] text-[#353535] font-medium">Credit score calculated</div>
                        </div>
                        <div className=" text-[#282828] text-[16px] font-normal">Today</div>
                    </div>
                    <div className="bg-[#F9FAFB] flex  items-center justify-between gap-5 p-3 border border-[#E5E7EB] rounded-md px-7">
                        <div className="flex items-center p-6   gap-4">
                            <div className="text-[#4B1E2F] bg-[#441B2B33] w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"><SaveAll /> </div>
                            <div className="text-[18px] text-[#353535] font-medium">Credit score calculated</div>
                        </div>
                        <div className=" text-[#282828] text-[16px] font-normal">Today</div>
                    </div>
                    <div className="bg-[#F9FAFB] flex  items-center justify-between gap-5 p-3 border border-[#E5E7EB] rounded-md px-7">
                        <div className="flex items-center p-6   gap-4">
                            <div className="text-[#282828] bg-[#28282833] w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold"><Eye /> </div>
                            <div className="text-[18px] text-[#353535] font-medium">Credit score calculated</div>
                        </div>
                        <div className=" text-[#282828] text-[16px] font-normal">Today</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
