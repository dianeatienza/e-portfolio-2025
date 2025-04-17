"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Threads",
      url: "https://threads.net/@yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.372 2.495-8.423 1.843-2.304 4.603-3.485 8.184-3.509 3.581.024 6.334 1.205 8.184 3.509C22.65 5.696 23.5 8.55 23.5 12.068c0 3.518-.85 6.372-2.495 8.423-1.843 2.304-4.603 3.485-8.184 3.509h.007zm-.007-22.5c-3.207.021-5.633 1.08-7.177 3.009C2.85 7.046 2 9.72 2 12.068c0 2.348.85 5.022 2.995 7.049 1.544 1.929 3.97 2.988 7.177 3.009 3.207-.021 5.633-1.08 7.177-3.009C21.15 17.09 22 14.416 22 12.068c0-2.348-.85-5.022-2.995-7.049-1.544-1.929-3.97-2.988-7.177-3.009z" />
          <path d="M12.186 19.5h-.007c-2.581-.017-4.584-.87-5.934-2.509C4.85 15.44 4 13.586 4 11.068c0-2.518.85-4.372 2.245-5.923 1.35-1.639 3.353-2.492 5.934-2.509 2.581.017 4.584.87 5.934 2.509C19.15 6.696 20 8.55 20 11.068c0 2.518-.85 4.372-2.245 5.923-1.35 1.639-3.353 2.492-5.934 2.509h.007zm-.007-17.5c-2.207.014-3.883.87-4.927 2.509C5.85 6.546 5 8.22 5 10.068c0 1.848.85 3.522 2.245 4.991 1.044 1.639 2.72 2.495 4.927 2.509 2.207-.014 3.883-.87 4.927-2.509C18.15 13.59 19 11.916 19 10.068c0-1.848-.85-3.522-2.245-4.991-1.044-1.639-2.72-2.495-4.927-2.509z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="bg-background py-12 border-t border-charcoal/10"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-charcoal">
              Connect With Me
            </h2>
            <p className="text-charcoal/70 text-center mt-2">
              Follow me on social media for updates and insights
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center text-charcoal/50 text-sm"
          >
            <p>
              © {new Date().getFullYear()} Lei Atienza. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
