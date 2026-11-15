import Link from "next/link";
import Image from "next/image";
import "./footer.css";
import logo from "@/assets/no-birdies-logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="site-footer__grid" />

      <div className="site-footer__circle site-footer__circle--large" />
      <div className="site-footer__circle site-footer__circle--small" />

      <div className="site-footer__inner">

        <div className="site-footer__main">

          <div className="site-footer__brand">

            <div className="site-footer__icon">
              <Image
                src={logo}
                alt="Anas at Net Loss"
                width={32}
                height={32}
                className="site-footer__logo"
              />
            </div>

            <div>
              <div className="site-footer__name">
                ANAS HAS NO BIRDIES
              </div>

              <div className="site-footer__tagline">
                By Jennifer Pham
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="site-footer__bottom">
        <span></span>
        <span>Made for Anas · 2026</span>
      </div>

    </footer>
  );
}