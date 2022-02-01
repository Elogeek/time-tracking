// import Storage from "./ts/components/Storage";
import { v4 as uuidv4 } from 'uuid';
//import Project from "./ts/components/Project";
import Timer from "easytimer.js";

// Open modal add task
$("#moreBtn").click(function() {
    // @ts-ignore
    $('<div id="overlay"></div>').appendTo($(`#modal`)).css(`
        'position' : 'absolute', 'top': '0', 'left': '0', 'zIndex': '10', 'backgroundColor': 'rgba(204,204,204,0.72)',
        'width': '100%', 'height': '100vh'
    `);

    // @ts-ignore
    // @ts-ignore
    $(` <div id="window">
          <h3>Enregistrer une nouvelle tâche</h3>
          <hr>
          <input type="text" placeholder="nouvelle tâche">
        </div>`
    ).appendTo($('#modal')
    ).css(`'backgroundColor': 'white', 'position': 'absolute', 'zIndex': '15', 'left': '30%', 'width': '50%', 'fontWeight': 'bold'`);

    $('<button id="addTask">Enregistrer</button>').appendTo($('#window')).css('zIndex', '15').click(function () {
        $(".container-project,#overlay,#window").remove()
    })
    $('<button id="button-close">Fermer</button>').appendTo($('#window')).css('zIndex', '15').click(() => $("#overlay, #window").remove());
});

// Delete project
$(".fa-trash").click(function () {
    $('<div id="overlay"></div>').appendTo($(`#modal`)).css(`
        'position' : 'absolute', 'top': '0', 'left': '0', 'zIndex': '10', 'backgroundColor': 'rgba(204,204,204,0.72)',
        'width': '100%', 'height': '100vh'
    `);

    $(` <div id="window">
          <h3>Supprimer le projet</h3>
          <hr>
          <span>Voulez-vous supprimé le projet?</span>
        </div>`
    ).appendTo($('#modal')).css(`'backgroundColor': 'white', 'position': 'absolute', 'zIndex': '15', 'left': '30%', 'width': '50%', 'fontWeight': 'bold'`);
    // @ts-ignore
    $('<button id="deleteProject">Supprimer</button>').appendTo($('#window')).css('zIndex', '15').click(function () {
            $(".container-project,#overlay,#window").remove()
    })
    $('<button id="button-close">Fermer</button>').appendTo($('#window')).css('zIndex', '15').click(() => $("#overlay, #window").remove());
});

// start, pause and stop chrono in the task
let icon = document.querySelector(".fa-stopwatch") as HTMLElement;
let timer = new Timer();

icon.addEventListener("click",function (evt) {
    icon.style.color = "chartreuse";
    icon.style.display = "flex";

});

$('.chrono .startButton').click(function () {
    timer.start();

});

$('.chrono .pauseButton').click(function () {
    timer.pause();
});

$('.chrono .stopButton').click(function () {
    timer.stop();
    icon.style.color = "red";
    icon.style.display = "flex";
});

timer.addEventListener('secondsUpdated', function (e) {
    $('.chrono .values').html(timer.getTimeValues().toString());
});

timer.addEventListener('started', function (e) {
    $('.chrono .values').html(timer.getTimeValues().toString());
});
