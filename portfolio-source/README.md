# Syed Rayan Ali — Portfolio

A responsive, single-page portfolio built with HTML, CSS, and plain JavaScript. No installation, framework, or build step is needed. Fonts and images are served locally.

## Edit your content

Open **`dist/site-content.js`**. This is the only file you need for personal information, skills, projects, experience, resume location, and contact links.

| What you want to change | Where in `site-content.js` |
| --- | --- |
| Name, introduction, school, bio | The fields at the top |
| Degree titles and expected graduation dates | Each entry in `education` |
| Skills and categories | `skills` and `skillsNote` |
| Project copy, tools, outcomes, live URLs | `projects` |
| Screenshot filenames, alt text, captions | Each project's `screenshots` array |
| Roles, organizations, dates, bullets | `experience` |
| Email, LinkedIn, GitHub | `links` at the bottom |
| Resume path, link label, and note | `resume` |

Strings use single quotes. Escape an apostrophe with a backslash, or use double quotes around a string that contains one. Save the file and refresh the page.

## Replace project screenshots

1. Place your images in **`dist/assets/projects/`**. PNG, JPG, WebP, and SVG work.
2. In `site-content.js`, change the relevant `src`, for example: `src: 'assets/projects/my-dispatch-screenshot.png'`.
3. Replace the `alt` description and `caption`. Remove the word "placeholder" when you add a real screenshot.
4. Add or remove screenshot objects to change the gallery. Images around 1600 × 1000 pixels work well; enlarged images preserve their aspect ratio.

The six supplied SVGs are explicitly labeled illustrations, not actual project screenshots or data.

## Replace the resume

**`dist/assets/resume.pdf`** contains your supplied résumé. To update it later, overwrite this file with your latest PDF. Both the hero button and resume section will use it automatically. Edit `resume.label` and `resume.note` in `site-content.js` if needed. Use `resume.file` if you choose a different filename.

## Add a project

Copy an existing object in the `projects` array, give it a unique `id` and `number`, and edit the content. The grid, keyboard controls, card dialog, and screenshot gallery are generated automatically. The `id` values `dispatch`, `tableau`, and `intern` have specific dot illustrations; other IDs use the tracker illustration. Every card has a text label as well as its visual design.

## Contact links

Leave a value empty while previewing the design. Empty links show a clear placeholder message. Add an email address without `mailto:`. Use full `https://` URLs for LinkedIn, GitHub, and project links.

Your current email, LinkedIn URL, and GitHub repository URL come from the supplied résumé. The GitHub link opens the `PProjects` repository. The site's email link uses the visible address in the résumé, correcting its stale embedded email hyperlink.

## Preview and publish

Open `dist/index.html` in a browser, or serve the folder locally:

```sh
python -m http.server 4173 --directory dist
```

Visit `http://localhost:4173`. Upload the **contents of `dist/`** to any static website host. The `.openai/hosting.json` file connects this source folder to its private Sites deployment. The local files are also independent of Sites.

The Sites deployment is private to the owner. Make it public before sharing with recruiters. Education, experience and leadership, contact links, and the downloadable résumé now reflect your supplied PDF; the listed toolkit is supported by it. The master's is expected in December 2028 and the bachelor's in December 2027. Project screenshots remain illustrative placeholders, and incomplete project stories, tools, outcomes, and live links remain clearly marked for you to finish.

## Design files

- `dist/styles.css`: colors, spacing, type, breakpoints, and animations. Change `--blue` to adjust the signature accent; update inline SVG colors in `app.js` and placeholder assets if changing the palette.
- `dist/app.js`: content rendering, playing-card interaction, gallery, and scroll behavior.
- `dist/index.html`: section structure and static interface labels.
- `dist/assets/fonts/`: locally hosted Doto and Inter font files, with their OFL licenses.

## Validation and accessibility

Run `node check.mjs` to validate content, project IDs, image files, fonts, and the resume. Card buttons work with Enter or Space. Native dialogs contain focus; Escape closes the image first, then the project. Closing a project returns focus to its card. Reduced-motion preferences disable transitions. A skip link, descriptive screenshot text, and visible keyboard focus are included.
