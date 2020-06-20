import React from "react"

class Body extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='bodyContainer'>
                <div  style={{float:'left'}}>
                <label>Body : </label>
                </div>
                <div>
                <textarea rows='10'></textarea>
                </div>
           </div>
        );
    }
}
export default Body