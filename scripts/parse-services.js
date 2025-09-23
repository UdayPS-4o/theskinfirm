const fs = require('fs');
const path = require('path');

const markdownFilePath = path.join(__dirname, '../src/app/services/acne-treatment-in-pune/1-16services.md');
const outputJsonPath = path.join(__dirname, '../src/data/services.json');
const rawContent = fs.readFileSync(markdownFilePath, 'utf-8');

const serviceSections = rawContent.split(/(?=#+\s*Content for)/).filter(section => section.trim() !== '' && !section.trim().startsWith("#\n"));

const services = serviceSections.map(section => {
    const lines = section.split('\n');

    const titleLine = lines[0];
    let title = 'Untitled Service';
    const titleMatch = titleLine.match(/#+\s*Content for\s*(.*?)\s*Webpage/i);
    if (titleMatch && titleMatch[1]) {
        title = titleMatch[1].trim()
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
            .replace(/([a-z])([A-Z])/g, '$1 $2');
    }

    let urlSlug = '';
    const urlLine = lines.find(line => line.toLowerCase().includes('url'));
    if (urlLine) {
        // Updated regex to be more forgiving
        const urlMatch = urlLine.match(/https:\/\/theskinfirm\.in\/(?:services\/)?([a-zA-Z0-9-]+(?:-in-pune)?)\/?$/);
        if (urlMatch && urlMatch[1]) {
            urlSlug = urlMatch[1];
        }
    }

    if (!urlSlug) {
        let slugTitle = title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
        if (slugTitle.endsWith('-treatment')) {
            urlSlug = slugTitle + '-in-pune';
        } else if (slugTitle.endsWith('s')) {
            urlSlug = slugTitle + '-in-pune';
        }
        else {
            urlSlug = slugTitle.replace(/-Webpage$/i, '').trim();
        }
    }

    return {
        title: title,
        slug: urlSlug,
        content: section.trim()
    };
});

fs.writeFileSync(outputJsonPath, JSON.stringify(services, null, 2));

console.log(`Successfully parsed ${services.length} services and created services.json`);
