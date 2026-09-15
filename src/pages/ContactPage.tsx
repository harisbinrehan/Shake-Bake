import { useState } from "react";
import { contacts, venue } from "../data/venue";

type Status = "idle" | "loading" | "done" | "error";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const labelCls = "block mb-2 font-cond text-[11px] tracking-[.26em] uppercase text-muted";
const inputCls =
  "w-full h-[52px] px-[15px] bg-[#17171A] border border-white/[.16] text-white text-[15px] outline-none transition-[border-color,background] focus:border-ember focus:bg-[#1C1C20]";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [status, setStatus] = useState<Status>("idle");

  const setField = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!form.phone.trim()) err.phone = "Please enter a phone number";
    if (!EMAIL_RE.test(form.email)) err.email = "Please enter a valid email";
    setErrors(err);
    if (Object.keys(err).length) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 1000);
  };

  return (
    <div>
      <section className="max-w-[1440px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(120px,15vw,200px)] pb-[clamp(50px,7vw,110px)] grid gap-[clamp(26px,4vw,70px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
        <div>
          <span className="font-cond text-xs tracking-[.3em] uppercase text-ember">Contact</span>
          <h1 className="mt-3.5 font-display text-[clamp(38px,7vw,116px)] leading-[.84] tracking-[-.02em] uppercase">
            Want to be part of our show?
          </h1>
          <div className="mt-[34px] flex flex-col gap-px bg-white/[.12] border border-white/[.12]">
            {contacts.people.map((p) => (
              <div key={p.name} className="bg-panel p-5">
                <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">{p.name}</div>
                <a href={p.phoneHref} className="inline-block mt-2 font-display text-[22px] text-white">
                  {p.phone}
                </a>
              </div>
            ))}
            <div className="bg-panel p-5">
              <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Email</div>
              <a href={`mailto:${contacts.email}`} className="inline-block mt-2 text-[17px] break-all">
                {contacts.email}
              </a>
            </div>
            <div className="bg-panel p-5">
              <div className="font-cond text-[11px] tracking-[.28em] uppercase text-muted">Visit us</div>
              <div className="mt-2 font-cond text-[17px] tracking-[.06em] uppercase leading-[1.6] text-offwhite">
                {venue.name}
                <br />
                {venue.addressLine1}, {venue.addressLine2}
              </div>
            </div>
          </div>
        </div>

        <div>
          {status === "done" ? (
            <div className="border p-[clamp(24px,3vw,40px)]" style={{ borderColor: "rgba(255,61,20,.55)", background: "rgba(255,61,20,.08)" }}>
              <div className="font-display text-[clamp(24px,3vw,38px)] uppercase">Message sent</div>
              <p className="mt-3 text-base leading-[1.75] text-offwhite">
                Thanks for reaching out — the Shake &amp; Bake team will get back to you shortly. This is a
                prototype, so nothing was actually delivered; for anything urgent, email {contacts.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border border-white/[.12] bg-panel p-[clamp(22px,3vw,36px)]">
              <div className="flex flex-col gap-[18px]">
                <div>
                  <label htmlFor="c-name" className={labelCls}>
                    Name*
                  </label>
                  <input id="c-name" value={form.name} onChange={setField("name")} className={inputCls} />
                  <p className="mt-1.5 min-h-[16px] text-xs text-[#FF6A45]">{errors.name || ""}</p>
                </div>
                <div>
                  <label htmlFor="c-phone" className={labelCls}>
                    Phone number*
                  </label>
                  <input id="c-phone" type="tel" value={form.phone} onChange={setField("phone")} className={inputCls} />
                  <p className="mt-1.5 min-h-[16px] text-xs text-[#FF6A45]">{errors.phone || ""}</p>
                </div>
                <div>
                  <label htmlFor="c-email" className={labelCls}>
                    Email*
                  </label>
                  <input id="c-email" type="email" value={form.email} onChange={setField("email")} className={inputCls} />
                  <p className="mt-1.5 min-h-[16px] text-xs text-[#FF6A45]">{errors.email || ""}</p>
                </div>
                <div>
                  <label htmlFor="c-msg" className={labelCls}>
                    Write a message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    value={form.message}
                    onChange={setField("message")}
                    className="w-full py-3.5 px-[15px] bg-[#17171A] border border-white/[.16] text-white text-[15px] leading-[1.6] outline-none resize-y transition-[border-color,background] focus:border-ember focus:bg-[#1C1C20]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-14 bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase hover:bg-[#FF5A33]"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
