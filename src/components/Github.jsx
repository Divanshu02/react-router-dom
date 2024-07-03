import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const { followers, public_repos } = useLoaderData();
  return (
    <div className=" h-96 p-5 bg-orange-400 text-4xl">
      <h1>Github Followers {followers} </h1>
      <h1>Repos {public_repos}</h1>
    </div>
  );
}
export default Github;


export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Divanshu02");
  const data = await response.json();
  return data;
};
