 Plan: add a "due date" to the problem tracker

##Goal
Let each problem have an optional due date, and show overdue problems in red.

## Steps
1. In `index.html`, add a date input next to the priority dropdown.
2. In `app.js`, store `due` (a `YYYY-MM-DD` string or empty) on each new problem.
3. In `renderItem`, show the due date and add an "overdue" class when it is before today and the problem is not solved.
4. In `style.css`, color the overdue text red.
5. Old saved problems have no `due`. Make sure they still render.

## Files that change
- `index.html`
- `app.js`
- `style.css`

## How to check
- Add a problem with yesterday's date. It shows as overdue.
- Mark it solved. It stops showing as overdue.
- Refresh. Everything is still there.
- Problems saved before this change still load.

## Out of scope
- Sorting by due date
- Reminders or notifications
