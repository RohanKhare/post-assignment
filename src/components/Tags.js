import React from "react"

class Tags extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 1,
            tag : ''
        }
    }
    removeTag(btnId){ 
       let additionalTagId = document.getElementById('additionalTags');

       if(additionalTagId.hasChildNodes()){
            var index;
            var childLength = additionalTagId.childElementCount;
            var firstChildElement = additionalTagId.firstElementChild;
            var childElement = firstChildElement
            var nextChildElement;

            for(let i=1; i<=childLength;i++){
                if (firstChildElement.id === btnId) {
                    index = 0;
                    break;
                }else{     
                    nextChildElement = childElement.nextElementSibling;
                    if (nextChildElement.id === btnId) {
                        index = i;
                        break;
                    }
                    childElement = nextChildElement;
                }
            }
            additionalTagId.removeChild(additionalTagId.childNodes[index]);            
       }
    }
    appendTag = (inputTag) =>{
        //document.getElementById('UserInputTag').value = '';  
        var localCounter  = this.state.counter;

        var additionalTags = document.getElementById('additionalTags');
        var childElement = document.createElement("li");
        childElement.setAttribute("id","li"+localCounter);

        //input box
        var input  = document.createElement("input");
        input.setAttribute("type","texts");
        input.setAttribute("value",inputTag)
        childElement.appendChild(input);

        
        //Button
        var btn  = document.createElement("button");
        btn.innerHTML = 'REMOVE';
        btn.setAttribute("id","btn"+localCounter);
        //Appending elemnts
        childElement.appendChild(btn);
        additionalTags.appendChild(childElement);


        var listId = document.getElementById("btn"+localCounter).parentNode.id
        btn.onclick = ()=>{this.removeTag(listId)};

        
        this.setState({
            tag : '',
            counter : this.state.counter + 1
        })       
    }

    handleChange = (event) =>{
        this.setState({
            tag : event.target.value
        });
    }
    clearText = () =>{
    
    }
    render(){
        return(
            <div className='tagsContainer' >
                    <div style={{float:'left'}}>
                        Tags:
                    </div>
                    <div>                           
                    <ul id='additionalTags' style={{listStyleType :'none'}}>
                    </ul>
                    </div>
                    <div style={{paddingLeft:40}}>
                        <input id='UserInputTag' type='text' value={this.state.tag} onChange={(e) => {this.handleChange(e)}}></input>
                        <button onClick={()=>{this.appendTag(this.state.tag)}}>Add Another Tag</button>
                    
                    </div>
            </div>
        );
    }
}
export default Tags