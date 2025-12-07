class Snow{    
    constructor(){
        this.box = document.getElementById('tr');
        this.tag = document.querySelector('.snow');
        this.obj = this.tag.cloneNode(true);
        this.y = 1;
        this.score = 1;
        this.obj.style.position = 'absolute';
        this.box.append(this.obj);
        this.Update();
    }

    Refresh(){
        this.obj.style.left = `${this.x}px`;
        this.obj.style.top = `${this.y}px`;
    }

    Update(){
        // this.obj.style.content = '❄';

        this.x= this.x + (Math.floor(this.y / 40) % 2 * 0.1) - (Math.floor(this.y / 60) % 2 * 0.1); // Доработать формулу икса
        this.y = this.y + (0.1*this.score);
        if (this.y > document.body.clientHeight) {
            this.y -= this.y;
        }
    }
}

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function SearchForPopup(code) {

    if (phrases[code-1]) {
        document.getElementById('head').innerText = phrases[code-1][0];
        document.getElementById('modal-text').innerText = phrases[code-1][1];
        document.getElementById('modal').showModal();
    }
}

function launch() {
    for (let i = 0; i < snowBox.length; i++){
        snowBox[i].Update();
        snowBox[i].Refresh();
    }
}

let snowBox = new Array;
for (let i = 0; i<40; i++){
    snowBox[i] = new Snow();
    snowBox[i].x = getRandomIntInclusive(20, document.querySelector('.abs').clientWidth - 20)
    snowBox[i].score = (i+8)/10;
}

setInterval(()=>{
    launch()
})


const phrases = [
    ['Китайский Новый год',
        `Китайский Новый год, или Праздник весны (Чуньцзе) — главный традиционный праздник в Китае и странах Восточной Азии. 
        Его дата рассчитывается по лунному календарю, выпадая на период между 21 января и 21 февраля. 
        Празднования длятся 15 дней и завершаются Фестивалем фонарей.История праздника насчитывает около трёх тысяч лет. 
        Считается, что традиция зародилась во времена династии Шан когда в начале года люди приносили жертвы богам и предкам.`],
    ['Традиции',
        `•В Китае принято украшать дома в красных цветах: фонарики, вывески, парные надписи дуйцзы.
        •Запуск фейерверков и петард символизирует изгнание злы духов и привлечение удачи
        •В день праздника или сразу после него родственники и друзья собираются за ужином за большим столом, а так же дарят друг-другу подарки`
    ],
    ['Блюда',
        `В праздник на стол ставят блюда, которые несут символическое значение. Например, цзяоцзы (китайские пельмени) символизируют богатство и процветание, а рыба – изобилие`
    ],
    ['Подарки',
        `Традиционный подарок на китайский новый год – красный конверт с деньгами (хунбао). Их дарят детям и молодёжи как символ благополучия и удачи. Также популярны подарки в виде фруктов, например мандаринов, и сладостей. Часы и ножи дарить не стоит – они ассоциируются с разлукой`
    ],
    ['Символ',
        `Фонарики в Китае дарят защиту от тьмы и гармонию. Красный цвет тоже не случаен, он символизирует радость, защиту и процветание. 
        Вывесить красный у двери значит пожелать дому удачи, а гостям – тепла. 
        Фонарик в форме рыбки считается одним из самых значимых – слово «рыба» и «удача» на китайском произносятся одинаково.`
    ]
];
