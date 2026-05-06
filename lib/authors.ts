export type Author = {
  name: string;
  role: string;
  image: string;
  bio: string;
  links: {
    twitter?: string;
    linkedin?: string;
  };
  /** Anchor on the /about page for deep-linking the byline. */
  aboutAnchor: string;
};

const authors: Record<string, Author> = {
  "Marcel Fahle": {
    name: "Marcel Fahle",
    role: "Co-founder",
    image: "/images/marcel.jpg",
    bio: "25 years in software, 15 in video infrastructure. Built a headless video platform that still has its original customers. Saw coaching programs drowning in content no one could find — and knew the fix wasn't another search bar.",
    links: {
      twitter: "https://twitter.com/marcelfahle",
      linkedin: "https://linkedin.com/in/marcelfahle",
    },
    aboutAnchor: "/about#marcel-fahle",
  },
  "Rob Hope": {
    name: "Rob Hope",
    role: "Co-founder",
    image: "/images/rob.jpg",
    bio: "A decade creating video content for top brands. Founded One Page Love and built multiple courses with hundreds of lessons. Experienced the content findability problem firsthand — from the creator side.",
    links: {
      twitter: "https://twitter.com/robhope",
      linkedin: "https://linkedin.com/in/robhope",
    },
    aboutAnchor: "/about#rob-hope",
  },
};

export function getAuthor(name: string): Author | undefined {
  return authors[name];
}
