import React from "react";
import EventTileItem from "./eventTileItem.js";

import { ReturnLink, ReturnAdminLink, DisplayBoxesTitle } from "./../common.js";

export default function EventsTile(list) {
  return (
    <div className="bd-example">
      <div className="container-fluid">
        <div className={"row"}>
          {list.options.title ? DisplayBoxesTitle(list.options.title) : null}
          {ReturnAdminLink(list.options.linkto)}
          {ReturnLink(list.options.linkto)}
        </div>
        <div className={"row"}>
          {list.results.map(function(d, i) {
            return <EventTileItem key={i} result={d} />;
          })}
        </div>
      </div>
    </div>
  );
}
