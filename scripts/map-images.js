const fs = require('fs');
const path = require('path');

function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

const data1Path = path.resolve(__dirname, '../src/app/services/[service]/data.json');
const data2Path = path.resolve(__dirname, '../src/app/services/[service]/data_2.json');

const data1 = JSON.parse(fs.readFileSync(data1Path, 'utf-8'));
const data2 = JSON.parse(fs.readFileSync(data2Path, 'utf-8'));

const data1Images = {};
for (const serviceName in data1) {
    if (Object.hasOwnProperty.call(data1, serviceName)) {
        const service = data1[serviceName];
        if (service.about && service.about.image) {
            data1Images[slugify(serviceName)] = service.about.image;
        }
    }
}

const data2ImageMappings = {};
const missingImages = {};

for (const slug in data2) {
    if (Object.hasOwnProperty.call(data2, slug)) {
        const service = data2[slug];
        const image = service.whyChooseUs ? service.whyChooseUs.image : null;
        data2ImageMappings[slug] = image;
        if (!image || image.trim() === '') {
            missingImages[slug] = null; // We'll fill this in next
        }
    }
}

// Now, let's find matches for missing images
for (const missingSlug in missingImages) {
    let bestMatch = null;
    let bestMatchScore = 0;

    const missingSlugParts = missingSlug.replace(/-in-pune/g, '').split('-');

    for (const data1Slug in data1Images) {
        const data1SlugParts = data1Slug.split('-');
        
        // Jaccard similarity
        const set1 = new Set(missingSlugParts);
        const set2 = new Set(data1SlugParts);
        const intersection = new Set([...set1].filter(x => set2.has(x)));
        const union = new Set([...set1, ...set2]);
        const score = intersection.size / union.size;

        if (score > bestMatchScore) {
            bestMatchScore = score;
            bestMatch = data1Slug;
        }
    }
    
    // A simple substring check as a fallback
    if (!bestMatch) {
        for (const data1Slug in data1Images) {
            if (missingSlug.includes(data1Slug.replace(/-treatment/g, ''))) {
                bestMatch = data1Slug;
                break;
            }
        }
    }


    if (bestMatch) {
        missingImages[missingSlug] = { 
            found: true,
            image: data1Images[bestMatch],
            matchedWith: bestMatch
        };
    } else {
        missingImages[missingSlug] = {
            found: false,
            image: null,
            matchedWith: null
        };
    }
}

const outputPath = path.resolve(__dirname, 'image-mappings.json');
fs.writeFileSync(outputPath, JSON.stringify({
    missingImages
}, null, 2));

console.log(`\nFound ${Object.keys(missingImages).length} slugs with missing images.`);
console.log('A summary of missing images and their suggested matches has been saved to scripts/image-mappings.json');
