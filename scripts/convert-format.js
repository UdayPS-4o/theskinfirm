import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to generate random IDs that look like MongoDB ObjectIds.
const generateId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

// Helper to create a text node for Lexical
const createTextNode = (text, format = 0) => ({
  detail: 0,
  format: format, // 1 for bold
  mode: 'normal',
  style: '',
  text,
  type: 'text',
  version: 1,
});

// Helper to handle markdown-like bold (**text**) and line breaks
const parseText = (text) => {
  if (!text) return [];
  const nodes = [];
  // Split by bold markers, keeping the markers
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);

  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Bold text
      nodes.push(createTextNode(part.slice(2, -2), 1));
    } else {
      // Regular text, handle line breaks
      const subParts = part.split(/(\n)/g).filter(Boolean);
      for (const subPart of subParts) {
        if (subPart === '\n') {
          nodes.push({ type: 'linebreak', version: 1 });
        } else {
          nodes.push(createTextNode(subPart, 0));
        }
      }
    }
  }
  return nodes;
};

// Helper to create a rich text object (Lexical format)
const createRichText = (
  text,
  { tag = 'paragraph', format = '', direction = null, indent = 0 } = {},
) => {
  const children = [];
  if (text) {
    const paragraphs = text.split(/\n\n/); // Split by double newline for separate paragraphs
    paragraphs.forEach((p) => {
      const pNode = {
        children: parseText(p),
        direction,
        format,
        indent,
        type: tag === 'paragraph' ? 'paragraph' : 'heading',
        version: 1,
      };
      if (tag !== 'paragraph') {
        pNode.tag = tag;
      }
      children.push(pNode);
    });
  }

  return {
    root: {
      children,
      direction: null,
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  };
};

const inputFile = path.join(__dirname, 'jsony_short.json');
const outputFile = path.join(process.cwd(), 'payload_render.json'); // save in root

const inputData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
const slug = Object.keys(inputData)[0];
const serviceData = inputData[slug];

const outputData = {
  slug: slug.replace(/-in-pune$/, ''), // 'acne-treatment-in-pune' -> 'acne-treatment'
  title: serviceData.meta.title.split('|')[0].trim(),
  category: '68e254dac30714103ced9545', // placeholder from jsons.json
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  sections: [],
};

// 1. Hero
if (serviceData.hero) {
  // Special handling for hero title to split it
  const heroTitleParts = serviceData.hero.title.split(' - ');
  const heroTitleChildren = [];
  if (heroTitleParts[0]) {
    heroTitleChildren.push({
      children: [{ ...createTextNode(heroTitleParts[0]), format: 0 }],
      direction: null,
      format: 'start',
      indent: 0,
      type: 'heading',
      version: 1,
      tag: 'h1',
    });
  }
  if (heroTitleParts[1]) {
    const remainingTitle = heroTitleParts.slice(1).join(' - ');
    const subParts = remainingTitle.split(' with ');
    heroTitleChildren.push({
      children: [{ ...createTextNode(subParts[0] + ' '), format: 0 }],
      direction: null,
      format: '',
      indent: 0,
      type: 'heading',
      version: 1,
      tag: 'h1',
    });
    if (subParts[1]) {
      heroTitleChildren.push({
        children: [{ ...createTextNode('with ' + subParts[1]), format: 0 }],
        direction: null,
        format: '',
        indent: 0,
        type: 'heading',
        version: 1,
        tag: 'h1',
      });
    }
  }

  outputData.sections.push({
    id: generateId(),
    title: { root: { children: heroTitleChildren, direction: null, format: '', indent: 0, type: 'root', version: 1 } },
    description: createRichText(serviceData.hero.subtitle, {
      tag: 'h4',
      format: 'start',
    }),
    blockType: 'hero',
  });
}

// 2. What Is Service
if (serviceData.whatIsService) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.whatIsService.title, {
      tag: 'h2',
      format: 'center',
    }),
    description: createRichText(serviceData.whatIsService.content, {
      format: 'center',
    }),
    blockType: 'info',
  });
}

// 3. Signs & Symptoms
if (serviceData.signsSymptoms) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.signsSymptoms.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.signsSymptoms.items.map((item) => ({
      id: generateId(),
      content: createRichText(item, { format: 'left' }),
    })),
    blockType: 'bullet-points',
  });
}

// 4. Why Choose Us
if (serviceData.whyChooseUs) {
  const fullDescription = `${serviceData.whyChooseUs.description}\n\n${serviceData.whyChooseUs.highlight}`;
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.whyChooseUs.title, {
      tag: 'h2',
      format: 'start',
    }),
    description: createRichText(fullDescription, { format: 'start' }),
    blockType: 'about',
    image: '68e2530ea21844875a4b7732', // placeholder from jsons.json
  });
}

// 5. Process
if (serviceData.process) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.process.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.process.steps.map((step) => ({
      id: generateId(),
      title: step.title,
      description: createRichText(step.description),
    })),
    blockType: 'process',
  });
}

// 6. Treatment Types
if (serviceData.treatmentTypes) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.treatmentTypes.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.treatmentTypes.treatments.map((treatment) => ({
      id: generateId(),
      title: treatment.title,
      description: createRichText(treatment.description),
    })),
    blockType: 'treatments',
  });
}

// 7. Benefits
if (serviceData.benefits) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.benefits.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.benefits.items.map((item) => ({
      id: generateId(),
      content: createRichText(item),
    })),
    blockType: 'benifits', // Typo from original jsons.json
  });
}

// 8. Post Care
if (serviceData.postCare) {
  const downtimeItems = serviceData.postCare.description.split('\n').map((line) => {
    return {
      id: generateId(),
      content: createRichText(line),
    };
  });

  outputData.sections.push({
    id: generateId(),
    downtimeTitle: createRichText(serviceData.postCare.title, {
      tag: 'h2',
      format: 'center',
    }),
    downtime: downtimeItems,
    postCareTitle: createRichText(serviceData.postCare.tipsTitle, {
      tag: 'h2',
      format: 'start',
    }),
    postCareItems: serviceData.postCare.tips.map((tip) => ({
      id: generateId(),
      content: createRichText(tip),
    })),
    blockType: 'post-care',
  });
}

// 9. Clinic Features
if (serviceData.clinicFeatures) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.clinicFeatures.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.clinicFeatures.features.map((feature) => ({
      id: generateId(),
      content: createRichText(feature, { format: 'left' }),
    })),
    blockType: 'bullet-points',
  });
}

// 10. Testimonials
if (serviceData.testimonials) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.testimonials.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.testimonials.reviews.map((review) => ({
      id: generateId(),
      content: createRichText(review.replace(/“|”/g, '')),
    })),
    blockType: 'testimonials',
  });
}

// 11. Who Benefits
if (serviceData.whoBenefits) {
  outputData.sections.push({
    id: generateId(),
    title: createRichText(serviceData.whoBenefits.title, {
      tag: 'h2',
      format: 'center',
    }),
    items: serviceData.whoBenefits.candidates.map((candidate) => ({
      id: generateId(),
      content: createRichText(candidate),
    })),
    blockType: 'eligibility',
  });
}

// 12. FAQs
if (serviceData.faqs) {
    const faqBlock = {
        id: generateId(),
        // The title in jsons.json is the first question, which is odd.
        // Let's use the actual title from jsony_short.json and put it in a format that works.
        // I will create a separate title block for FAQs as it seems more logical.
        items: serviceData.faqs.questions.map(faq => ({
            id: generateId(),
            question: faq.question,
            answer: createRichText(faq.answer),
        })),
        blockType: 'faq',
    };
    // Replicating the odd title structure from jsons.json where the block title is one of the questions
    if (faqBlock.items.length > 0) {
        faqBlock.title = createRichText(serviceData.faqs.questions[0].question)
    }

    outputData.sections.push(faqBlock);
}

fs.writeFileSync(outputFile, JSON.stringify(outputData, null, 2));

console.log(`Conversion complete! File saved to ${outputFile}`);
