/** Work history and education, from my LinkedIn profile. Sway's detailed bullets live on the resume page. */

export type Role = {
  title: string;
  company: string;
  type?: string;
  start: string; // "Mon YYYY"
  end: string; // "Mon YYYY" or "Present"
  location: string;
  summary?: string;
};

export const current: Role = {
  title: "Digital Marketing Coordinator",
  company: "Sway Advertising",
  type: "Contract, full-time",
  start: "May 2025",
  end: "Present",
  location: "Remote, Ontario",
  summary:
    "Lead SEO and digital strategy for agency clients, and build the agency's internal software and client websites.",
};

export const previous: Role[] = [
  {
    title: "Marketing Manager",
    company: "Doug Dane Coaching",
    type: "Contract, full-time",
    start: "Feb 2023",
    end: "Apr 2025",
    location: "Remote",
    summary:
      "Built the company's marketing tech stack: ActiveCampaign for email automation and segmentation, and Wix Studio for SEO and lead generation.",
  },
  {
    title: "Digital Marketing Coordinator",
    company: "Applied Electronics Limited",
    type: "Contract, full-time",
    start: "Oct 2021",
    end: "Feb 2023",
    location: "Toronto, ON",
    summary:
      "Grew Applied's brand through content development and digital marketing initiatives.",
  },
  {
    title: "Canadian Regional Business Unit",
    company: "GPA",
    start: "Oct 2021",
    end: "Feb 2023",
    location: "Remote",
    summary: "Video production and editing, including the GPA Toronto Summit 2022.",
  },
  {
    title: "Production Assistant",
    company: "Big Gay Fiction Podcast",
    type: "Freelance",
    start: "Sep 2021",
    end: "Sep 2022",
    location: "Remote",
    summary: "Copy and script editing for episodes 313 to 397.",
  },
  {
    title: "Chief Marketing Officer and Founder",
    company: "Puddleshaker",
    start: "Nov 2020",
    end: "Nov 2021",
    location: "Kitchener, ON",
  },
  {
    title: "Co-Founder",
    company: "Compass 9 Media",
    start: "Oct 2019",
    end: "Mar 2021",
    location: "Kitchener-Waterloo, ON",
  },
  {
    title: "Apprentice",
    company: "Respecting the Process Inc.",
    start: "May 2019",
    end: "Sep 2019",
    location: "Kitchener, ON",
    summary: 'Found the "why" in each business and told its story in a way people care about.',
  },
];

/** Customer-facing jobs before marketing, kept to one line on the resume. */
export const earlier =
  "Sales, hospitality and delivery roles at Cambridge Pools Supplies, Starbucks, The Keg Steakhouse + Bar and DoorDash (2014 to 2019).";

export const education = [
  {
    school: "Fanshawe College",
    credential: "Marketing Diploma (Business, Management, Marketing and Related Support Services)",
    years: "2017 to 2019",
  },
];
