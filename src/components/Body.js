import React from "react"

class Body extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='bodyComponent'>
                <label>Body : </label>
                <textarea rows='10'></textarea>
            </div>
        );
    }
}
export default Body