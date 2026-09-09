"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  // =========================
  // FORM STATE
  // =========================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // =========================
  // ERROR STATE
  // =========================
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // =========================
  // SUBMIT LOGIN
  // =========================
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let emailError = "";
    let passwordError = "";

    // Validasi email
    if (!email.trim()) {
      emailError = "Email is required.";
    } else if (!email.includes("@")) {
      emailError = "Please enter a valid email.";
    }

    // Validasi password
    if (!password.trim()) {
      passwordError = "Password is required.";
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters.";
    }

    // Simpan error
    setErrors({
      email: emailError,
      password: passwordError,
    });

    // Kalau ada error, jangan lanjut
    if (emailError || passwordError) {
      return;
    }

    // Untuk sementara hanya testing
    console.log("Login data:", {
      email,
      password,
    });

    alert("Login form is valid!");
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* =========================
            IMAGE
        ========================= */}
        <div className="relative w-full max-w-md mx-auto h-[550px] overflow-hidden">
          <Image
            src="/img/login-game.jpg"
            alt="Gaming"
            fill
            className="object-cover"
          />
        </div>

        {/* =========================
            LOGIN FORM
        ========================= */}
        <div className="w-full max-w-md mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              Sign in to continue your gaming journey.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            {/* =========================
                EMAIL
            ========================= */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);

                  // Hapus error ketika user mulai mengetik
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }}
                className={`w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-neutral-200 focus:border-[#8740C7] focus:ring-2 focus:ring-purple-100"
                }`}
              />

              {/* Email Error */}
              {errors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* =========================
                PASSWORD
            ========================= */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);

                  // Hapus error ketika user mulai mengetik
                  setErrors((prev) => ({
                    ...prev,
                    password: "",
                  }));
                }}
                className={`w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm outline-none transition ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-neutral-200 focus:border-[#8740C7] focus:ring-2 focus:ring-purple-100"
                }`}
              />

              {/* Password Error */}
              {errors.password && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* =========================
                FORGOT PASSWORD
            ========================= */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-[#8740C7] hover:text-[#6a309d]"
              >
                Forgot password?
              </button>
            </div>

            {/* =========================
                LOGIN BUTTON
            ========================= */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#8740C7] py-3 text-sm font-semibold text-white transition hover:bg-[#6a309d]"
            >
              Continue with Email
            </button>
          </form>

          {/* =========================
              REGISTER
          ========================= */}
          <p className="mt-6 text-center text-sm text-neutral-500">
            Don't have an account?{" "}

            <Link
              href="/register"
              className="font-semibold text-[#8740C7] hover:text-[#6a309d]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}