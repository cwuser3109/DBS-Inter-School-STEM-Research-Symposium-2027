'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock3, FlaskConical, MapPin, Menu, MoveUpRight, Presentation, Sparkles, Users, X } from 'lucide-react'

const SCHOOL_LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kWz818tZISEqOlF95ENc6RUluT6LsI.png'

export const navItems = [
  { label: 'Event Details', href: '/event-details' },
  { label: 'Advisory & Leadership', href: '/academic-advisor' },

  { label: 'FAQ & Contact', href: '/faq&contact' },
]

export function SymposiumShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f6f8] text-[#14233d] [&_*]:!font-normal">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-b-3xl bg-[#14233d] px-4 py-4 text-white lg:px-10 lg:py-5">
        
        {/* LOGO & TITLE */}
        <a href="/" className="flex items-center gap-2 lg:gap-3" aria-label="DBS Inter-School STEM Research Symposium 2026–2027 symposium home">
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-white/30 lg:size-11">
            <img src={SCHOOL_LOGO_URL} alt="DBS school crest" className="size-8 object-contain lg:size-10" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-[-.04em] text-white lg:text-sm">
            <span className="max-w-[8rem] leading-tight sm:max-w-[12rem]">
              DBS Inter-School STEM Research Symposium 2026–2027
            </span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        {/* ACTION BUTTONS (Visible on all sizes) */}
        <div className="flex items-center gap-2 lg:gap-4">
          
          {/* JOIN BUTTON */}
          <a 
            href="https://DBSSTEMSymposiumkickoff.eventbrite.hk" 
            target="_blank" 
            rel="noreferrer" 
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#14233d] transition-transform hover:-translate-y-0.5 md:bg-[#14233d] md:px-5 md:py-3 md:text-sm md:text-white"
          >
            {/* Short text on mobile, long text on desktop */}
            <span className="md:hidden">Join Now</span>
            <span className="hidden md:inline">Join DBS Inter-School STEM Research Symposium 2026–2027</span>
            <ArrowRight className="ml-1 inline size-3 md:ml-2 md:size-4" aria-hidden="true" />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="rounded-full border border-[#d5dae2] p-2 md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

      </header>

      {/* MOBILE NAV DROPDOWN */}
      {menuOpen && (
        <nav className="mx-4 mt-2 flex flex-col gap-4 rounded-2xl border border-[#d5dae2] bg-white p-5 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-medium">
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {children}

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#657084] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-mono text-xs">DBS Inter-School STEM Research Symposium 2026–2027</p>
        <p>Made for the curious, by the curious.</p>
        <a href="/" className="underline underline-offset-4">Back to home <ChevronDown className="ml-1 inline size-3 rotate-180" aria-hidden="true" /></a>
      </footer>
    </main>
  )
}
export function HomePage() { return <SymposiumShell><section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-20"><div><div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-[#14233d]"><span className="h-px w-8 bg-[#14233d]" />STEM RESEARCH SYMPOSIUM</div><h1 className="max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-.05em] sm:text-6xl lg:text-7xl">Inspiring the Next Generation of Researchers</h1><div className="mt-8 max-w-2xl text-lg leading-8 text-[#657084]"><p>Founded and led entirely by secondary school students, the DBS Inter-School STEM Research Symposium was established on a simple belief: that every great discovery begins with curiosity.</p><p className="mt-6">Research is more than the pursuit of answers—it is the courage to ask meaningful questions, challenge assumptions, and explore the unknown. Through this Symposium, we aim to nurture a culture of inquiry and innovation among secondary school students, providing opportunities for young minds to develop their ideas, conduct original research, and engage with the broader academic community.</p><p className="mt-6">At the core of our event, student speakers take the stage to share the authentic human story behind their work—how their research journey first got started, how they overcame hurdles along the way, and the innovative findings that drive their passion.</p><p className="mt-6">By bringing together students, educators, researchers, and industry leaders, the Symposium seeks to foster intellectual exchange, promote academic excellence, and inspire the next generation of innovators to address real-world challenges through STEM.</p></div><div className="mt-10 flex flex-wrap items-center gap-4"><a href="/event-details" className="rounded-full bg-[#14233d] px-6 py-4 text-sm font-semibold text-white">Explore the program <ArrowRight className="ml-2 inline size-4" aria-hidden="true" /></a><a href="/academic-advisor" className="px-2 py-4 text-sm font-semibold text-[#14233d] underline decoration-[#14233d] decoration-2 underline-offset-8">Meet our advisor</a></div></div><div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#e1e4e9] p-7 sm:min-h-[520px]"><div className="absolute inset-7 rounded-[1.5rem] border border-[#aeb7c5]" /><div className="relative z-10 flex h-full min-h-[376px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white sm:min-h-[464px]"><img src="/kickoff-poster.png" alt="DBS Inter-School STEM Research Symposium Kickoff Lecture poster" className="h-full w-full object-contain" /></div></div></section><section className="border-t border-[#d5dae2] bg-[#14233d] px-6 py-16 lg:px-10 lg:py-24 text-white"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-5xl">Why Attend & What Sets Us Apart</h2></div><div className="grid gap-8 lg:grid-cols-3"><div className="rounded-3xl border border-[#56627a] bg-[#1a2c4a] p-8"><h3 className="text-xl font-medium text-[#c4cad5]">The "Super-Curricular" Edge</h3><p className="mt-4 leading-7 text-[#d8dde5]">For students aspiring toward competitive STEM degree programmes at top-tier universities (Oxbridge, Ivy League, and leading global research institutions), this platform offers invaluable guidance on super-curricular academic enrichment, research methodology, and navigating higher education in the age of AI.</p></div><div className="rounded-3xl border border-[#56627a] bg-[#1a2c4a] p-8"><h3 className="text-xl font-medium text-[#c4cad5]">Direct University Feedback</h3><p className="mt-4 leading-7 text-[#d8dde5]">Student research papers and poster sessions for the Spring 2027 Main Symposium will be evaluated directly by university professors and expert panels.</p></div><div className="rounded-3xl border border-[#56627a] bg-[#1a2c4a] p-8"><h3 className="text-xl font-medium text-[#c4cad5]">Student-Led & Authentic</h3><p className="mt-4 leading-7 text-[#d8dde5]">Built by students who understand the research journey firsthand, focusing on problem-solving, resilience, and scientific communication.</p></div></div></div></section><section className="border-y border-[#d5dae2] bg-white px-6 py-16 lg:px-10 lg:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><div className="flex items-center gap-3"><img src={SCHOOL_LOGO_URL} alt="DBS school crest" className="size-9 object-contain" /><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#14233d]">Our vision</p></div><h2 className="mt-5 max-w-md text-4xl font-medium leading-tight tracking-[-.06em] sm:text-5xl">Our Vision.</h2><p className="mt-5 max-w-md text-base leading-7 text-[#657084]">A symposium built to help young researchers explore boldly, share honestly, and grow together.</p></div><div className="grid gap-x-8 gap-y-8 sm:grid-cols-2"><VisionPoint title="Cultivate Curiosity" text="Foster a deep passion for scientific inquiry and discovery." /><VisionPoint title="Empower Young Minds" text="Empower students to undertake original research and independent learning." /><VisionPoint title="Share the Journey" text="Provide a platform where student speakers share how their research started and how they overcame hurdles." /><VisionPoint title="Highlight Innovation" text="Showcase original findings, creative problem-solving, and real-world impact." /><VisionPoint title="Build a Community" text="Connect young researchers with leading academics and professionals to foster collaboration across schools." /></div></div></div></section><section className="border-y border-[#d5dae2] bg-white px-6 py-16 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-10 max-w-2xl"><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#657084]">The two phases</p><h2 className="mt-4 text-4xl font-medium tracking-[-.05em]">Overview of the Two-Phase Initiative</h2><p className="mt-4 text-lg leading-8 text-[#657084]">The initiative is structured as a two-phase programme designed to inspire, prepare, and showcase student research across Hong Kong secondary schools.</p></div><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-3xl bg-[#14233d] p-8 text-white"><p className="font-mono text-xs uppercase tracking-[.18em] text-[#c4cad5]">Phase I</p><h3 className="mt-8 text-3xl font-medium">Inaugural Kickoff Lecture</h3><p className="mt-6 leading-7 text-[#d8dde5]">Friday, 27 Nov 2026<br />4:45 PM – 6:15 PM (Reception at 4:15 PM)<br />School Hall, Diocesan Boys&apos; School,<br />131 Argyle Street, Mongkok</p></article><article className="rounded-3xl border border-[#d5dae2] p-8"><p className="font-mono text-xs uppercase tracking-[.18em] text-[#657084]">Phase II</p><h3 className="mt-8 text-3xl font-medium">Main STEM Symposium</h3><p className="mt-6 leading-7 text-[#657084]">Spring 2027<br />Oral Presentations, Poster Sessions &amp; Expert Panels</p></article></div></div></section>

{/* NEW JOIN US SECTION */}
<section className="bg-[#e1e4e9] px-6 py-16 lg:px-10 lg:py-24">
  <div className="mx-auto max-w-4xl">
    <div className="rounded-[2rem] bg-white p-8 sm:p-12">
      <h2 className="text-4xl font-medium tracking-[-.05em] text-[#14233d] sm:text-5xl">Join Us for the Official Launch</h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#657084]">
        Admission to the Inaugural Kickoff Lecture is complimentary. Seats are allocated on a first-come, first-served basis. Pre-registration deadline is Friday, 20 November 2026.
      </p>
      <ul className="mt-6 max-w-2xl space-y-2 text-lg leading-8 text-[#657084]">
        <li><strong className="font-semibold text-[#14233d]">Target Audience:</strong> All secondary school students, parents, principals, and educators.</li>
        <li><strong className="font-semibold text-[#14233d]">Pre-registration Deadline:</strong> Friday, 20 November 2026.</li>
      </ul>
      <div className="mt-10 border-t border-[#d5dae2] pt-8">
        <a href="https://DBSSTEMSymposiumkickoff.eventbrite.hk" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#14233d] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
          Register on Eventbrite <MoveUpRight className="ml-2 size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</section>

</SymposiumShell> }
export function DetailsPage() { return <SymposiumShell><PageIntro  title="Overview of the Two-Phase Initiative" text="The initiative is structured as a two-phase programme designed to inspire, prepare, and showcase student research across Hong Kong secondary schools." /><section className="border-y border-[#d5dae2] bg-white px-6 py-16 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-3xl bg-[#14233d] p-8 text-white sm:p-10"><div className="flex items-center justify-between gap-4"><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#c4cad5]">Phase I</p><span className="rounded-full border border-white/30 px-3 py-1 font-mono text-xs text-white/80">01</span></div><h2 className="mt-12 text-4xl font-medium tracking-[-.06em] sm:text-5xl">Inaugural Kickoff Lecture</h2><div className="mt-10 flex flex-col gap-5 border-t border-[#56627a] pt-6 text-[#d8dde5]"><p><CalendarDays className="mr-3 inline size-5" aria-hidden="true" />Friday, 27 Nov 2026</p><p><Clock3 className="mr-3 inline size-5" aria-hidden="true" />4:45 PM – 6:15 PM <span className="text-[#aeb7c5]">(Reception at 4:15 PM)</span></p><p><MapPin className="mr-3 inline size-5" aria-hidden="true" />School Hall, Diocesan Boys&apos; School,<br className="sm:hidden" /> 131 Argyle Street, Mongkok</p></div></article><article className="rounded-3xl border border-[#d5dae2] p-8 sm:p-10"><div className="flex items-center justify-between gap-4"><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#657084]">Phase II</p><span className="rounded-full border border-[#aeb7c5] px-3 py-1 font-mono text-xs text-[#657084]">02</span></div><h2 className="mt-12 text-4xl font-medium tracking-[-.06em] text-[#14233d] sm:text-5xl">Main STEM Symposium</h2><div className="mt-10 border-t border-[#d5dae2] pt-6"><p className="flex items-center gap-3 text-lg font-medium text-[#14233d]"><CalendarDays className="size-5" aria-hidden="true" />Spring 2027</p><p className="mt-6 text-lg leading-8 text-[#657084]">Oral Presentations, Poster Sessions &amp; Expert Panels</p></div></article></div></div></section><section className="bg-white px-6 py-16 lg:px-10"><div className="mx-auto max-w-4xl"><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#657084]">Phase I</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] text-[#14233d] sm:text-4xl">Inaugural Kickoff Lecture</h2><p className="mt-6 text-lg leading-8 text-[#657084]">The Kickoff Lecture serves as the official launch of the DBS Inter-School STEM Research Symposium, introducing its vision to students, educators, and partner schools while attracting high-potential student researchers.</p><div className="mt-12"><h3 className="text-xl font-semibold text-[#14233d]">Keynote Presentation Details</h3><dl className="mt-6 space-y-4 rounded-2xl border border-[#d5dae2] p-6 sm:p-8"><div><dt className="text-sm font-semibold uppercase tracking-wide text-[#657084]">Theme</dt><dd className="mt-1 text-lg text-[#14233d]">AI, Academic Research, and the Future of Education</dd></div><div><dt className="text-sm font-semibold uppercase tracking-wide text-[#657084]">Speaker</dt><dd className="mt-1 text-lg text-[#14233d]">Professor Tony F. Chan<span className="block text-base text-[#657084]">Honorary Academic Advisor of the Symposium; Former President of HKUST &amp; KAUST</span></dd></div><div><dt className="text-sm font-semibold uppercase tracking-wide text-[#657084]">Date</dt><dd className="mt-1 text-lg text-[#14233d]">Friday, 27 November 2026</dd></div><div><dt className="text-sm font-semibold uppercase tracking-wide text-[#657084]">Time</dt><dd className="mt-1 text-lg text-[#14233d]">4:45 PM – 6:15 PM <span className="text-base text-[#657084]">(Reception begins at 4:15 PM)</span></dd></div><div><dt className="text-sm font-semibold uppercase tracking-wide text-[#657084]">Venue</dt><dd className="mt-1 text-lg text-[#14233d]">School Hall, Diocesan Boys&apos; School,<br />131 Argyle Street, Mongkok, Kowloon</dd></div></dl></div><div className="mt-12"><h3 className="text-xl font-semibold text-[#14233d]">Program Highlights</h3><ul className="mt-6 space-y-6"><li className="flex gap-4"><span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">1</span><div><p className="font-semibold text-[#14233d]">Official Launch &amp; Vision</p><p className="mt-1 leading-7 text-[#657084]">Introduction to the Symposium&apos;s mission and how secondary school students across Hong Kong can participate to share their research journeys and findings.</p></div></li><li className="flex gap-4"><span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">2</span><div><p className="font-semibold text-[#14233d]">Keynote Address</p><p className="mt-1 leading-7 text-[#657084]">World-class insights from Prof. Tony F. Chan on AI, academic research, and the future of education.</p></div></li><li className="flex gap-4"><span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">3</span><div><p className="font-semibold text-[#14233d]">Symposium Preview</p><p className="mt-1 leading-7 text-[#657084]">An advance preview for the Spring 2027 main event.</p></div></li><li className="flex gap-4"><span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">4</span><div><p className="font-semibold text-[#14233d]">Welcome Reception</p><p className="mt-1 leading-7 text-[#657084]">Networking opportunities for teachers, students, parents, and academic leaders.</p></div></li></ul></div></div></section><section className="border-t border-[#d5dae2] bg-[#f7f8fa] px-6 py-16 lg:px-10"><div className="mx-auto max-w-4xl"><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#657084]">Phase II</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] text-[#14233d] sm:text-4xl">Main Symposium (Spring 2027)</h2><p className="mt-6 text-lg leading-8 text-[#657084]">The flagship main event offers high-potential student researchers a dedicated platform to present original research, receive expert academic feedback, and connect with peers across Hong Kong.</p><p className="mt-4 text-lg leading-8 text-[#657084]">Full guidelines and submission portal details will be officially released following the lecture.</p><div className="mt-12"><h3 className="text-xl font-semibold text-[#14233d]">Key Program Roadmap</h3><div className="mt-6 overflow-hidden rounded-2xl border border-[#d5dae2] bg-white"><table className="w-full border-collapse text-left"><thead><tr className="border-b border-[#d5dae2] bg-[#14233d] text-white"><th scope="col" className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Stage</th><th scope="col" className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Schedule</th></tr></thead><tbody><tr className="border-b border-[#d5dae2]"><td className="px-6 py-5 text-lg font-medium text-[#14233d]">Phase I: Kickoff Lecture</td><td className="px-6 py-5 text-lg text-[#657084]">27 November 2026</td></tr><tr className="border-b border-[#d5dae2]"><td className="px-6 py-5 text-lg font-medium text-[#14233d]">Abstract Submissions, Project Review &amp; Selection</td><td className="px-6 py-5 text-lg text-[#657084]">Early 2027</td></tr><tr><td className="px-6 py-5 text-lg font-medium text-[#14233d]">Main Symposium Event</td><td className="px-6 py-5 text-lg text-[#657084]">Spring 2027</td></tr></tbody></table></div></div></div></section></SymposiumShell> }

export function Iamveryinterestedinthesymposium() { 
  return (
    <SymposiumShell>
      <PageIntro 
        title={<>Thank you for your <em className="font-sans font-normal not-italic text-[#14233d]">interest</em></>} 
        text="We are thrilled by the overwhelming response to the DBS Inter-School STEM Research Symposium 2027." 
      />
      
      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-[#d5dae2] bg-white p-8 sm:p-12">
          <p className="text-2xl leading-10 tracking-[-.03em] text-[#14233d]">
            Thank you for your interest in our event. 
          </p>
          <p className="mt-6 text-lg leading-8 text-[#657084]">
            Here is a muffin for your efforts and interest. 🧁 Further updates regarding the Symposium will be shared with registered participants and our partner schools. If you have any immediate questions, please feel free to contact us.
          </p>
          
          <div className="mt-10 border-t border-[#d5dae2] pt-8">
            <a 
              href="/faq" 
              className="inline-flex items-center rounded-full bg-[#14233d] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View FAQ & Contact Info
            </a>
          </div>
        </div>
      </section>
    </SymposiumShell> 
  ) 
}

export function AdvisorPage() { return <SymposiumShell><PageIntro  title={<>Honorary Academic <em className="font-sans font-normal not-italic text-[#14233d]">Advisor</em></>} text="Professor Tony F. Chan is the Honorary Academic Advisor for the DBS Inter-School STEM Research Symposium 2027." /><section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div className="relative aspect-square max-w-md overflow-hidden rounded-[2rem] bg-[#e1e4e9] p-8"><div className="relative h-full overflow-hidden rounded-[1.3rem] bg-[#c7cdd6]"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2pLQ0SV2zpvj9XiTUSxvMzGtN2X7Rs.png" alt="Professor Tony F. Chan, Honorary Academic Advisor" className="absolute left-1/2 top-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 scale-[3.8] object-cover object-[50%_48%]" /></div></div><div className="flex flex-col justify-center"><p className="max-w-xl text-lg leading-8 text-[#657084]">The DBS Inter-School STEM Research Symposium is deeply honoured to have Professor Tony F. Chan serve as its Honorary Academic Advisor.<br /><br />Professor Chan is an internationally renowned mathematician and academic leader, having served as President of both the Hong Kong University of Science and Technology (HKUST) and King Abdullah University of Science and Technology (KAUST). Throughout his distinguished career, he has championed innovation, interdisciplinary research, and the development of future generations of scientists, engineers, and scholars.<br /><br />Sharing the Symposium&apos;s vision of nurturing young researchers, Professor Chan provides guidance and support to help cultivate a meaningful platform where students can explore their intellectual curiosity, engage in research, and develop the confidence to pursue ambitious ideas.</p><div className="mt-9 flex flex-wrap gap-3"><span className="rounded-full border border-[#aeb7c5] px-4 py-2 text-sm">Honorary Academic Advisor</span><span className="rounded-full border border-[#aeb7c5] px-4 py-2 text-sm">Mathematics + Computer Science</span><span className="rounded-full border border-[#aeb7c5] px-4 py-2 text-sm">Education Leadership</span></div></div></section><section className="border-t border-[#d5dae2] bg-[#14233d] px-6 py-16 lg:px-10 lg:py-24 text-white"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><h2 className="text-4xl font-medium tracking-[-.05em] sm:text-5xl">Key Credentials & Highlights</h2></div><div className="grid gap-8 lg:grid-cols-3"><div className="rounded-3xl border border-[#56627a] bg-[#1a2c4a] p-8"><h3 className="text-xl font-medium text-[#c4cad5]">Academic Leadership & Service</h3><ul className="mt-4 space-y-3 leading-7 text-[#d8dde5]"><li><strong className="font-semibold text-white">Former President:</strong> The Hong Kong University of Science and Technology (HKUST)</li><li><strong className="font-semibold text-white">Former President:</strong> King Abdullah University of Science and Technology (KAUST)</li><li><strong className="font-semibold text-white">Member:</strong> US National Academy of Engineering (NAE)</li><li><strong className="font-semibold text-white">Member, Selection Committee (Computer Science):</strong> The Shaw Prize</li><li><strong className="font-semibold text-white">Board Member:</strong> Yidan Prize Foundation</li></ul></div><div className="rounded-3xl border border-[#56627a] bg-[#1a2c4a] p-8"><h3 className="text-xl font-medium text-[#c4cad5]">Research Focus & Specializations</h3><p className="mt-4 leading-7 text-[#d8dde5]">Applied mathematics, computer vision, image processing, and scientific computing.</p></div><div className="rounded-3xl border border-[#56627a] bg-[#1a2c4a] p-8"><h3 className="text-xl font-medium text-[#c4cad5]">Global Impact</h3><p className="mt-4 leading-7 text-[#d8dde5]">Champion of international research partnerships and global STEM education advancement.</p></div></div></div></section><section className="border-y border-[#d5dae2] bg-white px-6 py-16 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#657084]">Message from the Chairman</p><h2 className="mt-5 max-w-md text-4xl leading-tight tracking-[-.05em] sm:text-5xl">Why We Started This Symposium</h2></div><div className="max-w-3xl text-lg leading-8 text-[#657084]"><p>As a student on my own research journey, the process of discovery has always brought me immense joy and fulfilment. Research is not only about finding answers; it is about asking meaningful questions, exploring new ideas, and embracing the excitement of the unknown.</p><h3 className="mt-10 text-2xl tracking-[-.03em] text-[#14233d]">A Mentorship Born from Discovery</h3><p className="mt-4">This vision gained strong momentum through my participation in the Hong Kong Academy of Sciences&apos; Distinguished Master Accomplished Students (DMAS) Programme, where I had the privilege of being paired with Professor Tony F. Chan as my mentor.</p><p className="mt-6">Through our ongoing conversations and direct mentorship, Professor Chan&apos;s world-class expertise and deep commitment to nurturing young scientific minds became a guiding light for this initiative. His proactive enthusiasm—even adjusting his international travel schedule to support our launch—and his belief in secondary school student researchers inspired us to transform this vision into a platform for students across Hong Kong.</p><h3 className="mt-10 text-2xl tracking-[-.03em] text-[#14233d]">Our Goal</h3><p className="mt-4">The DBS Inter-School STEM Research Symposium was created to bridge the gap between classroom learning and original academic research. Our goal is to provide a platform where students can showcase their work, share how their research got started, explain how they overcome hurdles, highlight the innovative findings that contribute to knowledge beyond the classroom and learn from leading experts.</p><p className="mt-6">We hope that every participant leaves not only with new insights and skills, but also with a deeper appreciation for the joy of discovery and the confidence to pursue ambitious questions that may one day make a meaningful impact on the world.</p><p className="mt-10 border-t border-[#d5dae2] pt-5 text-sm text-[#14233d]"><strong className="font-normal">Cary Chan</strong><br />Chairman, Symposium Working Group<br />STEAM Union, DBS</p></div></div></div></section>

{/* NEW SYMPOSIUM WORKING GROUP SECTION */}
<section className="bg-[#e1e4e9] px-6 py-16 lg:px-10 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-2xl">
      <h2 className="text-4xl font-medium tracking-[-.05em] text-[#14233d] sm:text-5xl">Symposium Working Group</h2>
      <p className="mt-4 text-lg leading-8 text-[#657084]">The initiative is organized, planned, and executed by students from DBS STEAM Union.</p>
    </div>
    
    <div className="grid gap-8 lg:grid-cols-2">
      
      {/* Advisory Card */}
      <div className="rounded-3xl bg-white p-8 sm:p-10">
        <h3 className="text-2xl font-medium tracking-[-.03em] text-[#14233d]">Advisory</h3>
        <ul className="mt-6 space-y-4 text-lg text-[#657084]">
          <li><strong className="font-semibold text-[#14233d]">Honorary Academic Advisor:</strong> Prof. Tony F. Chan</li>
          <li><strong className="font-semibold text-[#14233d]">Teacher Advisor:</strong> Mr. Chan Long Tin</li>
        </ul>
      </div>

      {/* Core Working Group Card */}
      <div className="rounded-3xl bg-white p-8 sm:p-10">
        <h3 className="text-2xl font-medium tracking-[-.03em] text-[#14233d]">Core Working Group</h3>
        <ul className="mt-6 grid gap-x-6 gap-y-4 text-base text-[#657084] sm:grid-cols-2">
          <li><strong className="font-semibold text-[#14233d]">Chairman:</strong> Cary Chan</li>
          <li><strong className="font-semibold text-[#14233d]">IT & Digital Lead:</strong> Carlos Wong</li>
          <li><strong className="font-semibold text-[#14233d]">Programme & Events Lead:</strong> Chow Yik Chit</li>
          <li><strong className="font-semibold text-[#14233d]">Marketing Lead:</strong> Matthew Ma</li>
          <li><strong className="font-semibold text-[#14233d]">Recruitment & School Liaison Lead:</strong> Marcus Wong</li>
          <li><strong className="font-semibold text-[#14233d]">Academic Affairs Lead:</strong> Justin Zhen</li>
          <li className="sm:col-span-2"><strong className="font-semibold text-[#14233d]">Cross-Team Support:</strong> Craig Chu & Anson Lee</li>
        </ul>
      </div>

    </div>
  </div>
</section>

</SymposiumShell> }

export function ParticipatePage() { 
  return (
    <SymposiumShell>
      <PageIntro 
        title="Join Us for the Official Launch" 
        text="The Kickoff Lecture serves as the official launch of the DBS Inter-School STEM Research Symposium, introducing its vision to students, educators, and partner schools while attracting high-potential student researchers." 
      />
      
      <section className="bg-[#e1e4e9] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] bg-white p-8 sm:p-12">
            
            <h2 className="text-3xl font-medium tracking-[-.04em] text-[#14233d]">
              Inaugural Kickoff Lecture Details
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-[#657084]">
              The Kickoff Lecture serves as the official launch of the DBS Inter-School STEM Research Symposium, introducing its vision to students, educators, and partner schools while attracting high-potential student researchers.
            </p>

            <div className="mt-8 space-y-4 border-t border-[#d5dae2] pt-8 text-lg leading-8 text-[#657084]">
              <p><strong className="font-semibold text-[#14233d]">Date:</strong> Friday, 27 November 2026</p>
              <p><strong className="font-semibold text-[#14233d]">Time:</strong> 4:45 PM – 6:15 PM (Reception starts at 4:15 PM)</p>
              <p><strong className="font-semibold text-[#14233d]">Venue:</strong> School Hall, Diocesan Boys&apos; School, 131 Argyle Street, Mongkok, Kowloon</p>
              <p><strong className="font-semibold text-[#14233d]">Admission:</strong> Complimentary (Pre-registration required; first-come, first-served)</p>
              <p><strong className="font-semibold text-[#14233d]">Target Audience:</strong> Principals, STEM Teachers, Secondary Students, and Parents</p>
              <p><strong className="font-semibold text-[#14233d]">Registration Deadline:</strong> Friday, 20 November 2026</p>
            </div>

            <div className="mt-12 border-t border-[#d5dae2] pt-8">
              <h3 className="text-xl font-semibold text-[#14233d]">Program Highlights</h3>
              <ul className="mt-6 space-y-6">
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">1</span>
                  <div>
                    <p className="font-semibold text-[#14233d]">Official Launch &amp; Vision</p>
                    <p className="mt-1 leading-7 text-[#657084]">Introduction to the Symposium&apos;s mission and how secondary school students across Hong Kong can participate to share their research journeys and findings.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">2</span>
                  <div>
                    <p className="font-semibold text-[#14233d]">Keynote Address</p>
                    <p className="mt-1 leading-7 text-[#657084]">World-class insights from Prof. Tony F. Chan on AI, academic research, and the future of education.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">3</span>
                  <div>
                    <p className="font-semibold text-[#14233d]">Symposium Preview</p>
                    <p className="mt-1 leading-7 text-[#657084]">An advance preview for the Spring 2027 main event.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#14233d] font-mono text-xs font-bold text-white">4</span>
                  <div>
                    <p className="font-semibold text-[#14233d]">Welcome Reception</p>
                    <p className="mt-1 leading-7 text-[#657084]">Networking opportunities for teachers, students, parents, and academic leaders.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* NEW POSTER SECTION */}
            <div className="mt-12 border-t border-[#d5dae2] pt-8">
              <div className="relative overflow-hidden rounded-2xl border border-[#d5dae2] bg-[#f7f8fa] p-2">
                <img src="/kickoff-poster.png" alt="DBS Inter-School STEM Research Symposium Kickoff Lecture poster" className="w-full h-auto rounded-xl object-contain" />
              </div>
            </div>

            <div className="mt-10 border-t border-[#d5dae2] pt-8">
              <a 
                href="https://DBSSTEMSymposiumkickoff.eventbrite.hk" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center rounded-full bg-[#14233d] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Click Here to Register on Eventbrite 
                <MoveUpRight className="ml-2 size-4" aria-hidden="true" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </SymposiumShell> 
  ) 
}
export function FaqContactPage() { 
  return (
    <SymposiumShell>
      <PageIntro 
        title={<>Frequently Asked <em className="font-sans font-normal not-italic text-[#14233d]">Questions</em></>} 
        text="Find answers to common questions about the Kickoff Lecture, the upcoming Main Symposium, and how to get in touch with us." 
      />

      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-10">
        <div className="space-y-4">
          
          <details className="group rounded-2xl border border-[#d5dae2] bg-white p-6 sm:p-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between text-xl font-medium tracking-[-.03em] text-[#14233d]">
              Who is eligible to attend the Kickoff Lecture?
              <ChevronDown className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-4 leading-8 text-[#657084]">
              Educators, principals, STEM teachers, secondary school students, and parents across Hong Kong are warmly invited to attend.
            </p>
          </details>

          <details className="group rounded-2xl border border-[#d5dae2] bg-white p-6 sm:p-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between text-xl font-medium tracking-[-.03em] text-[#14233d]">
              How do I register for the Kickoff Lecture?
              <ChevronDown className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-4 leading-8 text-[#657084]">
              Registration is free via the Eventbrite link on our <a href="/how-to-participate" className="underline decoration-[#14233d] underline-offset-4 hover:text-[#14233d]">How to Participate</a> page. Pre-registration is required as seats are allocated on a first-come, first-served basis.
            </p>
          </details>

          <details className="group rounded-2xl border border-[#d5dae2] bg-white p-6 sm:p-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between text-xl font-medium tracking-[-.03em] text-[#14233d]">
              When will the main symposium submission details be released?
              <ChevronDown className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-4 leading-8 text-[#657084]">
              An advance preview of the Main Symposium Spring 2027 will be shared during the Kickoff Lecture. Full guidelines and submission portal details will be officially released following the lecture.
            </p>
          </details>

        </div>
      </section>

      <section className="border-t border-[#d5dae2] bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-medium tracking-[-.05em] text-[#14233d] sm:text-5xl">Contact Us</h2>
              <p className="mt-4 text-lg leading-8 text-[#657084]">
                For enquiries regarding registration, event logistics, or school participation:
              </p>
            </div>
            <div className="rounded-3xl bg-[#14233d] p-8 text-white sm:p-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#c4cad5]">Email us at</p>
              <a href="mailto:dbs.stem.symposium@gmail.com" className="mt-4 block text-2xl font-medium tracking-[-.02em] transition-colors hover:text-[#aeb7c5] sm:text-3xl">
                dbs.stem.symposium@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </SymposiumShell> 
  ) 
}

function VisionPoint({ title, text }: { title: string; text: string }) { return <article className="border-t border-[#d5dae2] pt-4"><h3 className="text-xl font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#657084]">{text}</p></article> }

function PageIntro({ title, text }: { title: React.ReactNode; text: string }) { 
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-10 lg:pb-16 lg:pt-20">
      <h1 className="max-w-3xl text-6xl font-medium leading-[.94] tracking-[-.07em] sm:text-7xl">{title}</h1>
      <p className="mt-8 max-w-lg text-lg leading-8 text-[#657084]">{text}</p>
    </section>
  ) 
}
function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="rounded-2xl border border-[#d5dae2] p-6"><div className="flex size-10 items-center justify-center rounded-full bg-[#14233d] text-white">{icon}</div><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm text-[#657084]">{text}</p></div> }
function Schedule({ time, label }: { time: string; label: string }) { return <div className="flex gap-5 text-sm"><span className="w-12 font-mono text-[#14233d]">{time}</span><span className="font-medium">{label}</span></div> }
function Participation({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) { return <article className="rounded-2xl bg-white p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#14233d]">{number}</span><span className="text-[#14233d]">{icon}</span></div><h3 className="mt-16 text-2xl font-medium tracking-[-.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#657084]">{text}</p><div className="mt-7 flex size-7 items-center justify-center rounded-full bg-[#e1e4e9]"><Check className="size-4" aria-hidden="true" /></div></article> }

export { CalendarDays, Check, Clock3, MapPin, MoveUpRight, Presentation, Users }
