import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = () => {
  return {
    env: {
      SUPABASE_URL: "https://tfatbvqvpnnftzcaoewb.supabase.co",
      SUPABASE_KEY:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmYXRidnF2cG5uZnR6Y2FvZXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg0MTM2MTcsImV4cCI6MTk3Mzk4OTYxN30.DDdCpzNrmsf7DYH0iCL8-YAvno2hsn_HKuFMk-g-OgM",
    },
  };
};

export default function App() {
  const { env } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
