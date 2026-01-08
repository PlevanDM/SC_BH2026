import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Сторінку не знайдено</h1>
      <p className="mt-3 text-muted-foreground">
        Можливо, посилання застаріло або ви помилилися адресою.
      </p>
      <div className="mt-6">
        <Link href="/" className="underline underline-offset-4">
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
}


