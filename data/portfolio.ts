export const personalInfo = {
  name: "김광수",
  nameEn: "Kwangsoo Kim",
  email: "gimgwangsu0@gmail.com",
  github: "https://github.com/Poeta0923",
  university: "가천대학교",
  department: "컴퓨터공학부",
  enrollYear: 2021,
  roles: ["풀스택 개발자", "TypeScript 개발자", "Next.js 개발자", "NestJS 개발자"],
  bio: "TypeScript·Next.js·NestJS 기반의 현대적 웹 개발을 추구하며,\n실시간 통신·AI 통합·클라우드 아키텍처를 탐구합니다.",
  interests: ["실시간 통신", "AI 통합", "클라우드 아키텍처"],
};

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    name: "Backend",
    skills: ["NestJS", "Node.js", "Express", "Prisma"],
  },
  {
    name: "Database / Infra",
    skills: ["PostgreSQL", "Redis", "MySQL", "MariaDB", "Docker", "AWS S3"],
  },
  {
    name: "AI / 기타",
    skills: ["Claude API", "Socket.io", "GitHub Actions CI/CD"],
  },
];

export type Experience = {
  organization: string;
  type: string;
  role: string;
  period: string;
  projectTitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    organization: "가천대학교",
    type: "심화전공프로젝트",
    role: "백엔드 개발자",
    period: "2025.09 – 2025.12",
    projectTitle: "team-ONE",
    description: "공모전·사이드 프로젝트 팀원 모집 플랫폼. AI 추천 알고리즘과 실시간 채팅으로 적합한 팀원을 연결합니다.",
    highlights: [
      "HTTP·WebSocket 공통 JWT 인증 미들웨어 설계",
      "DB 스키마 및 테이블 관계 모델링",
      "WebSocket 기반 실시간 채팅 구현",
      "입력 검증 및 보안 처리",
    ],
    techStack: ["Node.js", "Express", "WebSocket", "MySQL", "React Native"],
  },
  {
    organization: "가천대학교",
    type: "종합프로젝트",
    role: "풀스택 개발자",
    period: "2025.03 – 2025.06",
    projectTitle: "bookCalendar-admin",
    description: "도서 일정을 관리하는 어드민 대시보드 웹 애플리케이션.",
    highlights: [
      "서버사이드 렌더링(SSR) 기반 관리자 UI 구현",
      "MariaDB 연동 도서 데이터 CRUD",
    ],
    techStack: ["Express.js", "EJS", "MariaDB"],
  },
];

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  type: string;
  role?: string;
  highlights: string[];
  techStack: string[];
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "talkertive-chat-app",
    description: "관심사 기반 모임 + 실시간 채팅 풀스택 플랫폼",
    longDescription:
      "같은 관심사를 가진 사람들이 모임을 개설하고 실시간으로 소통할 수 있는 풀스택 웹 애플리케이션. Claude API를 활용한 자연어 기반 일정 관리 기능을 포함합니다.",
    type: "솔로 프로젝트",
    highlights: [
      "Socket.io 기반 실시간 채팅 (읽음 확인, 타이핑 인디케이터, 파일 첨부)",
      "Claude API 활용 자연어 일정 생성·수정",
      "NextAuth v5 + Google OAuth 인증 (로그인 실패 횟수 제한)",
      "관리자 대시보드 — 유저·방 통계, 배너 관리",
    ],
    techStack: ["Next.js 15", "NestJS 11", "PostgreSQL", "Redis", "Socket.io", "AWS S3", "Claude API", "Docker"],
    github: "https://github.com/Poeta0923/talkertive-chat-app",
    featured: true,
  },
  {
    title: "team-ONE",
    description: "AI 기반 팀원 매칭 서비스",
    longDescription:
      "공모전·사이드 프로젝트 팀원 모집 플랫폼. AI 추천 알고리즘과 실시간 채팅으로 적합한 팀원을 연결합니다.",
    type: "팀 프로젝트",
    role: "사용자 앱 백엔드 서버 개발 전반 담당 — JWT 기반 HTTP/WebSocket 공통 인증·인가 설계, DB 스키마 모델링, WebSocket 채팅 연동",
    highlights: [
      "HTTP·WebSocket 공통 JWT 인증 미들웨어 설계",
      "DB 스키마 및 테이블 관계 모델링",
      "WebSocket 기반 실시간 채팅 구현",
      "입력 검증 및 보안 처리",
    ],
    techStack: ["Node.js", "Express", "WebSocket", "MySQL", "React Native"],
    github: "https://github.com/Poeta0923/team-ONE",
    featured: false,
  },
  {
    title: "bookCalendar-admin",
    description: "도서 캘린더 관리자 대시보드",
    longDescription:
      "도서 일정을 관리하는 어드민 대시보드 웹 애플리케이션.",
    type: "개인 프로젝트",
    highlights: [],
    techStack: ["Express.js", "EJS", "MariaDB"],
    github: "https://github.com/Poeta0923/bookCalendar-admin",
    featured: false,
  },
];
