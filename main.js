/*
---Exit the castle---
Extra damage - 20(5 shots) 25(four) 35(three)
Extra health - add 20
twin/triple shot - 1, 2, 3
Quick draw (faster) ?
Sharp shooter (more accurate) 20, 10, 1
*/

// import { Map } from "./map.js";
let levels = [];

// 0
levels.push({map: [[9, 9],[0,0,0,0,0,0,0,0,0,
  0,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0], [4, 1]], enemyPositions: [[64,24]], playerPosition: [64, 80]});

// 1
levels.push({map: [[9, 9], levels[0].map[1], [4, 1]], enemyPositions: [[16, 24], [112, 24]], playerPosition: [64, 112]});

// 2
levels.push({map: [[19, 9],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [16, 1]], enemyPositions: [[32, 24], [32, 42], [256, 112], [256, 96], [272, 80]], playerPosition: [32, 112]});

// 3
levels.push({map: [[19, 9], levels[2].map[1], [2, 1]], enemyPositions: [[128, 56], [256, 24], [256, 42], [32, 112], [32, 96], [16, 80]], playerPosition: [256, 112]});

// 4
levels.push({map: [[13, 17],[
  0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,0,0,0,0,1,1,1,0,0,0,0,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0], [6, 1]], enemyPositions: [[80,32],[96,32],[112,32],[16,240],[32,240],[176,240],[160,240]], playerPosition: [96, 240]});

// 5
levels.push({map: [[17, 14],[
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,
  0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,
  0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,
  0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,
  0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,
  0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [1, 1]], enemyPositions: [[208, 152],[240,152],[240,96],[96,32],[80,32],[64,88],[80,88],[16,32],[16,48],[96,192],[64,192]], playerPosition: [224, 192]});

// 6
levels.push({map: [[13, 13],[0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0], [6, 1]], enemyPositions: [[16,24],[176,24],[16,176],[32,176],[16,160],[176,176],[160,176],[176,160]], playerPosition: [96, 176]});

// 7
levels.push({map: [[17, 14], levels[5].map[1].slice().reverse(), [2, 1]], enemyPositions: [[160,32],[160,64],[192,64],[192,32],[240,48],[240,96],[240,128],[192,128],[192,192],[16,192],[16,128],[16,64],[48,64]], playerPosition: [240, 192]});

// 8
levels.push({map: [[13, 17], levels[4].map[1].slice().reverse(), [6, 1]], enemyPositions: [[16,24],[32,24],[48,24],[64,24],[128,24],[144,24],[160,24],[176,24],[80,192],[112,192],[80,96],[112,96]], playerPosition: [96, 240]});

// 9
levels.push({map: [[13, 13], levels[6].map[1], [6, 1]], enemyPositions: [[16,24],[32,24],[16,42],[176,24],[160,24],[176,42],[16,176],[32,176],[16,160],[176,176],[160,176],[176,160]], playerPosition: [96, 176]});

// 10
levels.push({map: [[14, 14],[
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,1,1,1,1,1,0,0,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,0,0,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0,1,1,1,0,0,
  0,0,0,0,0,0,0,0,0,1,1,1,0,0,
  0,1,1,1,1,1,0,0,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,0,0,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0
], [3, 1]], enemyPositions: [[16,136],[80,136],[80,192],[16,192],[128,136],[192,136],[192,192],[128,192],[128,24],[192,24],[192,80],[128,80],[16,24],[80,24],[80,80],[16,80]], playerPosition: [48, 192]});

// 11
levels.push({map: [[13, 14],[
  0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,1,1,1,0,0,1,0,0,1,1,1,0,
  0,1,1,1,0,0,1,0,0,1,1,1,0,
  0,0,0,1,0,0,1,0,0,1,0,0,0,
  0,0,0,1,0,0,1,0,0,1,0,0,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,1,1,1,0,
  0,0,0,1,0,0,0,0,0,1,0,0,0,
  0,0,0,1,0,0,0,0,0,1,0,0,0,
  0,1,1,1,0,0,0,0,0,1,1,1,0,
  0,1,1,1,0,0,0,0,0,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0
], [6, 1]], enemyPositions: [[16,32],[32,32],[48,32],[16,192],[32,192],[48,192],[144,192],[160,192],[176,192],[144,32],[160,32],[176,32],[96,32],[96,48],[96,64]], playerPosition: [96, 128]});

// 12
levels.push({map: [[28, 12],[
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,
  0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,
  0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,
  0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,
  0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,
  0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
], [26, 1]], enemyPositions: [[16,120],[32,120],[96,160],[112,96],[128,96],[16,32],[32,32],[96,32],[80,32],[144,160],[160,160],[224,32],[208,32],[240,96],[256,96],[272,160],[288,160],[272,32],[288,32],[336,96],[352,96],[336,160],[352,160],[336,32],[352,32],[368,160],[384,160],[368,32],[384,32]], playerPosition: [224,160]});

let map;

let upgrades;
let upgradeCoords = [];

// const map = new Map();
const canvas = document.createElement("canvas");
canvas.setAttribute("width", 320);
canvas.setAttribute("height", 180);
// const ctx = canvas.getContext("bitmaprenderer");
const ctx = canvas.getContext("2d");
// const ctx = canvas.getContext("2d");
const gW = 320;
const gH = 180;
const keyboardState = {};
const mouse = { x: 0, y: 0 };
const viewport = {
  x: 0,
  y: 0
}

key = {
  x: 0,
  y: 0,
  sx: 128,
  sy: 31,
  render: 0
}

const sounds = {
  fire: [,,150,.05,,.05,,1.3,,,,,,3],
  rune: [.2,0,267,.1,.06,,,1.49,4.3,-0.8,,,,2,,.3,.15,.52,.05],
  hit: [.3,0,260,,.1,.07,4,4.7,,,,,,.4,,.4,.12,.3,.02,.01],
  ouch: [.5,,499,,.15,.04,,1.47,4.5,-6.8,,,.17,.5,,.3,.13,.73,.04,.12],
  dead: [.2,0,415,.01,.4,.35,1,.7,,6.27,-50,.04,.11,,,,,.5],
  escape: [1.01,,749,.1,.09,.14,1,1.03,,,100,.03,-0.02,,,,.11,.7,.07],
  potion: [1.1,,146,,.02,.12,1,.6,-8.6,-6.3,,,,,,,,.8,.02,.15],
  frag: [.5,0,471,,.03,.43,4,1.06,-5.5,,,,,.9,61,.1,,.5,.02],
  key: [,,1675,,.06,.24,1,1.82,,,837,.06]
}
const projectileSpeed = 3;
const projectileSize  = 16;
let results = 0;
let timer = null;
let spritesImg = new Image();
let scale;
let fps = 60;
let spriteSize = 16;
let oldTimeStamp = 0;
let titleScreen = 1;
let playScreen = 0;
let levelUp = 0;
let escaped = 0;
let currentLevel = 0;
let songPlaying = 0;

const offscreen = new OffscreenCanvas(320, 180);
// const octx = offscreen.getContext("2d", { alpha: false });
const octx = offscreen.getContext("2d");

const sprites = new OffscreenCanvas(160, 96);
const spritesCtx = sprites.getContext("2d");

let enemies = [];

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.facing = (p.x > this.x) ? 1 : -1;
  }
  facing = 0;
  walking = 1;
  attacking = 0;
  attackCooldown = 0;
  speed = .75;
  speedDelta = 0;
  health = 100;
  frame = 0;
  attacked = 0;
  dead = 0;
}

const p = {
  x: 100,
  y: 100,
  facing: 1,
  walking: 0,
  attacked: 0,
  // speed: 0.0005,
  health: 100,
  frame: 0,
  angle: 0,
  projectiles: [],
  damage: 20,
  accuracy: 20, // 1 is absolutely accurate
  multiShot: 1,
  key: 0,
  maxHealth: 100,
  render: function() {
    octx.save();
    if (this.facing == -1) {
        octx.translate((gW / 2 - spriteSize / 2) * 2 + spriteSize, 0);
        octx.scale(-1, 1);
    }
    if (this.health <= 0) {
      if (this.health == 0) {
        zzfx(...sounds.dead);
        this.health = -1;
      }
      octx.drawImage(sprites, 128, 64, 16, 16, gW / 2 - spriteSize / 2, gH / 2 - spriteSize / 2, 16, 16);
    } else if (this.attacked > 0) {
      if (this.attacked == 2) zzfx(...sounds.ouch);
      octx.drawImage(sprites, 144, 64, 16, 16, gW / 2 - spriteSize / 2, gH / 2 - spriteSize / 2, 16, 16);
      this.attacked -= 1;
    } else {
      octx.drawImage(sprites, Math.floor(p.frame) * spriteSize, 64, 16, 16, gW / 2 - spriteSize / 2, gH / 2 - spriteSize / 2, 16, 16);
    }
    octx.restore();

    // Display health
    octx.fillStyle = "rgb(0, 0, 0)";
    octx.fillRect(p.x - viewport.x - 1, p.y - viewport.y + 4 + spriteSize - 1, spriteSize + 2, 3);
    octx.fillStyle = "rgb(255, 0, 0)";
    // octx.fillRect(p.x - viewport.x, p.y - viewport.y + 4 + spriteSize, Math.round((spriteSize) / 100 * Math.min(100, p.health)), 1);
    octx.fillRect(p.x - viewport.x, p.y - viewport.y + 4 + spriteSize, Math.round(spriteSize / 100 * ((p.health / this.maxHealth) * 100)), 1);
  }
}

function write(txt = '', x = 100, y = 0, color = 'rgb(255,255,255)', size = 2, center = 0, spacer = 0) {
  txt = String(txt).toUpperCase();
  size *= 5;
  const height = 5;
  const pixelSize = size/height;
  const chars = [...Array(33),29,,,,,,12,,,,"ᇄ",3,"ႄ",1,1118480,"縿",31,"庽","嚿","炟","皷","纷","䈟","线","皿",17,,,"⥊",,"䊼",,"㹏","纮","縱","縮","纵","纐","񴚦","粟","䟱","丿",1020241,"簡",33059359,1024159,"縿","纜","񼙯","繍","皷","䏰","簿",25363672,32541759,18157905,"惸",18470705,,,,,"С",];
  let totalWidth = 0;
  let output = [];

  totalWidth = [...txt].reduce((charX, char) => {
      const fontCode = chars[char.charCodeAt()] || '';
      const binaryChar = (fontCode > 0) ? fontCode : fontCode.codePointAt();
      const binary = (binaryChar || 0).toString(2);
      const width = (fontCode == 31) ? 3 : Math.ceil(binary.length / height);
      const marginX = charX + pixelSize;
      const formattedBinary = binary.padStart(width * height, 0);
      const binaryCols = formattedBinary.match(new RegExp(`.{${height}}`, 'g'));
      binaryCols.map((column, colPos) =>
          [...column].map((pixel, pixPos) => {
              if (pixel == 1) output.push({fill: color, rectX: x + marginX + colPos * pixelSize, rectY: y + pixPos * pixelSize, pixelSize});
          })
      );
      return charX + (width+1)*pixelSize + spacer;
  }, 0);

  const xOffset = (center) ? Math.floor(((totalWidth) / 2)) : 0;
  output.forEach(char => {
      octx.fillStyle = char.fill;
      octx.fillRect(char.rectX - xOffset, char.rectY, pixelSize, pixelSize);
  });

  return totalWidth;
}

function updateGame(elapsed) {
  // console.log(elapsed);
  // console.log(map.door);
  if (p.health > 0) {
    // Move player
    p.walking = 0;

    // Check for level exit door
    if (keyboardState.w || keyboardState.ArrowUp) {

      // map.door[0]
      let tx1 = Math.floor(p.x / spriteSize);
      let ty1 = Math.floor(((p.y - p.speed) + spriteSize / 2) / spriteSize);
      let tx2 = Math.floor((p.x + spriteSize) / spriteSize);
      let ty2 = Math.floor(((p.y - p.speed) + spriteSize / 2) / spriteSize);

      // Left or right edge of the player sprite
      // let tile1 = map.getTile(Math.floor(p.x / spriteSize), Math.floor(((p.y - p.speed - 16) + spriteSize / 2) / spriteSize));
      // let tile2 = map.getTile(Math.floor((p.x + spriteSize) / spriteSize), Math.floor(((p.y - p.speed - 16) + spriteSize / 2) / spriteSize));
      // if ((tile1 == -2 || tile2 == -2) && enemies.length == 0) {
      if (p.key == 1 && ((tx1 == map.door[0] && ty1 == map.door[1]) || (tx2 == map.door[0] && ty2 == map.door[1]))) {
        if (currentLevel + 1 == levels.length) {
          zzfx(...sounds.escape);
          escaped = 1;
        } else {
          levelUp = 1;
        }
      }
      // console.log("tile" + tile);
    }

    if ((keyboardState.w || keyboardState.ArrowUp) && map.canMoveToXY(p.x, p.y - p.speed) && map.canMoveToXY(p.x + spriteSize - 1, p.y - p.speed)){
        p.y -= p.speed;
        p.walking = 1;
    }

    if ((keyboardState.a || keyboardState.ArrowLeft) && map.canMoveToXY(p.x - p.speed, p.y) && map.canMoveToXY(p.x - p.speed, p.y + spriteSize - 1)) {
        p.x -= p.speed;
        p.walking = 1;
    }

    if ((keyboardState.s || keyboardState.ArrowDown) && map.canMoveToXY(p.x, p.y + p.speed + spriteSize - 1) && map.canMoveToXY(p.x + spriteSize - 1, p.y + p.speed + spriteSize - 1)) {
        p.y += p.speed;
        p.walking = 1;
    }

    if ((keyboardState.d || keyboardState.ArrowRight) && map.canMoveToXY(p.x + p.speed + spriteSize - 1, p.y) && map.canMoveToXY(p.x + p.speed + spriteSize - 1, p.y + spriteSize - 1)) {
        p.x += p.speed;
        p.walking = 1;
    }

    // Move to the next walking frame or idle
    p.frame = (p.frame < 7 && p.walking == 1) ? p.frame += 0.25 : 0;
  } else if (timer == null){
    timer = setTimeout(() => {
      init(0);
      playScreen = 1;
      results = 1;
      // currentLevel = 0;
    }, 2000);
  }

  if (key.render && boxCollision(p.x, p.y, spriteSize, spriteSize, key.x, key.y, spriteSize, spriteSize)) {
    key.render = 0;
    p.key = 1;
    zzfx(...sounds.key);
  }

  // Move viewport offset to follow player
  viewport.x = p.x - (gW / 2) + spriteSize / 2;
  viewport.y = p.y - (gH / 2) + spriteSize / 2;

  // Move enemies
  // enemies.forEach(e => {
  for (let i = 0; i < enemies.length; i++) {
    let e = enemies[i];

    // Temporary vectors for enemies
    let vx = 0;
    let vy = 0;
    if (e.health <= 0) continue;
    if (e.attacking) {
      e.frame = (e.frame < 2) ? e.frame += 0.3 : 0;
      if (e.frame > 2) {
        e.attacking = 0;
      }
    } else {
      e.frame = (e.frame < 7 && e.walking == 1) ? e.frame += 0.25 : 0;
    }

    // e.moveTimer -= 1;
    // if (e.moveTimer > 0) continue;
    e.speedDelta += e.speed;
    if (e.speedDelta > 1) {
      e.speedDelta -= 1;
    } else {
      continue;
    }

    // Move towards player and check for collision with walls
    if (p.x > e.x && map.canMoveToXY(e.x + e.speed + spriteSize - 1, e.y) && map.canMoveToXY(e.x + e.speed + spriteSize - 1, e.y + spriteSize - 1)) vx = e.speed;//e.x += e.speed;
    if (p.y > e.y && map.canMoveToXY(e.x, e.y + e.speed + spriteSize - 1) && map.canMoveToXY(e.x + spriteSize - 1, e.y + e.speed + spriteSize - 1)) vy = e.speed;//e.y += e.speed;
    if (p.x < e.x && map.canMoveToXY(e.x - e.speed, e.y) && map.canMoveToXY(e.x - e.speed, e.y + spriteSize - 1)) vx = -e.speed;//e.x -= e.speed;
    if (p.y < e.y && map.canMoveToXY(e.x, e.y - e.speed) && map.canMoveToXY(e.x + spriteSize - 1, e.y - e.speed)) vy = -e.speed;//e.y -= e.speed;

    // Check for collision with other enemies
    let enemyCollisionX = 0;
    let enemyCollisionY = 0;
    for (let j = 0; j < enemies.length; j++) {
      if (i == j || enemies[j].health <= 0) continue; // Don't check self
      if (boxCollision(e.x + vx, e.y, 16, 8, enemies[j].x, enemies[j].y, 16, 8)) enemyCollisionX = 1;
      if (boxCollision(e.x, e.y + vy, 16, 8, enemies[j].x, enemies[j].y, 16, 8)) enemyCollisionY = 1;
    }

    if (!boxCollision(e.x - 1, e.y - 1, spriteSize + 2, spriteSize + 2, p.x, p.y, spriteSize, spriteSize)) {
      if (!enemyCollisionX) e.x += vx;
      if (!enemyCollisionY) e.y += vy;
    }

    // Check for collision with player
    if (e.attackCooldown > 0) e.attackCooldown -= 1;
    if (boxCollision(e.x - 1, e.y - 1, spriteSize + 2, spriteSize + 2, p.x, p.y, spriteSize, spriteSize) && e.attackCooldown == 0 && p.health > 0) {
      e.attacking = 1;
      p.health -= 10;
      p.attacked = 2;
      e.frame = 0;
      e.attackCooldown = 10;
    }
    // e.moveTimer = 5;
  }
  // });

  // Update projectiles
  p.projectiles.forEach(projectile => {
    // Remove expired projectiles
    p.projectiles = p.projectiles.filter(projectile => {
      return (projectile.remove !== true);
    });
    // console.log(p.x, p.y, projectile.x, projectile.y, mouse.x + viewport.x, mouse.y + viewport.y);
    // return;
    projectile.x += projectile.vx;
    projectile.y += projectile.vy;
    // Check for collision with walls
    // if (!map.canMoveToXY(projectile.x, projectile.y) || !map.canMoveToXY(projectile.x + projectileSize, projectile.y) || !map.canMoveToXY(projectile.x, projectile.y + projectileSize) || !map.canMoveToXY(projectile.x + projectileSize, projectile.y + projectileSize)) {
    if (!map.canMoveToXY(projectile.x, projectile.y)) {
      projectile.remove = true;
    }

    // Check for collision with enemies
    enemies.forEach(e => {
      if (e.health <= 0) return;
      // if (projectile.remove == false && boxCollision(e.x, e.y, spriteSize, spriteSize, projectile.x, projectile.y, 12,5)) {
      if (projectile.remove == false && boxCollision(e.x, e.y, spriteSize, spriteSize, projectile.x, projectile.y, 1, 1)) {
        projectile.remove = true;
        e.health -= p.damage;
        e.attackCooldown = 10;
        e.attacking = 0;
        e.attacked = 2;
        if (e.health <=0) {
          if (p.x < e.x) {
            e.facing = -1;
          } else {
            e.facing = 1;
          }
        }
      }
    });

  });

  // Remove expired enemies
  enemies.forEach(e => {
    if (e.health <= 0 && !e.dead) {
      e.dead = 1;
      zzfx(...sounds.frag);
      let enemiesLeft = 0;
      for (let i=0; i < enemies.length; i++) {
        if (enemies[i].dead != 1 && enemies[i].remove != 1) enemiesLeft +=1;
      }
      if (enemiesLeft == 0) {
        key.x = e.x;
        key.y = e.y;
        key.render = 1;
      }
    }
    // if (e.health == 0) zzfx(...sounds.frag);
    if (e.health <= 0) {
      e.health -= 1;
    }
    if (e.health <= -100) e.remove = true;
  });
  enemies = enemies.filter(e => {
    return (e.remove !== true);
  });

}

function boxCollision(box1x, box1y, box1w, box1h, box2x, box2y, box2w, box2h) {
  return (
      box1x < box2x + box2w &&
      box1x + box1w > box2x &&
      box1y < box2y + box2h &&
      box1h + box1y > box2y
  );
}

function renderGame() {
  // console.log(p.x, p.y);
  // console.log(p.maxHealth, p.health);
  // console.log(map);
  octx.imageSmoothingEnabled = false;
  octx.fillStyle = ("#000");
  octx.fillRect(0, 0, gW, gH);
  // if (titleScreen) {
  //   renderTitle();
  // } else {
    // Render the map
    map.render(sprites, octx, viewport.x, viewport.y, gW, gH);
    // Render enemies
    // Sort so enemies are at the front if they are further down the screen
    enemies.sort((a, b) => (a.y > b.y) ? 1 : -1)
    enemies.forEach(e => {
      if (e.health <= 0) {
        octx.save();
        if (e.facing == -1) {
          octx.translate((e.x - viewport.x) * 2 + spriteSize, 0);
          octx.scale(-1, 1);
        }
        if (e.health == 0) {
          e.health = -1;
        }
        octx.globalAlpha = (100 - (e.health * -1)) / 100;
        octx.drawImage(sprites, 128, 80, 16, 16, e.x - viewport.x, e.y - viewport.y, 16, 16);
        octx.restore();
        return;
      }

      octx.save();
      if (p.x < e.x) {
          octx.translate((e.x - viewport.x) * 2 + spriteSize, 0);
          octx.scale(-1, 1);
      }

      if (e.attacked) {
        if (e.attacked == 2) zzfx(...sounds.hit);
        octx.drawImage(sprites, 144, 80, 16, 16, e.x - viewport.x, e.y - viewport.y, 16, 16);
        e.attacked -= 1;
      } else if (e.attacking) {
        octx.drawImage(sprites, 112
          + Math.floor(e.frame) * spriteSize, 48, 16, 16, e.x - viewport.x, e.y - viewport.y, 16, 16);
      } else {
        octx.drawImage(sprites, Math.floor(e.frame) * spriteSize, 80, 16, 16, e.x - viewport.x, e.y - viewport.y, 16, 16);
      }
      octx.restore();
    });
    // Render the player
    p.render();
    // Render key
    if (key.render) octx.drawImage(sprites, key.sx, key.sy, spriteSize, spriteSize, key.x - viewport.x, key.y - viewport.y, spriteSize, spriteSize);
    // Render projectiles
    p.projectiles.forEach(projectile => {
      // let px = projectile.x - viewport.x + 3;
      // let py = projectile.y - viewport.y + 6;
      let px = projectile.x - viewport.x;
      let py = projectile.y - viewport.y;
      if (px < 0 || px > gW - 1 || py < 0 || py > gH - 1) return;

      // Rotatable projectile
      octx.save();
      // octx.translate(px + 6, py + 3);
      // octx.rotate(projectile.angle);
      // octx.translate(- px + 6, - py + 3);
      // octx.drawImage(sprites, 112, 0, 12, 6, px - 12, py - 6, 12, 6);
      octx.translate(px, py);
      octx.rotate(projectile.angle);
      octx.translate(-px, -py);
      // Offset so that the center of the arrowhead is the x, y position
      octx.drawImage(sprites, 128, 0, 19, 19, px - 10, py - 10, 19, 19);
      octx.restore();
    });
    // Crosshair
    // octx.drawImage(sprites, 0, 16, 5, 5, mouse.x - 3, mouse.y - 3, 5, 5);
  // }
  // blit();
}

function renderLevelUp() {
  octx.fillStyle = ("#000");
  octx.fillRect(0, 0, gW, gH);
  write("Level up!", gW/2, 20, '#dd0a1e', 3, 1);
  write("How far can you get?", gW/2, 50, '#fff', 1, 1);

  write("Choose an upgrade to start level " + (currentLevel + 2), gW/2, 65, '#fff', 1, 1);

  upgrades = ["Extra health"];
  // console.log("current level: " + currentLevel);
  if (currentLevel > 0) {
    // 20 10 1
    if (p.accuracy == 20) upgrades.push("Eagle eye");
    if (p.accuracy == 10) upgrades.push("Eagle eye master");
  }
  if (currentLevel > 1) {
  // 20 25 35
    if (p.damage == 20) upgrades.push("Extra damage");
    if (p.damage == 25) upgrades.push("Damage master");
  }
  // 1 2 3
  if (currentLevel > 2 && p.multiShot == 1) upgrades.push("Twin shot");
  if (currentLevel > 4 && p.multiShot == 2) upgrades.push("Triple shot");

  for (i = 0; i < upgrades.length; i++) {
    let top = 80 + (i * 20);
    let color = (mouse.y > top && mouse.y < top + 11) ? "#fd0" : "#fff";
    let w = write(upgrades[i], gW/2, top, color, 2, 1);
    upgradeCoords[i] = [top, top + 11];
  }
}

function renderEnd() {
  let color = (mouse.x < 199 && mouse.x > 124 && mouse.y > 120 && mouse.y < 136) ? '#fd0' : '#fff';
  octx.fillStyle = ("#000");
  octx.fillRect(0, 0, gW, gH);
  write("Congratulations!", gW / 2, gH / 10, '#fff', 3, 1, 1);
  write("Congratulations!", gW / 2, gH / 10 + 2, '#666', 3, 1, 1);
  write("Congratulations!", gW / 2 + 1, gH / 10 + 1, '#fd0', 3, 1, 1);
  // write("Congratulations!", gW/2, 30, '#fd0', 2, 1);
  write("You made your way out", gW/2, 50, '#fff', 2, 1);
  write("Escaping from the Sheriff of Nottingham once", gW/2, 80, '#fff', 1, 1);
  write("again, you go on to write your name into legend", gW/2, 95, '#fff', 1, 1);
  octx.fillStyle = color;
  octx.fillRect(124, 120, 74, 15);
  octx.fillStyle = '#000';
  octx.fillRect(125, 121, 72, 13);
  write("back to the start", gW/2, 125, color, 1, 1);
}

function blit(from = offscreen, to = ctx) {
  // const bmp = from.transferToImageBitmap();
  // to.transferFromImageBitmap(bmp);
  to.imageSmoothingEnabled = false;
  to.drawImage(from, 0, 0, gW, gH, 0, 0, gW * scale, gH * scale);
}

function resizeCanvas() {
  const scaleX = Math.floor(window.innerWidth / gW);
  const scaleY = Math.floor(window.innerHeight / gH);
  scale = Math.min(scaleX, scaleY) || 1;
  // Scaling canvas with transform would be great but Chrome doesn't respect image-rendering: pixelated for the bitmaprenderer context so result is blurred
  // canvas.style.transform = `scale(${scale})`;
  canvas.setAttribute("width", gW * scale);
  canvas.setAttribute("height", gH * scale);
  // offscreen.width = gW * scale;
  // offscreen.height = gH * scale;
  // octx.scale(scale, scale);
}

function song() {
  const buffer = zzfxM(...songData);    // Generate the sample data
  const node = zzfxP(...buffer);        // Play the song
  node.onended = function () {
    titleScreen = 0;
    playScreen = 1;
    songPlaying = 0;
  }
}

function renderTitle(timestamp) {
  octx.fillStyle = ("#4b0e9a");
  octx.fillRect(0, 0, gW, gH);

  var g1 = octx.createRadialGradient(gW,gH,400,180,0,110);
  g1.addColorStop(1, '#423a9c');
  g1.addColorStop(0.7, '#72394a');
  g1.addColorStop(0, '#f17640');
  octx.fillStyle = g1;
  octx.fillRect(0,0,gW,gH);

  write("13", 80, 22, '#773f10', 10, 0, 8);
  write("13", 75, 17, '#773f10', 10, 0, 8);
  write("13", 70, 12, '#e1ae00', 10, 0, 8);

  write("th", 179, 51, '#773f10', 3, 0, 4);
  write("th", 177, 49, '#773f10', 3, 0, 4);
  write("th", 175, 47, '#e1ae00', 3, 0, 4);

  octx.fillStyle = ("#773f10");
  octx.fillRect(87, 68, 130, 6);
  octx.fillStyle = ("#e1ae00");
  octx.fillRect(85, 66, 130, 6);

  octx.fillStyle = ("#773f10");
  octx.fillRect(92, 76, 120, 3);
  octx.fillStyle = ("#e1ae00");
  octx.fillRect(90, 74, 120, 3);

  write("century", 101, 83, '#773f10', 3, 0, 3);
  write("century", 99, 81, '#773f10', 3, 0, 3);
  write("century", 97, 79, '#e1ae00', 3, 0, 3);

  octx.fillStyle = ("#773f10");
  octx.fillRect(92, 98, 120, 5);
  octx.fillStyle = ("#e1ae00");
  octx.fillRect(90, 96, 120, 5);

  write("badger", 100, 107, '#773f10', 4, 0, 1);
  write("badger", 98, 105, '#773f10', 4, 0, 1);
  write("badger", 96, 103, '#e1ae00', 4, 0, 1);

  octx.fillStyle = ("#773f10");
  octx.fillRect(92, 128, 120, 3);
  octx.fillStyle = ("#e1ae00");
  octx.fillRect(90, 125, 120, 3);

  octx.fillStyle = ("#773f10");
  octx.fillRect(98, 131, 110, 33);
  octx.fillStyle = ("#e1ae00");
  octx.fillRect(95, 131, 110, 30);

  // // Crosshair
  // octx.drawImage(sprites, 0, 16, 5, 5, mouse.x - 3, mouse.y - 3, 5, 5);
}

function renderPlayScreen() {
  let color = (mouse.x < 205 && mouse.x > 120 && mouse.y > 78 && mouse.y < 123) ? '#fd0' : '#fff';
  // CLS
  octx.fillStyle = ("#000");
  octx.fillRect(0, 0, gW, gH);

  // write("Exit the Castle", gW / 2, gH / 10, '#fff', 3, 1);
  // write("Exit the Castle", gW / 2, gH / 10 + 2, '#666', 3, 1);
  write("Exit the Castle", gW / 2 + 1, gH / 10 + 1, '#dd0a1e', 3, 1);

  if (results) {
    write("You didn't escape this time", gW/2, 45, "#fff", 1, 1);
    write("You made it to level " + (currentLevel + 1), gW/2, 55, "#fff", 1, 1);
    write("Try again to see if you can make it out", gW/2, 65, "#fff", 1, 1);
  } else {
    write("You are trapped in the Sheriff of Nottingham's castle", gW/2, 50, "#fff", 1, 1);
    write("Survive against his knights to escape", gW/2, 60, "#fff", 1, 1);
  }

  write("Play", gW/2, gH/2, color, 4, 1);
  octx.strokeStyle = color;
  octx.lineWidth = 4;
  octx.strokeRect(122, 80, 80, 40);

  write("WASD/arrows to move, mouse to aim, click to shoot", gW/2, 140, '#eee', 1, 1);
}

function loop(timestamp) {
  let elapsed = timestamp - oldTimeStamp;
  // console.log("elapsed: " + elapsed);
  let fpsInterval = 1000 / fps;
  fpsInterval = Math.min(fpsInterval, 25);
  if (elapsed > Math.floor(fpsInterval)) {
      oldTimeStamp = timestamp;
      if (playScreen) {
        renderPlayScreen();
      } else if (titleScreen) {
        renderTitle();
      } else if (levelUp) {
        renderLevelUp();
      } else if (escaped) {
        renderEnd();
      } else {
        updateGame(elapsed);
        renderGame();
      }
      // Crosshair
      octx.drawImage(sprites, 0, 16, 5, 5, mouse.x - 3, mouse.y - 3, 5, 5);
      blit();
  }
  requestAnimationFrame(loop);
}

function bindEvents() {
  window.addEventListener("resize", (e) => {
    resizeCanvas();
    renderGame();
  });

  document.addEventListener("keydown", e => {
    keyboardState[e.key] = true;
  });

  document.addEventListener("keyup", e => {
    keyboardState[e.key] = false;
  });

  document.addEventListener("mousemove", (e) => {
    mouse.x = Math.round(
      (e.clientX - canvas.getBoundingClientRect().left) / scale
    );
    mouse.y = Math.round(
      (e.clientY - canvas.getBoundingClientRect().top) / scale
    );

    if (p.health <= 0) return;

    // Face player based on mouse position
    p.facing = (mouse.x < gW / 2) ? -1 : 1;
  });

  document.addEventListener("mousedown", (e) => {
    if (levelUp) {
      for (i = 0; i < upgradeCoords.length; i++) {
        if (mouse.y > upgradeCoords[i][0] && mouse.y < upgradeCoords[i][1]) {
          // console.log("upgrade chosen: " + upgrades[i]);
          levelUp = 0;
          init(++currentLevel);
          // Apply chosen upgrade
          if (upgrades[i] == "Extra health") {
            p.health += 20;
            if (p.health > p.maxHealth) p.maxHealth = p.health;
          }
          if (upgrades[i] == "Eagle eye") p.accuracy = 10;
          if (upgrades[i] == "Eagle eye master") p.accuracy = 1;
          if (upgrades[i] == "Extra damage") p.damage = 25;
          if (upgrades[i] == "Damage master") p.damage = 35;
          if (upgrades[i] == "Twin shot") p.multiShot = 2;
          if (upgrades[i] == "Triple shot") p.multiShot = 3;
        }
      }
      return;
    }

    if (titleScreen) {
      if (!songPlaying) {
        songPlaying = 1;
        song();
        setTimeout(() => {
          if (songPlaying == 1) {
            songPlaying = 0;
            titleScreen = 0;
            playScreen = 1;
          }
        }, 9000);
      }
      return;
    }

    if (playScreen) {
      if (mouse.x < 205 && mouse.x > 120 && mouse.y > 78 && mouse.y < 123) {
        playScreen = 0;
        currentLevel = 0;
      }
      return;
    }

    if (escaped && mouse.x < 199 && mouse.x > 124 && mouse.y > 120 && mouse.y < 136) {
      location.reload();
    }

    if (escaped) return;

    if (p.health <= 0) return;

    // Distance from mouse click to center of player sprite
    let dx = mouse.x - (p.x - viewport.x) + spriteSize / 2 - spriteSize;
    let dy = mouse.y - (p.y - viewport.y) + spriteSize / 2 - spriteSize;

    // Get a normalised vector
    let mag = Math.sqrt(dx * dx + dy * dy);
    dx = dx / mag;
    dy = dy / mag;

    p.angle = Math.atan2(dy, dx);
    if (p.angle < 0) p.angle = Math.PI + (Math.PI + p.angle);

    let twinShotOffset = (p.multiShot == 2) ? -5 : 0;

    let accuracy = rotateVector([dx, dy], rnd(-p.accuracy, p.accuracy) + twinShotOffset);

    let projectile = {
        x: p.x + spriteSize / 2 + Math.floor(dx * 10),
        y: p.y + spriteSize / 2 + Math.floor(dy * 10),
        vx: (accuracy[0] * projectileSpeed),
        vy: (accuracy[1] * projectileSpeed),
        angle: p.angle,
        remove: false
    }

    p.projectiles.push(projectile);

    if (p.multiShot > 1) {
      let multi = (p.multiShot == 2) ? rotateVector([dx, dy], 5) : rotateVector([dx, dy], 10);

      // let multi = rotateVector([dx, dy], 10);
      projectile = {
        x: p.x + spriteSize / 2 + Math.floor(dx * 10),
        y: p.y + spriteSize / 2 + Math.floor(dy * 10),
        vx: multi[0] * projectileSpeed,
        vy: multi[1] * projectileSpeed,
        angle: p.angle,
        remove: false
      }
      p.projectiles.push(projectile);
    }

    if (p.multiShot == 3) {
      multi = rotateVector([dx, dy], -10);
      projectile = {
        x: p.x + spriteSize / 2 + Math.floor(dx * 10),
        y: p.y + spriteSize / 2 + Math.floor(dy * 10),
        vx: multi[0] * projectileSpeed,
        vy: multi[1] * projectileSpeed,
        angle: p.angle,
        remove: false
      }
      p.projectiles.push(projectile);
    }

    zzfx(...sounds.fire);
  });
}

function rnd(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}

var rotateVector = function(vec, ang) {
  ang = -ang * (Math.PI/180);
  var cos = Math.cos(ang);
  var sin = Math.sin(ang);
  return new Array(Math.round(10000*(vec[0] * cos - vec[1] * sin))/10000, Math.round(10000*(vec[0] * sin + vec[1] * cos))/10000);
};

function init(l) {
  // Reset for first level
  if (l == 0) {
    p.damage = 20;
    p.accuracy = 20; // 1 is absolutely accurate
    p.multiShot = 1;
    p.maxHealth = 100;
  }

  l = levels[l];
  timer = null;
  if (p.health <= 0) p.health = 100;

  // p.x = 64;
  // p.y = 80;
  // p.facing = 1;
  //
  // Reset for all levels
  p.walking = 0;
  p.attacked = 0;
  p.speed = 1;
  p.frame = 0;
  p.angle = 0;
  p.projectiles = [];
  p.damage =  20;
  p.key = 0;
  enemies = [];

  // const maps = [[[9, 9],[0,0,0,0,-2,0,0,0,0,0,1,1,1,-1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]],[[32, 8],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]];
  // const enemyPositions = [[[16, 24], [112, 24]], [[16, 40], [32, 40], [48, 40], [480, 40], [464, 40], [448, 40]]];
  // const playerPositions = [[64, 80], [256, 96]];

  p.x = l.playerPosition[0];
  p.y = l.playerPosition[1];

  map = new Map(l.map[1], l.map[0][0], l.map[0][1], l.map[2]);

  for (let i = 0; i < l.enemyPositions.length; i++) {
    enemies.push(new Enemy(l.enemyPositions[i][0], l.enemyPositions[i][1]));
  }

  // p.x = playerPositions[l][0];
  // p.y = playerPositions[l][1];

  // console.log(maps[l][1], maps[l][0][0], maps[l][0][1]);
  // map = new Map(maps[l][1], maps[l][0][0], maps[l][0][1]);
  // for (let i = 0; i < enemyPositions[l].length; i++) {
  //   enemies.push(new Enemy(enemyPositions[l][i][0], enemyPositions[l][i][1]));
  // }
}

window.addEventListener("load", () => {
  bindEvents();
  document.body.appendChild(canvas);
  resizeCanvas();
  spritesImg.onload = async function () {

    spritesCtx.imageSmoothingEnabled = false;
    spritesCtx.drawImage(spritesImg, 0, 0, 160, 96, 0, 0, 160, 96);

    // Make #00f transparent
    const imageData = spritesCtx.getImageData(0, 0, 160, 96);
    for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i] < 5 && imageData.data[i + 1] < 5 && imageData.data[i + 2] > 250) {
            imageData.data[i + 3] = 0;
        }
    }
    spritesCtx.clearRect(0, 0, 160, 96);
    spritesCtx.putImageData(imageData, 0, 0);

    init(currentLevel);
    requestAnimationFrame(loop);
  };
  spritesImg.src = "Sprite-0001.png";
});

class Map {
  cols = 32;
  rows = 35;
  tileSize = 16;
  wallOffset = 7;
  tiles = [];
  door = [];

  constructor(tiles, cols, rows, door) {
    this.tiles = tiles;
    this.rows = rows;
    this.cols = cols;
    this.door = door;
    // Update map to set tiles to use
    for (let i = 0; i < this.tiles.length; i++) {
      let mapX = i % this.cols;
      let mapY = Math.floor(i / this.cols);
      if (this.tiles[i] == 0) {
        // Set based on surrounding tiles
        let bitMask = 0;
        // Greater than 0, less than 5 is a floor tile
        if (Math.abs(this.getTile(mapX, mapY - 1) - 2.5) < 2.5) bitMask += 1;
        if (Math.abs(this.getTile(mapX, mapY + 1) - 2.5) < 2.5) bitMask += 8;
        if (Math.abs(this.getTile(mapX - 1, mapY) - 2.5) < 2.5) bitMask += 2;
        if (Math.abs(this.getTile(mapX + 1, mapY) - 2.5) < 2.5) bitMask += 4;

        if (bitMask == 0) {
          if (Math.abs(this.getTile(mapX - 1, mapY + 1) - 2.5) < 2.5)
            bitMask = 64;
          if (Math.abs(this.getTile(mapX + 1, mapY + 1) - 2.5) < 2.5)
            bitMask = 128;
        }
        if (bitMask > 0) this.tiles[i] = bitMask + this.wallOffset;
      } else if (this.tiles[i] == 1) {
        // Set this tile to a random floor tile
        this.tiles[i] = Math.floor(Math.random() * 4) + 1;
      }
    }

    // Turn floor tiles at the top into a wall tile
    for (let i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i] > 4) continue;
      let mapX = i % this.cols;
      let mapY = Math.floor(i / this.cols);
      if (this.getTile(mapX, mapY - 1) == 8 + this.wallOffset)
        this.tiles[i] = 5;
      if (this.getTile(mapX, mapY - 1) == 10 + this.wallOffset)
        this.tiles[i] = 6;
      if (this.getTile(mapX, mapY - 1) == 12 + this.wallOffset)
        this.tiles[i] = 7;
    }
  }

  getTile(col, row) {
    return this.tiles[row * this.cols + col];
  }

  canMoveToXY(x, y) {
    let tile = 0;

    tile = this.getTile(
      Math.floor(x / this.tileSize),
      Math.floor((y + this.tileSize / 2) / this.tileSize)
    );
    if (tile == -1) return false;
    if (tile > 4 && tile < 8) return false;

    tile = this.getTile(
      Math.floor(x / this.tileSize),
      Math.floor(y / this.tileSize)
    );
    return tile == 0 || tile > this.wallOffset ? false : true;
  }

  getSourceCoords(tile) {
    if (tile == -1) return { x: 112, y: 32 };
    if (tile == -2) return { x: 112, y: 16 };
    if (tile > 0 && tile < 5)
      return { x: tile * this.tileSize, y: this.tileSize * 2 };

    if (tile == 5) return { x: 80, y: 16 };
    if (tile == 6) return { x: 96, y: 48 };
    if (tile == 7) return { x: 96, y: 16 };

    // Left wall
    if (tile == 4 + this.wallOffset) return { x: 0, y: 48 };
    // Right wall
    if (tile == 2 + this.wallOffset) return { x: 32, y: 48 };
    // Bottom wall
    if (tile == 1 + this.wallOffset) return { x: 16, y: 48 };
    // Top wall
    if (tile == 8 + this.wallOffset) return { x: 80, y: 0 };

    // Floor at top and left
    if (tile == 3 + this.wallOffset) return { x: 80, y: 32 };
    // Floor at top and right
    if (tile == 5 + this.wallOffset) return { x: 0, y: 32 };
    // Floor at bottom and right
    if (tile == 12 + this.wallOffset) return { x: 96, y: 0 };
    // Floor bottom and left
    if (tile == 10 + this.wallOffset) return { x: 96, y: 32 };
  }

  // gameState.viewport.
  render(sprites, ctx, vx, vy, vw, vh) {
    // Render floor and walls
    let startCol = Math.floor(vx / this.tileSize);
    let endCol = startCol + vw / this.tileSize;
    let startRow = Math.floor(vy / this.tileSize);
    let endRow = startRow + vh / this.tileSize;
    let offsetX = -vx + startCol * this.tileSize;
    let offsetY = -vy + startRow * this.tileSize;
    for (let c = startCol; c <= endCol; c++) {
      for (let r = startRow; r <= endRow; r++) {
        let tile = this.getTile(c, r);
        // console.log(tile, c, r);
        let s = this.getSourceCoords(tile);
        let x = (c - startCol) * 16 + offsetX;
        let y = (r - startRow) * 16 + offsetY;
        if (
          typeof s !== "undefined" &&
          tile &&
          c >= 0 &&
          c < this.cols &&
          r >= 0 &&
          r < this.rows
        ) {
          ctx.drawImage(
            sprites,
            s.x,
            s.y,
            this.tileSize,
            this.tileSize,
            x,
            y,
            this.tileSize,
            this.tileSize
          );
          if (c == this.door[0] && r == this.door[1]) ctx.drawImage(sprites, 112, 32, this.tileSize, this.tileSize, x, y, this.tileSize, this.tileSize);
        }
      }
    }
  }
}

const songData = [
  [[.7,0,51,,.1,.2,3,4,,,3,.9,.05], [.7,0,58,,.25,.2,3,4,,,3,.9,.05]],
  [
    [
      [
        1,
        0,
        11,
        0,
        15,
        0,
        18,
        0,
        20,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        15,
        0,
        14,
        0,
        13,
        0,
        15,
        15.3,
        15.6,
        ,
        ,
      ],
      [
        1,
        0,
        11,
        0,
        15,
        0,
        18,
        0,
        20,
        ,
        ,
        ,
        ,
        0,
        0,
        0,
        0,
        13,
        0,
        16,
        0,
        20,
        0,
        23,
        ,
        ,
        ,
        ,
        0,
        0,
        0,
        0,
        13,
        0,
        16,
        0,
        19,
        0,
        23,
        ,
        ,
        ,
        ,
        0,
        0,
        18,
        0,
        15,
        0,
        16,
        0,
        18,
        18.3,
        18.6,
        ,
        ,
      ],
      [
        0,
        0,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        1,
        0,
        1,
        1,
        1,
        ,
        ,
        -1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        ,
        ,
        13,
        0,
        16,
        0,
        19,
        0,
        23,
        ,
        ,
        ,
        ,
        -1,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        2,
        2.3,
        2.6,
        ,
        ,
      ],
      [
        0,
        0,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        4,
        0,
        4,
        4,
        4,
        ,
        ,
        -1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        4,
        4,
        6,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        3,
        3.3,
        3.6,
        ,
        ,
      ],
      [
        0,
        0,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        8,
        0,
        8,
        8,
        8,
        ,
        ,
        -1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        0,
        7,
        7,
        10,
        ,
        ,
        ,
        ,
        -1,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        6,
        6.3,
        6.6,
        ,
        ,
      ]
    ]
  ],
  [0],
  102
];

// zzfx() - the universal entry point -- returns a AudioBufferSourceNode
zzfx=(...t)=>zzfxP(zzfxG(...t))

// zzfxP() - the sound player -- returns a AudioBufferSourceNode
zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),f=zzfxX.createBuffer(t.length,t[0].length,zzfxR);t.map((d,i)=>f.getChannelData(i).set(d)),e.buffer=f,e.connect(zzfxX.destination),e.start();return e}

// zzfxG() - the sound generator -- returns an array of sample data
zzfxG=(q=1,k=.05,c=220,e=0,t=0,u=.1,r=0,F=1,v=0,z=0,w=0,A=0,l=0,B=0,x=0,G=0,d=0,y=1,m=0,C=0)=>{let b=2*Math.PI,H=v*=500*b/zzfxR**2,I=(0<x?1:-1)*b/4,D=c*=(1+2*k*Math.random()-k)*b/zzfxR,Z=[],g=0,E=0,a=0,n=1,J=0,K=0,f=0,p,h;e=99+zzfxR*e;m*=zzfxR;t*=zzfxR;u*=zzfxR;d*=zzfxR;z*=500*b/zzfxR**3;x*=b/zzfxR;w*=b/zzfxR;A*=zzfxR;l=zzfxR*l|0;for(h=e+m+t+u+d|0;a<h;Z[a++]=f)++K%(100*G|0)||(f=r?1<r?2<r?3<r?Math.sin((g%b)**3):Math.max(Math.min(Math.tan(g),1),-1):1-(2*g/b%2+2)%2:1-4*Math.abs(Math.round(g/b)-g/b):Math.sin(g),f=(l?1-C+C*Math.sin(2*Math.PI*a/l):1)*(0<f?1:-1)*Math.abs(f)**F*q*zzfxV*(a<e?a/e:a<e+m?1-(a-e)/m*(1-y):a<e+m+t?y:a<h-d?(h-a-d)/u*y:0),f=d?f/2+(d>a?0:(a<h-d?1:(h-a)/d)*Z[a-d|0]/2):f),p=(c+=v+=z)*Math.sin(E*x-I),g+=p-p*B*(1-1E9*(Math.sin(a)+1)%2),E+=p-p*B*(1-1E9*(Math.sin(a)**2+1)%2),n&&++n>A&&(c+=w,D+=w,n=0),!l||++J%l||(c=D,v=H,n=n||1);return Z}

// zzfxV - global volume
zzfxV=.3

// zzfxR - global sample rate
zzfxR=44100

// zzfxX - the common audio context
zzfxX=new(window.AudioContext||webkitAudioContext);

//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
zzfxM=(n,f,t,e=125)=>{let l,o,z,r,g,h,x,a,u,c,d,i,m,p,G,M=0,R=[],b=[],j=[],k=0,q=0,s=1,v={},w=zzfxR/e*60>>2;for(;s;k++)R=[s=a=d=m=0],t.map((e,d)=>{for(x=f[e][k]||[0,0,0],s|=!!f[e][k],G=m+(f[e][0].length-2-!a)*w,p=d==t.length-1,o=2,r=m;o<x.length+p;a=++o){for(g=x[o],u=o==x.length+p-1&&p||c!=(x[0]||0)|g|0,z=0;z<w&&a;z++>w-99&&u?i+=(i<1)/99:0)h=(1-i)*R[M++]/2||0,b[r]=(b[r]||0)-h*q+h,j[r]=(j[r++]||0)+h*q+h;g&&(i=g%1,q=x[1]||0,(g|=0)&&(R=v[[c=x[M=0]||0,g]]=v[[c,g]]||(l=[...n[c]],l[2]*=2**((g-12)/12),g>0?zzfxG(...l):[])))}m=G});return[b,j]}
