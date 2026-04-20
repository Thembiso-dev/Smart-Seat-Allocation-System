"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateEmail(value: string) {
    if (!value) return "Email address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  }

  function validatePassword(value: string) {
    if (!value) return "Password is required.";
    if (value.length < 6) return "Password must be at least 6 characters.";
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);
    if (eErr || pErr) return;

    setIsLoading(true);
    // TODO: connect to your auth service here
    setTimeout(() => setIsLoading(false), 1500);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700&display=swap');

        .login-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0efed;
          font-family: 'DM Sans', sans-serif;
          padding: 24px;
        }

        .login-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 48px 44px 44px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08);
        }

        .brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 36px;
          gap: 10px;
        }

        .brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.3px;
        }

        .login-title {
          font-size: 26px;
          font-weight: 600;
          color: #111;
          text-align: center;
          margin-bottom: 32px;
          letter-spacing: -0.4px;
        }

        .field {
          margin-bottom: 20px;
        }

        .field label {
          display: block;
          font-size: 13.5px;
          font-weight: 600;
          color: #222;
          margin-bottom: 7px;
          letter-spacing: 0.01em;
        }

        .input-wrap {
          position: relative;
        }

        .input-wrap input {
          width: 100%;
          padding: 13px 16px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: #111;
          background: #f8f7f6;
          border: 1.5px solid #e2e0dc;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          box-sizing: border-box;
        }

        .input-wrap input:focus {
          background: #fff;
          border-color: #111;
          box-shadow: 0 0 0 3px rgba(17,17,17,0.07);
        }

        .input-wrap input.has-error {
          border-color: #e03e3e;
        }

        .input-wrap input.has-error:focus {
          box-shadow: 0 0 0 3px rgba(224,62,62,0.1);
        }

        .toggle-btn {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #888;
          display: flex;
          align-items: center;
          transition: color 0.15s;
        }

        .toggle-btn:hover { color: #333; }

        .error-msg {
          font-size: 12.5px;
          color: #e03e3e;
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .forgot-row {
          display: flex;
          justify-content: flex-end;
          margin-top: -10px;
          margin-bottom: 28px;
        }

        .forgot-link {
          font-size: 13px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .forgot-link:hover { color: #111; }

        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 15.5px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 11px;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.18s, transform 0.12s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover:not(:disabled) { background: #2a2a2a; }
        .submit-btn:active:not(:disabled) { transform: scale(0.99); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .footer-text {
          text-align: center;
          margin-top: 24px;
          font-size: 13.5px;
          color: #777;
        }

        .footer-text a {
          color: #111;
          font-weight: 600;
          text-decoration: none;
        }
        .footer-text a:hover { text-decoration: underline; }
      `}</style>

      <div className="login-root">
        <div className="login-card">

          <div className="brand">
            <span className="brand-name">SmartSeats</span>
          </div>

          <h1 className="login-title">Login</h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrap">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(validateEmail(e.target.value));
                  }}
                  className={emailError ? "has-error" : ""}
                />
              </div>
              {emailError && <p className="error-msg">&#9432; {emailError}</p>}
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  style={{ paddingRight: "44px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(validatePassword(e.target.value));
                  }}
                  className={passwordError ? "has-error" : ""}
                />
                <button
                  type="button"
                  className="toggle-btn"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {passwordError && <p className="error-msg">&#9432; {passwordError}</p>}
            </div>

            <div className="forgot-row">
              <a href="/forgot-password" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? <span className="spinner" /> : null}
              {isLoading ? "Signing in…" : "Login"}
            </button>
          </form>

          <p className="footer-text">
            Don&apos;t have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}