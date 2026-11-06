# Editorial portfolio redesign

The page now leads with Rayan’s name and the real Relay Dispatch Board, followed by selected work before the biography. Oversized display type, open layouts and a quiet blue field replace the playing-card presentation.

## Preserved

- All 24 existing element IDs and all navigation destinations.
- Personal details, education, experience claims, project content, résumé and external URLs from the existing source.
- Native project dialogs and screenshot enlargement.
- The Doto wordmark and original blue.
- Existing Tableau and internship placeholders, clearly identified as incomplete.

## Changed

- Radio Canada Big is hosted locally with its OFL license.
- Shared colors, fonts and spacing live in `tokens.css`.
- Project cards show descriptions; the dispatch project has a real screenshot and more space.
- Experience reads as rows rather than repeated boxes.
- Dialogs use their native geometry; no animated width, height, top or left.
- Main content, contact and résumé links are readable without JavaScript.
- Decorative suits, silhouette, icons and all-caps labels were removed. Section headings now name their content.

`site-content.js` remains the content source for the enhanced page. If personal information is edited, also refresh the static HTML fallback so visitors with scripting disabled see the same facts.

## Verification

JavaScript syntax passed. Static comparison found all 24 original IDs and all original static href destinations intact. Existing local asset paths were checked against the repository tree. Main CSS uses shared color and font tokens, instant focus outlines and a reduced-motion rule.

An independent static code review found no blocking defect. Its suggestions to scope hover feedback to interactive project cards and preload the hero's display font were applied.

**Browser checks and the final Hallmark sweep remain blocked because the local execution environment disconnected.** This change is a draft and has not been merged or deployed. No rendered fold, contrast, cropping or interaction pass is claimed.

Before merge, serve the branch and inspect 320, 390, 1280, 1440 and 1920px widths. Exercise all three case studies, screenshot enlargement, close buttons, Escape, keyboard focus return, résumé download and contact links; repeat with reduced motion and JavaScript disabled. Then run Hallmark’s `sloplint.mjs . --genre editorial --render --kept` with its before record available, or capture a fresh baseline from the base commit first.

## Material still needed

The existing dispatch overview, board and assignment screenshots are retained. Real Tableau and internship screenshots and completed case-study details would provide the strongest next improvement; no new outcomes or results were invented. Existing work-experience percentages are carried over as source claims.
