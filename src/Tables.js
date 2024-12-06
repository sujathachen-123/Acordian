function Tables(){
    return(
        <div style={{display:"grid",justifyContent:"center",alignContent:"center",}}>
            <table style={{border:"2px dashed",borderCollapse:"collapse"}}>
            <thead>
            <tr style={{backgroundColor:"grey"}} >
                <th>Name</th>
                <th>Branch</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr style={{backgroundColor:"yellow"}}>
                <td style={a.td}>Sujatha</td>
                <td style={a.td}>Cse</td>
                <td style={a.td}>Hyderabad </td>
            </tr>
            <tr style={{backgroundColor:"light pink"}}>
                <td style={a.td}>Vaishnavi</td>
                <td style={a.td}>Ece</td>
                <td style={a.td}>Chennai</td>
            </tr>
            <tr style={{backgroundColor:"yellow"}}>
                <td style={a.td}>Revanth</td>
                <td style={a.td}>Ece</td>
                <td style={a.td}>Bng</td>
            </tr>
            <tr style={{backgroundColor:"light pink"}}>
                <td style={a.td}>Bhavana</td>
                <td style={a.td}>Iot</td>
                <td style={a.td}>Delhi</td>
            </tr>
        </tbody>
    </table>    
            
        </div>
    )
}
const a={
    td:{
        border:"2px dashed",
        borderCollapse:"collapse"

    }
    
}
export default  Tables