import React from 'react'
import Tags from './Tags'
import RemovableTag from './RemovableTag'

class OriginalTag extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tag : ''
        }
    }
    handleChange = (event) =>{
        this.setState({
            tag : event.target.value
        });
    }
    callAppendTag = (tag) =>{
        this.refs.removableTag.appendElement(tag);
    }
    render(){
        return(
            <div>
                <RemovableTag ref='removableTag' />
                <div style={{paddingLeft:40}}>
                <input type='text' value={this.state.tag} onChange={(e) => {this.handleChange(e)}}></input>
                <button onClick={()=>{this.callAppendTag(this.state.tag);this.setState({tag:''})}}>Add Another Tag</button>
                </div>
                
            </div>
        );
    }

}
export default OriginalTag