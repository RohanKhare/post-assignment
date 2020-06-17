import React from "react"

class Title extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='titleComponent'>
                <label>Title : </label>
                <input type='text' value=''></input>
            </div>
        );
    }
}
export default Title