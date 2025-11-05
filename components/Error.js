import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);

  return (
    <div>
      <h1>This is Error page</h1>
      <h4>{err?.error?.status}</h4>
      <h4>{err?.error?.message}</h4>
    </div>
  );
};
export default Error;
