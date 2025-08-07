
"use client";

import React from "react";
import {
  Award,
  Briefcase,
  CalendarDays,
  Code,
  Code2,
  Coffee,
  Computer,
  FileCode,
  FolderKanban,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Paintbrush,
  Twitter,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedNumber } from "@/components/animated-number";
import { AnimatedRobot } from "@/components/animated-robot";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


const socialLinks = {
  github: "https://github.com/ayushpatel25-prog",
  linkedin: "https://linkedin.com/in/ayush-patel-profile",
  twitter: "https://twitter.com/ayush-patel-profile",
  instagram: "https://instagram.com/ayush-patel-profile",
  email: "mailto:ayush-patel-profile@example.com",
};

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

  const allSkills = [...skills.web, ...skills.languages];

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
              href="#projects"
              className="transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className="transition-colors hover:text-primary"
            >
              Certifications
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-primary"
            >
              About
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
              <div className="relative h-20 w-20">
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
                  className="relative flex h-full w-full items-center justify-center"
                  style={{
                    filter: "drop-shadow(0 2px 4px hsl(var(--primary)/0.4)) drop-shadow(0 5px 15px hsl(var(--primary)/0.2))",
                  }}
                >
                  <Computer className="h-12 w-12 text-primary" />
                </motion.div>
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="absolute"
                    style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
                    animate={{
                      rotate: 360,
                      x: [
                        "-50%",
                        `calc(-50% + ${Math.cos((index / allSkills.length) * 2 * Math.PI) * 60}px)`,
                        "-50%",
                      ],
                      y: [
                        "-50%",
                        `calc(-50% + ${Math.sin((index / allSkills.length) * 2 * Math.PI) * 60}px)`,
                        "-50%",
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    {React.cloneElement(skill.icon, {
                      className: "h-6 w-6 text-primary/80",
                    })}
                  </motion.div>
                ))}
              </div>
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild>
                  <Link href="#contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume <Briefcase className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="flex justify-center space-x-4 pt-4 md:justify-start">
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.3 } }}
              >
                <Link
                  href={socialLinks.github}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.3 } }}
              >
                <Link
                  href={socialLinks.linkedin}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.3 } }}
              >
                <Link
                  href={socialLinks.twitter}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.3 } }}
              >
                <Link
                  href={socialLinks.email}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.3 } }}
              >
                <Link
                  href={socialLinks.instagram}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0.5 flex items-center justify-center overflow-hidden rounded-full border-4 border-primary/20 bg-primary/10 shadow-lg">
                <Image
                  src="https://placehold.co/320x320.png"
                  alt="Ayush Patel"
                  width={320}
                  height={320}
                  className="object-cover"
                  data-ai-hint="profile picture"
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
                      <Card className="flex h-full flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        {skill.icon}
                        <p className="mt-4 font-semibold">{skill.name}</p>
                      </Card>
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
                      <Card className="flex h-full flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        {skill.icon}
                        <p className="mt-4 font-semibold">{skill.name}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="mt-16 flex justify-center">
              <AnimatedRobot />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                My Journey
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 text-center md:grid-cols-2"
            >
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                >
                  <FolderKanban className="mb-4 h-16 w-16 text-primary" />
                </motion.div>
                <span className="font-headline text-6xl font-bold text-primary">
                  <AnimatedNumber value={2} />
                </span>
                <p className="mt-2 text-lg text-muted-foreground">
                  Projects in Progress
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                >
                  <CalendarDays className="mb-4 h-16 w-16 text-primary" />
                </motion.div>
                <span className="font-headline text-6xl font-bold text-primary">
                  <AnimatedNumber value={5} />
                </span>
                <p className="mt-2 text-lg text-muted-foreground">
                  Months of Experience
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="certifications" className="w-full bg-secondary/50 py-12 md:py-24">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                My Certifications
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl"
            >
              <Card className="p-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{
                      scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.5 },
                      rotate: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
                    }}
                  >
                    <Award className="h-16 w-16 text-primary" />
                  </motion.div>
                  <p className="text-lg text-muted-foreground">
                    For a detailed list of my certifications, please visit my
                    LinkedIn profile.
                  </p>
                  <Button asChild>
                    <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      View on LinkedIn
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                About Me
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-center"
            >
              <p className="text-lg text-muted-foreground">
                I'm currently on a journey to become a skilled developer. I have a foundational understanding of web development technologies like HTML, CSS, and JavaScript, as well as programming languages like Java and Python. I'm a passionate learner, always excited to explore new technologies and improve my craft. This portfolio showcases my current projects and progress as I continue to grow in the field.
              </p>
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

   
    </div>
  );
}
