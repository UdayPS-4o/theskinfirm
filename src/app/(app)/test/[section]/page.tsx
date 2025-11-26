"use client";

import { useParams } from "next/navigation";
import { Section3Variations } from "@/components/sections/section3-variations";
import { Section6Variations } from "@/components/sections/section6-variations";
import { Section7Variations } from "@/components/sections/section7-variations";

export default function TestSectionPage() {
    const params = useParams();
    const section = params.section as string;

    const renderSection = () => {
        switch (section) {
            case "section3":
                return <Section3Variations />;
            case "section6":
                return <Section6Variations />;
            case "section7":
                return <Section7Variations />;
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
