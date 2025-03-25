// js...

let title = document.getElementById('title');
let infobox = document.getElementById('infobox');

let lll_cont_1 = document.getElementById('bg_lll_cont_1');
let lll_cont_2 = document.getElementById('bg_lll_cont_2');
let l = document.getElementsByClassName('bg_l');

let finalform = document.getElementById('finalform');

let game = document.getElementById('game');
let playbtn = document.getElementById('playbtn');
let main = document.getElementById('main');
let secondary = document.getElementById('secondary');

let credits = document.getElementById('credits');

let count = 0;



// vari metodi

function makeItScroll(div) {
    let delay = 0;

    for (let i = 1; i < 10; i++) {
        setTimeout(() => {
            div.style.transform = `scaleY(0.0${i})`;
        }, delay);
        delay += 10;
    }

    for (let j = 10; j < 100; j++) {
        setTimeout(() => {
            div.style.transform = `scaleY(0.${j})`;
        }, delay);
        delay += 10;
    }
}

function flashIt(div, content1, content2) {
    let delay = 0;

    for (let k = 99; k > 9; k--) {
        setTimeout(() => {
            div.style.transform = `scaleY(0.${k})`;
        }, delay);
        delay += 10;
    }

    for (let n = 9; n > 0; n--) {
        setTimeout(() => {
            div.style.transform = `scaleY(0.0${n})`;
        }, delay);
        delay += 10;
    }

    setTimeout(() => {
        
        if (count % 2 != 0) {
            div.textContent = content1;
        }
        else if (count % 2 == 0) {
            div.textContent = content2;
        }
        
    }, delay);

    for (let i = 1; i < 10; i++) {
        setTimeout(() => {
            div.style.transform = `scaleY(0.0${i})`;
        }, delay);
        delay += 10;
    }

    for (let j = 10; j < 100; j++) {
        setTimeout(() => {
            div.style.transform = `scaleY(0.${j})`;
        }, delay);
        delay += 10;
    }
    
}

function showLeaderboard() {

    const arrowanddirectionaltext1 = document.createElement('div');
    arrowanddirectionaltext1.className = 'gm_arrowanddirectionaltext';
    arrowanddirectionaltext1.id = 'arrowanddirectionaltext1';
    arrowanddirectionaltext1.style.bottom = '25px';
    arrowanddirectionaltext1.style.right = '25px';

    const arrow1 = document.createElement('img');
    arrow1.className = 'gm_arrow';
    arrow1.id = 'arrow1';
    arrow1.setAttribute('src', './right-chevron.png');

    const directionaltext1 = document.createElement('div');
    directionaltext1.className = 'gm_directionaltext';
    directionaltext1.id = 'directionaltext1';
    directionaltext1.textContent = 'Scores';


    const arrowanddirectionaltext2 = document.createElement('div');
    arrowanddirectionaltext2.className = 'gm_arrowanddirectionaltext';
    arrowanddirectionaltext2.id = 'arrowanddirectionaltext2';
    arrowanddirectionaltext2.style.bottom = '25px';
    arrowanddirectionaltext2.style.left = '25px';

    const arrow2 = document.createElement('img');
    arrow2.className = 'gm_arrow';
    arrow2.id = 'arrow2';
    arrow2.setAttribute('src', './right-chevron.png');
    arrow2.style.transform = 'scaleX(-1)';

    const directionaltext2 = document.createElement('div');
    directionaltext2.className = 'gm_directionaltext';
    directionaltext2.id = 'directionaltext2';
    directionaltext2.textContent = 'Back';


    const effleaderboard = document.createElement('div');
    effleaderboard.className = 'gm_effleaderboard';
    effleaderboard.id = 'effleaderboard';

    if (listapunteggi.length > 0) {

        effleaderboard.style.justifyContent = 'flex-start';

        for (let i = 0; i < listapunteggi.length; i++) {
            const record = listapunteggi[i];

            const effleaderboard_row = document.createElement('div');
            effleaderboard_row.className = 'gm_effleaderboard_rows';
            effleaderboard_row.id = `riga n.${i}`;
    
            effleaderboard.appendChild(effleaderboard_row);
    
            const l1 = document.createElement('div');
            l1.className = 'gm_l';
            l1.id = `l n.${i}.1`;
            l1.textContent = '|';
    
            const effleaderboard_row_record1 = document.createElement('div');
            effleaderboard_row_record1.className = 'gm_effleaderboard_rows_records';
            effleaderboard_row_record1.id = `record n.${i}.1`;
            effleaderboard_row_record1.textContent = `nome: ${record[0]}`;
    
            const l2 = document.createElement('div');
            l2.className = 'gm_l';
            l2.id = `l n.${i}.2`;
            l2.textContent = '|';
    
            const effleaderboard_row_record2 = document.createElement('div');
            effleaderboard_row_record2.className = 'gm_effleaderboard_rows_records';
            effleaderboard_row_record2.id = `record n.${i}.2`;
            effleaderboard_row_record2.textContent = `punteggio: ${record[1]}`;
    
            const l3 = document.createElement('div');
            l3.className = 'gm_l';
            l3.id = `l n.${i}.3`;
            l3.textContent = '|';
    
            effleaderboard_row.appendChild(l1);
            effleaderboard_row.appendChild(effleaderboard_row_record1);
            effleaderboard_row.appendChild(l2);
            effleaderboard_row.appendChild(effleaderboard_row_record2);
            effleaderboard_row.appendChild(l3);
            
        }

    }
    else {

        effleaderboard.style.justifyContent = 'center';
        effleaderboard.textContent = 'Nessun punteggio salvato.';

    }

    

    main.appendChild(arrowanddirectionaltext1);
    arrowanddirectionaltext1.appendChild(directionaltext1);
    arrowanddirectionaltext1.appendChild(arrow1);

    secondary.appendChild(arrowanddirectionaltext2);
    arrowanddirectionaltext2.appendChild(arrow2);
    arrowanddirectionaltext2.appendChild(directionaltext2);
    
    secondary.appendChild(effleaderboard);

    switchPage(arrowanddirectionaltext1, arrowanddirectionaltext2);

}

function switchPage(fwarrowanddirectionaltext, bwarrowanddirectionaltext) {

    fwarrowanddirectionaltext.addEventListener('click', ()=> {

        main.style.display = 'none';
        secondary.style.display = 'flex';
        
    })

    bwarrowanddirectionaltext.addEventListener('click', ()=> {

        secondary.style.display = 'none';
        main.style.display = 'flex';
        
    })
    
}

function onClickPlay() {

    playbtn.addEventListener('click', () => {

        main.style.display = 'none';
        const level = document.createElement('div');
        level.className = 'gm_level';
        level.id = 'level1';
        game.appendChild(level);

        const load = document.createElement('img');
        load.className = 'gm_loading';
        load.id = 'load';
        load.setAttribute("src", "https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif");
        level.appendChild(load);

        setTimeout(() => {

            let effscore = 0;

            level.removeChild(load);
            level.style.background = 'linear-gradient(to bottom, #03be6480, #00000080)';

            const ctlabel = document.createElement('div');
            ctlabel.className = 'gm_ctlabel';
            ctlabel.id = 'ctlabel1';
            ctlabel.textContent = 'CLICK THEM ALL!'
            level.appendChild(ctlabel);
            
            const levelcontainer = document.createElement('div');
            levelcontainer.className = 'gm_levelcontainer';
            levelcontainer.id = 'levelcontainer1';
            level.appendChild(levelcontainer);

            const levelcontainer2 = document.createElement('div');
            levelcontainer2.className = 'gm_levelcontainer';
            levelcontainer2.id = 'levelcontainer2';
            level.appendChild(levelcontainer2);
            
            const score = document.createElement('div');
            score.className = 'gm_score';
            score.id = 'score';
            level.appendChild(score);
            score.textContent = `Score: ${effscore}`;



            const userchararray = [1,2,3,4];
            
            var tot = 0;

            let sizes = new Map();

            let dynamicsize;



            for (let i = 0; i < userchararray.length; i++) {

                tot ++;
                
                const element = userchararray[i];
                const userchar = document.createElement('img');
                userchar.className = 'gm_userchar';
                userchar.id = `userchar${element}`;

                if (tot % 2 == 0) {
                    levelcontainer.appendChild(userchar);
                }
                else {
                    levelcontainer2.appendChild(userchar);
                }

                userchar.setAttribute("src", "./4.png");

                var currentsize = userchar.style.transform ? parseFloat(userchar.style.transform.split('(')[1].split(',')[0]) : 2;

                sizes.set(`size di ${userchar.id}`, currentsize);
            }
            
            document.querySelectorAll('.gm_userchar').forEach(usr => {

                let interval = setInterval(() => {

                    var currentsize = usr.style.transform ? parseFloat(usr.style.transform.split('(')[1].split(',')[0]) : 2;
                    
                    if (currentsize == 0) {
                        console.log("GAME OVER!");
                        clearInterval(interval);
                    }
                    else {
                        dynamicsize = currentsize - 0.2;

                        if (dynamicsize > 0) {
                            usr.style.transform = `scale3d(${dynamicsize}, ${dynamicsize}, ${dynamicsize})`;
                        }

                        sizes.set(`size di ${usr.id}`, dynamicsize);
                    }

                    console.log(`la current e' ${currentsize}, la dynamic e' ${dynamicsize}`);

                }, 500);

                usr.addEventListener('click', () => {

                    for (let key of sizes.keys()) {
                        if (key.includes(usr.id)) {
                            let newsize = sizes.get(key) + 0.2;
                            usr.style.transform = `scale3d(${newsize}, ${newsize}, ${newsize})`;
                            sizes.set(key, newsize);
                        }
                    }

                    effscore += 50;
                    score.textContent = `Score: ${effscore}`;

                })

            });


            
            let checkGameOver = setInterval(() => {

                let allSmall = [...sizes.values()].some(size => size <= 0);

                if (allSmall) {

                    clearInterval(checkGameOver);
                    level.style.display = 'none';

                    const endpage = document.createElement('div');
                    endpage.className = 'gm_endpage';
                    endpage.id = 'endpage';

                    const endpageallelements = document.createElement('div');
                    endpageallelements.className = 'gm_endpageallelements';
                    endpageallelements.id = 'lt_a_ss';

                    const endpagetitle = document.createElement('div');
                    endpagetitle.className = 'gm_endpagetitle';
                    endpagetitle.id = 'endpagetitle';
                    endpagetitle.textContent = `YOU SCORED ${effscore} POINTS!`;

                    const retrybtn = document.createElement('div');
                    retrybtn.className = 'gm_retrybtn';
                    retrybtn.id = 'retrybtn';
                    retrybtn.textContent = 'RETRY';

                    const inputandsubmit = document.createElement('div');
                    inputandsubmit.className = 'gm_inputandsubmit';
                    inputandsubmit.id = 'inputandsubmit';

                    const inputplayer = document.createElement('input');
                    inputplayer.type = 'text';
                    inputplayer.className = 'gm_inputs';
                    inputplayer.id = 'inputplayer';
                    inputplayer.name = 'nametosave';
                    inputplayer.setAttribute('maxlenght', 10);
                    inputplayer.setAttribute('autocomplete', 'off');
                    inputplayer.placeholder = 'nickname (max 10 c.)';

                    //CAMPO INVISIBILE
                    const ghostscore = document.createElement('input');
                    ghostscore.className = 'gm_inputs';
                    ghostscore.id = 'ghostscore';
                    ghostscore.name = 'scoretosave';
                    ghostscore.setAttribute('value', effscore);
                    ghostscore.style.display = 'none';

                    const submitscore = document.createElement('button');
                    submitscore.type = 'submit';
                    submitscore.className = 'gm_submitbtn';
                    submitscore.id = 'submitscore';
                    submitscore.textContent = 'SUBMIT YOUR SCORE';



                    game.appendChild(endpage);
                    endpage.appendChild(endpageallelements);
                    endpageallelements.appendChild(endpagetitle);
                    endpageallelements.appendChild(retrybtn);
                    endpageallelements.appendChild(inputandsubmit);
                    inputandsubmit.appendChild(inputplayer);
                    inputandsubmit.appendChild(ghostscore);
                    inputandsubmit.appendChild(submitscore);

                    retrybtn.addEventListener('click', ()=> {

                        location.reload(true);
                    })

                    submitscore.addEventListener('click', function (event) {

                        if (inputplayer.textContent != '') {

                            event.preventDefault();
                            fetch("index.php", { method: "POST", body: new FormData(finalform) })
                            .then(res => res.text())
                            .then(() => alert("Dati salvati con successo!"));

                        }
                        else {

                            event.preventDefault();
                            inputplayer.placeholder = 'nick non valido!';
                            setTimeout(() => {
                                inputplayer.placeholder = 'nickname (max 10 c.)';
                            }, 2000);
                            
                        }

                    });

                    
                    
                }

            }, 250)

        }, 500);
        
    })
    
}



showLeaderboard();

makeItScroll(title);
makeItScroll(infobox);
makeItScroll(game);
makeItScroll(lll_cont_1);
makeItScroll(lll_cont_2);
makeItScroll(credits);

onClickPlay();

setInterval(() => {
    count ++;
    console.log(count);
    flashIt(title, "2025 EDITION", "THE HEALING MINIGAME");
    flashIt(infobox, "DISCLAIMER: This game can develop rages and hostile behaviours caused by the difficulty of ending it. Stay calm and focus on the goal.", "HOW TO PLAY: Click on EVERY health symbol ASAP and try to make some points before they get too small!");
}, 5000);