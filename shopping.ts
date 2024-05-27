var inputElement = document.getElementById('nameInput') as HTMLElement;
let items: { item: string, del_status:boolean,done_status:boolean}[]=[] ;
inputElement.addEventListener('keydown', (event) => {
       
     if (event.key === 'Enter') {
        const inputElement = document.getElementById("nameInput") as HTMLInputElement;
       var inp=inputElement.value;
       inp=inp.trim();
       if(inp.length==0){alert("Arey yaar..."  +"\n"+"Enter an item first😉");}
       else{
        var flag=false;
        var inp1=inp.toLowerCase();
       for(let i=0;i<items.length;i++){
        var inp2=items[i].item;
        inp2=inp2.toLowerCase();
        if(inp2==inp1 && items[i].del_status==false){
          alert("Oops..."+"\n"+"Item already exist")
          flag=true;
        }
       }
       if(flag==false){
        let itm:Itemlist=new Itemlist(false,false,inp);
        items.push(itm);
        renderObjectList(itm);
       }
       inputElement.value="";
       inputElement.placeholder="New item...";
       
       }
    }
});


function renderObjectList(object:Itemlist) {
               var myList= document.getElementById('list-item') as HTMLElement;
                
                var li = document.createElement("li") as HTMLLIElement;
                li.classList.add("item");
                li.textContent = object.getItem(); 
                var span = document.createElement("span") as HTMLSpanElement;
                span.classList.add("close");
                var timesSign = document.createTextNode("X");
                
                li.addEventListener("click", function() {
                    let a=object.done_status;
                    object.set_done_status(!a);
                    this.classList.toggle("marked");
                    updateCounts();
                    var hide=document.getElementById('hide') as HTMLElement;
                    if(hide.textContent=="show all items" && this.classList.contains("marked")){
                      hideItems();
                    }
                  });
               
                  span.addEventListener('click', function() {
                    
                    object.set_del_status(true);
                    li.remove();
                    updateCounts();
                });
                span.appendChild(timesSign);
                
                li.appendChild(span);

                myList.appendChild(li);
                console.log(items);

                updateCounts();

                
  }


class Itemlist{
    del_status:boolean;
    done_status:boolean;
    item:string;
   constructor(del_status:boolean,done_status:boolean,item:string){
        this.del_status=false;
        this.done_status=false;
        this.item=item;
   }
    
    getItem():string {
      return this.item;
    };
    set_del_status(value:boolean) {
        this.del_status= value; 
      };
    
      set_done_status(value:boolean) {
        this.done_status=value;
      };
}

function updateCounts() {
    const shoppingList= document.getElementById('list-item')!.getElementsByTagName('li');

      let markedCount = 0;
      let unmarkedCount = 0;

      for (let i = 0; i < shoppingList.length; i++) {
          if (shoppingList[i].classList.contains('marked')) {
              markedCount++;
          } else {
              unmarkedCount++;
          }
      }

      document.getElementById('marked-Count')!.textContent = markedCount.toString();
      document.getElementById('unmarked-Count')!.textContent = unmarkedCount.toString();
  }
var hid=false;

var hide=document.getElementById('hide')!;
  hide.addEventListener("click",function(){
    hid?showItems():hideItems();
  });
function hideItems(){

        const shoppingList = document.getElementById('list-item')!.getElementsByTagName('li');
        hide.innerHTML="<b>show all items</b>";
        for (let i = 0; i < shoppingList.length; i++) {
          if (shoppingList[i].classList.contains('marked')) {
            shoppingList[i].style.display="none";
          } else {
            shoppingList[i].style.display="block";
          }
      }
      hid=true;
}
function showItems(){
        const shoppingList = document.getElementById('list-item')!.getElementsByTagName('li');
        hide.innerHTML="<b>Hide marked</b>";
        for (let i = 0; i < shoppingList.length; i++) {
          
            shoppingList[i].style.display="block";
          
      }
      hid=false;
}