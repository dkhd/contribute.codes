import React from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";

import "./QueryBuilder.css";

const programmingLanguage = [
  { name: "Javascript", value: "js" },
  { name: "Typescript", value: "js" },
  { name: "C++", value: "c++" },
];

const stars = [{ name: "Less than 100", value: "<100" }];

const issueLabel = [
  { name: "Yes, show only projects with this label", value: "yes" },
  { name: "No, I don't care with the label", value: "no" },
];

function QueryBuilder(props) {
  return (
    <div className="flex flex-col gap-10 w-10/12 md:w-6/12 pb-20">
      <div className="flex flex-col mt-10">
        <span>1. Choose your preferred programming language:</span>
        <SelectSearch
          options={programmingLanguage}
          value="sv"
          name="language"
          placeholder="Choose programming language"
          search
          filterOptions={fuzzySearch}
          className="SelectSearch mt-5 w-full"
        />
      </div>
      <div className="flex flex-col">
        <span>
          2. How many stars the projects should have? Less stars mean less
          popular, good for a beginner.
        </span>
        <SelectSearch
          options={stars}
          value="sv"
          name="language"
          placeholder="How many stars?"
          search
          filterOptions={fuzzySearch}
          className="SelectSearch mt-5 w-full"
        />
      </div>
      <div className="flex flex-col">
        <span>
          3. How many forks the projects should have? Less forks mean less
          popular, good for a beginner.
        </span>
        <SelectSearch
          options={stars}
          value="sv"
          name="language"
          placeholder="How many fors?"
          search
          filterOptions={fuzzySearch}
          className="SelectSearch mt-5 w-full"
        />
      </div>
      <div className="flex flex-col">
        <span>
          4. Should the repositories have{" "}
          <span className="bg-purple-100 border border-purple-500 text-purple-500 rounded-full px-3 py-2 text-sm">
            good-first-issue
          </span>{" "}
          issue label?
        </span>
        <SelectSearch
          options={issueLabel}
          value="sv"
          name="language"
          placeholder="With good-first-issue label?"
          search
          filterOptions={fuzzySearch}
          className="SelectSearch mt-5 w-full"
        />
      </div>
      <div className="flex flex-col">
        <span>
          5. Finally, here's how your query looks like. If you understand Github
          search query, you can edit this query. Click the Search Github button
          to start searching.
        </span>
        <input
          placeholder="Github advance search query"
          className="bg-gray-100 px-2 py-2 border border-solid border-gray-800 outline-none w-full relative overflow-hidden mt-5"
        />
      </div>
      <button className="flex flex-row justify-center items-center bg-gray-800 text-gray-50 w-full md:w-6/12 rounded-full mx-auto py-4 mt-10">
        Search Github
        <img
          width={45}
          height={45}
          src={process.env.PUBLIC_URL + "/Octocat.png"}
          alt="Github Octocat"
          className="ml-3"
        ></img>
      </button>
    </div>
  );
}

export default QueryBuilder;
