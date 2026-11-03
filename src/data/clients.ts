import type { ImageMetadata } from 'astro';

import officineGullo from '../assets/clients/officine-gullo.png';
import apachePizza from '../assets/clients/apache-pizza.png';
import slievemoreDental from '../assets/clients/slievemore-dental.png';
import eskimoPizza from '../assets/clients/eskimo-pizza.png';
import imfFitouts from '../assets/clients/imf-fitouts.png';
import katiesBrand from '../assets/clients/katies-brand.png';
import beehive from '../assets/clients/beehive.png';
import dotMedia from '../assets/clients/dot-media.png';
import busRental from '../assets/clients/bus-rental.png';
import kashTech from '../assets/clients/kash-tech.png';
import ucaaz from '../assets/clients/ucaaz.png';
import pizzaThatsIt from '../assets/clients/pizza-thats-it.png';
import akroSecurity from '../assets/clients/akro-security.png';
import amTrekkers from '../assets/clients/am-trekkers-tours.png';
import zareenKhan from '../assets/clients/zareen-khan.png';
import smileCenter from '../assets/clients/smile-center-dental.png';
import structuralPest from '../assets/clients/structural-pest-management.png';

// Brands the Ansareez team has worked with, from the team's earlier company profile
// (same people, new brand: confirmed by Idrees, 27 Oct 2026). These are the clients' own
// brand logos, not logos the team designed. Remove any brand that is not happy to be listed.
// Never name the team's earlier company anywhere on the site.
//
// The site shows the full colour logos on white tiles. White versions for dark backgrounds are
// kept in src/assets/clients/white/ (made during a dark theme trial, 27 Oct 2026).
// To add one: put the file in src/assets/clients/ (SVG, or PNG with a transparent background),
// import it above and add it below with the client's name and, if wanted, their website.
export const clientLogos: { name: string; logo: ImageMetadata; url?: string }[] = [
  { name: 'Officine Gullo', logo: officineGullo },
  { name: 'Apache Pizza', logo: apachePizza },
  { name: 'Slievemore Dental', logo: slievemoreDental },
  { name: 'Eskimo Pizza', logo: eskimoPizza },
  { name: 'IMF Fitouts', logo: imfFitouts },
  { name: 'Katie’s Brand', logo: katiesBrand },
  { name: 'Beehive', logo: beehive },
  { name: 'Dot Media', logo: dotMedia },
  { name: 'Bus Rental UAE', logo: busRental },
  { name: 'Kash Tech IT Solutions', logo: kashTech },
  { name: 'UCAAZ', logo: ucaaz },
  { name: 'Pizza That’s It', logo: pizzaThatsIt },
  { name: 'Akro Security', logo: akroSecurity },
  { name: 'AM Trekkers and Tours', logo: amTrekkers },
  { name: 'Zareen Khan Make Up Studio', logo: zareenKhan },
  { name: 'Smile Center Dental Clinic', logo: smileCenter },
  { name: 'Structural Pest Management Association of Pakistan', logo: structuralPest },
];

/** The total from the profile. The "and more" tile shows how many are not pictured. */
export const clientTotal = 70;
