import { useState } from "react";
import { ModalShell } from "./ModalShell";
import { useUI } from "../context/UIContext";
import { shows, getShowById } from "../data/shows";
import { contacts } from "../data/venue";

const labelCls = "block mb-[7px] font-cond text-[11px] tracking-[.26em] uppercase text-muted";
const inputCls = "w-full h-[50px] px-3.5 bg-[#1A1A1D] border border-white/[.16] text-white text-[15px] outline-none";
const errCls = "mt-1.5 text-xs text-[#FF6A45]";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  show: string;
  tables: string;
}

export function VendorModal() {
  const { vendorShowId, closeModal } = useUI();
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    email: "",
    phone: "",
    show: vendorShowId,
    tables: "1",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const show = getShowById(form.show);
  const setField = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: { name?: string; email?: string } = {};
    if (!form.name.trim()) err.name = "Required";
    if (!EMAIL_RE.test(form.email)) err.email = "Valid email required";
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 1000);
  };

  if (status === "done") {
    return (
      <ModalShell kicker="Vendor Registration" title="Reserve Your Table" onClose={closeModal}>
        <div className="font-display text-2xl uppercase text-white">Request sent</div>
        <p className="mt-2.5 text-[15px] leading-[1.7] text-body">
          Thanks, {form.name || "friend"}. Your table request for {show.title} ({show.dateLong}) has been noted. This
          is a prototype — to confirm a real table, complete the official table form below.
        </p>
        <a
          href={show.tables}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center h-[54px] px-[26px] mt-[18px] bg-ember text-white font-cond text-base font-bold tracking-[.18em] uppercase"
        >
          Open official table form
        </a>
        <p className="mt-4 text-[13px] text-muted">
          Or reach us at {contacts.email} · {contacts.people[0].name.split(" ")[0]} {contacts.people[0].phone} ·{" "}
          {contacts.people[1].name.split(" ")[0]} {contacts.people[1].phone}
        </p>
      </ModalShell>
    );
  }

  return (
    <ModalShell kicker="Vendor Registration" title="Reserve Your Table" onClose={closeModal}>
      <form onSubmit={onSubmit}>
        <p className="mb-[18px] text-sm leading-[1.65] text-[#A1A1A6]">
          Tell us about your setup and we'll get you on the floor. Table pricing and availability are confirmed
          through the official table form for each show.
        </p>
        <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          <div>
            <label htmlFor="v-name" className={labelCls}>
              Your name*
            </label>
            <input id="v-name" className={inputCls} value={form.name} onChange={setField("name")} />
            {errors.name && <p className={errCls}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="v-biz" className={labelCls}>
              Business / shop
            </label>
            <input id="v-biz" className={inputCls} value={form.business} onChange={setField("business")} />
          </div>
          <div>
            <label htmlFor="v-email" className={labelCls}>
              Email*
            </label>
            <input id="v-email" type="email" className={inputCls} value={form.email} onChange={setField("email")} />
            {errors.email && <p className={errCls}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="v-phone" className={labelCls}>
              Phone
            </label>
            <input id="v-phone" className={inputCls} value={form.phone} onChange={setField("phone")} />
          </div>
          <div>
            <label htmlFor="v-show" className={labelCls}>
              Show
            </label>
            <select id="v-show" className={inputCls} value={form.show} onChange={setField("show")}>
              {shows.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} — {s.dateLong}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="v-tables" className={labelCls}>
              Tables needed
            </label>
            <select id="v-tables" className={inputCls} value={form.tables} onChange={setField("tables")}>
              {["1", "2", "3", "4+"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-2.5 mt-5 flex-wrap">
          <button
            type="submit"
            className="h-[54px] px-[26px] bg-ember text-white border-0 cursor-pointer font-cond text-base font-bold tracking-[.18em] uppercase"
            style={{ opacity: status === "loading" ? 0.7 : 1 }}
          >
            {status === "loading" ? "Sending…" : "Request table"}
          </button>
          <a
            href={show.tables}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-[54px] px-[26px] border border-white/[.26] text-white font-cond text-base font-bold tracking-[.18em] uppercase"
          >
            Official form
          </a>
        </div>
      </form>
    </ModalShell>
  );
}
