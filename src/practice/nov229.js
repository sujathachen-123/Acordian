// import React,{Component} from"react";
// class Toggle extends Component{
//     constructor(){
//         super();
//         this.state={btnText:"switch On",nrmlText:"Turn off"};
//     }
//     handleButton=()=>{
//         this.setState({btnText:"switchoff",nrmlText:"turned on"})
//     }
//     render(){
//         return(
//             <>
//             <button onClick={this.handleButton}>{this.state.btnText}</button>{" "}
//              <h1>{this.state.nrmlText}</h1>{" "}</>
//         )
//     }
// }
// export default Toggle;

import React from "react"
class sampleForm extends React.Component{
    constructor(){
        super()
        this.state={text:"hello"}
    }
    render(){
            return(<>
            <form>
                <input type="text"/>
                <input type="submit"/>
            </form>
            <h1>{this.state.text}</h1>
                
        
        </>)
    }
}