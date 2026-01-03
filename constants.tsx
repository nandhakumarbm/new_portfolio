
import React from 'react';
import { Project, Skill, Qualification, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Qualifications', href: '#qualifications' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js / Express', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' },
  { name: 'Flutter', level: 85, category: 'Mobile' },
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'Git / GitHub', level: 90, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus SaaS Platform',
    description: 'A comprehensive B2B SaaS dashboard built with React and Node.js featuring real-time analytics.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    link: '#',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Flow Mobile App',
    description: 'Cross-platform task management application with offline synchronization and push notifications.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    link: '#',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'Mobile'
  },
  {
    id: '3',
    title: 'Lumina Design System',
    description: 'A premium, accessible component library for enterprise-level applications.',
    tags: ['TypeScript', 'Storybook', 'Styled Components'],
    link: '#',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'Frontend'
  },
  {
    id: '4',
    title: 'EcoTrack API',
    description: 'High-performance RESTful API for monitoring environmental sensor data globally.',
    tags: ['Node.js', 'Redis', 'Docker'],
    link: '#',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'Full Stack'
  }
];

export const QUALIFICATIONS: Qualification[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Tech University of Innovation',
    period: '2018 - 2022',
    description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors.'
  },
  {
    title: 'Full Stack Web Development Certification',
    institution: 'Advanced Coding Institute',
    period: '2022',
    description: 'Intensive program covering the modern MERN stack and cloud architecture.'
  }
];
