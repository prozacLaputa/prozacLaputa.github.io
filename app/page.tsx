import Image from "next/image";

const featuredWorks = [
  {
    index: "01",
    title: "Vibe Canvas",
    englishTitle: "LIVE THINKING CANVAS",
    description: "让 Codex 对话在右侧实时长成一张可筛选、可追溯原文的思考画板。",
    meta: ["CODEX PLUGIN", "LOCAL-FIRST", "2026"],
    image: "/projects/vibe-canvas.png",
    href: "https://github.com/prozacLaputa/vibe-canvas",
    repo: "https://github.com/prozacLaputa/vibe-canvas",
    accent: "blue",
  },
  {
    index: "02",
    title: "FlashThought",
    englishTitle: "NATIVE THOUGHT CAPTURE",
    description: "不打断心流的闪念捕捉器，用全局快捷键唤出，所有笔记留在本地。",
    meta: ["MACOS", "SWIFT", "2026"],
    image: "/projects/flash-thought.png",
    href: "https://github.com/prozacLaputa/FlashThought",
    repo: "https://github.com/prozacLaputa/FlashThought",
    accent: "green",
  },
  {
    index: "03",
    title: "问筊",
    englishTitle: "CHAOSHAN JIAOBEI",
    description: "把潮汕民俗中的跋杯过程，做成一场安静、克制的 3D 浏览器体验。",
    meta: ["WEB EXPERIENCE", "NEXT.JS", "2026"],
    image: "/projects/chaoshan-jiaobei.png",
    href: "https://prozaclaputa.github.io/chaoshan-jiaobei/",
    repo: "https://github.com/prozacLaputa/chaoshan-jiaobei",
    accent: "amber",
  },
];

const moreWorks = [
  {
    title: "Pocket Observatory",
    type: "MACOS / SWIFT",
    description: "把兴趣支出、纯文本想买清单与购买后预算预演，收进一个安静的原生应用。",
    image: "/projects/pocket-observatory.png",
    href: "https://github.com/prozacLaputa/pocket-observatory",
  },
  {
    title: "起身岛",
    type: "MACOS / SWIFT",
    description: "让住在 Mac 顶部的小水滴，温柔提醒你喝口水、站起来走一会。",
    image: "/projects/standup-island.png",
    href: "https://github.com/prozacLaputa/standup-island",
  },
  {
    title: "Free3 Mapper",
    type: "MACOS / SWIFT",
    description: "不依赖原厂客户端，在 macOS 上重新定义 Free3 的 Type-C 与蓝牙按键。",
    image: "/projects/free3-mapper.png",
    href: "https://github.com/prozacLaputa/free3-mapper-macos",
  },
  {
    title: "Decision UI for Codex",
    type: "AGENT SKILL",
    description: "只在真正需要判断时，把文本选项变成 Codex 原生可点击决策。",
    image: "/projects/codex-decision-ui.png",
    href: "https://github.com/prozacLaputa/codex-decision-ui",
  },
  {
    title: "Codex Usage HUD",
    type: "MACOS / JAVASCRIPT",
    description: "把当前额度窗口的剩余百分比，安静地放进 Codex 桌面端左下角。",
    image: "/projects/codex-usage-hud.jpg",
    href: "https://github.com/prozacLaputa/codex-usage-hud",
  },
  {
    title: "快捷启动",
    type: "MACOS / SWIFT",
    description: "一个轻量的菜单栏启动器，用全局快捷键打开、聚焦或隐藏常用 App。",
    image: "/projects/app-hotkey-tool.png",
    href: "https://github.com/prozacLaputa/AppHotkeyTool",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页">
          <span>PROZAC</span><span className="wordmark-dot" aria-hidden="true" /><span>LAPUTA</span>
        </a>
        <nav aria-label="主导航">
          <a href="#works">作品</a><a href="#about">关于</a>
          <a href="https://github.com/prozacLaputa" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>ORIGINAL WORKS</span><span>2026 — NOW</span></div>
        <h1>把自己的问题，<br />做成<span className="hero-mark">可以使用</span>的作品。</h1>
        <div className="hero-footer">
          <p>我是 Prozac，一名 AI Builder。<br />在这里收集我独立设计、开发并公开的数字作品。</p>
          <a className="scroll-cue" href="#works"><span>向下看作品</span><span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="works" id="works" aria-labelledby="works-title">
        <div className="section-heading">
          <p>SELECTED WORKS</p><h2 id="works-title">近期作品</h2><span>03 / 09</span>
        </div>
        <div className="work-list">
          {featuredWorks.map((work) => (
            <article className={`work-card ${work.accent}`} key={work.title}>
              <div className="work-copy">
                <div className="work-number">{work.index}</div>
                <div>
                  <p className="work-eyebrow">{work.englishTitle}</p>
                  <h3>{work.title}</h3>
                  <p className="work-description">{work.description}</p>
                  <ul className="work-meta" aria-label="作品标签">
                    {work.meta.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="work-actions">
                  <a href={work.href} target="_blank" rel="noreferrer">查看作品 <span aria-hidden="true">↗</span></a>
                  {work.href !== work.repo && <a href={work.repo} target="_blank" rel="noreferrer">源码</a>}
                </div>
              </div>
              <a className="work-image" href={work.href} target="_blank" rel="noreferrer" aria-label={`打开 ${work.title}`}>
                <Image src={work.image} alt={`${work.title} 界面截图`} fill sizes="(max-width: 900px) 100vw, 62vw" unoptimized />
                <span className="image-arrow" aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="archive" aria-labelledby="archive-title">
        <div className="archive-heading">
          <p>MORE ORIGINAL WORKS</p>
          <h2 id="archive-title">还有六件</h2>
          <p>不是填满列表，而是解决六个我自己遇到过的问题。</p>
        </div>
        <div className="archive-grid">
          {moreWorks.map((work, index) => (
            <a className="archive-card" href={work.href} target="_blank" rel="noreferrer" key={work.title}>
              <div className="archive-image"><Image src={work.image} alt={`${work.title} 界面截图`} fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized /></div>
              <div className="archive-meta"><span>{String(index + 4).padStart(2, "0")}</span><span>{work.type}</span></div>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <span className="archive-link">VIEW ON GITHUB ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="about-label">ABOUT THE PRACTICE</p>
        <p className="about-lead">从一个真实的小问题出发，<br />一路做到自己愿意每天使用。</p>
        <p className="about-note">工具、交互实验与 macOS 应用。保持本地优先、可解释，也保留一点不必有用的好奇心。</p>
      </section>

      <footer>
        <p>PROZAC LAPUTA © 2026</p>
        <a href="https://github.com/prozacLaputa" target="_blank" rel="noreferrer">ALL WORKS ON GITHUB ↗</a>
      </footer>
    </main>
  );
}
