const tutorialButton = document.getElementById ("tutorialbutton")
const tutorialMenu = document.getElementById ("tutorialmenu")
const money = document.getElementById ("money")
const pharmacy = document.getElementById ("pharmacy")
const varna = document.getElementById ("varna")
const buyMenu = document.getElementById ("buymenu")
const storageMenu = document.getElementById ("storagemenu")
const hydroAcid = document.getElementById ("drug1")
const pseudo = document.getElementById ("drug2")
const efedrin = document.getElementById ("drug3")
const lith = document.getElementById ("drug4")
const hydroAcid3 = document.getElementById ("drug5")
const pseudo3 = document.getElementById ("drug6")
const efedrin3 = document.getElementById ("drug7")
const lith3 = document.getElementById ("drug8")
const cook = document.getElementById ("cook")
const storageSell = document.getElementById ("storagesell")
const sell = document.getElementById ("sell")
const storageDrug = document.getElementById ("storagedrug")
const phone = document.getElementById ("phone")
const phone2 = document.getElementById ("phone2") 
const close = document.getElementById ("close")
const phoneText = document.getElementById ("phonetext")
const upgrade1 = document.getElementById ("upgrade1")
const upgrade2 = document.getElementById ("upgrade2")
const upgrade3 = document.getElementById ("upgrade3")
const drugUpgrade1 = document.getElementById ("drugupgrade1")
const drugUpgrade2 = document.getElementById ("drugupgrade2")
const drugUpgrade3 = document.getElementById ("drugupgrade3")
const out = document.getElementById ("out")
const next = document.getElementById ("next")
const dry = document.getElementById ("dry")
const garden = document.getElementById ("garden")
const gardenPrice = document.getElementById ("gardenprice")
const seedStorage = document.getElementById ("drug9")
const buySeed = document.getElementById ("drug11")

let moneyCounter = 100
let hydroAcid2 = 25
let pseudo2 = 25
let efedrin2 = 25
let lith2 = 25
let storageHydroAcid = 0
let storagePseudo = 0
let storageEfedrin = 0
let storageLith = 0
let cookProcess = 1
let meth = 150
let storageMeth = 0
let sellProcess = 1
let upgradePrice1 = 500
let upgradePrice2 = 1000
let upgradePrice3 = 2500
let upgradeResult1 = 50
let upgradeResult2 = 100
let upgradeResult3 = 200
let seed = 0
let seedPrice = 10

tutorialButton.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/gamebackground.png)";
    tutorialMenu.style.display = "none";
    money.style.display = "block"
    storagemenu.style.display = "block"
    cook.style.display = "block"
    phone2.style.display = "block"
    out.style.display = "block"
    storagesell.style.display = "block"
    next.style.display = "block"
    dry.style.display = "block"
}
out.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/town.png)";
    phone2.style.display = "block"
    cook.style.display = "none"
    storagemenu.style.display = "none"
    pharmacy.style.display = "block"
    sell.style.display = "block"
    out.style.display = "none"
    varna.style.display = "block"
    storagesell.style.display = "block"
    buyMenu.style.display = "none"
    next.style.display = "none"
    dry.style.display = "none"
    garden.style.display = "block"
    gardenPrice.style.display = "none"
}
next.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/weedroom.png)";
  storagesell.style.display = "none"
  cook.style.display = "none"
  next.style.display = "none"
  out.style.display = "none"
  varna.style.display = "block"
  dry.style.display = "none"
}
garden.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/gardencenter.png)";
  cook.style.display = "none"
  storageSell.style.display = "none"
  sell.style.display = "none"
  varna.style.display = "none"
  pharmacy.style.display = "none"
  out.style.display = "block"
  garden.style.display = "none"
  gardenPrice.style.display = "block"
}
pharmacy.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/pharmacy.png)";
    pharmacy.style.display = "none"
    varna.style.display = "none"
    buyMenu.style.display = "block"
    cook.style.display = "none"
    storageMenu.style.display = "none"
    cook.style.display = "none"
    storageSell.style.display = "none"
    sell.style.display = "none"
    phone.style.display = "none"
    phoneText.style.display = "none"
    close.style.display = "none"
    out.style.display = "block"
    garden.style.display = "none"
}
varna.onclick = () => { 
    document.body.style.backgroundImage = "url(./res/img/gamebackground.png)";
    varna.style.display = "none"
    pharmacy.style.display = "none"
    buyMenu.style.display = "none"
    cook.style.display = "block"
    storageMenu.style.display = "block"
    cook.style.display = "block"
    storageSell.style.display = "block"
    sell.style.display = "none"
    phone2.style.display = "block"
    phone.style.display = "none"
    phoneText.style.display = "none"
    close.style.display = "none"
    out.style.display = "block"
    next.style.display = "block"
    dry.style.display = "block"
    garden.style.display = "none"
  }
phone2.onclick = () => {
    phone.style.display = "block"
    phone2.style.display = "none"
    close.style.display = "block"
    phoneText.style.display = "block"
}
close.onclick = () => {
  phone.style.display = "none"
  phone2.style.display = "block"
  close.style.display = "none"
  phoneText.style.display = "none"
}
hydroAcid.onclick = () => { 
    if (moneyCounter >= hydroAcid2) {
      moneyCounter -= hydroAcid2;
      storageHydroAcid++;
      money.innerHTML = `Money : $${moneyCounter}`;
      hydroAcid3.innerHTML = `Hydrochloric acid - ${storageHydroAcid}`
    }
  };
  pseudo.onclick = () => { 
    if (moneyCounter >= pseudo2) {
      moneyCounter -= pseudo2;
      storagePseudo++;
      money.innerHTML = `Money : $${moneyCounter}`;
      pseudo3.innerHTML = `Pseudoephedrin - ${storagePseudo}`
    }
  };
  efedrin.onclick = () => { 
    if (moneyCounter >= efedrin2) {
      moneyCounter -= efedrin2;
      storageEfedrin++;
      money.innerHTML = `Money : $${moneyCounter}`;
      efedrin3.innerHTML = `Ephedrin - ${storageEfedrin}`
    }
  };
  lith.onclick = () => { 
    if (moneyCounter >= lith2) {
      moneyCounter -= lith2;
      storageLith++;
      money.innerHTML = `Money : $${moneyCounter}`;
      lith3.innerHTML = `Lithium - ${storageLith}`;
    }
  };
  cook.onclick = () => {
    if (storageHydroAcid >= cookProcess && storageLith >= cookProcess && storagePseudo >= cookProcess && storageEfedrin >= cookProcess) {
      storageEfedrin -= cookProcess;
      storageHydroAcid -= cookProcess;
      storageLith -= cookProcess;
      storagePseudo -= cookProcess;
      storageMeth++;
      storagesell.innerHTML = `Methamphetamine - ${storageMeth}`;
      lith3.innerHTML = `Lithium - ${storageLith}`;
      efedrin3.innerHTML = `Ephedrin - ${storageEfedrin}`;
      pseudo3.innerHTML = `Pseudoephedrin - ${storagePseudo}`;
      hydroAcid3.innerHTML = `Hydrochloric acid - ${storageHydroAcid}`;
    }
  }
  sell.onclick = () => {
    if (storageMeth >= sellProcess) {
      storageMeth -= sellProcess;
      moneyCounter += meth;
      money.innerHTML = `Money : $${moneyCounter}`;
      storagesell.innerHTML = `Methamphetamine - ${storageMeth}`;
    }
  }
  upgrade1.onclick = () => {
    if (moneyCounter >= upgradePrice1) {
      moneyCounter -= upgradePrice1;
      meth += upgradeResult1;
      drugUpgrade1.style.display = "none"
      upgrade1.style.display = "none"
      money.innerHTML = `Money : $${moneyCounter}`;
    }
  }
  upgrade2.onclick = () => {
    if (moneyCounter >= upgradePrice2) {
      moneyCounter -= upgradePrice2;
      meth += upgradeResult2;
      drugUpgrade2.style.display = "none"
      upgrade2.style.display = "none"
      money.innerHTML = `Money : $${moneyCounter}`;
    }
  }
  upgrade3.onclick = () => {
    if (moneyCounter >= upgradePrice3) {
      moneyCounter -= upgradePrice3;
      meth += upgradeResult3;
      drugUpgrade3.style.display = "none"
      upgrade3.style.display = "none"
      money.innerHTML = `Money : $${moneyCounter}`;
    }
  }
  buySeed.onclick = () => { 
    if (moneyCounter >= seedPrice) {
      moneyCounter -= seedPrice;
      seed++;
      money.innerHTML = `Money : $${moneyCounter}`;
      seedStorage.innerHTML = `Weed seeds - ${seed}`
    }
  }
