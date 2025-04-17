"use client";

import { motion } from "framer-motion";

export default function About() {
  const funFacts = [
    {
      title: "Favorite Motto",
      content: "Life is a journey, not a destination.",
    },
    { title: "Favorite Color", content: "Teal - it's calming yet vibrant" },
    { title: "Favorite Food", content: "Sushi and Italian pasta" },
    { title: "Favorite Music", content: "Indie folk and jazz" },
    { title: "Hobbies", content: "Photography, hiking, and reading" },
    { title: "Dream Destination", content: "New Zealand" },
  ];

  const workExperience = [
    {
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and AWS.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and e-commerce platforms for various clients.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2016 - 2018",
      description:
        "Assisted in front-end development and UI/UX implementation for startup projects.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and User Experience Design",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      school: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors, focused on software development",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-4">About Me</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            A passionate web developer and educator with a love for creating
            beautiful, functional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-charcoal mb-6">My Story</h2>
            <p className="text-charcoal/70 mb-4">
              I&apos;m a web developer with over 8 years of experience in
              creating beautiful, functional websites and applications. My
              journey in tech began with a curiosity about how things work on
              the internet, which led me to learn coding and eventually pursue a
              career in web development.
            </p>
            <p className="text-charcoal/70 mb-4">
              Alongside my development work, I&apos;ve had the opportunity to
              teach and mentor others, sharing my knowledge and passion for web
              technologies. This dual role as a developer and educator has given
              me a unique perspective on both creating and explaining complex
              technical concepts.
            </p>
            <p className="text-charcoal/70">
              When I&apos;m not coding or teaching, I enjoy traveling, meeting
              new people, and exploring different cultures. These experiences
              have enriched my life and influenced my approach to
              problem-solving and creativity in my work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/10 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Quick Facts
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">📍</span>
                <span className="text-charcoal/70">
                  Based in San Francisco, CA
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">💻</span>
                <span className="text-charcoal/70">
                  Full-stack developer specializing in React and Node.js
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">👩‍🏫</span>
                <span className="text-charcoal/70">
                  5+ years of teaching experience
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">🌍</span>
                <span className="text-charcoal/70">
                  Traveled to 15+ countries
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">📚</span>
                <span className="text-charcoal/70">
                  Always learning new technologies
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          id="work-experience"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-6">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-charcoal">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-primary font-medium">
                    {job.company}
                  </span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/50">{job.period}</span>
                </div>
                <p className="text-charcoal/70">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Educational Background Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          id="education"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-6">
            Educational Background
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-charcoal">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-primary font-medium">{edu.school}</span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/50">{edu.period}</span>
                </div>
                <p className="text-charcoal/70">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
          id="fun-facts"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-6">
            Fun Facts About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className="bg-background rounded-lg p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {fact.title}
                </h3>
                <p className="text-charcoal/70">{fact.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
