// ─────────────────────────────────────────────────────────────────────────
//  CONTENT — single source of truth for the whole site.
//  Everything below is placeholder copy seeded from Ishan's resumes.
//  Swap any string / array here and the UI updates. No JSX edits needed.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ishan Joshi',
  firstName: 'Ishan',
  role: 'AI & Systems Engineer',
  // The big hero headline. Keep it short + punchy.
  headline: ['I build', 'video-intelligence', 'systems.'],
  blurb:
    'Computer-vision research intern at Thelios AI (NBA partnership). I work on self-supervised video models, multi-object tracking, and production-ready ML — from raw footage to insight.',
  location: 'Pune, Maharashtra · India',
  email: 'ishanyateenjoshi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ishan-joshi-982395260',
  github: 'https://github.com/coder1408',
  availability: 'Open to research & engineering roles · 2026',
  avatarInitials: 'IJ',
  resumeUrl: '/resume.pdf', // drop a new PDF in /public to swap
}

// Shown in the "Beyond the code" bento card.
export const certifications = [
  'CS50x · Harvard',
  'Google Cybersecurity Certificate',
  'Claude Code 101',
  'Automate Cybersecurity with Python',
  'Foundations of Cybersecurity',
]

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Marathi', level: 'Native' },
  { name: 'German', level: 'Elementary' },
]

// Grouped skill pills.
export const skills = [
  { group: 'Core', items: ['Python', 'C/C++', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
  { group: 'Vision & SSL', items: ['MAE', 'V-JEPA', 'ViT / ViViT', 'YOLOv11', 'OpenCV', 'Pose Estimation'] },
  { group: 'Systems', items: ['CUDA / AMP', 'Distributed Training', 'Docker', 'Linux', 'Git'] },
]

// Bento project cards. `size` drives the grid span:
//   'feature' = big 2x2 highlight, 'wide' = 2 cols, 'standard' = 1 cell.
// `link` = public repo (renders a clickable card). Omit for proprietary /
//   company work where no code is available — that card stays non-clickable.
export const projects = [
  {
    title: 'Dual-Path V-JEPA + MAE',
    tag: 'Self-Supervised Video',
    size: 'feature',
    accent: 'lilac',
    icon: 'Boxes',
    blurb:
      'A two-branch self-supervised learner: a reconstruction branch predicting masked spatiotemporal patches in pixel-space, and a predictive branch regressing target embeddings in latent space — pretrained on unlabeled NBA broadcast footage.',
    stack: ['PyTorch', 'MAE-ViT', 'Multi-GPU'],
  },
  {
    title: 'Real-Time Player Tracking',
    tag: 'Multi-Object Tracking',
    size: 'wide',
    accent: 'sky',
    icon: 'Crosshair',
    blurb:
      'Real-time detection + tracking for NBA broadcast footage: YOLOv11 variants, SAM2 segmentation, and pose-keypoint extraction for players and court elements — profiled end-to-end to clear GPU latency bottlenecks.',
    stack: ['YOLOv11', 'SAM2', 'Pose Estimation'],
  },
  {
    title: 'Tracking Eval Framework',
    tag: 'Benchmarking',
    size: 'standard',
    accent: 'butter',
    icon: 'GaugeCircle',
    blurb:
      'A harness measuring identity consistency and ID-switch rates over long sequences, profiling speed–accuracy tradeoffs across tracker variants.',
    stack: ['PyTorch', 'Profiling'],
  },
  {
    title: 'RAG Research Assistant',
    tag: 'Agentic AI',
    size: 'standard',
    accent: 'lilac',
    icon: 'Bot',
    blurb:
      'A retrieval-augmented assistant that lets the team query and chat over research papers — I built the frontend and retrieval flow.',
    stack: ['RAG', 'LLMs', 'React'],
  },
  {
    title: 'Network Intrusion Detection',
    tag: 'Anomaly Detection',
    size: 'standard',
    accent: 'terracotta',
    icon: 'ShieldCheck',
    link: 'https://github.com/coder1408/Network-Intrusion-Detection-System',
    blurb: 'Random Forest + GBM ensemble with automated imbalance handling. 94.4% on KDD-99, 88.4% on NSL-KDD.',
    stack: ['TensorFlow', 'Scikit-learn'],
  },
  {
    title: 'Brain Tumor Detection',
    tag: 'Medical Imaging',
    size: 'standard',
    accent: 'mint',
    icon: 'Brain',
    link: 'https://github.com/coder1408/BrainTumorDetection',
    blurb: 'CNN pipeline classifying tumors from MRI at 89.4% accuracy, served live via a Flask inference app.',
    stack: ['PyTorch', 'CNNs', 'Flask'],
  },
  {
    title: 'Personal Finance Planner',
    tag: 'Full-Stack',
    size: 'wide',
    accent: 'sky',
    icon: 'Wallet',
    link: 'https://github.com/coder1408/Finance-Planner',
    blurb:
      'A MERN + Next.js budgeting app with financial forecasting, data visualization, and JWT-secured auth over MongoDB.',
    stack: ['Next.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Bird Migration Analysis',
    tag: 'Data Science',
    size: 'wide',
    accent: 'blush',
    icon: 'Bird',
    blurb:
      'Modeled climate & geography as drivers of route shifts across large-scale BNHS migration records — feeding biodiversity-conservation research.',
    stack: ['Python', 'Statistical Modeling', 'Plotly'],
  },
]

// Experience / milestone timeline (most recent first).
export const timeline = [
  {
    period: 'Jan 2026 — Present',
    role: 'Senior Computer Vision Intern',
    org: 'Thelios AI',
    accent: 'lilac',
    icon: 'Sparkles',
    points: [
      'Building a scalable video-intelligence platform on self-supervised transformers.',
      'Reusable multi-level representations for fast downstream sports analytics.',
    ],
  },
  {
    period: 'Jul 2025 — Jan 2026',
    role: 'Computer Vision Intern',
    org: 'Thelios AI · NBA Partnership',
    accent: 'mint',
    icon: 'Video',
    points: [
      'Built multi-object tracking & video-analytics pipelines for basketball footage.',
      'Benchmarked YOLOv11 variants; integrated pose-keypoint extraction.',
      'Shipped a RAG-based research-paper assistant for the team.',
    ],
  },
  {
    period: 'Jul 2025',
    role: 'SOC Intern',
    org: 'Microscan Communications',
    accent: 'terracotta',
    icon: 'ShieldAlert',
    points: [
      'Monitored SIEM alerts, investigated suspicious activity, supported incident response.',
      'Assisted with VAPT — scans, remediation, and test-environment prep.',
    ],
  },
  {
    period: 'Dec 2022 — Mar 2024',
    role: 'Technical Team Member',
    org: 'Cosmos · MIT-WPU',
    accent: 'sky',
    icon: 'Telescope',
    points: [
      'Astronomy research & observation.',
      'Built a Python pipeline to automate the observatory.',
    ],
  },
  {
    period: 'Sep 2022 — Jun 2026',
    role: 'B.Tech, Computer Science',
    org: 'MIT World Peace University',
    accent: 'butter',
    icon: 'GraduationCap',
    points: ['CGPA 7.84 · Sem 6 GPA 8.48.', 'AI/ML, DSA, Networks, Statistics.'],
  },
]

export const socials = [
  { label: 'Email', handle: 'ishanyateenjoshi@gmail.com', href: 'mailto:ishanyateenjoshi@gmail.com', icon: 'Mail', accent: 'butter' },
  { label: 'LinkedIn', handle: '/in/ishan-joshi', href: profile.linkedin, icon: 'Linkedin', accent: 'sky' },
  { label: 'GitHub', handle: '@coder1408', href: profile.github, icon: 'Github', accent: 'mint' },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Connect', href: '#connect' },
]
