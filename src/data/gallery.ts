import type { ImageMetadata } from 'astro';

// Gallery photos. Put the client's photos in src/assets/gallery/, import each one here and give
// it a short description for people using screen readers. Astro resizes and compresses them.
//
// Example:
// import office from '../assets/gallery/office.jpg';
// export const galleryImages = [{ image: office, alt: 'The Ansareez team planning a campaign' }];

export const galleryImages: { image: ImageMetadata; alt: string }[] = [];
