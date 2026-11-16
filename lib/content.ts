/**
 * Rayno Landing Page Content
 * Exact copy from content.json/content.md handoff
 * All strings are preserved exactly, including ZWNJ ‌, ٔ, and «»
 */

export const content = {
  site: {
    title: "راینو - سایت و اپلیکیشن کاملاً اختصاصی، با سرعت و هزینهٔ یک راهکار آماده",
    description: "محصول شما شامل طراحی اختصاصی، به‌اضافهٔ بک‌اند، پنل مدیریت و ماژول‌هاست؛ چون زیرساخت آماده است، سریع‌تر و با هزینه‌ای منطقی‌تر از ساخت همهٔ اجزا از صفر تحویل می‌شود.",
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
    title: {
      line1: "سایت و اپلیکیشن ",
      highlight: "کاملاً اختصاصی", // Gradient text
      line2: "با سرعت و هزینهٔ یک راهکار آماده",
    },
    subtitle:
      "محصولی کامل می‌گیرید: طراحی اختصاصی ظاهر، به‌اضافهٔ بک‌اند، پنل مدیریت و ماژول‌ها. چون زیرساخت از قبل آماده است، این محصول منحصربه‌فرد و همیشه به‌روز را سریع‌تر و با هزینه‌ای منطقی‌تر از ساخت همهٔ اجزا از صفر خواهید داشت؛ بدون دردسرهای وردپرس و قالب‌های آماده.",
    ctas: {
      primary: "درخواست مشاورهٔ رایگان",
      primaryHref: "#cta",
      secondary: "راینو چطور کار می‌کند؟",
      secondaryHref: "#how-it-works",
    },
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
        "یک محصول کامل", // Highlighted
        " — طراحی اختصاصی، به‌اضافهٔ بک‌اند، پنل مدیریت و ماژول‌ها، روی زیرساختی آماده، امن و همیشه به‌روز.",
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
        " مثل خودرویی کامل که بدنه‌اش را به سلیقهٔ شما می‌سازیم و موتور و داشبوردش از قبل ساخته و آزمایش شده‌اند؛ محصول را کامل می‌گیرید، سریع‌تر و با هزینه‌ای منطقی‌تر از ساخت همهٔ اجزا از صفر.",
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
          "فروشگاه، محتوا، کاربران، فرم‌ها، بک‌اند و پنل مدیریت بخشی از همان محصول‌اند و از قبل ساخته شده‌اند؛ به‌جای ساخت دوباره از صفر، انتخاب، تنظیم و متصل می‌شوند.",
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
          "هزینه برای کل محصول است: طراحی اختصاصی، بک‌اند، پنل مدیریت و ماژول‌ها. چون زیرساخت آماده است، از ساخت همهٔ اجزا از صفر منطقی‌تر تمام می‌شود.",
        cardClass: "dark", // Fixed dark card
      },
      {
        icon: "why-bespoke-code",
        eyebrow: "BESPOKE CODE",
        title: "کد کاملاً اختصاصی",
        description:
          "بدون قالب آماده و بدون کدهای اضافه؛ ظاهر دقیقاً مطابق برند شماست و بک‌اند و پنل مدیریت هم همراه همان محصول تحویل می‌شود.",
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
          "به‌جای ماه‌ها ساخت زیرساخت از صفر، زیرساخت آمادهٔ راینو را با طراحی اختصاصی شما همراه می‌کنیم و زودتر منتشر می‌شوید.",
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
    note: "همهٔ ماژول‌ها آمادهٔ استفاده‌اند؛ اگر ماژول جدیدی لازم داشتید، برایتان می‌سازیم.",
  },

  compare: {
    eyebrow: "COMPARE",
    title: "سه راه برای ساخت محصول دیجیتال",
    subtitle: "قالب آماده، ساخت کامل از صفر، یا راینو. تفاوت را خودتان ببینید.",
    criteria: { eyebrow: "CRITERIA", label: "معیار" },
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
          { icon: "check", text: "محصول کامل، با هزینهٔ منطقی", highlight: true },
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
      "همهٔ ماژول‌ها آماده‌اند و بدون تغییر طراحی شما به محصول اضافه می‌شوند. اگر ماژول دیگری لازم داشتید، برایتان می‌سازیم.",
    hub: {
      icon: "module-admin-panel",
      title: "پنل مدیریت",
      sublabel: "Admin · Dashboard",
      description: "داشبورد یکپارچه برای مدیریت کل محصول؛ کاربران، محتوا، فروش و تنظیمات در یکجا.",
    },
    items: [
      {
        key: "store",
        icon: "module-store",
        title: "فروشگاه",
        sublabel: "Commerce",
        description: "محصولات، قیمت‌گذاری، موجودی و تخفیف‌ها روی همان زیرساخت آماده.",
      },
      {
        key: "content",
        icon: "module-cms",
        title: "مدیریت محتوا",
        sublabel: "Content · Media",
        description: "صفحات، نوشته‌ها و رسانه را مستقل از ظاهر سایت مدیریت کنید.",
      },
      {
        key: "visual",
        icon: "module-visual-content",
        title: "محتوای بصری",
        sublabel: "Banners · Sliders",
        description: "بنر، اسلایدر و بلوک‌های تصویری برای صفحات و کمپین‌ها.",
      },
      {
        key: "forms",
        icon: "module-form-builder",
        title: "فرم‌ساز",
        sublabel: "Forms",
        description: "فرم‌های تماس، ثبت‌نام و نظرسنجی را بدون کدنویسی بسازید.",
      },
      {
        key: "users",
        icon: "module-users-auth",
        title: "کاربران و ورود امن",
        sublabel: "Users · Auth · MFA",
        description: "ورود امن با تأیید دو مرحله‌ای و مدیریت نشست‌ها.",
      },
      {
        key: "roles",
        icon: "module-roles",
        title: "نقش‌ها و دسترسی‌ها",
        sublabel: "RBAC",
        description: "سطوح دسترسی دقیق برای تیم‌ها، نقش‌ها و مجوزها.",
      },
      {
        key: "settings",
        icon: "module-settings-installer",
        title: "تنظیمات و نصب‌کننده",
        sublabel: "Settings · Installer",
        description: "راه‌اندازی اولیه و پیکربندی سایت از یک پنل واحد.",
      },
      {
        key: "comments",
        icon: "module-comments",
        title: "دیدگاه‌ها",
        sublabel: "Comments",
        description: "نظرات کاربران با تأیید، پاسخ و مدیریت نمایش در صفحات.",
      },
    ],
    cta: {
      title: "ماژول مدنظرتان نیست؟",
      description:
        "اگر پروژه به ماژولی خارج از این مجموعه نیاز داشته باشد، آن را برایتان می‌سازیم و بدون تغییر طراحی‌تان اضافه می‌کنیم.",
      chip: "برایتان می‌سازیم",
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
    items: [
      {
        question: "هدلس یعنی چه و چه فرقی با وردپرس دارد؟",
        answer:
          "در سیستم‌های سنتی مثل وردپرس، بخش مدیریت محتوا و ظاهر سایت به یکدیگر وابسته‌اند. اما در معماری هدلس (Headless)، این دو بخش از هم جدا هستند. راینو با استفاده از این معماری، امکان مدیریت محتوا و امکانات سایت را مستقل از ظاهر آن فراهم می‌کند. نتیجه، انعطاف‌پذیری بیشتر، آزادی عمل در طراحی و بستری مناسب‌تر برای توسعه‌های آینده است.",
      },
      {
        question: "طراحی سایت من واقعاً اختصاصی است؟",
        answer:
          "بله. در راینو، شما محدود به قالب‌های آماده و طراحی‌های تکراری نیستید. ظاهر سایت متناسب با هویت برند، نیازهای کسب‌وکار و تجربه کاربری موردنظر شما طراحی و پیاده‌سازی می‌شود. آنچه تحویل می‌گیرید فقط ظاهر نیست؛ بک‌اند، پنل مدیریت و ماژول‌ها هم بخشی از همان محصول‌اند. راینو این زیرساخت را از قبل آماده دارد تا تمرکز پروژه روی ساخت تجربه‌ای منحصربه‌فرد برای کسب‌وکار شما باشد.",
      },
      {
        question: "چرا هزینه از یک پروژه کاملاً اختصاصی کمتر است؟",
        answer:
          "چون قرار نیست همه‌چیز را از صفر بسازیم! هزینه‌ای که می‌پردازید برای کل محصول است: طراحی اختصاصی، به‌اضافهٔ بک‌اند، پنل مدیریت و ماژول‌ها. راینو زیرساخت و ماژول‌های آماده را در همان محصول می‌آورد؛ برای همین زمان و هزینهٔ بخش‌های تکراری کم می‌شود و از یک پروژهٔ کاملاً از صفر منطقی‌تر تمام می‌شود — نه اینکه فقط هزینهٔ ظاهر را بدهید.",
      },
      {
        question: "به‌روزرسانی‌ها چطور انجام می‌شود و سایت من را خراب نمی‌کند؟",
        answer:
          "راینو با معماری ماژولار و سیستم توسعه نسخه‌بندی‌شده طراحی شده است. به‌روزرسانی‌ها با در نظر گرفتن سازگاری اجزا، تغییرات دیتابیس و تست‌های فنی انجام می‌شوند. البته هیچ سیستم نرم‌افزاری نمی‌تواند خرابی را به‌طور مطلق تضمین‌ناپذیر بداند؛ به همین دلیل، بررسی تغییرات، تست قبل از انتشار و برنامه بازگشت در صورت بروز مشکل اهمیت زیادی دارند.",
      },
      {
        question: "آیا همه ماژول‌ها الان آماده‌اند؟",
        answer:
          "بله. همهٔ ماژول‌های راینو آماده و قابل استفاده‌اند. اگر پروژهٔ شما به ماژولی نیاز داشته باشد که هنوز در مجموعه نیست، آن را برایتان می‌سازیم و بدون تغییر در طراحی‌تان به محصول اضافه می‌شود.",
      },
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
    description: "محصول کامل برای برند شما: طراحی اختصاصی، به‌اضافهٔ بک‌اند، پنل مدیریت و ماژول‌ها، روی زیرساختی آماده، امن و همیشه به‌روز.",
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
