// var text;
// const typeSpeed = 60;

// var matSelected = 1;
// var timerId,
//   typeTarget = $("#typer"),
//   tWrapper = $("#toast-wrapper"),
//   ti = 0,
//   currentStep = 0,
//   contrast = 0,
//   brightness = 0,
//   vac = 0,
//   av = 0,
//   on = false,
//   dropped = false,
//   imgs = [],
//   mode = 1,
//   removeButtonclicked = false,
//   inp = 0;

// let isImageYDropped = false; // Flag to track if image-y has been dropped

// // typing function
// function type(txt, cur = 0) {
//   if (cur == txt.length) {
//     timerId = -1;
//     return;
//   }
//   if (cur == 0) {
//     typeTarget.html("");
//     clearTimeout(timerId);
//   }
//   typeTarget.append(txt.charAt(cur));
//   timerId = setTimeout(type, typeSpeed, txt, cur + 1);
// }

// // text to speech function

// let english = true;
// function toggleVoice(btn) {
//   english = !english;
//   if (english) btn.innerHTML = "ENG";
//   else btn.innerHTML = "HIN";
// }

// function textToSpeech(text, lang) {
//   // Check if the SpeechSynthesis API is available in the browser
//   if ("speechSynthesis" in window) {
//     // Create a new SpeechSynthesisUtterance object
//     const utterance = new SpeechSynthesisUtterance();

//     // Set the text to be spoken
//     utterance.text = text;

//     // Set the language
//     if (lang) {
//       utterance.lang = lang;
//     }

//     // Start the speech synthesis
//     window.speechSynthesis.speak(utterance);
//   } else {
//     console.error("Speech synthesis is not supported in this browser.");
//   }
// }
// // text to speech fxn end

// // switch on
// function toggleSwitch(toggleElement) {
//   if (toggleElement.checked) {
//     // Switch is ON, trigger strt()
//     strt();
//   } else {
//     // Switch is OFF, reload the page
//     location.reload();
//   }
// }

// function strt() {
//   $("#removeButton").prop("disabled", false);

//   showToast("Remove the sample holder");
//   if (english) {
//     type(
//       "Now remove the holder, drag and drop the sample on it and insert the sample holder back into the machine."
//     );
//     textToSpeech(
//       "Now remove the holder, drag and drop the sample on it and insert the sample holder back into the machine."
//     );
//   } else {
//     type(
//       "अब होल्डर को बाहर निकालें, उस पर सैंपल रखें और सैंपल होल्डर को वापस मशीन में डालें।"
//     );
//     textToSpeech(
//       "अब होल्डर को बाहर निकालें, उस पर सैंपल रखें और सैंपल होल्डर को वापस मशीन में डालें।",
//       "hi-IN"
//     );
//   }
// }

// // toast message function
// function showToast(msg, type = 0) {
//   tWrapper.append(`<div id="t${ti++}" class="toast${
//     type == 1 ? " danger" : type == 2 ? " success" : ""
//   }" role="alert" aria-live="assertive" aria-atomic="true">
//     <div class="toast-header">
//         <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${
//           type == 1 ? "#ff0000" : type == 2 ? "#31a66a" : "#007aff"
//         }" /></svg>
//         <strong class="mr-auto">Notification</strong>
//     </div>
//     <div class="toast-body">
//         ${msg}
// </div>
// </div>`);
//   $(`#t${ti - 1}`).toast({
//     delay: 5500,
//   });
//   $(`#t${ti - 1}`).toast("show");
// }
// // end of toast msg function

// $(function () {
//   if (english) {
//     type("Welcome, Get started by switching on the machine.");
//     textToSpeech("Welcome, Get started by switching on the machine.");
//   } else {
//     type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
//     textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
//   }

//   var vhandle = $("#vslider").find(".custom-handle");
//   var avhandle = $("#avslider").find(".custom-handle");
//   var mhandle = $("#mslider").find(".custom-handle");

//   // vaccum slider
//   $("#vslider").slider({
//     min: 0,
//     max: 2,
//     disabled: true,
//     create: function () {
//       vhandle.text("Off");
//     },
//     slide: function (event, ui) {
//       var txt = "Off";
//       switch (ui.value) {
//         case 0:
//           txt = "Off";
//           break;
//         case 1:
//           txt = "LV";
//           break;
//         case 2:
//           txt = "HV";
//           break;
//       }
//       vhandle.text(txt);
//     },
//   });

//   //  acc voltage slider
//   $("#avslider").slider({
//     min: 100,
//     max: 102,
//     value: 100,
//     animate: "slow",
//     orientation: "horizontal",
//     disabled: true,
//     create: function () {
//       avhandle.text($(this).slider("value"));
//     },
//     slide: function (event, ui) {
//       if (ui.value == 100) {
//         avhandle.text("100");
//         ac = "100";
//       }
//       if (ui.value == 101) {
//         avhandle.text("120");
//         ac = "120";
//       }
//       if (ui.value == 102) {
//         avhandle.text("200");
//         ac = "200";
//       }
//     },
//   });

//   // magnification slider
//   $("#mslider").slider({
//     min: 0,
//     max: 3,
//     disabled: true,
//     create: function () {
//       mhandle.text("0");
//     },
//     slide: function (event, ui) {
//       var txt = "0";
//       switch (ui.value) {
//         case 0:
//           txt = "0";
//           mag = "0";
//           break;
//         case 1:
//           txt = "L";
//           mag = "L";
//           break;
//         case 2:
//           txt = "H";
//           mag = "H";
//           break;
//         case 3:
//           txt = "VH";
//           mag = "VH";
//           break;
//       }
//       mhandle.text(txt);
//     },
//   });

//   // beam on
//   $("#on").one("click", function () {
//     $("#on").css("backgroundColor", "#21e76e");
//     // beam comes here
//     clearInterval(beamTimer);
//     clearInterval(beamTimer2);
//     beamy = 0;
//     ctx.clearRect(0, 0, beamCanvas.width, beamCanvas.height);
//     ctx2.clearRect(0, 0, beam2W, beam2H);
//     beamTimer = beamTimer2 = -1;
//     beamTimer = setInterval(drawBeam, 10);

//     showToast("Set Magnificaton");
//     $("#setmag").prop("disabled", false);
//     $("#mslider").slider("option", "disabled", false);
//     $("#position").prop("disabled", true);
//   });
//   // beam ends

//   // vaccum
//   $("#setvac").click(function () {
//     if (english) {
//       type("Now set accelerating voltage.");
//       textToSpeech("Now set the accelerating voltage.");
//     } else {
//       type("अब त्वरित वोल्टेज सेट करें|");
//       textToSpeech("अब त्वरित वोल्टेज सेट करें", "hi-IN");
//     }
//     showToast("Vaccum set.");

//     $("#setav").prop("disabled", false);
//     $("#avslider").slider("option", "disabled", false);
//     $("#vacImg").animate(
//       {
//         fontSize: 220,
//       },
//       {
//         step: function (now, fx) {
//           $(this).css("clip", `rect(${Math.round(now)}px, 17rem, 300px, 0)`);
//         },
//         duration: 2500,
//         easing: "linear",
//       }
//     );

//     $("#removeButton").prop("disabled", true);
//     $("#insertButton").prop("disabled", true);
//   });

//   // acc voltage
//   $("#setav").click(function () {
//     av = $("#avslider").slider("option", "value");

//     $("#setvac").prop("disabled", true);
//     $("#vslider").slider("option", "disabled", true);
//     $("#position").prop("disabled", false);
//     if (english) {
//       type("Choose the material");
//       textToSpeech("Choose the material");
//     } else {
//       type("अब पदार्थ चुनें|");
//       textToSpeech("अब पदार्थ चुनें", "hi-IN");
//     }
//   });

//   // magnification
//   $("#setmag").click(function () {
//     showToast("Magnification set");
//     type("Now you can see the output image.");

//     mode = $(".imgMode option:selected").text();
//     // inp = $("#position :selected").val();

//     url = "../images/outputs/" + av + mag + item + mode + ".jpg";

//     $("#outImage2").attr("src", url);
//     $("#outImage2").attr("alt", url);

//     $("#outImage1").attr("src", url);
//     $("#outImage1").attr("alt", url);

//     $("#outImage3").attr("src", url);
//     $("#outImage3").attr("alt", url);
//   });

//   // insert
//   $("#removeButton").click(function () {
//     removeButtonclicked = true;
//     $("#insertButton").prop("disabled", false);
//     showToast("Insert the material");
//   });

//   $("#insertButton").click(function () {
//     if (isImageYDropped == true) {
//       showToast("Set vaccum");
//       setTimeout(function () {
//         $("#part11").css("visibility", "visible");
//       }, 1500);
//       $("#vslider").slider("option", "disabled", false);
//       $("#setvac").prop("disabled", false);
//       if (english) {
//         type("Now set the vacuum.");
//         textToSpeech("Now set the vacuum.");
//       } else {
//         type("अब वैक्यूम सेट करें|");
//         textToSpeech("अब वैक्यूम सेट करें", "hi-IN");
//       }
//     } else {
//       showToast("Please drag and drop sample before proceeding.", 1);
//     }
//   });
// });

// // imaging mode selection
// function change() {
//   showToast("Switch on the beam");
//   if (english) {
//     type("Now switch on the beam.");
//     textToSpeech("Try to switch on the beam now.");
//   } else {
//     type("बीम को चालू करने का प्रयास करें|");
//     textToSpeech("बीम को चालू करने का प्रयास करें", "hi-IN");
//   }
//   $("#on").prop("disabled", false);

//   $("#setav").prop("disabled", true);
//   $("#avslider").slider("option", "disabled", true);
// }
// // imaging mode selection code end

// // beam code start
// var beamCanvas = document.getElementById("beam");
// var ctx = beamCanvas.getContext("2d");
// var beamy = 0,
//   beamx = parseInt(beamCanvas.width / 2),
//   beamWidth,
//   beamTimer = -1;
// var beamCanvas2 = document.getElementById("beam2");
// var ctx2 = beamCanvas2.getContext("2d");
// var beam2H = beamCanvas2.height,
//   beam2W = beamCanvas2.width,
//   beamx2 = parseInt(beamCanvas2.width / 2),
//   beamTimer2 = -1;

// function randEx(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function drawBeam() {
//   ctx.beginPath();

//   beamWidth = Math.sin((beamy * 3.14) / 160) * 7;
//   ctx.shadowBlur = 1;
//   ctx.shadowColor = "red";
//   ctx.strokeStyle = "red";
//   ctx.shadowOffsetY = 0;
//   ctx.shadowOffsetX = beamWidth;
//   ctx.moveTo(beamx, beamy);
//   ctx.lineTo(beamx + 1, beamy);
//   ctx.stroke();

//   ctx.shadowOffsetX = -beamWidth / 2;
//   ctx.moveTo(beamx, beamy);
//   ctx.lineTo(beamx + 1, beamy);
//   ctx.stroke();

//   ctx.shadowOffsetX = beamWidth / 2;
//   ctx.moveTo(beamx, beamy);
//   ctx.lineTo(beamx + 1, beamy);
//   ctx.stroke();

//   ctx.shadowOffsetX = -beamWidth;
//   ctx.moveTo(beamx, beamy);
//   beamy += 1;
//   ctx.lineTo(beamx, beamy);
//   ctx.stroke();
//   if (beamy >= beamCanvas.height) {
//     clearInterval(beamTimer);
//     beamTimer = -1;
//     beamTimer2 = setInterval(drawBeam2, 100);

//     if (english) {
//       type(
//         "The output image is displaying on the right side, you can also change the magnification."
//       );
//       textToSpeech(
//         "The output image is displaying on the right side, you can also change the magnification."
//       );
//     } else {
//       type(
//         "आउटपुट छवि दाईं ओर प्रदर्शित हो रही है, आप आवर्धन भी बदल सकते हैं|"
//       );
//       textToSpeech(
//         "आउटपुट छवि दाईं ओर प्रदर्शित हो रही है, आप आवर्धन भी बदल सकते हैं|",
//         "hi-IN"
//       );
//     }
//     showToast("Set imaging mode");

//     if (item == "zebrafish") {
//       $("#outImage2").hide();
//       $("#outImage3").hide();
//       $("#outImage1").show(500);
//       showToast("Image 1 Generated successfully", 2);
//     } else if (item == "metal") {
//       $("#outImage1").hide();
//       $("#outImage3").hide();
//       $("#outImage2").show(500);
//       showToast("Image 2 Generated successfully", 2);
//     } else if (item == "ceramic") {
//       $("#outImage1").hide();
//       $("#outImage2").hide();
//       $("#outImage3").show(500);
//       showToast("Image 3 Generated successfully", 2);
//     }
//   }
// }

// function drawBeam2() {
//   ctx2.beginPath();
//   ctx2.clearRect(0, 0, beam2W, beam2H);
//   ctx2.strokeStyle = "#FFFFFFBB";
//   ctx2.moveTo(beamx2, 23);
//   ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
//   ctx2.moveTo(beamx2 - 6, 23);
//   ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
//   ctx2.stroke();
// }
// // beam code end

// // sample and holder move
// const imageX = document.getElementById("image-x");
// const imageY = document.getElementById("image-y");
// // const imageA = document.getElementById("image-a");
// // const imageB = document.getElementById("image-b");

// const removeButton = document.getElementById("removeButton");
// const insertButton = document.getElementById("insertButton");

// removeButton.addEventListener("click", () => {
//   imageX.style.transform = "translateX(-100%)"; // Move image X from right to left
// });

// imageY.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", "dragging-y"); // Allow image Y to be draggable
// });

// // imageA.addEventListener("dragstart", (e) => {
// //   e.dataTransfer.setData("text/plain", "dragging-a"); // Allow image A to be draggable
// // });

// // imageB.addEventListener("dragstart", (e) => {
// //   e.dataTransfer.setData("text/plain", "dragging-b"); // Allow image B to be draggable
// // });

// imageX.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// imageX.addEventListener("drop", (e) => {
//   e.preventDefault();
//   const draggedItem = e.dataTransfer.getData("text/plain");

//   if (
//     draggedItem === "dragging-y" &&
//     isImageYDropped === false &&
//     removeButtonclicked == true
//   ) {
//     imageY.style.visibility = "hidden";
//     isImageYDropped = true; // Set the flag when image-_ is dropped
//     item = "zebrafish";
//     imageX.src = "../images/parts/sh1.png"; // Replace image X with image Z when any image is dropped onto it
//     $("#insertButton").prop("disabled", false);
//     document.getElementById("sample").innerHTML = "";
//   }
//   //  else if (
//   //   draggedItem === "dragging-a" &&
//   //   isImageYDropped === false &&
//   //   removeButtonclicked == true
//   // ) {
//   //   imageA.style.visibility = "hidden";
//   //   isImageYDropped = true; // Set the flag when image-_ is dropped
//   //   item = "metal";
//   //   imageX.src = "../images/parts/sh2.png"; // Replace image X with image Z when any image is dropped onto it
//   //   $("#insertButton").prop("disabled", false);
//   // } else if (
//   //   draggedItem === "dragging-b" &&
//   //   isImageYDropped === false &&
//   //   removeButtonclicked == true
//   // ) {
//   //   imageB.style.visibility = "hidden";
//   //   isImageYDropped = true; // Set the flag when image-_ is dropped
//   //   item = "ceramic";
//   //   imageX.src = "../images/parts/sh3.png"; // Replace image X with image Z when any image is dropped onto it
//   //   $("#insertButton").prop("disabled", false);
//   // }
//   else {
//     showToast("Please follow the instructions", 1);
//   }
// });

// insertButton.addEventListener("click", () => {
//   imageX.style.transform = "translateX(0%)"; // Move image X back to its original position
// });
// // sample and holder move end

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

let isImageYDropped = false; // Flag to track if image-y has been dropped

// typing function
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

// text to speech function

let english = true;
// function toggleVoice(btn) {
//   english = !english;
//   if (english) btn.innerHTML = "ENG";
//   else btn.innerHTML = "HIN";
// }

function hindiVoice(btn) {
  english = false;
  start();
  document.getElementById("dialogue-box-parent").style.display = 'none';
}

function englishVoice(btn) {
  english = true;
  start();
  document.getElementById("dialogue-box-parent").style.display = 'none';
}

function textToSpeech(text, lang) {
  // Check if the SpeechSynthesis API is available in the browser
  if ("speechSynthesis" in window) {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    utterance.text = text;

    // Set the language
    if (lang) {
      utterance.lang = lang;
    }

    // Start the speech synthesis
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech synthesis is not supported in this browser.");
  }
}
// text to speech fxn end


// reset function
// function reset() {
//   location.reload()
// }
// function reloadPage() {
//   location.reload();
// }

// // Add an event listener to the button
// document.getElementById("reloadButton").addEventListener("click", reloadPage);

function start() {
  if (english) {
    type("Welcome, Get started by switching on the machine.");
    textToSpeech("Welcome, Get started by switching on the machine.");
  } else {
    type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
    textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
  }
}

// switch on
function toggleSwitch(toggleElement) {
  if (toggleElement.checked) {
    // Switch is ON, trigger strt()
    strt();
  } else {
    // Switch is OFF, reload the page
    location.reload();
  }
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

// toast message function
function showToast(msg, type = 0) {
  tWrapper.append(`<div id="t${ti++}" class="toast${
    type == 1 ? " danger" : type == 2 ? " success" : ""
  }" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${
          type == 1 ? "#ff0000" : type == 2 ? "#31a66a" : "#007aff"
        }" /></svg>
        <strong class="mr-auto">Notification</strong>
    </div>
    <div class="toast-body">
        ${msg}
</div>
</div>`);
  $(`#t${ti - 1}`).toast({
    delay: 5500,
  });
  $(`#t${ti - 1}`).toast("show");
}
// end of toast msg function
$(function () {
  var vhandle = $("#vslider").find(".custom-handle");
  var avhandle = $("#avslider").find(".custom-handle");
  var mhandle = $("#mslider").find(".custom-handle");

  // vaccum slider
  $("#vslider").slider({
    min: 0,
    max: 2,
    disabled: true,
    create: function () {
      vhandle.text("Off");
    },
    slide: function (event, ui) {
      var txt = "Off";
      switch (ui.value) {
        case 0:
          txt = "Off";
          break;
        case 1:
          txt = "LV";
          break;
        case 2:
          txt = "HV";
          break;
      }
      vhandle.text(txt);
    },
  });

  //  acc voltage slider
  $("#avslider").slider({
    min: 100,
    max: 102,
    value: 100,
    animate: "slow",
    orientation: "horizontal",
    disabled: true,
    create: function () {
      avhandle.text($(this).slider("value"));
    },
    slide: function (event, ui) {
      if (ui.value == 100) {
        avhandle.text("100");
        ac = "100";
      }
      if (ui.value == 101) {
        avhandle.text("120");
        ac = "120";
      }
      if (ui.value == 102) {
        avhandle.text("200");
        ac = "200";
      }
    },
  });

  // magnification slider
  $("#mslider").slider({
    min: 0,
    max: 3,
    disabled: true,
    create: function () {
      mhandle.text("0");
    },
    slide: function (event, ui) {
      var txt = "0";
      switch (ui.value) {
        case 0:
          txt = "0";
          mag = "0";
          break;
        case 1:
          txt = "L";
          mag = "L";
          break;
        case 2:
          txt = "H";
          mag = "H";
          break;
        case 3:
          txt = "VH";
          mag = "VH";
          break;
      }
      mhandle.text(txt);
    },
  });

  // beam on
  $("#on").one("click", function () {
    $("#on").css("backgroundColor", "#21e76e");
    // beam comes here
    clearInterval(beamTimer);
    clearInterval(beamTimer2);
    beamy = 0;
    ctx.clearRect(0, 0, beamCanvas.width, beamCanvas.height);
    ctx2.clearRect(0, 0, beam2W, beam2H);
    beamTimer = beamTimer2 = -1;
    beamTimer = setInterval(drawBeam, 10);

    showToast("Set Magnificaton");
    $("#setmag").prop("disabled", false);
    $("#mslider").slider("option", "disabled", false);
    $("#position").prop("disabled", true);
  });
  // beam ends

  // vaccum
  $("#setvac").click(function () {
    if (english) {
      type("Now set accelerating voltage.");
      textToSpeech("Now set the accelerating voltage.");
    } else {
      type("अब त्वरित वोल्टेज सेट करें|");
      textToSpeech("अब त्वरित वोल्टेज सेट करें", "hi-IN");
    }
    showToast("Vaccum set.");

    $("#setav").prop("disabled", false);
    $("#avslider").slider("option", "disabled", false);
    $("#vacImg").animate(
      {
        fontSize: 220,
      },
      {
        step: function (now, fx) {
          $(this).css("clip", `rect(${Math.round(now)}px, 17rem, 300px, 0)`);
        },
        duration: 2500,
        easing: "linear",
      }
    );

    $("#removeButton").prop("disabled", true);
    $("#insertButton").prop("disabled", true);
  });

  // acc voltage
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

  // magnification
  // $("#setmag").click(function () {
  //   showToast("Magnification set");
  //   type("Now you can see the output image.");

  //   mode = $(".imgMode option:selected").text();
  //   // inp = $("#position :selected").val();

  //   url = "../images/outputs/" + av + mag + item + mode + ".jpg";

  //   $("#outImage2").attr("src", url);
  //   $("#outImage2").attr("alt", url);

  //   $("#outImage1").attr("src", url);
  //   $("#outImage1").attr("alt", url);

  //   $("#outImage3").attr("src", url);
  //   $("#outImage3").attr("alt", url);
  // });

  // density values
  document.getElementById("calcForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting the traditional way (reloading the page)
    event.preventDefault();

    // Get the value from the input field
    let lengthValue = parseFloat(document.getElementById("lengthInput").value);

    // Check if the value is a number
    if (!isNaN(lengthValue)) {
        // Calculate the result using the formula: ρ = length / (66 * 100)
        let result = lengthValue / (66 * 100);

        // Display the result in the result input field
        document.getElementById("resultInput").value = result.toFixed(4); // Displaying 4 decimal places
    } else {
        // If the input is not a number, alert the user
        alert("Please enter a valid number.");
    }
});


  // insert
  $("#removeButton").click(function () {
    removeButtonclicked = true;
    $("#insertButton").prop("disabled", false);
    showToast("Insert the material");
  });

  $("#insertButton").click(function () {
    if (isImageYDropped == true) {
      showToast("Set vaccum");
      setTimeout(function () {
        $("#part11").css("visibility", "visible");
      }, 1500);
      $("#vslider").slider("option", "disabled", false);
      $("#setvac").prop("disabled", false);
      if (english) {
        type("Now set the vacuum.");
        textToSpeech("Now set the vacuum.");
      } else {
        type("अब वैक्यूम सेट करें|");
        textToSpeech("अब वैक्यूम सेट करें", "hi-IN");
      }
    } else {
      showToast("Please drag and drop sample before proceeding.", 1);
    }
  });
});

// imaging mode selection
function change() {
  showToast("Switch on the beam");
  if (english) {
    type("Now switch on the beam.");
    textToSpeech("Try to switch on the beam now.");
  } else {
    type("बीम को चालू करने का प्रयास करें|");
    textToSpeech("बीम को चालू करने का प्रयास करें", "hi-IN");
  }
  $("#on").prop("disabled", false);

  $("#setav").prop("disabled", true);
  $("#avslider").slider("option", "disabled", true);
}
// imaging mode selection code end

// beam code start
var beamCanvas = document.getElementById("beam");
var ctx = beamCanvas.getContext("2d");
var beamy = 0,
  beamx = parseInt(beamCanvas.width / 2),
  beamWidth,
  beamTimer = -1;
var beamCanvas2 = document.getElementById("beam2");
var ctx2 = beamCanvas2.getContext("2d");
var beam2H = beamCanvas2.height,
  beam2W = beamCanvas2.width,
  beamx2 = parseInt(beamCanvas2.width / 2),
  beamTimer2 = -1;

function randEx(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBeam() {
  ctx.beginPath();

  beamWidth = Math.sin((beamy * 3.14) / 160) * 7;
  ctx.shadowBlur = 1;
  ctx.shadowColor = "red";
  ctx.strokeStyle = "red";
  ctx.shadowOffsetY = 0;
  ctx.shadowOffsetX = beamWidth;
  ctx.moveTo(beamx, beamy);
  ctx.lineTo(beamx + 1, beamy);
  ctx.stroke();

  ctx.shadowOffsetX = -beamWidth / 2;
  ctx.moveTo(beamx, beamy);
  ctx.lineTo(beamx + 1, beamy);
  ctx.stroke();

  ctx.shadowOffsetX = beamWidth / 2;
  ctx.moveTo(beamx, beamy);
  ctx.lineTo(beamx + 1, beamy);
  ctx.stroke();

  ctx.shadowOffsetX = -beamWidth;
  ctx.moveTo(beamx, beamy);
  beamy += 1;
  ctx.lineTo(beamx, beamy);
  ctx.stroke();
  if (beamy >= beamCanvas.height) {
    clearInterval(beamTimer);
    beamTimer = -1;
    beamTimer2 = setInterval(drawBeam2, 100);

    if (english) {
      type(
        "The output image is displaying on the right side, To calculate the dislocation density count the number of these dislocation lines within image."
      );
      textToSpeech(
        "The output image is displaying on the right side, To calculate the dislocation density count the number of these dislocation lines within image."
      );
    } else {
      type(
        "आउटपुट छवि दाईं ओर प्रदर्शित हो रही है, विस्थापन घनत्व की गणना करने के लिए छवि में इन विस्थापन रेखाओं की संख्या गिनें। "
      );
      textToSpeech(
        "आउटपुट छवि दाईं ओर प्रदर्शित हो रही है, विस्थापन घनत्व की गणना करने के लिए छवि में इन विस्थापन रेखाओं की संख्या गिनें। ",
        "hi-IN"
      );
    }
    showToast("Set imaging mode");

    if (item == "zebrafish") {
      $("#outImage2").hide();
      $("#outImage3").hide();
      $("#outImage1").show(500);
      showToast("Image 1 Generated successfully", 2);
    } else if (item == "metal") {
      $("#outImage1").hide();
      $("#outImage3").hide();
      $("#outImage2").show(500);
      showToast("Image 2 Generated successfully", 2);
    } else if (item == "ceramic") {
      $("#outImage1").hide();
      $("#outImage2").hide();
      $("#outImage3").show(500);
      showToast("Image 3 Generated successfully", 2);
    }
  }
}

function drawBeam2() {
  ctx2.beginPath();
  ctx2.clearRect(0, 0, beam2W, beam2H);
  ctx2.strokeStyle = "#FFFFFFBB";
  ctx2.moveTo(beamx2, 23);
  ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
  ctx2.moveTo(beamx2 - 6, 23);
  ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
  ctx2.stroke();
}
// beam code end

// sample and holder move
const imageX = document.getElementById("image-x");
const imageY = document.getElementById("image-y");
// const imageA = document.getElementById("image-a");
// const imageB = document.getElementById("image-b");

const removeButton = document.getElementById("removeButton");
const insertButton = document.getElementById("insertButton");

removeButton.addEventListener("click", () => {
  imageX.style.transform = "translateX(-100%)"; // Move image X from right to left
});

imageY.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "dragging-y"); // Allow image Y to be draggable
});

// imageA.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", "dragging-a"); // Allow image A to be draggable
// });

// imageB.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", "dragging-b"); // Allow image B to be draggable
// });

imageX.addEventListener("dragover", (e) => {
  e.preventDefault();
});

imageX.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedItem = e.dataTransfer.getData("text/plain");

  if (
    draggedItem === "dragging-y" &&
    isImageYDropped === false &&
    removeButtonclicked == true
  ) {
    imageY.style.visibility = "hidden";
    isImageYDropped = true; // Set the flag when image-_ is dropped
    item = "zebrafish";
    imageX.src = "../images/parts/sh1.png"; // Replace image X with image Z when any image is dropped onto it
    $("#insertButton").prop("disabled", false);
    document.getElementById("sample").innerHTML = "";
  }
  //  else if (
  //   draggedItem === "dragging-a" &&
  //   isImageYDropped === false &&
  //   removeButtonclicked == true
  // ) {
  //   imageA.style.visibility = "hidden";
  //   isImageYDropped = true; // Set the flag when image-_ is dropped
  //   item = "metal";
  //   imageX.src = "../images/parts/sh2.png"; // Replace image X with image Z when any image is dropped onto it
  //   $("#insertButton").prop("disabled", false);
  // } else if (
  //   draggedItem === "dragging-b" &&
  //   isImageYDropped === false &&
  //   removeButtonclicked == true
  // ) {
  //   imageB.style.visibility = "hidden";
  //   isImageYDropped = true; // Set the flag when image-_ is dropped
  //   item = "ceramic";
  //   imageX.src = "../images/parts/sh3.png"; // Replace image X with image Z when any image is dropped onto it
  //   $("#insertButton").prop("disabled", false);
  // }
  else {
    showToast("Please follow the instructions", 1);
  }
});

insertButton.addEventListener("click", () => {
  imageX.style.transform = "translateX(0%)"; // Move image X back to its original position
});
// sample and holder move end
