# Continuous Skilljar theme (hosted files)

The styling and code for the Continuous Skilljar sites (test-continuous.skilljar.com now; Growth and Learn later). Each site's Skilljar theme loads these two files:

- `ct-theme.css`: from the Global head snippet
- `ct-theme.js`: from the Global code snippet

Served by GitHub Pages at https://markdcontinuous.github.io/continuous2026/. **Don't edit these files here.** They are built from the working copies in `Documents/Continuous Skilljar Theme/source/` with `perl tools/build.pl`, then pushed. A change shows on the sites within about 10 minutes (GitHub Pages caching).

Also published here: the **tagging guide** for the LMS team, https://markdcontinuous.github.io/continuous2026/tagging/ (built from `source/pages/tagging.html`).

Also: the **tile maker** for course images, https://markdcontinuous.github.io/continuous2026/tiles/ (built from `source/pages/tiles.html`).

Also: **VisualCron Academy** theme files in `visualcron/` (`vc-theme.css`, `vc-theme.js`), built by `tools/build.pl` in the VisualCron Skilljar Theme project.

Also: **Continuous Learning** (learning.continuous.com) theme files in `learning/` (`ct-learning.css`, `ct-learning.js`), built by `tools/build.pl` in the Continuous Learning Skilljar Theme project. Separate from the Growth files above; the test site can preview them with `?site=learning`.
