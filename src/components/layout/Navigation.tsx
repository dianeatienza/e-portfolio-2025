"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Define types for navigation items
type NavItem = {
  name: string;
  path: string;
};

type NavCategory = {
  name: string;
  path: string;
  isDirectLink: boolean;
  description?: string;
  items?: NavItem[];
};

// Define the navigation structure with categories
const navCategories: NavCategory[] = [
  {
    name: "Home",
    path: "/",
    isDirectLink: true,
  },
  {
    name: "About",
    path: "/about",
    isDirectLink: false,
    description: "Learn more about me and my background",
    items: [
      { name: "My Story", path: "/about#my-story" },
      { name: "Work Experience", path: "/about#work-experience" },
      { name: "Educational Background", path: "/about#education" },
      { name: "Awards & Certificates", path: "/about#awards" },
      { name: "Fun Facts", path: "/about#fun-facts" },
    ],
  },
  {
    name: "Web Development",
    path: "/web-development",
    isDirectLink: false,
    description: "My journey in web development",
    items: [
      { name: "Projects", path: "/projects" },
      { name: "Interactive Playground", path: "/playground" },
      { name: "Skills", path: "/web-development#skills" },
    ],
  },
  {
    name: "Teaching",
    path: "/teaching",
    isDirectLink: false,
    description: "Teaching in schools and cruise ships",
    items: [{ name: "Skills", path: "/teaching#skills" }],
  },
  {
    name: "Life & Experiences",
    path: "/life",
    isDirectLink: false,
    description: "My personal journey and interests",
    items: [
      { name: "Travel", path: "/travel" },
      { name: "People", path: "/people" },
      { name: "Hobbies", path: "/hobbies" },
      { name: "Blog", path: "/blog" },
    ],
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if a path is active (for highlighting current page)
  const isPathActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Toggle dropdown
  const toggleDropdown = (categoryName: string) => {
    if (activeDropdown === categoryName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(categoryName);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(255, 247, 237, 0.8)",
        backdropFilter: "blur(4px)",
        zIndex: 50,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              href="/"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#F97316",
              }}
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            style={{ display: "none", alignItems: "center", gap: "1.5rem" }}
            className="desktop-nav"
          >
            {navCategories.map((category) => (
              <div key={category.name} className="relative">
                {category.isDirectLink ? (
                  <Link
                    href={category.path}
                    style={{
                      position: "relative",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      transition: "color 0.2s",
                      color: isPathActive(category.path)
                        ? "#F97316"
                        : "#1E1E1E",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#F97316")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = isPathActive(category.path)
                        ? "#F97316"
                        : "#1E1E1E")
                    }
                  >
                    {category.name}
                    {isPathActive(category.path) && (
                      <motion.div
                        layoutId="underline"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          backgroundColor: "#F97316",
                        }}
                      />
                    )}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(category.name)}
                      style={{
                        position: "relative",
                        padding: "0.5rem 0.75rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        transition: "color 0.2s",
                        color: isPathActive(category.path)
                          ? "#F97316"
                          : "#1E1E1E",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#F97316")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = isPathActive(
                          category.path
                        )
                          ? "#F97316"
                          : "#1E1E1E")
                      }
                    >
                      {category.name}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform:
                            activeDropdown === category.name
                              ? "rotate(180deg)"
                              : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-charcoal/5"
                        ref={dropdownRef}
                        style={{
                          boxShadow:
                            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        {category.description && (
                          <div className="px-4 py-3 text-xs text-charcoal/70 border-b border-charcoal/10 bg-charcoal/5">
                            {category.description}
                          </div>
                        )}
                        <div className="py-1">
                          {category.items?.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                              }}
                            >
                              <Link
                                href={item.path}
                                className="block px-4 py-2.5 text-sm text-charcoal hover:bg-primary/10 hover:text-primary transition-all duration-200 flex items-center"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-4 py-2 text-xs text-charcoal/50 border-t border-charcoal/10 bg-charcoal/5">
                          Click to navigate
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="mobile-nav-button"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                color: "#1E1E1E",
                outline: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F97316")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#1E1E1E")}
            >
              <span className="sr-only">Open main menu</span>
              <div
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    transform: isOpen
                      ? "rotate(45deg) translateY(2.5px)"
                      : "none",
                    transition: "transform 0.2s",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    opacity: isOpen ? 0 : 1,
                    transition: "opacity 0.2s",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    transform: isOpen
                      ? "rotate(-45deg) translateY(-2.5px)"
                      : "none",
                    transition: "transform 0.2s",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            style={{
              position: "fixed",
              top: "4rem",
              left: 0,
              right: 0,
              backgroundColor: "rgba(255, 247, 237, 0.95)",
              backdropFilter: "blur(4px)",
              zIndex: 40,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "0.5rem 1rem 0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {navCategories.map((category) => (
                <div key={category.name}>
                  {category.isDirectLink ? (
                    <Link
                      href={category.path}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.75rem",
                        fontSize: "1rem",
                        fontWeight: 500,
                        borderRadius: "0.375rem",
                        color: isPathActive(category.path)
                          ? "#F97316"
                          : "#1E1E1E",
                        backgroundColor: isPathActive(category.path)
                          ? "#FFF7ED"
                          : "transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#F97316";
                        e.currentTarget.style.backgroundColor = "#FFF7ED";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = isPathActive(
                          category.path
                        )
                          ? "#F97316"
                          : "#1E1E1E";
                        e.currentTarget.style.backgroundColor = isPathActive(
                          category.path
                        )
                          ? "#FFF7ED"
                          : "transparent";
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(category.name)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          padding: "0.5rem 0.75rem",
                          fontSize: "1rem",
                          fontWeight: 500,
                          borderRadius: "0.375rem",
                          color: isPathActive(category.path)
                            ? "#F97316"
                            : "#1E1E1E",
                          backgroundColor: isPathActive(category.path)
                            ? "#FFF7ED"
                            : "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#F97316";
                          e.currentTarget.style.backgroundColor = "#FFF7ED";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = isPathActive(
                            category.path
                          )
                            ? "#F97316"
                            : "#1E1E1E";
                          e.currentTarget.style.backgroundColor = isPathActive(
                            category.path
                          )
                            ? "#FFF7ED"
                            : "transparent";
                        }}
                      >
                        {category.name}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            transform:
                              activeDropdown === category.name
                                ? "rotate(180deg)"
                                : "none",
                            transition: "transform 0.2s",
                          }}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === category.name && category.items && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-1 overflow-hidden"
                          >
                            {category.description && (
                              <div className="px-4 py-2 text-xs text-charcoal/70 bg-charcoal/5 rounded-md mb-1">
                                {category.description}
                              </div>
                            )}
                            <div className="py-1">
                              {category.items.map((item, index) => (
                                <motion.div
                                  key={item.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: index * 0.05,
                                  }}
                                >
                                  <Link
                                    href={item.path}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      padding: "0.5rem 0.75rem",
                                      fontSize: "0.9rem",
                                      fontWeight: 500,
                                      borderRadius: "0.375rem",
                                      color: isPathActive(item.path)
                                        ? "#F97316"
                                        : "#1E1E1E",
                                      backgroundColor: isPathActive(item.path)
                                        ? "#FFF7ED"
                                        : "transparent",
                                      marginBottom: "0.25rem",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.color = "#F97316";
                                      e.currentTarget.style.backgroundColor =
                                        "#FFF7ED";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.color =
                                        isPathActive(item.path)
                                          ? "#F97316"
                                          : "#1E1E1E";
                                      e.currentTarget.style.backgroundColor =
                                        isPathActive(item.path)
                                          ? "#FFF7ED"
                                          : "transparent";
                                    }}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsOpen(false);
                                    }}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-button {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-nav-button {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
