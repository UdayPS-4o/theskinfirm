# Testing Hero Offer Feature

## Quick Start

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Access Payload CMS Admin

Navigate to: `http://localhost:3000/admin`

### 3. Upload Background Image

1. Go to **Media** collection
2. Click **Create New**
3. Upload the hero offer background image (e.g., `hero-offer-bg.png`)
4. Note the uploaded image for the next step

### 4. Create Hero Offer

1. Go to **Hero Offers** collection
2. Click **Create New**
3. Fill in the fields:
   - **Title**: `Upto\n20% OFF` (the `\n` will create a line break)
   - **Description**: `On pre-bridal & custom treatment packages curated uniquely for your skin, hair, and glow goals.`
   - **Button Text**: `Special Offer`
   - **Button Link**: `/contact`
   - **Background Image**: Select the image you uploaded
   - **Is Active**: Check this box
4. Click **Save**

### 5. View the Homepage

Navigate to: `http://localhost:3000`

You should see the hero section with your custom offer displayed!

## Testing Different Scenarios

### Test 1: Update Offer Content

1. Edit the hero offer in CMS
2. Change the title to `Get 30% OFF`
3. Save and refresh the homepage
4. Verify the new content appears

### Test 2: Change Background Image

1. Upload a new background image to Media
2. Edit the hero offer
3. Select the new background image
4. Save and refresh the homepage
5. Verify the new background appears

### Test 3: Toggle Active/Inactive

1. Edit the hero offer
2. Uncheck **Is Active**
3. Save and refresh the homepage
4. Verify the offer section is hidden
5. Re-check **Is Active** and verify it appears again

### Test 4: Multiple Offers

1. Create a second hero offer
2. Mark both as active
3. Refresh the homepage
4. Only the first active offer should display

## Troubleshooting

### Offer Not Showing

- Check if the offer is marked as **Active**
- Verify the background image is uploaded and selected
- Check browser console for any errors

### Image Not Loading

- Ensure the image is uploaded to the Media collection
- Check the image URL in the CMS
- Verify UploadThing configuration is correct

### Changes Not Reflecting

- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear Next.js cache: `rm -rf .next`
- Restart the development server

## Production Deployment

Before deploying to production:

1. Ensure at least one active hero offer exists
2. Verify all images are uploaded and accessible
3. Test the offer on different screen sizes
4. Check that links work correctly
