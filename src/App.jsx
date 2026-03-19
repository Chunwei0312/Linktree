import profilePhoto from './assets/profile-photo.webp';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Background', href: '#background' }
];

const profile = {
  name: '徐淳葳',
  subtitle: '明志科技大學 工業人工智慧學士學位學程',
  role: 'Student Developer & AI Enthusiast',
  brand: 'Vivian Hsu',
  location: 'Taiwan',
  intro:
    '目前就讀明志科技大學工業人工智慧學士學位學程，平常主要接觸 Python、C/C++，也在實習與個人作品中持續練習 TypeScript / React。喜歡把想法做成可以互動的網頁與小作品，正在一步步累積軟體開發、AI 應用與前端實作的經驗。',
  about:
    '我是 Vivian，對程式設計、AI 應用和前端互動很有興趣。除了在課堂上學習，也會透過實習、作品和校內經驗持續練習拆解問題、和人合作，以及把想法實作出來，希望未來能做出更多實用又有完成度的產品，慢慢走向自己喜歡的開發方向。',
  photo: profilePhoto
};

const quickTags = [
  'TypeScript / React',
  'Python',
  'C/C++',
  'AI 輔助開發',
  '網路技術',
  '微控制器'
];

const education = [
  {
    period: '2023 - 至今',
    title: '明志科技大學',
    description:
      '工業人工智慧學士學位學程。持續學習程式設計、科技應用與相關進階實作能力。'
  },
  {
    period: '2020 - 2023',
    title: '國立臺灣海洋大學附屬高級中學',
    description:
      '資訊科。高中階段開始接觸資訊相關課程，建立對程式與科技領域的興趣與基礎。'
  }
];

const experience = [
  {
    period: '2025 / 9 - 至今',
    title: 'Smartsurgery慧術科技 軟體實習工程師',
    description:
      '協助 AI 訓練資料標註、程式開發與系統測試相關工作，累積實務經驗。'
  },
  {
    period: '2024 / 9 - 2025 / 6',
    title: '明志科技大學工業人工智慧學士學位學程學會 美宣',
    description: '負責相關視覺與宣傳工作，累積團隊協作與活動支援經驗。'
  },
  {
    period: '2024 / 9 - 2025 / 6',
    title: '明志科技大學工業人工智慧學士學位學程 班代',
    description: '協助班級溝通與事務處理，培養責任感、協調能力與執行力。'
  }
];

const socials = [
  {
    name: 'LinkedIn',
    meta: 'Chun-Wei Hsu',
    href: 'https://www.linkedin.com/in/chun-wei-hsu-vivian0312/'
  },
  {
    name: 'GitHub',
    meta: 'Chunwei0312',
    href: 'https://github.com/Chunwei0312'
  },
  {
    name: 'Email',
    meta: 'vivian940312@gmail.com',
    href: 'mailto:vivian940312@gmail.com'
  },
  {
    name: 'Instagram',
    meta: '@___.cw._.__',
    href: 'https://www.instagram.com/___.cw._.__'
  }
];

const projects = [
  {
    title: 'Dungeon Survivor',
    meta: 'Interactive Web App Project',
    href: 'https://chunwei0312.github.io/Big-Game/',
    description:
      '以 React 與 TypeScript 製作的瀏覽器遊戲作品，重點放在互動節奏、畫面呈現與遊戲邏輯整理。'
  },
  {
    title: 'Pocket Arcade',
    meta: 'Interactive Web App Project',
    href: 'https://chunwei0312.github.io/Mini-Game/',
    description:
      '用 React、TypeScript 與 Vite 製作的小型互動遊戲作品，練習元件設計、狀態處理與前端細節。'
  }
];

function isExternalLink(href) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function getLinkProps(href) {
  return isExternalLink(href)
    ? { target: '_blank', rel: 'noreferrer' }
    : {};
}

function App() {
  return (
    <main className="page-shell text-slate-900 antialiased">
      <div className="page-wrap">
        <header className="site-header">
          <div>
            <p className="eyebrow">Personal Website</p>
            <p className="site-title">{profile.brand}</p>
          </div>

          <nav className="site-nav" aria-label="Section navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="home" className="hero-grid">
          <aside className="profile-card">
            <div className="profile-frame">
              <img
                src={profile.photo}
                alt={`${profile.name} profile`}
                className="profile-image"
              />
            </div>

            <div className="mobile-profile-head">
              <p className="mobile-profile-name">{profile.name}</p>
              <p className="mobile-profile-role">{profile.role}</p>
              <p className="mobile-profile-subtitle">{profile.subtitle}</p>
            </div>

            <div className="profile-summary">
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">{profile.location}</p>
              </div>
              <div>
                <p className="info-label">Focus</p>
                <p className="info-copy">Software Development / AI / Frontend</p>
              </div>
            </div>

            <div className="profile-skills">
              <p className="card-label">Things I Work With</p>
              <div className="pill-wrap">
                {quickTags.map((tag) => (
                  <span key={tag} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="hero-copy">
            <div className="hero-heading">
              <p className="section-kicker">Personal Website</p>
              <h1 className="hero-title">Hi, I&apos;m Vivian.</h1>
              <p className="hero-subtitle">{profile.subtitle}</p>
            </div>
            <p className="hero-body">{profile.intro}</p>

            <div className="social-grid">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="social-card"
                  {...getLinkProps(item.href)}
                >
                  <p className="social-name">{item.name}</p>
                  <p className="social-meta">{item.meta}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="section-heading">
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">A little more about me</h2>
          </div>

          <div className="section-grid">
            <article className="surface-card">
              <p className="long-form">{profile.about}</p>
            </article>

            <aside className="surface-card">
              <p className="card-label">Currently</p>
              <p className="long-form">
                現在在 Smartsurgery 慧術科技擔任軟體實習工程師，接觸 AI 訓練資料整理、系統測試與開發支援，也持續用 React 和 TypeScript 製作自己的小作品，讓在學校學到的內容可以真的落到實作。
              </p>
            </aside>
          </div>
        </section>

        <section id="works" className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Featured Work</p>
            <h2 className="section-title">Selected projects</h2>
          </div>

          <div className="stack-list">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="project-card"
                {...getLinkProps(project.href)}
              >
                <div className="project-copy">
                  <p className="project-meta">{project.meta}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <span className="project-link">Visit Project</span>
              </a>
            ))}
          </div>
        </section>

        <section id="background" className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Background</p>
            <h2 className="section-title">Experience & education</h2>
          </div>

          <div className="background-grid">
            <article className="surface-card">
              <p className="card-label">Experience</p>
              <div className="entry-list">
                {experience.map((item) => (
                  <div key={`${item.period}-${item.title}`} className="entry-item">
                    <p className="entry-period">{item.period}</p>
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card">
              <p className="card-label">Education</p>
              <div className="entry-list">
                {education.map((item) => (
                  <div key={`${item.period}-${item.title}`} className="entry-item">
                    <p className="entry-period">{item.period}</p>
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
