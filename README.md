# JMBNR guild website

A standalone GitHub Pages website using Play, gold and black, and existing **public** guild imagery in Supabase Storage.

## Site path

- `index.html` — guild introduction and three clear choices
- `academy.html` — training pathways and a proposed Mining course
- `operations.html` — public operation formats and upcoming events
- `join.html` — first-step introduction composer; copies text, does not submit an application
- `login.html` — sign in with an existing JMBN username/password
- `member.html` — authenticated member home, reading only the signed-in user's profile and certifications
- `pending.html` — signed-in guest/pending account message

The Member page requires a valid existing Supabase session and a non-Guest profile. It uses only SELECT requests. Database changes, auth settings, storage, and policies were **not changed** for this site. The `command.html` file is an unlinked interface concept with no admin functions.

## Operations publishing

`events.json` is a public static list, initially empty. Add confirmed events with an ISO timestamp in `start`, `title`, optional `description`, and optional HTTPS `url`. `events.js` displays future events in Singapore time on Operations and Member.

## Auth note

Existing username/password guild accounts can sign in to JMBNR. Discord OAuth requires the JMBNR callback URL to be allowlisted in Supabase Auth, so it is not offered until that setup is approved. The project uses the public anon key and existing RLS policies. It does not include a service-role key. Actual access must be enforced by the existing database policies as well as the browser UI.
