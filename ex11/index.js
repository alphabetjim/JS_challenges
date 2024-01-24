let imageSourceInfo = [];
imageSourceInfo.push({source:"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width:"240", height:"160"});
imageSourceInfo.push({source:"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width:"320", height:"195"});
imageSourceInfo.push({source:"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width:"500", height:"343"});

function showImage() {
    let imageDiv = document.getElementById('image-div');
    // set width
    imageDiv.style.width="100%";
    // generate random number
    let randInt = Math.floor(Math.random()*imageSourceInfo.length);
    let imgInPage = document.createElement('img');
    imgInPage.src = imageSourceInfo[randInt].source;
    imgInPage.height = imageSourceInfo[randInt].height;
    imgInPage.width = imageSourceInfo[randInt].width;
    // Clear any existing images
    if (imageDiv.children.length>0) {
        for (let child of imageDiv.children) {
            imageDiv.removeChild(child);
        }
    }
    // Display image
    imageDiv.appendChild(imgInPage);
}