import { useState } from "react";

const topics=[
 ["Getting Started","bi-rocket-takeoff","Start here","Guides for setting up and understanding the platform."],
 ["Account & Profile","bi-person-badge","Manage your account","Profile, preferences and account-related questions."],
 ["Projects","bi-kanban","Build & manage","Helpful information for working with projects."],
 ["Technical Support","bi-tools","Troubleshooting","Solutions for common technical issues."]
];
const faqs=[
 ["How do I create an account?","Choose Sign Up and complete the registration form with your basic information."],
 ["How can I contact support?","Use the contact form below and include enough detail for us to understand your request."],
 ["Can I update my profile?","Yes. Open your profile settings and update the information you want to change."],
 ["Where can I find project documentation?","Browse the Help Center categories or search the documentation available for your project."]
];

export default function App(){
 const [open,setOpen]=useState(0); const [query,setQuery]=useState(""); const [sent,setSent]=useState(false);
 const filtered=faqs.filter(([q,a])=>`${q} ${a}`.toLowerCase().includes(query.toLowerCase()));
 return <div className="help-app">
  <nav className="top-nav"><div className="container nav-inner"><a href="#home" className="brand"><span className="brand-icon"><i className="bi bi-life-preserver"/></span>Help<span>Desk</span></a><div className="nav-links"><a href="#topics">Topics</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a className="nav-cta" href="#contact">Get support <i className="bi bi-arrow-up-right"/></a></div></div></nav>
  <header id="home" className="help-hero"><div className="container hero-inner"><div className="hero-label"><span/> SUPPORT CENTER</div><h1>How can we <span>help?</span></h1><p>Find answers, explore guides, or send a message to our support team.</p><div className="search-box"><i className="bi bi-search"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search help articles, topics or questions..." /><kbd>⌘ K</kbd></div><div className="hero-hints"><span><i className="bi bi-lightning-charge-fill"/> Quick answers</span><span><i className="bi bi-book"/> Helpful guides</span><span><i className="bi bi-chat-dots"/> Direct support</span></div></div></header>
  <main>
   <section id="topics" className="section topics-section"><div className="container"><div className="section-head"><div><div className="section-label">01 — HELP TOPICS</div><h2>What can we help with?</h2><p>Browse a category to find the information you need.</p></div></div><div className="topic-grid">{topics.map(([title,icon,tag,desc],i)=><article className={`topic-card topic-${i}`} key={title}><div className="topic-icon"><i className={`bi ${icon}`}/></div><span>{tag}</span><h3>{title}</h3><p>{desc}</p><button>Explore <i className="bi bi-arrow-up-right"/></button></article>)}</div></div></section>
   <section id="faq" className="section faq-section"><div className="container faq-layout"><div><div className="section-label">02 — FREQUENTLY ASKED</div><h2>Answers to common questions.</h2><p className="faq-intro">Can’t find what you’re looking for? Search above or send us a message.</p><a href="#contact" className="outline-btn">Contact support <i className="bi bi-arrow-right"/></a></div><div className="faq-list">{(filtered.length?filtered:faqs).map(([q,a])=>{const i=faqs.findIndex(x=>x[0]===q);return <div className={`faq-item ${open===i?"open":""}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><i className={`bi ${open===i?"bi-dash":"bi-plus"}`}/></button>{open===i&&<p>{a}</p>}</div>})}</div></div></section>
   <section id="contact" className="contact-section"><div className="container contact-grid"><div className="contact-copy"><div className="section-label">03 — CONTACT SUPPORT</div><h2>Still need a hand?</h2><p>Tell us what you need help with. We’ll review your message and get back to you.</p><div className="contact-detail"><span><i className="bi bi-envelope"/></span><div><small>Email us</small><strong>support@example.com</strong></div></div><div className="contact-detail"><span><i className="bi bi-clock"/></span><div><small>Response time</small><strong>Usually within 1 business day</strong></div></div></div><div className="form-card">{sent?<div className="success-state"><div><i className="bi bi-check-lg"/></div><h3>Message received!</h3><p>Thanks for reaching out. Your support request has been recorded.</p><button onClick={()=>setSent(false)}>Send another message</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="form-heading"><h3>Send a message</h3><span>We’re here to help</span></div><div className="form-row"><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label></div><label>Subject<input required placeholder="What can we help with?"/></label><label>Message<textarea required rows={5} placeholder="Describe your question or issue..."/></label><button className="submit-btn">Send message <i className="bi bi-arrow-up-right"/></button></form>}</div></div></section>
  </main>
  <footer><div className="container footer-inner"><div className="brand"><span className="brand-icon"><i className="bi bi-life-preserver"/></span>Help<span>Desk</span></div><span>Support & Contact Center · 2026</span></div></footer>
 </div>
}
