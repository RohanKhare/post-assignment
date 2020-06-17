import React from "react"
import Title from "./Title"
import Body from "./Body";
import Tags from "./Tags";

class Post extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='postComponent'>
                <div>
                <Title />
                </div>
                <div>
                    <Body />
                </div>
                <div>
                    <Tags />
                </div>
            </div>
        );
    }
}
export default Post