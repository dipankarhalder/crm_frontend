import { Link } from "react-router-dom";

export const SigninLink = () => {
  return (
    <div className="text-center text-sm mt-2">
      <p>
        Don&apos;t have an account? &nbsp;
        <Link to={"/"} className="font-medium underline hover:text-indigo-700">
          Create now
        </Link>
      </p>
    </div>
  );
};
