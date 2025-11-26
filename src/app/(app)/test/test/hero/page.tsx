import React from "react";
import { Design1 } from "@/components/test-hero/design-1";
import { Design2 } from "@/components/test-hero/design-2";
import { Design3 } from "@/components/test-hero/design-3";
import { Design4 } from "@/components/test-hero/design-4";
import { Design5 } from "@/components/test-hero/design-5";
import { Design6 } from "@/components/test-hero/design-6";
import { Design7 } from "@/components/test-hero/design-7";
import { Design8 } from "@/components/test-hero/design-8";
import { Design9 } from "@/components/test-hero/design-9";
import { Design10 } from "@/components/test-hero/design-10";
import { Design11 } from "@/components/test-hero/design-11";
import { Design12 } from "@/components/test-hero/design-12";

export default function HeroTestPage() {
    return (
        <div className="flex flex-col gap-0">
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 1: Elegant Split</div>
                <Design1 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 2: Full Height Split (Updated Colors)</div>
                <Design2 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 3: Modern Card</div>
                <Design3 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 4: Arch Frame (Updated Colors)</div>
                <Design4 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 5: Bold Typography (Updated Colors)</div>
                <Design5 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 6: Centered Video</div>
                <Design6 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 7: Bento Grid</div>
                <Design7 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 8: Minimalist Large Type</div>
                <Design8 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 9: Overlapping Depth</div>
                <Design9 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 10: Split with Curved Divider</div>
                <Design10 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 11: Dark Theme Variant</div>
                <Design11 />
            </section>
            <section className="min-h-screen">
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 12: Full Screen Overlay</div>
                <Design12 />
            </section>
        </div>
    );
}
