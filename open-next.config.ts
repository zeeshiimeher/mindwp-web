// OpenNext → Cloudflare Workers adapter config (free tier).
// Runs in the OpenNext build context, not the Next app — excluded from the app
// tsconfig. Requires: pnpm add -D @opennextjs/cloudflare wrangler
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
