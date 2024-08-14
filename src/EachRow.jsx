import React from "react";

const EachRow = ({ele})=>{
    return(
        <tr>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.role}</td>
        </tr>
    )
}
export default EachRow