"use client";
import React, { useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import AOS from 'aos';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const skills = {
    "Frontend": {
        icon: "🎨",
        skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Chakra UI"],
        color: "from-blue-500 to-cyan-400"
    },
    "Backend": {
        icon: "⚙️",
        skills: ["FastAPI", "Node.js", "Python", "PHP", "REST APIs", "GraphQL"],
        color: "from-green-500 to-emerald-400"
    },
    "Database": {
        icon: "🗄️",
        skills: ["Prisma", "Drizzle ORM", "SQLAlchemy", "PostgreSQL", "MySQL"],
        color: "from-yellow-500 to-orange-400"
    },
    "DevOps & Deployment": {
        icon: "🚀",
        skills: ["Vercel", "Azure", "Docker", "Git", "CI/CD"],
        color: "from-purple-500 to-pink-400"
    },
    "Software & Engineering": {
        icon: "💻",
        skills: ["Operating Systems", "Networking", "Data Structures & Algorithms", "Design Patterns"],
        color: "from-teal-500 to-blue-400"
    },
    "Other": {
        icon: "🛠️",
        skills: ["Team Collaboration", "Authentication", "Quantum Computing", "Machine Learning", "Data Science"],
        color: "from-red-500 to-rose-400"
    }
};

  const experience = [
    {
      role: "Software Development",
      duration: "Oct 2024 - Present (4 months)",
      highlights: [
        "Full-Stack Development: Developed 3+ applications with Next.js, React.js, and TypeScript.",
        "Database Management: Built backends with Prisma and Drizzle ORM, managing databases with 10,000+ records and optimizing queries.",
        "Deployment and Optimization: Managed and deployed 3+ full-stack projects on Vercel and Azure."
      ]
    },
    {
      role: "Software Development",
      duration: "May 2024 - Sep 2024 (4 months)",
      highlights: [
        "Technology: Worked with Python, React and MySQL. Built REST APIs and AJAX functionalities.",
        "Agile Startup: Thrived in a startup, ensuring efficient product delivery.",
        "Teamwork: Learnt with a team of 4 developers in developing and deploying projects"
      ]
    }
  ];


  const projects = [
    {
      title: "Client Relationship Management Website",
      duration: "Oct 2024 to Present",
      description: "Engineered a CRM system supporting users with features like task management, advanced authentication, logging with emphasis on type safety and maintenance. Created a scalable database with PostgreSQL and optimized queries using Prisma for better performance, reducing execution time."
    },
    {
      title: "Astrobrain",
      duration: "Oct 2024 to Jan 2025",
      description: "Built an astronomy platform integrating 10+ APIs for rich content, user interactions, and AI features like a chatbot for personalized learning. Ensured clean, maintainable code with TypeScript, SWR for efficient API handling, and a responsive design using Tailwind and Chakra UI."
    },
    {
      title: "Payroll Portal",
      duration: "Apr 2024 to Jun 2024",
      description: "Developed a payroll website to automate salary calculations, manage employee records, and generate payslips with tax deductions and compliance adherence. Integrated authentication, attendance tracking, and reporting features to enhance accuracy and efficiency."
    },
    {
      title: "Reddit Clone Website",
      duration: "Oct 2023 to Dec 2023",
      description: "Developed a full-stack Reddit-like platform implementing key features such as user authentication, post creation, and comment threading. Leveraged Next.js for server-side rendering and typescript for readability. Website has features like post creation, upvotes and sub reddit creation."
    },
    {
      title: "E-commerce website",
      duration: "Jul 2023 to Sep 2023",
      description: "The System has features like authentication cloud functions, security rules, and transactions. Conducted thorough testing to ensure the projects reliability and identified and addressed potential security vulnerabilities."
    }
  ];


  interface SkillCardProps {
    category: string;
    data: {
      icon: string;
      skills: string[];
      color: string;
    };
    index: number;
  }

  const SkillCard: React.FC<SkillCardProps> = ({ category, data, index }) => (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${data.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`} />
      <Card className="relative h-full bg-background/80 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{data.icon}</span>
            <CardTitle className="text-lg font-bold">{category}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-sm bg-background/50 border hover:bg-primary/10 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Skills Section */}
      <section>
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, data], index) => (
            <SkillCard
              key={category}
              category={category}
              data={data}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm">{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{project.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;