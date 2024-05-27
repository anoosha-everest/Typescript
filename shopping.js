var inputElement = document.getElementById('nameInput');
var items = [];
inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        var inputElement_1 = document.getElementById("nameInput");
        var inp = inputElement_1.value;
        inp = inp.trim();
        if (inp.length == 0) {
            alert("Arey yaar..." + "\n" + "Enter an item first😉");
        }
        else {
            var flag = false;
            var inp1 = inp.toLowerCase();
            for (var i = 0; i < items.length; i++) {
                var inp2 = items[i].item;
                inp2 = inp2.toLowerCase();
                if (inp2 == inp1 && items[i].del_status == false) {
                    alert("Oops..." + "\n" + "Item already exist");
                    flag = true;
                }
            }
            if (flag == false) {
                var itm = new Itemlist(false, false, inp);
                items.push(itm);
                renderObjectList(itm);
            }
            inputElement_1.value = "";
            inputElement_1.placeholder = "New item...";
        }
    }
});
function renderObjectList(object) {
    var myList = document.getElementById('list-item');
    var li = document.createElement("li");
    li.classList.add("item");
    li.textContent = object.getItem();
    var span = document.createElement("span");
    span.classList.add("close");
    var timesSign = document.createTextNode("X");
    li.addEventListener("click", function () {
        var a = object.done_status;
        object.set_done_status(!a);
        this.classList.toggle("marked");
        updateCounts();
        var hide = document.getElementById('hide');
        if (hide.textContent == "show all items" && this.classList.contains("marked")) {
            hideItems();
        }
    });
    span.addEventListener('click', function () {
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
var Itemlist = /** @class */ (function () {
    function Itemlist(del_status, done_status, item) {
        this.del_status = false;
        this.done_status = false;
        this.item = item;
    }
    Itemlist.prototype.getItem = function () {
        return this.item;
    };
    ;
    Itemlist.prototype.set_del_status = function (value) {
        this.del_status = value;
    };
    ;
    Itemlist.prototype.set_done_status = function (value) {
        this.done_status = value;
    };
    ;
    return Itemlist;
}());
function updateCounts() {
    var shoppingList = document.getElementById('list-item').getElementsByTagName('li');
    var markedCount = 0;
    var unmarkedCount = 0;
    for (var i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].classList.contains('marked')) {
            markedCount++;
        }
        else {
            unmarkedCount++;
        }
    }
    document.getElementById('marked-Count').textContent = markedCount.toString();
    document.getElementById('unmarked-Count').textContent = unmarkedCount.toString();
}
var hid = false;
var hide = document.getElementById('hide');
hide.addEventListener("click", function () {
    hid ? showItems() : hideItems();
});
function hideItems() {
    var shoppingList = document.getElementById('list-item').getElementsByTagName('li');
    hide.innerHTML = "<b>show all items</b>";
    for (var i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].classList.contains('marked')) {
            shoppingList[i].style.display = "none";
        }
        else {
            shoppingList[i].style.display = "block";
        }
    }
    hid = true;
}
function showItems() {
    var shoppingList = document.getElementById('list-item').getElementsByTagName('li');
    hide.innerHTML = "<b>Hide marked</b>";
    for (var i = 0; i < shoppingList.length; i++) {
        shoppingList[i].style.display = "block";
    }
    hid = false;
}
