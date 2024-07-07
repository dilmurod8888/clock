const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sek = document.querySelector(".s"),
  hourNum = document.querySelector(".hours"),
  minNum = document.querySelector(".minutes");

// new Date()  Komputerdagi vaqtni olib beradi
// getHours() - soatni olib beradi
// getMinutes() - minutni olib beradi
// getSeconds() - secundni olib beradi
function clock() {
  let time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();

  sek.style.transform = "rotate(" + seconds * 6 + "deg)";
  min.style.transform = `rotate(${minutes * 6}deg)`;
  hour.style.transform = `rotate(${hours * 30}deg)`;
  setTimeout(() => {
    clock();
  }, 1000);

  hourNum.innerHTML = hours < 10 ? "0" + hours : hours;
  minNum.innerHTML = minutes < 10 ? "0" + minutes : minutes;
}
clock();

const tabsItem = document.querySelectorAll(".tabsItem"),
  tabsContentItem = document.querySelectorAll(".tabsContentItem");

// for (let i = 0; i < tabsItem.length; i++) {
//     tabsItem[i].addEventListener('click', (e) => {
//         e.preventDefault()
//         for (let j = 0; j < tabsItem.length; j++) {
//             tabsContentItem[j].classList.remove('active')
//             tabsItem[j].classList.remove('active')
//         }
//         tabsContentItem[i].classList.add('active')
//         tabsItem[i].classList.add('active')
//     })
// }

tabsItem.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabsItem.forEach((tabs, j) => {
      tabs.classList.remove("active");
      tabsContentItem[j].classList.remove("active");
    });
    tab.classList.add("active");
    tabsContentItem[i].classList.add("active");
  });
});

const startbutton = document.querySelector(".stopwatch__btn");
second = document.querySelector(".stopwatch__seconds");
minut = document.querySelector(".stopwatch__minutes");
soat = document.querySelector(".stopwatch__hours");
tochka = document.querySelector(".tabsLink__span");

startbutton.addEventListener("click", () => {
  //voqeya quloq soluvchi
  if (startbutton.innerHTML == "start") {
    secundomer();
    startbutton.innerHTML = "stop";
  } else if (startbutton.innerHTML == "stop") {
    clearTimeout(timer); //kavus ichida id berilgan time di uchirvoradi
    startbutton.innerHTML = "clear";
    tochka.classList.toggle("active_clear"); //toggle bornarsani yoq qiladi yoqdi bor qiladi
  } else if (startbutton.innerHTML == "clear") {
    startbutton.innerHTML = "start";
    second.innerHTML = 0;
    minut.innerHTML = 0;
    soat.innerHTML = 0;
    tochka.classList.toggle("active_clear");
  }
});

function secundomer() {
  if (second.innerHTML == "59") {
    minut.innerHTML++;
    second.innerHTML = 0;
  } else if (minut.innerHTML == "59") {
    soat.innerHTML++;
    minut.innerHTML = 0;
  } else if (soat.innerHTML == "23") {
    return clearTimeout(timer);
  }
  second.innerHTML++;
  timer = setTimeout(() => {
    secundomer();
  }, 100);
}
