"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Mail, Menu, PlusIcon, Twitter, X } from "lucide-react";
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
import { cn } from "@/lib/utils";

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
      {/* <Footer /> */}
    </main>
  );
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#docs", label: "Documentation" },
  { href: "#token", label: "Tokenomics" },
  { href: "#integrate", label: "Integrate" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4">
      <div className="flex items-center justify-between px-4 md:px-10 md:py-4 py-2 bg-white/20 backdrop-blur-md border border-white/[0.18] rounded-3xl">
        <a
          href="#"
          className="text-[30px] font-normal font-neue flex items-center justify-center gap-2"
        >
          <Image
            alt="logo"
            width={48}
            height={48}
            src={"/logo.svg"}
            className="rounded-full"
          />
          睿 (RUI)
        </a>

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
            <a href="https://gitee.com/RUI25/rui" target="_blank">
              Get Started
            </a>
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
            <button
              className="md:hidden z-50 absolute top-16  border border-white p-1 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <X className="h-8 w-8 text-white" />
            </button>
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
              <a href="https://gitee.com/RUI25/rui" target="_blank">
                Get Started
              </a>
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
      id="home"
      ref={ref}
      className="min-h-dvh bg-[#131219]  isolate flex items-center justify-center relative px-4"
    >
      <div className="bg-[#EA8010] mix-blend-hue w-full h-full -z-10 absolute inset-0" />
      <div className="absolute  inset-0  flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full  object-cover  -z-20 relative"
          src="/earth.mp4"
          controls={false}
        />
      </div>
      <div className="absolute inset-0 flex px-5 flex-col w-full h-full text-center items-center justify-center">
        <motion.h1
          className="text-3xl md:text-6xl 2xl:text-[51px] font-bold font-neue mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Revolutionizing Weibo
          <br />
          Engagement with Deepseek AI
        </motion.h1>
        <motion.p
          className="text-[22px] my-5 md:text-[32px] font-normal font-neue text-white mb-8"
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
          <button className="lg:px-6 px-3 py-4 lg:text-[17px] font-inter text-[14px] bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors">
            Learn More
          </button>
          <button className="lg:px-6 px-3 py-4 lg:text-[17px] text-[14px] font-inter border border-white rounded-full  hover:bg-white/10 transition-colors">
            Explore the AI Space
          </button>
        </motion.div>
        {/* <div className="absolute font-inter bottom-0 left-0 max-w-6xl overflow-x-auto gap-3 mx-auto w-full right-0 flex justify-between mb-8">
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
        </div> */}
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-dvh pt-[50px] lg:pt-[200px] items-center bg-black overflow-y-hidden  lg:px-[100px] 2xl:px-[136px] flex relative isolate  px-4 py-20"
    >
      <div className="bg-[#EA8010] w-full mix-blend-hue h-full -z-10 absolute inset-0" />

      <div className="bg-landing w-full  h-full -z-20 absolute inset-0" />
      <div className=" max-w-6xl h-full w-full  mx-auto relative">
        <motion.h2
          className="text-[22px] font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About 睿 (RUI)
        </motion.h2>
        <motion.h2
          className="text-[30px] font-bold "
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          (RUI) – The First AI Agent on Sina Weibo
          <br />
          <small className="text-[16px] mt-2">
            (RUI) – 新浪微博首个人工智能代理
          </small>
        </motion.h2>
        <div className="flex justify-between flex-col lg:flex-row lg:items-center gap-5">
          <motion.p
            className="text-white mb-8  font-medium lg:max-w-[50%]  text-[22px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            RUI is an AI-powered Weibo agent built using Deepseek, designed to
            engage users in Mandarin while discussing popular topics and Web3
            insights. This fully open-source project is available on Gitee,
            enabling the Chinese developer community to replicate and expand
            upon it.
            <br />
            <small className="text-[16px] mt-2">
              RUI 是一款使用 Deepseek
              构建的人工智能微博代理，旨在用普通话吸引用户，同时讨论热门话题和
              Web3 见解。这个完全开源的项目已在 Gitee
              上提供，使中国开发者社区能够复制和扩展它。
            </small>
          </motion.p>

          <motion.button
            className="px-6 py-3 w-fit lg:hidden border font-semibold mb-32 border-white rounded-full hover:bg-white/80 bg-white text-black  transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn more (了解更多)
          </motion.button>
          <div className="grid  grid-cols-2 gap-2 w-full max-w-[453px]">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "w-[175px]  aspect-square lg:w-[200px]  ",

                    i == 3 && "p-3",
                    i == 0 && "p-3",
                    i == 2 && "p-3"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.1,
                  }}
                >
                  {i != 2 ? (
                    <div className="relative w-full h-full bg-[#EA8010]  rounded-[30px]" />
                  ) : (
                    <Image
                      alt="image"
                      width={200}
                      src={"/logo.svg"}
                      height={200}
                      className="w-full h-full relative rounded-[30px] -top-[50%] left-[50%]"
                    />
                  )}
                </motion.div>
              ))}
          </div>
        </div>
        <motion.button
          className="px-6 py-3 border hidden lg:block font-semibold mb-32 border-white rounded-full hover:bg-white/80 bg-white text-black  transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Learn more (了解更多)
        </motion.button>
        <div className="lg:max-w-[50%] hidden lg:block max-w-[100%] lg:h-[50%] -z-10 absolute left-0 bottom-0">
          <Image
            src="/img4.png"
            alt="About Preview"
            layout="responsive"
            width={1280}
            height={720}
            className="rounded-lg blur-[200px] w-full h-full lg:w-[30%] lg:bottom-0 lg:h-[10%] -z-10 lg:-left-12 lg:relative absolute bottom-20"
          />
        </div>
        <Image
          src="/img4.png"
          alt="About Preview"
          layout="responsive"
          width={1280}
          height={720}
          className=" lg:hidden blur-[100px] w-full h-full  -z-10 lg:-left-12 lg:relative absolute bottom-20"
        />
      </div>
    </section>
  );
}

function IntegrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="integrate"
      ref={ref}
      className="min-h-screen bg-landing    flex flex-col isolate items-center justify-center px-4 py-20"
    >
      <motion.h2
        className="text-[50px] 2xl:text-[80px] relative z-10 font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Integration (集成指南)
      </motion.h2>
      <motion.p
        className="text-white text-[22px] relative z-10 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Here’s a quick guide on How to Deploy RUI on Weibo
        <br />
        <small className="text-[16px] mt-2">
          这是如何在微博上部署 RUI 的快速指南
        </small>
      </motion.p>
      <div className="flex items-center relative z-20 justify-center gap-6">
        <motion.button
          className="px-8 py-3  text-[18px] flex items-center justify-center gap-2 rounded-full hover:bg-white/80  bg-white text-black transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://gitee.com/RUI25/rui" target="_blank">
            Integrate
          </a>
          <Image
            src="/gg.svg"
            alt="About Preview"
            layout="responsive"
            width={20}
            height={20}
            className=""
          />
        </motion.button>
        <motion.button
          className="px-8 py-3  text-[18px] flex items-center justify-center gap-2 rounded-full hover:bg-white/80  bg-white text-black transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://gitee.com/RUI25/rui" target="_blank">
            Webio
          </a>
          <Image
            src="/eye.svg"
            alt="About Preview"
            layout="responsive"
            width={20}
            height={20}
            className=""
          />
        </motion.button>
      </div>
      <div className="w-full full relative  max-w-6xl mx-auto mt-[60px] rounded-[25px]">
        <Image
          src="/img2.svg"
          alt="Integration Preview"
          layout="responsive"
          width={1920}
          height={1080}
          className="object-cover absolute w-[50%] -z-10 max-h-[350px]  max-w-6xl mx-auto h-[50%] blur-[200px]"
        />
        <div className="relative z-10 w-full h-full max-w-6xl mx-auto grid  grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
          {[
            {
              img: "c1.png",
              title: "Train the Model with Deepseek",
              desc: "Fine-tune the AI to engage in Mandarin discussions on Weibo.",
            },
            {
              img: "c2.png",
              title: "Set Up Weibo API Access",
              desc: "Use the official API for seamless posting and interaction..",
            },
            {
              img: "c3.png",
              title: "Deploy on Gitee",
              desc: "Open-source the deployment method, ensuring accessibility for developers.",
            },
          ].map((item, i) => (
            <div className="px-5 rounded-xl bg-[#D9D9D914] min-h-[400px] p-4 backdrop-blur-lg justify-between flex flex-col items-center gap-2">
              <Image
                key={i}
                src={`/${item.img}`}
                alt="Integration Preview"
                width={1920}
                height={1080}
                className=" h-[197px]  object-contain "
              />
              <p className="font-semibold font-inter text-[30px]">
                {item.title}
              </p>
              <p className="text-sm font-neue">{item.desc}</p>
            </div>
          ))}
        </div>
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
      id="docs"
      className=" lg:px-[100px] lg:mt-[200px] mt-[60px] font-neue 2xl:px-[136px]   py-20 px-4  bg-[#EA8010]"
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
          className="text-center mb-12 font-neue px-5 lg:px-[100px] text-[20px] font-medium"
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
        <div className="md:grid md:grid-cols-5 flex flex-col items-center justify-start w-full gap-4 ">
          <motion.div
            className="   min-w-[320px] col-span-3 backdrop-blur-lg  "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                title: "AI Development",
                content: [
                  "Built with Deepseek, trained to understand and engage in trending Weibo discussions.",
                  `Built with Deepseek, trained to understand and engage in trending Weibo discussions. Specialized in Web3 discourse, making it a unique AI-driven knowledge source.`,
                ],
              },
              {
                title: "Weibo API Integration",
                content: [
                  "Utilizes Sina Weibo’s API for real-time interactions and automated responses.",
                  `Designed to respond dynamically to trending topics.`,
                ],
              },
              {
                title: "Open-Source Framework",
                content: [
                  "All development and deployment resources are available on Gitee.",
                  `Step-by-step guides in Mandarin with English translations.`,
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-black p-4 rounded-[25px]  bg-[#D9D9D985] mb-3"
              >
                <h3 className="font-bold mb-34 text-[22.5px]">{item.title}</h3>
                <ul className="text-[20px] font-[400] mb-3 list-disc ml-3">
                  {item.content.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          <motion.div
            className=" min-w-[520px] md:h-full h-[50vh] col-span-1  backdrop-blur-lg rounded-[25px] object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/img6.svg"
              alt="Documentation Preview"
              fill
              className="object-contain w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TokenomicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="token" ref={ref} className="py-20 isolate px-4 relative">
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
  const faqs = [
    {
      question: "What is RUI? (睿是什么？)",
      answer:
        "RUI is an AI Weibo agent trained with Deepseek, designed to discuss trending topics and Web3.",
    },
    {
      question:
        "RUI engages in Mandarin using Weibo’s API, responding to comments and discussions in real-time.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt amet commodi rerum nobis cupiditate.",
    },
    {
      question:
        "Yes! The full deployment guide is open-source on Gitee, allowing anyone to build their own.",
      answer:
        "Yes! The full deployment guide is open-source on Gitee, allowing anyone to build their own.",
    },
  ];

  return (
    <section className="min-h-dvh relative flex isolate flex-col items-center justify-center w-full bg-[#131219] px-4 py-32 mt-[85px]">
      <div className="w-full max-w-6xl mx-auto pb-12 relative isolate">
        <div className="w-full h-full flex justify-center  -z-10 items-center absolute  max-h-[550px] max-w-2xl mx-auto rounded-[25px] backdrop-blur-lg">
          <Image
            src="/img2.svg"
            alt="Integration Preview"
            layout="responsive"
            width={1920}
            height={1080}
            className="object-cover  w-[50%] -z-10 max-h-[550px]  max-w-6xl mx-auto h-[50%] blur-[200px]"
          />
        </div>
        <motion.h2 className="text-4xl font-bold mb-12 text-white text-center">
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div key={i}>
              <AccordionItem
                value={`item-${i}`}
                className="border-none rounded-lg bg-white/5 overflow-hidden"
              >
                <AccordionTrigger className="text-left px-6 py-6 text-[22px] text-white hover:no-underline  transition-colors ">
                  <div className="flex justify-between items-center w-full">
                    {faq.question}
                    <PlusIcon size={28} />
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
      <div className=" -z-10 w-full  h-full bottom-0 mix-blend-luminosity absolute max-w-6xl  mx-auto flex items-center justify-center gap-4">
        <Image src={"/footer.png"} alt="Footer" fill className="object-cover" />
      </div>
      <Footer />
    </section>
  );
}

function Footer() {
  return (
    <footer className="font-inter py-10  absolute bottom-6 w-full px-4  backdrop-grayscale-0 ">
      <div className="max-w-7xl mx-auto flex mdjustify-between flex-col-reverse gap-3  md:flex-row justify-center items-center">
        <p className=" text-white/70 font-inter">
          © (RUI) {new Date().getFullYear()}. all right reserved
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://weibo.com/u/7977880057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Image
              src="/eye.svg"
              alt="About Preview"
              layout="responsive"
              width={20}
              height={20}
              className=""
            />
          </Link>
          <Link
            href="https://gitee.com/RUI25/rui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Image
              src="/gg-black.svg"
              alt="About Preview"
              layout="responsive"
              width={20}
              height={20}
              className=""
            />
          </Link>
          <Link
            href="mailto:example@email.com"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-8 w-8" fill="white" stroke="black" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
