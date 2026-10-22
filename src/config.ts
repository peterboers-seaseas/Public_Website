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
