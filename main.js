window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    function displayHome() {
      document.getElementById("home").style.display = "none";
      document.getElementById("game-board").style.display = "grid";
    }
    displayHome();
    startGame();
  };

  function startGame() {
    const colors = num => {
      let colorScale = d3
        .scaleLinear()
        .domain([0, 5])
        .range(["#f1a9a0", "#e08283"]);
      return colorScale(num);
    };

    let selected = [];

    let gridsArr = new Array(36).fill("").map((e, i) => {
      return `<div class="grid" id="item-${i}" style="background-color: ${colors(
        i
      )}"></div>`;
    });

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    document.querySelector("#grids").innerHTML = gridsArr.join(" ");

    setTimeout(() => {
      gridsArr = shuffle(gridsArr);
      document.querySelector("#grids").innerHTML = gridsArr.join(" ");
      gridsArr.forEach((grid, i) => {
        return (document.getElementById(`item-${i}`).onclick = e => {
          if (selected.includes(e.toElement)) {
            selected = selected.filter(elem => elem !== e.toElement);
            e.toElement.classList.toggle("clickedGrid");
            e.toElement.classList.toggle("grid");
          } else if (selected.length < 2) {
            selected.push(e.toElement);
            e.toElement.classList.toggle("clickedGrid");
            e.toElement.classList.toggle("grid");
          }
        });
      });
    }, 1000);
  }
};
