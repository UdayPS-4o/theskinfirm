const fs = require('fs');
const path = require('path');

// Read the data.json file
const dataPath = path.join(__dirname, 'src', 'app', 'services', '[service]', 'data.json');
const serviceData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Function to convert service name to URL slug
function serviceNameToSlug(serviceName) {
  return serviceName.toLowerCase().replace(/\s+/g, '-');
}

// Extract all service keys and their corresponding slugs
const serviceKeys = Object.keys(serviceData);
const serviceMapping = {};
const slugToServiceName = {};

console.log('=== SERVICE NAME TO SLUG MAPPING ===');
console.log('');

serviceKeys.forEach(serviceName => {
  const slug = serviceNameToSlug(serviceName);
  serviceMapping[serviceName] = slug;
  slugToServiceName[slug] = serviceName;
  
  console.log(`"${serviceName}" -> "${slug}"`);
});

console.log('');
console.log('=== TOTAL SERVICES ===');
console.log(`Total services found: ${serviceKeys.length}`);

console.log('');
console.log('=== NAVBAR HAIR SERVICES ARRAY ===');
console.log('const HAIR_SERVICES = [');
const hairServices = serviceKeys.filter(name => 
  name.toLowerCase().includes('hair') || 
  name.toLowerCase().includes('prp') ||
  name.toLowerCase().includes('qr678') ||
  name.toLowerCase().includes('alopecia')
);
hairServices.forEach(service => {
  console.log(`  "${service}",`);
});
console.log('];');

console.log('');
console.log('=== NAVBAR LASER SERVICES ARRAY ===');
console.log('const LASER_SERVICES = [');
const laserServices = serviceKeys.filter(name => 
  name.toLowerCase().includes('laser') || 
  name.toLowerCase().includes('diode') ||
  name.toLowerCase().includes('co2') ||
  name.toLowerCase().includes('qswitch') ||
  name.toLowerCase().includes('tattoo')
);
laserServices.forEach(service => {
  console.log(`  "${service}",`);
});
console.log('];');

console.log('');
console.log('=== PROBLEMATIC SERVICES (Multiple Capitals) ===');
const problematicServices = serviceKeys.filter(name => {
  const words = name.split(' ');
  return words.some(word => {
    // Check if word has multiple capital letters or is an acronym
    const upperCaseCount = (word.match(/[A-Z]/g) || []).length;
    return upperCaseCount > 1 || word === word.toUpperCase();
  });
});

problematicServices.forEach(service => {
  console.log(`"${service}" -> "${serviceNameToSlug(service)}"`);
});

console.log('');
console.log('=== ACRONYMS FOUND ===');
const acronyms = new Set();
serviceKeys.forEach(name => {
  const words = name.split(' ');
  words.forEach(word => {
    if (word === word.toUpperCase() && word.length > 1) {
      acronyms.add(word);
    }
  });
});

console.log('Acronyms to handle in conversion logic:');
Array.from(acronyms).sort().forEach(acronym => {
  console.log(`'${acronym}'`);
});

// Write the mapping to a JSON file for reference
fs.writeFileSync('service-slug-mapping.json', JSON.stringify({
  serviceToSlug: serviceMapping,
  slugToService: slugToServiceName,
  totalServices: serviceKeys.length,
  hairServices,
  laserServices,
  problematicServices,
  acronyms: Array.from(acronyms).sort()
}, null, 2));

console.log('');
console.log('=== MAPPING SAVED ===');
console.log('Service mapping saved to: service-slug-mapping.json');