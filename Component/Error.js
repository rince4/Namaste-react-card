import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>hello This Error Page</h1>
      <h1>
        {error.status} - Url Not Found{error.data}
      </h1>
    </div>
  );
};

export default Error;
