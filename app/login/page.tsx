"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { EntegLogoAnimated } from "@/components/ui/enteg-logo-animated";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
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
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#07101C",
        // Safe-area padding for iPhone notch / home indicator
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            180deg,
            transparent 0px, transparent 15px,
            rgba(74,143,224,0.07) 15px, rgba(74,143,224,0.07) 17px
          )`,
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[50vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(74,143,224,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(74,143,224,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[360px] px-5"
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <EntegLogoAnimated className="h-14 w-auto" noAnimation light />
        </div>

        {/* Card */}
        <div
          className="rounded-2xl px-6 py-8 sm:px-8 sm:py-9"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(74,143,224,0.18)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.04) inset",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-3 mb-7">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(74,143,224,0.12)",
                border: "1px solid rgba(74,143,224,0.25)",
              }}
            >
              <Lock size={18} style={{ color: "#4A8FE0" }} />
            </div>
            <div className="text-center">
              <p
                className="text-white font-semibold text-base leading-tight"
              >
                Prototyp-Zugang
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Passwort erforderlich
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Password input */}
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Passwort eingeben"
                autoComplete="current-password"
                className="w-full rounded-xl px-4 pr-12 text-white placeholder-white/25 outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${error ? "rgba(239,68,68,0.55)" : "rgba(74,143,224,0.22)"}`,
                  // IMPORTANT: 16px minimum to prevent iOS auto-zoom
                  fontSize: "16px",
                  lineHeight: "1.5",
                  height: "52px",
                  boxShadow: error ? "0 0 0 3px rgba(239,68,68,0.12)" : "none",
                }}
              />

              {/* Show/hide toggle */}
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}
                aria-label={show ? "Passwort verbergen" : "Passwort anzeigen"}
              >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 -mt-1"
                >
                  <AlertCircle size={13} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-xs">
                    Falsches Passwort. Bitte erneut versuchen.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-35 active:scale-[0.97]"
              style={{
                background: password && !loading
                  ? "linear-gradient(135deg, #4A8FE0, #2563EB)"
                  : "rgba(74,143,224,0.4)",
                fontSize: "15px",
                height: "52px",
                boxShadow: password && !loading
                  ? "0 4px 20px rgba(74,143,224,0.35)"
                  : "none",
                transition: "all 0.2s ease",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                  />
                  Einloggen…
                </span>
              ) : (
                "Einloggen"
              )}
            </button>
          </form>
        </div>

        {/* Footer note */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          © 2025 Enteg GmbH
        </p>
      </motion.div>
    </div>
  );
}
