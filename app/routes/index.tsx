import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return {
    title: "Predicting Prices",
    description: "Predicitng the price of several articles.",
  };
};

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  const { name } = await response.json();

  return {
    name,
  };
};

export default function index() {
  const { name } = useLoaderData();

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <h1 className="font-semibold text-3xl">Character: {name}</h1>
    </div>
  );
}
