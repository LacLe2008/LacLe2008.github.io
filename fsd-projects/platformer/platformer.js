$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 650, 200, 25, "lavender");
    createPlatform(500, 600, 200, 25, "lavender");
    createPlatform(800, 550, 200, 25, "lavender");
    createPlatform(1100, 500, 200, 25, "lavender");
    createPlatform(800, 375, 200, 25, "lavender");
    createPlatform(400, 375, 200, 25, "lavender");
    createPlatform(200, 275, 100, 25, "lavender");
    createPlatform(400, 175, 200, 25, "lavender");
    createPlatform(700,150, 200, 25, "lavender");
    createPlatform(1000, 150, 300, 25, "lavender");


    // TODO 3 - Create Collectables
    createCollectable("steve", 1180, 450, 0.5, 0.7);
    createCollectable("kennedi", 230, 225, 0.5, 0.7);
    createCollectable("max", 1130, 100, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 990, 1250);
    createCannon("bottom", 390, 1250);
    createCannon("top", 715, 1250);
    createCannon("right", 800, 0);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
