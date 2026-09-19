import Link from "next/link";
import "./footer.css";

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
              🏸
            </div>

            <div>
              <div className="site-footer__name">
                ANAS AT NET LOSS
              </div>

              <div className="site-footer__tagline">
                THE GREAT SHUTTLECOCK HUNT
              </div>
            </div>
          </div>

          <p className="site-footer__description">
            Somewhere between a badminton match, a treasure hunt
            and getting completely lost.
          </p>
        </div>

        <nav className="site-footer__nav">
          <Link href="/">Home</Link>
          <Link href="/race-day">Race Day</Link>
          <Link href="/for-anas">🔒 For Anas</Link>
        </nav>

      </div>

      <div className="site-footer__bottom">
        <span>🌎 The world is your court.</span>
        <span>Made for Anas · 2026</span>
      </div>

    </footer>
  );
}