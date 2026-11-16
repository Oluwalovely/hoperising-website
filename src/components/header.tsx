"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/content/company";
import { Brand } from "./brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    function updateSection() {
      frame = 0;
      const boundary = (header.current?.getBoundingClientRect().bottom ?? 88) + 40;
      let current = "";
      for (const item of navigation) {
        const section = document.getElementById(item.href.slice(1));
        if (section && section.getBoundingClientRect().top <= boundary) {
          current = item.href;
        }
      }
      setActiveSection(current);
    }
    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    }
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header ref={header} className="sticky top-0 z-50 border-b border-forest/10 bg-ivory">
      <div className="page-container flex min-h-[88px] items-center justify-between gap-5 py-3 xl:min-h-20">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined} className="nav-link inline-flex min-h-12 items-center whitespace-nowrap text-[14px] font-medium text-forest">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="button-primary ml-3">
            Get in Touch
            <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </nav>
        <button
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
          className="flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-control border border-forest/20 text-forest transition-colors hover:bg-forest/5 xl:hidden"
        >
          {open
            ? <X size={23} strokeWidth={1.6} aria-hidden="true" />
            : <Menu size={23} strokeWidth={1.6} aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        onBlur={(event) => {
          if (event.relatedTarget instanceof Node && !header.current?.contains(event.relatedTarget)) {
            setOpen(false);
          }
        }}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-88px)] overflow-y-auto border-b border-forest/15 bg-ivory shadow-[0_14px_20px_-20px_#183f32] xl:hidden"
      >
        <div className="page-container pb-6">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => setOpen(false)} className="nav-link block py-3 text-base font-medium text-forest transition-colors hover:text-charcoal">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="button-primary mt-4 w-full sm:w-auto">
            Get in Touch
            <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
