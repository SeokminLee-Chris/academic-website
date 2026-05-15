export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  projectUrl?: string;
  points?: string[];
}

export const experienceData: Experience[] = [
  {
    date: "Jun 2025 – May 2028",
    title: "First Lieutenant / Research Officer for National Defense",
    company: "Agency for Defense Development (ADD)",
    companyUrl: "https://www.add.re.kr/eps",
    points: [
      "Selected as one of 20 research officers nationwide dedicated to science-and-technology R&D for national defense.",
      "ADD is a government research institute responsible for developing advanced defense technologies and weapon systems for South Korea's military.",
    ],
  },
  {
    date: "Mar 2024 – Mar 2025",
    title: "Sole Computer Vision AI Researcher",
    company: "QUESTER",
    points: [
      "Led the complete AI pipeline from data collection through deployment, focusing on object detection, segmentation, tracking, and stereo matching using C++.",
      "Recognized as Samsung C-Lab Outside 6th cohort; received the 2025 CES Innovation Award.",
    ],
  },
  {
    date: "Jun 2024 – Aug 2024",
    title: "Graph Neural Network Research Intern",
    company: "Universität Ulm",
    advisor: "Prof. Ansgar Scherp",
    points: [
      "Conducted research on few-shot graph classification at Universität Ulm, Germany.",
    ],
  },
  {
    date: "Dec 2022 – Jan 2024",
    title: "AI Safety Research Intern",
    company: "HASS LAB",
    advisor: "Prof. Baekgyu Kim",
    points: [
      "Developed games using Unreal Engine as gameplay demos and experiments.",
      "Built an autonomous RC car/drone that follows a specific person using computer vision.",
    ],
    projectUrl: "https://seokminlee-chris.github.io/self-introduction-website/projects_eng.html",
  },
];
