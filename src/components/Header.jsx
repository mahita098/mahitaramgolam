import { useState } from "react";
import React from "react";

export default function Header() {
  return (
    <div className="navbar mx-auto max-w-7xl fixed top-0 z-10  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="projects">Projects</a>
            </li>
            {/* <li>
              <a>Blogs</a>

              <ul className="p-2">
                <li>
                  <a href="personalblogs">My Life</a>
                </li>
                <li>
                  <a href="learningblogs">Learning</a>
                </li>

                <li>
                  <a href="catproject">Cat Facts</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a>Event</a>
            </li> */}

            {/* <li>
              <label className="flex cursor-pointer gap-2">
                <span className="label-text">Theme</span>
                <input
                  onClick={() =>
                    document.documentElement.setAttribute(
                      "data-theme",
                      "forest"
                    )
                  }
                  type="checkbox"
                  value="forest"
                  className="toggle theme-controller"
                />
                <span className="label-text">Forest</span>
              </label>
            </li> */}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          Mahita Ramgolam
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="projects">Projects</a>
          </li>
          {/* <li>
            <details>
              <summary>
                Blogs{""}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </summary>
              <ul className="p-4">
                <li>
                  <a href="personalblogs">My Life</a>
                </li>
                <li>
                  <a href="learningblogs">Learning</a>
                </li>

                <li className="w-36">
                  <a href="catproject">Cat Facts</a>
                </li>
              </ul>
            </details>
          </li> */}
          {/* <li>
            <a href="events">Events</a>
          </li> */}
          <li>
            <div className="dropdown m-0 p-0">
              <div tabIndex="0" role="button" className="btn h-0 min-h-9">
                Theme
                <svg
                  width="12px"
                  height="12px"
                  className="inline-block h-2 w-2 fill-current opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl top-12"
              >
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Default"
                    value="default"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Night"
                    value="night"
                  />
                </li>

                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Forest"
                    value="forest"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Coffee"
                    value="coffee"
                  />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          href="https://mahitaramgolam.netlify.app/resume"
          className="btn"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
