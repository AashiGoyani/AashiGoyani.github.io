const projects = [
  {
    name: "LLM-based-Data-Analyst",
    language: "Python",
    url: "https://github.com/AashiGoyani/LLM-based-Data-Analyst",
    updated: "2026-02-28",
    description:
      "Natural language to SQL analytics platform for 800K+ NYC taxi trips using Groq, LLaMA, FastAPI, PostgreSQL, and Next.js.",
    tags: ["AI / ML", "Python", "Data"],
    images: [
      "./assets/projects/llm-data-analyst/home.png",
      "./assets/projects/llm-data-analyst/payment.png",
      "./assets/projects/llm-data-analyst/revenue.png"
    ],
    skills: ["FastAPI", "PostgreSQL", "Next.js", "Groq", "LLaMA", "Plotly"],
    featured: true
  },
  {
    name: "research-paper-rag",
    language: "Python / Serverless",
    url: "https://github.com/AashiGoyani/research-paper-rag",
    updated: "2026-02-27",
    description:
      "RAG research assistant for ArXiv papers with recommendations, Q&A, comparison, embeddings, Gemini, AWS Lambda, and CI/CD.",
    tags: ["AI / ML", "Web", "RAG"],
    images: [
      "./assets/projects/research-paper-rag/home.png",
      "./assets/projects/research-paper-rag/search.png",
      "./assets/projects/research-paper-rag/ask-question.png",
      "./assets/projects/research-paper-rag/compare.png"
    ],
    skills: ["RAG", "AWS Lambda", "API Gateway", "S3", "SageMaker", "Gemini", "CI/CD", "GitHub Actions"],
    featured: true
  },
  {
    name: "credit-default-mlops",
    language: "Python",
    url: "https://github.com/AashiGoyani/credit-default-mlops",
    updated: "2025-11-02",
    description:
      "Machine learning operations project for credit default modeling and repeatable Python workflows.",
    tags: ["AI / ML", "Python", "MLOps"],
    skills: ["MLflow", "FastAPI", "Prometheus", "Grafana", "Docker", "Scikit-learn"],
    featured: true
  },
  {
    name: "Speech-Recognition",
    language: "Jupyter Notebook",
    url: "https://github.com/AashiGoyani/Speech-Recognition",
    updated: "2025-10-25",
    description:
      "Fine-tuned Wav2Vec2 and Whisper ASR systems, built a real-time Streamlit transcription app, and evaluated 20K+ audio-text pairs.",
    tags: ["AI / ML", "Notebook"],
    images: ["./assets/projects/speech-recognition/app.png"],
    skills: ["Wav2Vec2", "Whisper", "PyTorch", "Transformers", "Streamlit", "torchaudio", "Hugging Face"],
    featured: true
  },
  {
    name: "tictactoe_visualization",
    language: "HTML",
    url: "https://github.com/AashiGoyani/tictactoe_visualization",
    updated: "2025-09-17",
    description:
      "Interactive Tic-Tac-Toe visualization for studying game decisions, agent behavior, and RL-style strategy flow.",
    tags: ["AI Agents / RL", "Web", "Game"],
    skills: ["Flask", "Q-values", "TD Learning", "Game Trees", "Python", "HTML"],
    featured: true
  },
  {
    name: "teacher-vs-human",
    language: "Jupyter Notebook",
    url: "https://github.com/AashiGoyani/teacher-vs-human",
    updated: "2026-01-06",
    description:
      "Research notebook exploring teacher-versus-human behavior, learning signals, and comparison-based analysis.",
    tags: ["AI Agents / RL", "Notebook", "Research"],
    skills: ["AI Teacher", "Optimal Strategy", "Matplotlib", "Simulation", "Jupyter"]
  },
  {
    name: "TextUtils",
    language: "Python",
    url: "https://github.com/AashiGoyani/TextUtils",
    updated: "2022-04-19",
    description: "Django text utility app for analyzing and transforming text.",
    tags: ["Python", "Web", "Django"]
  },
  {
    name: "scai_website-main",
    language: "JavaScript",
    url: "https://github.com/AashiGoyani/scai_website-main",
    updated: "2024-07-01",
    description: "JavaScript website project with front-end implementation work.",
    tags: ["Web", "JavaScript"]
  },
  {
    name: "Matrix-Operation-Project-",
    language: "Jupyter Notebook",
    url: "https://github.com/AashiGoyani/Matrix-Operation-Project-",
    updated: "2024-05-07",
    description: "Notebook project for matrix operations and computational practice.",
    tags: ["Notebook", "Python"]
  },
  {
    name: "Sorting",
    language: "Jupyter Notebook",
    url: "https://github.com/AashiGoyani/Sorting",
    updated: "2024-01-31",
    description:
      "Implementation of insertion sort, selection sort, and bubble sort using Python.",
    tags: ["Notebook", "Python", "Algorithms"],
    skills: ["Python", "Sorting", "Insertion Sort", "Selection Sort", "Bubble Sort"]
  },
  {
    name: "tictactoe_jupyter",
    language: "Jupyter Notebook",
    url: "https://github.com/AashiGoyani/tictactoe_jupyter",
    updated: "2025-09-09",
    description: "Notebook implementation of Tic-Tac-Toe logic for agent, strategy, and RL-style experiments.",
    tags: ["AI Agents / RL", "Notebook", "Game"],
    skills: ["Q-learning", "RL", "Teacher Agent", "Python", "Jupyter"]
  },
  {
    name: "Hands-on-15",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-on-15",
    updated: "2024-04-28",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-On-14",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-On-14",
    updated: "2024-04-28",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-On-12",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-On-12",
    updated: "2024-04-05",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-on-11",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-on-11",
    updated: "2024-04-01",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-On-10",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-On-10",
    updated: "2024-03-23",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-On-8",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-On-8",
    updated: "2024-03-11",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-On-6",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-On-6",
    updated: "2024-02-26",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "Hands-On-5",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-On-5",
    updated: "2024-02-17",
    description: "DSA practice repository with Python implementations and algorithm exercises.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DSA", "Algorithms"]
  },
  {
    name: "HANDS-ON-4",
    language: "Jupyter Notebook",
    url: "https://github.com/AashiGoyani/HANDS-ON-4",
    updated: "2024-02-14",
    description: "DSA notebook repository with algorithm and data structure practice.",
    tags: ["Notebook", "DSA"],
    skills: ["Python", "Jupyter", "DSA"]
  },
  {
    name: "Hands-on-3-DAA-",
    language: "Python",
    url: "https://github.com/AashiGoyani/Hands-on-3-DAA-",
    updated: "2024-02-06",
    description: "DSA repository focused on design and analysis of algorithms.",
    tags: ["Python", "DSA"],
    skills: ["Python", "DAA", "Algorithms"]
  },
  {
    name: "AashiGoyani",
    language: "Markdown",
    url: "https://github.com/AashiGoyani/AashiGoyani",
    updated: "2026-06-06",
    description: "GitHub profile repository for personal profile content.",
    tags: ["Profile"]
  }
];

const colors = {
  Python: "#3572a5",
  "Python / Serverless": "#3572a5",
  "Jupyter Notebook": "#da5b0b",
  HTML: "#e34c26",
  TypeScript: "#3178c6",
  JavaScript: "#b9970e",
  Markdown: "#6f6a60"
};

const grid = document.querySelector("#projectGrid");
const filters = document.querySelectorAll(".filter");
let activeRecommendations = new Set();

document.body.insertAdjacentHTML(
  "beforeend",
  `
    <div class="lightbox" id="projectLightbox" aria-hidden="true">
      <div class="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="lightboxTitle">
        <div class="lightbox-header">
          <h3 id="lightboxTitle">Project screenshots</h3>
          <button class="lightbox-close" type="button" aria-label="Close screenshot viewer">Close</button>
        </div>
        <div class="lightbox-track" id="lightboxTrack"></div>
      </div>
    </div>
  `
);

const lightbox = document.querySelector("#projectLightbox");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxTrack = document.querySelector("#lightboxTrack");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll("video").forEach((video) => {
  video.muted = true;
  video.defaultMuted = true;
});

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => {
    if (filter === "all") return true;
    return project.tags.includes(filter) || project.language === filter;
  });

  grid.innerHTML = visible
    .map((project) => {
      const languageColor = colors[project.language] || "#2d6255";
      const imageList = project.images || (project.image ? [project.image] : []);
      const images = imageList
        .map(
          (image, index) =>
            `<button class="project-image-button" type="button" data-project="${project.name}" data-index="${index}" aria-label="Open ${project.name} screenshot ${index + 1}">
              <img class="project-image" src="${image}" alt="${project.name} screenshot ${index + 1}" loading="lazy" />
            </button>`
        )
        .join("");
      const skills = (project.skills || project.tags || [])
        .map((skill) => `<span>${skill}</span>`)
        .join("");

      return `
        <article class="project-card ${activeRecommendations.has(project.name) ? "is-recommended" : ""}">
          ${
            imageList.length
              ? `<div class="project-media" aria-label="${project.name} screenshots">${images}</div>`
              : ""
          }
          <div class="project-meta">
            <span class="language">
              <span class="language-dot" style="background:${languageColor}"></span>
              ${project.language}
            </span>
            <span>${formatDate(project.updated)}</span>
          </div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="project-skills" aria-label="Skills used">${skills}</div>
          <a href="${project.url}" target="_blank" rel="noreferrer">Open repository</a>
        </article>
      `;
    })
    .join("");
}

function openLightbox(projectName, startIndex = 0) {
  const project = projects.find((item) => item.name === projectName);
  const images = project?.images || (project?.image ? [project.image] : []);
  if (!project || !images.length) return;

  lightboxTitle.textContent = project.name;
  lightboxTrack.innerHTML = images
    .map(
      (image, index) => `
        <figure class="lightbox-slide">
          <img src="${image}" alt="${project.name} screenshot ${index + 1}" />
          <figcaption>${index + 1} / ${images.length}</figcaption>
        </figure>
      `
    )
    .join("");

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-active");

  requestAnimationFrame(() => {
    const target = lightboxTrack.children[startIndex];
    if (target) target.scrollIntoView({ behavior: "auto", inline: "start", block: "nearest" });
    lightboxClose.focus();
  });
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-active");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeRecommendations = new Set();
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".project-image-button");
  if (!button) return;
  openLightbox(button.dataset.project, Number(button.dataset.index || 0));
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

renderProjects("AI / ML");
