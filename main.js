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
    document.getElementById("abort-button").onclick = function() {
      backHome();
    };

    const colors = num => {
      let colorScale = d3
        .scaleLinear()
        .domain([0, 5])
        .range(["#f1a9a0", "#e08283"]);
      return colorScale(num);
    };
    let arrayOrigin = [];
    let arrayMoved = [];
    let selected = [];
    let moves = 100;
    document.getElementById("counterNum").innerHTML = `<p>${moves}</p>`;

    //**************************** ARRAY ORIGIN *********************************
    let gridsArr = new Array(36).fill("").map((e, i) => {
      return `<div class="grid" id="item-${i}#" style="background-color: ${colors(
        i
      )}"></div>`;
    });
    //****************************************************************************

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    document.querySelector("#grids").innerHTML = gridsArr.join(" ");

    setTimeout(() => {
      gridsArr = shuffle(gridsArr);
      document.querySelector("#grids").innerHTML = gridsArr.join(" ");
    }, 1000);

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
    //**************************** ARRAY MOVED *********************************
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
      if (moves <= 1) backHome();
      else moves--;
      document.getElementById("counterNum").innerHTML = `<p>${moves}</p>`;
      selected = [];
    }

    function backHome() {
      document.getElementById("home").style.display = "grid";
      document.getElementById("game-board").style.display = "none";
    }
    // arrayMoved
    //****************************************************************************

    // if(arrayOrigin === arrayMoved){
    //   return startGame();
    // }
  }
  document.getElementById("reset-button").onclick = function() {
    startGame();
  };
};
