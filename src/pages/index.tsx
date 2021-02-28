import { Link } from "gatsby";
import React from "react";
import SEO from "../components/SEO";

function IndexPage() {
  return (
    <div className={`items-center flex flex-col h-screen justify-center`}>
      <h1 className="text-4xl font-bold p-3">Gatsby Tailwind Starter!</h1>
      <Link to="Henlo" className="underline px-3">
        test
      </Link>
    </div>
    
  );
}

export default IndexPage;
