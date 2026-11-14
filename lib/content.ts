/**
 * Rayno Landing Page Content
 * Exact copy from content.json/content.md handoff
 * All strings are preserved exactly, including ZWNJ ‌, ٔ, and «»
 */

export const content = {
  site: {
    title: "راینو - سایت و اپلیکیشن کاملاً اختصاصی، با سرعت و هزینهٔ یک راهکار آماده",
    description: "ظاهر محصول شما از صفر و مخصوص برندتان طراحی می‌شود؛ بک‌اند، پنل مدیریت و ماژول‌ها از قبل آماده‌اند.",
  },

  header: {
    nav: [
      { label: "چرا راینو", href: "#why-rayno" },
      { label: "راینو چطور کار می‌کند", href: "#how-it-works" },
      { label: "چه می‌شود ساخت", href: "#products" },
      { label: "مقایسه", href: "#compare" },
      { label: "سؤالات متداول", href: "#faq" },
    ],
    cta: "مشاورهٔ رایگان",
  },

  hero: {
    badge: "طراحی اختصاصی شما + زیرساخت آمادهٔ راینو",
    eyebrow: "HEADLESS",
    title: {
      line1: "سایت و اپلیکیشن ",
      highlight: "کاملاً اختصاصی", // Gradient text
      line2: "با سرعت و هزینهٔ یک راهکار آماده",
    },
    subtitle:
      "ظاهر محصول شما از صفر و مخصوص برندتان طراحی می‌شود؛ بک‌اند، پنل مدیریت و ماژول‌ها از قبل آماده‌اند. نتیجه، محصولی منحصربه‌فرد و همیشه به‌روز است؛ بدون دردسرهای وردپرس و قالب‌های آماده.",
    ctas: {
      primary: "درخواست مشاورهٔ رایگان",
      primaryHref: "#cta",
      secondary: "راینو چطور کار می‌کند؟",
      secondaryHref: "#how-it-works",
    },
    // RTL order (rightmost first)
    benefits: [
      "کد اختصاصی، نه قالب آماده",
      "همیشه به‌روز",
      "هزینهٔ منطقی و شفاف",
      "راه‌اندازی سریع",
    ],
    customDesign: {
      tag: "طراحی اختصاصی شما",
      domain: "your-brand.com",
      slogan: "برند شما، به سبک خودتان",
    },
    // RTL order (rightmost first). offset = vertical offset of each card in Figma (px)
    modules: [
      { icon: "hero-module-store", label: "فروشگاه", sublabel: "Commerce", offset: -10 },
      { icon: "hero-module-content", label: "محتوا", sublabel: "Content", offset: 6 },
      { icon: "hero-module-admin", label: "پنل مدیریت", sublabel: "Admin", offset: -4 },
      { icon: "hero-module-users", label: "کاربران و ورود", sublabel: "Users & Auth", offset: 10 },
      { icon: "hero-module-forms", label: "فرم‌ها", sublabel: "Forms", offset: -8 },
    ],
    plate: {
      title: "بک‌اند، پنل مدیریت و ماژول‌های آمادهٔ راینو",
      // LTR order (left to right), as in Figma
      badges: ["Headless API", "Always updated", "Secure"],
    },
  },

  problem: {
    eyebrow: "THE PROBLEM",
    quoteStart: "همه می‌گویند:",
    quote: "«وردپرس بگیر با یک قالب آماده، ارزان درمی‌آید.»",
    title: "اما ارزانِ امروز، اغلب گرانِ فرداست",
    subtitle:
      "قالب‌ها و افزونه‌های آماده برای شروع سریع‌اند، نه برای رشد. وقتی کسب‌وکار جدی می‌شود، دردسرها هم شروع می‌شوند.",
    issues: [
      {
        icon: "problem-plugin-conflict",
        title: "تداخل افزونه‌ها",
        description:
          "ده‌ها افزونه از سازندگان مختلف که با هر تغییر کوچک، با هم ناسازگار می‌شوند.",
      },
      {
        icon: "problem-security-holes",
        title: "حفره‌های امنیتی",
        description:
          "هر قالب و افزونه یک درِ ورود احتمالی برای نفوذ است؛ سایت‌های پرطرفدار هدف اول حمله‌اند.",
      },
      {
        icon: "problem-slow",
        title: "کندی و سنگینی",
        description:
          "کدهای اضافه‌ای که هرگز استفاده نمی‌شوند، سرعت را پایین و نرخ تبدیل را کم می‌کنند.",
      },
      {
        icon: "problem-lookalike",
        title: "شبیه هزاران سایت دیگر",
        description:
          "قالب‌های پرفروش روی هزاران سایت نصب‌اند؛ برند شما در میان آن‌ها گم می‌شود.",
      },
      {
        icon: "problem-breaking-update",
        title: "آپدیتی که سایت را می‌شکند",
        description:
          "یا به‌روزرسانی نمی‌کنید و ناامن می‌مانید، یا به‌روزرسانی می‌کنید و چیزی از کار می‌افتد.",
      },
      {
        icon: "problem-hard-customize",
        title: "سفارشی‌سازی سخت و پرهزینه",
        description:
          "هر تغییر خارج از چارچوب قالب، به وصله‌کاری و هزینه‌ای بیش از ساخت از ابتدا می‌رسد.",
      },
    ],
    cta: {
      text: [
        "راینو این معادله را عوض می‌کند: ",
        "طراحی کاملاً اختصاصی", // Highlighted
        "، روی زیرساختی آماده، امن و همیشه به‌روز.",
      ],
      button: "ببینید چطور",
    },
  },

  howItWorks: {
    eyebrow: "HOW IT WORKS · HEADLESS",
    title: "ظاهرِ اختصاصی، موتورِ آماده",
    subtitle:
      "راینو «هدلس» است. این یعنی آنچه کاربران شما می‌بینند و آنچه پشت صحنه کار می‌کند، از هم جدا ساخته می‌شوند.",
    diagram: {
      frontend: {
        title: "طراحی اختصاصی شما",
        eyebrow: "YOUR CUSTOM FRONT-END",
        items: ["وب‌سایت", "فروشگاه", "اپلیکیشن"],
      },
      api: "Headless API",
      backend: {
        title: "راینو؛ آماده و تست‌شده",
        eyebrow: "READY BACK-END",
        items: [
          "بک‌اند امن",
          "پنل مدیریت",
          "کاربران و ورود",
          "نقش‌ها و دسترسی‌ها",
          "فروشگاه",
          "محتوا",
          "فرم‌ها",
          "تنظیمات",
        ],
      },
    },
    analogy: {
      bold: "هدلس به زبان ساده:",
      normal:
        " مثل یک خودرو که بدنه‌اش را دقیقاً به سلیقهٔ شما می‌سازیم، اما موتورش از قبل ساخته، آزمایش‌شده و آماده است.",
    },
    steps: [
      {
        number: "۱",
        title: "طراحی اختصاصی برند شما",
        description:
          "نیازتان را می‌شنویم و ظاهر سایت یا اپلیکیشن را از صفر، مخصوص برند و مشتریانتان طراحی و پیاده‌سازی می‌کنیم.",
      },
      {
        number: "۲",
        title: "اتصال ماژول‌های آماده",
        description:
          "فروشگاه، محتوا، کاربران، فرم‌ها و پنل مدیریت از قبل ساخته شده‌اند؛ فقط انتخاب، تنظیم و متصل می‌شوند.",
      },
      {
        number: "۳",
        title: "راه‌اندازی و رشد",
        description:
          "محصولتان سریع منتشر می‌شود و زیرساخت راینو مدام به‌روز می‌شود، بدون آنکه به طراحی شما دست بزند.",
      },
    ],
  },

  whyRayno: {
    eyebrow: "WHY RAYNO",
    title: "بهترینِ ها، در یک محصول",
    subtitle:
      "کیفیت و اختصاصی‌بودن یک پروژهٔ سفارشی، با سرعت و هزینهٔ یک راهکار آماده.",
    features: [
      {
        icon: "why-economical",
        eyebrow: "ECONOMICAL",
        title: "هزینهٔ منطقی",
        description:
          "چون بک‌اند و پنل مدیریت از قبل آماده‌اند، فقط هزینهٔ بخشی را می‌پردازید که واقعاً مخصوص شماست.",
        cardClass: "dark", // Fixed dark card
      },
      {
        icon: "why-bespoke-code",
        eyebrow: "BESPOKE CODE",
        title: "کد کاملاً اختصاصی",
        description:
          "بدون قالب آماده و بدون کدهای اضافه؛ ظاهر محصول دقیقاً همان چیزی است که برند شما لازم دارد.",
      },
      {
        icon: "why-always-up-to-date",
        eyebrow: "ALWAYS UP TO DATE",
        title: "همیشه به‌روز",
        description:
          "ماژول‌ها و زیرساخت به‌طور مداوم به‌روز می‌شوند؛ بدون شکستن سایت و بدون دست‌زدن به طراحی شما.",
      },
      {
        icon: "why-fast-launch",
        eyebrow: "FAST LAUNCH",
        title: "راه‌اندازی سریع",
        description:
          "به‌جای ماه‌ها ساخت زیرساخت از صفر، روی طراحی و تجربهٔ مشتری تمرکز می‌کنیم و زودتر منتشر می‌شوید.",
      },
      {
        icon: "why-secure",
        eyebrow: "SECURE BY DEFAULT",
        title: "امنیت از پایه",
        description:
          "ورود امن، نقش‌ها و دسترسی‌ها در هستهٔ راینو ساخته شده‌اند؛ نه با افزونه‌هایی از منابع نامعلوم.",
      },
      {
        icon: "why-scalable",
        eyebrow: "SCALABLE",
        title: "رشد بدون محدودیت",
        description:
          "از یک سایت ساده شروع کنید و با رشد کسب‌وکار، ماژول‌های جدید اضافه کنید؛ بدون بازسازی از صفر.",
      },
    ],
  },

  products: {
    eyebrow: "WHAT YOU CAN BUILD",
    title: "هر محصول دیجیتالی که کسب‌وکارتان لازم دارد",
    subtitle: "یک زیرساخت، برای محصولات مختلف؛ هر کدام با طراحی مخصوص خودش.",
    items: [
      {
        title: "فروشگاه آنلاین",
        description:
          "فروشگاهی با هویت بصری خودتان؛ محصولات ساده و متغیر، قیمت‌گذاری، تخفیف و موجودی.",
        modules: ["Commerce", "Users", "Admin"],
      },
      {
        title: "وب‌سایت شرکتی",
        description:
          "ویترین حرفه‌ای برند با صفحات و محتوایی که تیم شما خودش از پنل مدیریت به‌روز می‌کند.",
        modules: ["Content", "Forms", "Admin"],
      },
      {
        title: "اپلیکیشن وب و موبایل",
        description:
          "اپلیکیشن اختصاصی که از طریق API هدلس به همان بک‌اند و پنل مدیریت وصل است.",
        modules: ["Headless API", "Users"],
      },
      {
        title: "سامانهٔ مدیریت اختصاصی",
        description:
          "پنل‌ها و سامانه‌های داخلی سازمان با نقش‌ها، دسترسی‌ها و گزارش‌های مخصوص تیم شما.",
        modules: ["Admin", "RBAC", "Settings"],
      },
      {
        title: "سایت محتوایی و مجله",
        description:
          "مجله، بلاگ یا مرکز دانش با ساختار محتوایی منعطف و تجربهٔ خواندن سریع و تمیز.",
        modules: ["Content", "Comments"],
      },
    ],
    note: "برخی ماژول‌ها هنوز در حال توسعه‌اند؛ وضعیت دقیق هر ماژول را در بخش «ماژول‌های آماده» ببینید.",
  },

  compare: {
    eyebrow: "COMPARE",
    title: "سه راه برای ساخت محصول دیجیتال",
    subtitle: "قالب آماده، ساخت کامل از صفر، یا راینو. تفاوت را خودتان ببینید.",
    headers: [
      { eyebrow: "READY THEME / WORDPRESS", label: "قالب آماده / وردپرس" },
      { eyebrow: "FULLY CUSTOM FROM SCRATCH", label: "اختصاصی از صفر" },
      { eyebrow: "RAYNO", label: "راینو" },
    ],
    rows: [
      {
        feature: "هزینه",
        values: [
          { icon: "dash", text: "ارزان در شروع، پرهزینه در ادامه" },
          { icon: "x", text: "بسیار بالا" },
          { icon: "check", text: "منطقی و قابل پیش‌بینی", highlight: true },
        ],
      },
      {
        feature: "زمان راه‌اندازی",
        values: [
          { icon: "check", text: "سریع" },
          { icon: "x", text: "چندین ماه" },
          { icon: "check", text: "سریع؛ زیرساخت از قبل آماده است", highlight: true },
        ],
      },
      {
        feature: "منحصربه‌فرد بودن",
        values: [
          { icon: "x", text: "شبیه هزاران سایت دیگر" },
          { icon: "check", text: "کاملاً اختصاصی" },
          { icon: "check", text: "کاملاً اختصاصی", highlight: true },
        ],
      },
      {
        feature: "نگهداری",
        values: [
          { icon: "x", text: "وابسته به ده‌ها افزونهٔ ناهمگون" },
          { icon: "dash", text: "وابسته به تیم سازنده" },
          { icon: "check", text: "ماژول‌های استاندارد و نگهداری‌شده", highlight: true },
        ],
      },
      {
        feature: "امنیت",
        values: [
          { icon: "x", text: "آسیب‌پذیر از راه قالب و افزونه‌ها" },
          { icon: "dash", text: "بسته به کیفیت تیم" },
          {
            icon: "check",
            text: "امنیت در هسته: ورود، نقش‌ها و دسترسی‌ها",
            highlight: true,
          },
        ],
      },
      {
        feature: "به‌روزرسانی",
        values: [
          { icon: "x", text: "ممکن است سایت را بشکند" },
          { icon: "x", text: "دستی و پرهزینه" },
          {
            icon: "check",
            text: "مداوم، بدون دست‌زدن به طراحی شما",
            highlight: true,
          },
        ],
      },
    ],
  },

  modules: {
    eyebrow: "MODULES",
    title: "ماژول‌های راینو",
    subtitle:
      "صادقانه می‌گوییم کدام آماده است و کدام در راه؛ هر ماژول جدید، بدون تغییر طراحی شما اضافه می‌شود.",
    items: [
      {
        icon: "module-users-auth",
        title: "کاربران و ورود امن",
        sublabel: "Users · Auth · MFA",
        status: "ready",
      },
      {
        icon: "module-roles",
        title: "نقش‌ها و دسترسی‌ها",
        sublabel: "RBAC",
        status: "ready",
      },
      {
        icon: "module-settings-installer",
        title: "تنظیمات و نصب‌کننده",
        sublabel: "Settings · Installer",
        status: "ready",
      },
      {
        icon: "module-admin-panel",
        title: "پنل مدیریت",
        sublabel: "Admin · پایه آماده",
        status: "dev",
      },
      {
        icon: "module-store",
        title: "فروشگاه",
        sublabel: "Commerce",
        status: "dev",
      },
      {
        icon: "module-cms",
        title: "مدیریت محتوا",
        sublabel: "Content · Media",
        status: "dev",
      },
      {
        icon: "module-visual-content",
        title: "محتوای بصری",
        sublabel: "Banners · Sliders",
        status: "roadmap",
      },
      {
        icon: "module-form-builder",
        title: "فرم‌ساز",
        sublabel: "Forms",
        status: "roadmap",
      },
      {
        icon: "module-comments",
        title: "دیدگاه‌ها",
        sublabel: "Comments",
        status: "roadmap",
      },
    ],
    statuses: {
      ready: { label: "آماده", description: "ساخته شده و قابل استفاده" },
      dev: { label: "در حال توسعه", description: "در حال ساخت و تکمیل" },
      roadmap: { label: "در نقشهٔ راه", description: "برنامه‌ریزی‌شده" },
    },
  },

  developers: {
    eyebrow: "FOR DEVELOPERS & AGENCIES",
    title: "برای تیم‌هایی که می‌خواهند سریع‌تر تحویل دهند",
    subtitle:
      "آژانس‌ها و تیم‌های فنی می‌توانند روی زیرساخت راینو، پروژه‌های اختصاصی مشتریان را با هر فریم‌ورک فرانت‌اندی بسازند.",
    // Grid in RTL order (top-right first)
    features: [
      { icon: "dev-headless-api", title: "هدلس و API-محور", description: "فرانت‌اند را با هر ابزاری بسازید؛ داده و منطق از API راینو می‌آید." },
      { icon: "dev-modular", title: "ماژولار", description: "فقط ماژول‌هایی را فعال کنید که پروژه لازم دارد؛ هر ماژول مستقل است." },
      { icon: "dev-security", title: "امنیت و دسترسی آماده", description: "ورود، نقش‌ها و دسترسی‌ها از روز اول؛ بدون بازنویسی برای هر پروژه." },
      { icon: "dev-one-base", title: "یک پایه، چندین پروژه", description: "تحویل سریع‌تر و نگهداری ساده‌تر برای همهٔ مشتریان آژانس." },
    ],
    code: {
      fileName: "storefront.ts",
      caption: "نمونهٔ مفهومی",
      // Syntax-highlighted lines, verbatim from Figma (k = keyword, s = string, c = component, p = plain, m = comment)
      lines: [
        [["m", "// Your custom front-end, Rayno back-end"]],
        [["k", "const"], ["p", " res = "], ["k", "await"], ["p", " fetch("], ["s", "'https://api.your-brand.com/products'"], ["p", ")"]],
        [["k", "const"], ["p", " products = "], ["k", "await"], ["p", " res.json()"]],
        [],
        [["m", "// Render with your own design system"]],
        [["k", "return"], ["p", " <"], ["c", "ProductGrid"], ["p", " items={products} />"]],
      ] as [string, string][][],
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "سؤالات متداول",
    // Only the first answer exists in Figma (1:945). The other answers are not in the design yet —
    // fill them in here (verbatim from the client) and they become expandable automatically.
    items: [
      {
        question: "هدلس یعنی چه و چه فرقی با وردپرس دارد؟",
        answer:
          "در وردپرس، ظاهر و موتور سایت به هم چسبیده‌اند و ظاهر معمولاً از یک قالب آماده می‌آید. در راینو این دو جدا هستند: ظاهر سایت یا اپلیکیشن را کاملاً اختصاصی برای شما طراحی می‌کنیم و موتور آمادهٔ راینو پشت آن کار می‌کند.",
      },
      { question: "طراحی سایت من واقعاً اختصاصی است؟", answer: null },
      { question: "چرا هزینه از یک پروژهٔ کاملاً اختصاصی کمتر است؟", answer: null },
      { question: "به‌روزرسانی‌ها چطور انجام می‌شود و سایتم را خراب نمی‌کند؟", answer: null },
      { question: "آیا همهٔ ماژول‌ها الان آماده‌اند؟", answer: null },
    ] as { question: string; answer: string | null }[],
  },

  cta: {
    title: "محصول اختصاصی‌تان را، سریع‌تر و به‌صرفه‌تر شروع کنید.",
    subtitle: "شماره‌تان را بگذارید؛ برای مشاورهٔ رایگان با شما تماس می‌گیریم.",
    form: {
      label: "شمارهٔ تماس",
      placeholder: "۰۹۱۲ ۰۰۰ ۰۰۰۰",
      button: "درخواست تماس",
      // Feedback strings (not part of the static Figma frame)
      successMessage: "درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.",
      errorMessage: "لطفاً یک شماره موبایل معتبر وارد کنید (۰۹XX XXX XXXX).",
    },
  },

  footer: {
    description: "طراحی اختصاصی برای برند شما، روی زیرساخت آماده، امن و همیشه به‌روز راینو.",
    tagline: "Rayno — Built to Evolve.",
    // RTL order (rightmost first)
    sections: [
      {
        title: "راینو",
        links: [
          { label: "چرا راینو", href: "#why-rayno" },
          { label: "چطور کار می‌کند", href: "#how-it-works" },
          { label: "مقایسه", href: "#compare" },
        ],
      },
      {
        title: "محصولات",
        links: [
          { label: "فروشگاه آنلاین", href: "#products" },
          { label: "وب‌سایت شرکتی", href: "#products" },
          { label: "اپلیکیشن", href: "#products" },
        ],
      },
      {
        title: "ارتباط",
        links: [
          { label: "مشاورهٔ رایگان", href: "#cta" },
          { label: "لیست انتظار", href: "#cta" },
          { label: "تماس با ما", href: "#cta" },
        ],
      },
    ],
    domain: "rayno.dev",
    language: "فارسی · FA",
    copyright: "© ۱۴۰۵ راینو. همهٔ حقوق محفوظ است.",
  },
} as const;

export type Content = typeof content;
