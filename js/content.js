

setTitileText("<h2>这是一篇不错的文章！</h2>"); //设置标题
setCreateTime("2019-10-26 11:10:00");



// 设置标题头文本
function setTitileText(str){
    document.getElementById("content_title_head_text").innerHTML = str;
}

//设置时间
// 2019-10-26 11:10:00
function setCreateTime(time){
    document.getElementById("content_create_time").innerHTML = time;
}