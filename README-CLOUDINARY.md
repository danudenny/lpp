# Cloudinary Integration for LPP Landing Page

This document explains how to set up and configure Cloudinary for video and image assets in the LPP Landing Page project.

## Setup Instructions

1. **Create a Cloudinary Account**
   - Sign up at [https://cloudinary.com/](https://cloudinary.com/)
   - After registration, you'll get your cloud name, API key, and API secret

2. **Configure Environment Variables**
   - Create a `.env.local` file in the project root (it's already gitignored)
   - Add the following variables:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Update Cloudinary Utility**
   - Open `/utils/cloudinary.ts`
   - Replace the hardcoded `'demo'` cloud name with `process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

4. **Upload Your Assets**
   - Upload your hero video to Cloudinary
   - Note the public ID of your uploaded video (e.g., "lpp/hero-video")
   - Update the `videoPublicId` in `HeroSection.tsx` with your actual public ID

5. **Mobile Fallback Image**
   - Upload a static image to use as fallback on mobile devices
   - Either upload it to Cloudinary and update the URL in `HeroSection.tsx`
   - Or place it in the `/public` folder as `hero-mobile-fallback.jpg`

## Usage Notes

- The current implementation uses a sample video from Cloudinary's demo account
- Videos are automatically disabled on mobile devices to save bandwidth
- A fallback image is shown on mobile devices instead
- The video has a smooth fade-in effect when loaded

## Customization

You can customize the video quality and format by modifying the options in `getCloudinaryVideoUrl`:

```typescript
const videoUrl = getCloudinaryVideoUrl(videoPublicId, {
  quality: "auto", // Options: auto, low, medium, high
  format: "mp4"    // Options: mp4, webm, etc.
});
```

## Troubleshooting

- If the video doesn't load, check your browser console for errors
- Verify your Cloudinary cloud name is correct
- Ensure the public ID points to an actual video in your Cloudinary account
