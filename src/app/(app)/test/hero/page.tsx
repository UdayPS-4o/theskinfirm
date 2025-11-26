import React from "react";
import { Design1 } from "@/components/test-hero/design-1";
import { Design2 } from "@/components/test-hero/design-2";
import { Design3 } from "@/components/test-hero/design-3";
import { Design4 } from "@/components/test-hero/design-4";
import { Design5 } from "@/components/test-hero/design-5";

export default function HeroTestPage() {
    return (
        <div className="flex flex-col gap-0">
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 1: Elegant Split</div>
                <Design1 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 2: Full Height Split</div>
                <Design2 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 3: Modern Card</div>
                <Design3 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 4: Arch Frame</div>
                <Design4 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 5: Bold Typography</div>
                <Design5 />
            </section>
        </div>
    );
}
