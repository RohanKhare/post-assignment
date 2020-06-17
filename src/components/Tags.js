import React from "react"

class Tags extends React.Component{

    constructor(props){
        super(props)
        
        this.state= {
            tags : [],
            counter : 0
        }
    }

    removeTag = (index) =>{
        alert(index)   
        let localTag = this.state.tags;
        localTag.splice(index,1);
        this.setState({
            tags : localTag,
            counter : this.state.counter - 1
        })
    }

    appendTag = () =>{
        
        let localTag =this.state.tags
        localTag.push(<div><input type='text' ></input><button value={this.state.counter} onClick={(e)=>this.removeTag(e.target.value) }>Remove {this.state.counter}</button></div>)
        this.setState({
            tags : localTag,
            counter : this.state.counter + 1
        })
    }

    render(){
        
        return(
            <div>
                Tags {this.state.counter}:
                <div>{this.state.tags}</div>
                <div className='mainTag'>
                    <input type='text' ></input>
                    <button onClick={()=>this.appendTag()}>Add Another Tag</button>
                </div>
            </div>
        );
    }
}
export default Tags