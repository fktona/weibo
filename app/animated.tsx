import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  en: {
    liquidityPool: "92% Liquidity Pool (Public Supply):",

    liquidityPoolDesc1:
      "The majority of the token supply will be allocated directly to a decentralized liquidity pool, ensuring accessibility and decentralization from the outset. This allocation emphasizes our commitment to public ownership and aligns with the decentralized ethos of open-source development.",
    liquidityPoolDesc2Title2: "Rationale:",
    liquidityPoolDesc2:
      "As our AI agent framework integrates with Weibo's APIs and deploys advanced natural language processing via DeepSeek, the token ensures seamless interoperability and scalability for Chinese-language datasets. By prioritizing liquidity, we establish a robust market foundation for participants leveraging our framework for AI-driven engagement across China's most prominent social ecosystem.",
    liquidityPoolDesc3Title3: "Usage:",
    liquidityPoolDesc3:
      "Users purchasing tokens from the liquidity pool will directly fund the ecosystem’s growth, ensuring alignment between early adopters and long-term project goals.",
    teamAllocation: "2% Team Allocation:",
    teamAllocationDesc1:
      "To incentivize the continued innovation and stewardship of the framework, 2% of the token supply will be allocated to the team. This allocation reflects minimal dilution and long-term commitment to the product's success.",
    teamAllocationDesc2Title2: "Purpose:",
    teamAllocationDesc2:
      "The team is focused on developing cutting-edge AI agents optimized for Chinese social media, leveraging DeepSeek to enhance both user-specific sentiment recognition and real-time engagement models unique to Weibo's network.",
    teamAllocationDesc3Title3: "Technical Description of Tokenomics:",
    teamAllocationDesc3:
      "The allocation design ensures maximum public participation while maintaining a reserve for critical operational needs.",
    teamAllocationDesc4Title4: "On-Chain Transparency:",
    teamAllocationDesc4:
      "  All allocations, including the treasury and team vesting, will be enforced through verifiable on-chain transactions to foster trust and accountability.",
    teamAllocationDesc4Title5: "Utility-Driven Demand:",
    teamAllocationDesc5:
      "The token acts as a utility layer, enabling users to access and deploy AI-driven agents capable of analyzing large-scale Weibo interactions with regional linguistic precision.",
    treasury: "6% Treasury (Locked, Vested):",
    treasuryDesc1:
      "The treasury supply will serve as a reserve for the framework's long-term sustainability, locked and vested over 12 months with a 1-month cliff. These tokens will fund critical ecosystem needs, including:",
    treasuryDesc2Title2: "Partnerships:",
    treasuryDesc2:
      "Onboarding strategic collaborators within the Chinese tech sector, including Weibo-related service providers and AI tooling platforms.",
    treasuryDesc3Title3: "Technical Enhancements:",
    treasuryDesc3:
      "Expansion of the AI framework to process region-specific sentiment analysis, optimize NLP algorithms for Chinese dialects, and scale user interactions efficiently.",
    treasuryDesc4Title4: "Localization:",
    treasuryDesc4:
      "Ensuring continued compliance with regional data regulations such as the Personal Information Protection Law (PIPL), alongside optimization for Weibo's dynamic content ecosystem.",
  },
  zh: {
    liquidityPool: "92% 流动性池（公共供应）：",
    liquidityPoolDesc1:
      "代币供应的大部分将直接分配给去中心化流动性池，从一开始就确保可访问性和去中心化。这种分配强调了我们对公共所有权的承诺，并与开源开发的去中心化理念相一致。",
    liquidityPoolDesc2Title2: "理由：",
    liquidityPoolDesc2:
      "随着我们的AI代理框架与微博的API集成，并通过DeepSeek部署先进的自然语言处理，该代币确保了中文数据集的无缝互操作性和可扩展性。通过优先考虑流动性，我们为参与者建立了一个强大的市场基础，以利用我们的框架在中国最突出的社交生态系统中进行AI驱动的参与。",
    liquidityPoolDesc3Title3: "用途：",
    liquidityPoolDesc3:
      "从流动性池购买代币的用户将直接资助生态系统的增长，确保早期采用者与长期项目目标之间的一致性。",
    teamAllocation: "2% 团队分配：",
    teamAllocationDesc1:
      "为了激励框架的持续创新和管理，2%的代币供应将分配给团队。这种分配反映了最小的稀释和对产品成功的长期承诺。",
    teamAllocationDesc2Title2: "目的：",
    teamAllocationDesc2:
      "团队专注于开发为中国社交媒体优化的尖端AI代理，利用DeepSeek来增强用户特定的情感识别和独特于微博网络的实时参与模型。",
    teamAllocationDesc3Title3: "代币经济学技术描述：",
    teamAllocationDesc3:
      "分配设计确保最大程度的公众参与，同时为关键运营需求保留储备。",
    teamAllocationDesc4Title4: "链上透明度：",
    teamAllocationDesc4:
      "  所有分配，包括国库和团队归属，将通过可验证的链上交易强制执行，以培养信任和问责制。",
    teamAllocationDesc4Title5: "实用驱动需求：",
    teamAllocationDesc5:
      "该代币作为一个实用层，使用户能够访问和部署能够分析大规模微博互动的AI驱动代理，具有区域语言精确性。",
    treasury: "6% 国库（锁定，归属）：",
    treasuryDesc1:
      "国库供应将作为框架长期可持续性的储备，锁定并在 12 个月内兑现，并有 1 个月的悬崖。这些代币将为关键的生态系统需求提供资金，包括",
    treasuryDesc2Title2: "合作伙伴：",
    treasuryDesc2:
      "在中国科技领域引入战略合作伙伴，包括微博相关服务提供商和人工智能工具平台。",
    treasuryDesc3Title3: "技术增强：",
    treasuryDesc3:
      "扩展AI框架以处理特定区域的情感分析，优化中文方言的NLP算法，并有效扩展用户互动。",
    treasuryDesc4Title4: "本地化：",
    treasuryDesc4:
      "本地化：确保持续遵守地区数据法规，如个人信息保护法（PIPL），同时优化微博的动态内容生态系统。",
  },
};

const AnimatedCard = ({ children, isHovered, language }) => {
  return (
    <motion.div
      className="h-full p-4 flex items-center bg-white/15 rounded-[8px] md:min-h-[850px] min-h-[650px] backdrop-blur-lg overflow-hidden"
      style={{ transform: "rotate(0deg)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={language}
          className="flex flex-col items-start lg:gap-4 gap-2 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

function TokenomicsSections() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [languages, setLanguages] = useState(["en", "en", "en"]);
  const [hoveredStates, setHoveredStates] = useState([false, false, false]);

  useEffect(() => {
    const intervals = [null, null, null];
    hoveredStates.forEach((isHovered, index) => {
      if (!isHovered) {
        intervals[index] = setInterval(() => {
          setLanguages((prev) =>
            prev.map((lang, i) =>
              i === index ? (lang === "en" ? "zh" : "en") : lang
            )
          );
        }, 1000);
      }
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [hoveredStates]);

  const handleMouseEnter = (index) => {
    setHoveredStates((prev) =>
      prev.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeave = (index) => {
    setHoveredStates([false, false, false]);
  };

  return (
    <IntlProvider messages={messages[languages[0]]} locale={languages[0]}>
      <section
        id="token"
        ref={ref}
        className="py-20 isolate md:min-h-[1865px] min-h-[350vh]  relative max-w-screen-2xl lg:px-[110px] mx-auto"
      >
        <h1 className="font-bold text-[46px] leading-[55px] font-neue text-start my-10">
          Tokenomics
        </h1>
        <div className="">
          <motion.div
            className="items-center gap-6 grid md:grid-cols-2 grid-cols-1 px-5 justify-between relative isolate mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full p-4 flex items-center md:bg-white/15 rounded-[8px] md:min-h-[850px] min-h-[650px] backdrop-blur-lg overflow-hidden">
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
                    className="rounded-lg blur-[100px] relative"
                  />
                </div>
              </div>
            </div>
            {[0, 1, 2].map((index) => (
              <AnimatedCard
                key={index}
                isHovered={hoveredStates[index]}
                language={languages[index]}
              >
                <div
                  className="w-full h-full"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <IntlProvider
                    messages={messages[languages[index]]}
                    locale={languages[index]}
                  >
                    {index === 0 && (
                      <>
                        <div className="flex justify-start lg:text-[30px] text-[18px] gap-2">
                          <div className="font-medium flex px-2 lg:px-0 items-center justify-center gap-2">
                            <div
                              className="lg:w-5 lg:h-7 w-4 h-5 text-[30px]   rounded-full lg:relative absolute left-1 lg:left-0"
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
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="liquidityPoolDesc2Title2" />
                            </span>
                            <FormattedMessage id="liquidityPoolDesc2" />
                          </p>
                          <p>
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="liquidityPoolDesc3Title3" />
                            </span>
                            <FormattedMessage id="liquidityPoolDesc3" />
                          </p>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex justify-start lg:text-[30px] text-[18px] gap-2">
                          <div className="font-medium flex items-center px-2 lg:px-0 justify-center gap-2">
                            <div
                              className="lg:w-5 lg:h-7 w-4 h-5 text-[30px]  left-1  rounded-full lg:relative absolute  lg:left-0"
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
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="teamAllocationDesc2Title2" />
                            </span>
                            <FormattedMessage id="teamAllocationDesc2" />
                          </p>
                          <p>
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="teamAllocationDesc3Title3" />
                            </span>
                            <FormattedMessage id="teamAllocationDesc3" />
                          </p>
                          <p>
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="teamAllocationDesc4Title4" />
                            </span>
                            <FormattedMessage id="teamAllocationDesc4" />
                          </p>
                          <p>
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="teamAllocationDesc4Title5" />
                            </span>
                            <FormattedMessage id="teamAllocationDesc5" />
                          </p>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex justify-start lg:text-[30px] text-[18px] gap-2">
                          <div className="font-medium flex items-center  px-2 lg:px-0 justify-center gap-2">
                            <div
                              className="lg:w-5 lg:h-7 w-4 h-5 text-[30px] rounded-full left-1  lg:relative absolute  lg:left-0"
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
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="treasuryDesc2Title2" />
                            </span>
                            <FormattedMessage id="treasuryDesc2" />
                          </p>
                          <p>
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="treasuryDesc3Title3" />
                            </span>
                            <FormattedMessage id="treasuryDesc3" />
                          </p>
                          <p>
                            <span className="font-semibold mr-1">
                              <FormattedMessage id="treasuryDesc4Title4" />
                            </span>
                            <FormattedMessage id="treasuryDesc4" />
                          </p>
                        </div>
                      </>
                    )}
                  </IntlProvider>
                </div>
              </AnimatedCard>
            ))}
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

export default TokenomicsSections;
