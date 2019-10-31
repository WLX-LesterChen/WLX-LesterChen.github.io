
//发表评论
function publishDiscuss(){
    var str = document.getElementById("discussion_input").value;

    if(str == "") return ;

    //头像
    var headPic = document.createElement("img");
    headPic.src = "res/img/广告1.jpg";

    var td1 = document.createElement("td");
    td1.id = "discuss_floor_headPic";
    td1.appendChild(headPic);
    //名字
    var name = document.createElement("font");
    name.innerText = "LesterChen";
    name.id = "discuss_floor_name";

    //时间
    var time = document.createElement("font");
    time.innerText = "1年前";
    time.id = "discuss_floor_time";

    //楼层
    var floor = document.createElement("font");
    floor.innerText = "#1楼";
    floor.id = "discuss_floor_num";

    //举报按键
    var btAccuse = document.createElement("font");    
    btAccuse.id = "discuss_bt_accuse";
    btAccuse.innerText = "举报";
    //回复按键
    var btReply = document.createElement("font");     
    btReply.id = "discuss_bt_reply";
    btReply.innerText = "回复";

    //点赞按键
    var imgGiveLike = document.createElement("img");     
    imgGiveLike.id = "discuss_img_giveLike";
    imgGiveLike.src = "res/img/点赞1.png";
    imgGiveLike.onclick = onGiveALikeDiscuss;

    //添加内容
    var content = document.createElement("font");
    content.innerText = "\n"+str;
    content.id = "discuss_floor_content";

    var td2 = document.createElement("td");
    td2.appendChild(name);
    td2.appendChild(time);
    td2.appendChild(floor);
    td2.appendChild(btAccuse);
    td2.appendChild(btReply);
    td2.appendChild(imgGiveLike);
    td2.appendChild(content);

    var tr1 = document.createElement("tr");
    tr1.id = "discuss_floor";

    tr1.appendChild(td1);
    tr1.appendChild(td2);

    //分割线
    var div = document.createElement("div");
    div.id = "discuss_cutLine";
    var td3 = document.createElement("td");
    td3.colSpan = "2";  //合并列数
    td3.appendChild(div);
    var tr2 = document.createElement("tr");
    
    tr2.appendChild(td3);

    document.getElementById("discussion_list").appendChild(tr1);
    document.getElementById("discussion_list").appendChild(tr2);

    document.getElementById("discussion_input").value = ""; //清空文本输入框内容
}

//点击输入
function onclickDiscussInput(){
    var x = document.getElementById("publish_discuss_bt");
    x.style.visibility = "visible";
}

//点赞触发
function onGiveALikeDiscuss(){
    var img = new Image();
    img.src = "res/img/点赞1.png";  // 设置相对路径给Image, 此时会发送出请求

    if(this.src.indexOf(img.src, 0) != -1){
        this.src = "res/img/点赞2.png";
    }else{
        this.src = "res/img/点赞1.png";
    }
}