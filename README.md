# cufc-website

The official website for Cambridge University Fencing Club

Uses Gatsby, so easy setup:
1. Install dependencies: `npm install`
2. Build: `gatsby build`
3. Depoly: Copy the `public` folder to your host

I built this to learn how to use Gatsby so it is rough around the edges, lacks good SEO setup, and doesn't work in very old browsers.

## Editing / Updating

- Most of the text is embedded in the pages so can be changed from there
- To add/change members on the committe page, edit: `src/data/text/data.yml`
- To add an API key for the google maps embed, edit: `src/data/text/data.yml`
- To add documents (PDF format please), place in: `src/data/documents` with the name as you wish it to appear on the site
