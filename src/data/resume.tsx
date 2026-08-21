import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import {
  Azure,
  GoogleCloud,
  GraphQL,
  MongoDB,
  TailwindCSS,
} from "developer-icons";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { PayloadCMS } from "@/components/ui/svgs/payloadcms";
import { PrismicIO } from "@/components/ui/svgs/prismic.io";
import { ExpressJS } from "@/components/ui/svgs/expressjs";
import { Vercel } from "@/components/ui/svgs/vercel";
import { AWS } from "@/components/ui/svgs/aws";
import { Expo } from "@/components/ui/svgs/expo";
import { Stripe } from "@/components/ui/svgs/stripe";
import type { ReactNode } from "react";

export type HackathonEntry = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  win?: string;
  links: { title: string; icon: ReactNode; href: string }[];
};

export const DATA = {
  name: "Ajay Kumar",
  initials: "AK",
  url: "https://ajay-develops.vercel.app/",
  location: "Chandigarh, IN",
  locationLink: "https://maps.app.goo.gl/HcqYAkLxNMNQoWHP8",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "At the start of 2025, I transitioned into full-time freelancing to focus on building and scaling high-performance web and mobile applications for my clients. Holding a Bachelor's degree in Computer Science and Engineering, I began my career with an internship at a tech company in Mohali and have since contributed to three different companies as a Full Stack Developer. A highly resourceful, self-taught engineer, I built a strong technical foundation through hands-on development and specialized expertise in the MERN stack.",
  avatarUrl: "/my-profile.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React Native", icon: ReactLight },
    { name: "Expo", icon: Expo },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: ExpressJS },
    { name: "GraphQL", icon: GraphQL },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Payload CMS", icon: PayloadCMS },
    { name: "Prismic CMS", icon: PrismicIO },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AWS },
    { name: "Azure", icon: Azure },
    { name: "Google Cloud", icon: GoogleCloud },
    { name: "Vercel", icon: Vercel },
    { name: "Stripe", icon: Stripe },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ajaydevelops38@gmail.com",
    tel: "+918696260393",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/github-ajay",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/linkedin-ajay",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/twitter-ajay",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/youtube-ajay",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ajaydevelops38@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tailorix",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/tailorix.png",
      start: "August 2025",
      end: "Present",
      description: `Built and shipped two production platforms end-to-end — backend, web, and mobile apps.

**Tailorix** — on-demand tailoring marketplace · *Node.js, Express, MongoDB, React, React Native, Firebase*

- Built the booking engine covering the full order lifecycle (pending → accepted → in progress → completed → delivered), with pickup/delivery scheduling and rush-order pricing
- Built a digital measurement book so tailors keep every customer's measurements on file for accurate repeat orders
- Designed tiered SaaS subscriptions (Home Starter / Shop Growth / Boutique Pro) on Razorpay, unlocking a digital order register and in-app fabric store
- Integrated dual payment gateways (Razorpay + Stripe) with refund and reconciliation tracking
- Built phone OTP, Google OAuth, and MPIN login, plus Firebase push notifications and in-app support chat

**Result:** live three-sided marketplace (customers, tailors, admin) across web and mobile.

**Barbo** — local salon discovery & booking platform · *Node.js, Express, MongoDB, React, Expo/React Native*

- Built passwordless OTP login around mobile number as identity, with dual-role support so one number works as both customer and salon owner
- Solved a legacy data problem by unifying identity lookups across 9+ inconsistent field names
- Built a tiered subscription paywall (₹199 / ₹499 / ₹999 via Razorpay) gating dashboard access and bookings
- Built a marketing attribution engine tracking Instagram, WhatsApp, Google, and Facebook referral sources
- Kept already-published Android APKs working through API changes via versioned legacy route aliases

**Result:** live at barbo.in, serving real salons and customers across 12 Indian languages.`,
    },
    {
      company: "WebFactory.Digital",
      href: "https://webfactory.digital",
      badges: [],
      location: "Remote",
      title: "Freelance Full Stack Developer",
      logoUrl: "/webfactory.png",
      start: "February 2025",
      end: "July 2025",
      description: `Delivered end-to-end web solutions for clients across healthcare, fintech, and consumer domains.

- Built the [nextgenpayment.eu](https://nextgenpayment.eu) payments website and a medical marketing platform
- Built high-performance marketing and landing pages with [Next.js](https://docs.nextjs.org/), integrated with Prismic CMS and Sanity CMS for independent content management
- Shipped the Gastro Genius Challenge cross-platform mobile app for Android and iOS
- Built the Oboe Automation project to streamline client workflows
- Designed and shipped full-stack platforms for Logopsi and Odda, covering both front-end and back-end
- Created and deployed email marketing templates within GoHighLevel CRM for client outreach campaigns`,
    },
    {
      company: "Scale Healthcare Pvt. Ltd.",
      href: "https://www.scale-healthcare.com",
      badges: [],
      location: "Mohali, Punjab, IN",
      title: "Full Stack Developer",
      logoUrl: "/scale-healthcare.png",
      start: "March 2024",
      end: "February 2025",
      description: `Spearheaded full-cycle development of the RCM (Revenue Cycle Management) web application, [Scale Analytics App](https://app.scale-analytics.com), improving data visibility for admins.

- Designed and maintained scalable backend services with [Node.js](https://nodejs.org/)/[Express.js](https://expressjs.com/) for high availability and fault tolerance
- Managed complex data models and aggregation pipelines in MongoDB to ensure data integrity across user roles
- Integrated [Microsoft PowerBI](https://powerbi.microsoft.com/) reports for real-time decision-making
- Containerized deployments with [Docker](https://www.docker.com/) on [Azure Cloud](https://azure.microsoft.com/en-in/products/cloud-services)`,
    },
    {
      company: "MarkeStac",
      href: "https://www.markestac.com/",
      badges: [],
      location: "Mohali, Punjab, IN",
      title: "Full Stack Developer",
      logoUrl: "/markestac.png",
      start: "April 2023",
      end: "March 2024",
      description: `Engineered custom websites, bespoke themes, and automated workflows for enterprise clients.

- Integrated HubSpot CMS (HubL) and GoHighLevel CRM with backend Serverless Functions for custom automation
- Delivered pixel-perfect, localized frontends with React.js, MaterialUI, and i18next
- Built high-converting custom email templates
- Expanded platform capabilities through third-party API and secure Stripe integrations`,
    },
    {
      company: "SpiceTech IT Solutions, Kota",
      href: "https://spicegems.com/",
      badges: [],
      location: "Kota, IN",
      title: "Junior Software Developer",
      logoUrl: "/spicetech.png",
      start: "July 2022",
      end: "April 2023",
      description: `Developed and optimized custom Shopify extensions and modular theme add-ons.

- Built Shopify add-ons and themes with [Liquid](https://shopify.dev/docs/themes/liquid), JavaScript, and jQuery, focused on cross-browser compatibility
- Optimized frontend performance with GSAP and Framer Motion for smooth animations
- Assisted in developing Android applications with React Native, bridging web and mobile experiences`,
    },
    {
      company: "Talentelgia Technologies",
      href: "https://talentelgia.com/",
      badges: [],
      location: "Mohali, IN",
      title: "Software Intern",
      logoUrl: "/talentelgia.png",
      start: "Feb 2022",
      end: "June 2022",
      description: `Gained hands-on, foundational full-stack development experience within an agile engineering team.

- Built web projects with HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, Express.js, EJS, and MongoDB
- Built an e-commerce storefront with a React.js front end and an Express.js back end
- Built an online calculator and a browser game inspired by Chrome's dino game
- Used Git/GitHub for version control and ran API testing through Postman`,
    },
  ],
  education: [
    {
      school: "Modi Institute of Technology, Kota, RJ, IN",
      href: "https://mitkota.com",
      degree: "Bachelor's Degree of Computer Science Engineering (CSE)",
      logoUrl: "/mit.png",
      start: "2018",
      end: "2024",
    },
    {
      school: "Career Line Coaching, Sikar, RJ, IN",
      href: "https://www.clcsikar.com/",
      degree: "Higher Secondary education",
      logoUrl: "/clc.png",
      start: "2015",
      end: "2017",
    },
    {
      school: "Sophia Secondary School, Khetri Nagar, RJ, IN",
      href: "https://sophiakhetrinagar.in/",
      degree: "Matriculation Degree",
      logoUrl: "/sophia.png",
      start: "2003",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "ZyraSound",
      href: "https://zyrasound.ajaydevelops.in",
      dates: "2026 - Present",
      active: true,
      description:
        "Built a realtime collaborative music platform where musicians in different countries play together in time. Notes travel between browsers as MIDI over WebRTC data channels rather than as audio, so each peer synthesises everyone's playing locally — a few bytes per note instead of a stream — with a shared musical clock keeping the room in sync. Includes browser-native instruments written as AudioWorklets, loop recording, peer-to-peer voice and video, per-person room invites, and a SoundCloud-style community feed where loops are rendered to audio in the browser and published for anyone to hear.",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "WebRTC",
        "Web Audio API",
        "AudioWorklet",
        "Web MIDI",
        "WebSockets",
        "Clerk",
        "Postgres",
        "Neon",
        "UploadThing",
        "Vercel",
        "Fly.io",
        "Cloudflare TURN",
      ],
      links: [
        {
          type: "Website",
          href: "https://zyrasound.ajaydevelops.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/zyrasound.mp4",
    },
    {
      title: "ZemaFidelat",
      href: "https://zemafidelat.com",
      dates: "2026 - Present",
      active: true,
      description:
        "Architected a full-stack language learning platform that helps users master the Geez (Ethiopic) script through interactive lessons, letter tracing, spaced-repetition flashcards, daily challenges, and gamification. Built with an offline-first architecture, featuring cloud sync, multi-profile support, and real-time progress tracking.",
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "Next.js",
        "Payload CMS",
        "MongoDB",
        "SQLite",
        "TailwindCSS",
        "React Native Skia",
      ],
      links: [
        {
          type: "Website",
          href: "https://zemafidelat.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video:"https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/zema-fidelat.mp4"
    },
    {
      title: "Gastro Genius Challenge",
      href: "https://gastrogeniuschallenge.com",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Developed a cross-platform mobile application and administrative ecosystem for gastroenterology professionals. Engineered interactive, gamified medical quizzes, real-time peer challenges, and competitive leaderboards, managing full-cycle deployment across both major app marketplaces.",
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "TailwindCSS",
        "Next.js",
        "Payload CMS",
        "MongoDB",
        "GraphQL",
        "REST API",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://gastrogeniuschallenge.com",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/gastro-genius-challenge.png",
    },
    {
      title: "SubGenAI",
      href: "https://subgenai.ajaydevelops.in",
      dates: "2026 - Present",
      active: true,
      description:
        "Architected a privacy-focused web application that generates timestamped SRT subtitles from video using client-side ffmpeg.wasm audio extraction and Google Gemini AI. Built with a secure BYOK (Bring Your Own Key) architecture using AES-256-GCM encryption, featuring real-time streaming responses, multi-language support, and Clerk authentication.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Clerk",
        "Google Gemini",
        "Vercel AI SDK",
        "ffmpeg.wasm",
        "Upstash Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://subgenai.ajaydevelops.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ajay-develops/sub-gen-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video:"https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/subgenai.mp4"
    },
    {
      title: "Webpage Showcase",
      href: "https://chromewebstore.google.com/detail/jfgegogopcpjgmenieojcjnppikopdag?utm_source=item-share-cb",
      dates: "2026",
      active: true,
      description:
        "Built a privacy-first, Manifest V3 Chrome extension that acts as a camera dolly for your browser, providing cinematic, repeatable auto-scroll for product demo recordings. Features a framework-agnostic scroll engine with cubic-easing animation, intelligent section auto-detection, tunable speeds/pauses, sticky-header offset handling, and per-website persistence.",
      technologies: [
        "TypeScript",
        "WXT",
        "Vite",
        "Vitest",
        "Chrome Extensions API",
        "Manifest V3",
        "Open Source",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/ajay-develops/webpage-showcase-chrome-extension",
          icon: <Icons.github className="size-3" />,
        },
        {
          type:"Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/jfgegogopcpjgmenieojcjnppikopdag?utm_source=item-share-cb",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      video: "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/webpage-showcase.mp4"
    },
    {
      title: "Logopsi Estudios Ed Tech WebApp",
      href: "https://app.logopsiestudios.com",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Architected and engineered a comprehensive, full-stack educational platform enabling teachers to assign interactive exercises, track student progress in real-time, and communicate directly via an integrated chat system. Implemented secure user authentication and subscription billing pipelines.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Hero UI",
        "AWS S3",
        "REST API",
        "MongoDB",
        "Stripe",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.logopsiestudios.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/logopsi-estudios.png",
    },
    {
      title: "NextGenPayment Website & Marketing",
      href: "https://www.nextgenpayment.eu",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Engineered the official web presence for a secure international payment portal utilizing Webflow, developing an optimized CMS architecture to handle regular blog and content updates. Architected and integrated an end-to-end lead management and marketing pipeline using GoHighLevel CRM to automate user onboarding.",
      technologies: ["Webflow", "Webflow CMS", "GoHighLevel CRM"],
      links: [
        {
          type: "Website",
          href: "https://nextgenpayment.eu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/nextgenpayment.png",
      video:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/nextgenpayment.mp4",
    },
    {
      title: "Open-Source WhatsApp CRM Automator",
      href: "https://github.com/ajay-develops/whatsapp-bot.git",
      dates: "July 2024 - August 2024",
      active: false,
      description:
        "Architected and launched an open-source WhatsApp automation ecosystem engineered to seamlessly bridge CRM platforms with real-time messaging. Developed a high-volume Express.js backend utilizing the Baileys library for automated customer workflows, paired with a React.js Chrome extension for rapid, secure device authentication and client onboarding.",
      technologies: [
        "React.js",
        "Chrome Extension API",
        "Express.js",
        "Node.js",
        "Baileys Library",
        "JavaScript",
        "Automation",
        "Open Source",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/ajay-develops/whatsapp-bot.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/whatsapp-crm-automator.mp4",
    },
    {
      title: "Scale Analytics App",
      href: "https://app.scale-analytics.com",
      dates: "Mar 2024 - Jan 2025",
      active: true,
      description:
        "End-to-end architected, developed, and deployed a secure, enterprise-grade data analytics portal utilized by healthcare organizations to gain insights from their data. Engineered a seamless pipeline integrating a custom full-stack backend with Microsoft PowerBI to display secure, interactive dashboards and real-time complex metrics visualization in the app.",
      technologies: [
        "Next.js",
        "Redux",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Docker",
        "Microsoft PowerBI",
        "Microsoft Entra ID",
        "Azure Cloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.scale-analytics.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://vhmphhjkwjdfe3xj.public.blob.vercel-storage.com/projects/scale-analytics.jpg",
    },
  ],
  // Example hackathon entry — uncomment and add to the array to restore the timeline section.
  hackathons: [] as HackathonEntry[],
} as const;
