/**
 * Cloudinary utility functions
 */

/**
 * Generate a Cloudinary URL for videos
 * @param publicId The public ID of the video
 * @param options Additional options for the video
 * @returns The Cloudinary URL
 */
export function getCloudinaryVideoUrl(publicId: string, options: {
  quality?: string;
  format?: string;
} = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'; // Falls back to demo if not configured
  const quality = options.quality || 'auto';
  const format = options.format || 'mp4';
  
  return `https://res.cloudinary.com/${cloudName}/video/upload/q_${quality}/${publicId}.${format}`;
}

/**
 * Generate a Cloudinary URL for images
 * @param publicId The public ID of the image
 * @param options Additional options for the image
 * @returns The Cloudinary URL
 */
export function getCloudinaryImageUrl(publicId: string, options: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
} = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'; // Falls back to demo if not configured
  const width = options.width ? `w_${options.width},` : '';
  const height = options.height ? `h_${options.height},` : '';
  const quality = options.quality || 'auto';
  const format = options.format || 'auto';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${width}${height}q_${quality}/${publicId}.${format}`;
}
