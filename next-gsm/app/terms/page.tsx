import { loadStaticHtml } from "@/lib/html";

export const metadata = {
  title: "Умови — NEXX GSM",
};

export default function TermsPage() {
  const html = loadStaticHtml("terms");
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <div
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}


