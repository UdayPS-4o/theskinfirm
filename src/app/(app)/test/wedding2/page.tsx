import React from "react";
import {
    Design1, Design2, Design3, Design4, Design5,
    Design6, Design7, Design8, Design9, Design10
} from "@/components/test-wedding/text-only-designs";

export default function WeddingTextOnlyPage() {
    return (
        <div className="flex flex-col gap-0">
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 1: Minimal Centered Serif</div>
                <Design1 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 2: Left Aligned Bold</div>
                <Design2 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 3: Elegant Bordered Card</div>
                <Design3 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 4: Grid Layout</div>
                <Design4 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 5: Typographic Focus</div>
                <Design5 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 6: List Style</div>
                <Design6 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 7: Quote Style</div>
                <Design7 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 8: Floating Elements</div>
                <Design8 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 9: Split Horizontal</div>
                <Design9 />
            </section>
            <section>
                <div className="bg-white py-4 text-center font-bold text-xl border-b">Design 10: Call to Action Focus</div>
                <Design10 />
            </section>
        </div>
    );
}
