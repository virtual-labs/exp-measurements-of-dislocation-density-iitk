var text;
const typeSpeed = 60;

var matSelected = 1;
var timerId,
  typeTarget = $("#typer"),
  tWrapper = $("#toast-wrapper"),
  ti = 0,
  currentStep = 0,
  contrast = 0,
  brightness = 0,
  vac = 0,
  av = 0,
  on = false,
  dropped = false,
  imgs = [],
  mode = 1,
  removeButtonclicked = false,
  inp = 0;

let isImageYDropped = false;
let english = true;
let item = "";

// =============== TYPEWRITER FUNCTION ==================
function type(txt, cur = 0) {
  if (cur == txt.length) {
    timerId = -1;
    return;
  }
  if (cur == 0) {
    typeTarget.html("");
    clearTimeout(timerId);
  }
  typeTarget.append(txt.charAt(cur));
  timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}

// =============== SPEECH FUNCTION ==================
function textToSpeech(text, lang) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  if (lang) utterance.lang = lang;
  window.speechSynthesis.speak(utterance);
}

function hindiVoice() {
  english = false;
  start();
  document.getElementById("dialogue-box-parent").style.display = "none";
}
function englishVoice() {
  english = true;
  start();
  document.getElementById("dialogue-box-parent").style.display = "none";
}

// =============== INITIAL INSTRUCTION ==================
function start() {
  if (english) {
    type("Welcome, Get started by switching on the machine.");
    textToSpeech("Welcome, Get started by switching on the machine.");
  } else {
    type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
    textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
  }
}

// Switch toggle
function toggleSwitch(toggleElement) {
  if (toggleElement.checked) {
    strt();
  } else location.reload();
}

function strt() {
  $("#removeButton").prop("disabled", false);
  showToast("Remove the sample holder");

  if (english) {
    type(
      "Now remove the holder, drag and drop the sample on it and insert the sample holder back into the machine."
    );
    textToSpeech(
      "Now remove the holder, drag and drop the sample on it and insert the sample holder back into the machine."
    );
  } else {
    type(
      "अब होल्डर को बाहर निकालें, उस पर सैंपल रखें और सैंपल होल्डर को वापस मशीन में डालें।"
    );
    textToSpeech(
      "अब होल्डर को बाहर निकालें, उस पर सैंपल रखें और सैंपल होल्डर को वापस मशीन में डालें।",
      "hi-IN"
    );
  }
}

// =============== TOAST ==================
function showToast(msg, type = 0) {
  tWrapper.append(`<div id="t${ti++}" class="toast${
    type == 1 ? " danger" : type == 2 ? " success" : ""
  }"><div class="toast-header">
    <svg width="20" height="20"><rect width="100%" height="100%" fill="${
      type == 1 ? "#ff0000" : type == 2 ? "#31a66a" : "#007aff"
    }"/></svg>
    <strong class="mr-auto">Notification</strong>
    </div><div class="toast-body">${msg}</div></div>`);

  $(`#t${ti - 1}`).toast({ delay: 5500 }).toast("show");
}

// ================= ALL UI ACTIONS ==================
$(function () {
  var vhandle = $("#vslider").find(".custom-handle");
  var avhandle = $("#avslider").find(".custom-handle");
  var mhandle = $("#mslider").find(".custom-handle");

  // DISABLE CALCULATOR INITIALLY
  $("#calcForm :input").prop("disabled", true);

  // Vacuum slider
  $("#vslider").slider({
    min: 0,
    max: 2,
    disabled: true,
    create: () => vhandle.text("Off"),
    slide: (event, ui) => {
      let txt = ["Off", "LV", "HV"][ui.value];
      vhandle.text(txt);
    },
  });

  // Acc Voltage slider
  $("#avslider").slider({
    min: 100,
    max: 102,
    value: 100,
    disabled: true,
    create: () => avhandle.text("100"),
    slide: (event, ui) => {
      let map = { 100: "100", 101: "120", 102: "200" };
      avhandle.text(map[ui.value]);
      ac = map[ui.value];
    },
  });

  // Magnification
  $("#mslider").slider({
    min: 0,
    max: 3,
    disabled: true,
    create: () => mhandle.text("0"),
    slide: (event, ui) => {
      let map = ["0", "L", "H", "VH"];
      mhandle.text(map[ui.value]);
      mag = map[ui.value];
    },
  });

  // Beam On
  $("#on").one("click", function () {
    $("#on").css("backgroundColor", "#21e76e");

    clearInterval(beamTimer);
    clearInterval(beamTimer2);
    beamy = 0;

    ctx.clearRect(0, 0, beamCanvas.width, beamCanvas.height);
    ctx2.clearRect(0, 0, beam2W, beam2H);

    beamTimer = beamTimer2 = -1;
    beamTimer = setInterval(drawBeam, 10);

    showToast("Set Magnification");
    $("#setmag").prop("disabled", false);
    $("#mslider").slider("option", "disabled", false);
    $("#position").prop("disabled", true);
  });

  // Set Vacuum
  $("#setvac").click(function () {
    showToast("Vacuum set.");
    if (english) {
      type("Now set accelerating voltage.");
      textToSpeech("Now set the accelerating voltage.");
    } else {
      type("अब त्वरित वोल्टेज सेट करें|");
      textToSpeech("अब त्वरित वोल्टेज सेट करें", "hi-IN");
    }

    $("#setav").prop("disabled", false);
    $("#avslider").slider("option", "disabled", false);
  });

  // Set Voltage
  $("#setav").click(function () {
    av = $("#avslider").slider("option", "value");

    $("#setvac").prop("disabled", true);
    $("#vslider").slider("option", "disabled", true);

    $("#position").prop("disabled", false);

    if (english) {
      type("Choose the material");
      textToSpeech("Choose the material");
    } else {
      type("अब पदार्थ चुनें|");
      textToSpeech("अब पदार्थ चुनें", "hi-IN");
    }
  });

  // ========== Dislocation Density Calculator ==========
  $("#calcForm").on("submit", function (e) {
    e.preventDefault();
    if ($("#calcForm :input").is(":disabled")) {
      showToast("Complete SEM procedure first!", 1);
      return;
    }

    let L = parseFloat($("#lengthInput").val());
    let A = parseFloat($("#areaInput").val());
    let t = parseFloat($("#thicknessInput").val());

    let Lu = Number($("#lengthUnit").val());
    let Au = Number($("#areaUnit").val());
    let tu = Number($("#thicknessUnit").val());

    let Lm = L * Lu,
      Am = A * Au,
      tm = t * tu;

    if (!Lm || !Am || !tm) {
      showToast("Enter valid values!", 1);
      return;
    }

    let rho = Lm / (Am * tm);
    $("#resultInput").val(rho.toExponential(4));

    type("Dislocation Density Calculated Successfully.");
    textToSpeech("Dislocation density calculated successfully.");
    showToast("ρ calculated!", 2);
  });

  // Insert Sample Holder
  $("#removeButton").click(function () {
    removeButtonclicked = true;
    $("#insertButton").prop("disabled", false);
    showToast("Insert the material");
  });

  $("#insertButton").click(function () {
    if (isImageYDropped) {
      showToast("Set Vacuum");
      $("#vslider").slider("option", "disabled", false);
      $("#setvac").prop("disabled", false);
      if (english) type("Now set the vacuum.");
      else type("अब वैक्यूम सेट करें|");
    } else {
      showToast("Please drag & drop sample first.", 1);
    }
  });
});

// Imaging mode selected
function change() {
  showToast("Switch on the beam");
  if (english) {
    type("Now switch on the beam.");
    textToSpeech("Try switching on the beam.");
  } else {
    type("बीम को चालू करें|");
    textToSpeech("बीम को चालू करें", "hi-IN");
  }
  $("#on").prop("disabled", false);
  $("#setav").prop("disabled", true);
  $("#avslider").slider("option", "disabled", true);
}

// ============ BEAM CODE =============
var beamCanvas = document.getElementById("beam");
var ctx = beamCanvas.getContext("2d");
var beamy = 0,
  beamx = beamCanvas.width / 2;
var beamTimer = -1;

var beamCanvas2 = document.getElementById("beam2");
var ctx2 = beamCanvas2.getContext("2d");
var beam2H = beamCanvas2.height,
  beam2W = beamCanvas2.width;
var beamTimer2 = -1;

function randEx(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBeam() {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(beamx, beamy);
  beamy++;
  ctx.lineTo(beamx + 1, beamy);
  ctx.stroke();

  if (beamy >= beamCanvas.height) {
    clearInterval(beamTimer);
    beamTimer2 = setInterval(drawBeam2, 100);

    finalOutputStep();
  }
}

function drawBeam2() {
  ctx2.clearRect(0, 0, beam2W, beam2H);
  ctx2.strokeStyle = "#FFFFFFBB";
  ctx2.beginPath();
  ctx2.moveTo(beam2W / 2, 23);
  ctx2.lineTo(beam2W / 2 + 50, randEx(0, 50));
  ctx2.stroke();
}

// =============== ENABLE CALCULATOR AT FINAL STEP =============
function enableCalculatorStep() {
  $("#calcForm :input").prop("disabled", false);
  showToast("Now calculate dislocation density", 2);

  if (english) {
    type(
      "Using the output image, count the dislocation lines and calculate dislocation density."
    );
    textToSpeech("Now calculate dislocation density.");
  } else {
    type(
      "आउटपुट छवि में विस्थापन रेखाएँ गिनें और घनत्व की गणना करें।"
    );
    textToSpeech(
      "अब विस्थापन घनत्व की गणना करें।",
      "hi-IN"
    );
  }
}

// =========== FINAL OUTPUT IMAGE SHOW + CALC ENABLE ===========
function finalOutputStep() {
  if (english) {
    type(
      "Output image generated! Count the dislocation lines inside the image."
    );
    textToSpeech(
      "Output image generated! Count the dislocation lines."
    );
  }

  showToast("Set imaging mode");

  if (item == "zebrafish") {
    $("#outImage2, #outImage3").hide();
    $("#outImage1").show(500);
  } else if (item == "metal") {
    $("#outImage1, #outImage3").hide();
    $("#outImage2").show(500);
  } else {
    $("#outImage1, #outImage2").hide();
    $("#outImage3").show(500);
  }

  enableCalculatorStep();
}

// =========== DRAG & DROP SAMPLE CODE ===========
const imageX = document.getElementById("image-x");
const imageY = document.getElementById("image-y");
const removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", () => {
  imageX.style.transform = "translateX(-100%)";
});

imageY.addEventListener("dragstart", (e) =>
  e.dataTransfer.setData("text/plain", "dragging-y")
);

imageX.addEventListener("dragover", (e) => e.preventDefault());

imageX.addEventListener("drop", (e) => {
  e.preventDefault();
  if (!removeButtonclicked)
    return showToast("Remove holder first!", 1);

  const dragged = e.dataTransfer.getData("text/plain");

  if (dragged === "dragging-y" && !isImageYDropped) {
    imageY.style.visibility = "hidden";
    imageX.src = "images/parts/sh1.png";

    isImageYDropped = true;
    item = "metal"; // choose any default output image
    $("#insertButton").prop("disabled", false);
  } else showToast("Follow the instructions!", 1);
});

$("#insertButton").click(() =>
  imageX.style.transform = "translateX(0%)"
);
