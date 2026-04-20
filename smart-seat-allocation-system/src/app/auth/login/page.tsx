"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm bg-[#EFEFEF] rounded-2xl px-8 py-10 flex flex-col items-center">

        <h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-6">
          SmartSeats
        </h1>

        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-300 rounded-md px-3 py-1 mb-6">
          Login
        </span>

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

        <div className="w-full mb-2">
          <label className="block text-sm font-medium text-gray-900 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
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

        <div className="w-full text-right mb-5">
          <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Forgot password?
          </button>
        </div>

        <button
          type="button"
          className="w-full h-[50px] rounded-xl bg-[#111] hover:bg-[#333] text-white text-base font-medium transition-colors"
        >
          Login
        </button>

        <p className="mt-5 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-gray-900 font-medium underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}