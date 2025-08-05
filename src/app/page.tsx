"use client";

import {
  Briefcase,
  Code,
  Code2,
  Coffee,
  Computer,
  FileCode,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Paintbrush,
  Twitter,
} from "lucide-react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { AnimatedBeam, FramerMagnetic } from "@/components/ui/animated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const skills = {
    web: [
      { name: "HTML", icon: <FileCode className="h-8 w-8 text-primary" /> },
      { name: "CSS", icon: <Paintbrush className="h-8 w-8 text-primary" /> },
      {
        name: "JavaScript",
        icon: <Code className="h-8 w-8 text-primary" />,
      },
    ],
    languages: [
      { name: "Java", icon: <Coffee className="h-8 w-8 text-primary" /> },
      { name: "Python", icon: <Code2 className="h-8 w-8 text-primary" /> },
    ],
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link
            href="/"
            className="font-headline text-xl font-bold text-primary"
          >
            AyushFolio
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link
              href="#skills"
              className="transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>

      <main className="flex-1">
        <section
          id="hero"
          className="container grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-32"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="relative flex justify-center md:justify-start">
              <div className="absolute -inset-2">
                <AnimatedBeam />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -15, 0] }}
                transition={{
                  scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.5 },
                  y: {
                    delay: 1,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                className="relative flex justify-center md:justify-start"
                style={{
                  filter: "drop-shadow(0 2px 4px hsl(var(--primary)/0.4)) drop-shadow(0 5px 15px hsl(var(--primary)/0.2))",
                }}
              >
                <Computer className="h-12 w-12 text-primary" />
              </motion.div>
            </div>
            <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text font-headline text-4xl font-bold tracking-tighter text-transparent md:text-6xl">
              Hi, I am Ayush Patel
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0">
              A passionate developer learning the ropes of web development and
              programming. I enjoy building things for the web and constantly
              expanding my skillset.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <FramerMagnetic>
                <Button asChild>
                  <Link href="#contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FramerMagnetic>
              <FramerMagnetic>
                <Button variant="secondary" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume <Briefcase className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FramerMagnetic>
            </div>
            <div className="flex justify-center space-x-4 pt-4 md:justify-start">
              <FramerMagnetic>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github />
                </Link>
              </FramerMagnetic>
              <FramerMagnetic>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin />
                </Link>
              </FramerMagnetic>
              <FramerMagnetic>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter />
                </Link>
              </FramerMagnetic>
              <FramerMagnetic>
                <Link
                  href="mailto:youremail@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail />
                </Link>
              </FramerMagnetic>
              <FramerMagnetic>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram />
                </Link>
              </FramerMagnetic>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <AnimatedBeam />
              <div className="absolute inset-0.5 flex items-center justify-center overflow-hidden rounded-full border-4 border-primary/20 bg-primary/10 shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Ayush Patel"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
          </motion.div>
        </section>

        <section id="skills" className="w-full bg-secondary/50 py-12 md:py-24">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl"
            >
              My Skills
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2"
            >
              <div className="space-y-6">
                <h3 className="text-center font-headline text-2xl font-semibold md:text-left">
                  Web Development
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {skills.web.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <FramerMagnetic>
                        <Card className="flex h-full flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          {skill.icon}
                          <p className="mt-4 font-semibold">{skill.name}</p>
                        </Card>
                      </FramerMagnetic>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-center font-headline text-2xl font-semibold md:text-left">
                  Programming Languages
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {skills.languages.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <FramerMagnetic>
                        <Card className="flex h-full flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          {skill.icon}
                          <p className="mt-4 font-semibold">{skill.name}</p>
                        </Card>
                      </FramerMagnetic>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full bg-secondary/50 py-12 md:py-24"
        >
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind or just want to say hi? Feel free to
                reach out.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group relative mt-12 p-6 shadow-lg sm:p-8">
                <motion.div
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: useMotionTemplate`
                    radial-gradient(
                      350px circle at ${mouseX}px ${mouseY}px,
                      hsl(var(--primary) / 0.1),
                      transparent 80%
                    )
                  `,
                  }}
                />
                <div onMouseMove={handleMouseMove}>
                  <ContactForm />
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border/40">
        <div className="container flex flex-col items-center justify-between py-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ayush Patel. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" className="hover:text-primary">
              <Github />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Linkedin />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
