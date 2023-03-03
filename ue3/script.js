function addItem() {
    e = $("#item").val();
    $("#item").val(""); //3)
    $("ol").append("<li>" + e + "</li>");
    console.log("element added");
}
function fadeItemOut(){
    $(this).fadeOut();
}
let isListDisplayed = true;
function toggleList(){
    if(isListDisplayed){
        $("#list").slideUp("slow"); // 5)
        isListDisplayed = false;
        $("#toggleList").text("Show List");
    }else{
        $("#list").slideDown("slow"); // 5)
        isListDisplayed = true;
        $("#toggleList").text("Hide List");
    }
}

$(executeJquery());

function executeJquery(){
    $("#add").on("click", addItem);
    $(document).on("click","li", fadeItemOut); //1)
    $("#list").sortable(); //2)
    $("#toggleList").on("click",toggleList)
}

