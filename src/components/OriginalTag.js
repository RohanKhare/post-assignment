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
//inputTag={this.state.tag}
    render(){
        return(
            <React.Fragment >
                <RemovableTag ref='removableTag' />
                <input type='text' value={this.state.tag} onChange={(e) => {this.handleChange(e)}}></input>
                <button onClick={()=>{this.callAppendTag(this.state.tag);this.setState({tag:''})}}>Add Another Tag</button>
            </React.Fragment>
        );
    }

}
export default OriginalTag