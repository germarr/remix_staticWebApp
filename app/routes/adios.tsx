import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function index() {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <h1 className="font-semibold text-3xl">Adios</h1>
      <Link to="./login/">
        <h1 className="font-semibold text-3xl">Adios</h1>
      </Link>
    </div>
  );
}
