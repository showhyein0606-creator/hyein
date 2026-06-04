import { Course, Channel, NavItem } from './types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Channel', href: '#channel' },
  { label: 'Contact', href: '#contact' },
];

export const courses: Course[] = [
  {
    id: 'youtube-growth',
    title: 'YouTube Growth',
    description: '유튜브 채널 기획부터 알고리즘 분석, 영상 편집까지 이어지는 올인원 성장 전략.',
    iconName: 'smart_display',
    tags: ['Planning', 'Editing'],
    accentColor: 'green',
  },
  {
    id: 'smartphone-ai-tools',
    title: 'Smartphone AI Tools',
    description: '스마트폰 하나로 끝내는 생산성 혁명. 생성형 AI를 활용한 비즈니스 자동화.',
    iconName: 'psychology_alt',
    tags: ['ChatGPT', 'Mobile'],
    accentColor: 'blue',
  },
  {
    id: 'live-commerce',
    title: 'Live Commerce',
    description: '네이버/쿠팡 라이브 플랫폼 운영 실무 및 완판을 부르는 쇼호스트 스피치 스킬.',
    iconName: 'campaign',
    tags: ['Platform', 'Sales'],
    accentColor: 'green',
  },
  {
    id: 'sns-marketing',
    title: 'SNS Marketing',
    description: '인스타그램, 블로그를 활용한 퍼스널 브랜딩 및 타겟별 맞춤형 콘텐츠 마케팅.',
    iconName: 'rss_feed',
    tags: ['Instagram', 'Branding'],
    accentColor: 'blue',
  },
  {
    id: 'blog-seo-mastery',
    title: 'Blog SEO Mastery',
    description: '상위 노출을 보장하는 키워드 분석 기술과 가독성을 높이는 텍스트 구조 설계.',
    iconName: 'article',
    tags: ['SEO', 'Writing'],
    accentColor: 'green',
  },
];

export const channels: Channel[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@smliegirl1004',
    iconName: 'play_circle',
    url: 'https://www.youtube.com/@smliegirl1004',
    backgroundColor: 'rgba(239, 68, 68, 0.15)', // Custom transparent red
    textColor: '#EF4444',
  },
  {
    id: 'naver-blog',
    name: 'Naver Blog',
    handle: '이혜인의 실전 일지',
    iconName: 'description',
    url: 'https://blog.naver.com/980207',
    backgroundColor: 'rgba(34, 197, 94, 0.15)', // Custom transparent green
    textColor: '#22C55E',
  },
  {
    id: 'kakao-talk',
    name: 'Open KakaoTalk',
    handle: '1:1 오픈채팅 문의',
    iconName: 'language',
    url: 'https://open.kakao.com/o/sknLE5xi',
    backgroundColor: 'rgba(251, 191, 36, 0.15)', // Custom transparent yellow/gold
    textColor: '#F59E0B',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@leehyein_ai',
    iconName: 'share',
    url: 'https://www.instagram.com/leehyein_ai',
    backgroundColor: 'rgba(236, 72, 153, 0.15)', // Custom transparent pink/purple
    textColor: '#EC4899',
  },
];

export const aboutSkills = [
  '서울디지털재단 전문 강사',
  'MIT 엔터테인먼트 파트너',
  '교보생명 디지털 실무 멘토',
];

export const resumeDetails = {
  name: '이혜인',
  title: '정보화 강사 · 디지털 활용 교육 전문가',
  quote: '"현장에 바로 적용되는 디지털 실무 교육으로 학습자의 실행력과 성과를 함께 높이는 실전형 강사"',
  summary: '정보화 강사이자 라이브커머스 현장 경험을 갖춘 실무형 교육 전문가입니다. 시니어, 소상공인, 기업을 대상으로 맞춤형 디지털 활용 교육을 진행해 온 풍부한 경험을 보유하고 있습니다. 유튜브, SNS, 네이버 플랫폼, 스마트폰 및 라이브커머스 등 현장 실무와 밀접한 실습 중심의 강의를 제공합니다.',
  targets: '기업 · 소상공인 · 시니어',
  fields: '디지털 활용 · SNS 마케팅 · 라이브커머스',
  methods: '실습 중심 · 맞춤형 교육',
  experiences: [
    {
      company: '아르더스튜디오 | 쇼호스트',
      period: '2022.11 ~ 현재',
      detail: '모바일 쇼호스트 활동',
    },
    {
      company: '서울디지털재단 | 강사',
      period: '2024.06 ~ 2024.12',
      detail: '소상공인 대상 디지털 강의 (네이버 플레이스, 스마트스토어, 블로그, 인스타그램 등)',
    },
    {
      company: '㈜MIT엔터테인먼트 | 강사',
      period: '2025.03 ~ 2025.08',
      detail: '라이브커머스 강의',
    },
    {
      company: '교보생명 & 요양원 | 강사',
      period: '2025.11 ~ 2025.12',
      detail: '시니어 맞춤 아로마테라피',
    },
    {
      company: '교보생명 | 강사',
      period: '2026.01',
      detail: '스와로브스키 진주 목걸이 만들기',
    },
    {
      company: '쌍문동어르신복지관 | 강사',
      period: '2026.03 ~ 현재',
      detail: '유튜브 기초 강의',
    }
  ],
  credentials: [
    { name: '미용사자격증', agency: '한국산업인력공단' },
    { name: '교원 자격증(실기교사)', agency: '경북대학교' },
    { name: '직업능력개발훈련교사 자격증', agency: '서울지방노동청' },
    { name: 'SNS마케팅전문가 1급', agency: '한국자격평가원' },
    { name: '스마트폰활용지도사 2급', agency: 'SNS소통연구소' },
    { name: '브릿지공예지도사', agency: '한국평생학습진흥원' },
    { name: '아로마전문관리사 2급', agency: '한국아로마교육원' }
  ],
  coreAchievements: [
    '서울디지털재단 어디든지원단에서 소상공인 대상 디지털 실무 교육을 진행했습니다.',
    '㈜MIT엔터테인먼트에서 라이브커머스 운영 및 실전 강의를 담당했습니다.',
    '교보생명 출강을 통해 체험형·맞춤형 프로그램 강의를 진행했습니다.',
    '쌍문동어르신복지관에서 시니어 대상 유튜브 기초 교육을 진행하고 있습니다.',
    '아르더스튜디오에서 모바일 쇼호스트로 활동하며 현장 전달력을 강화해왔습니다.'
  ],
  canTeach: [
    '유튜브 채널 만들기 및 영상 제작 기초',
    'SNS 활용 및 마케팅',
    '스마트폰 활용 및 AI 활용 교육',
    '틱톡, 유튜브, 네이버쇼핑스토어 등 라이브커머스 플랫폼 운영',
    '네이버 블로그 작성 및 SEO 최적화'
  ]
};
