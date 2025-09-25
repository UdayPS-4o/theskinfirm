const fs = require('fs').promises;
const path = require('path');

async function updateServiceCategories() {
    const data2Path = path.join(__dirname, '../', 'src/', 'app/', 'services/', '[service]/', 'data_2.json');
    const data2Content = await fs.readFile(data2Path, 'utf8');
    const data2 = JSON.parse(data2Content);

    const categoryMap = {
        "laser-hair-removal-in-pune": "LASER & HAIR REMOVAL",
        "medi-facials-in-pune": "SKIN CARE & FACIALS",
        "dark-circle-under-eye-treatment-in-pune": "EYE CARE & SKIN",
        "skin-pigmentation-melasma-treatment-in-pune": "SKIN TONE & PIGMENTATION",
        "hair-loss-treatment-in-pune": "HAIR CARE & RESTORATION",
        "iv-drips-therapy-in-pune": "WELLNESS & HYDRATION",
        "mole-skin-tag-removal-in-pune": "SKIN & BODY CARE",
        "chemical-peel-in-pune": "SKIN CARE & PEELS",
        "tan-removal-treatment-in-pune": "SKIN TONE & TAN REMOVAL",
        "open-pores-treatment-in-pune": "SKIN CARE & PORES",
        "underarm-whitening-treatment-in-pune": "BODY CARE & WHITENING",
        "anti-ageing-treatment-in-pune": "ANTI-AGEING & SKIN CARE",
        "wrinkle-treatment-in-pune": "ANTI-AGEING & WRINKLES",
        "stretch-marks-removal-treatment-in-pune": "BODY CARE & SKIN",
        "wart-removal-treatment-in-pune": "SKIN & BODY CARE",
        "acne-treatment-in-pune": "ACNE & SKIN CARE",
        "fire-and-ice-facial-in-pune": "SKIN CARE & FACIALS",
        "hollywood-facial-in-pune": "SKIN CARE & FACIALS",
        "prp-facial-in-pune": "SKIN CARE & REJUVENATION",
        "carbon-peel-facial-in-pune": "SKIN CARE & FACIALS",
        "hyperhidrosis-treatment-in-pune": "BODY CARE & WELLNESS",
        "gfc-therapy-in-pune": "HAIR & SKIN REJUVENATION",
        "double-chin-removal-in-pune": "FACE & JAWLINE CONTOURING",
        "acne-scars-marks-treatment-in-pune": "ACNE & SCAR TREATMENT",
        "skin-whitening-treatment-in-pune": "SKIN TONE & WHITENING",
        "hydrafacial-in-pune": "SKIN CARE & FACIALS"
    };

    for (const slug in data2) {
        if (data2.hasOwnProperty(slug) && data2[slug].hero) {
            data2[slug].hero.category = categoryMap[slug] || "GENERAL SKIN CARE";
        }
    }

    await fs.writeFile(data2Path, JSON.stringify(data2, null, 2), 'utf8');
    console.log('data_2.json updated with categories.');
}

updateServiceCategories().catch(console.error);
