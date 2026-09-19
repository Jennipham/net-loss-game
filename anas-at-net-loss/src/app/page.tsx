import Link from "next/link";
import Image from "next/image";
import "./page.css";
import logo from "../assets/net-loss-logo.png";

export default function HomePage() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">

        <div className="hero__background" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--yellow" />

        <div className="hero__container">

          <div className="hero__content">

            <div className="hero__eyebrow">
              <span />
              MISSION 01 · THE GREAT HUNT
            </div>

            <h1 className="hero__title">
              ANAS
              <span>IS AT</span>
              <strong>NET LOSS.</strong>
            </h1>

            <p className="hero__description">
              Somewhere out there, Anas has lost his badminton
              shuttlecocks. Across the world.
              <strong>Your mission is simple: find them.</strong>
            </p>

            <div className="hero__actions">

              <Link
                href="/race-day"
                className="hero__button hero__button--primary"
              >
                <span>Start the race</span>
                <span>→</span>
              </Link>

              <Link
                href="/for-anas"
                className="hero__button hero__button--secondary"
              >
                🔒 For Anas
              </Link>

            </div>

            <div className="hero__stats">

              <div>
                <strong>03</strong>
                <span>Rounds</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>The world</span>
              </div>

              <div>
                <strong>?</strong>
                <span>Shuttles</span>
              </div>

            </div>

          </div>

          <AdventureMap />

        </div>
      </section>

      {/* Mission */}
      <section className="missions">

        <div className="missions__container">

          <div className="missions__heading">
            <div className="section-eyebrow">
              HOW IT WORKS
              <span />
            </div>

            <h2>
              THREE ROUNDS.
              <span>ONE DESTINATION.</span>
            </h2>
          </div>

          <div className="mission-cards">

            <MissionCard
              number="01"
              title="What3Words"
              icon="///"
              description="Solve the clues. Combine the answers. Discover a location hidden in three little words."
            />

            <MissionCard
              number="02"
              title="Coordinates"
              icon="◎"
              description="Crack the puzzles and turn the answers into a set of coordinates."
            />

            <MissionCard
              number="03"
              title="First Letters"
              icon="A→Z"
              description="Solve every answer. Take the first letter. Let the hidden location reveal itself."
            />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">

        <div className="home-cta__background" />

        <div className="home-cta__content">
          <p>YOUR MISSION AWAITS</p>

          <h2>
            READY TO FIND
            <span>WHAT ANAS LOST?</span>
          </h2>

          <Link href="/race-day">
            Enter Race Day
            <span>→</span>
          </Link>
        </div>

      </section>

    </main>
  );
}


/* -------------------------------------------------------------
   Adventure Map
------------------------------------------------------------- */

function AdventureMap() {
  return (
    <div className="adventure-map">

      <div className="adventure-map__card">

        <div className="adventure-map__dots" />

        <div className="globe">

          <div className="globe__longitude" />
          <div className="globe__latitude" />
          <div className="globe__equator" />

          <div className="continent continent--one" />
          <div className="continent continent--two" />
          <div className="continent continent--three" />
          <div className="continent continent--four" />

        </div>

        <svg
          className="route"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M115 415 C175 340, 205 405, 275 335 S375 220, 470 265"
          />

          <path
            d="M470 265 C500 285, 490 340, 425 390"
          />
        </svg>

        <MapPin position="one" label="01" />
        <MapPin position="two" label="02" />
        <MapPin position="three" label="03" />
        <MapPin position="four" label="?" active />

        <div className="shuttlecock">
             <Image
              src={logo}
              alt="Anas at Net Loss"
              fill
              sizes="44px"
              priority
            />
        </div>

        <div className="coordinates">
          <span>LAST KNOWN SIGNAL</span>
          <strong>51.5074° N · 0.1278° W</strong>
        </div>

        <div className="location-status">
          LOCATION UNKNOWN
        </div>

      </div>

      <div className="mission-status">
        <span>MISSION STATUS</span>

        <strong>
          <i />
          Hunt in progress
        </strong>
      </div>

    </div>
  );
}


function MapPin({
  position,
  label,
  active = false,
}: {
  position: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`map-pin map-pin--${position} ${
        active ? "map-pin--active" : ""
      }`}
    >
      {label}
    </div>
  );
}


function MissionCard({
  number,
  title,
  icon,
  description,
}: {
  number: string;
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <article className="mission-card">

      <div className="mission-card__top">
        <span>{number}</span>
        <strong>{icon}</strong>
      </div>

      <div className="mission-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="mission-card__shape" />

    </article>
  );
}