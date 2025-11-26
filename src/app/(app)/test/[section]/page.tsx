"use client";

import { useParams } from "next/navigation";
import { Section3Variations } from "@/components/sections/section3-variations";
import { Section4Variations } from "@/components/sections/section4-variations";
import { Section5Variations } from "@/components/sections/section5-variations";
import { Section6Variations } from "@/components/sections/section6-variations";
import { Section7Variations } from "@/components/sections/section7-variations";
import { Section9Variations } from "@/components/sections/section9-variations";
import { Section10Variations } from "@/components/sections/section10-variations";
import { Section11Variations } from "@/components/sections/section11-variations";
import { Section12Variations } from "@/components/sections/section12-variations";

export default function TestSectionPage() {
    const params = useParams();
    const section = params.section as string;

    const renderSection = () => {
        switch (section) {
            case "section3":
                return <Section3Variations />;
            case "section4":
                return <Section4Variations />;
            case "section5":
                return <Section5Variations />;
            case "section6":
                return <Section6Variations />;
            case "section7":
                return <Section7Variations />;
            case "section9":
                return <Section9Variations />;
            case "section10":
                return <Section10Variations />;
            case "section11":
                return <Section11Variations />;
            case "section12":
                return <Section12Variations />;
            default:
                return <div>Section not found: {section}</div>;
        }
    };

    return (
        <div className="w-full min-h-screen bg-background">
            <div className="p-4 bg-gray-100 border-b mb-4">
                <h1 className="text-xl font-bold">Testing Section: {section}</h1>
                <p className="text-sm text-gray-600">Resize window to test responsiveness</p>
            </div>
            {renderSection()}
        </div>
    );
}
