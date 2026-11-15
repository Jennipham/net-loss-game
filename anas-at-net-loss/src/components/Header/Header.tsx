"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/no-birdies-logo.png"; 
import "./header.css";

const navItems = [
  {
    href: "/for-anas",
    label: "For Anas",
    icon: "🔒",
  },
  {
    href: "/race-day",
    label: "Race Day",
    icon: "🏁",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">

        <Link
          href="/"
          className="site-header__brand"
          aria-label="Anas at Net Loss home"
        >
          <div className="site-header__logo">
            <Image
              src={logo}
              alt="Anas at Net Loss"
              fill
              sizes="44px"
              priority
            />
          </div>

          <div className="site-header__brand-text">
            <span className="site-header__name">ANAS</span>
            <span className="site-header__tagline">
              HAS NO BIRDIES
            </span>
          </div>
        </Link>

        <nav className="site-header__nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-header__nav-link ${
                  isActive ? "site-header__nav-link--active" : ""
                }`}
              >
                <span>{item.icon}</span>
                <span className="site-header__nav-label">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}