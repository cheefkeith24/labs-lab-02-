# Problem Tracker

A small browser app for logging problems, setting a priority (low, medium, high), and moving each one through open, in progress, and solved.

## Stack
- Plain HTML, CSS, and JavaScript. No framework, no build step, no npm packages.
- Files: `index.html`, `style.css`, `app.js`.
- Data is saved in the browser with `localStorage` under the key `problems`.

## Rules
- Keep it simple. Do not add libraries or a build tool unless I ask.
- Make one small change at a time, then tell me how to check it in the browser.
- Always wrap `localStorage` reads and writes in try/catch.
- Use `textContent`, never `innerHTML`, for anything the user typed.
- Keep the app working when opened by double-clicking `index.html`.
- Use sentence case for button and label text (for example "Add problem", "Delete").
- Do not delete or rename files without asking first.
- Never read or edit `.env` files, and never run `git push --force`. These are blocked in `.claude/settings.json`.

## Check before saying you are done
1. Open `index.html` and add a problem.
2. Change its status and refresh the page. It should still be there.
3. Delete it. The "No problems here." message should show.
