menu_list_array=["Cheese Burst pizza",
            "Mushroom pizza",
        "Chicken tikka pizza",
    "VEG Pizza",
"Paneer pizza"];


function get_menu{
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0<menu_list_array.length;i++){
        htmldata=htmldata='<li>' =menu_list_array[i] +'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    var item =document.getElementById("add_item").value;
    menu_list_array.push(Item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="cards>'+'<img src="Images/pizzalmg.png"/>'=menu_list_array[i]='</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;
}