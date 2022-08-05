import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return {
    title: "Predicting Prices",
    description: "Predicitng the price of several articles.",
  };
};

export const loader: LoaderFunction = async () => {
  const req = await fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5"
  );
  const res = await req.json();

  return res;
};

export default function index() {
  const res = useLoaderData();

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="grid grid-cols-3 px-6 gap-6">
        <div className="py-11">
          <span className="font-semibold text-2xl">Character:</span>
          <div className="flex flex-col py-2 space-y-5">
            {res.map((m, i: number) => (
              <Link
                to={`./${m.id}`}
                prefetch="intent"
                className="flex space-x-3 items-center bg-white p-4 shadow-sm"
                key={i}
              >
                <img
                  className="rounded-full shadow-md w-16 h-16"
                  src={m.image}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-xs">Status: {m.gender}</span>
                  <span className="text-xs">Species: {m.species}</span>
                  <span className="text-xs">Gender: {m.gender}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
        <div></div>
      </div>
    </div>
  );
}
