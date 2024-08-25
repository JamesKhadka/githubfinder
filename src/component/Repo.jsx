import React from 'react'

const Repo = ({ repos }) => {
  return (
    <>
      {repos.map((repo, idx) => (
        <div className="bg-gray-900 p-3 leading-8" key={idx}>
          <a
            href={repo.html_url}
            className="text-teal-500 break-words font-bold hover:underline"
            targrt="_blank"> {repo.full_name}</a>

          <div className="flex gap-x-5">
            <h1 className="text-sm font-bold">{"🟢" + repo.language}</h1>
            <h1 className="text-sm font-bold"> Forks  :  {repo.forks}</h1>
            <h1 className="text-sm font-bold"> Stars  :   {repo.stargazers_count}</h1>
          </div>

        </div>

      ))}
    </>
  )
}

export default Repo
