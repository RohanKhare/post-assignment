import React from "react"
import OriginalTag from "./OriginalTag";
import RemovableTag from "./RemovableTag";

class Tags extends React.Component{

    constructor(props){
        super(props)
        
    }
    
    
    
    render(){
        return(
            <div className='tagsContainer' >
                    <div style={{float:'left'}}>
                            Tags:
                    </div>
                    <div>
                            <OriginalTag />
                    </div>         
            </div>
        );
    }
}
export default Tags