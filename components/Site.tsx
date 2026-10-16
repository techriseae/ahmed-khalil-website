'use client';
import { useEffect, useState } from 'react';
import {
  ArrowRight, BarChart3, Blocks, BrainCircuit, Box, Calculator, Code2, Github, LayoutGrid,
  Linkedin, Mail, MapPin, MessageCircle, Phone, Menu, MessageSquare, Moon, Package, Play, Search, Settings2, ShieldCheck, ShoppingCart,
  Sun, TrendingUp, Users, Workflow, X, Youtube, Cpu, Award, Briefcase, ClipboardList, Rocket, LifeBuoy,
} from 'lucide-react';

type Language = 'en' | 'ar';

/* Real links only. */
const LINKS = {
  linkedin: 'https://www.linkedin.com/in/ahmed-khalil-7092b9433',
  github: 'https://github.com/techriseae',
  youtube: 'https://youtu.be/_FhJ2tRW_p4',
  mcp: 'https://apps.odoo.com/apps/modules/19.0/techrise_mcp_server',
  asset: 'https://apps.odoo.com/apps/modules/19.0/techrise_it_asset',
  flowforge: 'https://apps.odoo.com/apps/modules/19.0/flowforge_workflow',
  apps: 'https://apps.odoo.com/apps/browse?author=Ahmed%20Khalil',
  whatsapp: 'https://wa.me/971568765209',
};
const CONTACT_EMAIL = 'ahmedkhaliln13@gmail.com';
const PHONE = '+971568765209';
const PHONE_LABEL = '+971 56 876 5209';

const data = {
  en: {
    nav: ['Home', 'About', 'Services', 'Portfolio', 'Odoo Apps', 'Academy', 'Contact'],
    book: 'Book a Consultation', badge: '8+ Years of Experience',
    role: 'Odoo ERP Expert', tagline: 'Building Smarter Businesses with Odoo & AI',
    intro: 'I help businesses across the UAE, GCC and worldwide implement, customize and integrate Odoo ERP to simplify operations and accelerate growth.',
    watch: 'View Introduction',
    stats: [['8+', 'Years', 'Experience'], ['2', 'Odoo', 'Certifications'], ['3', 'Odoo Apps', 'Published'], ['EN·AR', 'Bilingual', 'Tutorials']],
    transform: 'Transform Your Business with Odoo',
    trusted: 'Built with a modern, proven ERP stack',
    servicesTag: 'Services', servicesTitle: 'How I Can Help Your Business', servicesDesc: 'End-to-end Odoo solutions tailored to your business needs.', viewServices: 'View All Services',
    services: [
      ['Odoo Implementation', 'Complete Odoo setup and customization tailored to your business processes.', ['Business Analysis', 'Module Configuration', 'Data Migration', 'User Training & Support']],
      ['Custom Development', 'Build custom modules and features to extend Odoo based on your unique needs.', ['Custom Modules', 'Workflow Automation', 'API Development', 'Web & Mobile Integration']],
      ['AI & Integrations', 'Integrate Odoo with AI and third-party systems to automate and streamline operations.', ['AI Agents & Automation', 'External System Integration', 'MCP Server', 'Data Synchronization']],
      ['Technical Audit & Optimization', 'Improve your existing Odoo system performance, security and efficiency.', ['System Audit', 'Performance Optimization', 'Security Enhancement', 'Ongoing Technical Support']],
    ],
    projectsTag: 'Featured Projects', projectsTitle: 'Selected Projects', projectsDesc: 'A selection of my recent work in Odoo implementation, customization and integration.', viewProjects: 'View All Projects',
    projects: [
      ['Construction ERP', 'Complete ERP solution for construction companies with project management, costing, CAD quantity takeoff and estimating.', ['Construction', 'Project Management', 'Odoo']],
      ['FlowForge', 'Visual workflow engine for Odoo with custom approval rules and multi-level approvals.', ['Workflow', 'Automation', 'Approvals']],
      ['AI Agent Integration', 'AI-powered assistant integrated with Odoo using an MCP server for smart automation.', ['AI', 'MCP', 'Integration']],
      ['Fleet Locator', 'Real-time fleet tracking integrated with Odoo Fleet on a live truck map.', ['GPS', 'Tracking', 'Real-Time']],
    ],
    appsTag: 'Odoo Apps', appsTitle: 'My Odoo Apps', appsDesc: 'Ready-to-use modules to extend your Odoo system.', viewApps: 'View All Apps', free: 'Free',
    apps: [
      ['MCP Server', 'Connect Odoo with AI agents using MCP (Model Context Protocol).', ['AI', 'Integration', 'Open Source']],
      ['IT Asset Management', 'Complete IT asset management solution for Odoo.', ['Assets', 'Maintenance', 'Reports']],
      ['FlowForge', 'Advanced approval workflow engine with flexible rules and conditions.', ['Workflow', 'Approvals', 'Enterprise Ready']],
    ],
    academyTag: 'Academy', academyTitle: 'Odoo Explained', academyDesc: 'Step-by-step video tutorials in Arabic and English to help you master Odoo.',
    courseA: 'Odoo 20', courseB: 'Enterprise', courseC: 'Complete Course', lessonsCount: '147 Lessons', playlist: 'View Full Playlist',
    lessons: [['How Odoo 20 Runs an Entire Business', '6 min'], ['Enterprise vs Community', '8 min'], ['Meet Our Case Company', '7 min'], ['Navigating the Odoo 20 Interface', '12 min']],
    aboutTag: 'About Me', aboutRole: 'Odoo ERP Expert | Developer | Consultant',
    aboutCopy: 'I’m an Odoo consultant and developer with over 8 years of experience helping businesses implement, customize and integrate Odoo ERP. I am also the Founder & CEO of TechRise, where we build innovative solutions to help companies grow with Odoo and modern technologies.',
    cert18: 'Odoo 18', cert19: 'Odoo 19', certified: 'Certified', founder: 'Founder & CEO', passion: 'Passionate About Odoo, AI and Business Growth',
    processTag: 'How I Work', processTitle: 'From Discovery to Go-Live', processDesc: 'A clear, practical process for every Odoo engagement.',
    process: [['Discover & Design', 'Understand your processes and map them to the right Odoo apps and customizations.'], ['Build & Integrate', 'Configure, develop and connect Odoo to your existing systems, devices and AI tools.'], ['Launch & Support', 'Migrate your data, train your team and keep the system fast, secure and up to date.']],
    contactTag: 'Get In Touch', contactTitle: 'Let’s Work Together', contactDesc: 'Have a project in mind? Let’s discuss how I can help your business grow with Odoo.',
    location: 'Dubai, UAE', name: 'Your Name', email: 'Your Email', message: 'Your Message', send: 'Send Message',
    footerRole: 'Odoo ERP Expert', footerLine: 'Turning Business Challenges into Smart Odoo Solutions.', quick: 'Quick Links', follow: 'Follow Me', rights: 'All rights reserved.',
    theme: 'Toggle theme', menu: 'Menu',
  },
  ar: {
    nav: ['الرئيسية', 'عني', 'الخدمات', 'أعمالي', 'تطبيقات أودو', 'الأكاديمية', 'تواصل'],
    book: 'احجز استشارة', badge: 'خبرة أكثر من ٨ سنوات',
    role: 'خبير Odoo ERP', tagline: 'أبني أعمالًا أذكى باستخدام أودو والذكاء الاصطناعي',
    intro: 'أساعد الشركات في الإمارات والخليج وحول العالم على تنفيذ وتخصيص وربط نظام أودو لتبسيط العمليات وتسريع النمو.',
    watch: 'شاهد المقدمة',
    stats: [['+8', 'سنوات', 'الخبرة'], ['2', 'شهادات', 'أودو'], ['3', 'تطبيقات', 'منشورة'], ['EN·AR', 'شروحات', 'بلغتين']],
    transform: 'طوّر أعمالك مع أودو',
    trusted: 'مبني على تقنيات ERP حديثة وموثوقة',
    servicesTag: 'الخدمات', servicesTitle: 'كيف أساعد أعمالك', servicesDesc: 'حلول أودو متكاملة مصممة حسب احتياجات شركتك.', viewServices: 'كل الخدمات',
    services: [
      ['تنفيذ أودو', 'إعداد وتخصيص أودو بالكامل بما يناسب إجراءات عملك.', ['تحليل الأعمال', 'إعداد الموديولات', 'ترحيل البيانات', 'تدريب ودعم المستخدمين']],
      ['التطوير المخصص', 'تطوير موديولات وخصائص جديدة توسّع أودو حسب احتياجك.', ['موديولات مخصصة', 'أتمتة سير العمل', 'تطوير API', 'ربط الويب والموبايل']],
      ['الذكاء الاصطناعي والتكامل', 'ربط أودو بالذكاء الاصطناعي والأنظمة الخارجية لأتمتة العمليات.', ['وكلاء ذكاء اصطناعي', 'ربط الأنظمة الخارجية', 'MCP Server', 'مزامنة البيانات']],
      ['المراجعة الفنية والتحسين', 'تحسين أداء وأمان وكفاءة نظام أودو الحالي لديك.', ['مراجعة النظام', 'تحسين الأداء', 'تعزيز الأمان', 'دعم فني مستمر']],
    ],
    projectsTag: 'مشاريع مميزة', projectsTitle: 'مشاريع مختارة', projectsDesc: 'مجموعة من أحدث أعمالي في تنفيذ وتخصيص وتكامل أودو.', viewProjects: 'كل المشاريع',
    projects: [
      ['أودو للمقاولات', 'نظام ERP متكامل لشركات المقاولات: إدارة المشاريع والتكاليف وحساب الكميات من CAD والتسعير.', ['مقاولات', 'إدارة مشاريع', 'Odoo']],
      ['FlowForge', 'محرك سير عمل مرئي لأودو بقواعد موافقات مخصصة ومتعددة المستويات.', ['سير العمل', 'أتمتة', 'موافقات']],
      ['تكامل وكلاء الذكاء الاصطناعي', 'مساعد ذكي مرتبط بأودو عبر MCP Server لأتمتة ذكية.', ['AI', 'MCP', 'تكامل']],
      ['Fleet Locator', 'تتبع الأسطول لحظيًا على خريطة حية داخل أودو.', ['GPS', 'تتبع', 'لحظي']],
    ],
    appsTag: 'تطبيقات أودو', appsTitle: 'تطبيقاتي على أودو', appsDesc: 'موديولات جاهزة لتوسيع نظام أودو لديك.', viewApps: 'كل التطبيقات', free: 'مجاني',
    apps: [
      ['MCP Server', 'ربط أودو بوكلاء الذكاء الاصطناعي عبر بروتوكول MCP.', ['AI', 'تكامل', 'مفتوح المصدر']],
      ['إدارة أصول تقنية المعلومات', 'حل متكامل لإدارة أصول IT داخل أودو.', ['أصول', 'صيانة', 'تقارير']],
      ['FlowForge', 'محرك موافقات متقدم بقواعد وشروط مرنة.', ['سير العمل', 'موافقات', 'جاهز للمؤسسات']],
    ],
    academyTag: 'الأكاديمية', academyTitle: 'Odoo Explained', academyDesc: 'شروحات فيديو خطوة بخطوة بالعربية والإنجليزية لإتقان أودو.',
    courseA: 'Odoo 20', courseB: 'Enterprise', courseC: 'الكورس الكامل', lessonsCount: '147 درسًا', playlist: 'قائمة التشغيل كاملة',
    lessons: [['كيف يدير أودو 20 الشركة بالكامل', '6 د'], ['النسخة Enterprise مقابل Community', '8 د'], ['تعرّف على الشركة التطبيقية', '7 د'], ['التنقل في واجهة أودو 20', '12 د']],
    aboutTag: 'عني', aboutRole: 'خبير Odoo ERP | مطوّر | مستشار',
    aboutCopy: 'أنا مستشار ومطوّر أودو بخبرة تزيد عن 8 سنوات في مساعدة الشركات على تنفيذ وتخصيص وربط Odoo ERP. وأنا أيضًا المؤسس والرئيس التنفيذي لشركة TechRise، حيث نبني حلولًا مبتكرة تساعد الشركات على النمو مع أودو والتقنيات الحديثة.',
    cert18: 'Odoo 18', cert19: 'Odoo 19', certified: 'معتمد', founder: 'المؤسس والرئيس التنفيذي', passion: 'شغوف بأودو والذكاء الاصطناعي ونمو الأعمال',
    processTag: 'طريقة عملي', processTitle: 'من التحليل حتى التشغيل', processDesc: 'منهجية واضحة وعملية لكل مشروع أودو.',
    process: [['التحليل والتصميم', 'أفهم إجراءات عملك وأربطها بتطبيقات وتخصيصات أودو المناسبة.'], ['البناء والتكامل', 'إعداد وتطوير أودو وربطه بأنظمتك وأجهزتك وأدوات الذكاء الاصطناعي.'], ['التشغيل والدعم', 'ترحيل البيانات وتدريب الفريق والحفاظ على سرعة النظام وأمانه.']],
    contactTag: 'تواصل معي', contactTitle: 'لنعمل معًا', contactDesc: 'عندك مشروع؟ خلّينا نناقش كيف أقدر أساعد شركتك تنمو مع أودو.',
    location: 'دبي، الإمارات', name: 'الاسم', email: 'البريد الإلكتروني', message: 'رسالتك', send: 'إرسال الرسالة',
    footerRole: 'خبير Odoo ERP', footerLine: 'أحوّل تحديات الأعمال إلى حلول أودو ذكية.', quick: 'روابط سريعة', follow: 'تابعني', rights: 'جميع الحقوق محفوظة.',
    theme: 'تبديل المظهر', menu: 'القائمة',
  },
} as const;

const ids = ['home', 'about', 'services', 'portfolio', 'apps', 'academy', 'contact'];
const serviceIcons = [Box, Code2, BrainCircuit, Settings2];
const appIcons = [Box, LayoutGrid, Workflow];
const appPrices = ['free', '$49', '$149'];
const appLinks = [LINKS.mcp, LINKS.asset, LINKS.flowforge];
const processIcons = [ClipboardList, Rocket, LifeBuoy];
const stack = ['odoo', 'Python', 'PostgreSQL', 'docker', 'aws', 'Flutter', 'Linux', 'Nginx'];

function Dashboard({ t }: { t: (typeof data)[Language] }) {
  const menu: [typeof Users, string][] = [[MessageSquare, 'Discuss'], [TrendingUp, 'Sales'], [Package, 'Inventory'], [Calculator, 'Accounting'], [Users, 'Employees'], [LayoutGrid, 'Apps']];
  return (
    <div className="dash" aria-hidden="true" dir="ltr">
      <aside className="dash-side">
        <b className="odoo-word">odoo</b>
        {menu.map(([I, l]) => <span key={l}><I size={11} />{l}</span>)}
      </aside>
      <div className="dash-main">
        <div className="dash-title">Dashboard</div>
        <div className="dash-kpis">
          {[['Sales', ShoppingCart], ['Purchase', Briefcase], ['Customers', Users], ['Projects', Blocks]].map(([l, I]: any) => (
            <div key={l}><small>{l}</small><I size={14} /><i className="spark"><em /><em /><em /><em /><em /></i></div>
          ))}
        </div>
        <div className="dash-row">
          <div className="dash-card"><small>Revenue</small><div className="bars">{[22, 34, 28, 45, 40, 58, 52, 76].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}</div></div>
          <div className="dash-card"><small>Top Modules</small><div className="donut-wrap"><div className="donut" /><ul><li>Sales</li><li>Inventory</li><li>Accounting</li><li>Others</li></ul></div></div>
        </div>
      </div>
      <div className="dash-float"><BarChart3 size={26} /><span>{t.transform}</span></div>
    </div>
  );
}

function ProjectArt({ i }: { i: number }) {
  if (i === 0) return (
    <div className="art art-construction" aria-hidden="true">
      <svg viewBox="0 0 220 110" className="crane"><path d="M30 105V18h4v87zM20 20h150v4H20zM34 20l20-12 2 3-20 12zM150 24v34" stroke="#f2a33a" strokeWidth="3" fill="none" /><path d="M12 105h70V60H12z" fill="#c7cbd6" /><path d="M18 66h10v8H18zm16 0h10v8H34zm16 0h10v8H50zM18 80h10v8H18zm16 0h10v8H34zm16 0h10v8H50z" fill="#8a90a3" /></svg>
      <div className="art-panel"><div className="pie" /><div className="mini-bars">{[30, 50, 40, 70, 90].map((h, k) => <i key={k} style={{ height: h + '%' }} />)}</div></div>
    </div>
  );
  if (i === 1) return (
    <div className="art art-flow" aria-hidden="true">
      <svg viewBox="0 0 220 110"><g stroke="#8b6ce0" strokeWidth="1.5" fill="none"><path d="M40 55h30M100 55l25-22M100 55l25 22M155 33h25M155 77h25" /></g>
        <rect x="14" y="47" width="28" height="16" rx="4" fill="#6c4ad6" /><rect x="70" y="45" width="30" height="20" rx="4" fill="#fff" stroke="#c9bdf2" />
        <rect x="125" y="24" width="30" height="18" rx="4" fill="#fff" stroke="#c9bdf2" /><rect x="125" y="68" width="30" height="18" rx="4" fill="#fff" stroke="#c9bdf2" />
        <circle cx="190" cy="33" r="8" fill="#3cb371" /><circle cx="190" cy="77" r="8" fill="#e05b5b" /></svg>
    </div>
  );
  if (i === 2) return (
    <div className="art art-ai" aria-hidden="true">
      <div className="bot"><Cpu size={38} /></div>
      <div className="chat"><i /><i className="me" /><i /><i className="me short" /></div>
    </div>
  );
  return (
    <div className="art art-map" aria-hidden="true">
      <svg viewBox="0 0 220 110"><path d="M0 70C40 60 60 85 100 72s70-30 120-18" stroke="#fff" strokeWidth="5" fill="none" /><path d="M60 0c10 40-20 70 10 110M150 0c-15 40 20 70 0 110" stroke="#fff" strokeWidth="3" fill="none" />
        {[[70, 45], [140, 30], [170, 70], [100, 82]].map(([x, y], k) => <g key={k}><circle cx={x} cy={y} r="9" fill="#f2a33a" /><circle cx={x} cy={y} r="3.5" fill="#fff" /></g>)}</svg>
      <div className="map-list"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

export default function Site() {
  const [lang, setLang] = useState<Language>('en');
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const t = data[lang];
  const rtl = lang === 'ar';

  useEffect(() => {
    try {
      const l = localStorage.getItem('ak-lang'); const d = localStorage.getItem('ak-dark');
      if (l === 'ar' || l === 'en') setLang(l);
      if (d === '1') setDark(true);
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    try { localStorage.setItem('ak-lang', lang); localStorage.setItem('ak-dark', dark ? '1' : '0'); } catch {}
  }, [lang, dark, rtl]);
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (CONTACT_EMAIL) {
      const body = encodeURIComponent(`${form.message}\n\n${form.name} <${form.email}>`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Odoo project — ' + form.name)}&body=${body}`;
    } else {
      window.open(LINKS.linkedin, '_blank', 'noopener');
    }
  };

  const Arrow = ({ s = 16 }: { s?: number }) => <ArrowRight size={s} className="flip" />;

  return (
    <div className={'site' + (dark ? ' dark' : '')} dir={rtl ? 'rtl' : 'ltr'}>
      <header className="header">
        <div className="container navrow">
          <a className="brand" href="#home"><b>Ahmed Khalil</b><small>{t.footerRole}</small></a>
          <nav className={open ? 'navlinks open' : 'navlinks'} aria-label="Main">
            {t.nav.map((n, i) => <a key={ids[i]} href={'#' + ids[i]} className={i === 0 ? 'active' : ''} onClick={() => setOpen(false)}>{n}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="icon-btn hide-sm" href="#services" aria-label="Search"><Search size={16} /></a>
            <div className="lang" role="group" aria-label="Language">
              <button className={!rtl ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={!rtl}>EN</button>
              <button className={rtl ? 'on' : ''} onClick={() => setLang('ar')} aria-pressed={rtl}>AR</button>
            </div>
            <button className="icon-btn" onClick={() => setDark(!dark)} aria-label={t.theme}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
            <a className="btn btn-sm hide-sm" href="#contact">{t.book}<Arrow s={15} /></a>
            <button className="icon-btn mobile-menu" aria-label={t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill-badge"><i />{t.badge}</span>
              <h1>Ahmed <span>Khalil</span></h1>
              <h2><span>{t.role}</span> | {t.tagline}</h2>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-buttons">
                <a className="btn" href="#contact">{t.book}<Arrow /></a>
                <a className="btn btn-ghost" href={LINKS.youtube} target="_blank" rel="noreferrer"><Play size={15} />{t.watch}</a>
              </div>
              <div className="hero-stats">
                {t.stats.map(([n, a, b]) => <div key={a + b}><strong>{n}</strong><span>{a}<br />{b}</span></div>)}
              </div>
            </div>
            <div className="hero-photo">
              <span className="signature" aria-hidden="true">Ahmed Khalil</span>
              <img src="/ahmed-cutout.webp" alt="Ahmed Khalil" width={800} height={980} />
            </div>
            <div className="hero-dash"><Dashboard t={t} /></div>
          </div>
        </section>

        <div className="trusted">
          <div className="container trusted-row">
            <p>{t.trusted}</p>
            <ul>{stack.map((s) => <li key={s} className={'tech tech-' + s.toLowerCase()}>{s}</li>)}</ul>
          </div>
        </div>

        <section className="section" id="services">
          <div className="container">
            <div className="sec-head reveal">
              <div><span className="tag">{t.servicesTag}</span><h2>{t.servicesTitle}</h2><p>{t.servicesDesc}</p></div>
              <a className="outline-link" href="#contact">{t.viewServices}<Arrow s={14} /></a>
            </div>
            <div className="grid4">
              {t.services.map(([name, desc, items], i) => {
                const I = serviceIcons[i];
                return (
                  <article className="card service reveal" key={name}>
                    <div className="sq-icon"><I size={20} /></div>
                    <h3>{name}</h3><p>{desc}</p>
                    <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section soft" id="portfolio">
          <div className="container">
            <div className="sec-head reveal">
              <div><span className="tag">{t.projectsTag}</span><h2>{t.projectsTitle}</h2><p>{t.projectsDesc}</p></div>
              <a className="outline-link" href={LINKS.github} target="_blank" rel="noreferrer">{t.viewProjects}<Arrow s={14} /></a>
            </div>
            <div className="grid4">
              {t.projects.map(([name, desc, tags], i) => (
                <article className="card project reveal" key={name}>
                  <div className="project-img"><ProjectArt i={i} /><span className="round-arrow"><Arrow s={14} /></span></div>
                  <div className="project-body"><h3>{name}</h3><p>{desc}</p><div className="chips">{tags.map((x) => <span key={x}>{x}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="apps">
          <div className="container">
            <div className="sec-head reveal">
              <div><span className="tag">{t.appsTag}</span><h2>{t.appsTitle}</h2><p>{t.appsDesc}</p></div>
              <a className="outline-link" href={LINKS.apps} target="_blank" rel="noreferrer">{t.viewApps}<Arrow s={14} /></a>
            </div>
            <div className="grid3">
              {t.apps.map(([name, desc, tags], i) => {
                const I = appIcons[i]; const p = appPrices[i];
                return (
                  <a className="card app reveal" key={name} href={appLinks[i]} target="_blank" rel="noreferrer">
                    <div className={'app-icon app-' + i}><I size={26} /></div>
                    <div className="app-body">
                      <div className="app-top"><h3>{name}</h3><span className={'price price-' + i}>{p === 'free' ? t.free : p}</span></div>
                      <p>{desc}</p>
                      <div className="chips">{tags.map((x) => <span key={x}>{x}</span>)}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section soft split" id="academy">
          <div className="container split-grid">
            <div className="reveal">
              <span className="tag">{t.academyTag}</span><h2 className="h2">{t.academyTitle}</h2><p className="muted">{t.academyDesc}</p>
              <div className="academy-box">
                <a className="thumb" href={LINKS.youtube} target="_blank" rel="noreferrer" aria-label={t.academyTitle}>
                  <img src="/ahmed-cutout.webp" alt="" />
                  <div className="thumb-text"><b>{t.courseA}</b><b>{t.courseB}</b><span>{t.courseC}</span></div>
                  <span className="play"><Play size={18} fill="currentColor" /></span>
                  <small className="thumb-foot">{t.lessonsCount}</small>
                </a>
                <div className="lesson-list">
                  <ol>{t.lessons.map(([l, d], i) => <li key={l}><em>0{i + 1}</em><span>{l}</span><time>{d}</time></li>)}</ol>
                  <a className="outline-link" href={LINKS.youtube} target="_blank" rel="noreferrer">{t.playlist}<Arrow s={14} /></a>
                </div>
              </div>
            </div>

            <div className="reveal" id="about">
              <span className="tag">{t.aboutTag}</span>
              <div className="about-grid">
                <div>
                  <h2 className="h2">Ahmed Khalil</h2>
                  <p className="about-role">{t.aboutRole}</p>
                  <p className="muted">{t.aboutCopy}</p>
                  <div className="creds">
                    <span><Award size={16} /><b>{t.cert18}</b><small>{t.certified}</small></span>
                    <span><Award size={16} /><b>{t.cert19}</b><small>{t.certified}</small></span>
                    <span><ShieldCheck size={16} /><b>{t.founder}</b><small>TechRise</small></span>
                  </div>
                </div>
                <div className="about-photo">
                  <img src="/ahmed-cutout.webp" alt="Ahmed Khalil" />
                  <div className="about-note"><Arrow s={18} /><span>{t.passion}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section split" id="contact">
          <div className="container split-grid">
            <div className="reveal">
              <span className="tag">{t.processTag}</span><h2 className="h2">{t.processTitle}</h2><p className="muted">{t.processDesc}</p>
              <div className="grid3 process">
                {t.process.map(([h, p], i) => {
                  const I = processIcons[i];
                  return <article className="card" key={h}><div className="sq-icon"><I size={18} /></div><h3>{h}</h3><p>{p}</p><span className="step">0{i + 1}</span></article>;
                })}
              </div>
            </div>
            <div className="reveal contact-grid">
              <div>
                <span className="tag">{t.contactTag}</span><h2 className="h2">{t.contactTitle}</h2><p className="muted">{t.contactDesc}</p>
                <ul className="contact-list">
                  <li><MapPin size={15} />{t.location}</li>
                  <li><Mail size={15} /><a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a></li>
                  <li><Phone size={15} /><a href={'tel:' + PHONE} dir="ltr">{PHONE_LABEL}</a></li>
                  <li><MessageCircle size={15} /><a href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
                  <li><Linkedin size={15} /><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                  <li><Youtube size={15} /><a href={LINKS.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
                  <li><Github size={15} /><a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
                <a className="btn btn-sm" href={LINKS.whatsapp} target="_blank" rel="noreferrer">{t.book}<Arrow s={14} /></a>
              </div>
              <form className="card contact-form" onSubmit={send}>
                <label><span className="sr">{t.name}</span><input required placeholder={t.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
                <label><span className="sr">{t.email}</span><input required type="email" placeholder={t.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
                <label><span className="sr">{t.message}</span><textarea required rows={4} placeholder={t.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
                <button className="btn" type="submit">{t.send}<Arrow s={14} /></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><b className="f-brand">Ahmed Khalil</b><small>{t.footerRole}</small><p>{t.footerLine}</p></div>
          <div><h4>{t.quick}</h4><nav>{t.nav.map((n, i) => <a key={ids[i]} href={'#' + ids[i]}>{n}</a>)}</nav></div>
          <div><h4>{t.follow}</h4><div className="socials">
            <a href={LINKS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
            <a href={LINKS.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={16} /></a>
            <a href={LINKS.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={16} /></a>
            <a href={'mailto:' + CONTACT_EMAIL} aria-label="Email"><Mail size={16} /></a>
            <a href={LINKS.whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={16} /></a>
          </div></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ahmed Khalil. {t.rights}</span></div>
      </footer>
    </div>
  );
}
