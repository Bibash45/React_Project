import React from "react";
import { useRouteError } from "react-router-dom";

// if(error === 404){
//     return <div>Page not found</div>;
// }
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <h4 className="font-bold text-4xl">There was an error...</h4>;
};

export default ErrorElement;
