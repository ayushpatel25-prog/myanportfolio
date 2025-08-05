import { FileCode, Paintbrush, Code, Coffee, Code2, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  const skills = {
    web: [
      { name: 'HTML', icon: <FileCode className="w-8 h-8 text-primary" /> },
      { name: 'CSS', icon: <Paintbrush className="w-8 h-8 text-primary" /> },
      { name: 'JavaScript', icon: <Code className="w-8 h-8 text-primary" /> },
    ],
    languages: [
      { name: 'Java', icon: <Coffee className="w-8 h-8 text-primary" /> },
      { name: 'Python', icon: <Code2 className="w-8 h-8 text-primary" /> },
    ],
  };

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects. Built with Next.js and Tailwind CSS for a modern and responsive design.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      liveLink: '#',
      sourceLink: '#',
      aiHint: 'website interface'
    },
    {
      title: 'Task Management App',
      description: 'A web application to manage daily tasks, with features like adding, deleting, and marking tasks as complete. Frontend built with JavaScript.',
      image: 'https://placehold.co/600x400.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: '#',
      aiHint: 'task manager'
    },
    {
      title: 'Inventory System',
      description: 'A backend system for managing product inventory, developed using Java. It features basic CRUD operations for products.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Java'],
      liveLink: '#',
      sourceLink: '#',
      aiHint: 'inventory system'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="font-headline text-xl font-bold text-primary">
            AyushFolio
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 md:py-32">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hi, I am Ayush Patel
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
              A passionate developer learning the ropes of web development and programming. I enjoy building things for the web and constantly expanding my skillset.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button asChild>
                <Link href="#contact">Contact Me <Mail className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#">View Resume <Briefcase className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
             <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-4 border-primary/20 shadow-lg">
               <Image
                src="https://placehold.co/320x320.png"
                alt="Ayush Patel"
                width={320}
                height={320}
                className="object-cover scale-105"
                data-ai-hint="developer portrait"
              />
            </div>
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 bg-secondary/50">
          <div className="container">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold text-center md:text-left">Web Development</h3>
                <div className="grid grid-cols-3 gap-4">
                  {skills.web.map((skill) => (
                    <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      {skill.icon}
                      <p className="mt-4 font-semibold">{skill.name}</p>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold text-center md:text-left">Programming Languages</h3>
                <div className="grid grid-cols-3 gap-4">
                  {skills.languages.map((skill) => (
                    <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      {skill.icon}
                      <p className="mt-4 font-semibold">{skill.name}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24">
          <div className="container">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col group">
                  <CardHeader className="p-0 overflow-hidden">
                    <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.aiHint} />
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <div className="flex space-x-4 mt-auto">
                      <Button size="sm" asChild><Link href={project.liveLink}>Live Demo</Link></Button>
                      <Button size="sm" variant="outline" asChild><Link href={project.sourceLink}>Source Code</Link></Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 bg-secondary/50">
          <div className="container max-w-3xl">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind or just want to say hi? Feel free to reach out.
              </p>
            </div>
            <Card className="mt-12 p-6 sm:p-8 shadow-lg">
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border/40">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ayush Patel. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary"><Github /></Link>
            <Link href="#" className="hover:text-primary"><Linkedin /></Link>
            <Link href="#" className="hover:text-primary"><Twitter /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
