window.onload = function() {
  const randomColor = () => {
    const color = [
      ["#f1a9a0", "#e08283"],
      ["#ffcb05", "#f9690e"],
      ["#e4f1fe", "#c5eff7"],
      ["#87d37c", "#26c281"],
      ["#89c4f4", "#3498db"],
      ["#ffcb05", "#f9b42d"]
    ];
    return color[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
  };

  document.getElementById("start-button").onclick = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("game-board").style.display = "grid";
    let newColor = randomColor();
    let level = 1;
    startGame(newColor, level);
  };

  function startGame(newColor, level) {
    const colors = num => {
      let colorScale = d3
        .scaleLinear()
        .domain([0, 5])
        .range(newColor);
      return colorScale(num);
    };
    let selected = [];
    let moves = 100;
    document.getElementById("counterNum").innerHTML = `<p>${moves}</p>`;
    document.getElementById("levelNum").innerHTML = `<p>${level}</p>`;

    let gridsArr = new Array(36).fill("").map((e, i) => {
      return `<div class="grid" id="item-${i}#" style="background-color: ${colors(
        i
      )}"></div>`;
    });

    const orderArr = [...gridsArr];

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    document.querySelector("#grids").innerHTML = gridsArr.join(" ");

    setTimeout(() => {
      gridsArr = shuffle(gridsArr);
      document.querySelector("#grids").innerHTML = gridsArr.join(" ");
    }, 800);

    setInterval(() => {
      gridsArr.forEach((grid, i) => {
        return (document.getElementById(`item-${i}#`).onclick = e => {
          if (selected.includes(e.toElement)) {
            selected = selected.filter(elem => elem !== e.toElement);
            e.toElement.classList.toggle("clickedGrid");
            e.toElement.classList.toggle("grid");
          } else if (selected.length < 2) {
            selected.push(e.toElement);
            e.toElement.classList.toggle("clickedGrid");
            e.toElement.classList.toggle("grid");
            if (selected.length === 2) move(selected);
          }
        });
      });
    }, 100);

    function move(gridsArrSelect) {
      let position1;
      let position2;
      gridsArr.forEach((elem, i) => {
        let element = elem.substring(
          elem.lastIndexOf("m-") + 2,
          elem.lastIndexOf("#")
        );
        let elSelect1 = gridsArrSelect[0].outerHTML.substring(
          gridsArrSelect[0].outerHTML.lastIndexOf("m-") + 2,
          gridsArrSelect[0].outerHTML.lastIndexOf("#")
        );
        let elSelect2 = gridsArrSelect[1].outerHTML.substring(
          gridsArrSelect[1].outerHTML.lastIndexOf("m-") + 2,
          gridsArrSelect[1].outerHTML.lastIndexOf("#")
        );
        if (element == elSelect1) position1 = i;
        if (element == elSelect2) position2 = i;
      });
      let newArray = ([gridsArr[position1], gridsArr[position2]] = [
        gridsArr[position2],
        gridsArr[position1]
      ]);
      document.querySelector("#grids").innerHTML = gridsArr.join(" ");
      if (moves <= 1) gameOver();
      else moves--;
      document.getElementById("counterNum").innerHTML = `<p>${moves}</p>`;

      if (gridsArr.toString() === orderArr.toString()) {
        level++;
        gridsArr = [];
        let newColor = randomColor();
        startGame(newColor, level);
        document.getElementById("levelNum").innerHTML = `<p>${level}</p>`;
        console.log(level);
      }
      selected = [];
    }

    function gameOver() {
      document.getElementById("home").style.display = "none";
      document.getElementById("game-board").style.display = "none";
      document.getElementById("game-over-display").style.display = "flex";
    }
    document.getElementById("reset-button").onclick = function() {
      gridsArr = [];
      startGame(newColor, level);
    };

    document.getElementById("abort-button").onclick = function() {
      gridsArr = [];
      document.getElementById("home").style.display = "grid";
      document.getElementById("game-board").style.display = "none";
    };
    document.getElementById("random-button").onclick = function() {
      gridsArr = [];
      let newColor = randomColor();
      startGame(newColor, level);
    };
  }
};
