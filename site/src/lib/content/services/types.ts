export interface ServicePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    label: string;
    heading: string;
    subheadline: string;
    image?: string;
    video?: string;
  };
  problem: {
    label: string;
    heading: string;
    intro: string;
    points: string[];
  };
  whatWeBuild: {
    label: string;
    heading: string;
    intro: string;
    items: {
      title: string;
      body: string;
    }[];
  };
  approach: {
    label: string;
    heading: string;
    intro: string;
    steps: {
      number: string;
      title: string;
      body: string;
    }[];
  };
  deliverables: {
    label: string;
    heading: string;
    intro: string;
    items: string[];
    note?: string;
  };
  caseStudies: {
    label: string;
    heading: string;
    studies: {
      name: string;
      tags: string[];
      body: string;
      href: string;
    }[];
  };
  investment: {
    label: string;
    heading: string;
    body: string;
    anchor: string;
    note: string;
  };
  faq: {
    label: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    heading: string;
    subtext: string;
  };
}
