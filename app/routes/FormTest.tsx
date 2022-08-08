import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Basictable from "~/components/Basictable";
import styles from "~/tailwind.css";
import supabase from "~/utils/supabase";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return {
    title: "TestingForms",
    description: "We use this space to test the different forms in Remix",
  };
};

export const action: ActionFunction = async ({ request, params }) => {
  const dataForm = await request.formData();
  const body = await Object.fromEntries(dataForm);
  const { name, last_name } = await body;

  const { error } = await supabase
    .from("People")
    .insert({ first_name: name, last_name: last_name });

  if (error) {
    console.log(error.message);
  }

  return null;
};

export const loader: LoaderFunction = async () => {
  const { data, error } = await supabase.from("People").select("*");

  if (error) {
    console.log("👻", error.message);
  }

  return {
    data,
  };
};

export default function FormTest() {
  const { data } = useLoaderData();
  let transistion = useTransition();

  let isAdding =
    transistion.state === "submitting" &&
    transistion.submission.formData.get("_action") === "create";

  let formRef = useRef();
  let first_name_ref = useRef();

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
      first_name_ref.current?.focus();
    }
  }, [isAdding]);

  return (
    <div className="bg-emerald-50 min-h-screen flex flex-col w-full items-center justify-center">
      <div className="grid grid-cols-6 gap-3 py-11">
        {data.map((m, i: number) => (
          <div
            key={m.id}
            className="bg-white p-2 items-center rounded-lg flex justify-between px-2"
          >
            <span className="text-sm">
              {i + 1}. {m.first_name} {m.last_name}
            </span>
            <button
              name="_delete"
              type="submit"
              value={m.id}
              className="font-semibold px-3"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <Form ref={formRef} method="post" className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <span>Name</span>
          <input
            ref={first_name_ref}
            className="border"
            type="text"
            name="name"
            id=""
          />
        </div>
        <div className="flex space-x-2">
          <span>Last Name</span>
          <input className="border" type="text" name="last_name" id="" />
        </div>
        {/* <Basictable /> */}
        <button
          className="bg-purple-500 text-white font-semibold hover:bg-purple-500/70"
          type="submit"
          value="create"
          name="_action"
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Add"}
        </button>
      </Form>
    </div>
  );
}
