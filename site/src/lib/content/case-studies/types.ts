export interface CaseStudyBeat {
  label: string;
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  tagline: string;
  keyResult?: string;
  period: string;
  heroImage: string;
  beats: {
    context: CaseStudyBeat;
    challenge: CaseStudyBeat;
    thinking: CaseStudyBeat;
    approach: CaseStudyBeat;
    execution: CaseStudyBeat;
    result: CaseStudyBeat;
  };
  deliverables: string[];
  stack?: string[];
  cta: {
    heading: string;
    body: string;
    serviceLink: { label: string; href: string };
  };
  navigation: {
    next: { slug: string; title: string };
  };
  internalLinks: { label: string; href: string }[];
}

export interface WorkProject {
  name: string;
  slug: string;
  tags: string[];
  description: string;
  result?: string;
  image: string;
  tier: "featured" | "secondary";
}
