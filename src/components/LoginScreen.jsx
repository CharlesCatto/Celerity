import { useState } from 'react';
import Keyboard from './Keyboard';

function LoginScreen({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [activeField, setActiveField] = useState('userId');

  const handleKeyPress = (key) => {
    // ─────────────────────────────
    // EXIT
    // ─────────────────────────────
    if (key === 'Exit') {
      setUserId('');
      setPassword('');
      return;
    }

    // ─────────────────────────────
    // BACKSPACE
    // ─────────────────────────────
    if (key === '←') {
      if (activeField === 'userId') {
        setUserId((value) => value.slice(0, -1));
      } else {
        setPassword((value) => value.slice(0, -1));
      }

      return;
    }

    // ─────────────────────────────
    // ENTER
    // ─────────────────────────────
    if (key === 'Enter') {
      handleLogin();
      return;
    }

    // ─────────────────────────────
    // SPACE
    // ─────────────────────────────
    if (key === 'Space') {
      return;
    }

    // ─────────────────────────────
    // USER ID
    // ─────────────────────────────
    if (activeField === 'userId') {
      if (userId.length < 4) {
        setUserId((value) =>
          (value + key).slice(0, 4).toUpperCase()
        );
      }

      return;
    }

    // ─────────────────────────────
    // PASSWORD
    // ─────────────────────────────
    if (activeField === 'password') {
      if (password.length < 10) {
        setPassword((value) =>
          value + key
        );
      }
    }
  };

  const handleLogin = () => {
    const login = userId.toUpperCase();

    if (login.length >= 3 && login.length <= 4) {
      onLogin(login);
      return;
    }

    alert('Login doit faire 3 ou 4 caractères MAJUSCULES');
  };

  return (
    <div className="terminal">

      {/* ═══════════════════════════════
          WMS SCREEN
      ═══════════════════════════════ */}
      <main className="wms-screen">

        <div className="wms-header">
          Warehouse Management
        </div>

        <div className="wms-separator">
          -------- ------------
        </div>

        <div className="login-form">

          {/* USER ID */}
          <button
            type="button"
            className={`terminal-field ${
              activeField === 'userId'
                ? 'active'
                : ''
            }`}
            onClick={() => setActiveField('userId')}
          >
            <span className="field-label">
              User ID:
            </span>

            <span className="field-line">
              <span className="field-content">
                {userId}
              </span>

              {activeField === 'userId' && (
                <span className="terminal-cursor" />
              )}
            </span>
          </button>

          {/* PASSWORD */}
          <button
            type="button"
            className={`terminal-field ${
              activeField === 'password'
                ? 'active'
                : ''
            }`}
            onClick={() => setActiveField('password')}
          >
            <span className="field-label">
              Password:
            </span>

            <span className="field-line">
              <span className="field-content">
                {'•'.repeat(password.length)}
              </span>

              {activeField === 'password' && (
                <span className="terminal-cursor" />
              )}
            </span>
          </button>

        </div>

        <div className="wms-message">
          Login: 3-4 caractères MAJUSCULES
        </div>

      </main>

      {/* ═══════════════════════════════
          KEYBOARD
      ═══════════════════════════════ */}
      <Keyboard
        onKeyPress={handleKeyPress}
      />

    </div>
  );
}

export default LoginScreen;