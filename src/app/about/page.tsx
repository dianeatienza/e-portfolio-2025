"use client";

import { motion } from "framer-motion";

export default function About() {
  const funFacts = [
    {
      title: "Favorite Motto",
      content:
        "Everything comes together for good.\nIf I fail to prepare, I prepare to fail.",
    },
    {
      title: "Favorite Color",
      content:
        "Orange - it create a positive atmosphere and it has a unique aesthetic appeal.",
    },
    {
      title: "Favorite Music",
      content:
        "OPM and Indie folk - connection, authenticity, and a quiet kind of storytelling that speaks to both my heart and my mind.",
    },
    {
      title: "Ultimate Goal",
      content: "To become a saint and be with Jesus in my after life.",
    },
    {
      title: "Hobbies",
      content:
        "Photography, singing, spending time playing with my nieces and nephews, and tinkering with various things.",
    },
    {
      title: "Dream Destination",
      content:
        "Rome - I long to walk where saints once walked, to pray at their tombs, and to experience the quiet majesty of Rome through God's grace. For me, it's more than travel—it's a pilgrimage of the heart.",
    },
  ];

  const workExperience = [
    {
      title: "Frontend Web Developer | Team Leader",
      company: "Lexcode, Inc.",
      period: "February 2024 - Present",
      description:
        "Developed and maintained enterprise web applications using React, Nextjs, FastAPI, Node.js, and AWS, focusing on NLP solutions and scalable architecture.",
    },
    {
      title: "Senior High School Mathematics Teacher",
      company: "Colegio San Agustin - Makati",
      period: "June 2022 - July 2023",
      description:
        "Taught Mathematics to senior high school students, developed engaging lesson plans, and mentored students in preparation for mathematics competitions. Implemented innovative teaching methods to improve student understanding and performance.",
    },
    {
      title: "Mathematics Teacher | Math Moderator",
      company: "The Nazareth School",
      period: "June 2018 - April 2020",
      description:
        "Taught mathematics to high school students and served as Math Moderator, organizing and coordinating mathematics competitions and events. Developed comprehensive lesson plans and assessment tools to improve student performance and mathematical understanding.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Mathematics Education",
      school: "Ateneo de Manila University",
      period: "2019 - 2023",
      description:
        "Completed 42 units of advanced coursework in Mathematics Education, including specialized studies in curriculum development, educational research, and advanced mathematics. Thesis work in progress.",
    },
    {
      degree: "Bachelor of Secondary Education Major in Mathematics",
      school: "De La Salle Lipa",
      period: "2014 - 2018",
      description:
        "Graduated with Latin honors (Cum Laude), specializing in mathematics education and pedagogical methods. Developed expertise in curriculum design and student assessment strategies.",
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
            <h2 className="text-2xl font-bold text-charcoal mb-6" id="my-story">
              My Story
            </h2>
            <p className="text-charcoal/70 mb-4">
              I&apos;m a web developer with over a year of experience in
              building beautiful and functional websites and applications. My
              journey into tech began with a series of &ldquo;if only there
              is&hellip;&rdquo; moments in a world full of friction and
              inconvenience. If only there were Tagalog transcription software
              to help with my thesis data gathering. If only my phone could
              automatically translate foreign languages so I could understand
              international volunteers better. These small frustrations sparked
              a deep curiosity in me—one that led me to learn how to code and
              eventually pursue a career in web development.
            </p>
            <p className="text-charcoal/70 mb-4">
              Alongside my development work, I&apos;ve also had the privilege of
              teaching and mentoring others, especially during my time as a team
              leader. I&apos;m not just a tech enthusiast—I&apos;m also an
              educator with over three years of experience teaching Mathematics.
              I&apos;ve even coached students in district and national
              Mathematics competitions. Currently, an exciting new teaching
              competitions. Currently, an exciting new teaching opportunity has
              opened up for me&mdash;and I can&apos;t wait to share more about
              it here soon!
            </p>
            <p className="text-charcoal/70">
              This dual role as both a developer and educator has given me a
              unique perspective on learning and problem-solving. It&apos;s
              taught me how to break down complex concepts into simpler ones,
              whether I&apos;m explaining them to a student or debugging code.
              It&apos;s also reinforced my belief that empathy, patience, and
              communication are just as crucial in tech as technical skills.
            </p>
            <p className="text-charcoal/70">
              When I&apos;m not coding or teaching, you&apos;ll likely find me
              traveling, meeting new people, and immersing myself in different
              cultures. These experiences have enriched my worldview and
              continue to inspire creativity in my work.
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
            <div className="space-y-4">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-primary font-medium mb-2">Home Town</h3>
                <p className="text-charcoal/80">Cuenca, Batangas</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-primary font-medium mb-2">Current Gig</h3>
                <p className="text-charcoal/80">Youth Counselor</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-primary font-medium mb-2">
                  Learning Curve (Tech)
                </h3>
                <p className="text-charcoal/80">Backend Development</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-primary font-medium mb-2">
                  Learning Curve (Educ)
                </h3>
                <p className="text-charcoal/80">
                  Gentle Discipline for Youth/Teens
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-primary font-medium mb-2">Big Dream</h3>
                <p className="text-charcoal/80">
                  To experience the world as a spiritual pilgrimage
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-primary font-medium mb-2">Go-To</h3>
                <p className="text-charcoal/80">Camera, ramen, and ice cream</p>
              </div>
            </div>
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

        {/* Awards and Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          id="awards"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-6">
            Awards & Certificates
          </h2>
          <div className="space-y-8">
            {/* Web Development Certifications */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold text-charcoal">
                Web Development Certifications
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Fullstack Web Development Certificate (Bootcamp)
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2024</span>
                  </div>
                  <p className="text-charcoal/70">
                    Comprehensive training in React, JavaScript, and modern
                    front-end development practices. Mastered responsive design,
                    state management, and advanced React concepts.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Computer Science Principles: Programming (LinkedIn)
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2024</span>
                  </div>
                  <p className="text-charcoal/70">
                    Comprehensive introduction to computer science fundamentals,
                    including programming concepts, algorithms, data structures,
                    and software development principles. Enhanced understanding
                    of computational thinking and problem-solving approaches.
                  </p>
                </div>
              </div>
            </div>

            {/* Teaching Certifications */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold text-charcoal">
                Teaching Certifications
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Professional Teaching License
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2018</span>
                  </div>
                  <p className="text-charcoal/70">
                    Licensed professional teacher specializing in Mathematics.
                    Certified to teach in both public and private educational
                    institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold text-charcoal">
                Awards & Recognition
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Employee of the Month (January)
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2025</span>
                  </div>
                  <p className="text-charcoal/70">
                    Awarded for outstanding performance, dedication, and
                    inspiring attitude to Lexcode, Inc.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Employee of the Month (August)
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2024</span>
                  </div>
                  <p className="text-charcoal/70">
                    Awarded for outstanding performance, dedication, and
                    inspiring attitude to Lexcode, Inc.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Employee of the Month (March)
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2024</span>
                  </div>
                  <p className="text-charcoal/70">
                    Awarded for outstanding performance, dedication, and
                    inspiring attitude to Lexcode, Inc.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Leadership Excellence Award
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2019</span>
                  </div>
                  <p className="text-charcoal/70">
                    Recognized for excellence in teaching and student
                    achievement in mathematics competitions at the national
                    level.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-primary font-medium">
                      Leadership Excellence Award
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/50">2018</span>
                  </div>
                  <p className="text-charcoal/70">
                    Recognized for excellence in teaching and student
                    achievement in mathematics competitions at the national
                    level.
                  </p>
                </div>
              </div>
            </div>
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
