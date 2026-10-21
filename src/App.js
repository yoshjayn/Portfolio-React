import React, { useState } from 'react';
import portrait from './assets/images/yashbanner.png';
const gh = 'https://github.com/yoshjayn',
  email = 'aswiniy68@gmail.com';
const projects = [{
  name: 'Notes Canvas',
  type: 'Full stack',
  visual: 'notes',
  line: 'A little less clutter. A lot more clarity.',
  description: 'A React note-taking frontend with JWT-guarded routes, drag-and-drop organisation, labelled search and light/dark themes.',
  tags: ['React', 'JWT', 'REST APIs'],
  repo: 'Notes-Canvas',
  live: 'https://notes-canvas-puce.vercel.app/'
}, {
  name: 'Vistagram',
  type: 'Frontend',
  visual: 'social',
  line: 'Familiar interactions, built from the ground up.',
  description: 'An Instagram-inspired learning project exploring reusable React components, Context API, authentication and REST API integration.',
  tags: ['React', 'Context API', 'Tailwind CSS'],
  repo: 'Instagram-clone',
  live: 'https://instagram-clone-upup.vercel.app/'
}, {
  name: 'Streaming UI',
  type: 'Frontend',
  visual: 'stream',
  line: 'An interface made for discovery.',
  description: 'A Netflix-inspired frontend project focused on React, API integration and responsive layouts for browsing entertainment.',
  tags: ['React', 'JavaScript', 'Responsive UI'],
  repo: 'Netflix-React',
  live: 'https://netflix-react-pink.vercel.app/'
}];
function Art({
  type
}) {
  return <div className={'project-art ' + type} aria-hidden="true"><div className="mini-window"><div className="window-bar"><i /><i /><i /><small>{type === 'notes' ? 'notes.canvas' : type === 'social' ? 'vistagram' : 'streaming.ui'}</small></div>{type === 'notes' ? <div className="notes-ui"><aside>◈<i /><i /><i /></aside><div><b>Your ideas, collected.</b><div className="note-grid"><span>Build something<br />worth sharing.<em>work / ideas</em></span><span>Small steps.<br />Good progress.<em>today</em></span><span>Things to explore<em>learning</em></span></div></div></div> : type === 'social' ? <div className="social-ui"><b>vistagram.</b><div className="avatars"><i /><i /><i /><i /></div><div className="social-photo">find your<br /><em>perspective.</em></div><small>♡ &nbsp; ◌ &nbsp; ↗</small></div> : <div className="stream-ui"><b>STREAM</b><div className="movie-hero">THE NEXT<br /><strong>CHAPTER.</strong><small>Stories worth staying in for.</small></div><div className="movie-row"><i /><i /><i /><i /></div></div>}</div><span className="art-caption">INTERFACE STUDY / {type.toUpperCase()}</span></div>;
}
function App() {
  const [filter, setFilter] = useState('All work'),
    [menu, setMenu] = useState(false),
    [copied, setCopied] = useState(false);
  const shown = projects.filter(p => filter === 'All work' || p.type === filter);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = 'mailto:' + email;
    }
  }
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header wrap"><a className="wordmark" href="#home" aria-label="Yashaswini Jain home">yj<span>.</span></a><span className="header-note">DEVELOPER & INSTRUCTOR</span><button className="menu-button" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Close −' : 'Menu +'}</button><nav id="navigation" className={menu ? 'open' : ''} aria-label="Main navigation">{[['Work', 'work'], ['About', 'about'], ['Experience', 'experience']].map(([name, id]) => <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{name}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>Let’s talk <span>↗</span></a></nav></header>
<main id="main"><section className="hero wrap" id="home"><div><p className="eyebrow"><span className="status-dot" />OPEN TO FULL-TIME OPPORTUNITIES</p><h1>Thoughtful code.<br />Clear <em>solutions.</em></h1><p className="intro">Hi, I’m <strong>Yashaswini Jain.</strong> I build with React and Node.js, connect the pieces with APIs, and make technical ideas easier to understand.</p><div className="hero-actions"><a className="button dark" href="#work">Explore my work <span>→</span></a><a className="text-link" href="/Yashaswini_210926.pdf" target="_blank" rel="noreferrer">View résumé ↗</a></div><p className="location">⌖ &nbsp; Hyderabad, India <span>/</span> Open to Delhi NCR & remote</p></div><div className="hero-visual"><div className="portrait-panel"><span className="panel-index">01 / THE PERSON BEHIND THE CODE</span><div className="orbit" /><div className="orbit second" /><img src={portrait} alt="Yashaswini Jain" fetchPriority="high" /><span className="portrait-label">YASHASWINI<br /><strong>JAIN</strong></span><span className="portrait-spark" aria-hidden="true">✳</span></div><div className="portrait-foot"><span>BUILD. UNDERSTAND. EXPLAIN.</span><span>JS / REACT / NODE</span></div></div></section>
<div className="stack-band"><div className="wrap"><span className="stack-label">MY EVERYDAY TOOLKIT</span>{['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'].map(s => <span key={s}>{s}</span>)}</div></div>
<section className="wrap section" id="work"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>From idea<br />to <em>interaction.</em></h2></div><p>A few things I’ve built while exploring the space between useful interfaces and the systems behind them.</p></div><div className="work-tools"><div className="filters" role="group" aria-label="Filter projects">{['All work', 'Full stack', 'Frontend'].map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? 'selected' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div><span className="work-count" aria-live="polite">{String(shown.length).padStart(2, '0')} PROJECTS</span></div><div className="project-grid">{shown.map(p => <article className="project" key={p.repo}><Art type={p.visual} /><div className="project-info"><h3>{p.name}<span>↗</span></h3><p className="project-line">{p.line}</p><p>{p.description}</p><ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul><div className="project-links"><a href={p.live} target="_blank" rel="noreferrer" aria-label={'Open ' + p.name + ' live demo'}>Live demo ↗</a><a href={gh + '/' + p.repo} target="_blank" rel="noreferrer" aria-label={'Read ' + p.name + ' source on GitHub'}>Source code ↗</a></div></div></article>)}</div><p className="project-note">Visuals above are interface studies. Explore the linked demos and source for the actual projects.</p><a className="text-link" href={gh} target="_blank" rel="noreferrer">More experiments on GitHub ↗</a></section>
<section className="about-section" id="about"><div className="wrap about-grid"><div><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>I like making<br />complex things<br /><em>click.</em></h2></div><div className="about-body"><p className="large-copy">Building software and teaching it have something in common: you have to understand the problem before you can make it simple.</p><p>I’m a Software Developer & Instructor at AccioJob, working with JavaScript, React, Node.js and APIs. I enjoy turning ideas into working interfaces, reasoning through backend behaviour, and explaining the decisions behind the code.</p><p>My background also includes freelance AI model training at Remotasks and a master’s in Computer Applications. I’m interested in software development, implementation and solutions engineering roles where technical depth and clear communication work together.</p><div className="capabilities">{[['Interfaces that make sense', 'React, Redux Toolkit, responsive layouts and reusable components.'], ['The connections underneath', 'Node.js, Express, MongoDB, REST APIs and JWT authentication.'], ['Clarity through explanation', 'Technical instruction, debugging and breaking down difficult concepts.']].map(([a, b], i) => <div key={a}><span>0{i + 1}</span><h3>{a}</h3><p>{b}</p></div>)}</div></div></div></section>
<section className="wrap section" id="experience"><div className="section-heading"><div><p className="eyebrow">03 / THE JOURNEY</p><h2>Learning by doing.<br /><em>And explaining.</em></h2></div><a className="text-link" href="/Yashaswini_210926.pdf" target="_blank" rel="noreferrer">Read my résumé ↗</a></div><div className="timeline"><article><div className="timeline-date">SEP 2025 — PRESENT<span>Hyderabad, India</span></div><div><h3>Software Developer & Instructor</h3><p className="company">AccioJob</p><p>Software development and technical instruction across JavaScript, React, Node.js and API fundamentals. Teaching work includes an Authentication & Profile Management project.</p><ul className="tags"><li>Development</li><li>Technical instruction</li><li>Problem solving</li></ul></div></article><article><div className="timeline-date">MAR — AUG 2024<span>Freelance · Remote</span></div><div><h3>AI Training Expert</h3><p className="company">Remotasks</p><p>Contributed to AI model training and evaluation through freelance annotation work.</p></div></article></div><div className="education-strip"><div><span className="eyebrow">EDUCATION</span><h3>Master of Computer Applications</h3><p>Manipal University Jaipur · 2023–2025</p></div><div><span className="eyebrow">FOUNDATION</span><h3>B.Sc. Mathematics</h3><p>Maharishi Dayanand University · 2019–2022</p></div><div><span className="eyebrow">RECOGNITION</span><h3>Humanity’s Last Exam</h3><p>Benchmark contribution · 2025</p></div></div></section>
<section className="contact-section" id="contact"><div className="wrap"><p className="eyebrow"><span className="status-dot" />LET’S BUILD SOMETHING USEFUL</p><h2>A good conversation<br />is a great <em>start.</em></h2><div className="contact-bottom"><div><p>Hiring for a developer or solutions role?<br />I’d love to hear about the problem you’re solving.</p><a className="contact-email" href={'mailto:' + email}>{email} ↗</a><button className="copy-button" onClick={copy} aria-live="polite">{copied ? 'Email copied ✓' : 'Copy email ↗'}</button></div><div className="contact-socials"><a href="https://linkedin.com/in/yashaswinijain" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href={gh} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="/Yashaswini_210926.pdf" target="_blank" rel="noreferrer">Résumé <span>↗</span></a></div></div></div></section></main><footer className="wrap"><a className="wordmark" href="#home" aria-label="Back to top">yj<span>.</span></a><p>© {new Date().getFullYear()} Yashaswini Jain</p><a href="#home">BACK TO TOP ↑</a></footer></>;
}
export default App;
