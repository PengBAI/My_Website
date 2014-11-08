var curIndex=0;
var timeInterval=3000; 
var arr=new Array();
arr[0]="images/cv3.png";
arr[1]="images/cv2.png";
arr[2]="images/cv1.png";
setInterval(changeImg,timeInterval);
function changeImg()
{
    var obj=document.getElementById("myimage");
    if (curIndex==arr.length-1) 
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    obj.src=arr[curIndex];
}