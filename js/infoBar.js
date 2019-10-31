var moveAdvertLoopDir = 0;    //移动方向（0左边，1右边）
var moveAdvertLoopVal = 0;    //移动值
var moveAdvertLoopSpeed = 30; //移动速度（ms）

initAdvertLoop();

//初始化
function initAdvertLoop(){
    var img = document.getElementsByClassName("infoBar_advert_img");
    for(var i=0; i<img.length; i++){
        img[i].style.left = i*234+"px";
    }

    setInterval(moveAdvertLoop, moveAdvertLoopSpeed);
}

//移动
function moveAdvertLoop(){
    moveAdvertLoopVal++;
    if(moveAdvertLoopVal == 234*3){
        moveAdvertLoopVal = 0;
    }

    var img = document.getElementsByClassName("infoBar_advert_img");

    if(moveAdvertLoopDir == 0){
        for(var i=0; i<img.length; i++){
            img[i].style.left = (i*234)-moveAdvertLoopVal+"px";
        }
    }else{
        
    }
}