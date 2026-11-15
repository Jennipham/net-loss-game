import Link from "next/link";
import Image from "next/image";
import "./page.css";
import logo from "../assets/no-birdies-logo.png";

export default function HomePage() {
  return (
    <main className="home">

      <section className="hero">

        <div className="hero__background" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--yellow" />

        <div className="hero__container">

          <div className="hero__content">

            <div className="hero__eyebrow">
              <span />
              RACE TO COMPLETE THE PUZZLES
            </div>

            <h1 className="hero__title">
              CAN YOU
              <span>FIND ANAS'</span>
              <strong>BIRDIES?</strong>
            </h1>

            <p className="hero__description">
              <span>
                Anas has lost his badminton shuttlecocks!
              </span>

              <strong>
                Race to complete the puzzles to locate them.
              </strong>
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
                <strong>🌍</strong>
                <span>Around The world</span>
              </div>

              <div>
                <strong> 🏸</strong>
                <span>10 Shuttles</span>
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
              <span>THREE CHALLENGES</span>
            </h2>
          </div>

          <div className="mission-cards">

            <MissionCard
              number="01"
              title="Three Little Words"
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

      <section className="home-cta">

        <div className="home-cta__background" />

        <div className="home-cta__content">
          <h2>
            READY TO FIND
            <span>ANAS' BIRDIES?</span>
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

function AdventureMap() {
  return (
    <div className="adventure-map">

      <div className="adventure-map__card">

        <Image
          src={logo}
          alt="Anas at Net Loss"
          width={1000}
          height={1000}
          priority
          className="globe"
        />

        <div className="coordinates">
          <span>LAST KNOWN LOCATION</span>
          <strong>51.41966° N, 0.19452° W</strong>
        </div>

      </div>

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