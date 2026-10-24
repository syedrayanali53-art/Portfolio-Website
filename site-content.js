// EDIT THIS FILE: all personal information, project content, images, and links.
// Empty links stay visibly unavailable instead of pointing at a fake profile.
window.PORTFOLIO = {
  name: 'Syed Rayan Ali',
  title: 'Business Analytics & Information Systems',
  intro: 'Making sense of data. Making things that matter.',
  heroNote: 'A student at George Mason University, connecting business questions with data, systems, and thoughtful design.',
  school: 'George Mason University',
  education: [
    { level: 'MASTER OF SCIENCE', program: 'Business Analytics', graduation: 'December 2028' },
    { level: 'BACHELOR OF SCIENCE', program: 'Management Information Systems', graduation: 'December 2027' }
  ],
  bio: 'I’m an international student from Pakistan studying Management Information Systems at George Mason University and pursuing an accelerated master’s in Business Analytics. I enjoy finding the story in data, building something useful from it, and making the result look as good as it works.',
  personal: 'Away from the screen? Probably watching soccer. I bring the same curiosity to understanding a game as I do to understanding a dataset.',
  interests: ['Business analytics', 'Information systems', 'Process improvement'],
  skillsNote: '',
  skills: [
    { number: '01', title: 'Query & analyze', subtitle: 'FIND THE SIGNAL', items: ['SQL', 'Python', 'Excel'] },
    { number: '02', title: 'Build & improve', subtitle: 'TURN INSIGHT INTO ACTION', items: ['HTML5', 'CSS3', 'JSON', 'Supabase'] },
    { number: '03', title: 'Visualize & explain', subtitle: 'MAKE IT MAKE SENSE', items: ['Tableau', 'Power BI'] }
  ],
  projects: [
    {
      id: 'dispatch', number: '01', suit: '♠', category: 'SYSTEMS / AUTOMATION', name: 'Dispatch Board',
      brief: 'Less scheduling friction. More time to move. A smarter workspace for dispatchers.',
      problem: 'Dispatchers need to assign jobs, balance workloads, and catch scheduling conflicts without losing time to manual coordination.',
      built: 'An automated scheduling board with a drag-and-drop interface, conflict detection, and workload visualization.',
      tools: ['HTML5', 'CSS3', 'JSON', 'Supabase'],
      result: '40% less time spent scheduling.',
      resultNote: 'Project outcome supplied by Syed. Add the measurement method and supporting context here.',
      metric: '40%', metricLabel: 'LESS SCHEDULING TIME',
      link: '', linkLabel: 'View live project',
      screenshots: [
        { src: 'assets/projects/dispatch-board.svg', alt: 'Illustrative placeholder for the Dispatch Board scheduling interface', caption: 'Scheduling workspace · placeholder' },
        { src: 'assets/projects/dispatch-workload.svg', alt: 'Illustrative placeholder for Dispatch Board workload visualization', caption: 'Workload overview · placeholder' }
      ]
    },
    {
      id: 'tableau', number: '02', suit: '♦', category: 'DATA / VISUALIZATION', name: 'Tableau Dashboard',
      brief: 'From rows of data to a clearer picture. An interactive dashboard built in Tableau.',
      problem: 'Project story to be added. Describe the dataset, the audience, and the question this dashboard helps answer.',
      built: 'Project details to be added. Explain your dashboard views, filters, and the analysis behind them.',
      tools: ['Tableau'],
      result: 'Insights and outcomes to be added.', resultNote: 'Replace this with a specific finding or outcome from your project.',
      metric: '02', metricLabel: 'VISUAL ANALYTICS',
      link: '', linkLabel: 'View on Tableau Public',
      screenshots: [
        { src: 'assets/projects/tableau-dashboard.svg', alt: 'Illustrative placeholder for the Tableau Dashboard overview', caption: 'Dashboard overview · placeholder' },
        { src: 'assets/projects/tableau-detail.svg', alt: 'Illustrative placeholder for a detailed Tableau analysis', caption: 'Detailed analysis · placeholder' }
      ]
    },
    {
      id: 'intern', number: '03', suit: '♣', category: 'OPERATIONS / TRACKING', name: 'Intern Dashboard',
      brief: 'A little more structure. A lot more clarity. Internship tracking in one place.',
      problem: 'Project story to be added. Describe who used the internship tracker and what was difficult to manage before.',
      built: 'An internship tracker. Add the workflows, features, and your contribution here.',
      tools: ['Tools to be added'],
      result: 'Results to be added.', resultNote: 'Add a verified outcome, feedback, or lesson learned.',
      metric: '03', metricLabel: 'ORGANIZED OPERATIONS',
      link: '', linkLabel: 'View live project',
      screenshots: [
        { src: 'assets/projects/intern-dashboard.svg', alt: 'Illustrative placeholder for the Intern Dashboard tracker', caption: 'Internship tracker · placeholder' },
        { src: 'assets/projects/intern-detail.svg', alt: 'Illustrative placeholder for internship progress details', caption: 'Progress view · placeholder' }
      ]
    }
  ],
  experience: [
    {
      role: 'Microsoft AI Ambassador', organization: 'George Mason University', dates: 'Oct 2026 – Present',
      bullets: [
        'Develop, test, and document AI workflows using Microsoft tools, with responsible AI practices and human oversight.',
        'Work with ITS and campus departments to analyze workflows, assess costs and benefits, and present practical AI solutions.'
      ]
    },
    {
      role: 'Data Science & AI Intern', organization: 'JK Moving Services', dates: 'May 2026 – Aug 2026',
      bullets: [
        'Built predictive models and Python automation that improved data processing speed by 20–30% and reduced manual logging errors.',
        'Analyzed 1,000+ monthly shipments with Pandas, NumPy, and Matplotlib, and queried operational datasets of 10,000+ records using SQL.'
      ]
    },
    {
      role: 'Business Analyst Intern', organization: 'Sameday Pack', dates: 'Sep 2025 – Dec 2025',
      bullets: [
        'Cleaned 500+ product listings and built Tableau dashboards to track product performance and sales trends.',
        'Automated recurring reports with Excel and Python, reducing manual workload by 30%.'
      ]
    },
    {
      role: 'Outreach Coordinator', organization: 'MISOMA', dates: 'Jan 2026 – Present',
      bullets: [
        'Coordinated guest speakers, panels, and tech recruitment events with regional IT alumni and corporate representatives.',
        'Led a student volunteer marketing committee whose outreach increased active meeting attendance by 20%.'
      ]
    }
  ],
  resume: { file: 'assets/resume.pdf', label: 'View résumé', note: 'Experience, education & skills · PDF' },
  contactIntro: 'Have a good problem to solve? Let’s talk.',
  links: {
    email: 'syedrayanali53@gmail.com',
    linkedin: 'https://www.linkedin.com/in/syedrayanali',
    github: 'https://github.com/syedrayanali53-art/PProjects'
  },
  footer: 'Built with curiosity. Designed with intention.'
};
