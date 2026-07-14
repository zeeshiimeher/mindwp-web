import { Icon, type IconName } from "@/components/ui/Icon";

const SYSTEM_CARDS: { icon: IconName; tag: string; title: string; body: string }[] = [
  {
    icon: "map-pin",
    tag: "Found",
    title: "Local SEO Authority",
    body: "Nearby buyers find and verify the business.",
  },
  {
    icon: "phone",
    tag: "Answered",
    title: "Lead Response & Handling",
    body: "Calls, forms, and bookings have somewhere to land.",
  },
  {
    icon: "folder",
    tag: "Owned",
    title: "Follow-Up & CRM",
    body: "The next step stays visible after the first contact.",
  },
  {
    icon: "star",
    tag: "Proven",
    title: "Reputation & Review",
    body: "Good work returns as trust for the next buyer.",
  },
];

export function FiveSystems() {
  return (
    <section id="five-systems" className="five-systems section on-dark">
      <div className="container container--content five-systems__intro">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          The five systems
          <span className="eyebrow__tick" />
        </p>
        <h2 className="five-systems__heading">Five systems. One connected site.</h2>
        <p>
          The website is the flagship. The other four are the handling around it — found,
          answered, owned, and proven. Built to work as one, not as five separate services.
        </p>
      </div>

      <div className="container">
        <div className="five-systems__flagship">
          <div>
            <p className="label-caps">Flagship system</p>
            <h3 className="five-systems__flagship-title">Smart Website Systems</h3>
            <p className="five-systems__flagship-body">
              The public site carries clarity, trust, and enquiry capture. It gives the other
              systems one visible place to connect.
            </p>
          </div>
          <span className="five-systems__flagship-icon">
            <Icon name="globe" size={20} />
          </span>
        </div>

        <div className="five-systems__grid">
          {SYSTEM_CARDS.map((card) => (
            <div className="five-systems__card" key={card.title}>
              <span className="five-systems__card-icon">
                <Icon name={card.icon} size={15} />
              </span>
              <p className="label-caps">{card.tag}</p>
              <p className="five-systems__card-title">{card.title}</p>
              <p className="five-systems__card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
