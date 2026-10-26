// Site-wide settings. Change these instead of editing page code.

export const VIDEOS = {
  // Put the files in public/videos/ with exactly these names. Until they exist, a placeholder is shown.
  terminal: { src: '/videos/terminal.mp4', poster: '/videos/terminal-poster.jpg' },
  location: { src: '/videos/location-zoom.mp4', poster: '/videos/location-poster.jpg' },
};

// Team photo shown first in the leadership slider (put the file in public/images/team/).
export const TEAM_PHOTO = '/images/team/team.jpg';

// Contact form.
// - Hosted on Netlify: leave FORM_ACTION empty; Netlify Forms picks the form up automatically.
// - Hosted on GitHub Pages: create a free form at formspree.io and paste its endpoint here,
//   e.g. 'https://formspree.io/f/abcdwxyz'.
export const FORM_ACTION = '';

// Partner and stakeholder logos in the moving band under "About SeaSeaS" (files in public/images/partners/).
// h = logo height in pixels on desktop, so logos look equally large despite different shapes.
export const PARTNERS = [
  { name: 'Exolum', logo: '/images/partners/exolum.png', url: 'https://exolum.com/en/', h: 34 },
  { name: 'Port of Amsterdam', logo: '/images/partners/port-of-amsterdam.png', url: 'https://www.portofamsterdam.com/en', h: 46 },
  { name: 'City of Amsterdam', logo: '/images/partners/city-of-amsterdam.png', url: 'https://www.amsterdam.nl/en/', h: 50 },
  { name: 'Programmabureau Noordzeekanaalgebied', logo: '/images/partners/nzkg.png', url: 'https://www.noordzeekanaalgebied.nl/en/', h: 46 },
  { name: 'Ministry of Economic Affairs and Climate Policy', logo: '/images/partners/ministry-ezk.png', url: 'https://www.rijksoverheid.nl/ministeries/ministerie-van-economische-zaken-en-klimaat', h: 64 },
  { name: 'Netherlands Enterprise Agency (RVO)', logo: '/images/partners/rvo.png', url: 'https://www.rvo.nl', h: 64 },
  { name: 'DB Cargo', logo: '/images/partners/db-cargo.svg', url: 'https://www.dbcargo.com/rail-de-en', h: 34 },
  { name: 'Victrol', logo: '/images/partners/victrol.png', url: 'https://www.victrol.be/highly-qualified-waterway-transport-all-over-europe/', h: 42 },
  { name: 'Schenk Tanktransport', logo: '/images/partners/schenk.svg', url: 'https://www.schenk-tanktransport.com/?noredirect=en-US', h: 30 },
];
