// Single source of truth for site-wide text and links.
// Change the brand name, tagline, nav, or contact details HERE ONLY;
// every page and component reads from this file, nothing is hardcoded
// per-page. Rebranding, swapping a launch date, or adding a nav item
// is a one-file edit, not a find-and-replace across the whole project.

export const site = {
  name: 'HelTru',
  legalName: 'HelTru',
  tagline: 'Continuous safety monitoring, without a byte of raw data leaving the device.',
  description:
    'HelTru turns a phone someone already owns into a continuous safety monitor: falls, stillness, wandering, fatigue, shock, using federated learning so raw sensor data never leaves the device. One platform, six safety-critical domains: eldercare, workplace safety, lone-worker protection, sports performance, pediatric safety, and industrial asset monitoring.',
  url: 'https://HelTru.eu',
  email: 'HTW@gmail.com',
  location: 'Tallinn, Estonia',
  formspreeFormId: 'xljdjggg',
  social: {
    linkedin: 'https://www.linkedin.com/company/HelTru',
    github: 'https://github.com/HelTru',
  },
};

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/platform' },
  { label: 'Domains', href: '/domains' },
  { label: 'Dashboards', href: '/dashboards' },
  { label: 'Trust & compliance', href: '/trust' },
  { label: 'Company', href: '/company' },
];

export const footerLinks: NavLink[] = [
  ...nav,
  { label: 'Contact', href: '/contact' },
];

export const currentYear = new Date().getFullYear();

// The six domains, one shared engine, six calibrations. Used across
// the homepage, /domains, and the domain switcher component.
export type Domain = {
  key: string;
  name: string;
  label: string;
  accent: string;   // Tailwind color name, matches tailwind.config.mjs
  watch: string[];
  pain: string;
  solution: string;
  whyTheyBuy: string;
};

export const domains: Domain[] = [
  {
    key: 'care',
    name: 'HelTru Care',
    label: 'Eldercare',
    accent: 'evergreen',
    watch: ['Falls, the instant they happen', 'Wandering & safe-zone breaches', 'Circadian rhythm deviation'],
    pain: "A facility with 60 residents and 4 night staff isn't failing by checking hourly; hourly is near the physical limit of that staffing ratio. Gradual decline can go unnoticed for weeks because no one is positioned to compare today against three weeks ago, across dozens of residents at once.",
    solution: "Fall-magnitude detection flags a fall the instant it happens. A background stillness sweep catches the case where someone goes quiet without an obvious fall. An EWMA-based personal baseline makes gradual decline visible; '10% less active than last month' is invisible to spot checks but exactly what a running statistical baseline catches.",
    whyTheyBuy: '63% of assisted living facilities report a staff shortage, and average caregiver turnover runs 70–80% in the first 100 days (Senior List / Caregiver Retention Report, 2026). Continuous monitoring covers the response-time gap understaffing creates, without adding headcount a facility can\'t find or afford.',
  },
  {
    key: 'workforce',
    name: 'HelTru Workforce',
    label: 'Workplace Safety',
    accent: 'copper',
    watch: ['Worker-down events', 'Danger-zone entry', 'Ergonomic strain & unresponsive workers'],
    pain: "A worker on a site with heavy equipment goes down (injury, medical event, entrapment) and the first anyone knows is when they miss a check-in, sometimes an hour later. A check-in only works if the worker is conscious enough to perform it, exactly the scenario it exists to catch.",
    solution: 'A domain-tuned stillness sweep flags sustained absence of motion or a down-and-motionless pattern, independent of any check-in. Domain-specific impact-magnitude thresholds catch a hard impact instantly. A separate offline sweep flags a device that stops transmitting entirely.',
    whyTheyBuy: 'US workplace injuries cost $176.5B annually; a medically-consulted injury averages $42,000 (National Safety Council/Voxel, 2026). Objective, timestamped incident data shortens investigations and supports the risk-management case insurers reward with lower premiums.',
  },
  {
    key: 'guardian',
    name: 'HelTru Guardian',
    label: 'Lone Worker Protection',
    accent: 'plum',
    watch: ['Man-down detection', 'Missed scheduled check-ins', 'Emergency SOS, one tap'],
    pain: "A lone worker (security guard, field technician, home-visit nurse) has no colleague nearby to notice anything wrong. The role falls back to check-ins, inheriting the same blind spot: it depends on the worker being able to perform it.",
    solution: 'The same continuous stillness/impact detection as Workforce, escalating faster. A missed check-in is tracked explicitly and stacked on top of passive detection, so a missed check-in combined with detected stillness is treated as materially more urgent than either alone.',
    whyTheyBuy: '50% of lone workers report avoiding tasks or locations due to safety concerns (2026 Lone Worker Survey). Duty of care for a lone worker legally cannot be delegated to the worker themselves; lone-worker legislation is actively tightening across Canada, California, the EU, and UK.',
  },
  {
    key: 'performance',
    name: 'HelTru Performance',
    label: 'Sports Performance',
    accent: 'steel',
    watch: ['High-G impact severity', 'Fatigue via variance-drop detection', 'Out-of-bounds detection'],
    pain: "Two failure modes: a hard hit during play, where 'shake it off' or 'get checked now' is a judgment call from the sideline; and fatigue accumulating unnoticed until a manageable strain becomes a season-ending injury.",
    solution: 'Sport-tuned high-G impact detection gives an objective severity signal instantly. A fatigue signal built on variance-drop detection catches a meaningful drop in an athlete\'s own movement variability, the pattern that precedes overuse injury, before it\'s visible by eye. The baseline is per-athlete, not league-wide.',
    whyTheyBuy: 'Youth-athlete concussion protocols are now law in all 50 US states. Programs with meaningful youth enrolment are advised to carry $2M+ in liability coverage specifically because of concussion litigation exposure (Sports Scoops, 2026).',
  },
  {
    key: 'kids',
    name: 'HelTru Kids',
    label: 'Pediatric / Child Safety',
    accent: 'rose',
    watch: ["Falls, retuned for a child's weight", 'Unusual movement patterns', 'Safe-zone & wandering alerts'],
    pain: "A parent's worst moment isn't the event, it's not knowing until minutes or hours later. Children compound this: they often don't self-report; 'they just go quiet, or wander off' removes the one channel that partially compensates for infrequent checking everywhere else.",
    solution: "Same continuous fall/stillness/zone-breach detection, retuned for a child's lower body mass; an adult-calibrated threshold would systematically miss a genuinely hard fall for a child. Safe-zone breach detection adds wandering alerts.",
    whyTheyBuy: 'Child-to-caregiver ratios are legally binding, not guidelines, and courts treat ratio violations as direct evidence of negligence (Cohen Injury Law, 2026). Continuous monitoring gives facilities a documented, defensible supervision record.',
  },
  {
    key: 'assets',
    name: 'HelTru Assets',
    label: 'Industrial Asset Monitoring',
    accent: 'slate2',
    watch: ['Abnormal vibration signatures', 'Discrete shock events', 'Offline-asset detection'],
    pain: 'Equipment failure is discovered when it stops working; by then, downtime, repair, or replacement cost is already locked in. The shock or vibration event that was the root cause may have happened weeks earlier, unnoticed.',
    solution: "Fall detection is disabled for this domain, since a stationary asset isn't a person. Continuous vibration and shock monitoring flags an abnormal signature the moment it occurs, not retroactively. Offline detection separately flags a device that stops transmitting.",
    whyTheyBuy: 'Unplanned downtime now averages $260,000/hour in manufacturing (Siemens/Deloitte, 2026). Predictive/condition monitoring delivers 30-50% downtime reduction and 10-30x ROI (McKinsey, 2026), at a fraction of a full industrial IoT deployment\'s cost.',
  },
];
