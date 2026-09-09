"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  // =========================
  // FORM STATE
  // =========================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // =========================
  // ERROR STATE
  // =========================
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // =========================
  // SUBMIT REGISTER
  // =========================
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    // Validasi nama
    if (!name.trim()) {
      nameError = "Full name is required.";
    }

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

    // Validasi confirm password
    if (!confirmPassword.trim()) {
      confirmPasswordError = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      confirmPasswordError = "Passwords do not match.";
    }

    // Simpan error
    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    // Kalau ada error, jangan lanjut
    if (
      nameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      return;
    }

    // Untuk sementara hanya testing
    console.log("Register data:", {
      name,
      email,
      password,
      confirmPassword,
    });

    alert("Register form is valid!");
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
            REGISTER FORM
        ========================= */}
        <div className="w-full max-w-md mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900">
              Create account
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              Join us and start your gaming journey.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            {/* =========================
                FULL NAME
            ========================= */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);

                  setErrors((prev) => ({
                    ...prev,
                    name: "",
                  }));
                }}
                className={`w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm outline-none transition ${
                  errors.name
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-neutral-200 focus:border-[#8740C7] focus:ring-2 focus:ring-purple-100"
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);

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

              {errors.password && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* =========================
                CONFIRM PASSWORD
            ========================= */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);

                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: "",
                  }));
                }}
                className={`w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm outline-none transition ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-neutral-200 focus:border-[#8740C7] focus:ring-2 focus:ring-purple-100"
                }`}
              />

              {errors.confirmPassword && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* =========================
                REGISTER BUTTON
            ========================= */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#8740C7] py-3 text-sm font-semibold text-white transition hover:bg-[#6a309d]"
            >
              Create Account
            </button>
          </form>

          {/* =========================
              LOGIN
          ========================= */}
          <p className="mt-6 text-center text-sm text-neutral-500">
            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-[#8740C7] hover:text-[#6a309d]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}