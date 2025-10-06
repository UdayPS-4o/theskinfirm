import fs from 'fs';
import path from 'path';

const API_URL = 'https://theskinfirm-six.vercel.app/api/services';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZTI0YTNkYTNhYTg2MDMwNTgwY2E5YSIsImNvbGxlY3Rpb24iOiJ1c2VycyIsImVtYWlsIjoiY29udGFjdEB1ZGF5cHMuY29tIiwic2lkIjoiMmQ1MWI3M2ItYzFkZi00ZTdjLTkwNDctNjJjYjczYTgwNWI2IiwiaWF0IjoxNzU5NzA0OTYzLCJleHAiOjE3NTk3MTIxNjN9.p38pReFnFuLcBNzuySuupKrqfItIL2-B-SdH7yWy-Ts';

async function getExistingSlugs() {
    const url = `${API_URL}?limit=100&depth=0`;
    const headers = {
        'accept': 'application/json',
        'cookie': `payload-token=${TOKEN}`,
    };
    try {
        const response = await fetch(url, { headers });
        if (response.ok) {
            const data = await response.json();
            return data.docs.map(doc => doc.slug);
        }
        console.error('Failed to fetch existing slugs:', response.status);
        return [];
    } catch (error) {
        console.error('Error fetching existing slugs:', error);
        return [];
    }
}


async function seedService(filePath, existingSlugs) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const serviceData = JSON.parse(fileContent);

        if (existingSlugs.includes(serviceData.slug)) {
            console.log(`Skipping already existing service: ${serviceData.slug}`);
            return;
        }

        const formData = new FormData();
        formData.append('_payload', JSON.stringify(serviceData));

        const headers = {
            'accept': '*/*',
            'cookie': `payload-token=${TOKEN}`,
            'Referer': 'https://theskinfirm-six.vercel.app/admin/collections/services/create'
        };

        const response = await fetch(`${API_URL}?depth=0&fallback-locale=null`, {
            method: 'POST',
            headers: headers,
            body: formData,
        });

        const responseData = await response.json();

        if (response.ok) {
            console.log(`Successfully seeded service from ${path.basename(filePath)}`);
        } else {
            console.error(`Failed to seed service from ${path.basename(filePath)}:`);
            console.error(`Status: ${response.status}`);
            console.error(JSON.stringify(responseData, null, 2));
        }

    } catch (error) {
        console.error(`An error occurred while seeding ${path.basename(filePath)}:`, error);
    }
}

async function seedAllServices() {
    console.log('Fetching existing slugs...');
    const existingSlugs = await getExistingSlugs();
    console.log(`Found ${existingSlugs.length} existing slugs.`);

    const inputDir = path.resolve(process.cwd(), 'seeding', 'renderjs');
    try {
        const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.json'));

        const seedPromises = files.map(file => {
            const filePath = path.join(inputDir, file);
            return seedService(filePath, existingSlugs);
        });

        await Promise.all(seedPromises);
        
        console.log('\nBatch seeding complete!');
    } catch (error) {
        console.error('An error occurred during batch seeding:', error);
    }
}

seedAllServices();
