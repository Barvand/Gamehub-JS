# GameHub

![GameHub logo](Images/GameHub_Logo.png)

An online store for games, built during my first year at Noroff (frontend development), 2023–2024.
It started as an HTML and CSS course assignment and grew into my first JavaScript project.

**Live demo:** https://cheery-stroopwafel-ddc25d.netlify.app/

## What it does

- Loads games from the Noroff GameHub API and shows them on the home page, a games page and a product page per game
- Shopping cart that keeps its contents in `localStorage`, so you can add and remove items and the cart survives a page reload
- Checkout flow with delivery and order-complete pages
- Error messages when the API can't be reached
- FAQ accordion on the contact page

## Built with

- HTML
- CSS
- JavaScript (ES modules, Fetch API)
- Noroff GameHub API
- Netlify (hosting)

## Running locally

Clone the repo and serve the folder with a local web server (for example the Live Server
extension in VS Code). The scripts are loaded as ES modules, so opening `index.html`
directly from disk will not work.

## Update 2026

Version 1 of the Noroff API stopped working, so I moved the project to API v2. The new
version wraps the response in a `data` object and returns images as objects, so the data
is converted to the old shape right after fetching and the rest of the code stays the same.

## Looking back

- This was my first JavaScript project, and it shows.
- I now see many UI issues, such as elements jumping around while the page loads, that would
  bother me a lot today.
- First contact with bearer tokens and API keys.

## Contact

- [LinkedIn](https://www.linkedin.com/in/bart-van-den-berg-b90219155/)
