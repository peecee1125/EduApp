import Icon from "./Icon";
import { useSound } from "../hooks/useSound";

export default function NavHeader({ title, onBack, backLabel = "Subjects" }) {
  const { playTap } = useSound();
  return (
    <header className="nav-header">
      <div className="nav-header-inner">
        {onBack && (
          <button
            className="button button-quiet nav-back"
            onClick={() => {
              playTap();
              onBack();
            }}
          >
            <Icon name="back" size={20} />
            <span>{backLabel}</span>
          </button>
        )}
        <p className="nav-title">{title}</p>
        <span className="nav-brand" aria-hidden="true">EDUAPP</span>
      </div>
    </header>
  );
}
