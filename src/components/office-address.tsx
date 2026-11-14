import type { Office } from "@/content/company";

export function OfficeAddress({ office }: { office: Office }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-forest">{office.label}</h3>
      <address className="mt-4 text-base leading-[1.8] text-muted not-italic">
        {office.lines.map((line) => (
          <span key={line} className="block">{line}</span>
        ))}
      </address>
    </div>
  );
}
