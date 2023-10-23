
// Questions that will be asked

const quation = [

    {
        q: "What is capital of India?",

        a: [
            { text: "Gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
            { text: "Mumbai", isCorrect: false }
        ]

    },

    {
        q: "What is the capital of Gujarat",

        a: [
            { text: "Surat", isCorrect: false },
            { text: "Vadodara", isCorrect: false },
            { text: "Gandhinagar", isCorrect: true },
            { text: "Rajkot", isCorrect: false }
        ]
    },



    {
        q: "js stand for?",
        a: [
            { text: "java source", isCorrect: false },
            { text: "java script", isCorrect: true },
            { text: "jason script", isCorrect: false },
            { text: "jack script", isCorrect: false }
        ]
    }

]


let currquation = 0;
let score = 0;

function lord() {

    let qua = document.getElementById("qua");

    let opt = document.getElementById("opt");

    qua.innerHTML = quation[currquation].q;

    opt.innerHTML = ""

    for (let i = 0; i < quation[currquation].a.length; i++) {

        const creatediv = document.createElement("div");
        const createinput = document.createElement("input");
        const createlabel = document.createElement("label");

        createinput.type = "radio"
        createinput.name = "option"
        createinput.value = i

        createlabel.textContent = quation[currquation].a[i].text;


        creatediv.appendChild(createinput)
        creatediv.appendChild(createlabel)
        opt.appendChild(creatediv)

    }

}

lord()


function lordscore() {

    totalscore = document.getElementById("score");
    totalscore.innerHTML = `your score  ${score} out of ${quation.length}`


}

function nextquation() {


    if (currquation < quation.length-1) {
        currquation++
        lord()
    }
    else {
        document.getElementById("qua").remove();

        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        lordscore()
    }

}


function chakaws() {

    const selectedAns = parseInt(document.querySelector('input[name="option"]:checked').value);

    console.log(selectedAns)

    if (quation[currquation].a[selectedAns].isCorrect==true) {
        score++;
        console.log("Correct")
        nextquation()
    } else {
        nextquation()
    }
    
}

chakaws()









