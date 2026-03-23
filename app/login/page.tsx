"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EntegLogoAnimated } from "@/components/ui/enteg-logo-animated";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#07101C" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 15px, rgba(74,143,224,0.06) 15px, rgba(74,143,224,0.06) 17px)`,
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(74,143,224,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <EntegLogoAnimated className="h-14 w-auto" noAnimation />
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border px-8 py-9"
          style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(74,143,224,0.15)" }}
        >
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-6 text-center">
            Prototyp · Zugang erforderlich
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
              autoFocus
              className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(74,143,224,0.2)"}`,
              }}
            />

            {error && (
              <p className="text-red-400 text-xs text-center -mt-1">
                Falsches Passwort. Bitte erneut versuchen.
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-200 disabled:opacity-40"
              style={{ background: "#4A8FE0" }}
            >
              {loading ? "..." : "Einloggen"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">© 2025 Enteg GmbH</p>
      </div>
    </div>
  );
}
