import Link from "next/link";
import { SITE_CONFIG, getDirectionsUrl, getTelegramUrl, getWhatsAppUrl } from "@/lib/site-config";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-compact.svg" alt="NEXX GSM" className="h-10 w-auto dark:invert" />
          </Link>

          <nav className="flex items-center gap-3 text-sm">
            <Link href="/about" className="hover:underline underline-offset-4">
              Про нас
            </Link>
            <Link href="/faq" className="hover:underline underline-offset-4">
              FAQ
            </Link>
            <Link href="/calculator" className="hover:underline underline-offset-4">
              Калькулятор
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="w-full">{children}</main>

      <footer className="border-t">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-muted-foreground sm:grid-cols-2 sm:items-start">
          <div className="space-y-2">
            <div className="text-foreground font-medium">NEXX GSM</div>
            <div>© {new Date().getFullYear()} NEXX GSM</div>
            <div>{SITE_CONFIG.addressLine1}</div>
            <div>{SITE_CONFIG.addressLine2}</div>
            <a className="block hover:text-foreground" href={`tel:${SITE_CONFIG.phoneE164}`}>
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a className="block hover:text-foreground" href={`mailto:${SITE_CONFIG.email}`}>
              {SITE_CONFIG.email}
            </a>
          </div>

          <div className="space-y-2 sm:justify-self-end sm:text-right">
            <a className="block hover:text-foreground" href={getDirectionsUrl()} target="_blank" rel="noreferrer">
              Google Maps
            </a>
            <a className="block hover:text-foreground" href={getWhatsAppUrl("Привіт! Хочу записатися на ремонт.")} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="block hover:text-foreground" href={getTelegramUrl()} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <div className="pt-2 flex gap-4 sm:justify-end">
              <Link href="/privacy" className="hover:text-foreground">
                Політика приватності
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Умови
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


