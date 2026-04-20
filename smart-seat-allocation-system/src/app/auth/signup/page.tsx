"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm bg-[#EFEFEF] rounded-2xl px-8 py-10 flex flex-col items-center">

        <h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-6">
          SmartSeats
        </h1>

        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-300 rounded-md px-3 py-1 mb-6">
          Sign up
        </span>

        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Roman Smith"
            className="w-full h-12 rounded-xl border border-gray-300 bg-[#FAFAFA] px-4 text-[15px] text-gray-900 outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="roman@gmail.com"
            className="w-full h-12 rounded-xl border border-gray-300 bg-[#FAFAFA] px-4 text-[15px] text-gray-900 outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full h-12 rounded-xl border border-gray-300 bg-[#FAFAFA] px-4 pr-12 text-[15px] text-gray-900 outline-none focus:border-gray-500 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-1.5">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat password"
              className="w-full h-12 rounded-xl border border-gray-300 bg-[#FAFAFA] px-4 pr-12 text-[15px] text-gray-900 outline-none focus:border-gray-500 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirm ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="w-full h-[50px] rounded-xl bg-[#111] hover:bg-[#333] text-white text-base font-medium transition-colors"
        >
          Create Account
        </button>

        <p className="mt-5 text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-gray-900 font-medium underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}