"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Mail, Menu, Twitter, X } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-neue  overflow-x-hidden  bg-[#131219] text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <IntegrationSection />
      <DocumentationSection />
      <TokenomicsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4">
      <div className="flex items-center justify-between px-4 py-4 bg-white/20 backdrop-blur-md border border-white/[0.18] rounded-3xl">
        <div className="text-[30px] font-bold font-neue">RUI</div>

        <nav className="hidden md:flex items-center gap-8 2xl:gap-[64px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 hidden md:block bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors">
            Get Started
          </button>

          <button
            className="md:hidden z-50 left-0 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40 flex flex-col gap-6 items-center justify-center"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-2xl font-semibold hover:text-blue-400  transition-colors py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: navItems.length * 0.1 }}
              className="mt-8 px-6 py-3 bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="min-h-dvh flex items-center justify-center relative px-4"
    >
      <div className="absolute  inset-0 ] flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover top-[25% relative"
          src="/earth.mp4"
          controls={false}
        />
      </div>
      <div className="absolute inset-0 flex px-5 flex-col w-full h-full text-center items-center justify-center">
        <motion.h1
          className="text-3xl md:text-6xl font-bold font-neue mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Revolutionizing Weibo
          <br />
          Engagement with Deepseek AI
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          利用 Deepseek AI 创造完美微博博客方式
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="lg:px-10 px-3 py-2text-sm lg:text-[14px] bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors">
            Learn More
          </button>
          <button className="lg:px-10 px-3 py-2 text-sm lg:text-[14px] border border-white rounded-full  hover:bg-white/10 transition-colors">
            Explore the AI Space
          </button>
        </motion.div>
        <div className="absolute font-inter bottom-0 left-0 max-w-6xl overflow-x-auto gap-3 mx-auto w-full right-0 flex justify-between mb-8">
          {["automation", "scripting", "posting", "translating"].map(
            (item, i) => (
              <motion.div
                key={i}
                className="flex items-center flex-col justify-between gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.1,
                }}
              >
                <Image src="/code.svg" alt="Check" width={50} height={50} />
                <span className="font-extrabold font-inter text-[22px] px-5 capitalize">
                  {item}
                </span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-dvh items-center bg-landing overflow-y-hidden  lg:px-[100px] 2xl:px-[136px] flex relative isolate  px-4 py-20"
    >
      <div className=" max-w-6xl h-full w-full  mx-auto relative">
        <motion.h2
          className="text-[30px] font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About 平 (RoAI)
        </motion.h2>
        <motion.p
          className="text-white mb-8  font-medium max-w-[707px]  text-[22px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliq
        </motion.p>
        <motion.button
          className="px-6 py-3 border font-semibold mb-32 border-white rounded-full hover:bg-white/80 bg-white text-black  transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          LEARN MORE
        </motion.button>
        <div className="lg:max-w-[50%] max-w-[100%] -z-10 absolute left-0 bottom-0">
          <Image
            src="/img2.svg"
            alt="About Preview"
            layout="responsive"
            width={1280}
            height={720}
            className="rounded-lg blur-[100px] -left-12 relative"
          />
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-landing flex flex-col items-center justify-center px-4 py-20"
    >
      <motion.h2
        className="text-[50px] 2xl:text-[80px] font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Integration
      </motion.h2>
      <motion.p
        className="text-white text-[22px] mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur r
      </motion.p>
      <motion.button
        className="px-8 py-3  text-[18px] flex items-center justify-center gap-2 rounded-full hover:bg-[#2894FF]/80 bg-[#2894FF] transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Integrate{" "}
        <Image
          src="/github.png"
          alt="About Preview"
          layout="responsive"
          width={20}
          height={20}
          className=""
        />
      </motion.button>
      <div className="w-full h-[60vh] relative max-h-[550px] max-w-6xl mx-auto mt-[60px] bg-[#D9D9D9]/10 rounded-[25px] backdrop-blur-lg">
        <Image
          src="/img2.svg"
          alt="Integration Preview"
          layout="responsive"
          width={1920}
          height={1080}
          className="object-cover absolute w-[50%] max-h-[550px]  max-w-6xl mx-auto h-[50%] blur-[200px]"
        />
      </div>
    </section>
  );
}

function DocumentationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className=" lg:px-[100px] font-neue 2xl:px-[136px]   py-20 px-4  bg-[#EA8010]"
    >
      <div className=" max-w-6xl mx-auto flex flex-col items-center ">
        <button className="px-10 py-3 border border-white rounded-full mb-2  w-fit hover:bg-white/10 transition-colors">
          Easy
        </button>
        <motion.h2
          className="text-[30px] font-medium mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Documentation
        </motion.h2>
        <motion.p
          className="text-center mb-12 px-5 lg:px-[100px] text-[20px] font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa
        </motion.p>
        <div className="md:grid md:grid-cols-5 flex items-center justify-start overflow-x-auto gap-8 w-full">
          <motion.div
            className="h-[60dvh]  max-h-[500px] min-w-[320px] col-span-2 bg-[#D9D9D985] backdrop-blur-lg rounded-[25px] object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.div
            className="h-[60dvh] max-h-[500px] min-w-[520px] col-span-3 bg-[#D9D9D985] backdrop-blur-lg rounded-[25px] object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

function TokenomicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 isolate px-4 relative">
      <div className="">
        <motion.div
          className="flex items-center gap-20  flex-col lg:flex-row px-5 justify-between relative isolate max-w-6xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full h-full flex items-center justify-center relative max-w-[550px] max-h-[600px]">
            <Image
              src="/img2.svg"
              alt="Tokenomics Preview"
              width={1920}
              height={1080}
              className=" object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            {[
              {
                label: "Circulating supply",
                value: "(52.5%)",
                color: "#3983FF",
                content:
                  "92.5% of our tokens are already out there, actively fueling the hands-on energy of the community. this ensures a vibrant and dynamic ecosystem where the token is use",
              },
              {
                label: "Circulating supply",
                value: "(32.5%)",
                color: "#EA8010",
                content:
                  "92.5% of our tokens are already out there, actively fueling the hands-on energy of the community. this ensures a vibrant and dynamic ecosystem where the token is use",
              },
              {
                label: "Circulating supply",
                value: "(15.0%)",
                color: "white",
                content:
                  "92.5% of our tokens are already out there, actively fueling the hands-on energy of the community. this ensures a vibrant and dynamic ecosystem where the token is use",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-start lg:gap-4 gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <div className="flex  justify-start  lg:text-[30px] text-[18px] gap-2">
                  <div className="font-medium  flex items-center justify-center gap-2">
                    <div
                      className="lg:w-5 lg:h-7 w-4 h-5 text-[30px] mr-2 rounded-full "
                      style={{
                        backgroundColor: item.color,
                      }}
                    />
                    {item.label}
                  </div>
                  <div className=" text-white">{item.value}</div>
                </div>
                <p className="lg:text-[22px] text-[13px] px-8">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="max-w-[50%] h-full hidden lg:block -z-10 absolute left-0 bottom-0">
            <Image
              src="/img.png"
              alt="About Preview"
              layout="responsive"
              width={1280}
              height={720}
              className="rounded-lg blur-[100px]  -left-12 relative"
            />
          </div>
        </motion.div>
      </div>
      <Image
        src="/img.png"
        alt="About Preview"
        layout="responsive"
        width={1280}
        height={720}
        className="rounded-lg w-[300px] aspect-square -z-10 lg:hidden absolute bottom-0 blur-[100px] "
      />
    </section>
  );
}

function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "Lorem Ipsum",
      answer:
        "An OnlyFans agency is a company or organization that represents content creators on the platform, helping them manage their accounts, market their content, and maximize their earnings. These agencies typically offer a range of services, including social media management, content production, and customer support.",
    },
    {
      question: "Lorem ipsum kj d2ednjqlkdmdjknik2dwqd;dm",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt amet commodi rerum nobis cupiditate.",
    },
    {
      question: "Lorem ipsum kj d2ednjqlkdmdjknik2dwqd;dm",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae recusandae doloribus enim voluptatum.",
    },
    {
      question: "Lorem ipsum kj d2ednjqlkdmdjknik2dwqd;dm",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt nobis cupiditate.",
    },
  ];

  return (
    <section
      // ref={ref}
      className="min-h-dvh flex flex-col items-center justify-center w-full px-4 py-20"
    >
      <div className="w-full max-w-3xl mx-auto">
        <motion.h2 className="text-4xl font-bold mb-12 text-white text-center">
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}>
              <AccordionItem
                value={`item-${i}`}
                className="border-none rounded-lg bg-white/5 overflow-hidden"
              >
                <AccordionTrigger className="text-left px-6 py-4 text-white hover:no-underline hover:bg-[#222222] transition-colors [&[data-state=open]>div]:rotate-45">
                  <div className="flex justify-between items-center w-full">
                    {faq.question}
                    <div className="h-6 w-6 rounded-full border border-white/40 flex items-center justify-center shrink-0 ml-4 transition-transform duration-200">
                      <Plus className="h-4 w-4" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14m-7-7h14" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="w-full relative px-4 py-6 backdrop-grayscale-0 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm text-white/70">
          © (RUI) {new Date().getFullYear()}. all right reserved
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:example@email.com"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
