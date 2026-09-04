import { useRef, useState } from 'react';
import keyboardsData from './keyboards/keyboardsData';

function Keyboard({ onKeyPress }) {
  const [currentIndex, setCurrentIndex] = useState(4);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, keyboardsData.length - 1)
    );
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];

    const diffX = touchStartX.current - touch.clientX;
    const diffY = touchStartY.current - touch.clientY;

    // On ignore les mouvements principalement verticaux
    if (Math.abs(diffY) > Math.abs(diffX)) {
      return;
    }

    // Seuil minimum pour déclencher le swipe
    if (Math.abs(diffX) < 35) {
      return;
    }

    if (diffX > 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  return (
    <section className="keyboard-section">

      {/* ───────── INDICATORS ───────── */}
      <div className="keyboard-indicators">
        {keyboardsData.map((keyboard, index) => (
          <span
            key={keyboard.id}
            className={`keyboard-indicator ${
              index === currentIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>

      {/* ───────── KEYBOARD ───────── */}
      <div
        className="keyboard-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="keyboard-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {keyboardsData.map((keyboard) => (
            <div
              className="keyboard-page"
              key={keyboard.id}
            >
              <KeyboardLayout
                keyboard={keyboard}
                onKeyPress={onKeyPress}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ───────── ZEBRA TOOLBAR ───────── */}
      <div className="keyboard-toolbar">

        <button
          type="button"
          className="toolbar-button"
          aria-label="Menu"
        >
          <span className="menu-lines">
            <i />
            <i />
            <i />
          </span>
        </button>

        <button
          type="button"
          className="toolbar-button keyboard-button"
          aria-label="Keyboard"
        >
          <span className="keyboard-icon">
            ▦
          </span>
        </button>

        <button
          type="button"
          className="toolbar-button"
          aria-label="Options"
        >
          <span className="menu-lines">
            <i />
            <i />
            <i />
          </span>
        </button>

      </div>

      {/* ───────── SWIPE HINT ───────── */}
      <div className="keyboard-footer">
        <span>← SWIPE →</span>

        <div className="keyboard-names">
          {keyboardsData.map((keyboard, index) => (
            <span
              key={keyboard.id}
              className={
                index === currentIndex ? 'active' : ''
              }
            >
              {keyboard.id}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}


/*
 * Rendu d'un clavier
 */
function KeyboardLayout({ keyboard, onKeyPress }) {
  return (
    <div className={`keyboard keyboard-${keyboard.id.toLowerCase()}`}>

      {keyboard.rows.map((row, rowIndex) => (
        <div
          className={`keyboard-row keyboard-row-${row.length}`}
          key={rowIndex}
        >
          {row.map((key) => {
            const type = getKeyType(key);

            return (
              <button
                key={key}
                type="button"
                className={`key key-${type}`}
                onClick={() => onKeyPress(key)}
              >
                {renderKey(key)}
              </button>
            );
          })}
        </div>
      ))}

    </div>
  );
}


/*
 * Détermine le type visuel d'une touche
 */
function getKeyType(key) {
  if (key === 'Exit') {
    return 'exit';
  }

  if (key === 'P1') {
    return 'p1';
  }

  if (key === 'P2') {
    return 'p2';
  }

  if (
    key === '↑' ||
    key === '↓' ||
    key === '←' ||
    key === '→' ||
    key === '◀' ||
    key === '▶'
  ) {
    return 'navigation';
  }

  if (key === 'Enter') {
    return 'enter';
  }

  if (key === 'Space') {
    return 'space';
  }

  if (
    key.startsWith('F') &&
    key.length <= 3
  ) {
    return 'function';
  }

  if (key === 'Fin PAL') {
    return 'function-wide';
  }

  return 'normal';
}


/*
 * Permet d'afficher certains symboles
 */
function renderKey(key) {
  if (key === '←') {
    return '⌫';
  }

  if (key === 'Enter') {
    return '↵';
  }

  if (key === 'Space') {
    return '▔';
  }

  if (key === '→') {
    return '⇥';
  }

  return key;
}

export default Keyboard;