
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: 'Full Stack' | 'Mobile' | 'Frontend' | 'UI/UX';
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Mobile';
}

export interface Qualification {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
