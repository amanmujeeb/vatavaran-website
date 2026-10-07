'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Check, MapPin, MessageCircle, Phone, Sparkles, X } from 'lucide-react';

const BASE = 'https://functionhall.vercel.app/halls/vatavaran/';
const images = {
  exterior: BASE + 'vexterior.png',
  lawn: BASE + 'vlawn.png',
  stage: BASE + 'vstage.png',
  dining: BASE + 'vdining.png',
  parking: BASE + 'vparking.png'
};

// Replace this with the venue's WhatsApp number in international format, without + or spaces.
const WHATSAPP_NUMBER = '919844107862';
const address = 'Old Jewargi Road, Opposite Sparkles School, near Ring Road, Kalaburagi, Karnataka';

function waLink(message='Hi, I\'m interested in booking Vatavaran Banquets & Lawns.') {
  if (WHATSAPP_NUMBER === '919844107862') return '#enquire';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const occasions = [
  { title: 'Weddings', text: 'A grand setting for ceremonies, receptions and unforgettable beginnings.', image: images.lawn },
  { title: 'Engagements', text: 'An elegant backdrop for intimate celebrations and beautiful first chapters.', image: images.stage },
  { title: 'Receptions', text: 'Indoor and outdoor spaces designed for a celebration your guests remember.', image: images.exterior },
  { title: 'Milestones', text: 'Birthdays, anniversaries, family gatherings and every moment worth celebrating.', image: images.dining }
];

const gallery = [
  ['The Entrance', images.exterior], ['The Lawns', images.lawn], ['The Celebration', images.stage], ['Dining', images.dining], ['Arrival & Parking', images.parking]
];

const faqs = [
  ['Can I book the hall and lawn together?', 'Yes. Vatavaran can be configured around your event, including indoor and outdoor celebrations. Contact us with your date and guest count and we will guide you through the available setup.'],
  ['What events can I host?', 'Weddings, receptions, engagements, birthdays, anniversaries, family functions, corporate gatherings and other private celebrations.'],
  ['How do I check availability?', 'Send your event date, event type and approximate guest count through the enquiry form or WhatsApp.'],
  ['Where is Vatavaran located?', address + '.'],
];

export default function Home() {
  const [modal, setModal] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi, I’m interested in Vatavaran Banquets & Lawns.%0A%0AName: ${f.get('name')}%0APhone: ${f.get('phone')}%0AEvent: ${f.get('event')}%0ADate: ${f.get('date')}%0AGuests: ${f.get('guests')}%0A%0AMessage: ${f.get('message') || 'Please share availability and details.'}`;
    if (WHATSAPP_NUMBER !== 'YOUR_WHATSAPP_NUMBER') window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    else setModal(true);
  };

  return <main>
    <header className="nav">
      <a className="brand" href="#top"><span className="brand-mark">V</span><span>VATAVARAN<small>Banquets & Lawns</small></span></a>
      <nav className="nav-links"><a href="#venue">Venue</a><a href="#occasions">Occasions</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a></nav>
      <a className="nav-cta" href="#enquire">Check Availability <ArrowUpRight size={16}/></a>
    </header>

    <section className="hero" id="top">
      <img className="hero-image" src={images.exterior} alt="Vatavaran Banquets & Lawns exterior" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="eyebrow light"><Sparkles size={14}/> KALABURAGI · KARNATAKA</div>
        <h1>Your celebration.<br/><em>Your space.</em><br/>Your moment.</h1>
        <p>A premium destination for weddings, receptions, engagements and celebrations—where beautiful spaces meet effortless hospitality.</p>
        <div className="hero-actions"><a className="button light-button" href="#enquire">Plan Your Event <ArrowUpRight size={17}/></a><a className="text-link" href="#gallery">Explore the venue <span>↓</span></a></div>
      </div>
      <div className="hero-bottom"><span>Old Jewargi Road · Kalaburagi</span><span>01 — 05</span></div>
    </section>

    <section className="intro section" id="venue">
      <div className="eyebrow">THE VATAVARAN EXPERIENCE</div>
      <div className="intro-grid"><h2>Made for the moments<br/><em>that matter.</em></h2><div><p className="lead">From the first arrival to the final photograph, Vatavaran gives your celebration room to feel special.</p><p>Bring your people together in a venue designed around flexibility—grand indoor celebrations, open-air lawn events, intimate gatherings and everything in between.</p><a className="inline-link" href="#enquire">Tell us about your event <ArrowUpRight size={16}/></a></div></div>
      <div className="feature-grid"><Feature n="01" title="Grand celebrations" text="A refined setting designed to host memorable gatherings."/><Feature n="02" title="Indoor + outdoor" text="Choose the atmosphere that fits your celebration—or combine both."/><Feature n="03" title="Beautiful arrival" text="Spacious surroundings, landscaped areas and dedicated parking."/><Feature n="04" title="One destination" text="Keep your ceremony, celebration and guests together in one place."/></div>
    </section>

    <section className="split-image section-wide"><div className="split-copy"><div className="eyebrow">THE VENUE</div><h2>Space that adapts<br/><em>to your celebration.</em></h2><p>Whether you are planning a wedding with a full guest list or a smaller family celebration, the venue can be shaped around the way you want the day to feel.</p><a className="button dark-button" href="#enquire">Check your date <ArrowUpRight size={17}/></a></div><div className="split-photo"><img src={images.lawn} alt="Vatavaran landscaped lawn"/></div></section>

    <section className="occasions section" id="occasions"><div className="section-head"><div><div className="eyebrow">THE OCCASIONS</div><h2>One venue.<br/><em>Endless celebrations.</em></h2></div><p>Designed to give every occasion its own atmosphere.</p></div><div className="occasion-grid">{occasions.map((o,i)=><article className="occasion" key={o.title}><div className="occasion-img"><img src={o.image} alt={o.title}/><span>0{i+1}</span></div><div className="occasion-body"><h3>{o.title}</h3><p>{o.text}</p><a href="#enquire">Plan this event <ArrowUpRight size={15}/></a></div></article>)}</div></section>

    <section className="statement"><img src={images.stage} alt="Vatavaran celebration space"/><div className="statement-overlay"/><div className="statement-content"><div className="eyebrow light">THE VATAVARAN PROMISE</div><h2>Come for the space.<br/><em>Stay for the moment.</em></h2><p>A venue should do more than hold your guests. It should become part of the memory.</p></div></section>

    <section className="gallery section" id="gallery"><div className="section-head"><div><div className="eyebrow">A GLIMPSE OF VATAVARAN</div><h2>See the space.<br/><em>Imagine the moment.</em></h2></div><p>Explore the venue from arrival to celebration.</p></div><div className="gallery-grid">{gallery.map(([title,src],i)=><button className={`gallery-card g${i+1}`} key={title} onClick={()=>setActiveGallery([title,src])}><img src={src} alt={title}/><span>{String(i+1).padStart(2,'0')} · {title}</span></button>)}</div></section>

    <section className="enquire section" id="enquire"><div className="enquire-grid"><div><div className="eyebrow">YOUR DATE. YOUR CELEBRATION.</div><h2>Let's make it<br/><em>unforgettable.</em></h2><p>Share a few details and we’ll help you find the right setup for your celebration.</p><div className="contact-mini"><a href={waLink()}><MessageCircle size={19}/> WhatsApp the venue</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank"><MapPin size={19}/> Get directions</a></div></div><form onSubmit={submit} className="form"><label>Name<input name="name" placeholder="Your name" required/></label><label>Phone number<input name="phone" placeholder="+91" required/></label><div className="form-row"><label>Event type<select name="event" defaultValue=""><option value="" disabled>Select</option><option>Wedding</option><option>Reception</option><option>Engagement</option><option>Birthday / Milestone</option><option>Corporate / Other</option></select></label><label>Guest count<input name="guests" type="number" placeholder="Approx. guests"/></label></div><label>Preferred date<input name="date" type="date" required/></label><label>Tell us more<textarea name="message" rows="4" placeholder="Anything you'd like us to know?"/></label><button className="button dark-button full" type="submit">Send Enquiry <ArrowUpRight size={17}/></button><small className="form-note"><Check size={13}/> No obligation. We’ll get back to you with availability and details.</small></form></div></section>

    <section className="location section"><div className="location-copy"><div className="eyebrow">VISIT VATAVARAN</div><h2>Easy to find.<br/><em>Easy to remember.</em></h2><p>{address}</p><a className="inline-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank">Open in Google Maps <ArrowUpRight size={16}/></a></div><div className="map-card"><div className="map-grid"/><MapPin size={32}/><span>KALABURAGI</span></div></section>

    <section className="faq section" id="faq"><div className="faq-head"><div className="eyebrow">QUESTIONS</div><h2>Before you<br/><em>celebrate.</em></h2></div><div>{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown className={openFaq===i?'rot':''} size={19}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="final"><div className="eyebrow light">VATAVARAN BANQUETS & LAWNS</div><h2>Ready to celebrate?</h2><p>Your moment starts with a date.</p><a className="button light-button" href="#enquire">Check Availability <ArrowUpRight size={17}/></a></section>

    <footer><div className="footer-brand"><span className="brand-mark">V</span><div><strong>VATAVARAN</strong><small>Banquets & Lawns · Kalaburagi</small></div></div><div className="footer-links"><a href="#venue">Venue</a><a href="#occasions">Occasions</a><a href="#gallery">Gallery</a><a href="#enquire">Enquire</a></div><div className="footer-address">{address}</div><div className="copyright">© 2026 Vatavaran Banquets & Lawns</div></footer>

    <a className="floating-wa" href={waLink()} aria-label="WhatsApp Vatavaran"><MessageCircle size={22}/><span>WhatsApp</span></a>

    {activeGallery && <div className="lightbox" onClick={()=>setActiveGallery(null)}><button className="close" onClick={()=>setActiveGallery(null)}><X/></button><img src={activeGallery[1]} alt={activeGallery[0]}/><div>{activeGallery[0]}</div></div>}
    {modal && <div className="setup-modal"><div><button className="close" onClick={()=>setModal(false)}><X/></button><Sparkles size={28}/><h3>One small setup step</h3><p>Replace <code>YOUR_WHATSAPP_NUMBER</code> in <code>app/page.js</code> with the venue WhatsApp number. The enquiry form will then open a pre-filled WhatsApp message automatically.</p><button className="button dark-button" onClick={()=>setModal(false)}>Got it</button></div></div>}
  </main>;
}

function Feature({n,title,text}){return <div className="feature"><span>{n}</span><h3>{title}</h3><p>{text}</p></div>}
