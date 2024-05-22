const socialsEl = document.querySelector("#socials");
const projectsEl = document.querySelector("#projects");
const writingEl = document.querySelector("#wrtiting");

const socialHandles = [
  {
    Link: "https://x.com/GauravChawla143",
    platform: "twitter",
  },
  {
    Link: "https://github.com/GAURAV0440",
    platform: "github",
  },
  {
    Link: "https://www.instagram.com/_.gauravchawla._01/",
    platform: "Instagram",
  },
  {
    Link: "https://www.linkedin.com/in/gauravchawla001/",
    platform: "linkedin",
  },  
];


const projectsArray = [
  {
    title: "Tab Wizard",
    desc: " This Chrome extension suggests tab names for quick recognition and automatically renames tabs depending on content analysis. To improve speed and browsing pleasure, it also permits manual tab renaming for customized tab management.",
    githubLink: " https://github.com/GAURAV0440/Wizard",
    demoLink: " ",
  },
  {
    title: "VIrtual Assistant",
    desc: "This Python project serves as a virtual assistant, aiming to provide voice-controlled assistance for various tasks. These tasks include answering questions, providing weather updates, managing schedules, controlling smart devices, and much more.",
    githubLink: " ",
    demoLink: " ",
  },
  {
    title: "Diwali Sales Analysis Project",
    desc: " I utilized Pandas for data processing, NumPy for calculations, and Matplotlib/Seaborn for visualization. Conducted systematic EDA to uncover trends, enabling informed decision-making.",
    githubLink: " https://github.com/GAURAV0440/Diwali-Sales-Analysis ",
    demoLink: " ",
  },
];



socialHandles.forEach((social, index) => {
  const a = document.createElement("a");
  a.href = social.Link;
  a.textContent = social.platform;
  a.target = "_blank";

  socialsEl.appendChild(a);
});

projectsArray.forEach((project, index) => {
  const div = document.createElement("div");
  div.style.display = "flex"
  div.style.flexDirection = "column"
  div.style.gap = "10px"
  div.style.marginLeft = "15px"
  div.style.color = "rgb(229, 231, 235)"
  const h3 = document.createElement("h3");
  h3.className = "project-title";
  h3.textContent = `- ${project.title}`;
  h3.style.marginLeft = "-15px"
  const p = document.createElement("p");
  p.textContent = project.desc;
  const links = document.createElement("div")
  links.className = "links"
  const githubLink = document.createElement("a");
  githubLink.target = "_blank";
  githubLink.href = project.githubLink;
  githubLink.textContent = "github";
  githubLink.style.display = project.githubLink ? "block" : "none"
  const demoLink = document.createElement("a");
  demoLink.target = "_blank";
  demoLink.href = project.demoLink;
  demoLink.textContent = "demo";

  links.append(githubLink, demoLink);

  div.append(h3, p, links);

  projectsEl.appendChild(div);

});






