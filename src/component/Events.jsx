import React from 'react'
import { format } from 'timeago.js'

const Events = ({ events }) => {
  return (
    <>
      {events?.map((evi, i) => (
        <div key={i} className="flex gap-x-4 text-teal-500 items-center" >
          <img
            src={evi.actor?.avatar_url} className="w-16 rounded-full" />
          <h1 className="break-words">
            {evi?.actor?.login}
            {evi?.type}
            <br />
            {evi?.repo?.name}
            <br />
            <span className="tex-sm">
              {format(evi?.created_at)}
            </span>
          </h1>
        </div>
      ))}
    </>
  )
}

export default Events
