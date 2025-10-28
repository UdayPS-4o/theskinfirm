# Hero Offer - Dynamic CMS Setup

The hero section offer is now fully dynamic and can be managed through Payload CMS.

## What Changed

1. **New Collection**: `HeroOffer` collection added to Payload CMS
2. **Dynamic Content**: The offer section in the hero now pulls data from the CMS
3. **Editable Fields**:
   - Title (supports line breaks with `\n`)
   - Description
   - Button Text
   - Button Link
   - Background Image
   - Active/Inactive toggle

## How to Use

### 1. Access Payload CMS Admin

Navigate to your Payload admin panel (usually at `/admin`)

### 2. Create/Edit Hero Offer

1. Go to **Hero Offers** collection
2. Click **Create New** or edit existing offer
3. Fill in the fields:
   - **Title**: Main offer text (e.g., "Upto\n20% OFF" - use `\n` for line breaks)
   - **Description**: Detailed offer description
   - **Button Text**: Text for the CTA button (e.g., "Special Offer")
   - **Button Link**: Where the button should link to (e.g., "/contact")
   - **Background Image**: Upload or select the background image
   - **Is Active**: Toggle to show/hide the offer

### 3. Upload Background Image

Before creating an offer, make sure to:

1. Go to **Media** collection
2. Upload your offer background image
3. Use this image when creating the hero offer

### 4. Multiple Offers

- You can create multiple offers
- Only offers marked as **Active** will be displayed
- If multiple offers are active, only the first one will be shown

## Initial Setup

To seed the initial hero offer with default data:

```bash
npm run pd -- ts-node seeding/hero-offer-seed.ts
```

Note: Make sure to upload the background image to Media collection first, or update the seed script with a valid image reference.

## Technical Details

- **Collection Slug**: `hero-offer`
- **Location**: `src/collections/HeroOffer.ts`
- **Component**: `src/components/home/hero.tsx`
- **Data Fetching**: Server-side in `src/app/(app)/page.tsx`

## Fallback Behavior

If no active offer is found, the offer section will not be displayed on the homepage.
