import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#" },
];

export const testimonials = [
  {
    user: "Ahmed Al-Farsi",
    company: "TechLead | Digital Horizons",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Layla Al-Mansoori",
    company: "UX Designer",
    image: user2,
    text: "My personal portfolio perfectly showcases my work while maintaining effortless content updates. Highly recommended for professionals!",
  },
  {
    user: "Khalid Al-Zahrani",
    company: "Startup Founder",
    image: user3,
    text: "Our custom inventory management system was delivered ahead of schedule with exceptional attention to security requirements.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Full Stack Mastery",
    description:
      "Seamless integration of frontend elegance and backend robustness using modern tech stacks.",
  },
  {
    icon: <Fingerprint />,
    text: "Responsive Design",
    description:
      "Pixel-perfect layouts that adapt flawlessly across all devices and screen sizes.",
  },
  {
    icon: <ShieldHalf />,
    text: "API Integration",
    description:
      "Custom RESTful APIs and third-party service integrations for enhanced functionality.",
  },
  {
    icon: <BatteryCharging />,
    text: "Database Architecture",
    description:
      "Scalable SQL/NoSQL solutions optimized for performance and security.",
  },
  {
    icon: <PlugZap />,
    text: "DevOps Ready",
    description:
      "CI/CD pipeline configuration and cloud deployment expertise.",
  },
  {
    icon: <GlobeLock />,
    text: "Performance Optimization",
    description:
      "Lightning-fast load times through advanced caching and code minification.",
  },
];

export const checklistItems = [
  {
    title: "Requirement Analysis",
    description:
      "Detailed consultation to define project scope and technical specifications.",
  },
  {
    title: "Prototype Design",
    description:
      "Interactive mockups and user flow diagrams for client approval.",
  },
  {
    title: "Agile Development",
    description:
      "Two-week sprints with incremental deliverables and feedback integration.",
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive testing suite including unit, integration, and stress tests.",
  },
  {
    title: "Deployment & Support",
    description:
      "Production deployment with ongoing maintenance and scaling support.",
  },
];

export const pricingOptions = [
  {
    buton: "Get Started",
    title: "Essential Tools",
    price: "$29",
    features: [
      "Custom web applications",
      "Basic API integration",
      "Standard hosting setup",
      "1-month support",
      "Documentation",
    ],
  },
  {
    buton: "Start Project",
    title: "Professional Package",
    price: "$150",
    features: [
      "Personal portfolio development",
      "Responsive design",
      "Basic SEO setup",
      "6-month support",
      "CMS training",
    ],
  },
  {
    buton: "Schedule Consultation",
    title: "Enterprise Suite",
    price: "$300",
    features: [
      "Custom corporate portfolios",
      "Advanced CMS integration",
      "SEO optimization package",
      "Priority support",
      "SLA-backed maintenance",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Portfolio Samples" },
  { href: "#", text: "GitHub Profile" },
  { href: "#", text: "Technical Blog" },
];

export const platformLinks = [
  { href: "#", text: "Web Development" },
  { href: "#", text: "API Services" },
  { href: "#", text: "System Architecture" },
];

export const communityLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Service Terms" },
  { href: "#", text: "GDPR Compliance" },
];

export const contact = [
  { href: "moibhub@gmail.com", text: "Email" },
  { href: "+971528969034", text: "Phone" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Book Consultation" },
  { href: "www.linkedin.com/in/modther1", text: "LinkedIn" },
];

