import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page_not_found">
      <div className="">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Link to={"/"} className="btn btn__1">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
