import clsx from 'clsx';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const focusAreas = [
  {
    icon: '⚡',
    title: 'Electrical Systems',
    description:
      'Explore circuits, wiring practices, protection devices, and the safe distribution of electrical power.',
  },
  {
    icon: '🤖',
    title: 'Automation and Controls',
    description:
      'Learn how programmable logic controllers, sensors, and motor controls support modern industry.',
  },
  {
    icon: '🔧',
    title: 'Testing and Troubleshooting',
    description:
      'Apply measurement, diagnostic, and problem-solving skills to maintain reliable technical systems.',
  },
];

function FocusArea({icon, title, description}) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.featureIcon} aria-hidden="true">{icon}</div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <span className={styles.eyebrow}>Electrical Engineering Technology</span>
        <Heading as="h1" className={styles.heroTitle}>
          Practical knowledge for the systems that power modern life
        </Heading>
        <p className={styles.heroSubtitle}>
          Discover the applied skills behind electrical power, industrial automation,
          electronics, instrumentation, testing, maintenance, and technical safety.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/about">
            Explore the field
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/contact">
            View resources
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="An educational microsite introducing electrical engineering technology, applied technical skills, and professional resources.">
      <HomepageHeader />
      <main>
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <span className={styles.sectionLabel}>Welcome to the EET Hub</span>
                <Heading as="h2">Where engineering principles meet hands-on application</Heading>
                <p>
                  Electrical engineering technologists help turn designs and technical plans into
                  dependable working systems. They install, test, troubleshoot, maintain, and improve
                  electrical and electronic equipment across transportation, manufacturing, utilities,
                  construction, telecommunications, and building systems.
                </p>
                <p>
                  This microsite is designed for students, aspiring technologists, and curious readers
                  who want a clear introduction to the practical side of electrical engineering.
                </p>
              </div>
              <div className={styles.circuitPanel} role="img" aria-label="Decorative circuit diagram">
                <div className={styles.circuitLine}></div>
                <div className={styles.circuitNode}>V</div>
                <div className={styles.circuitNode}>I</div>
                <div className={styles.circuitNode}>R</div>
                <div className={styles.formula}>V = I × R</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.focusSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Core focus areas</span>
              <Heading as="h2">Skills used in real technical environments</Heading>
            </div>
            <div className={styles.featureGrid}>
              {focusAreas.map((area) => <FocusArea key={area.title} {...area} />)}
            </div>
          </div>
        </section>

        <section className={styles.safetySection}>
          <div className="container">
            <div className={styles.safetyCard}>
              <div>
                <span className={styles.sectionLabel}>Safety first</span>
                <Heading as="h2">Technical knowledge must be applied responsibly</Heading>
                <p>
                  Electrical work can expose people to shock, arc-flash, fire, and equipment hazards.
                  This site is educational and does not replace formal training, workplace procedures,
                  applicable codes, or supervision by qualified professionals.
                </p>
              </div>
              <Link className="button button--secondary button--lg" to="/docs/contact">
                Find trusted resources
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
