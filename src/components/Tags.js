import React from "react"
import OriginalTag from "./OriginalTag";

class Tags extends React.Component{
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