let allFacts = ['Ежегодно в Азии около четырех миллионов кошек употребляют в пищу',
                'Кошки тратят на сон в среднем две трети дня, то есть кот которому девять лет, провел только три года вне сна',
                'Учеными доказано, что кошки в отличие от собак не любят сладкое',
                'Сердцебиение кошки достигает 140 ударов в минуту. Это в два раза больше, чем сердцебиение у человека',
                'Кошки не имеют ключицы, поэтому они легко пролазят в маленькие отверстия',
                'В своем теле кошка имеет примерно 240 костей',
                'Кошки более чувствительны к вибрации, чем человек.',
                'Взрослая кошка имеет 30 зубов, а котята – 26',
                'Существуют мнения, что кошки чувствуют больные органы человека и способны их вылечить.',
                'Кошки определяют температуру пищи носом, чтобы не обжечься',
                'У домашних кошек зачастую хвост расположен вертикально, а у диких, как правило, он опущен.',
                'Если кошка трется головой о человека, то это значит, что она ему доверяет',
                'В Японии существует кот-кафе, в котором можно хорошо провести время с котами',
            ]



function count(){
    for(let i=1; i<=3; i++)
    {
        alert("Current Number - " + i);
    }
}
function RandomFacts(){
    let randNum = Math.floor(Math.random() * Math.floor(allFacts.length));
    document.getElementById("Facts").innerHTML = allFacts[randNum];
}
