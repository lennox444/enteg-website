"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ salutation: "", name: "", company: "", email: "", message: "" });
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.contact.form.required;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t.contact.form.emailInvalid;
    if (!form.message.trim()) e.message = t.contact.form.required;
    return e;
  };

  const fireFromButton = () => {
    const rect = submitBtnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    import("canvas-confetti").then(({ default: confetti }) => {
      const colors = ["#4A8FE0", "#2563EB", "#22c55e", "#ffffff", "#f97316", "#a855f7", "#FFD800"];
      confetti({ particleCount: 120, spread: 80, origin: { x, y }, colors, startVelocity: 50, gravity: 1.0, scalar: 0.9, ticks: 220, decay: 0.91 });
      setTimeout(() => confetti({ particleCount: 50, spread: 55, origin: { x, y }, colors, startVelocity: 35, gravity: 0.9, scalar: 0.75, ticks: 180, decay: 0.93 }), 120);
    });
  };

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
      setForm({ salutation: "", name: "", company: "", email: "", message: "" });
    }, 10000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setErrors({});
    fireFromButton();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => { const n = { ...prev }; delete n[e.target.name]; return n; });
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-3.5 py-3 text-brand-gray-dark text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200 min-h-[44px]";
  const errorClass = "mt-1 text-red-500 text-xs flex items-center gap-1";

  const infoItems = [
    { icon: MapPin, label: t.contact.info.addressLabel, value: t.contact.info.address, href: "https://maps.google.com/?q=Hoppenmeer+9A+33129+Delbrück" },
    { icon: Phone,  label: t.contact.info.phoneLabel,   value: t.contact.info.phone,   href: `tel:${t.contact.info.phone.replace(/\s/g, "")}` },
    { icon: Mail,   label: t.contact.info.emailLabel,   value: t.contact.info.email,   href: `mailto:${t.contact.info.email}` },
    { icon: Clock,  label: t.contact.info.hoursLabel,   value: t.contact.info.hours,   href: undefined },
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-20 px-4 bg-bg-section border-t-2 border-brand-blue/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">

          {/* ── LEFT: Header + Form ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* Compact header */}
            <div>
              <span className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-1 block">
                {t.contact.badge}
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-brand-gray-dark uppercase leading-tight mb-1">
                {t.contact.title}
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Form card */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col">
              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-6">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-brand-gray-dark mb-1">
                      {t.contact.form.success}
                    </h3>
                    <p className="text-brand-gray text-sm">
                      {t.contact.form.successDetail}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {t.contact.form.formReturn}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col space-y-3">
                  {/* Row 1: Anrede + Name + Firma */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-dark mb-1">
                        {t.contact.form.salutation}
                      </label>
                      <select
                        name="salutation" value={form.salutation} onChange={handleChange}
                        className={`${inputClass} bg-white`}
                      >
                        <option value="">{t.contact.form.salutationPlaceholder}</option>
                        <option value="mr">{t.contact.form.salutationMr}</option>
                        <option value="ms">{t.contact.form.salutationMs}</option>
                        <option value="diverse">{t.contact.form.salutationDiverse}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-dark mb-1">
                        {t.contact.form.name} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`${inputClass} ${errors.name ? "border-red-300 ring-1 ring-red-300" : ""}`}
                      />
                      {errors.name && <p className={errorClass}>{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-dark mb-1">
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder={t.contact.form.companyPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-gray-dark mb-1">
                      {t.contact.form.email} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      className={`${inputClass} ${errors.email ? "border-red-300 ring-1 ring-red-300" : ""}`}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block text-xs font-medium text-brand-gray-dark mb-1">
                      {t.contact.form.message} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={7}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`${inputClass} resize-none flex-1 ${errors.message ? "border-red-300 ring-1 ring-red-300" : ""}`}
                    />
                    {errors.message && <p className={errorClass}>{errors.message}</p>}
                  </div>

                  <button
                    ref={submitBtnRef}
                    type="submit"
                    className="w-full text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-lg text-sm min-h-[52px]"
                    style={{ background: "#07101C", boxShadow: "0 4px 20px rgba(7,16,28,0.4), 0 1px 0 rgba(255,255,255,0.04) inset" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#111f30")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#07101C")}
                  >
                    <Send size={14} />
                    {t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Contact info + Map ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">

            {/* Align with the form card visually */}
            <div className="hidden lg:block">
              <div className="text-xs uppercase tracking-widest mb-1 opacity-0 select-none">·</div>
              <div className="text-3xl sm:text-4xl font-bold leading-tight mb-1 opacity-0 select-none">·</div>
              <div className="text-sm leading-relaxed opacity-0 select-none">·</div>
            </div>

            {/* Info cards */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3">
              {infoItems.map((item, i) => (
                <div key={i} className={`flex items-start gap-3 ${i < infoItems.length - 1 ? "pb-3 border-b border-gray-100" : ""}`}>
                  <div className="bg-brand-blue/10 rounded-lg p-2 flex-shrink-0 mt-0.5">
                    <item.icon size={15} className="text-brand-blue" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold text-brand-gray uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-brand-gray-dark font-medium hover:text-brand-blue transition-colors whitespace-pre-line text-sm leading-snug"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brand-gray-dark font-medium whitespace-pre-line text-sm leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex-1 min-h-[160px]">
              <iframe
                src="https://maps.google.com/maps?q=Hoppenmeer+9A+Sch%C3%B6ning+33129+Delbr%C3%BCck+Deutschland&z=16&output=embed"
                className="w-full h-full border-0 min-h-[160px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.contact.mapTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
