const languages = ["Nodejs", "Reactjs", "Vuejs", "Laravel"];
const colors = ["red", "skyblue", "violet", "yellow"]; 

const gettxtani = document.querySelector(".txtani");

// Generator Function 
// function* genfun() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const getgen = genfun();

// console.log(getgen.next().value); // 1
// console.log(getgen.next().value); // 2
// console.log(getgen.next().value); // 3
// console.log(getgen.next().value); //undefined
// console.log(getgen.next().value); // undefined

// console.log(getgen.next()); // {value : 1, done: false}
// console.log(getgen.next().value); // 2
// console.log(getgen.next().value); // 3

function* generator() {
    var idx = 0;

    while (true) {
        yield idx++;

        if(idx > 3){
            idx = 0;
        }
    }
}

function showwords(word) {
    // console.log(word);
    let x = 0;
    gettxtani.innerHTML = "";
    gettxtani.classList.add(colors[languages.indexOf(word)])

    let showintval = setInterval(function () {
        // gettxtani.innerHTML = word[0];
        // gettxtani.innerHTML = word[1];

        if (x >= word.length) {
            clearInterval(showintval);
            deletewords();
        } else {
            gettxtani.innerHTML += word[x];
            x++;
        }
    },500)
}

function deletewords() {
    let getword = gettxtani.innerHTML;
    let getlastidx = getword.length - 1;

    let delintval = setInterval(function () { 
        if (getlastidx >= 0) {
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0, gettxtani.innerHTML.length - 1);
            getlastidx--;
        } else {

            gettxtani.classList.remove(colors[languages.indexOf(getword)]);
            showwords(languages[gen.next().value]);
            clearInterval(delintval);
        }

    },500)
}

let gen = generator();
showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);

let gettxtlights = document.querySelectorAll('.text-light');

gettxtlights.forEach(function (gettxtlight) {
    let arrtexts = gettxtlight.textContent.split('');
    // console.log(arrtexts);

    gettxtlight.textContent = "";

    arrtexts.forEach(function (arrtext, idx) {
        let newem = document.createElement('em');
        newem.textContent = arrtext;
        newem.style.animationDelay = `${idx * .05}s`;

        gettxtlight.append(newem);
    })
})