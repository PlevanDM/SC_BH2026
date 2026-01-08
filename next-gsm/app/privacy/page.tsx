import { loadStaticHtml } from "@/lib/html";

export const metadata = {
  title: "Політика приватності — NEXX GSM",
};

export default function PrivacyPage() {
  const html = loadStaticHtml("privacy");
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <div
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}


