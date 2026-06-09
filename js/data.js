/* =====================================================================
   PORTFOLIO DATA  —  ✏️  EDIT EVERYTHING HERE
   ---------------------------------------------------------------------
   Bilingual fields use { en: "...", id: "..." } (or arrays for lists).
   Plain strings (names, prices, dates, tech) are shown as-is in both
   languages. Static UI labels live in js/i18n.js.
   ===================================================================== */

const PORTFOLIO = {
  /* ---------- Identity ---------- */
  fullName: "Rividemeo",
  shortName: "Rividemeo",
  roles: {
    en: ["Senior QA Engineer", "Test Automation Engineer", "Freelance Web Developer"],
    id: ["Senior QA Engineer", "Test Automation Engineer", "Freelance Web Developer"],
  },
  summary: {
    en:
      "QA Automation Engineer with 8 years of experience in software and quality engineering, " +
      "ensuring software quality through effective test planning, automation frameworks, and CI/CD integration. " +
      "Specialized in API, gRPC, and end-to-end web automation using C# and Playwright.",
    id:
      "QA Automation Engineer dengan 8 tahun pengalaman di bidang software dan quality engineering, " +
      "memastikan kualitas perangkat lunak melalui perencanaan pengujian, framework automation, dan integrasi CI/CD yang efektif. " +
      "Berfokus pada automation API, gRPC, dan end-to-end web menggunakan C# dan Playwright.",
  },
  location: "Indonesia · Remote",

  /* ---------- Contact ---------- */
  email: "rividemeo@gmail.com",
  whatsappNumber: "6281316421463",
  whatsappDisplay: "+62 813 1642 1463",
  linkedin: "https://linkedin.com/in/rivi-demeo-992295150",
  github: "https://github.com/rividemeo",
  medium: "https://medium.com/@rividemeo",

  /* ---------- Skills (only category names are translated) ---------- */
  skills: [
    {
      category: { en: "Frontend", id: "Frontend" },
      icon: "🎨",
      items: ["React", "Material UI (MUI)"],
    },
    {
      category: { en: "Backend & APIs", id: "Backend & API" },
      icon: "⚙️",
      items: [".NET / C#", "GraphQL", "gRPC", "REST API"],
    },
    {
      category: { en: "Database", id: "Database" },
      icon: "🗄️",
      items: ["SQL Server", "MySQL", "PostgreSQL"],
    },
    {
      category: { en: "Testing", id: "Testing" },
      icon: "✅",
      items: ["Playwright", "Cypress", "Selenium", "Automation Framework", "Postman", "Kreya", "JMeter"],
    },
    {
      category: { en: "DevOps", id: "DevOps" },
      icon: "🚀",
      items: ["Docker", "Jenkins", "GitHub Actions", "Azure DevOps"],
    },
    {
      category: { en: "Tools & Platforms", id: "Tools & Platform" },
      icon: "🧰",
      items: ["TestRail", "Visual Studio", "Visual Studio Code"],
    },
  ],

  /* ---------- Experience timeline ---------- */
  experience: [
    {
      role: "QA Automation Engineer & Scrum Master",
      company: "PT. Errai Pasifik",
      period: "2019 — Present",
      achievements: {
        en: [
          "Created detailed, comprehensive, and well-structured test plans, test data, and test cases based on business and technical requirements.",
          "Designed and executed multiple testing scenarios for bug fixing, regression testing, and feature validation.",
          "Developed API automation scripts using C# for gRPC services, including request validation and response verification.",
          "Implemented end-to-end automation testing using Playwright (C#) for modern web applications.",
          "Integrated automated test suites with Jenkins CI/CD pipelines for scheduled and on-commit test execution.",
          "Performed API load and performance testing using Apache JMeter to measure response time, throughput, and system stability.",
          "Acted as Scrum Master (side role), ensuring the team adhered to Scrum processes, facilitating ceremonies, and removing impediments.",
          "Investigated defects through debugging, identified root causes, and enhanced application logic to fix issues within scope.",
        ],
        id: [
          "Membuat test plan, test data, dan test case yang detail, komprehensif, dan terstruktur berdasarkan kebutuhan bisnis dan teknis.",
          "Merancang dan menjalankan berbagai skenario pengujian untuk perbaikan bug, regression testing, dan validasi fitur.",
          "Mengembangkan skrip automation API menggunakan C# untuk layanan gRPC, termasuk validasi request dan verifikasi response.",
          "Menerapkan automation testing end-to-end menggunakan Playwright (C#) untuk aplikasi web modern.",
          "Mengintegrasikan automated test suite dengan pipeline CI/CD Jenkins untuk eksekusi terjadwal dan saat commit.",
          "Melakukan API load dan performance testing menggunakan Apache JMeter untuk mengukur response time, throughput, dan stabilitas sistem.",
          "Berperan sebagai Scrum Master (peran tambahan): memastikan tim mengikuti proses Scrum, memfasilitasi ceremony, dan mengatasi hambatan.",
          "Menyelidiki defect melalui debugging, menemukan akar masalah, dan menyempurnakan logika aplikasi untuk memperbaiki masalah sesuai lingkup.",
        ],
      },
    },
    {
      role: "Implementor",
      company: "PT. BOSNET Distribution Indonesia",
      period: "2017 — 2019",
      achievements: {
        en: [
          "Implemented BOSNET Distribution software for end users across multiple departments.",
          "Conducted user training and knowledge transfer on system usage and end-to-end business processes.",
          "Developed and maintained SQL queries, reports, and data validation scripts to support business operations.",
          "Performed functional testing, UAT support, and issue verification prior to production release.",
          "Provided daily operational support, troubleshooting, and issue resolution for clients using the system.",
        ],
        id: [
          "Mengimplementasikan software BOSNET Distribution untuk pengguna di berbagai departemen.",
          "Melakukan pelatihan pengguna dan transfer pengetahuan tentang penggunaan sistem dan proses bisnis end-to-end.",
          "Mengembangkan dan memelihara query SQL, laporan, dan skrip validasi data untuk mendukung operasional bisnis.",
          "Melakukan functional testing, dukungan UAT, dan verifikasi isu sebelum rilis produksi.",
          "Memberikan dukungan operasional harian, troubleshooting, dan penyelesaian masalah bagi klien pengguna sistem.",
        ],
      },
    },
  ],

  /* ---------- Featured projects ---------- */
  projects: [
    {
      name: "Household Management System",
      tagline: { en: "Family & population data platform", id: "Platform data keluarga & kependudukan" },
      stack: ["React", "TypeScript", "Material UI", ".NET API", "SQL Server", "Formik & Yup", "Leaflet"],
      challenge: {
        en: "Replacing manual record-keeping for thousands of family and resident records, while handling complex bulk imports, enforcing validation, and keeping family-card and member data consistent.",
        id: "Menggantikan pencatatan manual untuk ribuan data keluarga dan penduduk, sekaligus menangani import massal yang kompleks, menerapkan validasi, dan menjaga konsistensi data kartu keluarga dan anggota.",
      },
      solution: {
        en: "Built a centralized web app to manage family cards and members with Excel/CSV bulk import, on-input validation, inline table editing, fast search by NIK/name/address, RT/RW filtering, and an interactive map of family locations.",
        id: "Membangun aplikasi web terpusat untuk mengelola kartu keluarga dan anggota dengan import massal Excel/CSV, validasi saat input, edit langsung di tabel, pencarian cepat berdasarkan NIK/nama/alamat, filter RT/RW, dan peta interaktif lokasi keluarga.",
      },
      result: {
        en: "Sped up data search and management, cut manual entry errors, simplified administration and reporting, and added informative map-based visualization.",
        id: "Mempercepat pencarian dan pengelolaan data, mengurangi kesalahan input manual, mempermudah administrasi dan pelaporan, serta menambahkan visualisasi berbasis peta yang informatif.",
      },
      tags: ["Web App"],
    },
    {
      name: "CV. Mulia Utama Mandiri — Company Profile",
      tagline: { en: "Professional company profile website", id: "Website company profile profesional" },
      stack: ["React", "TypeScript", "Material UI", "Responsive", "SEO"],
      challenge: {
        en: "Designing a professional site aligned with the company's brand identity, easy to use for a wide range of visitors, and performant across all screen sizes.",
        id: "Mendesain situs profesional yang sesuai identitas brand perusahaan, mudah digunakan berbagai kalangan, dan optimal di semua ukuran layar.",
      },
      solution: {
        en: "Developed a modern, fully responsive company profile presenting services and contact info, with a contact form and clear CTAs, basic SEO optimization, Google Maps integration, and simple intuitive navigation.",
        id: "Mengembangkan company profile modern yang sepenuhnya responsif menampilkan layanan dan info kontak, dengan formulir kontak dan CTA yang jelas, optimasi SEO dasar, integrasi Google Maps, dan navigasi yang sederhana serta intuitif.",
      },
      result: {
        en: "Strengthened the company's online credibility, made it easier for prospects to find service information, and created a 24/7 digital marketing channel.",
        id: "Memperkuat kredibilitas online perusahaan, mempermudah calon pelanggan menemukan informasi layanan, dan menjadi media pemasaran digital 24/7.",
      },
      tags: ["Website", "Freelance"],
      link: "https://muliautamamandiri.co.id",
    },
    {
      name: "AutomationTestCineplex",
      tagline: { en: "Robot Framework UI automation for Cineplex", id: "Automation UI Cineplex dengan Robot Framework" },
      stack: ["Robot Framework", "Selenium", "Python"],
      challenge: {
        en: "Validating key user journeys on the Cineplex (21cineplex.com) movie site — playing trailers, browsing now-playing theaters by city, and checking upcoming releases — reliably and repeatably.",
        id: "Memvalidasi alur utama pengguna di situs film Cineplex (21cineplex.com) — memutar trailer, menelusuri bioskop now-playing per kota, dan mengecek film yang akan datang — secara andal dan berulang.",
      },
      solution: {
        en: "Built a keyword-driven test suite with Robot Framework and SeleniumLibrary covering three scenarios: playing a random movie trailer, viewing now-playing theaters in another city (Yogyakarta), and watching a trailer for a coming-soon movie — with screenshots and HTML reports.",
        id: "Membangun test suite berbasis keyword dengan Robot Framework dan SeleniumLibrary yang mencakup tiga skenario: memutar trailer film acak, melihat bioskop now-playing di kota lain (Yogyakarta), dan menonton trailer film yang akan datang — lengkap dengan screenshot dan laporan HTML.",
      },
      result: {
        en: "Repeatable end-to-end browser tests that verify core site functionality on every run and produce clear log, output, and report files for review.",
        id: "Pengujian end-to-end browser yang dapat diulang untuk memverifikasi fungsi inti situs di setiap eksekusi dan menghasilkan file log, output, dan laporan yang jelas.",
      },
      tags: ["Test Automation", "Open Source"],
      link: "https://github.com/rividemeo/AutomationTestCineplex",
    },
  ],

  /* ---------- Freelance services ---------- */
  services: [
    {
      title: { en: "Landing Page", id: "Landing Page" },
      price: { en: "from Rp1.000.000", id: "mulai Rp1.000.000" },
      desc: {
        en: "A single, high-converting page to launch a product, event, or campaign.",
        id: "Satu halaman dengan konversi tinggi untuk meluncurkan produk, acara, atau kampanye.",
      },
      features: {
        en: ["Responsive design", "Smooth animations", "Contact / lead form", "SEO basics"],
        id: ["Desain responsif", "Animasi halus", "Formulir kontak / lead", "SEO dasar"],
      },
      featured: false,
    },
    {
      title: { en: "Company Profile", id: "Company Profile" },
      price: { en: "from Rp2.500.000", id: "mulai Rp2.500.000" },
      desc: {
        en: "A multi-section website that builds trust and showcases your business.",
        id: "Website multi-bagian yang membangun kepercayaan dan menampilkan bisnis Anda.",
      },
      features: {
        en: ["Up to 6 sections", "Custom design", "CMS-ready option", "Performance optimized"],
        id: ["Hingga 6 bagian", "Desain custom", "Opsi siap CMS", "Performa dioptimalkan"],
      },
      featured: true,
    },
    {
      title: { en: "Custom Web Application", id: "Aplikasi Web Custom" },
      price: { en: "Let's talk", id: "Hubungi saya" },
      desc: {
        en: "Full-stack web apps, dashboards, and internal tools — built to scale.",
        id: "Aplikasi web full-stack, dashboard, dan tools internal — dibangun untuk skala besar.",
      },
      features: {
        en: ["React + .NET", "Database design", "API integration", "Automated testing"],
        id: ["React + .NET", "Desain database", "Integrasi API", "Automated testing"],
      },
      featured: false,
    },
  ],

  /* ---------- Private IT Tutoring (Les Privat IT) ---------- */
  tutoring: {
    tagline: {
      en: "Learn directly from a practitioner with 8 years in IT — especially Quality Assurance & Automation.",
      id: "Belajar langsung dari praktisi dengan 8 tahun pengalaman di bidang IT — khususnya Quality Assurance & Automation.",
    },
    topics: {
      en: ["Manual & automated testing", "SQL / Database", "Programming fundamentals", "CI/CD & Tools", "IT consultation"],
      id: ["Testing manual & otomatis", "SQL / Database", "Dasar pemrograman", "CI/CD & Tools", "Konsultasi IT"],
    },
    packages: [
      {
        sessions: { en: "1 Session", id: "1 Sesi" },
        price: "55.000",
        duration: { en: "60 minutes", id: "60 menit" },
        featured: false,
      },
      {
        sessions: { en: "2 Sessions", id: "2 Sesi" },
        price: "Rp100.000",
        duration: { en: "120 minutes", id: "120 menit" },
        featured: true,
      },
      {
        sessions: { en: "4 Sessions", id: "4 Sesi" },
        price: "150.000",
        duration: { en: "240 minutes", id: "240 menit" },
        featured: false,
      },
    ],
    info: {
      en: ["📅 Weekday / Weekend", "💻 Online / In-person", "🎓 From elementary to fresh graduates", "📍 Jatiasih, Bekasi"],
      id: ["📅 Weekday / Weekend", "💻 Daring / Tatap Muka", "🎓 SD hingga lulusan baru", "📍 Jatiasih, Bekasi"],
    },
    curriculum: [
      {
        level: "SD",
        levelNote: { en: "Elementary", id: "Sekolah Dasar" },
        modules: [
          {
            name: { en: "Computers & Logic Basics", id: "Pengenalan Komputer & Logika" },
            sessions: 4,
            topics: {
              en: [
                "Intro to computers & safe internet",
                "Everyday algorithms",
                "Visual coding with Scratch",
                "Mini project: simple Scratch game/simulation",
              ],
              id: [
                "Pengenalan komputer dan internet aman",
                "Algoritma sehari-hari",
                "Belajar coding visual dengan Scratch",
                "Mini project: game/simulasi sederhana di Scratch",
              ],
            },
          },
        ],
      },
      {
        level: "SMP",
        levelNote: { en: "Junior High", id: "Sekolah Menengah Pertama" },
        modules: [
          {
            name: { en: "Logic & Programming Basics", id: "Logika & Pemrograman Dasar" },
            sessions: 4,
            topics: {
              en: [
                "Flowcharts & programming logic",
                "Programming basics (Python / Java / C#: variables, print, input)",
                "Loops & conditions (if, for, while)",
                "Mini project: simple calculator",
              ],
              id: [
                "Flowchart & logika pemrograman",
                "Pemrograman dasar (Python / Java / C#: variabel, print, input)",
                "Perulangan & kondisi (if, for, while)",
                "Mini project: kalkulator sederhana",
              ],
            },
          },
          {
            name: { en: "Database & Light Testing", id: "Database & Testing Ringan" },
            sessions: 4,
            topics: {
              en: [
                "Database concepts (tables, data, relations)",
                "Basic SQL (insert, select)",
                "Manual testing of a simple website",
                "Mini project: simple grade-list system",
              ],
              id: [
                "Konsep database (tabel, data, relasi)",
                "SQL dasar (insert, select)",
                "Testing manual website sederhana",
                "Mini project: sistem daftar nilai sederhana",
              ],
            },
          },
        ],
      },
      {
        level: "SMA / Mahasiswa / Lulusan Baru",
        levelNote: { en: "High school · University · Fresh grads", id: "SMA · Mahasiswa · Lulusan baru" },
        modules: [
          {
            name: { en: "Programming & Basic OOP", id: "Pemrograman & OOP Dasar" },
            sessions: 4,
            topics: {
              en: [
                "Programming basics (functions, variables, data types)",
                "Control structures (if, loop, switch)",
                "Basic OOP (class, object, method)",
                "Mini project: simple CLI application",
              ],
              id: [
                "Dasar pemrograman (fungsi, variabel, tipe data)",
                "Struktur kontrol (if, loop, switch)",
                "OOP dasar (class, object, method)",
                "Mini project: aplikasi CLI sederhana",
              ],
            },
          },
          {
            name: { en: "Database & SQL", id: "Database & SQL" },
            sessions: 4,
            topics: {
              en: [
                "Basic SQL (select, insert, update, delete)",
                "Advanced SQL (join, group by, sum, count)",
                "Designing a simple database schema",
                "Mini project: database for an attendance system",
              ],
              id: [
                "SQL dasar (select, insert, update, delete)",
                "SQL lanjutan (join, group by, sum, count)",
                "Membuat skema database sederhana",
                "Mini project: database untuk sistem absensi",
              ],
            },
          },
          {
            name: { en: "QA & Automation", id: "QA & Automation" },
            sessions: 4,
            topics: {
              en: [
                "QA fundamentals & manual testing",
                "Intro to automation testing (Selenium / Playwright)",
                "Writing simple automated test cases",
                "Mini project: automate a website login",
              ],
              id: [
                "QA fundamental & testing manual",
                "Pengenalan automation testing (Selenium / Playwright)",
                "Menulis test case otomatis sederhana",
                "Mini project: automate login website",
              ],
            },
          },
          {
            name: { en: "API & CI/CD", id: "API & CI/CD" },
            sessions: 4,
            topics: {
              en: [
                "API concepts + hands-on with Postman",
                "Basic API testing",
                "Intro to GitHub / GitLab CI/CD workflow",
                "Mini project: simple pipeline (build & test)",
              ],
              id: [
                "Konsep API + praktik pakai Postman",
                "API testing dasar",
                "Pengenalan GitHub / GitLab CI/CD workflow",
                "Mini project: pipeline sederhana (build & test)",
              ],
            },
          },
        ],
      },
    ],
  },
};

// Expose globally so other scripts (main.js, cv.html) can read it.
// NOTE: a top-level `const` is NOT attached to `window`, so this line is required.
window.PORTFOLIO = PORTFOLIO;
