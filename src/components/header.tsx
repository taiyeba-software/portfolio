"use client"

import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/data'
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react'

export function Header() {
  const [activeHash, setActiveHash] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash)
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  // Close mobile menu when hash changes (navigation happens)
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [activeHash])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 sm:px-10 sm:py-5 lg:px-20">
        <a
          href="#"
          className="justify-self-start font-mono text-lg font-bold tracking-tight text-[#0077FF] transition-colors hover:text-[#0077FF] active:text-[#0077FF] sm:text-xl md:text-2xl"
        >
          Taiyeba I.
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-self-center gap-6 md:flex lg:gap-8" aria-label="Main navigation">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#0077FF] active:text-[#0077FF] focus-visible:text-[#0077FF] md:text-base ${
                activeHash === link.href ? 'text-[#0077FF]' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Social Icons + Mobile Menu Button */}
        <div className="flex items-center justify-self-end gap-3 sm:gap-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-[#0077FF] active:text-[#0077FF] focus-visible:text-[#0077FF]"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-[#0077FF] active:text-[#0077FF] focus-visible:text-[#0077FF]"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a
            href={siteConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-[#0077FF] active:text-[#0077FF] focus-visible:text-[#0077FF]"
            aria-label="X profile"
          >
            <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-muted-foreground transition-colors hover:text-[#0077FF] active:text-[#0077FF] p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-6 py-4 sm:px-10" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors hover:text-[#0077FF] active:text-[#0077FF] py-2 sm:text-lg ${
                    activeHash === link.href ? 'text-[#0077FF]' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
