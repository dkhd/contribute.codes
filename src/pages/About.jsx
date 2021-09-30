import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="container mx-auto mt-10 pb-20">
      <h1 className="text-center text-3xl font-bold">About CYC</h1>
      <div className="w-10/12 mt-10 md:w-6/12 mx-auto text-justify">
        <p>
          Hi 👋 I'm{" "}
          <a
            href="https://hadna.space"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-dashed border-gray-600"
          >
            Diky Hadna
          </a>
          , the founder of this project. Thank you for reading this.
        </p>
        <p className="mt-5">
          In a simple term,{" "}
          <Link to="/" className="border-b-2 border-dashed border-gray-600">
            Contribute Your Codes (CYC)
          </Link>{" "}
          is a Github advanced search syntax builder. It is similar to what
          Github have in the{" "}
          <a
            href="https://github.com/search/advanced"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-dashed border-gray-600"
          >
            Github Advanced Search
          </a>
          , but with more user-friendly interface.
        </p>
        <p className="mt-5">
          CYC aims to help people with interest in open source and willing to
          contribute, but want to start with something smaller &amp; less
          popular. In short, CYC is here to help you find the right projects.
        </p>
        <p className="mt-5">
          If this is your first time in contributing to open source, I highly
          recommend you to also check these awesome websites to get a better
          understanding about how to contribute to open source:
        </p>
        <ul className="list-disc pl-5 mt-3">
          <li className="mt-2">
            <a
              href="https://opensource.guide/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-dashed border-gray-600"
            >
              Opensource Guide
            </a>
          </li>
          <li className="mt-2">
            <a
              href="https://github.com/freeCodeCamp/how-to-contribute-to-open-source"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-dashed border-gray-600"
            >
              How To Contribute To Open Source by freeCodeCamp
            </a>
          </li>
          <li className="mt-2">
            <a
              href="https://www.firsttimersonly.com/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-dashed border-gray-600"
            >
              First Timer Only
            </a>
          </li>
          <li className="mt-2">
            <a
              href="https://www.codetriage.com/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-dashed border-gray-600"
            >
              Code Triage
            </a>
          </li>
          <li className="mt-2">
            <a
              href="https://goodfirstissue.dev/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-dashed border-gray-600"
            >
              GoodFirstIssue.dev
            </a>
          </li>
          <li className="mt-2">
            <a
              href="https://goodfirstissues.com/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-dashed border-gray-600"
            >
              GoodFirstIssues.com
            </a>
          </li>
        </ul>
        <p className="mt-10 text-xl font-semibold">Why I build this?</p>
        <p className="mt-5">
          One major problem for beginner contributors is they need something
          smaller to begin with, so they can get a grasp on how to contribute to
          open source. Those awesome websites I mentioned above will mostly
          suggest the users to contribute to big &amp; massive projects that
          might be scary or intimidating to a beginner contributor.
        </p>
        <p className="mt-5">
          CYC will fill the gaps by providing you with more advanced search, so
          you can give your first contribution to an active open source project
          but less popular. These projects are usually have less stars and less
          forks compared to the big &amp; massive projects with thousands of
          stars and forks.
        </p>
        <p className="mt-10 text-xl font-semibold">Supporting CYC</p>
        <p className="mt-5">
          CYC is a personal, free-time project with no funding. If you want to
          contribute to CYC, you could consider{" "}
          <a
            href="https://www.buymeacoffee.com/dkhd"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-dashed border-gray-600"
          >
            buying me a coffee
          </a>{" "}
          to keep the service alive and updated. At this stage, I will maintain
          this website myself and will not accepting any pull request. But
          instead, I highly encourage you to contribute to the awesome open
          source projects you can find through this website. This website is
          just a small tool for you anyway. But if you want to give some
          feedbacks or suggestions, you could file an issue in the{" "}
          <a
            href="https://github.com/dkhd/contribute.codes/"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-dashed border-gray-600"
          >
            Github repository
          </a>
          .
        </p>
        <p className="mt-10">Happy contributing!</p>
      </div>
    </div>
  );
}

export default About;
