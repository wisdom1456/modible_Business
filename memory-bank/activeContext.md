# Active Context
Initial content placeholder.
[2025-05-08 05:19:58] - Attempted Performance and Accessibility audits using `github.com/AgentDeskAI/browser-tools-mcp`. Both were skipped due to issues with the MCP server (performance audit skipped by subtask, accessibility audit skipped due to browser connector server issue). Unable to proceed with further audits using this MCP server at this time.
[2025-05-08 05:24:09] - Current Focus: Improving text content and layout of the website. This decision was made after encountering issues with automated audit tools.
[2025-05-08 05:28:03] - Architect mode provided the following recommendations for text content and layout:
*   **Homepage ([`src/index.njk`](src/index.njk:1)):**
    *   Add a compelling tagline to the hero section.
    *   Rewrite the blurb to focus on design philosophy.
    *   Enhance service descriptions with keywords like "innovative design," "user-centric approach," and "cutting-edge technology."
*   **About Page ([`src/about.njk`](src/about.njk:1)):**
    *   Expand the bio to detail design philosophy and achievements.
    *   Re-evaluate skill bar content to align with core messaging.
*   **Contact Page ([`src/contact.njk`](src/contact.njk:1)):**
    *   Rephrase headlines and form introductions to be more engaging and less transactional.
    *   De-emphasize local service areas for a general audience.
*   **Portfolio Page ([`src/portfolio.njk`](src/portfolio.njk:1)):**
    *   Ensure project descriptions subtly highlight innovative aspects and user-centric solutions.
*   **General:**
    *   Consider adding a blog/articles section to directly support thought leadership.
    *   Improve `alt` text for images across the site.
[2025-05-08 05:29:27] - Homepage content changes (tagline, blurb, service descriptions) implemented by Code mode as per Architect's recommendations.
[2025-05-08 05:30:47] - About Page content changes (expanded bio, re-evaluated skill bar) implemented by Code mode as per Architect's recommendations.
[2025-05-08 05:31:39] - Contact Page content changes (engaging headlines/introductions, de-emphasized local service areas) implemented by Code mode as per Architect's recommendations.
[2025-05-08 05:33:00] - Portfolio Page project descriptions enhanced by Code mode (in [`src/_data/portfolio.json`](src/_data/portfolio.json:1) and [`src/portfolio.njk`](src/portfolio.njk:1)) as per Architect's recommendations.
[2025-05-08 05:36:10] - General site improvement: Image `alt` texts reviewed and enhanced across the site by Code mode, as per Architect's recommendation.
[2025-05-08 05:36:53] - Current Focus: Planning and implementing a new blog/articles section for the website, as per user approval and Architect's recommendation.
[2025-05-08 05:39:11] - Architect mode provided the following plan for adding a blog section:
*   **Directory Structure:** Blog posts will reside in [`src/blog/`](src/blog/).
*   **Post Structure:** Posts will be Markdown files with front matter:
    *   `title` (string)
    *   `date` (date, e.g., YYYY-MM-DD)
    *   `author` (string, optional)
    *   `summary` (string, for listing page)
    *   `layout` (string, pointing to `post.njk` or similar)
    *   `tags` (array of strings, optional)
    *   `featuredImage` (string, path to image, optional)
    *   `permalink` (string, optional, Eleventy can auto-generate)
*   **Nunjucks Templates:**
    *   Blog listing page: [`src/blog.njk`](src/blog.njk:1) - will display post summaries, potentially with pagination ("Load More" suggested).
    *   Individual post layout: [`src/_layouts/post.njk`](src/_layouts/post.njk:1) - will render full blog posts.
*   **Layouts:** The existing base layout [`src/_layouts/base.njk`](src/_layouts/base.njk:1) will be extended by the new post-specific layout ([`src/_layouts/post.njk`](src/_layouts/post.njk:1)).
*   **Navigation Integration:** A "Blog" link will be added to the main site navigation, likely by modifying the navigation data structure in [`src/_data/site.js`](src/_data/site.js:1).
*   **Eleventy Collections:**
    *   A `blog` collection will be configured in [`utils/collections.js`](utils/collections.js:1).
    *   This collection will source posts from the [`src/blog/`](src/blog/) directory.
    *   The collection will be registered and made available in [`.eleventy.js`](.eleventy.js:1).
[2025-05-08 05:40:18] - Blog Implementation Step 1: Eleventy `blog` collection configured in [`utils/collections.js`](utils/collections.js:1) and [`.eleventy.js`](.eleventy.js:1) by Code mode.
[2025-05-08 05:41:17] - Blog Implementation Step 2: Individual post layout ([`src/_layouts/post.njk`](src/_layouts/post.njk:1)) and sample post (`src/blog/sample-post.md`) created by Code mode. Date filters confirmed/added.
[2025-05-08 05:41:58] - Blog Implementation Step 3: Blog listing page ([`src/blog.njk`](src/blog.njk:1)) created by Code mode. Lists all posts, newest first.
[2025-05-08 05:42:50] - Blog Implementation Step 4: "Blog" link added to site navigation in [`src/_layouts/partials/navbar.njk`](src/_layouts/partials/navbar.njk:1) by Code mode.
[2025-05-08 05:44:00] - Issue encountered when user tried `npm start`: `run-p: command not found`. This indicates project dependencies might be missing. Recommended `npm install`.
[2025-05-08 05:45:56] - Troubleshooting `npm start`:
    - Eleventy template error in [`src/_layouts/post.njk`](src/_layouts/post.njk:1) (extends "base.njk") addressed by changing path to `{% extends "_layouts/base.njk" %}`.
    - Webpack crypto error (`ERR_OSSL_EVP_UNSUPPORTED`) addressed by adding `NODE_OPTIONS=--openssl-legacy-provider` to `dev:scripts` and `build:scripts` in [`package.json`](package.json:1).
[2025-05-08 05:47:50] - `npm start` successful. Site is running locally at http://localhost:8080. Previous build errors (Eleventy template and Webpack crypto) are resolved. User will review any remaining non-critical terminal messages (e.g., deprecation warnings).