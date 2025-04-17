"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Teaching", path: "/teaching" },
  { name: "Playground", path: "/playground" },
  { name: "Blog", path: "/blog" },
  { name: "Travel", path: "/travel" },
  { name: "People", path: "/people" },
  { name: "Hobbies", path: "/hobbies" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(255, 247, 237, 0.8)",
        backdropFilter: "blur(4px)",
        zIndex: 50,
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
            style={{ display: "none", alignItems: "center", gap: "2rem" }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  position: "relative",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  color: pathname === item.path ? "#F97316" : "#1E1E1E",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#F97316")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color =
                    pathname === item.path ? "#F97316" : "#1E1E1E")
                }
              >
                {item.name}
                {pathname === item.path && (
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
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        style={{ display: "none" }}
        className="mobile-nav"
      >
        <div
          style={{
            padding: "0.5rem 1rem 0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                display: "block",
                padding: "0.5rem 0.75rem",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "0.375rem",
                color: pathname === item.path ? "#F97316" : "#1E1E1E",
                backgroundColor:
                  pathname === item.path ? "#FFF7ED" : "transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#F97316";
                e.currentTarget.style.backgroundColor = "#FFF7ED";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color =
                  pathname === item.path ? "#F97316" : "#1E1E1E";
                e.currentTarget.style.backgroundColor =
                  pathname === item.path ? "#FFF7ED" : "transparent";
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-button,
          .mobile-nav {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-nav-button {
            display: flex !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
