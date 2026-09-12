import { useState } from 'react';
import Keyboard from './Keyboard';

function LoginScreen({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginStep, setLoginStep] = useState('userId');

  // 3 ou 4 lettres, uniquement A-Z majuscules
  const validFormat = /^[A-Z]{3,4}$/;

  const handleKeyPress = (key) => {
    // ─────────────────────────────
    // EXIT
    // ─────────────────────────────
    if (key === 'Exit') {
      setUserId('');
      setPassword('');
      setLoginStep('userId');
      return;
    }

    // ─────────────────────────────
    // BACKSPACE
    // ─────────────────────────────
    if (key === '←') {
      if (loginStep === 'userId') {
        setUserId((value) => value.slice(0, -1));
      } else {
        setPassword((value) => value.slice(0, -1));
      }

      return;
    }

    // ─────────────────────────────
    // ENTER
    // ─────────────────────────────
    if (key === 'Enter' || key === '↵') {

      // USER ID → PASSWORD
      if (loginStep === 'userId') {
        if (!validFormat.test(userId)) {
          alert(
            'User ID doit contenir 3 ou 4 lettres MAJUSCULES'
          );
          return;
        }

        setLoginStep('password');
        return;
      }

      // PASSWORD → LOGIN
      if (loginStep === 'password') {
        if (!validFormat.test(password)) {
          alert(
            'Password doit contenir 3 ou 4 lettres MAJUSCULES'
          );
          return;
        }

        onLogin(userId);
        return;
      }
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
    if (loginStep === 'userId') {
      if (!/^[A-Z]$/.test(key)) {
        return;
      }

      if (userId.length < 4) {
        setUserId((value) => value + key);
      }

      return;
    }

    // ─────────────────────────────
    // PASSWORD
    // ─────────────────────────────
    if (loginStep === 'password') {
      if (!/^[A-Z]$/.test(key)) {
        return;
      }

      if (password.length < 4) {
        setPassword((value) => value + key);
      }
    }
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
              loginStep === 'userId'
                ? 'active'
                : ''
            }`}
            onClick={() => setLoginStep('userId')}
          >
            <span className="field-label">
              User ID:
            </span>

            <span className="field-line">
              <span className="field-content">
                {userId}
              </span>

              {loginStep === 'userId' && (
                <span className="terminal-cursor" />
              )}
            </span>
          </button>

          {/* PASSWORD */}
          <button
            type="button"
            className={`terminal-field ${
              loginStep === 'password'
                ? 'active'
                : ''
            }`}
            onClick={() => setLoginStep('password')}
          >
            <span className="field-label">
              Password:
            </span>

            <span className="field-line">
              <span className="field-content">
                {'•'.repeat(password.length)}
              </span>

              {loginStep === 'password' && (
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