//................. WELLCOME TO HAMSTER ......................//
//.......................................................
//.......................................................
//........................................................

//..............FULLSCREEN FUNCTION.........................

function requestFullscreen() {
  if (!document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
}
requestFullscreen();

//.........................HAMSTER CONTAINER..................................................

const Hamster_Container = document.createElement("section");
Hamster_Container.setAttribute("class", "Hamster_Container");
document.body.append(Hamster_Container);
//..............................
const Hamster_Registration_Box = document.createElement("div");
Hamster_Registration_Box.setAttribute("class", "Hamster_Registration_Box");
Hamster_Registration_Box.innerHTML = `
<img src = "./assets/hamster-coin.png"/>
<h1>Добро Пожаловать!</h1>
<input type= "text" placeholder="Введите Имя" id = "name"/>
<input type = "text" placeholder = "Введите Фамилия" id = "lastname" />
<button id = "registration_Btn">Продолжить</button>
`;

//......................................
const Hamster_Close_Box = document.createElement("div");
Hamster_Close_Box.setAttribute("class", "Hamster_Close_Box");
Hamster_Close_Box.innerHTML = `
<div><button><i class="fa-solid fa-xmark"></i></button> <h1>donald's Coin</h1> </div><button><i class="fa-solid fa-ellipsis-vertical"></i></button>
`;
//....................................
const User_stock_exchange_box = document.createElement("div");
User_stock_exchange_box.setAttribute("class", "User_Stock_Exchange_Box");
User_stock_exchange_box.innerHTML = `
<div><i class="fa-regular fa-user"></i> <h3>Arman Mnacakanov (CEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;

//............................
const Hamster_Box = document.createElement("div");
Hamster_Box.setAttribute("class", "Hamster_Box");
var profit = 1;
var Hour_Mine_Coin = 0;
const Hour_Coin = () => {
  const Hour_Coin_Box = document.createElement("div");
  Hour_Coin_Box.setAttribute("class", "Hour_Coin_Box");
  Hour_Coin_Box.innerHTML = `
<div><span>прибыль за тап</span> <span class = "Profit"><img src="./assets/hamster-coin.png"/>+${profit}</span></div>
<div><span>прибыль для апа</span> <span>10K</span></div>
<div><span>прибыль в час</span> <span class = "Hour_Mine_Coin"><img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}K</span></div>
`;
  return Hour_Coin_Box;
};

//..................COIN COUNT......................................

const Hamster_Coin_Count = document.createElement("div");
Hamster_Coin_Count.setAttribute("class", "Hamster_Coin_Count");
var CoinCount = 0;
//.....................................................
Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
const Hamster_Coin_Count2 = document.createElement("div");
Hamster_Coin_Count2.setAttribute("class", "Hamster_Coin_Count");
//.....................................................
Hamster_Coin_Count2.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
//...........................................
const Hamster_Level_Box = document.createElement("div");
Hamster_Level_Box.setAttribute("class", "Hamster_Level_Box");
var levelCount = 5000;
var LevelValue = 1;
var levelname = "Bronze";
Hamster_Level_Box.innerHTML = `
<div><span class = "levelname">${levelname} <i class="fa-solid fa-angle-right"></i></span> <span class = 'level'><span>level</span> ${LevelValue}/10</span></div>
<div><progress value="0" max="${levelCount}"></progress></div>
`;
var level = Hamster_Level_Box.querySelector("progress");

//..................HAMSTER BUTTON ..................
const Hamster = document.createElement("button");
Hamster.innerHTML = ` <img src="./assets/bronze.png" alt="Hamster">`;
Hamster.setAttribute("class", "Hamster");
var energyCount = 1500;
let energyInterval;
Hamster.addEventListener("click", () => {
  energy -= profit;
  if (energy >= 0) {
    CoinCount += profit;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}`;
    Hamster_Coin_Count2.innerHTML = `
    <img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
    `;
    level.value = Math.min(level.value + profit, level.max);
    //........................................
    if (level.value >= level.max) {
      alert("Новый Уровень!!!!");
      LevelValue += 1;
      Hamster_Level_Box.querySelector(
        ".level"
      ).innerHTML = `<span>level</span> ${LevelValue}/10`;
      level.value = 0;
      level.max = levelCount += 20000;
      energyCount += 500;
      energy += 500;
      profit += 1;
      Hamster_Energy_Boost_Box.querySelector(
        "button"
      ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
      profit += 1;
      //................................
      const levelNames = [
        "Bronze",
        "Silver",
        "Gold",
        "Platinum",
        "Diamond",
        "Epic",
        "Legendary",
        "Master",
        "Grandmaster",
        "Lord",
      ];
      if (LevelValue <= 10) {
        levelname = levelNames[LevelValue - 1];
        Hamster_Level_Box.querySelector(
          ".levelname"
        ).innerHTML = `${levelname} <i class="fa-solid fa-angle-right"></i>`;
        Hamster.innerHTML = `<img src="./assets/${levelname.toLowerCase()}.png" alt="Hamster">`;
      }
    }

    //........................................
    const feedbackSpan = document.createElement("span");
    feedbackSpan.textContent = `+${profit}`;
    feedbackSpan.style.position = "absolute";
    feedbackSpan.style.animation = "show .5s ease forwards";
    Hamster.append(feedbackSpan);
    //...................................
    setTimeout(() => {
      feedbackSpan.style.animation = "";
      feedbackSpan.remove();
    }, 1000);
    Hamster_Coin_Count.querySelector("span").textContent = CoinCount;
    Hamster_Energy_Boost_Box.querySelector("span").textContent = energy;
  } else {
    alert("Недостаточно энергии!");
    Hamster.disabled = true;
    const energyInterval = setInterval(() => {
      energy += 3;
      Hamster_Energy_Boost_Box.querySelector(
        ".energy"
      ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
      //.................................
      if (energy >= energyCount) {
        clearInterval(energyInterval);
        Hamster.disabled = false;
      }
    }, 1000);
  }
});

//................ENERGY BOX....................
const Hamster_Energy_Boost_Box = document.createElement("div");
Hamster_Energy_Boost_Box.setAttribute("class", "Hamster_Energy_Boost_Box");
var energy = 1500;
//................................
Hamster_Energy_Boost_Box.innerHTML = `
<button class = "energy"><i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}</button>
<button id = "Boost"><img src = "./assets/boost.png"/> boost</button>
`;
//..................................
const Boost_Box = document.createElement("div");
Boost_Box.style.display = "none";
Boost_Box.setAttribute("class", "Boost_Box");
Boost_Box.innerHTML = `
<div>
<button id="Boost_Box_Close_Btn"><i class="fa-solid fa-arrow-left"></i></button>
<div><span>Ваш Баланс</span></div>
<div><h1><img src = "./assets/hamster-coin.png"/>${CoinCount}</h1></div>
</div>

<div>
<div><span>Усилители</span></div>
<div><img src ="./assets/tap.png"/><button id ="multitap"><div><span>multitap</span><span class = "TapPrice"><img src ="./assets/hamster-coin.png"/>${TapPrice}</span></div></button><i class="fa-solid fa-angle-right"></i></div>
<div><img src ="./assets/energy.png"/><button id ="energy"><div><span>energy limit</span><span class = "EnergyPrice"><img src ="./assets/hamster-coin.png"/>${EnergyPrice}</span></div></button><i class="fa-solid fa-angle-right"></i></div>
</div>
`;
Hamster_Container.append(Boost_Box);
//.....................................
document.getElementById("Boost_Box_Close_Btn").addEventListener("click", () => {
  Boost_Box.style.display = "none";
});

//..............MENU LIST................................
const createList = () => {
  const List = document.createElement("div");
  List.setAttribute("class", "List");
  List.innerHTML = `
    <ul>
      <li><button id="Exchange"><img src="./assets/binance.png"/>exchange</button></li>
      <li><button id="Mine"><img src="./assets/mine.png"/>mine</button></li>
      <li><button><i class="fa-solid fa-users"></i> friends</button></li>
      <li><button><i class="fa-solid fa-coins"></i> earn</button></li>
      <li><button><img src="./assets/hamster-coin.png"/>airdrop</button></li>
    </ul>
  `;
  return List;
};
//...................................
const Mine_Box = document.createElement("div");
Mine_Box.setAttribute("class", "Mine_Box");
Mine_Box.style.display = "none";

Hamster_Container.append(
  Hamster_Registration_Box,
  Hamster_Close_Box,
  User_stock_exchange_box,
  Hamster_Box,
  Mine_Box
);
const Hour_Coin1 = Hour_Coin();
const Hour_Coin2 = Hour_Coin();
//..............
const List1 = createList();
const List2 = createList();
Hamster_Box.append(
  Hour_Coin1,
  Hamster_Coin_Count,
  Hamster_Level_Box,
  Hamster,
  Hamster_Energy_Boost_Box,
  List1
);

//.................... MINE CARD DATA ...........................//
const Mine_Crad_Data = [
  {
    category: "Markets",
    img: "./assets/cards/fan-tokens.png",
    name: "fan-tokens",
    price: 400,
    hour: 100,
    price_info: "прибыль в час 100",
    description:
      "цифравые активы для экслюзивных впечетлений и привилегий фанатов",
  },
  {
    category: "Markets",
    img: "./assets/cards/staking.png",
    name: "staking",
    hour: 150,
    price: 350,
    price_info: "прибыль в час 150",
    description:
      "блок криптовалюты для получения вознаграждений и поддержки сетевой безопасности",
  },
  {
    category: "Markets",
    img: "./assets/cards/btc-pairs.png",
    name: "BTC pairs",
    hour: 350,
    price: 520,
    price_info: "прибыль в час 350",
    description: "тарговые парыб включающие биткойн и другую криптовалюту",
  },
  {
    category: "Markets",
    img: "./assets/cards/mergin-trading-x100.png",
    name: "mergin trading x100",
    hour: 850,
    price: 1520,
    price_info: "прибыль в час 850",
    description:
      "Использование заемных средсть для торговли активами со стократным кредитным плечом",
  },
  {
    category: "Markets",
    img: "./assets/cards/dao.png",
    name: "dao",
    hour: 350,
    price: 1520,
    price_info: "прибыль в час 350",
    description:
      "Группа, основания на блокчейне, с децентрализованным принятием решений  и упровлением",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/ceo.png",
    name: "ceo",
    hour: 350,
    price: 650,
    price_info: "прибыль в час 350",
    description: "улучшите свои лидерские и управленческие способности",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/bisdev-team.png",
    name: "BisDev team",
    hour: 350,
    price: 700,
    price_info: "прибыль в час 350",
    description: "соберите команду для расширения возможностей бизнеса",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/hamstergram.png",
    name: "HamsterGram",
    hour: 450,
    price: 680,
    price_info: "прибыль в час 450",
    description: "увеличтье присутствие и вовлечность вашей биржы в instagram",
  },
  {
    category: "PR&Team",
    img: "./assets/cards/compliance-officer.png",
    name: ".Compliance offer",
    hour: 750,
    price: 1200,
    price_info: "прибыль в час 750",
    description: "",
  },
  {
    category: "Legal",
    img: "./assets/cards/kyc.png",
    name: "KYC",
    hour: 50,
    price: 850,
    price_info: "прибыль в час 50",
    description:
      "внедрите проверку << знай своего клиента >> для индентификации пользователей",
  },
  {
    category: "Legal",
    img: "./assets/cards/kyb.png",
    name: "KYB",
    hour: 150,
    price: 600,
    price_info: "прибыль в час 150",
    description:
      "внедрите проверку << знай свой бизнес >> для индентификации компаний",
  },
  {
    category: "Legal",
    img: "assets/cards/sec-transparancy.png",
    name: "SEC transparancy",
    hour: 350,
    price: 630,
    price_info: "прибыль в час 350",
    description: "работайте в SEC для более четкой делевой практики",
  },
  {
    category: "Legal",
    img: "./assets/cards/licence-japan.png",
    name: "Licence Japan",
    hour: 650,
    price: 630,
    price_info: "прибыль в час 650",
    description: "",
  },
  {
    category: "Legal",
    img: "./assets/cards/licence-australia.png",
    name: "Licence australia",
    hour: 750,
    price: 930,
    price_info: "прибыль в час 750",
    description: "",
  },
  {
    category: "Legal",
    img: "./assets/cards/licence-asia.png",
    name: "Licence Asia",
    hour: 650,
    price: 730,
    price_info: "прибыль в час 650",
    description: "",
  },
  {
    category: "Specials",
    img: "./assets/cards/hamster-kombat-merch.png",
    name: "Мерч Donald's Coin",
    hour: 1200,
    price: 830,
    price_info: "прибыль в час 1200K",
    description:
      "встречайте нашу лимитированную коллекцию одежды Donald's Coin. не усустите шанс стать частью чего-то уникального",
  },
  {
    category: "Specials",
    img: "./assets/cards/bitcoin-pizza.png",
    name: "Биткойн, пицца или Хомяки",
    hour: 830,
    price: 1350,
    price_info: "прибыль в час 830K",
    description:
      "не упустите новые возможностию․ они прямо вокруг вас․биткойн,ноткойн,хомяки․․․",
  },
  {
    category: "Specials",
    img: "./assets/cards/apps-center-listing.png",
    name: "Еулеграм = массовое роспространение",
    hour: 1500,
    price: 950,
    price_info: "прибыль в час 1500K",
    description:
      "этот маленький шаг может стать началом чего-то действительно грандиозного",
  },
  {
    category: "Specials",
    img: "./assets/cards/bogdanoff-is-calling.png",
    name: "Мощь Bogdanoff работает на тебя",
    hour: 1700,
    price: 1600,
    price_info: "прибыль в час 1700K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/ton-hamster-kombat-success.png",
    name: "Ton + Hamster Kombat = Success",
    hour: 1450,
    price: 3600,
    price_info: "прибыль в час 1450K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/usdt-on-ton.png",
    name: "Usdt on Ton",
    hour: 1300,
    price: 3600,
    price_info: "прибыль в час 1300K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/long-squeeze.png",
    name: "Long Squeeze",
    hour: 1820,
    price: 6650,
    price_info: "прибыль в час 1820K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
  {
    category: "Specials",
    img: "./assets/cards/consensus-piranha-pas.png",
    name: "Consensus Piranha Pas",
    hour: 2250,
    price: 8650,
    price_info: "прибыль в час 2250K",
    description:
      "никто не знает, что произойдет, когда Bogdanoff даст сигнал․ сегодня тебе повезло-твоя ставка сыгрла",
  },
];
const Mine_Card_Filter_Box = document.createElement("div");
Mine_Card_Filter_Box.setAttribute("class", "Mine_Card_Filter_Box");
const Category = ["Markets", "PR&Team", "Legal", "Specials"];
const activateButton = (button) => {
  const buttons = document.querySelectorAll(".Mine_Card_Filter_Box button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
};
Category.map((e) => {
  const Category_Btn = document.createElement("button");
  Category_Btn.innerText = e;
  Category_Btn.addEventListener("click", () => {
    filterCards(e);
    activateButton(Category_Btn);
  });

  Mine_Card_Filter_Box.append(Category_Btn);
});
const initialButton = Mine_Card_Filter_Box.querySelector("button");
if (initialButton) {
  activateButton(initialButton);
}
//.................................

const Cards_Box = document.createElement("div");
Cards_Box.setAttribute("class", "Cards_Box");

//.............................
function createCardElement(card) {
  const Card = document.createElement("div");
  Card.classList.add("Card");
  if (card.category === "Specials") {
    Card.classList.remove("Card");
    Card.classList.add("special-card");
  }
  Card.innerHTML = `
  <div>
  <img src = "${card.img}"/>
  <div>
  <h5>${card.name}</h5>
  <span>${card.price_info}</span>
  </div>
  </div>
  <div>
  <h5>lvl</h5>
  <span class="card_price"><img src = "assets/hamster-coin.png"/>${card.price}</span>
  </div>
  `;
  return Card;
}

//.....................CARDS FILTER..................................

function filterCards(category) {
  Cards_Box.innerHTML = ""; // очищаем контейнер для карточек
  const filteredCards = Mine_Crad_Data.filter(
    (card) => card.category === category
  );
  filteredCards.forEach((card) => {
    const cardElement = createCardElement(card);
    Cards_Box.append(cardElement);
    cardElement.addEventListener("click", () => {
      if (CoinCount >= card.price) {
        Hour_Mine_Coin += card.hour;
        Hour_Coin1.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        Hour_Coin2.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        // alert('miacav')
        Hour_Coin1.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        Hour_Coin2.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        CoinCount -= card.price;
        level.value = Math.min((level.value -= card.price), level.max);
        Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
        Hamster_Coin_Count2.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
        card.price += 500;
        cardElement.querySelector(
          ".card_price"
        ).innerHTML = `<img src = "assets/hamster-coin.png"/>${card.price}`;
      } else {
        alert("Недостаточно Баланса!!!");
      }
    });
  });
}
filterCards(Category[0]);

//........................................

Mine_Box.append(
  Hour_Coin2,
  Hamster_Coin_Count2,
  Mine_Card_Filter_Box,
  Cards_Box,
  List2
);
List1.querySelector("#Exchange").style.backgroundColor = "rgb(19, 19, 19)";
//..............................
const addEventListenersToList = (list) => {
  list.querySelector("#Exchange").addEventListener("click", () => {
    // document.getElementById('Mine').style.backgroundColor = 'transparent';
    List1.querySelector("#Exchange").style.backgroundColor = "rgb(19, 19, 19)";
    Hamster_Box.style.display = "flex";
    Mine_Box.style.display = "none";
  });
  list.querySelector("#Mine").addEventListener("click", () => {
    document.getElementById("Exchange").style.backgroundColor = "transparent";
    List2.querySelector("#Mine").style.backgroundColor = "rgb(19, 19, 19)";
    Hamster_Box.style.display = "none";
    Mine_Box.style.display = "flex";
  });
};
addEventListenersToList(List1);
addEventListenersToList(List2);

//..............REGISTRATION.........................

Hamster_Box.style.display = "none";
document.getElementById("registration_Btn").addEventListener("click", () => {
  const nameValue = document.getElementById("name").value;
  const nameValueinput = document.getElementById("name");
  const lastnameValue = document.getElementById("lastname").value;
  const lastnameValueinput = document.getElementById("lastname");
  if (nameValue == "" || lastnameValue == "") {
    alert("Заполните поле!");
    nameValueinput.style.borderColor = "red";
    lastnameValueinput.style.borderColor = "red";
    nameValueinput.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.56)";
    lastnameValueinput.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.56)";
    setTimeout(() => {
      nameValueinput.style.borderColor = "transparent";
      lastnameValueinput.style.borderColor = "transparent";
      nameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    }, 1000);
    nameValueinput.addEventListener("focus", () => {
      nameValueinput.style.borderColor = "rgb(251, 255, 0)";
      nameValueinput.style.boxShadow = "0 0 20px rgba(255, 166, 0, 0.56)";
    });
    lastnameValueinput.addEventListener("focus", () => {
      lastnameValueinput.style.borderColor = "rgb(251, 255, 0)";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(255, 166, 0, 0.56)";
    });
    nameValueinput.addEventListener("blur", () => {
      nameValueinput.style.borderColor = "transparent";
      nameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    });
    lastnameValueinput.addEventListener("blur", () => {
      lastnameValueinput.style.borderColor = "transparent";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    });
  } else {
    Hamster_Registration_Box.style.display = "none";
    const Bonus_Box = document.createElement("div");
    Bonus_Box.setAttribute("class", "Bonus_Box");
    Bonus_Box.innerHTML = `
    <img src = "./assets/hamster-coin.png"/>
    <h2>Спасибо за регистрацию</h2>
    <span>Мы с радостью дарим вам бонус на <span><img src = "./assets/hamster-coin.png"/>500 монет</span></span>
    <h3>приятного майнинга!</h3>
    <button id = "contunione_btn">продолжыть</button>
    `;
    User_stock_exchange_box.innerHTML = `
<div><img src = "./assets/icon.png"/> <h3>${nameValue} ${lastnameValue} (CEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;
    Hamster_Container.append(Bonus_Box);
    //........................................
    document.getElementById("contunione_btn").addEventListener("click", () => {
      Bonus_Box.style.display = "none";
      Hamster_Box.style.display = "flex";
      CoinCount = 500;
      Boost_Box.querySelector(
        "h1"
      ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
      Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
      Hamster_Coin_Count2.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
      level.value = Math.min(level.value + CoinCount, level.max);
      function hourlyTask() {
        // CoinCount += Hour_Mine_Coin;
        Hour_Coin1.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
        Hour_Coin2.querySelector(
          ".Hour_Mine_Coin"
        ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${Hour_Mine_Coin}`;
      }
      const hourlyInterval = setInterval(hourlyTask, 3600000);
      setTimeout(() => {
        clearInterval(hourlyInterval);
        let ClaimCoin = 0;
        if (ClaimCoin == 0) {
          alert("Прибыль в час пока не доступен!");
        } else {
          const Claim_Bonus_Box = document.createElement("div");
          Claim_Bonus_Box.setAttribute("class", "Claim_Boxus_Box");
          Claim_Bonus_Box.innerHTML = `
    <img src = "./assets/hamster-coin.png"/>
    <h2>Заберите свой прибыль!</h2>
    <span><img src = "./assets/hamster-coin.png"/>${ClaimCoin}</span>
    <button class = "claim_btn">Получить</button>
    `;
          Hamster_Box.append(Claim_Bonus_Box);
          Claim_Bonus_Box.querySelector(".claim_btn").addEventListener(
            "click",
            () => {
              CoinCount += ClaimCoin;
              level.value = Math.min(level.value + CoinCount, level.max);
              Hamster_Coin_Count.innerHTML = `
    <img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
    `;
              Hamster_Coin_Count2.innerHTML = `
    <img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
    `;
              Claim_Bonus_Box.style.display = "none";
            }
          );
          ClaimCoin += Hour_Mine_Coin;
        }
      }, 300);
    });
  }
});

//...........MULTITAP LEVEL..................

const MultitapLevel_Box = document.createElement("div");
MultitapLevel_Box.style.display = "none";
MultitapLevel_Box.setAttribute("class", "MultitapLevel_Box");
//.................ENERGY LEVEL..............................
const EnergyLevel_Box = document.createElement("div");
EnergyLevel_Box.style.display = "none";
EnergyLevel_Box.setAttribute("class", "EnergyLevel_Box");
var TapPrice = 1000;
var EnergyPrice = 1000;
Boost_Box.querySelector(
  ".TapPrice"
).innerHTML = `<img src ="./assets/hamster-coin.png"/>${TapPrice}K`;
Boost_Box.querySelector(
  ".EnergyPrice"
).innerHTML = `<img src ="./assets/hamster-coin.png"/>${EnergyPrice}K`;
//............................................
MultitapLevel_Box.innerHTML = `
    <button class ="close_btn"><i class="fa-solid fa-xmark"></i></button>
    <img src = "./assets/tap.png"/>
    <h1>multitap</h1>
    <p>увеличивеат количество монет которое вы можете заработать за одно нажатие</p>
    <h3>+1 монет за тап для ${LevelValue} уровня</h3>
    <h2><img src = "./assets/hamster-coin.png"/> ${TapPrice}</h2>
    <button id ="Tap_Buy_Btn">получить</button>
    `;
EnergyLevel_Box.innerHTML = `
    <button class ="close_btn2"><i class="fa-solid fa-xmark"></i></button>
    <img src = "./assets/energy.png"/>
    <h1>energy limit</h1>
    <p>увеличивеат количество энерии</p>
    <h3>+500 энергии для 1 уровня</h3>
    <h2><img src = "./assets/hamster-coin.png"/> ${EnergyPrice}</h2>
    <button id ="Energy_Buy_Btn">получить</button>
    `;
document.body.append(MultitapLevel_Box, EnergyLevel_Box);
//...................................
document.getElementById("Boost").addEventListener("click", () => {
  Boost_Box.style.display = "flex";
});

//............TAP BUY BTN.................
document.getElementById("Tap_Buy_Btn").addEventListener("click", () => {
  if (CoinCount >= TapPrice) {
    profit += 1;
    Hour_Coin1.querySelector(
      ".Profit"
    ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${profit}`;
    Hour_Coin2.querySelector(
      ".Profit"
    ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${profit}`;
    CoinCount -= TapPrice;
    Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
    MultitapLevel_Box.style.display = "none";
    TapPrice += 9000;
    Boost_Box.querySelector(
      ".TapPrice"
    ).innerHTML = `<img src ="./assets/hamster-coin.png"/>${TapPrice}K`;
    MultitapLevel_Box.querySelector(
      "h2"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/> ${TapPrice}`;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
    level.value = Math.min(level.value - TapPrice, level.max);
  } else {
    alert("Недостаточно Баланса!!!");
  }
});

//............ENERGY BY BTN...................
document.getElementById("Energy_Buy_Btn").addEventListener("click", () => {
  if (CoinCount >= EnergyPrice) {
    energy += 500;
    energyCount += 500;
    CoinCount -= EnergyPrice;
    EnergyPrice += 9000;
    EnergyLevel_Box.style.display = "none";
    Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
    Boost_Box.querySelector(
      ".EnergyPrice"
    ).innerHTML = `<img src ="./assets/hamster-coin.png"/>${EnergyPrice}K`;
    EnergyLevel_Box.querySelector(
      "h2"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/> ${EnergyPrice}`;
    Hamster_Energy_Boost_Box.querySelector(
      ".energy"
    ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
    level.value = Math.min(level.value - EnergyPrice, level.max);
  } else {
    alert("Недостаточно Баланса!!!");
  }
});
document.getElementById("multitap").addEventListener("click", () => {
  MultitapLevel_Box.style.display = "flex";
  document.querySelector(".close_btn").addEventListener("click", () => {
    MultitapLevel_Box.style.display = "none";
  });
});
document.getElementById("energy").addEventListener("click", () => {
  EnergyLevel_Box.style.display = "flex";
  document.querySelector(".close_btn2").addEventListener("click", () => {
    EnergyLevel_Box.style.display = "none";
  });
});
//.................................
