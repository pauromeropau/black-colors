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

    function grid() {
      const randomColor = true;
      function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const bodyDOMEl = document.querySelector("#grids");
      const colorScale = [];

      const gridsArr = new Array(36).fill().map(
        (item, idx) => {
          // let divDOMEl = document.createElement("div");
          divDOMEl.className = "grid";
          divDOMEl.setAttribute("id", `item-${idx + 1}`);
          divDOMEl.style.backgroundColor =
            colorScale[randomInt(0, colorScale.length - 1)];
          if (randomColor) {
            let colorScale = d3
              .scaleLinear()
              .domain([0, 5])
              .range(["#f1a9a0", "#e08283"]);
            divDOMEl.style.backgroundColor = `${colorScale(idx)}`;
            //#f1a9a0 rojo
            //#e08283 rojo
          }
          //barajar
          // bodyDOMEl.appendChild(divDOMEl);
          item = divDOMEl

          bodyDOMEl.appendChild(divDOMEl).onclick = function() {
            //         this.style.backgroundColor = this.style.backgroundColor === 'blue' ?
            // 'red' : 'blue';
            this.className = "clicked";
          };
        }
        // divDOMEl.onmouseout = function() {
        //   this.className = ""
        // };
        // divDOMEl.document
      );
      console.log(gridsArr);
    }
  }
};
