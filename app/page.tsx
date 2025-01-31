"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Mail, Menu, PlusIcon, Twitter, X } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useInView as useInView2 } from "react-intersection-observer";
import { IntlProvider, FormattedMessage } from "react-intl";

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
  { href: "#about", label: "About", trans: "关于" },
  { href: "#docs", label: "Documentation", trans: "文档" },
  { href: "#token", label: "Tokenomics", trans: "代币经济学" },
  { href: "#integrate", label: "Integrate", trans: "整合" },
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
              className="hover:text-blue-400 flex flex-col items-center  transition-colors"
            >
              {item.label}
              <span className="text-sm">({item.trans})</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 hidden md:block bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors">
            <a href="https://gitee.com/RUI25/rui" target="_blank">
              Get Started <span className="text-sm">(开始使用)</span>
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
                  className="text-2xl font-semibold flex flex-col items-center hover:text-blue-400  transition-colors py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}

                  <span className="text-sm">({item.trans})</span>
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://gitee.com/RUI25/rui"
              target="_blank"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: navItems.length * 0.1 }}
              className="mt-8 px-6 py-3 bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.a>
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
          <a
            href="#about"
            className="lg:px-6 px-3 py-4 lg:text-[17px] font-inter text-[14px] bg-[#EA8010] text-white rounded-full hover:bg-[#EA8010]/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="https://weibo.com/u/7977880057"
            target="_blank"
            className="lg:px-6 px-3 py-4 lg:text-[17px] text-[14px] font-inter border border-white rounded-full  hover:bg-white/10 transition-colors"
          >
            RUI on Weibo
          </a>
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

          <motion.a
            href="https://weibo.com/u/7977880057"
            target="_blank"
            className="px-6 py-3 w-fit lg:hidden border font-semibold mb-32 border-white rounded-full hover:bg-white/80 bg-white text-black  transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn more (了解更多)
          </motion.a>
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
        <motion.a
          href="https://weibo.com/u/7977880057"
          target="_blank"
          className="px-6 py-3 border w-fit hidden lg:block font-semibold mb-32 border-white rounded-full hover:bg-white/80 bg-white text-black  transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Learn more (了解更多)
        </motion.a>
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
        <motion.a
          href="https://gitee.com/RUI25/rui"
          target="_blank"
          className="px-8 py-3  text-[18px] flex items-center justify-center gap-2 rounded-full hover:bg-white/80  bg-white text-black transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Integrate
          <Image
            src="/gg.svg"
            alt="About Preview"
            layout="responsive"
            width={20}
            height={20}
            className=""
          />
        </motion.a>
        <motion.a
          href="https://weibo.com/u/7977880057"
          target="_blank"
          className="px-8 py-3  text-[18px] flex items-center justify-center gap-2 rounded-full hover:bg-white/80  bg-white text-black transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Weibo
          <Image
            src="/eye.svg"
            alt="About Preview"
            layout="responsive"
            width={20}
            height={20}
            className=""
          />
        </motion.a>
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
        <div className="relative z-10 w-fit h-full max-w-6xl mx-auto grid  grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4 place-items-center">
          {[
            {
              img: "c1.png",
              title: "Train the Model with Deepseek(使用 Deepseek 训练模型)",
              desc: "Fine-tune the AI to engage in Mandarin discussions on Weibo.(微调人工智能以在微博上进行普通话讨论。)",
            },
            {
              img: "c2.png",
              title: "Set Up Weibo API Access(设置微博 API 访问)",
              desc: "Use the official API for seamless posting and interaction.(使用官方API进行无缝发布和交互。)",
            },
            {
              img: "c3.png",
              title: "Deploy on Gitee(部署在Gitee上)",
              desc: "Open-source the deployment method, ensuring accessibility for developers. (开源部署方法，确保开发者可访问性)",
            },
          ].map((item, i) => (
            <div className="px-5 rounded-xl max-w-[338px] bg-[#D9D9D914] h-[426px]  p-4 backdrop-blur-lg justify-between flex flex-col items-center gap-2">
              <Image
                key={i}
                src={`/${item.img}`}
                alt="Integration Preview"
                width={1920}
                height={1080}
                className={cn(
                  " h-[197px]  object-cover ",
                  i == 0 && "object-contain"
                )}
              />
              <p className="font-semibold font-inter leading-[36px] grow text-[27px]">
                {item.title}
              </p>
              <p className="text-sm lg:text-[16px] leading-[21px] font-neue">
                {item.desc}
              </p>
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
          Easy (简单的)
        </button>
        <motion.h2
          className="text-[30px] font-medium mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Documentation Page (文档)
        </motion.h2>
        <motion.p
          className="text-center hidden mb-12 font-neue px-5 lg:px-[100px] text-[20px] font-medium"
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
                title: "AI Development(人工智能开发)",
                content: [
                  "Built with Deepseek, trained to understand and engage in trending Weibo discussions.(使用 Deepseek 构建，经过培训可以理解并参与热门微博讨论。)",
                  `Built with Deepseek, trained to understand and engage in trending Weibo discussions. Specialized in Web3 discourse, making it a unique AI-driven knowledge source.(使用 Deepseek 构建，经过培训可以理解并参与热门微博讨论。专注于Web3话语，使其成为独特的人工智能驱动的知识源)`,
                ],
              },
              {
                title: "Weibo API Integration(微博API集成)",
                content: [
                  "Utilizes Sina Weibo’s API for real-time interactions and automated responses.(利用新浪微博的 API 进行实时交互和自动响应。)",
                  `Designed to respond dynamically to trending topics.(旨在动态响应热门话题。)`,
                ],
              },
              {
                title: "Open-Source Framework(开源框架)",
                content: [
                  "All development and deployment resources are available on Gitee.(所有开发和部署资源都可以在 Gitee 上获取。)",
                  `(Step-by-step guides in Mandarin with English translations.(普通话分步指南，附有英文翻译。)`,
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-black p-4 rounded-[25px]  bg-[#D9D9D985] mb-3"
              >
                <h3 className="font-bold mb-34 text-[22.5px] leading-[36px]">
                  {item.title}
                </h3>
                <ul className="text-[20px] font-[400]  mb-3 list-disc ml-3">
                  {item.content.map((text, i) => (
                    <li key={i} className="leading-[21px] my-2">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="md:min-w-[437px] min-w-[379px] md:h-[573px] h-[50vh] col-span-1  backdrop-blur-lg relative rounded-[25px] object-cover"
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
            <motion.a
              href="https://gitee.com/RUI25/rui"
              target="_blank"
              className="px-8 py-3  absolute bottom-3  md:right-3 right-16 text-[18px] flex items-center justify-center gap-2 rounded-full hover:bg-white/80  bg-white text-black transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Integrate
              <Image
                src="/gg.svg"
                alt="About Preview"
                layout="responsive"
                width={20}
                height={20}
                className=""
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type Messages = {
  [key: string]: {
    liquidityPool: string;
    liquidityPoolDesc1: string;
    liquidityPoolDesc2: string;
    liquidityPoolDesc3: string;
    teamAllocation: string;
    teamAllocationDesc1: string;
    teamAllocationDesc2: string;
    teamAllocationDesc3: string;
    teamAllocationDesc4: string;
    treasury: string;
    treasuryDesc1: string;
    treasuryDesc2: string;
    treasuryDesc3: string;
  };
};

const messages: Messages = {
  en: {
    liquidityPool: "92% Liquidity Pool (Public Supply):",
    liquidityPoolDesc1:
      "The majority of the token supply will be allocated directly to a decentralized liquidity pool, ensuring accessibility and decentralization from the outset. This allocation emphasizes our commitment to public ownership and aligns with the decentralized ethos of open-source development.",
    liquidityPoolDesc2:
      "Rationale: As our AI agent framework integrates with Weibo's APIs and deploys advanced natural language processing via DeepSeek, the token ensures seamless interoperability and scalability for Chinese-language datasets. By prioritizing liquidity, we establish a robust market foundation for participants leveraging our framework for AI-driven engagement across China's most prominent social ecosystem.",
    liquidityPoolDesc3:
      "Usage: Users purchasing tokens from the liquidity pool will directly fund the ecosystem’s growth, ensuring alignment between early adopters and long-term project goals.",
    teamAllocation: "2% Team Allocation:",
    teamAllocationDesc1:
      "To incentivize the continued innovation and stewardship of the framework, 2% of the token supply will be allocated to the team. This allocation reflects minimal dilution and long-term commitment to the product's success.",
    teamAllocationDesc2:
      "Purpose: The team is focused on developing cutting-edge AI agents optimized for Chinese social media, leveraging DeepSeek to enhance both user-specific sentiment recognition and real-time engagement models unique to Weibo's network.",
    teamAllocationDesc3:
      "Technical Description of Tokenomics: The allocation design ensures maximum public participation while maintaining a reserve for critical operational needs. On-Chain Transparency: All allocations, including the treasury and team vesting, will be enforced through verifiable on-chain transactions to foster trust and accountability.",
    teamAllocationDesc4:
      "Utility-Driven Demand: The token acts as a utility layer, enabling users to access and deploy AI-driven agents capable of analyzing large-scale Weibo interactions with regional linguistic precision.",
    treasury: "6% Treasury (Locked, Vested):",
    treasuryDesc1:
      "The treasury supply will serve as a reserve for the framework's long-term sustainability, locked and vested over 12 months with a 1-month cliff. These tokens will fund critical ecosystem needs, including: Partnerships: Onboarding strategic collaborators within the Chinese tech sector, including Weibo-related service providers and AI tooling platforms.",
    treasuryDesc2:
      "Technical Enhancements: Expansion of the AI framework to process region-specific sentiment analysis, optimize NLP algorithms for Chinese dialects, and scale user interactions efficiently.",
    treasuryDesc3:
      "Localization: Ensuring continued compliance with regional data regulations such as the Personal Information Protection Law (PIPL), alongside optimization for Weibo's dynamic content ecosystem.",
  },
  zh: {
    liquidityPool: "92% 流动性池（公共供应）：",
    liquidityPoolDesc1:
      "代币供应的大部分将直接分配给去中心化流动性池，从一开始就确保可访问性和去中心化。这种分配强调了我们对公共所有权的承诺，并与开源开发的去中心化理念相一致。",
    liquidityPoolDesc2:
      "理由：随着我们的AI代理框架与微博的API集成，并通过DeepSeek部署先进的自然语言处理，该代币确保了中文数据集的无缝互操作性和可扩展性。通过优先考虑流动性，我们为参与者建立了一个强大的市场基础，以利用我们的框架在中国最突出的社交生态系统中进行AI驱动的参与。",
    liquidityPoolDesc3:
      "用途：从流动性池购买代币的用户将直接资助生态系统的增长，确保早期采用者与长期项目目标之间的一致性。",
    teamAllocation: "2% 团队分配：",
    teamAllocationDesc1:
      "为了激励框架的持续创新和管理，2%的代币供应将分配给团队。这种分配反映了最小的稀释和对产品成功的长期承诺。",
    teamAllocationDesc2:
      "目的：团队专注于开发为中国社交媒体优化的尖端AI代理，利用DeepSeek来增强用户特定的情感识别和独特于微博网络的实时参与模型。",
    teamAllocationDesc3:
      "代币经济学技术描述：分配设计确保最大程度的公众参与，同时为关键运营需求保留储备。链上透明度：所有分配，包括国库和团队归属，将通过可验证的链上交易强制执行，以培养信任和问责制。",
    teamAllocationDesc4:
      "实用驱动需求：该代币作为一个实用层，使用户能够访问和部署能够分析大规模微博互动的AI驱动代理，具有区域语言精确性。",
    treasury: "6% 国库（锁定，归属）：",
    treasuryDesc1:
      "国库供应将作为框架长期可持续性的储备，在12个月内锁定和归属，1个月悬崖期。这些代币将为关键的生态系统需求提供资金，包括：合作伙伴关系：在中国科技领域引入战略合作者，包括与微博相关的服务提供商和AI工具平台。",
    treasuryDesc2:
      "技术增强：扩展AI框架以处理特定区域的情感分析，优化中文方言的NLP算法，并有效扩展用户互动。",
    treasuryDesc3:
      "本地化：确保持续遵守地区数据法规，如个人信息保护法（PIPL），同时优化微博的动态内容生态系统。",
  },
};

function TokenomicsSection() {
  const [ref, inView] = useInView2({ threshold: 0.1, triggerOnce: true });
  const [language, setLanguage] = useState("en");
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setLanguage((prev) => (prev === "en" ? "zh" : "en"));
      }, 2000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <IntlProvider messages={messages[language]} locale={language}>
      <section
        id="token"
        ref={ref}
        className="py-20 isolate md:min-h-[1865px] min-h-[350vh]  px-4 relative max-w-7xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="font-bold text-[46px] leading-[55px] font-neue text-start my-10">
          Tokenomincs
        </h1>
        <div className="">
          <motion.div
            className="items-center gap-6  grid md:grid-cols-2 grid-cols-1 px-5 justify-between relative isolate mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-full min-h-[652px] flex items-center justify-center relative max-w-[550px] max-h-[600px]">
              <Image
                src="/chart.svg"
                alt="Tokenomics Preview"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
              />
              <div className="w-full h-full hidden lg:block -z-10 absolute left-0 bottom-0">
                <Image
                  src="/img.png"
                  alt="About Preview"
                  layout="responsive"
                  width={1280}
                  height={720}
                  className="rounded-lg blur-[100px]  relative"
                />
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                className="flex flex-col h-full items-start lg:gap-4 gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-start lg:text-[30px] text-[18px] gap-2">
                  <div className="font-medium flex items-center justify-center gap-2">
                    <div
                      className="lg:w-5 lg:h-7 w-4 h-5 text-[30px] rounded-full lg:relative absolute -left-2 lg:left-0"
                      style={{ backgroundColor: "#3983FF" }}
                    />
                    <FormattedMessage id="liquidityPool" />
                  </div>
                </div>
                <div className="lg:text-[22px] leading-[26px] text-[14px] lg:px-8 space-y-3">
                  <p>
                    <FormattedMessage id="liquidityPoolDesc1" />
                  </p>
                  <p>
                    <FormattedMessage id="liquidityPoolDesc2" />
                  </p>
                  <p>
                    <FormattedMessage id="liquidityPoolDesc3" />
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                className="flex flex-col items-start lg:gap-4 gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-start lg:text-[30px] text-[18px] gap-2">
                  <div className="font-medium flex items-center justify-center gap-2">
                    <div
                      className="lg:w-5 lg:h-7 w-4 h-5 text-[30px] rounded-full lg:relative absolute -left-2 lg:left-0"
                      style={{ backgroundColor: "white" }}
                    />
                    <FormattedMessage id="teamAllocation" />
                  </div>
                </div>
                <div className="lg:text-[22px] text-[14px] lg:px-8 space-y-3">
                  <p>
                    <FormattedMessage id="teamAllocationDesc1" />
                  </p>
                  <p>
                    <FormattedMessage id="teamAllocationDesc2" />
                  </p>
                  <p>
                    <FormattedMessage id="teamAllocationDesc3" />
                  </p>
                  <p>
                    <FormattedMessage id="teamAllocationDesc4" />
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                className="flex flex-col items-start   h-full lg:gap-4 gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-start lg:text-[30px] text-[18px] gap-2">
                  <div className="font-medium flex items-center justify-center gap-2">
                    <div
                      className="lg:w-5 lg:h-7 w-4 h-5 text-[30px] rounded-full lg:relative absolute -left-2 lg:left-0"
                      style={{ backgroundColor: "#EA8010" }}
                    />
                    <FormattedMessage id="treasury" />
                  </div>
                </div>
                <div className="lg:text-[22px] text-[14px] lg:px-8 space-y-3">
                  <p>
                    <FormattedMessage id="treasuryDesc1" />
                  </p>
                  <p>
                    <FormattedMessage id="treasuryDesc2" />
                  </p>
                  <p>
                    <FormattedMessage id="treasuryDesc3" />
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        <Image
          src="/img.png"
          alt="About Preview"
          width={300}
          height={300}
          className="rounded-lg w-[300px] aspect-square -z-10 lg:hidden absolute bottom-0 blur-[100px]"
        />
      </section>
    </IntlProvider>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "What is RUI? (睿是什么？)",
      answer:
        "RUI is an AI Weibo agent trained with Deepseek, designed to discuss trending topics and Web3. RUI 是一款经过 Deepseek 训练的人工智能微博代理，旨在讨论热门话题和 Web3。",
    },
    {
      question: "How does RUI interact with users? (睿如何与用户互动？)",
      answer:
        "RUI engages in Mandarin using Weibo’s API, responding to comments and discussions in real-time. RUI使用微博API参与普通话，实时回复评论和讨论",
    },
    {
      question:
        "Can I create my own AI agent on Weibo? (我可以创建自己的AI代理吗？)",
      answer:
        "Yes! The full deployment guide is open-source on Gitee, allowing anyone to build their own. 是的！完整的部署指南在 Gitee 上开源，任何人都可以构建自己的指南。",
    },
  ];

  return (
    <section className="min-h-dvh relative flex isolate flex-col items-center justify-center w-full bg-[#131219] px-4 py-32 mt-[85px]">
      <div className="w-full max-w-6xl mx-auto pb-12 relative isolate">
        {/* <div className="w-full h-full flex justify-center  -z-10 items-center absolute  max-h-[550px] max-w-2xl mx-auto rounded-[25px] backdrop-blur-lg">
          <Image
            src="/img2.svg"
            alt="Integration Preview"
            layout="responsive"
            width={1920}
            height={1080}
            className="object-cover  w-[50%] -z-10 max-h-[550px]  max-w-6xl mx-auto h-[50%] blur-[200px]"
          />
        </div> */}
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
                <AccordionContent className="px-6 py-4 text-[18px] text-gray-300">
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
          © (RUI) {new Date().getFullYear()}. all right reserved (保留所有权利)
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
