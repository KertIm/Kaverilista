var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 x++;
 document.getElementById("text1").value = "";
}

function display_array()    //change to always show on screen
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
    var num = y + 1;
     e +=  + num + ".  " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

function remove_element()   //use pop or shift?   -   now removes the index typed and it stays on the list as undefined
{
    var rem = document.getElementById("text1").value;
    delete array[rem];
    //const test = arrays.slice(rem);
}
function sort_element()
{
    array.sort();
}
document.getElementById("testing").innerHTML = "Hello JavaScript";

    var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
    var num = y + 1;
     e +=  + num + ".  " + array[y] + "<br/>";
   }
   document.getElementById("demo").innerHTML = e;

