import React from "react"

class Tags extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 1
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
    appendTag = () =>{      
        var localCounter  = this.state.counter;

        var additionalTags = document.getElementById('additionalTags');
        var childElement = document.createElement("li");
        childElement.setAttribute("id","li"+localCounter);

        //input box
        var input  = document.createElement("input");
        input.setAttribute("type","texts");
        childElement.appendChild(input);

        
        //Button
        var btn  = document.createElement("button");
        btn.innerHTML = 'REMOVE'+localCounter;
        btn.setAttribute("id","btn"+localCounter);
        //Appending elemnts
        childElement.appendChild(btn);
        additionalTags.appendChild(childElement);


        var listId = document.getElementById("btn"+localCounter).parentNode.id
        btn.onclick = ()=>{this.removeTag(listId)};

        
        this.setState({
            counter : this.state.counter + 1
        })       
    }

    render(){
        return(
            <div>
                Tags :
                <span>
                <ul id='additionalTags'>
                </ul>
                </span>
                <input type='text' ></input>
                <button onClick={this.appendTag}>Add Another Tag</button>
            </div>
        );
    }
}
export default Tags
