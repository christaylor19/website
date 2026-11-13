import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';

const font = (weight: number): string =>
  'data:font/woff2;base64,' +
  readFileSync(`node_modules/@fontsource/rubik/files/rubik-latin-${weight}-normal.woff2`).toString(
    'base64',
  );

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Chris Taylor — CV</title><style>
@font-face{font-family:Rubik;font-weight:400;src:url(${font(400)})}
@font-face{font-family:Rubik;font-weight:500;src:url(${font(500)})}
@font-face{font-family:Rubik;font-weight:700;src:url(${font(700)})}
@page{size:A4;margin:14mm 15mm}
*{box-sizing:border-box}
body{margin:0;font-family:Rubik,sans-serif;font-size:9.6pt;line-height:1.42;color:#2b2722}
a{color:#2a7c78;text-decoration:none}
h1{font-size:22pt;font-weight:700;margin:0;letter-spacing:-.3px}
.contact{color:#6b655d;margin-top:2pt;font-size:9pt}
h2{font-size:8pt;font-weight:700;letter-spacing:.9px;text-transform:uppercase;color:#6b655d;margin:11pt 0 4pt;padding-bottom:2pt;border-bottom:1px solid #ddd6ca}
.role{display:flex;justify-content:space-between;align-items:baseline;margin-top:7pt}
.role b{font-weight:700;font-size:10.2pt}
.when{color:#6b655d;font-size:8.8pt;white-space:nowrap}
.titles{color:#6b655d;font-style:italic;margin-top:1pt}
ul{margin:3pt 0 0;padding-left:13pt}
li{margin-top:2pt}
li::marker{color:#2a7c78}
p{margin:0}
.break{color:#6b655d}
</style></head><body>
<h1>Chris Taylor</h1>
<div class="contact">Senior Frontend Engineer · London · <a href="https://www.ctaylor.dev">ctaylor.dev</a> · <a href="https://www.linkedin.com/in/chris-taylor-b50703a7/">linkedin.com/in/chris-taylor-b50703a7</a> · <a href="https://github.com/christaylor19">github.com/christaylor19</a> · <a href="mailto:christaylor94.dev@gmail.com">christaylor94.dev@gmail.com</a></div>

<h2>Summary</h2>
<p>Frontend engineer with over eight years building web products, from React apps to the server-driven services behind them. I'm an agentic engineer: I build with Claude Code agents, shared skills, design systems that agents follow, and checks that prove the result. I studied geography and GIS before I wrote code, and still make maps for fun.</p>

<h2>Experience</h2>
<div class="role"><b>ClearScore · London</b><span class="when">Apr 2023 – now</span></div>
<div class="titles">Senior Frontend Engineer (Jan 2025 – now) · Frontend Engineer (Apr 2023 – Jan 2025)</div>
<ul>
<li><b>Marketplace Transformation:</b> work on the backend-for-frontend, the Node services that build server-driven UI for web and apps in the rebuilt credit marketplace. Top contributor to its codebase; spent two weeks in Sydney for the Australian rollout.</li>
<li><b>CS24:</b> seconded to Credit Health for the global redesign of the credit report, built on server-driven UI and an event-driven architecture on Kafka. Owned the Accounts section in every market through to launch in Nov 2024.</li>
<li><b>Growth:</b> ran A/B experiments across the web app and home feed, and worked on the shared React frontend platform.</li>
<li>Build the Claude Code skills the team uses for investigating issues, testing and on-call. Review about as much code as I write.</li>
</ul>

<div class="role break"><span><b style="color:#2b2722">Career break</b> · Travelling in South America</span><span class="when">Sep 2022 – Mar 2023</span></div>

<div class="role"><b>Perlego · London</b><span class="when">Mar 2020 – Sep 2022</span></div>
<div class="titles">Senior Software Engineer (Jun 2021 – Sep 2022) · Software Engineer (Mar 2020 – Jun 2021)</div>
<ul>
<li>Led the Library squad: student-facing pages, search and microservices.</li>
<li>Moved the web app to TypeScript, raised test coverage, and migrated to automated CI/CD.</li>
<li>Created Perlego UI, a private component library for the web apps.</li>
</ul>

<div class="role"><b>APAK Group · Newbury</b><span class="when">Sep 2017 – Mar 2020</span></div>
<div class="titles">Software Developer</div>
<ul><li>First role in software: C# and JavaScript on a customer retention tool BMW used in markets worldwide.</li></ul>

<h2>Projects</h2>
<ul>
<li><b>Almanac</b> (<a href="https://almanac.ctaylor.dev">almanac.ctaylor.dev</a>): a Wikipedia-style reference site for sports data, built with AI agents and a nightly data pipeline that checks itself.</li>
<li><b>HN Monthly Top</b> (<a href="https://hn-monthly-top.vercel.app">hn-monthly-top.vercel.app</a>): the top Hacker News stories for any month, with AI summaries.</li>
<li><b>Maps:</b> NYC neighbourhoods, the Amtrak network and HS2 Phase One, at <a href="https://www.ctaylor.dev">ctaylor.dev</a>.</li>
</ul>

<h2>Skills</h2>
<p>Agentic engineering: Claude Code, subagents, skills, hooks, MCP · TypeScript · React · Node (Fastify) · Kafka · Postgres · Playwright · Datadog</p>

<h2>Education</h2>
<p>MSc Geographic Information Science, University of Edinburgh, 2017 · BSc Human &amp; Physical Geography (2:1), University of Reading, 2016, including an Erasmus semester in Bergen</p>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: 'public/cv.pdf',
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
