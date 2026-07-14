"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Icon } from "@/components/ui/Icon";

const NEARBY_POINTS = [
  { title: "Find", body: "You show up for nearby searches." },
  { title: "Verify", body: "Your details and service area line up." },
];

const CHECKS = ["Details match the site", "Service area listed", "Recent reviews"];

export function FoundNearby() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 6), 1400);
    return () => clearInterval(id);
  }, []);

  const searchActive = phase === 0;
  const listingActive = phase >= 1;

  return (
    <section id="found-nearby" className="found-nearby section">
      <div className="container found-nearby__grid">
        <div>
          <p className="eyebrow">Local SEO authority</p>
          <h2>Found nearby — trusted before they call.</h2>
          <p className="found-nearby__lede">
            Nearby customers find you, then check whether to trust you before they ever pick up
            the phone. It holds when the listing, reviews, service-area details, and website all
            line up.
          </p>
          <ul className="found-nearby__points">
            {NEARBY_POINTS.map((point) => (
              <li className="found-nearby__point" key={point.title}>
                <span className="found-nearby__point-dot" />
                <span>
                  <p className="found-nearby__point-title">{point.title}</p>
                  <p className="found-nearby__point-body">{point.body}</p>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/services/local-seo-authority" className="found-nearby__more-link">
            See how Local SEO Authority works
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>

        <div className="found-nearby__panel on-dark">
          <div className={`found-nearby__search${searchActive ? " found-nearby__search--active" : ""}`}>
            <span className="found-nearby__search-icon">
              <Icon name="search" size={15} />
            </span>
            <span className="found-nearby__search-text">emergency bathroom repair near me</span>
            {searchActive && <span className="found-nearby__caret" aria-hidden="true" />}
          </div>

          <div className="found-nearby__map">
            <span className="found-nearby__pin-pulse" aria-hidden="true" />
            <span className="found-nearby__pin">
              <Icon name="map-pin" size={15} />
            </span>
            <span className="eyebrow found-nearby__map-label">Your service area</span>
          </div>

          <div className="found-nearby__listings">
            <div
              className={`found-nearby__listing${listingActive ? " found-nearby__listing--active" : ""}`}
            >
              <div>
                <p className="found-nearby__listing-name">Hartley &amp; Sons</p>
                <p className="found-nearby__listing-meta">
                  <Icon name="star" size={12} />
                  4.9 (132) &middot; 2.1 km &middot; Open until 5pm
                </p>
              </div>
              <span className="found-nearby__listing-badge">Your listing</span>
            </div>
            <div className="found-nearby__listing found-nearby__listing--dim">
              <p className="found-nearby__listing-meta">A1 Bathrooms &amp; Plumbing</p>
              <p className="found-nearby__listing-meta">4.2 (38)</p>
            </div>
            <div className="found-nearby__listing found-nearby__listing--dim">
              <p className="found-nearby__listing-meta">CityFit Interiors</p>
              <p className="found-nearby__listing-meta">3.9 (17)</p>
            </div>
          </div>

          <div className="found-nearby__checks">
            {CHECKS.map((label, index) => {
              const done = phase >= 2 + index;
              return (
                <span
                  className={`found-nearby__check${done ? " found-nearby__check--done" : ""}`}
                  key={label}
                >
                  <Icon name="circle-check" size={12} />
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
