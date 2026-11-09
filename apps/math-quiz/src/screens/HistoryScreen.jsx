import { SUBJECTS, loadHistory } from "../data/registry";
import NavHeader from "../components/NavHeader";
import Icon from "../components/Icon";
import SubjectArt from "../components/SubjectArt";

function formatDate(ts) {
  const d = new Date(ts);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today - 864e5);
  const day = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  if (day.getTime() === today.getTime()) return "Today";
  if (day.getTime() === yesterday.getTime()) return "Yesterday";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function HistoryScreen({ onBack }) {
  const history = loadHistory().slice().reverse();
  const totalStars = history.reduce((sum, attempt) => sum + (attempt.stars ?? 0), 0);

  return (
    <main className="screen">
      <NavHeader title="My Stars" onBack={onBack} />
      <div className="screen-scroll">
        <div className="page-width history-page">
          <section className="history-intro">
            <div>
              <p className="eyebrow">Your story so far</p>
              <h1>Little by little,<br /><em>look how far.</em></h1>
              <p>Every round is another page in your learning story.</p>
            </div>
            <div className="history-totals">
              <Icon name="star" size={36} className="star-earned" />
              <div><strong>{totalStars}</strong><span>stars collected</span></div>
              <p>{history.length} {history.length === 1 ? "round" : "rounds"} explored</p>
            </div>
          </section>

          <div className="section-heading"><h2>Your recent rounds</h2><span>Saved on this device</span></div>
          {history.length === 0 ? (
            <div className="history-empty">
              <Icon name="book" size={48} />
              <h2>Your first page is waiting.</h2>
              <p>Choose a subject and finish a round. Your stars will be right here.</p>
              <button className="button button-primary" onClick={onBack}>Explore subjects<Icon name="arrow" size={20} /></button>
            </div>
          ) : (
            <ol className="history-list">
              {history.map((attempt, index) => {
                const subject = SUBJECTS[attempt.subjectKey];
                const stars = attempt.stars ?? 0;
                return (
                  <li
                    key={`${attempt.date}-${attempt.subjectKey}-${attempt.testKey}-${index}`}
                    className="history-row"
                    data-subject={attempt.subjectKey}
                  >
                    <div className="history-art">
                      {subject ? <SubjectArt subject={attempt.subjectKey} /> : <Icon name="book" size={28} />}
                    </div>
                    <div className="history-detail">
                      <h3>{attempt.testLabel ?? attempt.testKey}</h3>
                      <p>{attempt.subjectLabel ?? attempt.subjectKey}<span> · {formatDate(attempt.date)}</span></p>
                    </div>
                    <div className="history-score">
                      <strong>{attempt.score}<span>/100</span></strong>
                      <div className="mini-stars" aria-label={`${stars} of 3 stars`}>
                        {[1, 2, 3].map((star) => <Icon key={star} name="star" size={17} className={star <= stars ? "star-earned" : "star-empty"} />)}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </main>
  );
}
