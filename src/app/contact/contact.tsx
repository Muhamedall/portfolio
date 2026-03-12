'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FloatingInput = ({
  id, name, type = "text", value, onChange, label, error, rows,
}: {
  id: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string; error?: string; rows?: number;
}) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const baseClass = `
    w-full bg-transparent border-0 border-b-2 px-0 pt-6 pb-2 text-sm
    text-gray-900 dark:text-white outline-none transition-colors duration-200
    placeholder-transparent resize-none
    ${error
      ? "border-rose-400 dark:border-rose-400"
      : isActive
        ? "border-indigo-500"
        : "border-gray-200 dark:border-gray-700"
    }
  `;

  return (
    <div className="relative">
      {rows ? (
        <textarea
          id={id} name={name} value={value} rows={rows}
          onChange={onChange} placeholder={label}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className={baseClass}
        />
      ) : (
        <input
          id={id} name={name} type={type} value={value}
          onChange={onChange} placeholder={label}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className={baseClass}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium
          ${isActive
            ? "top-0 text-xs text-indigo-500 dark:text-indigo-400"
            : "top-6 text-sm text-gray-400 dark:text-gray-500"
          }`}
      >
        {label} <span className="text-rose-400">*</span>
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 shrink-0">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 4.5zm0 6.5a.875.875 0 110-1.75.875.875 0 010 1.75z" />
            </svg>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const response = await fetch(
        "https://backendportfolio-mohamedallaoui2069-r4nvmprp.leapcell.dev/api/contacts",
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) }
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus({ type: "success", msg: "Your message has been sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({ type: "error", msg: result.message || "Failed to send your message." });
      }
    } catch {
      setFormStatus({ type: "error", msg: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6"
      aria-label="Contact Mohamed Allaoui"
    >
      <motion.div
        className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 sm:p-10 shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact <span className="text-indigo-500">Me</span>
        </motion.h1>

        {/* Status message */}
        <AnimatePresence>
          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`mb-8 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                formStatus.type === "success"
                  ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20"
                  : "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20"
              }`}
            >
              {formStatus.type === "success" ? (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              )}
              {formStatus.msg}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FloatingInput
              id="name" name="name" value={formData.name}
              onChange={handleChange} label="Full Name" error={errors.name}
            />
            <FloatingInput
              id="email" name="email" type="email" value={formData.email}
              onChange={handleChange} label="Email Address" error={errors.email}
            />
          </div>

          <FloatingInput
            id="message" name="message" value={formData.message}
            onChange={handleChange} label="Your Message" error={errors.message} rows={5}
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className={`
              w-full flex items-center justify-center gap-2.5
              px-6 py-3.5 rounded-xl text-sm font-semibold text-white
              transition-all duration-200
              ${isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-200 dark:hover:shadow-indigo-900/40"
              }
            `}
          >
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send Message
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Person",
              name: "Mohamed Allaoui",
              url: "https://www.mohamedallaoui.com",
              email: "mailto:your-email@example.com",
              jobTitle: "Full Stack Developer",
              contactType: "Customer Support / General Inquiries",
            },
          }),
        }}
      />
    </section>
  );
};

export default ContactPage;