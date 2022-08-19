var clicks = 0;
var box_id = document.getElementById("box");
var count_id = document.getElementById("count");
function print_clicks()
{
    console.log("Box Clicked ",++clicks," times");
    count_id.innerText = clicks;
}
box_id.addEventListener('click',print_clicks);