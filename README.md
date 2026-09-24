# JMBNR guild website

A standalone Star Citizen inspired guild website for GitHub Pages. It uses the Play font, a gold and black palette, and existing public guild imagery from Supabase Storage.

## Pages

- `index.html`: guild landing page and role selector
- `academy.html`: training tracks and proposed Mining course
- `operations.html`: mission formats and empty operations board
- `member.html`: public preview of a future signed-in member dashboard
- `command.html`: public preview of a future admin workspace
- `site.css`: shared styling for the inner pages

The member and command views are **interface previews**. They display no private data and provide no administrative actions. The site does not connect to the Supabase database or change its schema, policies, auth, or storage. The images are referenced from existing public storage objects.

## Next setup

A verified recruitment contact or Discord invite can replace the placeholder text in `index.html`. A real member/admin system requires authentication, role checks enforced by RLS, and data models approved for this separate website.

## Community flow

- `join.html`: browser-only introduction composer. It copies a message for a recruiter; it does not submit an application.
- `events.json`: public operations board data. Empty until a real event is confirmed; each event should have an ISO `start`, `title`, optional `description`, and optional HTTPS `url`.
- `events.js`: renders upcoming events in Operations and Member, in Singapore time.
- Member's selected next path is saved only in that browser's localStorage.
