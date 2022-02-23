let user = {
    name:'Karina',
    age:24,
    is24:true
}

let iterator =0
let num = 1;
let out = document.querySelector(".out");
let ol = document.createElement("ol");
ol.id = "ja"

out.append(ol);
function set(){
    
    
    let li2 = document.createElement("li");
    li2.id = "li" + num;
    li2.classList.add("id-")
    
    function iCHeck(){
        switch(iterator){
            case 0:
                user.name='Karina',
                user.age=24,
                user.is24=true
                iterator++;
                break;
            case 1:
                user.name ="Peter";
                user.age=25;
                user.is24=false;
                iterator++;
                break;
            case 2:
                user.name = "Vitaliy"
                user.age=35;
                user.is24=false;
                iterator++;
                break;
            case 3:
                user.name = "Lidiia";
                user.age=24;
                user.is24=true;
                iterator++;
                break;
            case 4: 
                iterator=0;
                break;
        }
    }
    
    iCHeck();
    li2.innerHTML=user.name + " " + user.age +" "+ user.is24;
    num++;
    ol.append(li2)
    



}