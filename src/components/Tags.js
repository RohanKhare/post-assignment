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
                    <div >
                            Tags:
                    </div>
                    <div style={{float:'left'}}>
                        <div style={{paddingLeft:40}}>
                            <OriginalTag onClick={this.appendTag}/>
                        </div>

                    </div>
                    
            </div>
        );
    }
}
export default Tags