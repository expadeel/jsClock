// written by adeel ahmad <adeel@crimaz.com>

const canvas = document.querySelector("canvas#clock");
const ptr = canvas.getContext("2d");
centreX = window.outerWidth / 2;
centreY = window.outerHeight / 2;
ptr.translate(centreX, centreY);
ptr.beginPath();
ptr.arc(0, 0, 30, 0, 2 * Math.PI);
ptr.fillStyle = "#000000";
ptr.fill();
