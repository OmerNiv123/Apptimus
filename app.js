let banners = [];

function createNewBanner(element_id,redirect_link,banner_img){
    
    let alink = document.createElement('a')
    alink.href = redirect_link    
    
    let banImg = document.createElement('img');    
    banImg.src = banner_img 
    banImg.width = 320    
    banImg.height = 320 

    alink.appendChild(banImg)
    var banList = document.getElementById(element_id) 
    banList.appendChild(alink)
    
    banners.push(
        {
            href: redirect_link,
            src: banner_img,
            width: 320,
            height: 320
        }
    )
    
}


function savetoStorage(){
    if(localStorage.getItem('banners-data') == null){
        localStorage.setItem('banners-data',JSON.stringify([]));
    }

    var old_data = JSON.parse(localStorage.getItem('banners-data')); 
    banners.forEach(element => {
        console.log(element)
        old_data.push(element)
    });

    localStorage.setItem("banners-data", JSON.stringify(old_data));
    banners =[];
    alert("Saved successfully to the local storage")    
}

function clearStorage(){
    localStorage.removeItem("banners-data");    
    document.getElementById("banners-list").innerHTML = "";
}

                    
async function onLoadFunc(){

    var banlst = document.getElementById("banners-list") 
    
    let data = JSON.parse(localStorage.getItem('banners-data'));

    if(data != null) {
        data.forEach(element => {
            let a = document.createElement('a')
            a.href = element.href
            let im = document.createElement('img')
            im.src = element.src
            im.width = element.width
            im.height = element.height
            a.appendChild(im)
            banlst.appendChild(a)
        });
    }

}             
