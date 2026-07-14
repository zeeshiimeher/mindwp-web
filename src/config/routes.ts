export interface LiveRoute {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}

/** Only built, approved public pages belong here. */
export const LIVE_ROUTES: readonly LiveRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services/local-seo-authority", changeFrequency: "monthly", priority: 0.8 },
];
