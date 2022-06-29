
function yolochka(){
    let text_1 = "Hello world"
    console.log (text_1)
}
yolochka ()

function yolochka_1(q1,q2){
    let result = q1+q2
    console.log ('Sum1 = ', result)
}
yolochka_1(5,10)

function yolochka_2(q1,q2){
    console.log (`Sum2 =  ${q1+q2} `)
}
yolochka_2(5,12)

function yolochka_3(q1,q2){
    console.log ('Sum3 = ', q1+q2 )
}
yolochka_3(5,15)

function yolochka_4(q1,q2){
    if (q1>4){
        let res = q2*10
        console.log ('Sum4 = ', res )
    }
}
yolochka_4(5,15)

function yolochka_5 (...arguments){
    let result = 0
    for (let arg of arguments){
        result += arg //+= добавить и присвоит
    }
    console.log('Sum5 = ',result)
}
yolochka_5(5,15,20,-100)

names = ['Alex','Inna','Vadim','Anatoliy','Nataliya']

function names_editor (person_name){
    let name_1 = "Hello "+ person_name + " !"
    console.log(name_1)
}

for (let i=0; i<names.length; i++){
    names_editor (names[i])
}

let t1 = 10
let t2 = 20
let t3 = 35

let summ = (n1,n2) => {
    console.log(`Summ = ${n1+n2}`)
}
summ (t1,t3)

function yolochka_6 (){
}
yolochka_6.prototype.method_1 = function(){
    console.log ('method_1')
}
yolochka_6.prototype.method_2 = function(t1,t2){
    console.log ('method_2 =',`${t1+t2}`)
}
let  wood = new yolochka_6 ()
wood.method_1()
wood.method_2(10,20)

let t4 = 20
let f3 = (t4>10) ?
    (tt1,tt2) => console.log (tt1+tt2):
    (tt1,tt2) => console.log (tt1-tt2);
f3 (10,30)