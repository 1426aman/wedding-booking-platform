import React, { useState } from 'react'

const App: React.FC = () => {
  const [loginMessage, setLoginMessage] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoginMessage('Sign-in is not connected yet. Authentication will be available once the platform backend is configured.')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border/50 bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 hover:bg-background/98">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <a href="#top" className="shrink-0 font-semibold text-text-h text-base sm:text-lg tracking-tight">WeddingVendors.in</a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-text-h/80 hover:text-text-h transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:opacity-0 hover:after:w-full hover:after:opacity-100">
              Services
            </a>
            <a href="#vendors" className="text-sm text-text-h/80 hover:text-text-h transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:opacity-0 hover:after:w-full hover:after:opacity-100">
              Vendors
            </a>
            <a href="#about" className="text-sm text-text-h/80 hover:text-text-h transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:opacity-0 hover:after:w-full hover:after:opacity-100">
              About
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <a href="#contact" className="hidden sm:inline text-sm text-text-h hover:text-text transition-colors">Contact</a>
            <a href="#login" className="px-3 sm:px-4 py-2 text-sm font-medium text-text-h border border-text-h/20 rounded-lg bg-white/60 hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              Login
            </a>
            <button
              type="button"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-h transition hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {mobileMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-border bg-background px-4 py-3 shadow-lg md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ['Services', '#services'],
                ['Vendors', '#vendors'],
                ['About', '#about'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-text-h transition hover:bg-accent/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="top" className="pt-24 pb-12 sm:pt-28 md:pt-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-b from-accent/5 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-h mb-6 animate-fade-up">
                Find & Book Perfect Wedding Vendors
              </h1>
              <p className="text-text text-lg mb-8 max-w-2xl animate-fade-up delay-150">
                Discover trusted tent providers, lawn owners, photographers, videographers, and more for your special day. Browse profiles, check ratings, and book directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300">
                <button className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-accent-bg bg-accent rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/10">
                  Browse Vendors
                </button>
                <button className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-accent rounded-lg hover:bg-accent/10 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
            <div className="relative mx-1 sm:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80" 
                alt="Wedding couple" 
                className="w-full h-72 sm:h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl rotate-0 sm:rotate-[-2deg] animate-slide-in" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Categories */}
      <section id="services" className="py-16 sm:py-20 md:py-32 bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-h mb-8 sm:mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Tent Services */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80" 
                  alt="Luxury wedding tent" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M8 21h8M12 17l-4-8 4-8"></path>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Tents & Canopies</h3>
                <p className="mt-2 text-sm text-text/6">Waterproof tents, luxury tents, and outdoor canopies</p>
              </div>
            </div>

            {/* Lawn Services */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80" 
                  alt="Wedding lawn venue" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v2h2v18H3zm5 3h14M3 7v10c2 3 5 5 8 3s5-2 8-3V7m3 4h6m6-4h2m-5-5a4 4 0 0 1-4 4V15m0-4a4 4 0 0 0-4 4v2m4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Wedding Lawns</h3>
                <p className="mt-2 text-sm text-text/6">Scenic outdoor venues and lawns for ceremonies</p>
              </div>
            </div>

            {/* Photography */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=900&q=80" 
                  alt="Wedding photography" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    <polyline points="22 4 12 14 9 10.37"></polyline>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Photography</h3>
                <p className="mt-2 text-sm text-text/6">Candid and traditional wedding photography</p>
              </div>
            </div>

            {/* Videography */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80" 
                  alt="Wedding videography" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8z"></path>
                    <polyline points="12 3 12 15 16 21"></polyline>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Videography</h3>
                <p className="mt-2 text-sm text-text/6">Cinematic wedding videography and reels</p>
              </div>
            </div>

            {/* Reel Shoots */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80" 
                  alt="Wedding reel shoot" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h.56l.01-.01a1.15 1.15 0 0 1 .33-.08 1.65 1.65 0 0 0 .78-1.02 1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H5a1.65 1.65 0 0 0 1 1.51v.09a1.65 1.65 0 0 0 1.82.33l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.02.78 1.65 1.65 0 0 0 .33.08l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Reel Shoots</h3>
                <p className="mt-2 text-sm text-text/6">Short-form content and wedding reels</p>
              </div>
            </div>

            {/* Other Services */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80" 
                  alt="Wedding catering and decor" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <line x1="9" y1="11" x2="9.01" y2="11"></line>
                    <line x1="15" y1="11" x2="15.01" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Other Services</h3>
                <p className="mt-2 text-sm text-text/6">Catering, decoration, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <section id="vendors" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-h mb-8 sm:mb-10 text-center animate-fade-up">Featured Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vendor Card 1 */}
            <div className="group relative p-6 border rounded-2xl overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/10">
              <div className="h-48 bg-gradient-to-b from-accent/10 to-transparent overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80" 
                  alt="Luxury Tent Provider" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-h">Luxury Tent Palace</h3>
                <p className="text-sm text-text/6 mt-1">Deluxe tent packages</p>
                <p className="text-xs text-text/6 mt-2">Premium tent rentals for weddings and events. Waterproof, elegant, and customizable options available.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-text-h">₹80,000</span>
                  <button className="px-3 py-1 text-xs font-medium text-accent rounded bg-accent/10 transition-colors hover:bg-accent/15">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Vendor Card 2 */}
            <div className="group relative p-6 border rounded-2xl overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/10">
              <div className="h-48 bg-gradient-to-b from-accent/10 to-transparent overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80" 
                  alt="Riverside Wedding Lawn" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-h">Riverside Wedding Lawn</h3>
                <p className="text-sm text-text/6 mt-1">Open air venue</p>
                <p className="text-xs text-text/6 mt-2">Scenic riverside location with natural beauty and modern amenities for wedding ceremonies.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-text-h">₹1,50,000</span>
                  <button className="px-3 py-1 text-xs font-medium text-accent rounded bg-accent/10 transition-colors hover:bg-accent/15">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Vendor Card 3 */}
            <div className="group relative p-6 border rounded-2xl overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/10">
              <div className="h-48 bg-gradient-to-b from-accent/10 to-transparent overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80" 
                  alt="Candid Moments Photography" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-h">Candid Moments</h3>
                <p className="text-sm text-text/6 mt-1">Wedding photography</p>
                <p className="text-xs text-text/6 mt-2">Candid wedding photography capturing every emotion and moment of your special day with artistic storytelling.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-text-h">₹45,000</span>
                  <button className="px-3 py-1 text-xs font-medium text-accent rounded bg-accent/10 transition-colors hover:bg-accent/15">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Vendor Card 4 */}
            <div className="group relative p-6 border rounded-2xl overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/10">
              <div className="h-48 bg-gradient-to-b from-accent/10 to-transparent overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80" 
                  alt="Everlasting Memories Videography" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-h">Everlasting Memories</h3>
                <p className="text-sm text-text/6 mt-1">Wedding videography</p>
                <p className="text-xs text-text/6 mt-2">Cinematic wedding videography and highlight reels that tell your love story beautifully.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-text-h">₹65,000</span>
                  <button className="px-3 py-1 text-xs font-medium text-accent rounded bg-accent/10 transition-colors hover:bg-accent/15">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Vendor Card 5 */}
            <div className="group relative p-6 border rounded-2xl overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/10">
              <div className="h-48 bg-gradient-to-b from-accent/10 to-transparent overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80" 
                  alt="Reel It Right Studios" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-h">Reel It Right Studios</h3>
                <p className="text-sm text-text/6 mt-1">Reel shoots</p>
                <p className="text-xs text-text/6 mt-2">Professional short-form content and wedding reel production for social media and entertainment.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-text-h">₹35,000</span>
                  <button className="px-3 py-1 text-xs font-medium text-accent rounded bg-accent/10 transition-colors hover:bg-accent/15">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Vendor Card 6 */}
            <div className="group relative p-6 border rounded-2xl overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/10">
              <div className="h-48 bg-gradient-to-b from-accent/10 to-transparent overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80" 
                  alt="Event Decor Hub" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-h">Event Decor Hub</h3>
                <p className="text-sm text-text/6 mt-1">Decoration services</p>
                <p className="text-xs text-text/6 mt-2">Complete wedding decoration services including flowers, lighting, and theme decor.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-text-h">₹25,000</span>
                  <button className="px-3 py-1 text-xs font-medium text-accent rounded bg-accent/10 transition-colors hover:bg-accent/15">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid min-w-0 lg:grid-cols-[1.3fr_0.9fr] gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  About us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-h animate-fade-up">About Us</h2>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg leading-8 text-text/70 animate-fade-up delay-150">
                  We are dedicated to helping couples find the perfect wedding vendors for their special day. Our platform connects you with trusted tent providers, lawn owners, photographers, videographers, and other wedding service professionals.
                </p>
                <p className="text-base md:text-lg leading-8 text-text/70 animate-fade-up delay-300">
                  With verified profiles, genuine ratings, and transparent pricing, we make wedding planning easier and more reliable.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 animate-fade-up delay-450">
                {/* Team Member 1 */}
                <div className="group rounded-2xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx="9" cy="11" r="5"></circle>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-h">Aman</h4>
                  <p className="mt-1 text-sm text-text/60">CEO</p>
                </div>

                {/* Team Member 2 */}
                <div className="group rounded-2xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx="9" cy="11" r="5"></circle>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-h">Aish Maheshwari</h4>
                  <p className="mt-1 text-sm text-text/60">COO</p>
                </div>

                {/* Team Member 3 */}
                <div className="group rounded-2xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx="9" cy="11" r="5"></circle>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-h">Siddharth Sharma</h4>
                  <p className="mt-1 text-sm text-text/60">CMO</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-white/70 p-6 md:p-8 shadow-xl shadow-accent/5 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-h animate-fade-up">Our Team's LinkedIn</h3>
              </div>

              <div className="space-y-4 animate-fade-up delay-150">
                <a href="https://www.linkedin.com/in/aman-bhardwaj-08a6172a4/" className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-text-h transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:translate-x-1" target="_blank">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-7v-7a5.5 5.5 0 0 0-1.083-3.268A5.5 5.5 0 0 0 16 8Z"></path>
                      <path d="M12.5 3h-1v8h1V3Zm3.5 3h-1v8h1V3Zm2.866-1.813a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1.394 8.233a4.5 4.5 0 1 1 6.838 2.54 4.5 4.5 0 0 1-6.838-2.54ZM7.5 12h2.19a4.5 4.5 0 0 1 1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083-4.26H7.5Z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Aman</span>
                </a>
                <a href="https://www.linkedin.com/in/aishmaheshwari15/" className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-text-h transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:translate-x-1" target="_blank">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-7v-7a5.5 5.5 0 0 0-1.083-3.268A5.5 5.5 0 0 0 16 8Z"></path>
                      <path d="M12.5 3h-1v8h1V3Zm3.5 3h-1v8h1V3Zm2.866-1.813a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1.394 8.233a4.5 4.5 0 1 1 6.838 2.54 4.5 4.5 0 0 1-6.838-2.54ZM7.5 12h2.19a4.5 4.5 0 0 1 1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083-4.26H7.5Z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Aish Maheshwari</span>
                </a>
                <a href="https://www.linkedin.com/in/siddharth-sharma-a966702b3/" className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-text-h transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:translate-x-1" target="_blank">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-7v-7a5.5 5.5 0 0 0-1.083-3.268A5.5 5.5 0 0 0 16 8Z"></path>
                      <path d="M12.5 3h-1v8h1V3Zm3.5 3h-1v8h1V3Zm2.866-1.813a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1.394 8.233a4.5 4.5 0 1 1 6.838 2.54 4.5 4.5 0 0 1-6.838-2.54ZM7.5 12h2.19a4.5 4.5 0 0 1 1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083-4.26H7.5Z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Siddharth Sharma</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="scroll-mt-20 border-y border-border bg-gradient-to-b from-accent/5 to-background py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-accent/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Welcome back
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-text-h md:text-5xl">Sign in to WeddingVendors.in</h2>
            <p className="mt-4 text-base leading-7 text-text/70">
              Choose the sign-in option that fits you. Your account details stay separate for couples and wedding professionals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="min-w-0 rounded-3xl border border-border bg-white/80 p-5 sm:p-6 shadow-lg shadow-accent/5 md:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M20 8v6m3-3h-6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">For couples</p>
                  <h3 className="mt-1 text-2xl font-semibold text-text-h">User login</h3>
                  <p className="mt-2 text-sm leading-6 text-text/70">Manage your wedding plans, enquiries, and saved vendors.</p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="user-email" className="mb-2 block text-sm font-medium text-text-h">Email address</label>
                  <input id="user-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="user-password" className="mb-2 block text-sm font-medium text-text-h">Password</label>
                  <input id="user-password" name="password" type="password" autoComplete="current-password" required placeholder="Enter your password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                  Sign in as a user
                </button>
              </form>
            </div>

            <div className="min-w-0 rounded-3xl border border-border bg-white/80 p-5 sm:p-6 shadow-lg shadow-accent/5 md:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 13v.01M15 16v.01M15 19v.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">For wedding professionals</p>
                  <h3 className="mt-1 text-2xl font-semibold text-text-h">Vendor login</h3>
                  <p className="mt-2 text-sm leading-6 text-text/70">Manage your business profile, enquiries, and services.</p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="vendor-email" className="mb-2 block text-sm font-medium text-text-h">Business email</label>
                  <input id="vendor-email" name="email" type="email" autoComplete="email" required placeholder="you@business.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="vendor-password" className="mb-2 block text-sm font-medium text-text-h">Password</label>
                  <input id="vendor-password" name="password" type="password" autoComplete="current-password" required placeholder="Enter your password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <button type="submit" className="w-full rounded-xl border border-accent bg-white px-5 py-3 text-sm font-semibold text-text-h transition hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                  Sign in as a vendor
                </button>
              </form>
            </div>
          </div>

          {loginMessage && (
            <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-accent/20 bg-white/80 px-4 py-3 text-center text-sm text-text-h" role="status">
              {loginMessage}
            </p>
          )}
        </div>
      </section>

      {/* Contact/Support Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-h mb-6 animate-fade-up">Get In Touch</h2>
              <p className="text-text/6 mb-8 animate-fade-up delay-150">
                Have questions or need assistance? Our support team is here to help you with bookings, payments, vendor queries, and more.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-text-h">Support Team</p>
                    <p className="text-text/6">support@weddingvendors.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <path d="M10 9L19 12L10 15"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-text-h">Helpline</p>
                    <p className="text-text/6">+918112545387</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                  <div>
                    <p className="font-medium text-text-h">Address</p>
                    <p className="text-text/6">Bareilly, Uttar Pradesh – 243001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-h mb-6 animate-fade-up">Quick Links</h3>
              <div className="flex flex-col items-start gap-3 animate-fade-up delay-150">
                <a href="#services" className="text-text hover:text-text transition-colors">Services</a>
                <a href="#vendors" className="text-text hover:text-text transition-colors">Vendors</a>
                <a href="#about" className="text-text hover:text-text transition-colors">About Us</a>
                <a href="#contact" className="text-text hover:text-text transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="font-semibold text-text-h">WeddingVendors.in</div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text/6">
              <a href="#" className="hover:underline transition-colors">Terms</a>
              <a href="#" className="hover:underline transition-colors">Privacy</a>
              <a href="#" className="hover:underline transition-colors">Cookies</a>
            </div>
            <p className="mt-2 md:mt-0 text-xs text-text/6">2026 WeddingVendors.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App