//OnClick function for the flex-array
function arrayClick(block_id, arr_id) {
    //Unselects children of array and selects the clicked element
    $(`#${arr_id}`).children(".array-block").removeClass("selected");
    $(`#${block_id}`).addClass("selected");

    //Disable other info elements and enables the corresponding info block
    let info = $(`#${arr_id}_info`);
    if (info.css("display") == "none")
        info.css("display", "flex");
    $(`#${arr_id}_info`).children(".array-click-text").css("display", "none");
    let info_block = $(`#${block_id.split("_")[0]}_text`);
    info_block.css("display", "flex");
}