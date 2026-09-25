// UI chrome strings (nav labels, breadcrumbs, picker labels, footer bits)
// for each locale this site publishes. Threaded through every
// locale-scoped route and +layout.svelte via ui(locale), per
// spec/locales-for-global-sharing-with-svelte/index.md's bug-fix note:
// "UI chrome was hardcoded English in the .svelte templates ... Fix: add
// i18n.js and threading ui(locale) through every locale-scoped route."
//
// This does not cover the book's own prose (chapters, glossary, index) —
// that is vendored per locale from the source repo — nor the home page's
// long-form copy at `/`, which is locale-neutral by design (see
// $lib/book.ts's DEFAULT_LOCALE doc comment) and stays in English.
export type Ui = typeof EN;

const EN = {
  siteName: 'Health Economics Guide',
  skipToContent: 'Skip to main content',
  home: 'Home',
  contents: 'Contents',
  glossary: 'Glossary',
  index: 'Index',
  source: 'Source',
  part: 'Part',
  chapter: 'Chapter',
  previous: 'Previous',
  next: 'Next',
  frontMatter: 'Front matter',
  reference: 'Reference',
  onThisPage: 'On this page',
  pickerTheme: 'Theme',
  pickerLocale: 'Language',
  pickerTextSize: 'Text size',
  pickerShare: 'Share',
  copyLabel: 'Copy Link',
  copiedLabel: 'Copied!',
  copyFailedLabel: 'Copy failed — copy the address bar instead',
  readingIn: 'Reading in',
  switchLanguageHint: 'Switch language from the header picker.'
};

const OVERRIDES: Record<string, Partial<Ui>> = {
  'cy-001': {
    siteName: 'Canllaw Economeg Iechyd',
    skipToContent: "Neidio i'r prif gynnwys",
    home: 'Hafan',
    contents: 'Cynnwys',
    glossary: 'Geirfa',
    index: 'Mynegai',
    source: 'Ffynhonnell',
    part: 'Rhan',
    chapter: 'Pennod',
    previous: 'Blaenorol',
    next: 'Nesaf',
    frontMatter: 'Deunydd blaen',
    reference: 'Cyfeirnod',
    onThisPage: 'Ar y dudalen hon',
    pickerTheme: 'Thema',
    pickerLocale: 'Iaith',
    pickerTextSize: 'Maint testun',
    pickerShare: 'Rhannu',
    copyLabel: "Copïo'r ddolen",
    copiedLabel: 'Wedi copïo!',
    copyFailedLabel: "Methodd copïo — copïwch far y cyfeiriad yn lle hynny",
    readingIn: 'Darllen yn',
    switchLanguageHint: "Newidiwch iaith o'r dewisydd yn y pennawd."
  },
  'hi-001': {
    siteName: 'स्वास्थ्य अर्थशास्त्र गाइड',
    skipToContent: 'मुख्य सामग्री पर जाएँ',
    home: 'होम',
    contents: 'विषय-सूची',
    glossary: 'शब्दावली',
    index: 'अनुक्रमणिका',
    source: 'स्रोत',
    part: 'भाग',
    chapter: 'अध्याय',
    previous: 'पिछला',
    next: 'अगला',
    frontMatter: 'प्रारंभिक सामग्री',
    reference: 'संदर्भ',
    onThisPage: 'इस पृष्ठ पर',
    pickerTheme: 'थीम',
    pickerLocale: 'भाषा',
    pickerTextSize: 'पाठ का आकार',
    pickerShare: 'साझा करें',
    copyLabel: 'लिंक कॉपी करें',
    copiedLabel: 'कॉपी हो गया!',
    copyFailedLabel: 'कॉपी विफल — इसके बजाय पता बार कॉपी करें',
    readingIn: 'इस भाषा में पढ़ रहे हैं',
    switchLanguageHint: 'हेडर पिकर से भाषा बदलें।'
  },
  'zh-cn': {
    siteName: '健康经济学指南',
    skipToContent: '跳到主要内容',
    home: '首页',
    contents: '目录',
    glossary: '术语表',
    index: '索引',
    source: '源码',
    part: '部分',
    chapter: '章',
    previous: '上一章',
    next: '下一章',
    frontMatter: '前言部分',
    reference: '参考资料',
    onThisPage: '本页内容',
    pickerTheme: '主题',
    pickerLocale: '语言',
    pickerTextSize: '文字大小',
    pickerShare: '分享',
    copyLabel: '复制链接',
    copiedLabel: '已复制！',
    copyFailedLabel: '复制失败——请改为复制地址栏内容',
    readingIn: '正在阅读语言',
    switchLanguageHint: '从页眉选择器切换语言。'
  },
  'es-001': {
    siteName: 'Guía de Economía de la Salud',
    skipToContent: 'Saltar al contenido principal',
    home: 'Inicio',
    contents: 'Tabla de contenidos',
    glossary: 'Glosario',
    index: 'Índice',
    source: 'Código fuente',
    part: 'Parte',
    chapter: 'Capítulo',
    previous: 'Anterior',
    next: 'Siguiente',
    frontMatter: 'Material preliminar',
    reference: 'Referencia',
    onThisPage: 'En esta página',
    pickerTheme: 'Tema',
    pickerLocale: 'Idioma',
    pickerTextSize: 'Tamaño del texto',
    pickerShare: 'Compartir',
    copyLabel: 'Copiar enlace',
    copiedLabel: '¡Copiado!',
    copyFailedLabel: 'Error al copiar — copie la barra de direcciones en su lugar',
    readingIn: 'Leyendo en',
    switchLanguageHint: 'Cambie de idioma desde el selector del encabezado.'
  },
  'fr-001': {
    siteName: "Guide d'Économie de la Santé",
    skipToContent: 'Passer au contenu principal',
    home: 'Accueil',
    contents: 'Sommaire',
    glossary: 'Glossaire',
    index: 'Index',
    source: 'Code source',
    part: 'Partie',
    chapter: 'Chapitre',
    previous: 'Précédent',
    next: 'Suivant',
    frontMatter: 'Avant-propos',
    reference: 'Référence',
    onThisPage: 'Sur cette page',
    pickerTheme: 'Thème',
    pickerLocale: 'Langue',
    pickerTextSize: 'Taille du texte',
    pickerShare: 'Partager',
    copyLabel: 'Copier le lien',
    copiedLabel: 'Copié !',
    copyFailedLabel: "Échec de la copie — copiez plutôt la barre d'adresse",
    readingIn: 'Lecture en',
    switchLanguageHint: "Changez de langue depuis le sélecteur d'en-tête."
  },
  'pt-001': {
    siteName: 'Guia de Economia da Saúde',
    skipToContent: 'Pular para o conteúdo principal',
    home: 'Início',
    contents: 'Sumário',
    glossary: 'Glossário',
    index: 'Índice remissivo',
    source: 'Código-fonte',
    part: 'Parte',
    chapter: 'Capítulo',
    previous: 'Anterior',
    next: 'Próximo',
    frontMatter: 'Material preliminar',
    reference: 'Referência',
    onThisPage: 'Nesta página',
    pickerTheme: 'Tema',
    pickerLocale: 'Idioma',
    pickerTextSize: 'Tamanho do texto',
    pickerShare: 'Compartilhar',
    copyLabel: 'Copiar link',
    copiedLabel: 'Copiado!',
    copyFailedLabel: 'Falha ao copiar — copie a barra de endereço',
    readingIn: 'Lendo em',
    switchLanguageHint: 'Mude o idioma no seletor do cabeçalho.'
  },
  'ru-001': {
    siteName: 'Руководство по экономике здравоохранения',
    skipToContent: 'Перейти к основному содержимому',
    home: 'Главная',
    contents: 'Содержание',
    glossary: 'Глоссарий',
    index: 'Предметный указатель',
    source: 'Исходный код',
    part: 'Часть',
    chapter: 'Глава',
    previous: 'Назад',
    next: 'Далее',
    frontMatter: 'Вступительная часть',
    reference: 'Справка',
    onThisPage: 'На этой странице',
    pickerTheme: 'Тема',
    pickerLocale: 'Язык',
    pickerTextSize: 'Размер текста',
    pickerShare: 'Поделиться',
    copyLabel: 'Скопировать ссылку',
    copiedLabel: 'Скопировано!',
    copyFailedLabel: 'Не удалось скопировать — скопируйте адрес вручную',
    readingIn: 'Чтение на языке',
    switchLanguageHint: 'Смените язык в переключателе в шапке сайта.'
  },
  'bn-001': {
    siteName: 'স্বাস্থ্য অর্থনীতি গাইড',
    skipToContent: 'মূল বিষয়বস্তুতে যান',
    home: 'হোম',
    contents: 'সূচিপত্র',
    glossary: 'শব্দকোষ',
    index: 'নির্ঘণ্ট',
    source: 'সোর্স',
    part: 'ভাগ',
    chapter: 'অধ্যায়',
    previous: 'পূর্ববর্তী',
    next: 'পরবর্তী',
    frontMatter: 'প্রারম্ভিক অংশ',
    reference: 'তথ্যসূত্র',
    onThisPage: 'এই পৃষ্ঠায়',
    pickerTheme: 'থিম',
    pickerLocale: 'ভাষা',
    pickerTextSize: 'লেখার আকার',
    pickerShare: 'শেয়ার করুন',
    copyLabel: 'লিঙ্ক কপি করুন',
    copiedLabel: 'কপি হয়েছে!',
    copyFailedLabel: 'কপি ব্যর্থ হয়েছে — ঠিকানা বার থেকে কপি করুন',
    readingIn: 'যে ভাষায় পড়ছেন',
    switchLanguageHint: 'হেডার পিকার থেকে ভাষা পরিবর্তন করুন।'
  },
  'id-001': {
    siteName: 'Panduan Ekonomi Kesehatan',
    skipToContent: 'Lompat ke konten utama',
    home: 'Beranda',
    contents: 'Daftar isi',
    glossary: 'Glosarium',
    index: 'Indeks',
    source: 'Sumber',
    part: 'Bagian',
    chapter: 'Bab',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    frontMatter: 'Bagian pembuka',
    reference: 'Referensi',
    onThisPage: 'Di halaman ini',
    pickerTheme: 'Tema',
    pickerLocale: 'Bahasa',
    pickerTextSize: 'Ukuran teks',
    pickerShare: 'Bagikan',
    copyLabel: 'Salin tautan',
    copiedLabel: 'Tersalin!',
    copyFailedLabel: 'Gagal menyalin — salin bilah alamat sebagai gantinya',
    readingIn: 'Membaca dalam',
    switchLanguageHint: 'Ganti bahasa dari pemilih di header.'
  },
  'ar-001': {
    siteName: 'دليل اقتصاديات الصحة',
    skipToContent: 'الانتقال إلى المحتوى الرئيسي',
    home: 'الرئيسية',
    contents: 'المحتويات',
    glossary: 'قائمة المصطلحات',
    index: 'الفهرس',
    source: 'المصدر',
    part: 'الجزء',
    chapter: 'الفصل',
    previous: 'السابق',
    next: 'التالي',
    frontMatter: 'المقدمات',
    reference: 'مرجع',
    onThisPage: 'في هذه الصفحة',
    pickerTheme: 'المظهر',
    pickerLocale: 'اللغة',
    pickerTextSize: 'حجم النص',
    pickerShare: 'مشاركة',
    copyLabel: 'نسخ الرابط',
    copiedLabel: 'تم النسخ!',
    copyFailedLabel: 'فشل النسخ — انسخ من شريط العنوان بدلاً من ذلك',
    readingIn: 'تقرأ الآن باللغة',
    switchLanguageHint: 'غيّر اللغة من محدد اللغة في الرأس.'
  },
  'ur-001': {
    siteName: 'صحت کی معاشیات کی رہنما کتاب',
    skipToContent: 'مرکزی مواد پر جائیں',
    home: 'ہوم',
    contents: 'فہرست',
    glossary: 'لغت',
    index: 'اشاریہ',
    source: 'ماخذ',
    part: 'حصہ',
    chapter: 'باب',
    previous: 'پچھلا',
    next: 'اگلا',
    frontMatter: 'ابتدائی مواد',
    reference: 'حوالہ',
    onThisPage: 'اس صفحے پر',
    pickerTheme: 'تھیم',
    pickerLocale: 'زبان',
    pickerTextSize: 'تحریر کا حجم',
    pickerShare: 'شیئر کریں',
    copyLabel: 'لنک کاپی کریں',
    copiedLabel: 'کاپی ہو گیا!',
    copyFailedLabel: 'کاپی ناکام — بجائے اس کے ایڈریس بار کاپی کریں',
    readingIn: 'جس زبان میں پڑھ رہے ہیں',
    switchLanguageHint: 'ہیڈر پکر سے زبان تبدیل کریں۔'
  }
};

export function ui(locale: string): Ui {
  return { ...EN, ...(OVERRIDES[locale] ?? {}) };
}

export const DEFAULT_UI: Ui = EN;

// Part titles, matching $lib/book.ts's PARTS (English; canonical). Taglines
// are not translated here — they are longer-form prose, closer to the
// book's own content than to UI chrome, and out of scope for this file; an
// untranslated tagline under a translated title is an acceptable partial
// gap, not a broken page.
const EN_PART_TITLES: Record<number, string> = {
  1: 'Foundations',
  2: 'Evaluation and Evidence',
  3: 'Systems, Policy and Priorities',
  4: 'Global and Societal Issues',
  5: 'Digital, Software, and Technology'
};

const PART_TITLE_OVERRIDES: Record<string, Record<number, string>> = {
  'cy-001': {
    1: 'Sylfeini',
    2: 'Gwerthuso a Thystiolaeth',
    3: 'Systemau, Polisi a Blaenoriaethau',
    4: 'Materion Byd-eang a Chymdeithasol',
    5: 'Digidol, Meddalwedd, a Thechnoleg'
  },
  'hi-001': {
    1: 'आधारभूत सिद्धांत',
    2: 'मूल्यांकन और साक्ष्य',
    3: 'प्रणालियाँ, नीति और प्राथमिकताएँ',
    4: 'वैश्विक और सामाजिक मुद्दे',
    5: 'डिजिटल, सॉफ़्टवेयर और प्रौद्योगिकी'
  },
  'zh-cn': {
    1: '基础',
    2: '评估与证据',
    3: '体系、政策与优先事项',
    4: '全球与社会问题',
    5: '数字化、软件与技术'
  },
  'es-001': {
    1: 'Fundamentos',
    2: 'Evaluación y Evidencia',
    3: 'Sistemas, Política y Prioridades',
    4: 'Cuestiones Globales y Sociales',
    5: 'Digital, Software y Tecnología'
  },
  'fr-001': {
    1: 'Fondements',
    2: 'Évaluation et données probantes',
    3: 'Systèmes, politiques et priorités',
    4: 'Enjeux mondiaux et sociétaux',
    5: 'Numérique, logiciel et technologie'
  },
  'pt-001': {
    1: 'Fundamentos',
    2: 'Avaliação e Evidências',
    3: 'Sistemas, Políticas e Prioridades',
    4: 'Questões Globais e Sociais',
    5: 'Digital, Software e Tecnologia'
  },
  'ru-001': {
    1: 'Основы',
    2: 'Оценка и данные',
    3: 'Системы, политика и приоритеты',
    4: 'Глобальные и общественные проблемы',
    5: 'Цифровые технологии и ПО'
  },
  'bn-001': {
    1: 'ভিত্তি',
    2: 'মূল্যায়ন ও প্রমাণ',
    3: 'ব্যবস্থা, নীতি ও অগ্রাধিকার',
    4: 'বৈশ্বিক ও সামাজিক বিষয়',
    5: 'ডিজিটাল, সফটওয়্যার ও প্রযুক্তি'
  },
  'id-001': {
    1: 'Dasar-Dasar',
    2: 'Evaluasi dan Bukti',
    3: 'Sistem, Kebijakan, dan Prioritas',
    4: 'Isu Global dan Sosial',
    5: 'Digital, Perangkat Lunak, dan Teknologi'
  },
  'ar-001': {
    1: 'الأسس',
    2: 'التقييم والأدلة',
    3: 'الأنظمة والسياسات والأولويات',
    4: 'القضايا العالمية والمجتمعية',
    5: 'الرقمنة والبرمجيات والتكنولوجيا'
  },
  'ur-001': {
    1: 'بنیادیں',
    2: 'تشخیص اور شواہد',
    3: 'نظام، پالیسی اور ترجیحات',
    4: 'عالمی اور معاشرتی مسائل',
    5: 'ڈیجیٹل، سافٹ ویئر اور ٹیکنالوجی'
  }
};

/** This locale's title for part `number`, falling back to the canonical English one. */
export function partTitle(locale: string, number: number): string {
  return PART_TITLE_OVERRIDES[locale]?.[number] ?? EN_PART_TITLES[number];
}
