window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    function displayHome() {
      var x = document.getElementById("home");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      // var y = document.getElementById("game-board");
      // if (y.style.display === "none") {
      //   y.style.display = "none";
      // } else {
      //   y.style.display = "block";
      // }
    }
    displayHome();
    startGame();
  };

  function startGame() {
    // const myCanvasDOMEl = document.querySelector("#myCanvas");
    // const ctx = myCanvasDOMEl.getContext("2d");
    // const w = 1000;
    // const h = 670;
    // // const w2 = w / 2;
    // // const h2 = h / 2;
    // // const PI = Math.PI;
    // // const PI_DOUBLE = Math.PI * 2;
    // // const PI_HALF = Math.PI / 2;

    // setInterval(() => {
    //   ctx.clearRect(0, 0, w, h);
    //   setCanvasDimensions();
    //   grid();
    // }, 1000 / 60);
  
    grid();

    // function setCanvasDimensions() {
    //   myCanvasDOMEl.setAttribute("width", `${w}px`);
    //   myCanvasDOMEl.setAttribute("height", `${h}px`);
    // }
    function counter(){
    console.log(divDOMEl.className = "counter");
    }

    function grid() {
      const randomColor = true;
      function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const bodyDOMEl = document.querySelector("#grids");
      const colorScale = [];

      new Array(81).fill().forEach(
        (x, idx) => {
          let divDOMEl = document.createElement("div");
          divDOMEl.className = "grid";
          divDOMEl.style.backgroundColor =
            colorScale[randomInt(0, colorScale.length - 1)];
          if (randomColor) {
            let colorScale = d3
              .scaleLinear()
              .domain([0, 5])
              .range(["rgba(137, 196, 244, 1)", "rgba(107, 185, 240, 1)"]);
            divDOMEl.style.backgroundColor = `${colorScale(idx)}`;
            //rgba(137, 196, 244, 1)
            //rgba(107, 185, 240, 1)
          }
          //barajar
          bodyDOMEl.appendChild(divDOMEl);
          console.log(bodyDOMEl.appendChild(divDOMEl));

          bodyDOMEl.appendChild(divDOMEl).onclick = function() {
            this.className = "clicked";
          };
        }
        // divDOMEl.onmouseout = function() {
        //   this.className = ""
        // };
        // divDOMEl.document
      );
    }
  }
};
