import { SUBJECTS, loadHistory } from "../data/registry";
import Icon from "../components/Icon";
import SubjectArt from "../components/SubjectArt";
import { useSound } from "../hooks/useSound";

const DESCRIPTIONS = {
  math: "Numbers, patterns & little puzzles",
  ela: "Good stories. Great ideas.",
  science: "Ask why. Find out how.",
  geography: "A whole world to explore",
  solarSystem: "Look up. Think bigger.",
  dinosaurs: "Clues from a long time ago",
  funFacts: "Things that make you say wow",
  advanced: "A little extra brain stretch",
};

function WorkbookArt() {
  return (
    <svg className="workbook-art" viewBox="0 0 300 210" fill="none" aria-hidden="true">
      <ellipse cx="149" cy="183" rx="109" ry="12" fill="#e1e3d3" />
      <g transform="rotate(-9 140 105)">
        <rect x="60" y="24" width="153" height="162" rx="9" fill="#d9e5d7" stroke="#315847" strokeWidth="2" />
        <rect x="72" y="18" width="145" height="160" rx="7" fill="#fffdf5" stroke="#315847" strokeWidth="2" />
        <path d="M94 18v160" stroke="#e5c4af" strokeWidth="1.5" />
        <path d="M107 53h85m-85 20h70m-70 20h85m-85 20h50" stroke="#d7ddce" strokeWidth="2" />
        <path d="m122 137 7 7 15-17" stroke="#315847" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="134" cy="137" r="20" stroke="#a8bd98" strokeWidth="1.5" strokeDasharray="3 4" />
        {[40, 67, 94, 121, 148].map((y) => (
          <path key={y} d={`M65 ${y}h15`} stroke="#315847" strokeWidth="3" strokeLinecap="round" />
        ))}
      </g>
      <g transform="rotate(22 229 108)">
        <path d="M223 39h13v111l-6.5 18-6.5-18Z" fill="#e9b765" stroke="#654c32" strokeWidth="2" strokeLinejoin="round" />
        <path d="M223 150h13l-6.5 18Z" fill="#f3dcc0" stroke="#654c32" strokeWidth="2" />
        <path d="m227 161 2.5 7 2.5-7" fill="#315847" />
        <path d="M223 46h13v12h-13Z" fill="#e6c6b6" />
        <path d="M229.5 59v87" stroke="#fff4d6" strokeWidth="2" />
      </g>
      <path d="m41 44 3 8 9 2-8 4-1 9-5-7-9-1 7-6Z" fill="#e9b765" />
      <path d="M258 39v12m-6-6h12M32 131v8m-4-4h8" stroke="#789276" strokeWidth="2" strokeLinecap="round" />
      <path d="M242 174c12-13 18-26 16-38-11 6-17 18-16 38Z" fill="#b9cbb0" stroke="#315847" strokeWidth="1.5" />
    </svg>
  );
}

export default function HomeScreen({ onSelect, onHistory }) {
  const { playTap } = useSound();
  const totalStars = loadHistory().reduce((sum, attempt) => sum + (attempt.stars ?? 0), 0);

  return (
    <main className="screen home-screen">
      <header className="home-header">
        <div className="wordmark">
          <span className="wordmark-icon"><Icon name="book" size={23} /></span>
          EduApp<span className="wordmark-dot">.</span>
        </div>
        <div className="home-header-actions">
          <span className="grade-label">The grade 3 edition</span>
          <button className="button button-paper" onClick={() => { playTap(); onHistory(); }}>
            <Icon name="star" size={20} />
            <span>My Stars{totalStars > 0 ? ` · ${totalStars}` : ""}</span>
          </button>
        </div>
      </header>

      <div className="screen-scroll home-scroll">
        <div className="page-width">
          <section className="home-hero" aria-labelledby="home-heading">
            <div>
              <p className="eyebrow">A workbook for curious minds</p>
              <h1 id="home-heading">Small steps.<br /><em>Big discoveries.</em></h1>
              <p className="hero-description">
                A little math, a good story, or something wonderfully unexpected.
                What will you explore today?
              </p>
            </div>
            <WorkbookArt />
          </section>

          <section aria-labelledby="subjects-heading">
            <div className="section-heading">
              <h2 id="subjects-heading">Pick a subject</h2>
              <span>Eight ways to grow</span>
            </div>
            <div className="subject-grid">
              {Object.entries(SUBJECTS).map(([key, subject], index) => (
                <button
                  key={key}
                  data-subject={key}
                  className="subject-card"
                  onClick={() => { playTap(); onSelect(key); }}
                >
                  <div className="subject-card-top">
                    <SubjectArt subject={key} />
                    <span className="card-index">0{index + 1}</span>
                  </div>
                  <h3>{subject.label.split(" · ")[0]}</h3>
                  <p>{DESCRIPTIONS[key]}</p>
                  <div className="subject-card-bottom">
                    <span>{subject.tests.length} activities</span>
                    <Icon name="arrow" size={20} />
                  </div>
                </button>
              ))}
            </div>
          </section>
          <footer className="home-footer">
            <span>Made for little moments of discovery.</span>
            <span>Grade 3 · v{__APP_VERSION__} · {__RELEASE_DATE__}</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
