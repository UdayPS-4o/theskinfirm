const fs = require('fs');
const path = require('path');

// Define the component organization mapping
const componentMapping = {
  // Home-specific components
  'home': [
    'home-page.tsx',
    'hero.tsx'
  ],
  
  // Layout components
  'layout': [
    'navbar.tsx',
    'footer.tsx'
  ],
  
  // Section components
  'sections': [
    'about.tsx',
    'services.tsx',
    'premium-services.tsx',
    'specialist.tsx',
    'stats.tsx',
    'stories.tsx',
    'success-stories.tsx',
    'why-choose-us.tsx',
    'gallery.tsx',
    'news.tsx',
    'faq.tsx'
  ],
  
  // Shared/utility components
  'shared': [
    'animated-component.tsx',
    'book-your-consultation.tsx',
    'cta.tsx',
    'cta2.tsx',
    'dashed-separator.tsx'
  ]
};

const srcComponentsPath = path.join(__dirname, 'src', 'components');

// Function to move a file
function moveFile(oldPath, newPath) {
  try {
    // Create directory if it doesn't exist
    const dir = path.dirname(newPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Move the file
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Moved: ${path.basename(oldPath)} → ${path.relative(srcComponentsPath, newPath)}`);
      return true;
    } else {
      console.log(`⚠️  File not found: ${oldPath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error moving ${oldPath}:`, error.message);
    return false;
  }
}

// Function to organize components
function organizeComponents() {
  console.log('🚀 Starting component organization...\n');
  
  let movedCount = 0;
  let totalCount = 0;
  
  // Process each category
  Object.entries(componentMapping).forEach(([category, files]) => {
    console.log(`📁 Organizing ${category} components:`);
    
    files.forEach(fileName => {
      totalCount++;
      const oldPath = path.join(srcComponentsPath, fileName);
      const newPath = path.join(srcComponentsPath, category, fileName);
      
      if (moveFile(oldPath, newPath)) {
        movedCount++;
      }
    });
    
    console.log(''); // Empty line for readability
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalCount}`);
  console.log(`   Successfully moved: ${movedCount}`);
  console.log(`   Skipped/Not found: ${totalCount - movedCount}`);
  
  if (movedCount > 0) {
    console.log('\n✨ Component organization completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Update import paths in your files');
    console.log('   2. Test the application to ensure everything works');
    console.log('   3. Consider updating any documentation');
  } else {
    console.log('\n🤔 No files were moved. They might already be organized or not exist.');
  }
}

// Function to show current structure
function showCurrentStructure() {
  console.log('📋 Current components directory structure:\n');
  
  try {
    const items = fs.readdirSync(srcComponentsPath, { withFileTypes: true });
    
    items.forEach(item => {
      if (item.isDirectory()) {
        console.log(`📁 ${item.name}/`);
        try {
          const subItems = fs.readdirSync(path.join(srcComponentsPath, item.name));
          subItems.forEach(subItem => {
            console.log(`   📄 ${subItem}`);
          });
        } catch (error) {
          console.log(`   ❌ Error reading directory: ${error.message}`);
        }
      } else {
        console.log(`📄 ${item.name}`);
      }
    });
  } catch (error) {
    console.error('❌ Error reading components directory:', error.message);
  }
  
  console.log('\n');
}

// Main execution
if (require.main === module) {
  console.log('🎯 Component Organization Script\n');
  
  // Show current structure
  showCurrentStructure();
  
  // Ask for confirmation
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Do you want to proceed with organizing components? (y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      organizeComponents();
    } else {
      console.log('❌ Operation cancelled.');
    }
    rl.close();
  });
}

module.exports = {
  organizeComponents,
  showCurrentStructure,
  componentMapping
};