import React from "react";

function Pre({json}) {
  return(
    <pre>
      {
        JSON
          .stringify(
            json,
            null,
            2
          )
      }
    </pre>
  )
}
export default Pre
