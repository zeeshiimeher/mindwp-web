import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { buildContactHref } from "@/lib/contact/contactHref";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";
import { buildSEO } from "@/lib/seo/metadata";

import styles from "./home.module.css";

export const metadata = buildSEO({
  title: "MindWP - Work Comes In. Too Much Slips Away.",
  description:
    "Smart websites with the handling path built in for established service businesses and specialist clinics.",
  path: "/",
});

const reviewHref = buildContactHref({ source: "home", system: "smart-website-systems" });

const heroMoments = [
  { label: "Local search", detail: "Found, checked, then compared", state: "waiting" },
  { label: "Service page visit", detail: "Read the page, no clear next step", state: "waiting" },
  { label: "Form enquiry", detail: "Arrived while the team was busy", state: "missed" },
  { label: "Missed call", detail: "No callback path yet", state: "missed" },
  { label: "Consultation request", detail: "Needs a named owner", state: "waiting" },
  { label: "Review request", detail: "Good work should return as proof", state: "proof" },
];

const leakCards = [
  {
    title: "The missed call",
    text: "Someone reaches out while the team is occupied. Nothing records the next step.",
    tone: "dark",
  },
  {
    title: "The waiting form",
    text: "A serious enquiry lands in an inbox, then waits for whoever checks it first.",
    tone: "mint",
  },
  {
    title: "The quiet quote",
    text: "The quote is prepared by the business, but follow-up depends on memory.",
    tone: "paper",
  },
  {
    title: "The clinic request",
    text: "A patient is ready to ask, but the treatment, proof, and next step do not line up.",
    tone: "paper",
  },
  {
    title: "The proof gap",
    text: "Good work finishes. Reviews and visible evidence do not make it back to the page.",
    tone: "mint",
  },
  {
    title: "The local trust gap",
    text: "People can find the business, but service area, pages, and proof do not agree.",
    tone: "dark",
  },
];

const handoffSteps = [
  "Enquiry lands",
  "Right person knows",
  "Next step is visible",
  "Follow-up stays alive",
  "Proof returns",
];

const systems = [
  {
    number: "02",
    verb: "Find",
    name: "Local SEO Authority",
    text: "Nearby customers can find and verify the business.",
  },
  {
    number: "03",
    verb: "Catch",
    name: "Lead Response & Handling",
    text: "Calls, forms, and messages move into a first-response path.",
  },
  {
    number: "04",
    verb: "Carry",
    name: "Follow-Up & CRM",
    text: "Every enquiry has an owner, status, and next step.",
  },
  {
    number: "05",
    verb: "Prove",
    name: "Reputation & Review",
    text: "Good work becomes visible proof at the right moment.",
  },
];

const localChecks = [
  "Service pages match the work people search for.",
  "Service-area signals sit near the decision.",
  "Proof appears before the call or request.",
];

const proofItems = [
  {
    label: "Healthcare practice proof",
    title: "Treatment and service clarity",
    src: "/work/work-healthcare-service-page.png",
    width: 1441,
    height: 5596,
  },
  {
    label: "Home services proof",
    title: "Considered-work enquiry path",
    src: "/work/work-home-services-site.png",
    width: 2560,
    height: 5282,
  },
  {
    label: "Specialist service proof",
    title: "Operational trust and proof placement",
    src: "/work/work-property-management-site.png",
    width: 2560,
    height: 4379,
  },
];

const fitGood = [
  "Established business or specialist clinic with real activity.",
  "Meaningful value per job, case, or patient.",
  "Leakage around trust, response, follow-up, or proof.",
  "Wants the website and handling path to work together.",
];

const fitNot = [
  "Brand-new business with no traction.",
  "Cheapest-website shopper.",
  "Brochure-only redesign buyer.",
  "Guaranteed ranking or guaranteed lead buyer.",
];

const faqs = [
  {
    question: "What is a website review?",
    answer:
      "A practical review of the current website and the path around it: clarity, trust, enquiry landing, response, follow-up, proof, and what should be fixed first.",
  },
  {
    question: "Is the website ours?",
    answer:
      "Yes. The website, domain, content, enquiries, work, and data stay connected to the business. The connected handling is a service MindWP sets up and runs for you.",
  },
  {
    question: "Do you run ads?",
    answer:
      "No. MindWP makes sure the attention the business already earns or buys has a clear website-and-handling path once it reaches the business.",
  },
  {
    question: "Do you guarantee leads or rankings?",
    answer:
      "No. We do not sell guarantees. We build the website and connected handling path so trust, enquiries, response, follow-up, and proof are no longer left to chance.",
  },
];

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return <p className={`${styles.eyebrow} ${dark ? styles.eyebrowDark : ""}`}>{children}</p>;
}

function BrowserFrame({
  item,
  featured = false,
}: {
  item: (typeof proofItems)[number];
  featured?: boolean;
}) {
  return (
    <figure className={`${styles.browserFrame} ${featured ? styles.browserFrameFeatured : ""}`}>
      <div className={styles.browserBar} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.browserViewport}>
        <Image
          src={item.src}
          alt={`${item.title} screenshot`}
          width={item.width}
          height={item.height}
          sizes={featured ? "(min-width: 900px) 62vw, 94vw" : "(min-width: 900px) 24vw, 88vw"}
          className={styles.proofImage}
          priority={featured}
        />
      </div>
      <figcaption className={styles.proofCaption}>
        <span>{item.label}</span>
        {item.title}
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={`${styles.section} ${styles.heroSection} on-navy`} aria-labelledby="home-hero">
        <div className={styles.darkGrid} aria-hidden="true" />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Eyebrow dark>Service businesses and specialist clinics</Eyebrow>
            <h1 id="home-hero" className={styles.heroTitle}>
              Work comes in. <span>Too much slips away.</span>
            </h1>
            <p className={styles.heroLead}>
              People find you, call, fill in forms, request quotes, ask for consultations, and
              check proof. MindWP builds the website and handling path so enquiries land somewhere
              useful and keep moving.
            </p>
            <div className={styles.heroActions}>
              <Button href={reviewHref} tone="dark" size="lg">
                {PRIMARY_CTA_LABEL}
              </Button>
              <Button href="#work-proof" tone="dark" variant="text">
                {SECONDARY_CTA_LABEL}
              </Button>
            </div>
            <div className={styles.heroTags} aria-label="What the homepage covers">
              <span>Visibility</span>
              <span>Enquiries</span>
              <span>Follow-up</span>
              <span>Proof</span>
            </div>
          </div>

          <div className={styles.heroArtifact} aria-label="Working-day enquiry stack">
            <div className={styles.artifactHeader}>
              <span>Today&apos;s working day</span>
              <strong>06 moments</strong>
            </div>
            <div className={styles.momentStack}>
              {heroMoments.map((moment, index) => (
                <div
                  key={moment.label}
                  className={`${styles.momentRow} ${styles[`moment${index + 1}`]}`}
                >
                  <span className={styles.momentNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{moment.label}</strong>
                    <span>{moment.detail}</span>
                  </div>
                  <em data-state={moment.state}>{moment.state}</em>
                </div>
              ))}
            </div>
            <div className={styles.artifactFooter}>
              <span>2 missed</span>
              <span>3 waiting</span>
              <strong>Where MindWP picks up</strong>
            </div>
          </div>
        </div>
        <div className={`${styles.container} ${styles.heroTimeline}`} aria-label="Typical enquiry path">
          {["Found", "Checked", "Asked", "Landed", "Owned", "Proved"].map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.evidenceSection}`} aria-labelledby="work-slips">
        <div className={`${styles.container} ${styles.splitIntro}`}>
          <div>
            <Eyebrow>Where work slips</Eyebrow>
            <h2 id="work-slips">The work is already there. These are the leaks.</h2>
          </div>
          <p>
            The business is not quiet. Calls, searches, forms, quote requests, consultations, and
            completed work are already happening. The weak point is everything between them.
          </p>
        </div>
        <div className={`${styles.container} ${styles.evidenceBoard}`}>
          {leakCards.map((card, index) => (
            <article
              key={card.title}
              className={`${styles.leakCard} ${styles[`leak${index + 1}`]} ${styles[card.tone]}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.mechanismSection} on-navy`} aria-labelledby="mechanism">
        <div className={styles.darkGrid} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.mechanismIntro}>
            <Eyebrow dark>One connected mechanism</Eyebrow>
            <h2 id="mechanism">
              The contact form is not the finish line. <span>The handling starts there.</span>
            </h2>
          </div>

          <div className={styles.contrastPanel}>
            <article className={styles.chancePanel}>
              <span>Left to chance</span>
              <h3>A request lands, then waits.</h3>
              <div className={styles.brokenLine} aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <p>It goes quiet, then the buyer decides somewhere else.</p>
            </article>
            <article className={styles.handledPanel}>
              <span>With the smart website</span>
              <h3>The same request is owned and followed up.</h3>
              <div className={styles.liveLine} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <p>The next step is visible before memory becomes the system.</p>
            </article>
          </div>

          <div className={styles.handoffGrid}>
            <div>
              <Eyebrow dark>After contact</Eyebrow>
              <h2>
                The enquiry arrives. <span>Then the path has to carry it.</span>
              </h2>
              <p>
                The website has done its first job. What happens next decides whether the enquiry
                becomes work or disappears.
              </p>
            </div>
            <ol className={styles.handoffList}>
              {handoffSteps.map((step, index) => (
                <li key={step} className={styles[`handoff${index + 1}`]}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.systemsBlock} aria-labelledby="systems-title">
            <div className={styles.systemsIntro}>
              <Eyebrow dark>The five systems</Eyebrow>
              <h2 id="systems-title">
                Five systems. <span>One connected site.</span>
              </h2>
              <p>
                Smart Website Systems is the front door. The other four protect the path around it.
              </p>
            </div>
            <article className={styles.flagshipCard}>
              <div>
                <span>Flagship</span>
                <h3>Smart Website Systems</h3>
                <p>
                  The website itself: clarity, trust, enquiry capture, and the connection into
                  handling.
                </p>
              </div>
              <strong>01</strong>
            </article>
            <div className={styles.systemCards}>
              {systems.map((system) => (
                <article key={system.name}>
                  <span>{system.number}</span>
                  <strong>{system.verb}</strong>
                  <h3>{system.name}</h3>
                  <p>{system.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.marketSection}`} aria-labelledby="market">
        <div className={`${styles.container} ${styles.localTrust}`}>
          <div>
            <Eyebrow>Local trust</Eyebrow>
            <h2 id="market">Found nearby. Trusted before they call.</h2>
            <p>
              Visibility only helps when people can verify the business, understand the service,
              and see a clear next step. Local trust starts before the call.
            </p>
            <ul className={styles.checkList}>
              {localChecks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </div>
          <div className={styles.mapArtifact} aria-label="Local trust map artifact">
            <div className={styles.mapGrid} />
            <span className={styles.mapPinOne}>Service page</span>
            <span className={styles.mapPinTwo}>Area signal</span>
            <span className={styles.mapPinThree}>Proof nearby</span>
            <div className={styles.radiusOne} />
            <div className={styles.radiusTwo} />
            <strong>Trust signals line up before the request</strong>
          </div>
        </div>

        <div className={`${styles.container} ${styles.clinicScenario}`}>
          <div className={styles.scenarioHeader}>
            <div>
              <Eyebrow>Clinic first</Eyebrow>
              <h2>What this looks like for a specialist clinic.</h2>
            </div>
            <p>
              A clinic page has to help a patient understand the treatment, trust the provider, and
              choose a safe next step into a consultation path.
            </p>
          </div>
          <div className={styles.scenarioCard}>
            <article className={styles.scenarioSituation}>
              <span>Situation</span>
              <h3>A treatment page is not matching the patient&apos;s decision.</h3>
              <p>
                The page speaks too generally. Proof is separated from the treatment context. The
                request feels like a generic form.
              </p>
              <ul>
                <li>Treatment grouped under a broad services page.</li>
                <li>Local trust not confirmed near the decision point.</li>
                <li>Reviews separated from the treatment context.</li>
              </ul>
            </article>
            <article className={styles.scenarioCorrection}>
              <span>What the page brings together</span>
              <h3>The treatment, the proof, and the next step agree.</h3>
              <ul>
                <li>Treatment page names the work clearly.</li>
                <li>Proof sits near the choice.</li>
                <li>The enquiry path is specific enough to take.</li>
              </ul>
            </article>
            <div className={styles.scenarioHandoff}>
              {["Request lands", "Someone owns it", "Proof returns"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="work-proof"
        className={`${styles.section} ${styles.proofSection}`}
        aria-labelledby="proof-title"
      >
        <div className={`${styles.container} ${styles.proofIntro}`}>
          <div>
            <Eyebrow>The work</Eyebrow>
            <h2 id="proof-title">Website work you can inspect.</h2>
          </div>
          <p>
            Real pages carry more credibility than another abstract diagram. Start with clinic
            proof, then compare serious service-business work.
          </p>
        </div>
        <div className={`${styles.container} ${styles.proofLayout}`}>
          <BrowserFrame item={proofItems[0]} featured />
          <div className={styles.proofStack}>
            {proofItems.slice(1).map((item) => (
              <BrowserFrame key={item.src} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.payoffSection}`} aria-labelledby="payoff">
        <div className={`${styles.container} ${styles.payoffGrid}`}>
          <div>
            <Eyebrow>What compounds over time</Eyebrow>
            <h2 id="payoff">It is not a launch. It compounds.</h2>
            <p>
              One good working day, repeated: the enquiry lands, the next step stays visible, and
              completed work becomes proof.
            </p>
          </div>
          <div className={styles.compoundArtifact} aria-label="Compounding handling artifact">
            <span className={styles.paperOne}>Enquiry lands</span>
            <span className={styles.paperTwo}>Next step visible</span>
            <span className={styles.paperThree}>Review asked</span>
            <div className={styles.calendarCard}>
              <strong>Weeks become evidence</strong>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.credibilitySection}`} aria-labelledby="builders">
        <div className={`${styles.container} ${styles.builderGrid}`}>
          <article className={styles.builderCopy}>
            <Eyebrow>Built by builders</Eyebrow>
            <h2 id="builders">Built by the people who actually build it.</h2>
            <p>
              MindWP is builder-led, with service-business website craft going back to 2015 and a
              small senior team.
            </p>
            <div className={styles.timeline}>
              <span>2015</span>
              <i />
              <span>Senior</span>
              <i />
              <span>Hands-on</span>
            </div>
          </article>
          <div className={styles.fitPanels}>
            <article>
              <span>Good fit</span>
              <h3>Established, active, and losing work between moments.</h3>
              <ul>
                {fitGood.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>Not a fit</span>
              <h3>Looking for something MindWP does not build.</h3>
              <ul>
                {fitNot.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className={`${styles.container} ${styles.reviewPanel}`}>
          <div className={styles.reviewCopy}>
            <Eyebrow dark>The entry point</Eyebrow>
            <h2>We start with a review. Not a pitch.</h2>
            <p>
              We look at the current site and the path around it. You see what is working, where
              work is slipping, and which gaps are worth fixing first.
            </p>
            <Button href={reviewHref} tone="dark">
              {PRIMARY_CTA_LABEL}
            </Button>
          </div>
          <div className={styles.reviewArtifact}>
            <span>Website Review</span>
            <h3>Where work slips</h3>
            <div>
              {["Clarity", "Trust", "Enquiry path", "Response", "Follow-up", "Proof"].map(
                (item) => (
                  <p key={item}>{item}</p>
                ),
              )}
            </div>
            <strong>First gaps worth fixing -&gt;</strong>
          </div>
        </div>

        <div className={`${styles.container} ${styles.faqBlock}`}>
          <Eyebrow>FAQ</Eyebrow>
          <h2>Questions, answered plainly.</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.finalCta} on-navy`} aria-labelledby="final-cta">
        <div className={styles.darkGrid} aria-hidden="true" />
        <div className={styles.container}>
          <Eyebrow dark>Start with the review</Eyebrow>
          <h2 id="final-cta">If the website is not carrying the work, find out where it slips.</h2>
          <p>
            A calm look at the website and the handling path around it. One clear next step.
          </p>
          <Button href={reviewHref} tone="dark" size="lg">
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>
      </section>
    </div>
  );
}
