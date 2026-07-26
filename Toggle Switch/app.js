function ToggleSwitch() {
  let bulb = document.getElementById("bulb");

  let topPart = bulb.children[0];
  let bottomPart = bulb.children[1];

  let isOn = topPart.classList.contains("bulb-top-on");

  if (isOn) {
    topPart.classList.replace("bulb-top-on", "bulb-top-off");
    bottomPart.classList.replace("bulb-bottom-on", "bulb-bottom-off");
  } else {
    topPart.classList.replace("bulb-top-off", "bulb-top-on");
    bottomPart.classList.replace("bulb-bottom-off", "bulb-bottom-on");
  }
}

document.getElementById("button").addEventListener("click", ToggleSwitch);
