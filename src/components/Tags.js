import React from "react"
import AdditionalTag from './AdditionalTag'

class Tags extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 1
        }
        this.removeTag = this.removeTag.bind(this);
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

            additionalTagId.removeChild(additionalTagId.childNodes[index])
            // if (additionalTagId.firstChild.id===btnId) {
            //     alert(btnId)
            // }

            // for(let i=1;i<=childLength;i++){

            // }
            
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
        
        childElement.appendChild(btn);
        additionalTags.appendChild(childElement);


        var listId = document.getElementById("btn"+localCounter).parentNode.id
        btn.onclick = ()=>{this.removeTag(listId)};

        
        this.setState({
            counter : this.state.counter + 1
        })

       
    }

    render(){
        //let additionalTag = this.state.tags;
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

//Trial 1

// render(){
//     let additionalTag = this.state.tags;
//     return(
//         <div>
//             Tags {this.state.counter}:
//             <div>{additionalTag}</div>
//             <input type='text' ></input>
//             <button onClick={()=>{this.setState({counter:this.state.counter+1});this.appendTag();}}>Add Another Tag</button>
//         </div>
//     );
// }


//Trial 2
// render(){
//     //let additionalTag = this.state.tags;
//     return(
//         <div>
//             Tags {this.state.counter}:
//             <span>
//             <ul>
//                 {
//                     this.state.tags.map((tag,i)=>{
//                     return(<li key={i}>{tag}</li>)
//                     })
//                 }
//             </ul>
//             </span>
//             <input type='text' ></input>
//             <button onClick={()=>{this.setState({counter:this.state.counter+1},()=>{this.appendTag()});}}>Add Another Tag</button>
//         </div>
//     );