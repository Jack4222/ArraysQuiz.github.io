const Ans = ["B","A","A","C","D"]
let QT = ["NA","NA","NA","NA","NA"]
var q =0;
var w = ""
let fs =0;
const  SDTQ = ["What color is the ocean?" , "What does HTTPS stand for?", "What is the World population?" ,"whos is the one who KNOCKS?", "How good of a teacher is Mrs.Kaur?" ]

const SDTA = [ ["Green","Blue","Purple","Red",],
 ["Hypertext Transfer Protocol Secure", "Hyperlink Transport Protocol Safe", "Hype Train Portal Station","Hyper Translate Protocol safe",],
["8 Billion", "9 Million", "7.8 Billion" , "7.9 Million",],
["Me", "You", "Walter White", "Jongkuk",],
["eh ok", "pretty good", "bad", "THE BEST!"]
]
let wgr = true;
function A(Check){
    if(wgr == true){
QT[q] = Check
document.getElementById('A').style.backgroundColor = "white"
document.getElementById('B').style.backgroundColor = "white"
document.getElementById('C').style.backgroundColor = "white"
document.getElementById('D').style.backgroundColor = "white"
document.getElementById(Check).style.backgroundColor = "grey"

w = Check
    }
else{
}
}
function next(NP){
    document.getElementById('A').style.backgroundColor = "white"
    document.getElementById('B').style.backgroundColor = "white"
    document.getElementById('C').style.backgroundColor = "white"
    document.getElementById('D').style.backgroundColor = "white"

if(NP == "next"){
    q++
    if(q ==0){
        document.getElementById('prev').style.display ="none"
        }
        else{
            document.getElementById('prev').style.display ="block"
        }
    if(q == 5){
        wgr = false
        document.getElementById('next').style.display = "none"
        document.getElementById('prev').style.display = "none"
        document.getElementById('final').style.display ="block"
        for(i=0;i<5;i++){
        if(QT[i]==Ans[i]){
            fs++
        }
            }
            document.getElementById('Y').innerHTML= "Score: " + fs +"/5"
        }
        
        else{
            if(QT[q] == "NA"){}
        
    else{
    document.getElementById(QT[q]).style.backgroundColor = "grey"
    }
    }
}

else{
    document.getElementById(w).style.backgroundColor = "white"
    q--
    document.getElementById(QT[q]).style.backgroundColor = "grey"
}
    document.getElementById('question').innerHTML =SDTQ[q]
    document.getElementById('A').innerHTML = SDTA[q][0]
    document.getElementById('B').innerHTML = SDTA[q][1]
    document.getElementById('C').innerHTML = SDTA[q][2]
    document.getElementById('D').innerHTML = SDTA[q][3]
    }