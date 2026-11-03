import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello — A Simple Page" },
      { name: "description", content: "A simple, clean starter page." },
      { property: "og:title", content: "Hello — A Simple Page" },
      { property: "og:description", content: "A simple, clean starter page." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">Hello Universe</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a simple page. Tell me what you'd like to put here.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get started
        </a>
      </div>
    </main>
  );
}
