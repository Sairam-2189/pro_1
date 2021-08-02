let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

var array1=["hii"]; 

addToDoButton.addEventListener('click',function(){
    
        if(inputField.value.length!=0){

            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerHTML = inputField.value;    

            if(array1.indexOf(paragraph.innerHTML) !== -1){
                
                alert("ENTERED WORK IS ALREADY PRESENT.");

            }

            else{

                array1.push(paragraph.innerHTML); 
                toDoContainer.appendChild(paragraph);
                inputField.value="";
                var b=document.createElement('button');
                b.innerHTML = "delete";
                b.style.float="right";
                b.style.backgroundColor="red";
                b.style.color="white";
                paragraph.appendChild(b);

                b.addEventListener('click',function(){
                    
                    var k=paragraph.innerHTML;
                    var l=array1.indexOf(paragraph.innerHTML);
                    array1.splice(l,1);
                    toDoContainer.removeChild(paragraph);
                    toDoContainer.removeChild(b);

                })  

            }

        }

        else{

            alert("please enter the work to be added in the TO_DO LIST");

        }

})
