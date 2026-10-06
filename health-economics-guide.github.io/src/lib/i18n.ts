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
// $lib/book.ts's DEFAULT_LOCALE doc comment) and stays in English. The
// contents page's own lead paragraph is translated here even though it
// reads more like prose than chrome, because it appears inline on an
// otherwise fully localized page.
import { canonicalLocale } from '#lib/locales.js';

export type Ui = typeof EN;

const EN = {
  siteName: 'Health Economics Guide',
  skipToContent: 'Skip to main content',
  home: 'Home',
  contents: 'Contents',
  glossary: 'Glossary',
  index: 'Index',
  source: 'Source',
  ledBy: 'Led by',
  part: 'Part',
  chapter: 'Topic',
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
  switchLanguageHint: 'Switch language from the header picker.',
  contentsLead:
    'Every topic is self-contained. Read straight through for a course in health economics, or go directly to the topic that matches the decision in front of you.',
  contentsDescription: 'The full table of contents of the Health Economics Guide.'
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
    ledBy: 'Dan arweiniad',
    part: 'Rhan',
    chapter: 'Pwnc',
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
    switchLanguageHint: "Newidiwch iaith o'r dewisydd yn y pennawd.",
    contentsLead:
      "Mae pob pwnc yn gyflawn ynddo'i hun. Darllenwch drwyddi ar gyfer cwrs mewn economeg iechyd, neu ewch yn syth i'r pwnc sy'n cyd-fynd â'r penderfyniad o'ch blaen.",
    contentsDescription: "Tabl cynnwys llawn Canllaw Economeg Iechyd."
  },
  'de-de': {
    siteName: 'Leitfaden für Gesundheitsökonomie',
    skipToContent: 'Zum Hauptinhalt springen',
    home: 'Startseite',
    contents: 'Inhaltsverzeichnis',
    glossary: 'Glossar',
    index: 'Stichwortverzeichnis',
    source: 'Quellcode',
    ledBy: 'Geleitet von',
    part: 'Teil',
    chapter: 'Thema',
    previous: 'Zurück',
    next: 'Weiter',
    frontMatter: 'Vorspann',
    reference: 'Referenz',
    onThisPage: 'Auf dieser Seite',
    pickerTheme: 'Design',
    pickerLocale: 'Sprache',
    pickerTextSize: 'Textgröße',
    pickerShare: 'Teilen',
    copyLabel: 'Link kopieren',
    copiedLabel: 'Kopiert!',
    copyFailedLabel: 'Kopieren fehlgeschlagen — kopieren Sie stattdessen die Adressleiste',
    readingIn: 'Lesen auf',
    switchLanguageHint: 'Sprache über die Auswahl in der Kopfzeile wechseln.',
    contentsLead:
      'Jedes Thema ist in sich geschlossen. Lesen Sie durchgehend für einen Kurs in Gesundheitsökonomie, oder gehen Sie direkt zu dem Thema, das der vor Ihnen liegenden Entscheidung entspricht.',
    contentsDescription: 'Das vollständige Inhaltsverzeichnis des Leitfadens für Gesundheitsökonomie.'
  },
  'hi-001': {
    siteName: 'स्वास्थ्य अर्थशास्त्र गाइड',
    skipToContent: 'मुख्य सामग्री पर जाएँ',
    home: 'होम',
    contents: 'विषय-सूची',
    glossary: 'शब्दावली',
    index: 'अनुक्रमणिका',
    source: 'स्रोत',
    ledBy: 'नेतृत्व:',
    part: 'भाग',
    chapter: 'विषय',
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
    switchLanguageHint: 'हेडर पिकर से भाषा बदलें।',
    contentsLead:
      'हर विषय अपने आप में पूर्ण है। स्वास्थ्य अर्थशास्त्र में एक पाठ्यक्रम के लिए सीधे पढ़ें, या सीधे उस विषय पर जाएँ जो आपके सामने के निर्णय से मेल खाता है।',
    contentsDescription: 'स्वास्थ्य अर्थशास्त्र गाइड की पूर्ण विषय-सूची।'
  },
  'zh-cn': {
    siteName: '健康经济学指南',
    skipToContent: '跳到主要内容',
    home: '首页',
    contents: '目录',
    glossary: '术语表',
    index: '索引',
    source: '源码',
    ledBy: '负责人：',
    part: '部分',
    chapter: '主题',
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
    switchLanguageHint: '从页眉选择器切换语言。',
    contentsLead:
      '每个主题都是独立完整的。您可以从头到尾阅读，系统学习健康经济学；也可以直接跳转到与您当前决策相关的主题。',
    contentsDescription: '《健康经济学指南》完整目录。'
  },
  'es-001': {
    siteName: 'Guía de Economía de la Salud',
    skipToContent: 'Saltar al contenido principal',
    home: 'Inicio',
    contents: 'Contenido',
    glossary: 'Glosario',
    index: 'Índice',
    source: 'Código fuente',
    ledBy: 'Dirigido por',
    part: 'Parte',
    chapter: 'Tema',
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
    switchLanguageHint: 'Cambie de idioma desde el selector del encabezado.',
    contentsLead:
      'Cada tema es autónomo. Léalo de principio a fin como un curso de economía de la salud, o vaya directamente al tema que corresponda a la decisión que tiene por delante.',
    contentsDescription: 'El índice completo de la Guía de Economía de la Salud.'
  },
  'fr-001': {
    siteName: "Guide d'Économie de la Santé",
    skipToContent: 'Passer au contenu principal',
    home: 'Accueil',
    contents: 'Sommaire',
    glossary: 'Glossaire',
    index: 'Index',
    source: 'Code source',
    ledBy: 'Dirigé par',
    part: 'Partie',
    chapter: 'Sujet',
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
    switchLanguageHint: "Changez de langue depuis le sélecteur d'en-tête.",
    contentsLead:
      "Chaque sujet se suffit à lui-même. Lisez-le d'un bout à l'autre comme un cours d'économie de la santé, ou allez directement au sujet qui correspond à la décision qui se présente à vous.",
    contentsDescription: "La table des matières complète du Guide d'Économie de la Santé."
  },
  'pt-001': {
    siteName: 'Guia de Economia da Saúde',
    skipToContent: 'Pular para o conteúdo principal',
    home: 'Início',
    contents: 'Sumário',
    glossary: 'Glossário',
    index: 'Índice remissivo',
    source: 'Código-fonte',
    ledBy: 'Liderado por',
    part: 'Parte',
    chapter: 'Tópico',
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
    switchLanguageHint: 'Mude o idioma no seletor do cabeçalho.',
    contentsLead:
      'Cada tópico é autónomo. Leia do início ao fim como um curso de economia da saúde, ou vá diretamente ao tópico que corresponde à decisão que tem pela frente.',
    contentsDescription: 'O sumário completo do Guia de Economia da Saúde.'
  },
  'ru-001': {
    siteName: 'Руководство по экономике здравоохранения',
    skipToContent: 'Перейти к основному содержимому',
    home: 'Главная',
    contents: 'Содержание',
    glossary: 'Глоссарий',
    index: 'Предметный указатель',
    source: 'Исходный код',
    ledBy: 'Руководитель:',
    part: 'Часть',
    chapter: 'Тема',
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
    switchLanguageHint: 'Смените язык в переключателе в шапке сайта.',
    contentsLead:
      'Каждая тема самодостаточна. Читайте подряд — как курс экономики здравоохранения, — или переходите сразу к теме, которая соответствует стоящему перед вами решению.',
    contentsDescription: 'Полное оглавление Руководства по экономике здравоохранения.'
  },
  'bn-001': {
    siteName: 'স্বাস্থ্য অর্থনীতি গাইড',
    skipToContent: 'মূল বিষয়বস্তুতে যান',
    home: 'হোম',
    contents: 'সূচিপত্র',
    glossary: 'শব্দকোষ',
    index: 'নির্ঘণ্ট',
    source: 'সোর্স',
    ledBy: 'নেতৃত্বে:',
    part: 'ভাগ',
    chapter: 'বিষয়',
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
    switchLanguageHint: 'হেডার পিকার থেকে ভাষা পরিবর্তন করুন।',
    contentsLead:
      'প্রতিটি বিষয় নিজে থেকেই সম্পূর্ণ। স্বাস্থ্য অর্থনীতির একটি কোর্সের জন্য শুরু থেকে শেষ পর্যন্ত পড়ুন, অথবা সরাসরি সেই বিষয়ে যান যা আপনার সামনে থাকা সিদ্ধান্তের সাথে মেলে।',
    contentsDescription: 'স্বাস্থ্য অর্থনীতি গাইডের সম্পূর্ণ সূচিপত্র।'
  },
  'ko-kr': {
    siteName: '보건경제학 가이드',
    skipToContent: '본문으로 건너뛰기',
    home: '홈',
    contents: '목차',
    glossary: '용어집',
    index: '색인',
    source: '소스',
    ledBy: '주도:',
    part: '부',
    chapter: '주제',
    previous: '이전',
    next: '다음',
    frontMatter: '앞부분',
    reference: '참고 자료',
    onThisPage: '이 페이지의 내용',
    pickerTheme: '테마',
    pickerLocale: '언어',
    pickerTextSize: '글자 크기',
    pickerShare: '공유',
    copyLabel: '링크 복사',
    copiedLabel: '복사했습니다!',
    copyFailedLabel: '복사하지 못했습니다. 주소 표시줄에서 복사하세요',
    readingIn: '읽고 있는 언어',
    switchLanguageHint: '머리글의 언어 선택기에서 언어를 바꾸세요.',
    contentsLead:
      '각 주제는 독립적으로 완결됩니다. 보건경제학 강좌처럼 처음부터 끝까지 읽어도 되고, 지금 앞에 놓인 결정에 맞는 주제로 바로 이동해도 됩니다.',
    contentsDescription: '『보건경제학 가이드』 전체 목차.'
  },
  'ja-jp': {
    siteName: '健康経済学ガイド',
    skipToContent: 'メインコンテンツへスキップ',
    home: 'ホーム',
    contents: '目次',
    glossary: '用語集',
    index: '索引',
    source: 'ソース',
    ledBy: 'リード：',
    part: '部',
    chapter: 'トピック',
    previous: '前へ',
    next: '次へ',
    frontMatter: '前付',
    reference: '参考資料',
    onThisPage: 'このページの内容',
    pickerTheme: 'テーマ',
    pickerLocale: '言語',
    pickerTextSize: '文字サイズ',
    pickerShare: '共有',
    copyLabel: 'リンクをコピー',
    copiedLabel: 'コピーしました！',
    copyFailedLabel: 'コピーに失敗しました——アドレスバーからコピーしてください',
    readingIn: '閲覧中の言語',
    switchLanguageHint: 'ヘッダーの言語選択から切り替えてください。',
    contentsLead:
      '各トピックは独立して完結しています。健康経済学の講座として通読することも、目の前の決定に合ったトピックに直接進むこともできます。',
    contentsDescription: '『健康経済学ガイド』の完全な目次。'
  },
  'id-001': {
    siteName: 'Panduan Ekonomi Kesehatan',
    skipToContent: 'Lompat ke konten utama',
    home: 'Beranda',
    contents: 'Daftar isi',
    glossary: 'Glosarium',
    index: 'Indeks',
    source: 'Sumber',
    ledBy: 'Dipimpin oleh',
    part: 'Bagian',
    chapter: 'Topik',
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
    switchLanguageHint: 'Ganti bahasa dari pemilih di header.',
    contentsLead:
      'Setiap topik berdiri sendiri. Baca dari awal hingga akhir sebagai kursus ekonomi kesehatan, atau langsung menuju topik yang sesuai dengan keputusan yang sedang Anda hadapi.',
    contentsDescription: 'Daftar isi lengkap Panduan Ekonomi Kesehatan.'
  },
  'ar-001': {
    siteName: 'دليل اقتصاديات الصحة',
    skipToContent: 'الانتقال إلى المحتوى الرئيسي',
    home: 'الرئيسية',
    contents: 'المحتويات',
    glossary: 'قائمة المصطلحات',
    index: 'الفهرس',
    source: 'المصدر',
    ledBy: 'بقيادة',
    part: 'الجزء',
    chapter: 'الموضوع',
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
    switchLanguageHint: 'غيّر اللغة من محدد اللغة في الرأس.',
    contentsLead:
      'كل موضوع قائم بذاته. اقرأه من البداية إلى النهاية كدورة في اقتصاديات الصحة، أو انتقل مباشرة إلى الموضوع الذي يطابق القرار الماثل أمامك.',
    contentsDescription: 'فهرس المحتويات الكامل لدليل اقتصاديات الصحة.'
  },
  'ur-001': {
    siteName: 'صحت کی معاشیات کی رہنما کتاب',
    skipToContent: 'مرکزی مواد پر جائیں',
    home: 'ہوم',
    contents: 'فہرست',
    glossary: 'لغت',
    index: 'اشاریہ',
    source: 'ماخذ',
    ledBy: 'قیادت:',
    part: 'حصہ',
    chapter: 'موضوع',
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
    switchLanguageHint: 'ہیڈر پکر سے زبان تبدیل کریں۔',
    contentsLead:
      'ہر موضوع اپنی جگہ مکمل ہے۔ صحت کی معاشیات کے ایک کورس کے طور پر شروع سے آخر تک پڑھیں، یا براہ راست اُس موضوع پر جائیں جو آپ کے سامنے موجود فیصلے سے مطابقت رکھتا ہے۔',
    contentsDescription: 'صحت کی معاشیات کی رہنما کتاب کی مکمل فہرست۔'
  }
};

export function ui(locale: string): Ui {
  return { ...EN, ...(OVERRIDES[canonicalLocale(locale)] ?? {}) };
}

export const DEFAULT_UI: Ui = EN;

// Part titles, matching $lib/book.ts's PARTS (English; canonical).
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
  'de-de': {
    1: 'Grundlagen',
    2: 'Evaluation und Evidenz',
    3: 'Systeme, Politik und Prioritäten',
    4: 'Globale und gesellschaftliche Themen',
    5: 'Digitales, Software, und Technologie'
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
  'ko-kr': {
    1: '기초',
    2: '평가와 근거',
    3: '체계, 정책, 우선순위',
    4: '세계적·사회적 이슈',
    5: '디지털, 소프트웨어, 기술'
  },
  'ja-jp': {
    1: '基礎',
    2: '評価とエビデンス',
    3: '制度、政策、優先順位',
    4: 'グローバルと社会の課題',
    5: 'デジタル、ソフトウェア、テクノロジー'
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

// Part taglines, matching $lib/book.ts's PARTS (English; canonical).
// Translated per an earlier request, then the contents page stopped
// showing any part subtitle at all (also per request) — so partTagline()
// currently has no caller. Left in place rather than deleted: it's real
// translated content across every published locale, not dead scaffolding,
// and may be wanted again if a subtitle returns somewhere.
const EN_PART_TAGLINES: Record<number, string> = {
  1: 'why health is economically different, and the models that explain it',
  2: "the analyst's toolkit: valuing outcomes, building models, testing claims",
  3: 'how societies organize, fund, and share out healthcare',
  4: 'health beyond one system: behaviour, global trade and financing, the planet, and the public conversation',
  5: 'the economics of health technology: innovation, digital care, artificial intelligence, software, robotics, and data'
};

const PART_TAGLINE_OVERRIDES: Record<string, Record<number, string>> = {
  'cy-001': {
    1: "pam mae iechyd yn economaidd wahanol, a'r modelau sy'n ei esbonio",
    2: "twlcis y dadansoddwr: prisio canlyniadau, adeiladu modelau, profi honiadau",
    3: "sut mae cymdeithasau'n trefnu, ariannu, a rhannu gofal iechyd",
    4: 'iechyd y tu hwnt i un system: ymddygiad, masnach a chyllid byd-eang, y blaned, a\'r sgwrs gyhoeddus',
    5: 'economeg technoleg iechyd: arloesi, gofal digidol, deallusrwydd artiffisial, meddalwedd, roboteg, a data'
  },
  'hi-001': {
    1: 'स्वास्थ्य आर्थिक रूप से अलग क्यों है, और वे मॉडल जो इसे समझाते हैं',
    2: 'विश्लेषक की टूलकिट: परिणामों का मूल्यांकन, मॉडल बनाना, दावों का परीक्षण',
    3: 'समाज स्वास्थ्य सेवा को कैसे व्यवस्थित, वित्तपोषित और वितरित करते हैं',
    4: 'एक प्रणाली से परे स्वास्थ्य: व्यवहार, वैश्विक व्यापार और वित्तपोषण, ग्रह, और सार्वजनिक बातचीत',
    5: 'स्वास्थ्य प्रौद्योगिकी का अर्थशास्त्र: नवाचार, डिजिटल देखभाल, कृत्रिम बुद्धिमत्ता, सॉफ़्टवेयर, रोबोटिक्स, और डेटा'
  },
  'zh-cn': {
    1: '为什么健康在经济上有其特殊性，以及解释这一点的模型',
    2: '分析师的工具箱：评估结果、构建模型、检验主张',
    3: '社会如何组织、资助并分配医疗保健',
    4: '超越单一体系的健康：行为、全球贸易与融资、地球，以及公共讨论',
    5: '健康科技的经济学：创新、数字化医疗、人工智能、软件、机器人技术与数据'
  },
  'de-de': {
    1: 'warum Gesundheit ökonomisch anders ist, und die Modelle, die das erklären',
    2: 'der Werkzeugkasten des Analysten: Ergebnisse bewerten, Modelle bauen, Behauptungen testen',
    3: 'wie Gesellschaften Gesundheitsversorgung organisieren, finanzieren, und verteilen',
    4: 'Gesundheit jenseits eines Systems: Verhalten, globaler Handel und globale Finanzierung, der Planet, und das öffentliche Gespräch',
    5: 'die Ökonomie der Gesundheitstechnologie: Innovation, digitale Versorgung, künstliche Intelligenz, Software, Robotik, und Daten'
  },
  'es-001': {
    1: 'por qué la salud es económicamente diferente, y los modelos que lo explican',
    2: 'el conjunto de herramientas del analista: valorar resultados, construir modelos, poner a prueba afirmaciones',
    3: 'cómo las sociedades organizan, financian y distribuyen la atención sanitaria',
    4: 'la salud más allá de un solo sistema: comportamiento, comercio y financiación globales, el planeta, y el debate público',
    5: 'la economía de la tecnología sanitaria: innovación, salud digital, inteligencia artificial, software, robótica y datos'
  },
  'fr-001': {
    1: "pourquoi la santé est économiquement différente, et les modèles qui l'expliquent",
    2: "la boîte à outils de l'analyste : évaluer les résultats, construire des modèles, tester des affirmations",
    3: 'comment les sociétés organisent, financent et répartissent les soins de santé',
    4: 'la santé au-delà d\'un seul système : comportement, commerce et financement mondiaux, la planète, et le débat public',
    5: "l'économie de la technologie de la santé : innovation, santé numérique, intelligence artificielle, logiciels, robotique et données"
  },
  'pt-001': {
    1: 'por que a saúde é economicamente diferente, e os modelos que o explicam',
    2: 'o conjunto de ferramentas do analista: avaliar resultados, construir modelos, testar afirmações',
    3: 'como as sociedades organizam, financiam e distribuem os cuidados de saúde',
    4: 'a saúde para além de um único sistema: comportamento, comércio e financiamento globais, o planeta, e o debate público',
    5: 'a economia da tecnologia da saúde: inovação, saúde digital, inteligência artificial, software, robótica e dados'
  },
  'ru-001': {
    1: 'почему здоровье экономически особенное и какие модели это объясняют',
    2: 'инструментарий аналитика: оценка результатов, построение моделей, проверка утверждений',
    3: 'как общества организуют, финансируют и распределяют здравоохранение',
    4: 'здоровье за пределами одной системы: поведение, глобальная торговля и финансирование, планета и общественная дискуссия',
    5: 'экономика медицинских технологий: инновации, цифровое здравоохранение, искусственный интеллект, программное обеспечение, робототехника и данные'
  },
  'bn-001': {
    1: 'কেন স্বাস্থ্য অর্থনৈতিকভাবে ভিন্ন, এবং যেসব মডেল এটি ব্যাখ্যা করে',
    2: 'বিশ্লেষকের টুলকিট: ফলাফল মূল্যায়ন, মডেল তৈরি, দাবি যাচাই',
    3: 'সমাজ কীভাবে স্বাস্থ্যসেবা সংগঠিত, অর্থায়ন এবং বণ্টন করে',
    4: 'একটি একক ব্যবস্থার বাইরে স্বাস্থ্য: আচরণ, বৈশ্বিক বাণিজ্য ও অর্থায়ন, গ্রহ, এবং জনসাধারণের আলোচনা',
    5: 'স্বাস্থ্য প্রযুক্তির অর্থনীতি: উদ্ভাবন, ডিজিটাল স্বাস্থ্যসেবা, কৃত্রিম বুদ্ধিমত্তা, সফটওয়্যার, রোবোটিক্স, এবং ডেটা'
  },
  'id-001': {
    1: 'mengapa kesehatan secara ekonomi berbeda, dan model-model yang menjelaskannya',
    2: 'perangkat analis: menilai hasil, membangun model, menguji klaim',
    3: 'bagaimana masyarakat mengatur, mendanai, dan mendistribusikan layanan kesehatan',
    4: 'kesehatan di luar satu sistem: perilaku, perdagangan dan pembiayaan global, planet ini, dan wacana publik',
    5: 'ekonomi teknologi kesehatan: inovasi, kesehatan digital, kecerdasan buatan, perangkat lunak, robotika, dan data'
  },
  'ko-kr': {
    1: '건강이 경제적으로 특별한 이유와 그것을 설명하는 모형',
    2: '분석가의 도구 상자: 성과 평가, 모형 구축, 주장 검증',
    3: '사회가 보건의료를 어떻게 조직하고, 재원을 조달하고, 분배하는가',
    4: '하나의 체계를 넘어선 건강: 행동, 세계 무역과 재원, 지구, 그리고 공론',
    5: '보건 기술의 경제학: 혁신, 디지털 보건, 인공지능, 소프트웨어, 로봇공학, 데이터'
  },
  'ja-jp': {
    1: '健康がなぜ経済的に特異なのか、そしてそれを説明するモデル',
    2: 'アナリストの道具箱：アウトカムの評価、モデルの構築、主張の検証',
    3: '社会がどのように医療を組織し、資金提供し、分配するか',
    4: '一つの制度を超えた健康：行動、グローバルな貿易と資金、地球、そして公的な議論',
    5: '健康技術の経済学：イノベーション、デジタルケア、人工知能、ソフトウェア、ロボティクス、データ'
  },
  'ar-001': {
    1: 'لماذا تُعد الصحة حالة اقتصادية مختلفة، والنماذج التي تفسر ذلك',
    2: 'عدة المحلل: تقييم النتائج، وبناء النماذج، واختبار الادعاءات',
    3: 'كيف تنظّم المجتمعات الرعاية الصحية وتموّلها وتوزّعها',
    4: 'الصحة خارج نطاق نظام واحد: السلوك، والتجارة والتمويل العالميين، والكوكب، والنقاش العام',
    5: 'اقتصاديات التكنولوجيا الصحية: الابتكار، والرعاية الرقمية، والذكاء الاصطناعي، والبرمجيات، والروبوتات، والبيانات'
  },
  'ur-001': {
    1: 'صحت معاشی طور پر مختلف کیوں ہے، اور وہ ماڈل جو اسے بیان کرتے ہیں',
    2: 'تجزیہ کار کا ٹول کٹ: نتائج کی قدر کرنا، ماڈل بنانا، دعووں کی جانچ',
    3: 'معاشرے صحت کی دیکھ بھال کو کیسے منظم، مالی طور پر معاون، اور تقسیم کرتے ہیں',
    4: 'ایک نظام سے آگے صحت: رویہ، عالمی تجارت و مالیات، سیارہ، اور عوامی گفتگو',
    5: 'صحت ٹیکنالوجی کی معاشیات: ایجاد، ڈیجیٹل نگہداشت، مصنوعی ذہانت، سافٹ ویئر، روبوٹکس، اور ڈیٹا'
  }
};

/** This locale's tagline for part `number`, falling back to the canonical English one. */
export function partTagline(locale: string, number: number): string {
  return PART_TAGLINE_OVERRIDES[locale]?.[number] ?? EN_PART_TAGLINES[number];
}
