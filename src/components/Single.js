import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import data from "./randomUsers.json"

export default function(props) {
  const id = props.match.params.id

  const person = data.find(contactId => contactId.id == id)

  return (
    <div className="singleview">
      <button type="button">
        <a href="http://localhost:3000/">Go Back</a>
      </button>
      <h1 className="singleheader">Single View</h1>
      <div className="singleimgbc">
        <img className="singlepic" src={person.picture.large} />
      </div>
      <ul>
        <li>{person.name.first}</li>
        <li>{person.email}</li>
        <li>{person.phone}</li>
        <li>
          {person.location.city},{person.location.state}
        </li>
      </ul>
    </div>
  )
}
