# JMBNR guild website

A standalone GitHub Pages website using Play, gold and black, and existing **public** guild imagery in Supabase Storage.

## Site path

- `index.html` — guild introduction and three clear choices
- `activities.html` — guild activities including mining, flight, ground play, and exploration
- `academy.html` — redirect for old Academy links
- `careers.html` — flexible career paths and the team growth philosophy
- `operations.html` — redirect for old Operations links
- `join.html` — team expectations and a direct link to the official guild Discord invite
- `login.html` — sign in with an existing JMBN username/password
- `member.html` — authenticated member home, reading only the signed-in user's profile and certifications
- `pending.html` — signed-in guest/pending account message

The Member page requires a valid existing Supabase session and a non-Guest profile. It uses only SELECT requests. Database changes, auth settings, storage, and policies were **not changed** for this site. The `command.html` file is an unlinked interface concept with no admin functions.

## Operations publishing

`events.json` is an unused public static list, initially empty. Add confirmed events with an ISO timestamp in `start`, `title`, optional `description`, and optional HTTPS `url`. `events.js` displays future events in Singapore time if operations are brought back later.

## Auth note

Existing username/password guild accounts can sign in to JMBNR. Discord OAuth requires the JMBNR callback URL to be allowlisted in Supabase Auth, so it is not offered until that setup is approved. The project uses the public anon key and existing RLS policies. It does not include a service-role key. Actual access must be enforced by the existing database policies as well as the browser UI.

## Shared navigation

Every site page loads `header.html` through `header.js` and styles it with `header.css`. Edit the links once in `header.html`. The old `academy.html` route only redirects to Activities.
