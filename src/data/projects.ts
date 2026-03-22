export interface ProjectSection {
  id: string;
  label: string;
  title: string;
  content: string;
  bullets?: string[];
  quotes?: string[];
  stats?: { label: string; value: number; suffix: string }[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  color: string;
  videos: string[];
  images: number;
  thumbnail?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "curiocity",
    number: "01",
    title: "CurioCity",
    subtitle: "공간 경험을 UX로 설계한 참여형 Space UX 프로젝트",
    category: "Space UX",
    tags: ["Space UX", "Research", "Physical + Digital"],
    color: "#00adb5",
    videos: [
      "https://www.youtube.com/watch?v=YlP94fvTRbg",
      "https://www.youtube.com/watch?v=O43sf9ZHGL8",
    ],
    images: 7,
    thumbnail: "/images/curiocity/thumbnail.jpg",
    sections: [
      {
        id: "problem",
        label: "Problem Definition",
        title: "공간 경험을 UX로 설계한 CurioCity",
        content: "물리적 공간과 디지털 인터페이스를 연결한 경험을 설계했다",
        bullets: [
          "공간 목적 불명확",
          "사용자 체류 동기 부족",
          "사용자 경험 구조 미설계",
        ],
      },
      {
        id: "research",
        label: "Research & Insight",
        title: "사용자는 기능보다 머물 수 있는 경험을 먼저 찾는다",
        content:
          "공간 사용자 10명을 대상으로 인터뷰를 진행하여 공간 사용 목적과 체류 경험을 조사했다",
        bullets: [
          "전시 중심 구조로 사용자 체류 경험 부족",
          "교류가 자연스럽게 시작될 접점 부재",
          "사용자는 기능보다 '머물 수 있는 경험'을 먼저 찾는다",
        ],
      },
      {
        id: "persona",
        label: "User Persona",
        title: "공간 사용자의 공통 니즈는 '머무를 수 있는 경험'이다",
        content:
          "공간 사용자 인터뷰와 관찰을 통해 Innovation Playground를 사용하는 주요 사용자 유형을 정리했다",
        bullets: [
          "Student — 휴식과 교류를 원하는 학생",
          "Researcher — 연구 결과를 공유하고 싶은 연구자",
          "Professor — 학습 경험을 확장하려는 교수",
        ],
      },
      {
        id: "strategy",
        label: "UX Strategy",
        title:
          "CurioCity는 공간을 '머무는 순간 경험이 시작되는 공간'으로 재정의했다",
        content: "머무름 → 참여 → 흐름으로 이어지는 UX 구조 설계",
        bullets: [
          "#RELAX — 긴장 완화 공간 경험 (식물과 자연 요소 활용, 따뜻한 색감과 조명)",
          "#ENGAGE — 참여를 유도하는 인터랙션 (투표 스크린·터치 테이블, 감정 기반 피드백 인터랙션)",
          "#FLOW — 집중과 교류의 균형 (연구 공간·휴식 공간 분리, 자연스러운 동선 설계)",
        ],
      },
      {
        id: "prototype",
        label: "Prototype",
        title: "공간 경험을 구현하기 위한 단계별 프로토타입",
        content: "",
        bullets: [
          "Exploration 01: Physical Space Model — 공간 동선과 사용자 체류 경험을 검증하기 위해 물리적 공간 모형을 제작",
          "Exploration 02: Mobile Interface — 사용자가 공간 정보를 탐색하고 프로젝트를 확인할 수 있는 모바일 인터페이스 설계",
          "Exploration 03: 3D Spatial Experience — 공간 경험을 직관적으로 이해할 수 있도록 3D 기반 공간 체험 환경 구현",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        title:
          "물리적 공간과 디지털 경험을 연결한 참여형 Space UX 프로젝트",
        content:
          "공간 체류 시간이 자연스럽게 증가했으며 사용자는 기능이 아닌 감정 경험에 반응했다",
        quotes: [
          "여기 그냥 앉아 있고 싶다",
          "혼자 있지만 혼자 아닌 느낌",
          "자연스럽게 머물게 된다",
        ],
      },
    ],
  },
  {
    slug: "grounded",
    number: "02",
    title: "GROUNDED",
    subtitle:
      "복잡한 도시 인프라 데이터를 일반 사용자도 직관적으로 이해할 수 있도록 구조와 인터페이스를 재설계",
    category: "Data Experience",
    tags: ["Data Visualization", "3D", "Urban Infrastructure"],
    color: "#3b82f6",
    videos: [],
    images: 5,
    thumbnail: "/images/grounded/thumbnail.png",
    sections: [
      {
        id: "problem",
        label: "Problem Definition",
        title: "데이터 경험 설계 - GROUNDED",
        content:
          "도시 인프라 정보는 전문가 중심 데이터 구조로 제공되어 일반 사용자가 이해하기 어렵다",
        bullets: [
          "복잡한 데이터 구조",
          "전문가 중심 도면 정보",
          "일반 사용자 이해 어려움",
        ],
      },
      {
        id: "research",
        label: "Research",
        title: "사용자 리서치를 통한 문제 구조 파악",
        content:
          "정보 탐색보다 정보 이해 과정에서 더 큰 어려움 발견",
        bullets: [
          "텍스트·도면 중심 정보 제공",
          "복잡한 데이터 구조로 사용자 직접 해석 필요",
          "공사 및 인프라 변화 사전 이해 어려움",
        ],
      },
      {
        id: "strategy",
        label: "Insight & UX Strategy",
        title: "문제의 핵심과 UX 전략",
        content:
          "문제는 데이터가 아니라 정보를 이해할 수 있는 구조의 부재였다",
        bullets: [
          "데이터를 3D 시각 구조로 재구성",
          "레이어 기반 정보 탐색 구조 설계",
          "직관적인 인터랙션 중심 UX 설계",
        ],
      },
      {
        id: "solution",
        label: "UX Solution",
        title: "3D 기반 도시 인프라 인터페이스",
        content:
          "도시 인프라 정보를 직관적으로 이해할 수 있도록 컬러 기반 시각화와 인터랙션 UX를 설계했다",
        bullets: [
          "3D 데이터 시각화 → 복잡한 지하 인프라 구조를 직관적 표현",
          "레이어 기반 탐색 구조 → 전기·가스·수도·하수 인프라 구분",
          "클릭 인터랙션 UI → 특정 위치 선택 시 상세 정보 제공",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        title: "프로젝트 결과와 인사이트",
        content:
          "복잡한 정보일수록 사용자가 이해할 수 있는 경험 구조가 중요하다",
        stats: [
          { label: "시민 참여증가", value: 35, suffix: "%" },
          { label: "데이터 이해도 개선", value: 20, suffix: "%" },
        ],
        quotes: ["정보를 훨씬 쉽게 이해할 수 있다"],
      },
    ],
  },
  {
    slug: "hci",
    number: "03",
    title: "HCI",
    subtitle:
      "중독을 개인의 선택이 아닌 감정과 환경의 흐름으로 이해할 수 있도록 경험을 설계",
    category: "HCI / VR",
    tags: ["HCI", "VR", "Emotion Flow"],
    color: "#8b5cf6",
    videos: ["https://www.youtube.com/watch?v=NPYDC7MvH30"],
    images: 2,
    sections: [
      {
        id: "challenge",
        label: "Challenge",
        title: "감정 흐름 기반 경험 설계 HCI",
        content:
          "유럽 지역에서 청소년 마약 접근성과 중독 문제가 지속적으로 증가하고 있었다. 하지만 많은 사람들은 이 문제를 개인의 선택이나 책임의 문제로 인식하는 경향이 있었다",
        bullets: [
          "유럽 청소년 마약 중독률 증가",
          "청소년 자살률 증가",
          "마약 중독에 대한 사회적 낙인 존재",
        ],
      },
      {
        id: "insight",
        label: "Key Insight",
        title: "중독은 개인의 선택이 아니라, 감정과 환경이 만든 결과다",
        content: "감정 요인 + 환경 요인 → 복합적 과정",
      },
      {
        id: "concept",
        label: "Concept",
        title: "감정의 흐름을 통해 중독을 이해하도록 설계",
        content:
          "청소년이 마약에 접근하게 되는 감정 흐름을 이해할 수 있도록 VR 기반 공감 경험을 설계했다",
        bullets: [
          "스트레스 → 고립 → 마약 접근 → 반복 → 무감각 → 극단적 선택",
        ],
      },
      {
        id: "design",
        label: "Design Intent",
        title:
          "감정의 흐름을 따라가며 극단적 선택 이전의 감정 흐름을 사용자가 이해할 수 있도록 설계했다",
        content: "",
      },
      {
        id: "outcome",
        label: "Outcome",
        title:
          "참여자들은 중독을 단순한 선택이 아니라 감정과 환경의 흐름 속에서 이해하게 되었다",
        content: "",
        quotes: [
          "중독 과정을 이해하지 못했다",
          "쉽게 판단하면 안 되는 문제다",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
