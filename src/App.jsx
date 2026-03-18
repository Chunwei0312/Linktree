import profilePhoto from './assets/profile-photo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' }
];

const profile = {
  name: '徐淳葳',
  subtitle: '明志科技大學 工業人工智慧學士學位學程',
  location: 'Taiwan',
  intro:
    '目前就讀明志科技大學工業人工智慧學士學位學程，從高中開始接觸資訊相關課程，對程式設計與科技應用充滿興趣，主要使用 Python 與 C/C++。',
  about:
    '我的個性比較內向，但做事細心、負責任，遇到任務會努力做到最好。雖然目前還在累積實務經驗，但我學習意願高、適應力強，期待持續在實作中成長，朝軟體開發或 AI 技術方向發展。',
  photo: profilePhoto
};

const quickTags = ['Typescript/React','Python', 'C/C++', 'AI-assisted development', '網路技術', '微控制器'];

const education = [
  {
    period: '2023 - 至今',
    title: '明志科技大學',
    description: '工業人工智慧學士學位學程。持續學習程式設計、科技應用與相關實作能力。'
  },
  {
    period: '2020 - 2023',
    title: '國立臺灣海洋大學附屬高級中學',
    description: '資訊科。高中階段開始接觸資訊相關課程，建立對程式與科技領域的興趣。'
  }
];

const experience = [
  {
    period: '2025 / 9 - 2026 / 9',
    title: 'Smartsurgery慧術科技 軟體實習工程師',
    description: '協助AI訓練資料標註、程式開發與系統測試相關工作，累積實務經驗。'
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
  { name: 'LinkedIn', meta: 'Chun wei Hsu', href: 'https://www.linkedin.com/in/chun-wei-hsu-vivian0312/' },
  { name: 'GitHub', meta: 'Chunwei0312', href: 'https://github.com/Chunwei0312' },
  {
    name: 'Email',
    meta: 'vivian940312@gmail.com',
    href: 'mailto:vivian940312@gmail.com'
  },
  { name: 'Instagram', meta: '@___.cw._.__', href: 'https://www.instagram.com/___.cw._.__' }
];

const projects = [
  {
    name: 'Dungeon Survivor | Interactive Web App Project',
    meta: 'Game Project',
    href: 'https://chunwei0312.github.io/Big-Game/',
    description:
      '以 React、TypeScript、Canvas 與 Zustand 開發的瀏覽器遊戲原型，展示模組化前端架構、即時渲染、狀態管理、碰撞邏輯與 responsive UI 實作能力。',
    tone: 'from-[#ece3d8] via-[#fffaf6] to-[#e7dbcf]'
  },
  {
    name: 'Pocket Arcade | Web App Engineering Project',
    meta: 'Game Project',
    href: 'https://chunwei0312.github.io/Mini-Game/',
    description:
      '使用 React、TypeScript 與 Vite 建立的互動式 Web App，涵蓋元件化設計、遊戲邏輯拆分、測試驗證與前端架構整理。',
    tone: 'from-[#e1e7de] via-[#fbfdfb] to-[#e6ece3]'
  }
];

const socialTones = [
  'from-[#f4e5dc] via-[#fff9f6] to-[#e9ddd3]',
  'from-[#dfe7df] via-[#fbfdfb] to-[#e8efe7]',
  'from-[#ebe4dc] via-[#fffdfa] to-[#ede8e1]',
  'from-[#efe2e7] via-[#fff9fc] to-[#eadde4]'
];

function isExternalLink(href) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function App() {
  return (
    <main className="korean-bg min-h-screen overflow-hidden px-4 py-5 text-[#2d2825] sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-blur left-[8%] top-[8%] h-56 w-56 bg-[#f1d9d0]" />
        <div className="ambient-blur right-[6%] top-[18%] h-72 w-72 bg-[#dbe7dc]" />
        <div className="ambient-blur bottom-[10%] left-[46%] h-64 w-64 bg-[#ece1d8]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 pb-8 pt-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.42em] text-[#8f7a6d]">
              Personal Page
            </p>
            <p className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-none text-[#2d2825]">
              {profile.name}
            </p>
          </div>

          <nav className="flex flex-wrap gap-2.5">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="soft-pill">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section
          id="home"
          className="grid items-center gap-8 border-t border-white/60 py-8 lg:grid-cols-[1fr_1.02fr] lg:gap-12 lg:py-12"
        >
          <div className="space-y-6">
            <span className="soft-label">Personal introduction page</span>

            <div className="space-y-4">
              <h1 className="font-display text-[clamp(3.2rem,8vw,5.8rem)] leading-[0.9] text-[#221d1a]">
                About me,
                <br />
                simply.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#5d5149] sm:text-xl">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {quickTags.map((tag) => (
                <span key={tag} className="mini-chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {socials.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={isExternalLink(item.href) ? '_blank' : undefined}
                  rel={isExternalLink(item.href) ? 'noreferrer' : undefined}
                  className={`soft-link group flex min-h-[12.5rem] flex-col justify-between bg-gradient-to-br ${socialTones[index % socialTones.length]}`}
                >
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b8577]">
                        Social
                      </p>
                      <span className="soft-arrow shrink-0">↗</span>
                    </div>

                    <p className="mt-5 font-display text-[2.4rem] leading-[0.95] text-[#2d2825] sm:text-[2.7rem]">
                        {item.name}
                    </p>

                    <p className="social-meta mt-4 text-sm leading-6 text-[#62564e] sm:text-[0.95rem]">
                      {item.meta}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/70 pt-4">
                    <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#8f7a6d]">
                      Open link
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="editorial-card overflow-hidden bg-white/78 p-5 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f4ebe4] via-[#fdfbf8] to-[#e8ddd3] p-4">
                <img
                  src={profile.photo}
                  alt={`${profile.name} profile`}
                  className="h-full min-h-[26rem] w-full rounded-[1.6rem] object-cover object-center"
                />
                <div className="absolute bottom-8 left-8 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-[#8f7a6d] backdrop-blur">
                  Personal photo
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="soft-panel flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b8577]">
                    Name
                  </p>
                  <p className="mt-3 font-display text-4xl leading-none text-[#2d2825]">
                    {profile.name}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#62564e]">
                    {profile.subtitle}
                  </p>
                </div>

                <div className="soft-panel bg-[#f6efe9]/82">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b8577]">
                    Location
                  </p>
                  <p className="mt-3 font-display text-3xl leading-none text-[#2d2825]">
                    {profile.location}
                  </p>
                </div>

                <div className="soft-panel bg-[#dfe7df]/75">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c756d]">
                    Focus
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#526054]">
                    目前頁面以照片、自我介紹、學歷、經歷與社群連結為主，適合當個人入口頁。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="works"
          className="grid gap-6 border-t border-white/60 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-14"
        >
          <div className="space-y-4">
            <span className="soft-label">Works</span>
            <div className="editorial-card bg-white/78 p-6 sm:p-7">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.92] text-[#221d1a]">
                Selected
                <br />
                projects
              </h2>
              <p className="mt-5 text-base leading-8 text-[#62564e]">
                目前先放兩個已經上線的遊戲作品，讓這頁除了自我介紹之外，也能直接看到實作成果。
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`soft-link group flex min-h-[13rem] flex-col justify-between bg-gradient-to-br ${project.tone}`}
              >
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b8577]">
                      {project.meta}
                    </p>
                    <span className="soft-arrow shrink-0">↗</span>
                  </div>

                  <p className="mt-5 font-display text-[2.5rem] leading-[0.95] text-[#2d2825] sm:text-[2.9rem]">
                    {project.name}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#62564e] sm:text-[0.98rem]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/70 pt-4">
                  <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#8f7a6d]">
                    Visit project
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-6 border-t border-white/60 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-14"
        >
          <div className="space-y-4">
            <span className="soft-label">About</span>
            <div className="editorial-card bg-white/78 p-6 sm:p-7">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.92] text-[#221d1a]">
                Self introduction
              </h2>
              <p className="mt-5 text-base leading-8 text-[#62564e]">
                {profile.about}
              </p>
            </div>

            <div className="soft-panel bg-[#f3e4e8]/78">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8f6f7d]">
                Suggested content
              </p>
              <p className="mt-3 text-base leading-7 text-[#62564e]">
                內容參考你的履歷整理成較適合網頁閱讀的版本，後續還可以再微調語氣或長度。
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="editorial-card bg-white/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b8577]">
                Education
              </p>
              <div className="mt-5 space-y-4">
                {education.map((item) => (
                  <div
                    key={`${item.period}-${item.title}`}
                    className="rounded-[1.5rem] border border-white/80 bg-[#f8f4ef]/90 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9b8577]">
                      {item.period}
                    </p>
                    <p className="mt-2 font-display text-3xl leading-none text-[#2d2825]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#62564e]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-card bg-white/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b8577]">
                Experience
              </p>
              <div className="mt-5 space-y-4">
                {experience.map((item) => (
                  <div
                    key={`${item.period}-${item.title}`}
                    className="rounded-[1.5rem] border border-white/80 bg-[#f8f4ef]/90 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9b8577]">
                      {item.period}
                    </p>
                    <p className="mt-2 font-display text-3xl leading-none text-[#2d2825]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#62564e]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
