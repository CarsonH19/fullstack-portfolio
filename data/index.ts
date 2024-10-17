export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Technologies", link: "#technologies" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
    "Hello, I'm Carson, a Fullstack Developer based in Florida, USA.",
    description: "About Me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:row-span-2 row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start lg:justify-end",
    img: "/portrait-2.png",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I create efficient, scalable applications by integrating best practices in both frontend and backend development",
    description: "My Work",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  // {
  //   id: 3,
  //   title: "Always improving my tech stack.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 4,
    title: "Ready to foster cross-functional collaboration with team members around the world.",
    description: "Availability",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "I'm building an educational app which gamifies the process of learning JavaScript.",
    description: "Current Project",
    className: "md:col-span-3 md:row-span-2 lg:row-span-2",
    imgClassName: "absolute right-0 bottom-0 lg:w-3/4 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to work together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-[50%] text-center",
    img: "",
    spareImg: "",
  },
  
];

export const projects = [
  {
    id: 1,
    title: "Babble - Language Learning App",
    des: "A dynamic language learning app featuring leaderboards, quests, and a shop to gamify the experience and enhance user engagement.",
    img: "/babble.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/shadcn.svg",
      "/c.svg",
      "/neondb.svg",
    ],
    link: "https://babble-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Vaulty - Inventory Management",
    des: "An intuitive inventory management app that helps users effortlessly track, organize, and manage their products and finances.",
    img: "/vaulty.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/materialui.svg",
      "/prisma.svg",
      "/aws.svg",
    ],
    link: "https://main.d20srxd2k7f1cg.amplifyapp.com/",
  },
  {
    id: 3,
    title: "TalkLater - Scheduling Automation App",
    des: "A scheduling automation app that allows users to easily set up and manage appointments through Google Calendar.",
    img: "/talk-later.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/shadcn.svg",
      "/c.svg",
      "/neondb.svg",
      "/google_calendar.svg",
    ],
    link: "https://talk-later.vercel.app/",
  },
  {
    id: 4,
    title: "Sorting Algorithm Visualizer",
    des: "A scheduling automation app that allows users to easily set up and manage appointments through Google Calendar.",
    img: "/talk-later.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/shadcn.svg",
      "/c.svg",
      "/neondb.svg",
      "/google_calendar.svg",
    ],
    link: "https://talk-later.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "https://github.com/adrianhajdin/ai_saas_app",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const testimonials = [
  {
    quote:
      "I use Next.js for dynamic, server-rendered apps, utilizing its routing and API features for high performance. React.js allows for reusable components and effective state management, while Tailwind CSS streamlines styling with its utility-first approach, keeping my code organized and responsive.",
    name: "Frontend",
    title: "Next.js / React.js / Tailwind CSS",
  },
  {
    quote:
      "For user interfaces, I utilize ShadcnUI and AceternityUI for modular components that speed up development. Material-UI provides consistency across applications with its pre-designed components, and Recharts helps visualize complex data intuitively.",
    name: "User Interface",
    title: "ShadcnUI / AceternityUI / MaterialUI / Recharts",
  },
  {
    quote:
      "I rely on PostgreSQL as my primary database for its robustness and scalability. MongoDB with Mongoose is used for flexible, unstructured data, while Prisma simplifies database interactions. Drizzle facilitates smart contract integrations for blockchain functionalities.",
    name: "Backend",
    title: "PostgreSQL / Prisma / Drizzle / MongoDB / Mongoose",
  },
  {
    quote:
      "For version control, I use Git and GitHub to track changes efficiently. Postman ensures my APIs function correctly, while Sentry provides real-time error monitoring. Stripe handles secure transactions, and Clerk streamlines user authentication and management.",
    name: "Development Tools",
    title: "Git & GitHub / Postman / Clerk / Sentry / Stripe",
  },
  {
    quote:
      "For deployment, I use AWS for scalable hosting and Vercel for optimized Next.js applications. I also leverage Netlify for continuous deployment and frontend hosting, integrating seamlessly with my Git workflows.",
    name: "Deployment",
    title: "Vercel / Netlify / AWS",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend",
    desc: "Next.js / React.js / Tailwind CSS",
    className: "md:col-span-2 ",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend",
    desc: "PostgreSQL / NeonDB / Prisma / Drizzle / MongoDB / Mongoose",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "User Interface",
    desc: "ShadcnUI / AceternityUI / MaterialUI / Recharts",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Development Tools",
    desc: "Git & GitHub / Postman / Clerk / Sentry / Stripe",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/CarsonH19",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "www.linkedin.com/in/carson-harp-fullstack",
    img: "/link.svg",
  },
];
