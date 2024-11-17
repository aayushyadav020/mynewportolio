"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Github, Linkedin, Twitter, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux } from 'react-icons/si'
import ProjectsSection from '@/components/ProjectsSection'
import ContactForm from '@/components/ContactForm'

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Python', icon: FaPython },
  { name: 'Redux', icon: SiRedux },
]

function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-card rounded-lg shadow-md">
            <skill.icon className="text-4xl mb-2" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b z-50">
        <nav className="container mx-auto px-4 text-gray-800 dark:text-gray-200">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Avatar className="w-10 h-10">
                <AvatarImage 
                  src="https://avatars.githubusercontent.com/u/140250471?s=400&u=d0d6cda50f2cac1d249ab895273c58a02cfb6bce&v=4" 
                  alt="Aayush Yadav" 
                />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>
              <span className="font-bold text-lg hidden sm:block">Aayush Yadav</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="flex flex-col space-y-4 py-4">
                <a 
                  href="#skills" 
                  className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-20">
        <section className="py-20 flex flex-col md:flex-row items-center justify-center">
          <Avatar className="w-48 h-48 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
            <AvatarImage 
              src="https://avatars.githubusercontent.com/u/140250471?s=400&u=d0d6cda50f2cac1d249ab895273c58a02cfb6bce&v=4" 
              alt="Aayush Yadav" 
            />
            <AvatarFallback>AY</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold mb-4">Aayush Yadav</h1>
            <p className="text-xl text-muted-foreground mb-4">Full Stack Developer</p>
            <p className="max-w-2xl mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both front-end and back-end technologies, I create seamless,
              user-friendly experiences that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black text-white hover:bg-gray-800" asChild>
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ProjectsSection />
        <ContactForm />
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        © {new Date().getFullYear()} Aayush Yadav. All rights reserved.
      </footer>
    </div>
  )
}