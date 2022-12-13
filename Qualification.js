import React from "react";
function Qualification(props){
return(
<table className="Qualification">
<thead>
    <tr>
        <th>Degree</th>
        <th>Marks</th>
        <th>College</th>
    </tr>
</thead>
<tbody>
    {props.qualification.map((item,index) => {
        return (
            <tr key={index}>
                <td>{item.Degree}</td>
                <td>{item.Marks}</td>
                <td>{item.College}</td>
            </tr>
        )
        })
    }    
</tbody>
</table>
)
}

export default Qualification;