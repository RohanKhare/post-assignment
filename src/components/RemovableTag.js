import React from 'react'

class RemovableTag extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            counter : 1
        }
    }
    removeTag(listId){ 
        let additionalTagId = document.getElementById('additionalTags');
 
        if(additionalTagId.hasChildNodes()){
             var index;
             var childLength = additionalTagId.childElementCount;
             var firstChildElement = additionalTagId.firstElementChild;
             var childElement = firstChildElement
             var nextChildElement;
 
             for(let i=1; i<=childLength;i++){
                 if (firstChildElement.id === listId) {
                     index = 0;
                     break;
                 }else{     
                     nextChildElement = childElement.nextElementSibling;
                     if (nextChildElement.id === listId) {
                         index = i;
                         break;
                     }
                     childElement = nextChildElement;
                 }
             }
             additionalTagId.removeChild(additionalTagId.childNodes[index]);            
        }
     }

    appendElement(inputTag){
        
        let localCounter =this.state.counter;

        let additionalTags = document.getElementById('additionalTags');
        var childElement = document.createElement("li");
        childElement.setAttribute("id","li"+localCounter);
        
        //input box
        var input  = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("value",inputTag);
        

        //Button
        var btn  = document.createElement("button");
        btn.innerHTML = 'REMOVE';
        btn.setAttribute("id","btn"+localCounter);
       
        
        //Appending elemnts
        childElement.appendChild(input);
        childElement.appendChild(btn);
        additionalTags.appendChild(childElement);
        var listId = document.getElementById("btn"+localCounter).parentNode.id
        btn.onclick = ()=>{this.removeTag(listId)};
        
        this.setState({
            counter : this.state.counter + 1
        })
    }


    render(){
        //this.appendElement(this.props.inputTag);
        return(
                <ul id='additionalTags' style={{listStyleType :'none'}}>
                </ul>
        );
    }
}
export default RemovableTag



// getRemovableTag =(inputTag) =>{
//     return(
//         <RemovableTag inputTag={inputTag} onClick={this.removeTag} />
//     );
// }
// appendTag = (inputTag) =>{
//     let additionalTags = document.getElementById('additionalTags');
    
//    let childElement = this.getRemovableTag(inputTag);
   
//     additionalTags.append({childElement});
// }
