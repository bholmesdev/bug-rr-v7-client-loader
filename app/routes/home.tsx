import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function clientLoader({}: Route.ClientLoaderArgs) {
  return { hello: true };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return loaderData.hello ? <h1>Welcome to React Router!</h1> : null;
}
