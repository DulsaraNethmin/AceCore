window.onload=xxx;
var images_for_banner=["images/banner/banner2.png","images/banner/gtx3090.jpg","images/banner/macbook.jpg","images/banner/msi-banner.jpg"];
var i=0;
function xxx()
{
    var x=document.getElementById("banner_image_id");
    if(i==images_for_banner.length)
    {
        i=0;
        x.src=images_for_banner[i];
        i++;
        setTimeout(xxx,2000);
    }   
    else
    {
        x.src=images_for_banner[i];
        i++;
        setTimeout(xxx,2000);
    }
}


