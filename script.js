StarCnt=0;
class Star 
{
    constructor() {
	let TmpO0 = document.querySelector('.stars');
	let TmpO1 = document.querySelector('.star');
	this.parent = TmpO0;
	this.tag = TmpO1.cloneNode(true);
	StarCnt++;
	this.z=getRandomIntInclusive(0,800);
	this.Update();
	
	TmpO0.append(this.tag);
    }

    Update() {
        let speed = 100;
        this.z = this.z - speed;
        if(this.z < 1) {
		    this.x = getRandomIntInclusive(0,this.parent.clientWidth);
		    this.y = getRandomIntInclusive(0,this.parent.clientHeight);
		    this.z = this.parent.clientWidth / 2
            this.tag.style.width = `${1}px`;
            this.tag.style.height = `${1}px`;
        } 
        this.tag.style.width = `${this.tag.clientWidth + 3}px`;
        this.tag.style.height = `${this.tag.clientHeight +3}px`;
    }

    Refresh() 
    {
        this.tag.style.left=`${this.x}px`;
        this.tag.style.top=`${this.y}px`;

    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let stars = [];
for(let i = 0; i<20; i++) {
    stars[i] = new Star();
    stars[i].y = i * 30;
}


function launch(mas) {
    for(let i = 0; i<stars.length; i++) {
        stars[i].Update();
        stars[i].Refresh();
    }
}

setInterval(()=>{
    launch(stars);
},100);