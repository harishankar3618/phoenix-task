import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  Globe2,
  Handshake,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import Flag from './components/atoms/Flag.tsx';
import ProgrammeCard from './components/molecules/ProgrammeCard.jsx';
import StatCard from './components/molecules/StatCard.jsx';
import TestimonialCard from './components/molecules/TestimonialCard.jsx';
import BlogCard from './components/molecules/BlogCard.jsx';

const brand = {
  logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/658e70d0c4c1c4b70cae9449_Phoenix-Logo-.png',
  mark: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66991d4dc9529c8e4bcf683a_Phoenix%20X%20Icon.png',
  heroImage:
    'https://storage.googleapis.com/gpt-engineer-file-uploads/image-gen/7731bcc6-aeb0-4ef7-9411-93015973979a?Expires=1778333541&GoogleAccessId=go-api-on-aws%40gpt-engineer-390607.iam.gserviceaccount.com&Signature=XxVNXngvvZZ63cHJnZj%2Bhuiu98PSY3L9FSLzB4WkPsq7M8%2BNgwQHK9pSKRZtiQ%2BvBVW73NXUbB%2FjAQID97k52wrp4QZJ4BUxLUmsEDhYfp%2FuYRHJZBlGot1fuFFah%2BmRqOONdLmp3pc5edRE8DJ5b4JXDP2uXCh7b6L2q6n25TqqK7mFgRLHGSwZ6Vi%2FRXHxsqGzVVtrrzzCgGpEa2I8aTwzXrKKrlBzfAixgsI86WXzEerwArCzz%2B7B4Yv3dmwpKFNXB0t0eHsA6VxQeBcM5nFKvwpXV9yL8NOBsBlLTHCrxrNHOpPGPR%2F8GiFLQbERMzskHHwA4V3MekUhbDUWTg%3D%3D',
  heroPoster:
    'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5%2F6958e6d7aca5ce6bf3cf8598_website-openings_poster.0000000.jpg',
  heroVideo:
    'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5%2F6958e6d7aca5ce6bf3cf8598_website-openings_mp4.mp4',
  ceo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6927982e6bbd5e7c2e1d84ce_MP%20Singh%20Profile-p-1080.jpg',
};

const links = {
  calendar:
    'https://calendly.com/deepika-wj1x/usa-business-migration-consulting?preview_source=et_card&month=2024-10',
  whatsapp:
    'https://api.whatsapp.com/send?phone=+917698940001&text=Hello,+I+came+across+your+services+and+would+like+to+know+more+details+about+your+services.+Please+share+the+information.+Thank+you.',
  properties: 'https://www.phxprimeproperties.ae',
};

const translations = {
  en: {
    nav: {
      programs: 'Programs',
      stories: 'Success Stories',
      media: 'Media',
      blocks: 'WordPress Blocks',
      contact: 'Contact',
      book: 'Book Consultation',
    },
    heroTitle: 'Global Business Migration Made Simple',
    heroSubtitle:
      'Business expansion and residency solutions for USA, Australia, UAE & New Zealand.',
    check: 'Check Eligibility',
    schedule: 'Schedule Consultation',
    programsTitle: 'Country Programs',
    whyTitle: 'Why Choose Phoenix',
    storiesTitle: 'Client Outcomes',
    mediaTitle: 'Featured In The News',
    blocksTitle: 'Built for scalable WordPress integration.',
    ctaTitle: 'Ready To Expand Globally?',
    ctaSubtitle: 'Book Your Free Consultation Today',
  },
  hi: {
    nav: {
      programs: 'कार्यक्रम',
      stories: 'सफलताएं',
      media: 'मीडिया',
      blocks: 'वर्डप्रेस ब्लॉक',
      contact: 'संपर्क',
      book: 'परामर्श बुक करें',
    },
    heroTitle: 'वैश्विक बिजनेस माइग्रेशन अब आसान',
    heroSubtitle:
      'USA, Australia, UAE और New Zealand के लिए बिजनेस विस्तार और रेजिडेंसी समाधान।',
    check: 'योग्यता जांचें',
    schedule: 'परामर्श तय करें',
    programsTitle: 'देशवार कार्यक्रम',
    whyTitle: 'Phoenix क्यों चुनें',
    storiesTitle: 'ग्राहक परिणाम',
    mediaTitle: 'समाचारों में विशेष',
    blocksTitle: 'स्केलेबल WordPress integration के लिए तैयार।',
    ctaTitle: 'वैश्विक विस्तार के लिए तैयार?',
    ctaSubtitle: 'आज ही मुफ्त परामर्श बुक करें',
  },
  gu: {
    nav: {
      programs: 'પ્રોગ્રામ્સ',
      stories: 'સફળતાઓ',
      media: 'મીડિયા',
      blocks: 'વર્ડપ્રેસ બ્લોક્સ',
      contact: 'સંપર્ક',
      book: 'કન્સલ્ટેશન બુક કરો',
    },
    heroTitle: 'ગ્લોબલ બિઝનેસ માઇગ્રેશન હવે સરળ',
    heroSubtitle:
      'USA, Australia, UAE અને New Zealand માટે બિઝનેસ એક્સપાન્શન અને રેસિડન્સી સોલ્યુશન્સ.',
    check: 'એલિજિબિલિટી તપાસો',
    schedule: 'કન્સલ્ટેશન શેડ્યૂલ કરો',
    programsTitle: 'દેશવાર પ્રોગ્રામ્સ',
    whyTitle: 'Phoenix કેમ પસંદ કરવું',
    storiesTitle: 'ક્લાયન્ટ પરિણામો',
    mediaTitle: 'ન્યૂઝમાં ફીચર્ડ',
    blocksTitle: 'સ્કેલેબલ WordPress integration માટે તૈયાર.',
    ctaTitle: 'ગ્લોબલી વિસ્તરણ માટે તૈયાર?',
    ctaSubtitle: 'આજે મફત કન્સલ્ટેશન બુક કરો',
  },
  te: {
    nav: {
      programs: 'ప్రోగ్రామ్స్',
      stories: 'విజయాలు',
      media: 'మీడియా',
      blocks: 'వర్డ్‌ప్రెస్ బ్లాక్స్',
      contact: 'సంప్రదించండి',
      book: 'కన్సల్టేషన్ బుక్ చేయండి',
    },
    heroTitle: 'గ్లోబల్ బిజినెస్ మైగ్రేషన్ సులభం',
    heroSubtitle:
      'USA, Australia, UAE మరియు New Zealand కోసం బిజినెస్ విస్తరణ మరియు రెసిడెన్సీ పరిష్కారాలు.',
    check: 'అర్హత తనిఖీ చేయండి',
    schedule: 'కన్సల్టేషన్ షెడ్యూల్ చేయండి',
    programsTitle: 'దేశాల వారీ ప్రోగ్రామ్స్',
    whyTitle: 'Phoenix ఎందుకు ఎంచుకోవాలి',
    storiesTitle: 'క్లయింట్ ఫలితాలు',
    mediaTitle: 'వార్తల్లో ఫీచర్డ్',
    blocksTitle: 'స్కేలబుల్ WordPress integration కోసం సిద్ధం.',
    ctaTitle: 'గ్లోబల్ విస్తరణకు సిద్ధమా?',
    ctaSubtitle: 'ఈరోజే ఉచిత కన్సల్టేషన్ బుక్ చేయండి',
  },
};

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'te', label: 'తెలుగు' },
];

const cleanTranslations = {
  en: translations.en,
  hi: {
    nav: {
      programs: 'कार्यक्रम',
      stories: 'सफलताएं',
      media: 'मीडिया',
      blocks: 'वर्डप्रेस ब्लॉक',
      contact: 'संपर्क',
      book: 'परामर्श बुक करें',
    },
    heroTitle: 'वैश्विक बिजनेस माइग्रेशन अब आसान',
    heroSubtitle: 'USA, Australia, UAE और New Zealand के लिए बिजनेस विस्तार और रेजिडेंसी समाधान।',
    check: 'योग्यता जांचें',
    schedule: 'परामर्श तय करें',
    programsTitle: 'देशवार कार्यक्रम',
    whyTitle: 'Phoenix क्यों चुनें',
    storiesTitle: 'ग्राहक परिणाम',
    mediaTitle: 'समाचारों में विशेष',
    blocksTitle: 'स्केलेबल WordPress integration के लिए तैयार।',
    ctaTitle: 'वैश्विक विस्तार के लिए तैयार?',
    ctaSubtitle: 'आज ही मुफ्त परामर्श बुक करें',
  },
  gu: {
    nav: {
      programs: 'પ્રોગ્રામ્સ',
      stories: 'સફળતાઓ',
      media: 'મીડિયા',
      blocks: 'વર્ડપ્રેસ બ્લોક્સ',
      contact: 'સંપર્ક',
      book: 'કન્સલ્ટેશન બુક કરો',
    },
    heroTitle: 'ગ્લોબલ બિઝનેસ માઇગ્રેશન હવે સરળ',
    heroSubtitle: 'USA, Australia, UAE અને New Zealand માટે બિઝનેસ એક્સપાન્શન અને રેસિડન્સી સોલ્યુશન્સ.',
    check: 'એલિજિબિલિટી તપાસો',
    schedule: 'કન્સલ્ટેશન શેડ્યૂલ કરો',
    programsTitle: 'દેશવાર પ્રોગ્રામ્સ',
    whyTitle: 'Phoenix કેમ પસંદ કરવું',
    storiesTitle: 'ક્લાયન્ટ પરિણામો',
    mediaTitle: 'ન્યૂઝમાં ફીચર્ડ',
    blocksTitle: 'સ્કેલેબલ WordPress integration માટે તૈયાર.',
    ctaTitle: 'ગ્લોબલી વિસ્તરણ માટે તૈયાર?',
    ctaSubtitle: 'આજે મફત કન્સલ્ટેશન બુક કરો',
  },
  te: {
    nav: {
      programs: 'ప్రోగ్రామ్స్',
      stories: 'విజయాలు',
      media: 'మీడియా',
      blocks: 'వర్డ్‌ప్రెస్ బ్లాక్స్',
      contact: 'సంప్రదించండి',
      book: 'కన్సల్టేషన్ బుక్ చేయండి',
    },
    heroTitle: 'గ్లోబల్ బిజినెస్ మైగ్రేషన్ సులభం',
    heroSubtitle: 'USA, Australia, UAE మరియు New Zealand కోసం బిజినెస్ విస్తరణ మరియు రెసిడెన్సీ పరిష్కారాలు.',
    check: 'అర్హత తనిఖీ చేయండి',
    schedule: 'కన్సల్టేషన్ షెడ్యూల్ చేయండి',
    programsTitle: 'దేశాల వారీ ప్రోగ్రామ్స్',
    whyTitle: 'Phoenix ఎందుకు ఎంచుకోవాలి',
    storiesTitle: 'క్లయింట్ ఫలితాలు',
    mediaTitle: 'వార్తల్లో ఫీచర్డ్',
    blocksTitle: 'స్కేలబుల్ WordPress integration కోసం సిద్ధం.',
    ctaTitle: 'గ్లోబల్ విస్తరణకు సిద్ధమా?',
    ctaSubtitle: 'ఈరోజే ఉచిత కన్సల్టేషన్ బుక్ చేయండి',
  },
};

const cleanLanguageOptions = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'te', label: 'తెలుగు' },
];

const navItems = [
  { key: 'programs', href: '#programs' },
  { key: 'stories', href: '#featured-news' },
  { key: 'media', href: '#media' },
  { key: 'contact', href: '#contact' },
];
const footerNavItems = [
  { label: 'Programs', href: '#programs' },
  { label: 'Featured in the News', href: '#featured-news' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const countryPrograms = [
  {
    country: 'USA',
    countryName: 'United States',
    countryCode: 'us',
    visa: 'L-1 Visa',
    href: '/l1-visa',
    eyebrow: 'No IELTS Required',
    image:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5%2F695b9e73d1dcfcb45c9dace1_usa-passport1_poster.0000000.jpg',
    benefits: [
      'Expand your business or buy a running business',
      'Investment starting from $300,000*',
      'Visa first, investment after landing in the USA',
      'L-1A to Green Card in just 2 years*',
      'Record approval achieved in 23 business days*',
    ],
    cta: 'Apply Your Green Card Today',
  },
  {
    country: 'Australia',
    countryName: 'Australia',
    countryCode: 'au',
    visa: 'National Innovation Visa',
    href: '/niv',
    eyebrow: 'No IELTS Required | No Age Limit',
    image:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5%2F695b9e952985abd85f469b4f_australia-passport1_poster.0000000.jpg',
    benefits: [
      'Direct family PR in just 9 months*',
      'Minimum investment of AUD 1 Million*',
      'PR first, investment after landing in Australia',
      'No age limit and no IELTS required',
      '700+ approved nominations, petitions and visas',
    ],
    cta: 'Apply For Family PR',
  },
  {
    country: 'UAE',
    countryName: 'United Arab Emirates',
    countryCode: 'ae',
    visa: 'Golden Visa',
    href: '/uae-goldenvisa',
    eyebrow: 'Premium property-linked residency',
    image:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/69278fcc2bb6bb7299b0b4f1_Dubai%20Real%20estate%20(1).jpeg',
    benefits: [
      'Golden Visa with selected property routes',
      '25% or more capital appreciation potential*',
      '8% to 10% rental yield opportunities*',
      '0% down payment and 0.5% monthly payment plan*',
      'Property advisory through PHX Prime Properties',
    ],
    cta: 'Browse Properties',
    external: links.properties,
  },
  {
    country: 'New Zealand',
    countryName: 'New Zealand',
    countryCode: 'nz',
    visa: 'Business Investor Work Visa',
    href: '/new-zealand-investor-work-visa',
    eyebrow: 'Pathway to Permanent Residency',
    image:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5%2F695b9ebe763c6f4641b18104_new-zealand-passport1_poster.0000000.jpg',
    benefits: [
      'Investment from NZD 1 Million* in a running business',
      'Pathway to Permanent Residency in 1 year',
      'Processing time around 6 to 10 months',
      'Visa first, investment after landing in New Zealand',
      'Guided business acquisition and settlement support',
    ],
    cta: 'Apply For NZ PR Today',
  },
];

const whyCards = [
  {
    title: 'Trusted Experts',
    text: 'Specialists focused exclusively on business migration to Australia, the USA, New Zealand and the UAE.',
    icon: ShieldCheck,
  },
  {
    title: 'High Success Rate',
    text: 'A proven track record of 700+ approved nominations, petitions and visas with hands-on case strategy.',
    icon: BadgeCheck,
  },
  {
    title: 'Global Presence',
    text: 'Offices and advisory reach across India, Australia, USA, UAE, New Zealand and the UK.',
    icon: Globe2,
  },
  {
    title: 'End-to-End Guidance',
    text: 'Eligibility, application, business acquisition, professional network, settlement and family support.',
    icon: Headphones,
  },
];

const valueProps = [
  {
    title: 'No Approval, No Fee',
    text: 'Aligned advisory engagement for qualified business migration applicants.',
    icon: ShieldCheck,
  },
  {
    title: 'Visa First, Invest After',
    text: 'Structure your move before committing major capital in the destination market.',
    icon: CircleDollarSign,
  },
  {
    title: '23-Day Record Approval',
    text: 'Urgent L-1A strategy and documentation built around speed and precision.',
    icon: TrendingUp,
  },
  {
    title: 'Post-Visa Support Free',
    text: 'Settlement, family, professional network and transition support after approval.',
    icon: Headphones,
  },
  {
    title: 'Business Acquisition Help',
    text: 'Guidance for identifying, reviewing and acquiring suitable running businesses.',
    icon: Handshake,
  },
  {
    title: 'Forbes Trusted Brand',
    text: 'A high-trust advisory brand featured by leading Indian and international media.',
    icon: Star,
  },
];

const trackRecord = [
  { value: 170, suffix: 'M+', prefix: '$', label: 'Investment Capital Mobilized' },
  { value: 300, suffix: '+', prefix: '', label: 'Local Jobs Created' },
  { value: 25, suffix: 'M', prefix: '$', label: 'Investment Advised in India' },
  { value: 700, suffix: '+', prefix: '', label: 'Businesses Empowered' },
];

const miniTrackRecord = [
  { value: 170, suffix: 'M+', prefix: '$', label: 'Capital Mobilized' },
  { value: 300, suffix: '+', prefix: '', label: 'Jobs Created' },
  { value: 23, suffix: '', prefix: '', label: 'Record Approval Days' },
  { value: 700, suffix: '+', prefix: '', label: 'Businesses Empowered' },
];

const successStories = [
  {
    name: 'Sheetal Chaudhury',
    country: 'Australia',
    result: 'Business migration approved',
    image:
      'https://i.ytimg.com/vi/xjWF-BqoGKw/hqdefault.jpg',
    quote:
      'Phoenix simplified the process with focused guidance, responsive support and clear next steps from eligibility to approval.',
  },
  {
    name: 'Vinod Gajjar',
    country: 'Australia',
    result: 'Family PR pathway',
    image:
      'https://i.ytimg.com/vi/Ni67ARzYBDQ/hqdefault.jpg',
    quote:
      'The team made an international move feel structured, transparent and achievable for the entire family.',
  },
  {
    name: 'Amit Chaudhary',
    country: 'Australia',
    result: 'Business expansion support',
    image:
      'https://i.ytimg.com/vi/X54FB7cMnOY/hqdefault.jpg',
    quote:
      'A high-touch advisory experience with practical business insight and strong documentation support.',
  },
  {
    name: 'USA L-1 Client',
    country: 'USA',
    result: '23 day record approval',
    image:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/669f52f83af76204c2415589_L1%20Approved%20Image-p-500.jpg',
    quote:
      'The L-1A journey was handled with precision, urgency and confidence from the first consultation.',
  },
];

const mediaLogos = [
  {
    name: 'Forbes',
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fc030e35e442243925_ForbesLogo.png',
  },
  {
    name: 'Times Of India',
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fc4e2e21d10b5bd927_Times%20Of%20India.png',
  },
  {
    name: 'Yahoo',
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fcacc2764048ae78a5_yahooLogo.png',
  },
  {
    name: 'Khaleej Times',
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fc2aa91e6443acb5ee_Khaleej_Times.png',
  },
  {
    name: 'Hindustan Times',
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fca675e40a70de9901_Hindustan_Times_logo.svg.png',
  },
  {
    name: 'The Week',
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fce7fce5dd6ce03114_the-week-logo.png',
  },
];

const featuredInNews = [
  {
    quote: 'Phoenix Business Advisory—Most trusted name in HNI business migration to Australia',
    source: 'FORBES',
    logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fc030e35e442243925_ForbesLogo.png',
  },
  {
    quote: 'Australia Business Immigration leader Phoenix Business Advisory charts extensive plan for Ultra HNI & HNI migration',
    source: 'The Week',
    logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fce7fce5dd6ce03114_the-week-logo.png',
  },
  {
    quote: 'Phoenix Business Advisory provides hassle-free and simplified business migration services for your dream PR in Australia',
    source: 'The Times of India',
    logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fc4e2e21d10b5bd927_Times%20Of%20India.png',
  },
  {
    quote: "Phoenix Business Advisory has provided a detailed understanding of the plethora of advantages for India's business community in Australia.",
    source: 'Yahoo',
    logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fcacc2764048ae78a5_yahooLogo.png',
  },
  {
    quote: 'Phoenix Business Advisory is the premier Indian homegrown brand specializing in providing HNIs with seamless business migration services to the US and Australia',
    source: 'Khaleej Times',
    logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fc2aa91e6443acb5ee_Khaleej_Times.png',
  },
  {
    quote: 'Phoenix Business Advisory – Revolution in business migration',
    source: 'Hindustan Times',
    logo: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/664f25fca675e40a70de9901_Hindustan_Times_logo.svg.png',
  },
];

const blockModules = [
  { title: 'Hero Block', detail: 'Fullscreen video, trust badges, counters, lead CTAs', icon: Sparkles },
  { title: 'Services Block', detail: 'Reusable country cards with flags, benefits and CTAs', icon: BriefcaseBusiness },
  { title: 'Testimonial Block', detail: 'Modern approval stories without heavy sliders', icon: Users },
  { title: 'Consultation Block', detail: 'Gradient CTA with WhatsApp and schedule actions', icon: MessageCircle },
  { title: 'FAQ Block', detail: 'Expandable service and settlement support content', icon: FileCheck2 },
];

const serviceFaqs = [
  {
    q: 'Comprehensive Business Migration Services',
    a: 'Tailored business migration solutions to help you expand your business into the USA, Australia, New Zealand and the UAE.',
  },
  {
    q: 'Post Visa and Settlement Services - At No Extra Cost',
    a: 'Support for your post-visa and settlement needs, helping make the move smoother without additional charges.',
  },
  {
    q: 'Business Acquisition Support - At No Extra Cost',
    a: 'Expert guidance to find and acquire the right business opportunities in your destination market.',
  },
  {
    q: 'Professional Network Assistance - At No Extra Cost',
    a: 'Connections to accountants, lawyers, tax consultants and other professionals who can support your business.',
  },
  {
    q: 'Family Support Services - At No Extra Cost',
    a: 'Help finding suitable schools, healthcare facilities and insurance options for your family.',
  },
];

const offices = [
  {
    country: 'India',
    city: 'Ahmedabad',
    address: 'A-812, Wing A, Mondeal Heights, Ramdev Nagar, Ahmedabad, Gujarat 380015',
  },
  {
    country: 'India',
    city: 'Ludhiana',
    address: 'Shop No. 07 & 08 Second Floor of Wave Mall, Ferozepur Road, Ludhiana, Punjab 141012',
  },
  {
    country: 'India',
    city: 'Surat',
    address: 'A- wing, 202-203 Union Heights Rahul Raj Mall Lane Maharana Pratap Rd, Vesu Surat, Gujarat 395007',
  },
  {
    country: 'India',
    city: 'Pune',
    address: 'WeWork, Futura, Magarpatta Rd, Kirtane Baugh, Pune, Maharashtra 411028',
  },
  {
    country: 'India',
    city: 'Hyderabad',
    address: 'Midtown Building, Road no. 1 Banjara Hills, Opp Jalgam Vengal Rao Park, Hyderabad, Telangana 500034',
  },
  {
    country: 'Australia',
    city: 'Sydney',
    address: 'Suite 14.02, 100 William Street, Woolloomooloo Sydney, NSW 2011',
  },
  {
    country: 'USA',
    city: 'Houston',
    address: 'Suite 1000, 5718 Westheimer Road, Houston, Texas 77057',
  },
  {
    country: 'UAE',
    city: 'Dubai',
    address: 'Building 4WA, Office #708, Dubai Airport Free Zone',
  },
  {
    country: 'New Zealand',
    city: 'Auckland',
    address: '125 Queen Street, Auckland 1010',
  },
  {
    country: 'United Kingdom',
    city: 'London',
    address: '107-111 Fleet Street, London, Greater London EC4A 2AB',
  },
];

const officeCountryFlags = {
  India: 'in',
  Australia: 'au',
  USA: 'us',
  UAE: 'ae',
  'New Zealand': 'nz',
  'United Kingdom': 'gb',
};

const approvalImages = [
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa0f002ef62cdcc87fea_1st-petition.png',
    label: '1st Petition',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa1630c8e305d3db9b54_1st-visa.png',
    label: '1st Visa',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/697861eec12ee218ed326814_2nd-petition.png',
    label: '2nd Petition',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa0dfd0134227ef8f9b4_2nd-visa.png',
    label: '2nd Visa',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa0db40446e5bd6c117b_3rd-petition.png',
    label: '3rd Petition',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa0d01c1d778426d48b7_3rd-visa.png',
    label: '3rd Visa',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa08b924ad3e54ac12ed_4th-petition.png',
    label: '4th Petition',
  },
  {
    src: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6958fa0d890250bb54d5b428_4th-visa.png',
    label: '4th Visa',
  },
];

const testimonialVideos = [
  {
    name: 'Mr. Manas',
    country: 'Australia',
    visa: 'Business Migration',
    thumb: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66f6acc89209b52107666c39_Youtube-02.jpg',
    videoUrl: 'https://www.youtube.com/embed/xjWF-BqoGKw',
  },
  {
    name: 'Mr. Khurmi',
    country: 'Australia',
    visa: 'Business Migration',
    thumb: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/66f6acc869fd39c1e307888e_Youtube-01.jpg',
    videoUrl: 'https://www.youtube.com/embed/qfUcKjtuw0E',
  },
  {
    name: 'Mr. Gajjar',
    country: 'Australia',
    visa: 'Family PR',
    thumb: 'https://i.ytimg.com/vi/Ni67ARzYBDQ/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Ni67ARzYBDQ',
  },
  {
    name: 'Mr. Patel',
    country: 'Australia',
    visa: 'Business Migration',
    thumb: 'https://i.ytimg.com/vi/X54FB7cMnOY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/X54FB7cMnOY',
  },
];

const blogPosts = [
  {
    title: 'A Few Good Reasons To Hire A Business Migration Consultant',
    category: 'Business Migration',
    thumbnail:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc50a/6985a2b98f8dc350b8972dad_bussiness-migration-consultant.jpg',
    href: '/blogs/a-few-good-reasons-to-hire-a-business-migration-consultant',
  },
  {
    title: 'Australian PR: A World Full Of Possibilities',
    category: 'Australia',
    thumbnail:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc50a/69859ea7fb2f45cb6307d864_australian-pr.jpg',
    href: '/blogs/australian-pr-a-world-full-of-possibilities',
  },
  {
    title: 'L1A Visa Success: How Phoenix Business Advisory Helps You Get L1A Approved in Just 3 Months',
    category: 'USA',
    thumbnail:
      'https://cdn.prod.website-files.com/658d4930f1d45343af3cc50a/66f55b54a9d86c8a4ad55457_PHOENIX%20Website%20Latest%20Updates-06.jpg',
    href: '/blogs/l1a-visa-success-how-phoenix-business-advisory-helps-you-get-l1a-approved-in-just-3-months',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/phoenixbusinessadvisory', icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/917698940001', icon: MessageCircle },
  { label: 'Email', href: 'mailto:info@pcba.com.au', icon: Mail },
];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}

function useNavbarBarVisibility() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 40) {
        setNavbarVisible(true);
        setAnnouncementVisible(false);
      } else if (y > lastY + 4) {
        setNavbarVisible(false);
        setAnnouncementVisible(true);
      } else if (y < lastY - 4) {
        setNavbarVisible(true);
        setAnnouncementVisible(false);
      }
      lastY = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { navbarVisible, announcementVisible };
}

function CountUp({ value, prefix = '', suffix = '', duration = 1200 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let startTime;
    let frame;
    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function ButtonLink({ href, children, variant = 'primary', className = '', icon = true }) {
  const styles =
    variant === 'light'
      ? 'bg-white text-phoenix-black hover:bg-zinc-100'
      : variant === 'ghost'
        ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
        : 'bg-phoenix-red text-white shadow-glow hover:bg-red-700';

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-phoenix-red focus:ring-offset-2 focus:ring-offset-phoenix-black sm:px-6',
        styles,
        className,
      )}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

function AnnouncementBar({ language, setLanguage, onDismiss }) {

  return (
    <div className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[linear-gradient(90deg,#1a0005,#111111)] text-white">
      <div className="section-shell flex min-h-10 items-center gap-3 py-2 text-xs sm:text-sm">
        <div className="hidden sm:block">
          <LanguageSwitcher language={language} onChange={setLanguage} />
        </div>
        <div className="min-w-0 flex-1 text-center font-semibold text-white/80">
          New: Germany office opening soon. UK expansion planned.
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDismiss}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white sm:hidden"
            aria-label="Dismiss announcement"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

function LanguageSwitcher({ language, onChange }) {
  const [open, setOpen] = useState(false);
  const active = cleanLanguageOptions.find((item) => item.code === language) ?? cleanLanguageOptions[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-sm font700 text-white backdrop-blur-xl transition hover:bg-white/20"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe2 className="h-4 w-4 text-white/80" />
        <span>{active.label}</span>
        <ChevronDown className={cn('h-4 w-4 transition', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 w-44 overflow-hidden rounded-2xl border border-white/20 bg-zinc-950/90 p-1 shadow-premium backdrop-blur-2xl"
            role="listbox"
          >
            {cleanLanguageOptions.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  onChange(item.code);
                  setOpen(false);
                }}
                className={cn(
                  'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition',
                  language === item.code
                    ? 'bg-phoenix-red text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white',
                )}
              >
                <span>{item.label}</span>
                {language === item.code && <Check className="h-4 w-4" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar({ copy, language, setLanguage, visible }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-300',
        visible ? 'top-0 translate-y-0 opacity-100' : '-translate-y-[130%] opacity-0 pointer-events-none',
        scrolled ? 'py-3' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-none px-4 transition-all duration-300 sm:px-6 lg:px-8',
          scrolled &&
            'w-[calc(100%-24px)] rounded-full border border-white/10 bg-phoenix-black/80 py-2 shadow-premium backdrop-blur-2xl',
        )}
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Phoenix Business Advisory home">
          <span className="grid h-11 w-24 shrink-0 place-items-center rounded-full bg-white px-2 shadow-glow sm:w-28">
            <img src={brand.logo} alt="Phoenix Business Advisory" className="h-full w-full object-contain" />
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {copy.nav[item.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={links.calendar}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font800 text-phoenix-black transition hover:bg-zinc-100 md:inline-flex"
          >
            {copy.nav.book}
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((state) => !state)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] bg-phoenix-black/90 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-phoenix-black p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={brand.logo} alt="Phoenix Business Advisory" className="h-10 w-auto rounded-full bg-white px-2 py-1 object-contain" />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-7">
                <LanguageSwitcher language={language} onChange={setLanguage} />
              </div>

              <div className="mt-8 grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 font-display text-lg font800 text-white transition hover:bg-white/10"
                  >
                    {copy.nav[item.key]}
                  </a>
                ))}
              </div>

              <div className="mt-auto grid gap-3">
                <ButtonLink href={links.calendar} variant="light" className="w-full">
                  {copy.nav.book}
                </ButtonLink>
                <ButtonLink href={links.whatsapp} variant="ghost" className="w-full">
                  WhatsApp
                </ButtonLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroBlock({ copy, language }) {
  const trustBadges = ['Forbes Featured', '700+ Approvals', '23 Day Record Approval'];

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-phoenix-black text-white">
      <img
        src={brand.heroImage}
        alt="Phoenix Business Advisory global business migration visual"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.45]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.54),rgba(17,17,17,0.9)_64%,#111111_100%)]" />
      <div className="absolute inset-0 bg-dark-radial" />
      <div className="world-grid absolute inset-x-0 bottom-0 h-[58%] opacity-40" aria-hidden="true" />
      <div className="absolute left-1/2 top-28 h-56 w-56 -translate-x-1/2 rounded-full bg-phoenix-red/28 blur-3xl animate-pulseGlow" />

      <div className="section-shell relative z-10 flex min-h-screen items-center pb-16 pt-28 sm:pt-32">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.72fr)]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">


            <motion.div
              variants={reveal}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/80 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-phoenix-red shadow-glow" />
              At Phoenix, we specialize exclusively in business migration
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={language}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="mt-7 max-w-4xl font-display text-5xl font800 leading-[1.02] text-white sm:text-6xl lg:text-7xl"
              >
                {copy.heroTitle}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`${language}-subtitle`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: 0.04 }}
                className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white/75 sm:text-xl"
              >
                {copy.heroSubtitle}
              </motion.p>
            </AnimatePresence>

            <motion.div variants={reveal} transition={{ duration: 0.6, delay: 0.16 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={links.whatsapp}>{copy.check}</ButtonLink>
              <ButtonLink href={links.calendar} variant="ghost">
                {copy.schedule}
              </ButtonLink>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-9 grid gap-3 sm:grid-cols-3"
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={badge}
                  className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-phoenix-red/20 text-phoenix-red">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-white">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-premium backdrop-blur-2xl sm:p-5"
          >
            <div className="absolute -left-5 -top-5 hidden rounded-2xl border border-white/20 bg-phoenix-red px-4 py-3 text-sm font800 shadow-glow sm:block animate-float">
              Visa First, Investment After
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-phoenix-black/60 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-white/50">Approval intelligence</p>
                  <p className="mt-1 font-display text-2xl font800">Global Pathway Desk</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-phoenix-red/18 text-phoenix-red">
                  <Globe2 className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {miniTrackRecord.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={<CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />}
                    label={stat.label}
                    accent
                  />
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-white p-4 text-phoenix-black">
                <div className="flex items-center gap-3">
                  <img src={brand.mark} alt="" className="h-10 w-10 rounded-full border border-zinc-200 object-contain" />
                  <div>
                    <p className="font-display text-sm font800">Trusted Advisory Desk</p>
                    <p className="text-xs font-semibold text-zinc-500">The most trusted name in business migration in India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description, align = 'left', dark = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={reveal}
      transition={{ duration: 0.55 }}
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font800 uppercase text-phoenix-red">
          {eyebrow}
        </p>
      )}
      <h2 className={cn('font-display text-4xl font800 leading-tight sm:text-5xl', dark ? 'text-white' : 'text-phoenix-black')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-7 sm:text-lg', dark ? 'text-white/70' : 'text-zinc-600')}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

function SocialProofBar() {
  const marquee = [...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section id="media" className="overflow-hidden bg-[#0d0d0d] py-10 text-white">
      <div className="section-shell mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font800 uppercase tracking-[0.18em] text-white/45">Trusted by the media world</p>
        <p className="text-sm font-semibold text-white/65">Forbes, Times of India, Yahoo, Khaleej Times and more.</p>
      </div>
      <div className="border-y border-white/10 bg-white/[0.025] py-4">
        <div className="flex w-max animate-marquee gap-4 will-change-transform hover:[animation-play-state:paused]">
          {marquee.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-20 w-48 items-center justify-center rounded-2xl border border-white/10 bg-white px-5 opacity-65 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img src={logo.src} alt={logo.name} loading="lazy" className="max-h-10 max-w-[140px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountryProgramsBlock({ copy }) {
  return (
    <section id="programs" className="section-dark py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Business migration programs"
            title={copy.programsTitle}
            description="Premium advisory for entrepreneurs and families expanding through business migration, investment pathways and residence programs."
            dark
          />
          <ButtonLink href={links.whatsapp} className="w-full sm:w-auto">
            Check Eligibility
          </ButtonLink>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4"
        >
          {countryPrograms.map((program) => (
            <motion.div key={program.country} variants={reveal} transition={{ duration: 0.52 }} className="min-w-[86%] snap-start sm:min-w-0">
              <ProgrammeCard programme={program} />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-sm leading-6 text-white/50">
          *Timelines, investment amounts, approvals and returns are subject to eligibility, government rules, program availability and terms and conditions.
        </p>
      </div>
    </section>
  );
}

function StatsGridBlock() {
  return (
    <section className="bg-[#0d0d0d] py-16 text-white sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-premium">
          <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {trackRecord.map((item) => (
              <div key={item.label} className="p-6 text-center sm:p-8">
                <p className="font-stat text-5xl font800 leading-none text-phoenix-red sm:text-6xl">
                  <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <p className="mx-auto mt-4 max-w-36 text-sm font-bold uppercase leading-5 text-white/62">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsBlock({ copy }) {
  return (
    <section className="section-dark overflow-hidden py-20 text-white sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Phoenix Business Advisory"
          title={copy.whyTitle}
          description="We empower businesses and entrepreneurs to expand globally with confidence through personalized guidance, proven strategies and real-world results."
          align="center"
          dark
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={reveal}
                transition={{ duration: 0.5 }}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-phoenix-red/60 hover:bg-white/[0.07]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-phoenix-red transition group-hover:bg-phoenix-red group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font800 text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedInNewsBlock() {
  return (
    <section id="featured-news" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Media coverage"
          title="Featured in the news"
          description="Recognized by leading publications for trusted business migration advisory."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3"
        >
          {featuredInNews.map((story) => (
            <motion.article
              key={story.source}
              variants={reveal}
              transition={{ duration: 0.52 }}
              className="group rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-zinc-200 bg-white p-2">
                    <img src={story.logo} alt={story.source} loading="lazy" className="h-8 w-24 object-contain sm:w-28" />
                  </div>
                </div>
                <Check className="h-5 w-5 shrink-0 text-phoenix-red" />
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-600">"{story.quote}"</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MediaCoverageBlock({ copy }) {
  const marquee = [...mediaLogos, ...mediaLogos];

  return (
    <section id="media" className="overflow-hidden bg-phoenix-black py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <SectionHeader
            eyebrow="Trusted by the media world"
            title={copy.mediaTitle}
            description='As featured on Forbes: "The Most Trusted Name in Business Migration in India".'
            dark
          />
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase text-phoenix-red">Featured logos</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {mediaLogos.slice(0, 6).map((logo) => (
                <div key={logo.name} className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 opacity-80 transition hover:opacity-100">
                  <img src={logo.src} alt={logo.name} loading="lazy" className="max-h-10 max-w-[120px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-y border-white/10 bg-white/[0.04] py-5">
        <div className="flex w-max animate-marquee gap-4 will-change-transform hover:[animation-play-state:paused]">
          {marquee.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-24 w-56 items-center justify-center rounded-2xl border border-white/10 bg-white p-5 shadow-glow"
            >
              <img src={logo.src} alt={logo.name} loading="lazy" className="max-h-14 max-w-[160px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationCTA({ copy }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-red-luxury p-6 text-white shadow-glow sm:p-10 lg:p-14"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-pulseGlow" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font800 uppercase text-white/75">Free strategy consultation</p>
              <h2 className="mt-3 font-display text-4xl font800 leading-tight sm:text-5xl">{copy.ctaTitle}</h2>
              <p className="mt-4 max-w-2xl text-lg font-semibold text-white/80">{copy.ctaSubtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={links.calendar} variant="light" className="whitespace-nowrap">
                Schedule Consultation
              </ButtonLink>
              <ButtonLink href={links.whatsapp} variant="ghost" className="whitespace-nowrap">
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ApprovalsGallery() {
  return (
    <section id="approvals" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Approval track record"
          title="700+ approved nominations, petitions, and visas"
          description="A clean approval wall built from the original campaign assets, replacing the old Webflow slider dependency."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approvalImages.map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100 shadow-sm">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md">
                {item.label} - Approved
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink href="#contact" variant="ghost" className="mx-auto">
            See All Approvals
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function OfficePresenceTabs() {
  const countryList = ['India', 'Australia', 'USA', 'UAE', 'New Zealand', 'United Kingdom'];
  const [activeCountry, setActiveCountry] = useState('India');
  const activeOffices = offices.filter((office) => office.country === activeCountry);

  return (
    <section className="bg-zinc-50 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Office presence"
          title="Our presence across India and global hubs"
          description="A tab-based office browser keeps the presence section readable on desktop and touch-friendly on mobile."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {countryList.map((country) => (
            <button
              key={country}
              type="button"
              onClick={() => setActiveCountry(country)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition',
                activeCountry === country
                  ? 'border-phoenix-red bg-phoenix-red text-white'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:border-phoenix-red hover:text-phoenix-red',
              )}
            >
              <Flag country={officeCountryFlags[country] ?? 'us'} size={16} />
              {country}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCountry}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {activeOffices.map((office) => (
            <div key={`${office.country}-${office.city}`} className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-100">
                  <Flag country={officeCountryFlags[office.country] ?? 'us'} size={18} />
                </span>
                <div>
                  <p className="font-display text-lg font800 text-phoenix-black">{office.city}</p>
                  <p className="text-sm font-semibold text-zinc-500">{office.country}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{office.address}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialVideoGallery() {
  const [activeVideo, setActiveVideo] = useState(testimonialVideos[0]);

  return (
    <section id="testimonials" className="bg-phoenix-black py-24 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Client videos"
          title="What our clients think about us"
          description="Real client journeys, presented in a clean and premium experience."
          dark
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[2fr_1.3fr]">
          <motion.div
            key={activeVideo.videoUrl}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0)]" />
              <iframe
                title={`${activeVideo.name} testimonial video`}
                src={activeVideo.videoUrl}
                className="h-full w-full rounded-[1.75rem]"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium uppercase tracking-wider text-phoenix-red/80">Featured client</p>
                <h3 className="mt-2 font-display text-3xl font800 tracking-tight">{activeVideo.name}</h3>
                <p className="mt-2 text-base text-white/70">{activeVideo.country} • {activeVideo.visa}</p>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  <Play className="h-4 w-4 text-phoenix-red" />
                </div>
                <span>Watch video</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-wider text-phoenix-red/80">Select a testimonial</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {testimonialVideos.map((video) => (
                <motion.div
                  key={video.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: testimonialVideos.indexOf(video) * 0.05 }}
                  className="group"
                >
                  <TestimonialCard
                    name={video.name}
                    country={video.country}
                    visa={video.visa}
                    thumb={video.thumb}
                    active={activeVideo.videoUrl === video.videoUrl}
                    onClick={() => setActiveVideo(video)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blogs" className="bg-zinc-50 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Latest updates"
          title="Articles and insights"
          description="Editorial blog cards keep the retention layer useful without reintroducing slider clutter."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadQualificationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    turnover: '',
    assets: '',
  });

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const nextStep = () => setStep((current) => Math.min(current + 1, 3));
  const prevStep = () => setStep((current) => Math.max(current - 1, 1));

  const canContinueStep1 = formData.name.trim() && formData.phone.trim();
  const canContinueStep2 = formData.email.trim() && formData.city.trim();
  const canSubmit = formData.turnover && formData.assets;

  return (
    <section id="lead-form" className="bg-phoenix-black py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Concierge qualification"
              title="Check your eligibility in 60 seconds"
              description="Our advisors review every submission personally. The multi-step flow keeps the form calm and mobile-friendly while preserving the full data set."
              dark
            />
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              {['Private & confidential', 'Reviewed within 24 hours', 'No obligation'].map((badge) => (
                <div key={badge} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <ShieldCheck className="h-4 w-4 text-phoenix-red" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
            <a href={links.whatsapp} className="mt-6 inline-flex text-sm font-bold text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white">
              Prefer WhatsApp? Start the conversation here.
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-premium backdrop-blur-xl sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase text-phoenix-red">Step {step} of 3</p>
                <h3 className="mt-1 font-display text-2xl font800">Tell us a little about yourself</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-white/60">
                24 hour response
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-phoenix-red transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
            </div>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                if (step < 3) {
                  setStep((current) => current + 1);
                  return;
                }
                setSubmitted(true);
              }}
            >
              <div className={cn(step === 1 ? 'grid gap-4 sm:grid-cols-2' : 'hidden')}>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Name
                  <input
                    value={formData.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-phoenix-red"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Phone
                  <input
                    value={formData.phone}
                    onChange={(event) => updateField('phone', event.target.value.replace(/\D/g, '').slice(0, 15))}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-phoenix-red"
                    placeholder="Phone number"
                    inputMode="numeric"
                    required
                  />
                </label>
              </div>

              <div className={cn(step === 2 ? 'grid gap-4 sm:grid-cols-2' : 'hidden')}>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Email
                  <input
                    value={formData.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-phoenix-red"
                    placeholder="Email address"
                    type="email"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  City
                  <input
                    value={formData.city}
                    onChange={(event) => updateField('city', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-phoenix-red"
                    placeholder="City"
                    required
                  />
                </label>
              </div>

              <div className={cn(step === 3 ? 'grid gap-4 sm:grid-cols-2' : 'hidden')}>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Annual Business Turnover
                  <select
                    value={formData.turnover}
                    onChange={(event) => updateField('turnover', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-phoenix-red"
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Below 5 Cr">Below 5 Cr</option>
                    <option value="5 Cr to 10 Cr">5 Cr to 10 Cr</option>
                    <option value="10 Cr +">10 Cr +</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Total Family Assets
                  <select
                    value={formData.assets}
                    onChange={(event) => updateField('assets', event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-phoenix-red"
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Below 5 Cr">Below 5 Cr</option>
                    <option value="5 Cr to 10 Cr">5 Cr to 10 Cr</option>
                    <option value="10 Cr +">10 Cr +</option>
                  </select>
                </label>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white/75 transition hover:bg-white/10"
                  >
                    Back
                  </button>
                ) : null}

                <button
                  type="submit"
                  disabled={(step === 1 && !canContinueStep1) || (step === 2 && !canContinueStep2) || (step === 3 && !canSubmit)}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-phoenix-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#960e17] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {step === 3 ? 'Submit Inquiry' : 'Continue'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {submitted ? (
              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                Thanks, {formData.name || 'there'}. Your inquiry has been received. Our advisors will review it within 24 hours.
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesFaqBlock() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-zinc-50 py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="sticky top-28">
            <SectionHeader
              eyebrow="What we do for clients"
              title="Visa First, Investment After"
              description="We help business owners expand through migration in the USA, Australia, New Zealand and the UAE, with settlement and acquisition support designed into the journey."
            />
            <ButtonLink href={links.whatsapp} className="mt-7 w-full sm:w-auto">
              Ready to expand your business?
            </ButtonLink>
          </div>

          <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-3 shadow-sm">
            {serviceFaqs.map((item, index) => {
              const active = open === index;
              return (
                <div key={item.q} className="border-b border-zinc-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                    aria-expanded={active}
                  >
                    <span className="font-display text-lg font800 text-phoenix-black">{item.q}</span>
                    <span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-full bg-zinc-100 text-phoenix-black transition', active && 'rotate-45 bg-phoenix-red text-white')}>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-5 text-sm leading-7 text-zinc-600">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderNote() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-sm lg:grid-cols-[1fr_0.78fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="text-sm font800 uppercase text-phoenix-red">Founder's message</p>
            <h2 className="mt-3 font-display text-4xl font800 leading-tight text-phoenix-black sm:text-5xl">Confidence for international growth.</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              Welcome to Phoenix Business Advisory. Our mission is to empower entrepreneurs and businesses to expand globally with confidence. With honest guidance, personalized support and hands-on expertise, we simplify international growth in the USA, Australia, New Zealand and the UAE.
            </p>
            <div className="mt-7 rounded-2xl border border-phoenix-red/20 bg-white p-5">
              <p className="text-lg font800 leading-7 text-phoenix-red">
                We are committed to becoming the <span className="text-phoenix-black">#1 leader in business migration</span> worldwide by 2028.
              </p>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-phoenix-black">
            <img src={brand.ceo} alt="MP Singh, Founder and President of Phoenix Business Advisory" loading="lazy" className="h-full w-full object-cover object-top opacity-[0.88]" />
            <div className="absolute inset-0 bg-gradient-to-t from-phoenix-black/70 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl">
              <p className="font-display text-lg font800">MP Singh</p>
              <p className="text-sm text-white/60">Founder and President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterBlock({ copy }) {
  return (
    <footer id="contact" className="bg-phoenix-black text-white">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={brand.mark} alt="" className="h-12 w-12 rounded-full bg-white p-1" />
              <div>
                <p className="font-display text-xl font800">Phoenix Business Advisory</p>
                <p className="text-sm text-white/50">Premium business migration consultancy</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Registered Migration Agent MARN (1383279), Member of MIA (6408), New Zealand Licence Number (202506918).
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <a href="mailto:info@pcba.com.au" className="flex items-center gap-3 transition hover:text-white">
                <Mail className="h-4 w-4 text-phoenix-red" />
                info@pcba.com.au
              </a>
              <a href="tel:+919964544000" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-phoenix-red" />
                India: +91 99645 44000
              </a>
              <a href="tel:+971507557944" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-phoenix-red" />
                UAE: +971 50 755 7944
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-display text-sm font800 uppercase text-white">Quick navigation</h3>
              <div className="mt-4 grid gap-3 text-sm text-white/60">
                {footerNavItems.map((item) => (
                  <a key={item.label} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="/about-us" className="transition hover:text-white">About Us</a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm font800 uppercase text-white">Programs offered</h3>
              <div className="mt-4 grid gap-3 text-sm text-white/60">
                {countryPrograms.map((program) => (
                  <a key={program.country} href={program.href} className="transition hover:text-white">
                    {program.countryName} - {program.visa}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm font800 uppercase text-white">Office locations</h3>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="flex items-center gap-2 text-sm font800 text-white">
                  <MapPin className="h-4 w-4 text-phoenix-red" />
                  India, Australia, USA, UAE, New Zealand, UK
                </p>
                <p className="mt-3 text-xs leading-6 text-white/55">
                  View the office presence section above for full addresses, phones and location details.
                </p>
              </div>
            </div>
          </div>
        </div>

    

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">© 2026 PHX Consulting Pvt Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:bg-phoenix-red hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Phoenix Business Advisory"
      className="fixed bottom-4 right-4 z-[55] inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25d366] px-4 text-sm font800 text-white shadow-premium transition duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('phoenix-language') || 'en';
  });
  const [announcementVisible, setAnnouncementVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.localStorage.getItem('phoenix-announcement-dismissed') !== 'true';
  });
  const copy = useMemo(() => cleanTranslations[language] ?? cleanTranslations.en, [language]);
  const { navbarVisible, announcementVisible: canShowAnnouncementByScroll } = useNavbarBarVisibility();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('phoenix-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const dismissAnnouncement = () => {
    setAnnouncementVisible(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('phoenix-announcement-dismissed', 'true');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-phoenix-black antialiased">
      {announcementVisible && canShowAnnouncementByScroll ? (
        <AnnouncementBar language={language} setLanguage={setLanguage} onDismiss={dismissAnnouncement} />
      ) : null}
      <Navbar copy={copy} language={language} setLanguage={setLanguage} visible={navbarVisible} />
      <main>
        <HeroBlock copy={copy} language={language} />
        <SocialProofBar />
        <CountryProgramsBlock copy={copy} />
        <StatsGridBlock />
        <ApprovalsGallery />
        <FounderNote />
        <WhyChooseUsBlock copy={copy} />
        <FeaturedInNewsBlock />
        <TestimonialVideoGallery />
        <LeadQualificationForm />
        <ServicesFaqBlock />
        <OfficePresenceTabs />
        <BlogSection />
        <ConsultationCTA copy={copy} />
      </main>
      <FooterBlock copy={copy} />
      <FloatingWhatsApp />
    </div>
  );
}
