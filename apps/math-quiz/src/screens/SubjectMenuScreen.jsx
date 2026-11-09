import {
  SUBJECTS,
  loadHighScore,
  starsFromScore,
  getWeakSkillQuestions,
} from "../data/registry";
import NavHeader from "../components/NavHeader";
import Icon from "../components/Icon";
import SubjectArt from "../components/SubjectArt";
import { useSound } from "../hooks/useSound";

export default function SubjectMenuScreen({ subject, onBack, onSelect }) {
  const { playTap } = useSound();
  const subj = SUBJECTS[subject];
  if (!subj) return null;
  const weakQuestionCount =
    subject === "math" ? getWeakSkillQuestions(subject).length : 0;

  return (
    <main className="screen" data-subject={subject}>
      <NavHeader title={subj.label} onBack={onBack} />
      <div className="screen-scroll">
        <div className="page-width subject-page">
          <section className="subject-intro">
            <div>
              <p className="eyebrow">One small step at a time</p>
              <h1>Let&apos;s explore<br /><em>{subj.label.split(" · ")[0].toLowerCase()}.</em></h1>
              <p>Pick an activity. Take your time. See what you can discover.</p>
            </div>
            <div className="subject-intro-art"><SubjectArt subject={subject} /></div>
          </section>

          <div className="section-heading">
            <h2>Your activities</h2>
            <span>Most rounds · 10 questions</span>
          </div>
          <div className="activity-grid">
            {subj.tests.map((test, index) => {
              const best = loadHighScore(subject, test.key);
              const isWeak = test.mode === "weak";
              const locked = isWeak && weakQuestionCount === 0;
              const isChallenge = test.variant === "challenge" || test.variant === "advanced";
              const stars = best ? starsFromScore(best.score) : 0;
              return (
                <button
                  key={test.key}
                  className="activity-card"
                  disabled={locked}
                  onClick={() => { playTap(); onSelect(index); }}
                >
                  <div className="activity-card-top">
                    <span className="activity-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="activity-tag">
                      {locked ? <Icon name="lock" size={15} /> : test.mode === "timed" ? <Icon name="timer" size={16} /> : isChallenge ? <Icon name="spark" size={16} /> : null}
                      {isWeak ? "Skill practice" : test.mode === "timed" ? "60 seconds" : isChallenge ? "A little stretch" : "10 questions"}
                    </span>
                  </div>
                  <h3>{test.label}</h3>
                  <div className="activity-card-bottom">
                    <span>
                      {isWeak
                        ? weakQuestionCount > 0
                          ? "A little extra practice, just where you need it"
                          : "Unlocks when a skill needs a little extra practice"
                        : best
                          ? `Personal best · ${best.score}/100`
                          : "Ready when you are"}
                    </span>
                    {best && !isWeak ? (
                      <span className="mini-stars" aria-label={`${stars} of 3 stars`}>
                        {[1, 2, 3].map((star) => <Icon key={star} name="star" size={17} className={star <= stars ? "star-earned" : "star-empty"} />)}
                      </span>
                    ) : !locked ? <Icon name="arrow" size={20} /> : null}
                  </div>
                </button>
              );
            })}
          </div>
          <p className="page-note">Progress stays on this device. Every try is a step forward.</p>
        </div>
      </div>
    </main>
  );
}
