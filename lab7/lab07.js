const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];


let item1 = document.createElement("div");
item1.className = "item";
document.getElementsByClassName("justify")[0].appendChild(item1);

let tips = document.createElement("h4");
let tipContent = document.createTextNode("Genre :"+" " +works[0].tips);
tips.appendChild(tipContent);
item1.appendChild(tips);

let innerBox1 = document.createElement("div");
innerBox1.className = "inner-box";
item1.appendChild(innerBox1);

let author = document.createElement("h3");
author.innerHTML = works[0].author;
innerBox1.appendChild(author);
author.style.display = "inline";

let lifeTime = document.createElement("h5");
lifeTime.innerHTML = "lifetime:" + works[0].lifetime;
innerBox1.appendChild(lifeTime);
lifeTime.style.display = "inline";
lifeTime.style.marginLeft = "1em";

let innerBox2 = innerBox1.cloneNode(true);
let content = document.createTextNode("Popular Photos");
innerBox2.firstChild.replaceChild(content,innerBox2.firstChild.firstChild);
innerBox2.removeChild(innerBox2.childNodes[1]);
item1.appendChild(innerBox2);
addPhotos(innerBox2,0);

function addPhotos(innerBox,j) {
    let div = document.createElement("div");
    innerBox.appendChild(div);

    function addPhoto(node,str) {
        let photo = document.createElement("img");
        photo.src = str;
        photo.className = "photo";
        node.appendChild(photo);
    }
    for (let i = 0; i < works[j].photos.length; i++) {
        addPhoto(div,works[j].photos[i])
    }

}

let button1 = document.createElement("button");
button1.innerHTML = "Visit";
item1.appendChild(button1);

function cloneItem(j)  {
    let item2 = item1.cloneNode(true);
    item2.childNodes[0].replaceChild(document.createTextNode("Genre :"+" " +works[j].tips),item2.childNodes[0].firstChild);
    item2.childNodes[1].firstChild.replaceChild(document.createTextNode(works[j].author),item2.childNodes[1].firstChild.firstChild);
    item2.childNodes[2].removeChild(item2.childNodes[2].childNodes[1]);//div移掉
    addPhotos(item2.childNodes[2],j);
    document.getElementsByClassName("flex-container justify")[0].appendChild(item2);
}
cloneItem(1);
cloneItem(2);
cloneItem(3);
