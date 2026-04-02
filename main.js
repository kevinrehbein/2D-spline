const canvas = document.querySelector(".board");
const board = canvas.getContext("2d");

const generateButton = document.querySelector("#generatebutton");
const clearButton = document.querySelector("#clearbutton");

let pontos = document.querySelector(".points h5");

let controlPoints = [];

function setIntermediatePoints(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t * t * t;

  let x =
    0.5 *
    (2 * p1.x +
      t * (-p0.x + p2.x) +
      t2 * (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) +
      t3 * (-p0.x + 3 * p1.x - 3 * p2.x + p3.x));

  let y =
    0.5 *
    (2 * p1.y +
      t * (-p0.y + p2.y) +
      t2 * (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) +
      t3 * (-p0.y + 3 * p1.y - 3 * p2.y + p3.y));

  return { x, y };
}

function generateCatmullSpline(controlPoints) {
  let splinePoints = [];
  let numSegments = controlPoints.length - 1;
  const pointsPerSegment = 20;
  let p0, p1, p2, p3;

  for (let i = 0; i < numSegments; i++) {
    if (i == 0) {
      p0 = controlPoints[i];
    } else p0 = controlPoints[i - 1];

    if (i == numSegments - 1) {
      p3 = controlPoints[i + 1];
    } else p3 = controlPoints[i + 2];

    p1 = controlPoints[i];
    p2 = controlPoints[i + 1];

    for (let j = 0; j <= pointsPerSegment; j++) {
      let t = j / pointsPerSegment;
      splinePoints.push(setIntermediatePoints(p0, p1, p2, p3, t));
      /*
      p0 = ponto anterior
      p1 = ponto inicial do segmento
      p2 = ponto final do segmento
      p3 = ponto posterior 
      */
    }
  }

  console.log(splinePoints);

  // Glow effect — camada exterior
  board.strokeStyle = "rgba(167,139,250,0.15)";
  board.lineWidth = 10;
  board.beginPath();
  board.moveTo(splinePoints[0].x, splinePoints[0].y);
  for (let i = 1; i < splinePoints.length; i++)
    board.lineTo(splinePoints[i].x, splinePoints[i].y);
  board.stroke();

  // Linha principal
  board.strokeStyle = "#4f9eff";
  board.lineWidth = 2.5;
  board.beginPath();
  board.moveTo(splinePoints[0].x, splinePoints[0].y);
  for (let i = 1; i < splinePoints.length; i++)
    board.lineTo(splinePoints[i].x, splinePoints[i].y);
  board.stroke();
}

function drawControlPoint(x, y) {
  // Anel externo
  board.beginPath();
  board.arc(x, y, 7, 0, 2 * Math.PI);
  board.fillStyle = "rgba(79,158,255,0.15)";
  board.fill();
  // Ponto central
  board.beginPath();
  board.arc(x, y, 3.5, 0, 2 * Math.PI);
  board.fillStyle = "#4f9eff";
  board.fill();
}

canvas.addEventListener("click", (event) => {
  controlPoints.push({ x: event.offsetX, y: event.offsetY });
  let length = controlPoints.length;

  console.log(controlPoints);

  drawControlPoint(controlPoints[length - 1].x, controlPoints[length - 1].y);

  pontos.textContent = "Pontos: " + controlPoints.length;
  console.log(controlPoints);
});

generateButton.addEventListener("click", () => {
  board.clearRect(0, 0, 800, 400);

  controlPoints.forEach((point) => drawControlPoint(point.x, point.y));

  generateCatmullSpline(controlPoints);
});

clearButton.addEventListener("click", () => {
  board.clearRect(0, 0, 800, 400);
  controlPoints = [];
  pontos.textContent = "Pontos: " + controlPoints.length;
});
