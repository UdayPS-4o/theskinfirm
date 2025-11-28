import React from "react";
import { Design4 } from "@/components/test-wedding/design-4";
import { Variation8, Variation9 } from "@/components/test-wedding/pre-wedding-variations";
import {
    Design4_Var1, Design4_Var2, Design4_Var3,
    Variation8_Var1, Variation8_Var2, Variation8_Var3,
    Variation9_Var1, Variation9_Var2, Variation9_Var3
} from "@/components/test-wedding/refined-variations";

export default function WeddingTestPage() {
    return (
        <div className="flex flex-col gap-0">
            {/* Design 4 Section */}
            <div className="bg-slate-100 py-4 text-center font-bold text-xl border-b sticky top-0 z-50">Design 4: Modern Card (Original)</div>
            <Design4 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Design 4 - Variation 1: Luminous Love</div>
            <Design4_Var1 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Design 4 - Variation 2: The Bridal Edit</div>
            <Design4_Var2 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Design 4 - Variation 3: Forever Flawless</div>
            <Design4_Var3 />

            {/* Variation 8 Section */}
            <div className="bg-slate-100 py-4 text-center font-bold text-xl border-b sticky top-0 z-50 mt-10">Variation 8: Full Width Hero (Original)</div>
            <Variation8 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Variation 8 - Variation 1: Ethereal Glow</div>
            <Variation8_Var1 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Variation 8 - Variation 2: Bridal Bootcamp</div>
            <Variation8_Var2 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Variation 8 - Variation 3: Your Journey Begins</div>
            <Variation8_Var3 />

            {/* Variation 9 Section */}
            <div className="bg-slate-100 py-4 text-center font-bold text-xl border-b sticky top-0 z-50 mt-10">Variation 9: Split Card (Original)</div>
            <Variation9 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Variation 9 - Variation 1: Skin & Soul</div>
            <Variation9_Var1 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Variation 9 - Variation 2: The Wedding Prep</div>
            <Variation9_Var2 />

            <div className="bg-slate-50 py-2 text-center text-sm font-medium border-b">Variation 9 - Variation 3: Radiance Rituals</div>
            <Variation9_Var3 />
        </div>
    );
}
