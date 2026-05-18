const yearEl = document.querySelector("#year");
const backToTopButton = document.querySelector("#backToTop");
const timeGreetingEl = document.querySelector("#timeGreeting");
const todayInfoEl = document.querySelector("#todayInfo");
const birthdayInput = document.querySelector("#birthdayInput");
const genderSelect = document.querySelector("#genderSelect");
const weatherSelect = document.querySelector("#weatherSelect");
const zodiacButton = document.querySelector("#zodiacButton");
const zodiacResult = document.querySelector("#zodiacResult");
const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const bmiButton = document.querySelector("#bmiButton");
const bmiResult = document.querySelector("#bmiResult");
const calculatorDisplay = document.querySelector("#calculatorDisplay");
const calculatorHistory = document.querySelector("#calculatorHistory");
const calculatorKeys = document.querySelector(".calculator-keys");
const reactionStage = document.querySelector("#reactionStage");
const reactionStatus = document.querySelector("#reactionStatus");
const memoryBoard = document.querySelector("#memoryBoard");
const memoryStatus = document.querySelector("#memoryStatus");
const memoryReset = document.querySelector("#memoryReset");
const tapGame = document.querySelector("#tapGame");
const tapTarget = document.querySelector("#tapTarget");
const tapStatus = document.querySelector("#tapStatus");
const tapReset = document.querySelector("#tapReset");
const colorQuestion = document.querySelector("#colorQuestion");
const colorOptions = document.querySelector("#colorOptions");
const colorStatus = document.querySelector("#colorStatus");
const colorStart = document.querySelector("#colorStart");
const breathCircle = document.querySelector("#breathCircle");
const breathStatus = document.querySelector("#breathStatus");
const breathButton = document.querySelector("#breathButton");
const dailyTip = document.querySelector("#dailyTip");
const dailyMood = document.querySelector("#dailyMood");
const calorieWeight = document.querySelector("#calorieWeight");
const calorieActivity = document.querySelector("#calorieActivity");
const calorieMinutes = document.querySelector("#calorieMinutes");
const calorieButton = document.querySelector("#calorieButton");
const calorieResult = document.querySelector("#calorieResult");
const reversiBoard = document.querySelector("#reversiBoard");
const reversiStatus = document.querySelector("#reversiStatus");
const reversiReset = document.querySelector("#reversiReset");
const fishButton = document.querySelector("#fishButton");
const fishText = document.querySelector("#fishText");
const fishStatus = document.querySelector("#fishStatus");
const fishReset = document.querySelector("#fishReset");

const zodiacList = [
  { name: "摩羯座", start: "12-22", end: "01-19", advice: "适合把计划列清楚，稳一点推进会更有掌控感。" },
  { name: "水瓶座", start: "01-20", end: "02-18", advice: "适合尝试新想法，也别忘了把灵感落到具体行动里。" },
  { name: "双鱼座", start: "02-19", end: "03-20", advice: "适合做一点让自己放松的事，情绪稳定后效率会更好。" },
  { name: "白羊座", start: "03-21", end: "04-19", advice: "适合先行动起来，但重要决定前给自己十分钟冷静。" },
  { name: "金牛座", start: "04-20", end: "05-20", advice: "适合处理实际问题，慢慢来反而更容易做扎实。" },
  { name: "双子座", start: "05-21", end: "06-21", advice: "适合沟通和学习，但别同时开太多任务。" },
  { name: "巨蟹座", start: "06-22", end: "07-22", advice: "适合整理生活节奏，照顾好自己也是一种进步。" },
  { name: "狮子座", start: "07-23", end: "08-22", advice: "适合展示自己，表达时保持真诚会更有吸引力。" },
  { name: "处女座", start: "08-23", end: "09-22", advice: "适合优化细节，但不要因为追求完美而迟迟不开始。" },
  { name: "天秤座", start: "09-23", end: "10-23", advice: "适合做选择和协调关系，先明确自己的真实感受。" },
  { name: "天蝎座", start: "10-24", end: "11-22", advice: "适合深度思考和专注完成一件重要的事。" },
  { name: "射手座", start: "11-23", end: "12-21", advice: "适合探索新内容，也要给今天留一个能完成的小目标。" },
];

const outfitAdvice = {
  sunny: {
    male: "晴天男生主流搭配：白 T 或浅色衬衫，搭配直筒牛仔裤、休闲鞋，可加棒球帽。",
    female: "晴天女生主流搭配：短袖针织衫或衬衫，搭配半身裙/牛仔裤，小白鞋或乐福鞋。",
  },
  cloudy: {
    male: "多云男生主流搭配：薄外套、纯色 T 恤、休闲长裤，整体颜色可以低饱和一点。",
    female: "多云女生主流搭配：薄开衫或衬衫外套，搭配长裙/阔腿裤，舒服又耐看。",
  },
  rainy: {
    male: "雨天男生主流搭配：防水外套、深色长裤、防滑鞋，尽量少穿容易湿的浅色鞋。",
    female: "雨天女生主流搭配：短款风衣或防水外套，搭配九分裤、防滑鞋，带一把轻便伞。",
  },
  cold: {
    male: "寒冷天气男生主流搭配：卫衣或毛衣叠穿羽绒服/大衣，搭配长裤和保暖鞋。",
    female: "寒冷天气女生主流搭配：毛衣、大衣或羽绒服，搭配长裤/长裙和短靴，注意围巾保暖。",
  },
  hot: {
    male: "炎热天气男生主流搭配：速干 T 恤或宽松短袖，搭配短裤/薄长裤，选择透气鞋。",
    female: "炎热天气女生主流搭配：短袖、吊带外搭薄衬衫，搭配短裙/阔腿裤，轻薄透气为主。",
  },
};

const getTimeGreeting = (hour) => {
  if (hour >= 5 && hour < 11) {
    return "早上好";
  }

  if (hour >= 11 && hour < 14) {
    return "中午好";
  }

  if (hour >= 14 && hour < 18) {
    return "下午好";
  }

  if (hour >= 18 && hour < 22) {
    return "傍晚好";
  }

  return "夜深了";
};

const getTodayInfo = (date) => {
  const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = weekDays[date.getDay()];

  return `今天是${weekDay}，${month}月${day}号`;
};

const toMonthDayNumber = (monthDay) => Number(monthDay.replace("-", ""));

const getZodiac = (dateValue) => {
  const [, month, day] = dateValue.split("-").map(Number);
  const birthdayNumber = month * 100 + day;

  return zodiacList.find((zodiac) => {
    const start = toMonthDayNumber(zodiac.start);
    const end = toMonthDayNumber(zodiac.end);

    if (start > end) {
      return birthdayNumber >= start || birthdayNumber <= end;
    }

    return birthdayNumber >= start && birthdayNumber <= end;
  });
};

const getBmiStatus = (bmi) => {
  if (bmi < 18.5) {
    return {
      label: "偏瘦",
      advice: "建议适当增重，多吃优质蛋白和主食，配合力量训练。",
    };
  }

  if (bmi < 24) {
    return {
      label: "正常",
      advice: "当前体型比较健康，继续保持规律饮食和运动。",
    };
  }

  if (bmi < 28) {
    return {
      label: "偏胖",
      advice: "建议适当减脂，少喝含糖饮料，增加有氧和力量训练。",
    };
  }

  return {
    label: "肥胖",
    advice: "建议开始减重计划，如果条件允许，可以咨询医生或营养师。",
  };
};

const calculatorState = {
  displayValue: "0",
  historyValue: "",
  firstValue: null,
  operator: null,
  waitingForNextNumber: false,
};

const updateCalculatorDisplay = () => {
  calculatorDisplay.textContent = calculatorState.displayValue;
  calculatorHistory.textContent = calculatorState.historyValue;
};

const operatorTextMap = {
  "+": "+",
  "-": "−",
  "*": "×",
  "/": "÷",
};

const calculate = (firstValue, secondValue, operator) => {
  if (operator === "+") {
    return firstValue + secondValue;
  }

  if (operator === "-") {
    return firstValue - secondValue;
  }

  if (operator === "*") {
    return firstValue * secondValue;
  }

  if (secondValue === 0) {
    return "不能除以 0";
  }

  return firstValue / secondValue;
};

const inputNumber = (number) => {
  if (calculatorState.displayValue === "不能除以 0") {
    calculatorState.displayValue = "0";
  }

  if (calculatorState.waitingForNextNumber) {
    calculatorState.displayValue = number === "." ? "0." : number;
    calculatorState.waitingForNextNumber = false;
    return;
  }

  if (number === "." && calculatorState.displayValue.includes(".")) {
    return;
  }

  if (calculatorState.displayValue === "0" && number !== ".") {
    calculatorState.displayValue = number;
    return;
  }

  calculatorState.displayValue += number;
};

const handleOperator = (nextOperator) => {
  const inputValue = Number(calculatorState.displayValue);

  if (calculatorState.operator && calculatorState.waitingForNextNumber) {
    calculatorState.operator = nextOperator;
    calculatorState.historyValue = `${calculatorState.firstValue} ${operatorTextMap[nextOperator]}`;
    return;
  }

  if (calculatorState.firstValue === null) {
    calculatorState.firstValue = inputValue;
    calculatorState.historyValue = `${calculatorState.displayValue} ${operatorTextMap[nextOperator]}`;
  } else if (calculatorState.operator) {
    const previousHistory = calculatorState.historyValue;
    const result = calculate(calculatorState.firstValue, inputValue, calculatorState.operator);

    if (typeof result === "string") {
      calculatorState.historyValue = `${previousHistory} ${calculatorState.displayValue}`;
      calculatorState.displayValue = result;
      calculatorState.firstValue = null;
      calculatorState.operator = null;
      calculatorState.waitingForNextNumber = true;
      return;
    }

    calculatorState.displayValue = `${Number(result.toFixed(10))}`;
    calculatorState.firstValue = result;
    calculatorState.historyValue = `${previousHistory} ${inputValue} ${operatorTextMap[nextOperator]}`;
  }

  calculatorState.operator = nextOperator;
  calculatorState.waitingForNextNumber = true;
};

const resetCalculator = () => {
  calculatorState.displayValue = "0";
  calculatorState.historyValue = "";
  calculatorState.firstValue = null;
  calculatorState.operator = null;
  calculatorState.waitingForNextNumber = false;
};

const reactionState = {
  phase: "idle",
  timerId: null,
  startTime: 0,
};

const memorySymbols = ["A", "B", "C", "D"];
const memoryState = {
  cards: [],
  openedIndexes: [],
  matchedCount: 0,
  moves: 0,
  locked: false,
};

const tapState = {
  active: false,
  score: 0,
  combo: 0,
  bestCombo: 0,
  timeLeft: 30,
  timerId: null,
};

const colorPalette = [
  { name: "红色", value: "#be3455" },
  { name: "青色", value: "#0f766e" },
  { name: "蓝色", value: "#2563eb" },
  { name: "黄色", value: "#eab308" },
  { name: "紫色", value: "#7c3aed" },
  { name: "橙色", value: "#ea580c" },
];

const colorState = {
  active: false,
  score: 0,
  round: 0,
  target: null,
};

const breathSteps = [
  { label: "吸气", className: "is-inhale", duration: 4000 },
  { label: "停留", className: "is-hold", duration: 2000 },
  { label: "呼气", className: "is-exhale", duration: 5000 },
];

const breathState = {
  active: false,
  stepIndex: 0,
  cycles: 0,
  timerId: null,
};

const reversiDirections = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const reversiState = {
  board: Array(64).fill(""),
  current: "black",
  finished: false,
};

const fishState = {
  merit: 0,
  combo: 0,
  timerId: null,
};

const dailyTips = [
  "先玩一局节奏连击，把手感热起来。",
  "做 3 轮呼吸节拍，再去做正事。",
  "试试黑白棋，练一下判断和耐心。",
  "敲 20 下木鱼，给今天加一点仪式感。",
];

const shuffle = (items) => {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
};

const startReactionTest = () => {
  reactionState.phase = "waiting";
  reactionStage.classList.remove("is-ready");
  reactionStage.classList.add("is-waiting");
  reactionStage.textContent = "等一下，变成绿色再点";
  reactionStatus.textContent = "别急，提前点就失败。";

  const delay = 1200 + Math.random() * 2600;

  reactionState.timerId = window.setTimeout(() => {
    reactionState.phase = "ready";
    reactionState.startTime = Date.now();
    reactionStage.classList.remove("is-waiting");
    reactionStage.classList.add("is-ready");
    reactionStage.textContent = "现在点";
    reactionStatus.textContent = "快点。";
  }, delay);
};

const resetReactionTest = (message = "准备好了就开始。") => {
  window.clearTimeout(reactionState.timerId);
  reactionState.phase = "idle";
  reactionState.timerId = null;
  reactionState.startTime = 0;
  reactionStage.classList.remove("is-waiting", "is-ready");
  reactionStage.textContent = "点击开始，等颜色变化后再点";
  reactionStatus.textContent = message;
};

const getReactionAdvice = (cost) => {
  if (cost < 180) {
    return "非常快，已经接近竞技游戏或反应训练里的优秀水平。注意别靠预判乱点，稳定性比单次爆发更重要。";
  }

  if (cost < 250) {
    return "很不错，属于比较敏捷的反应。可以多练几次，看平均值能不能稳定在 250ms 内。";
  }

  if (cost < 350) {
    return "正常范围，日常使用和普通娱乐完全够用。想提升的话，可以减少分心，盯住颜色变化再点。";
  }

  return "偏慢一点，可能是分心、疲劳或没进入状态。建议休息一下，保持手指靠近点击区域再测。";
};

const getReactionReport = (cost) => {
  return `你的反应时间：${cost} ms
普通参考：约 250-350 ms
比赛参考：约 150-220 ms
建议：${getReactionAdvice(cost)}
点击可再测一次。`;
};

const updateMemoryStatus = () => {
  memoryStatus.textContent = `步数：${memoryState.moves}，已配对：${memoryState.matchedCount}/4`;
};

const renderMemoryBoard = () => {
  memoryBoard.innerHTML = "";

  memoryState.cards.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "memory-card";
    button.type = "button";
    button.dataset.index = `${index}`;

    if (card.open || card.matched) {
      button.textContent = card.symbol;
      button.classList.add(card.matched ? "is-matched" : "is-open");
    } else {
      button.textContent = "?";
    }

    memoryBoard.append(button);
  });
};

const resetMemoryGame = () => {
  memoryState.cards = shuffle([...memorySymbols, ...memorySymbols]).map((symbol) => ({
    symbol,
    open: false,
    matched: false,
  }));
  memoryState.openedIndexes = [];
  memoryState.matchedCount = 0;
  memoryState.moves = 0;
  memoryState.locked = false;
  updateMemoryStatus();
  renderMemoryBoard();
};

const updateTapStatus = () => {
  tapStatus.textContent = `剩余：${tapState.timeLeft}s
得分：${tapState.score}
连击：${tapState.combo}，最高连击：${tapState.bestCombo}`;
};

const moveTapTarget = () => {
  const gameRect = tapGame.getBoundingClientRect();
  const size = Math.max(44, 72 - tapState.score * 0.8);
  const maxX = Math.max(0, gameRect.width - size);
  const maxY = Math.max(0, gameRect.height - size);
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  tapTarget.style.width = `${size}px`;
  tapTarget.style.height = `${size}px`;
  tapTarget.style.left = `${x}px`;
  tapTarget.style.top = `${y}px`;
  tapTarget.style.transform = "none";
  tapTarget.textContent = `${tapState.score}`;
};

const stopTapGame = () => {
  window.clearInterval(tapState.timerId);
  tapState.active = false;
  tapTarget.textContent = "开始";
  tapStatus.textContent = `结束。得分：${tapState.score}，最高连击：${tapState.bestCombo}
点击开始可以再来一局。`;
};

const startTapGame = () => {
  window.clearInterval(tapState.timerId);
  tapState.active = true;
  tapState.score = 0;
  tapState.combo = 0;
  tapState.bestCombo = 0;
  tapState.timeLeft = 30;
  updateTapStatus();
  moveTapTarget();

  tapState.timerId = window.setInterval(() => {
    tapState.timeLeft -= 1;
    updateTapStatus();

    if (tapState.timeLeft <= 0) {
      stopTapGame();
    }
  }, 1000);
};

const renderColorRound = () => {
  const options = shuffle(colorPalette).slice(0, 6);
  colorState.target = options[Math.floor(Math.random() * options.length)];
  colorQuestion.textContent = `找出：${colorState.target.name}`;
  colorOptions.innerHTML = "";

  options.forEach((color) => {
    const button = document.createElement("button");
    button.className = "color-option";
    button.type = "button";
    button.dataset.color = color.name;
    button.style.background = color.value;
    colorOptions.append(button);
  });
};

const startColorGame = () => {
  colorState.active = true;
  colorState.score = 0;
  colorState.round = 1;
  colorStatus.textContent = "第 1 题，选对颜色。";
  colorStart.textContent = "重开";
  renderColorRound();
};

const updateBreathStep = () => {
  const step = breathSteps[breathState.stepIndex];
  breathCircle.classList.remove("is-inhale", "is-hold", "is-exhale");
  breathCircle.classList.add(step.className);
  breathCircle.textContent = step.label;
  breathStatus.textContent = `第 ${breathState.cycles + 1} 轮：${step.label}`;

  breathState.timerId = window.setTimeout(() => {
    breathState.stepIndex = (breathState.stepIndex + 1) % breathSteps.length;

    if (breathState.stepIndex === 0) {
      breathState.cycles += 1;
    }

    updateBreathStep();
  }, step.duration);
};

const stopBreath = () => {
  window.clearTimeout(breathState.timerId);
  breathState.active = false;
  breathCircle.classList.remove("is-inhale", "is-hold", "is-exhale");
  breathCircle.textContent = "开始";
  breathButton.textContent = "开始";
  breathStatus.textContent = `已完成 ${breathState.cycles} 轮。`;
};

const startBreath = () => {
  window.clearTimeout(breathState.timerId);
  breathState.active = true;
  breathState.stepIndex = 0;
  breathState.cycles = 0;
  breathButton.textContent = "停止";
  updateBreathStep();
};

const setupDailyPanel = () => {
  const dayIndex = new Date().getDate() % dailyTips.length;
  dailyTip.textContent = dailyTips[dayIndex];
  dailyMood.textContent = new Date().getHours() >= 22 ? "早点休息" : "适合玩一局";
};

const calculateCalories = () => {
  const weight = Number(calorieWeight.value);
  const met = Number(calorieActivity.value);
  const minutes = Number(calorieMinutes.value);

  if (!weight || !minutes || weight <= 0 || minutes <= 0) {
    calorieResult.textContent = "请输入正确的体重和运动时长。";
    return;
  }

  const calories = met * weight * (minutes / 60);
  const riceBowls = calories / 230;

  calorieResult.textContent = `预计消耗：${Math.round(calories)} 千卡
约等于：${riceBowls.toFixed(1)} 碗米饭
建议：运动后补水，别用高糖饮料把消耗又喝回来。`;
};

const getReversiIndex = (row, col) => row * 8 + col;

const getReversiFlips = (index, player, board = reversiState.board) => {
  if (board[index]) {
    return [];
  }

  const row = Math.floor(index / 8);
  const col = index % 8;
  const opponent = player === "black" ? "white" : "black";
  const flips = [];

  reversiDirections.forEach(([rowStep, colStep]) => {
    const line = [];
    let nextRow = row + rowStep;
    let nextCol = col + colStep;

    while (nextRow >= 0 && nextRow < 8 && nextCol >= 0 && nextCol < 8) {
      const nextIndex = getReversiIndex(nextRow, nextCol);
      const value = board[nextIndex];

      if (value === opponent) {
        line.push(nextIndex);
      } else if (value === player) {
        flips.push(...line);
        break;
      } else {
        break;
      }

      nextRow += rowStep;
      nextCol += colStep;
    }
  });

  return flips;
};

const getReversiMoves = (player) => {
  return reversiState.board
    .map((_, index) => index)
    .filter((index) => getReversiFlips(index, player).length > 0);
};

const updateReversiStatus = () => {
  const blackCount = reversiState.board.filter((piece) => piece === "black").length;
  const whiteCount = reversiState.board.filter((piece) => piece === "white").length;
  const moves = getReversiMoves(reversiState.current);
  const playerName = reversiState.current === "black" ? "黑棋" : "白棋";

  if (reversiState.finished) {
    const winner = blackCount === whiteCount ? "平局" : blackCount > whiteCount ? "黑棋赢" : "白棋赢";
    reversiStatus.textContent = `${winner}。黑 ${blackCount} : 白 ${whiteCount}`;
    return;
  }

  reversiStatus.textContent = `${playerName}落子。黑 ${blackCount} : 白 ${whiteCount}，可落点：${moves.length}`;
};

const renderReversiBoard = () => {
  const legalMoves = getReversiMoves(reversiState.current);
  reversiBoard.innerHTML = "";

  reversiState.board.forEach((piece, index) => {
    const cell = document.createElement("button");
    cell.className = "reversi-cell";
    cell.type = "button";
    cell.dataset.index = `${index}`;

    if (piece) {
      cell.classList.add(piece === "black" ? "is-black" : "is-white");
    } else if (legalMoves.includes(index)) {
      cell.classList.add("is-hint");
    }

    reversiBoard.append(cell);
  });

  updateReversiStatus();
};

const resetReversi = () => {
  reversiState.board = Array(64).fill("");
  reversiState.board[getReversiIndex(3, 3)] = "white";
  reversiState.board[getReversiIndex(3, 4)] = "black";
  reversiState.board[getReversiIndex(4, 3)] = "black";
  reversiState.board[getReversiIndex(4, 4)] = "white";
  reversiState.current = "black";
  reversiState.finished = false;
  renderReversiBoard();
};

const switchReversiPlayer = () => {
  reversiState.current = reversiState.current === "black" ? "white" : "black";

  if (getReversiMoves(reversiState.current).length === 0) {
    reversiState.current = reversiState.current === "black" ? "white" : "black";

    if (getReversiMoves(reversiState.current).length === 0) {
      reversiState.finished = true;
    }
  }
};

const updateFishStatus = () => {
  fishStatus.textContent = `功德：${fishState.merit}
连击：${fishState.combo}`;
};

yearEl.textContent = new Date().getFullYear();

const now = new Date();
timeGreetingEl.textContent = getTimeGreeting(now.getHours());
todayInfoEl.textContent = getTodayInfo(now);
setupDailyPanel();

zodiacButton.addEventListener("click", () => {
  if (!birthdayInput.value) {
    zodiacResult.textContent = "请先选择你的出生年月日。";
    return;
  }

  const zodiac = getZodiac(birthdayInput.value);
  const gender = genderSelect.value;
  const weather = weatherSelect.value;

  zodiacResult.textContent = `你的星座：${zodiac.name}
星座建议：${zodiac.advice}
穿搭建议：${outfitAdvice[weather][gender]}`;
});

bmiButton.addEventListener("click", () => {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiResult.textContent = "请输入正确的身高和体重。";
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  const status = getBmiStatus(bmi);

  bmiResult.textContent = `你的 BMI：${bmi.toFixed(1)}
当前状态：${status.label}
建议：${status.advice}`;
});

calculatorKeys.addEventListener("click", (event) => {
  const key = event.target;

  if (!key.matches("button")) {
    return;
  }

  if (key.dataset.number) {
    inputNumber(key.dataset.number);
    updateCalculatorDisplay();
    return;
  }

  if (key.dataset.operator) {
    handleOperator(key.dataset.operator);
    updateCalculatorDisplay();
    return;
  }

  if (key.dataset.action === "equals") {
    if (calculatorState.operator === null || calculatorState.waitingForNextNumber) {
      return;
    }

    const expression = `${calculatorState.historyValue} ${calculatorState.displayValue} =`;
    handleOperator(calculatorState.operator);
    calculatorState.historyValue = expression;
    calculatorState.operator = null;
    calculatorState.firstValue = null;
    updateCalculatorDisplay();
    return;
  }

  resetCalculator();
  updateCalculatorDisplay();
});

reactionStage.addEventListener("click", () => {
  if (reactionState.phase === "idle") {
    startReactionTest();
    return;
  }

  if (reactionState.phase === "waiting") {
    resetReactionTest("太早了，再试一次。");
    return;
  }

  const cost = Date.now() - reactionState.startTime;
  resetReactionTest(getReactionReport(cost));
});

memoryBoard.addEventListener("click", (event) => {
  const cardButton = event.target.closest(".memory-card");

  if (!cardButton || memoryState.locked) {
    return;
  }

  const index = Number(cardButton.dataset.index);
  const card = memoryState.cards[index];

  if (card.open || card.matched) {
    return;
  }

  card.open = true;
  memoryState.openedIndexes.push(index);
  renderMemoryBoard();

  if (memoryState.openedIndexes.length < 2) {
    return;
  }

  memoryState.moves += 1;
  memoryState.locked = true;
  const [firstIndex, secondIndex] = memoryState.openedIndexes;
  const firstCard = memoryState.cards[firstIndex];
  const secondCard = memoryState.cards[secondIndex];

  if (firstCard.symbol === secondCard.symbol) {
    firstCard.matched = true;
    secondCard.matched = true;
    memoryState.matchedCount += 1;
    memoryState.openedIndexes = [];
    memoryState.locked = false;
    updateMemoryStatus();
    renderMemoryBoard();

    if (memoryState.matchedCount === memorySymbols.length) {
      memoryStatus.textContent = `完成，步数：${memoryState.moves}`;
    }

    return;
  }

  window.setTimeout(() => {
    firstCard.open = false;
    secondCard.open = false;
    memoryState.openedIndexes = [];
    memoryState.locked = false;
    updateMemoryStatus();
    renderMemoryBoard();
  }, 650);
});

memoryReset.addEventListener("click", resetMemoryGame);

tapTarget.addEventListener("click", () => {
  if (!tapState.active) {
    startTapGame();
    return;
  }

  tapState.score += 1;
  tapState.combo += 1;
  tapState.bestCombo = Math.max(tapState.bestCombo, tapState.combo);
  updateTapStatus();
  moveTapTarget();
});

tapGame.addEventListener("click", (event) => {
  if (!tapState.active || event.target === tapTarget) {
    return;
  }

  tapState.combo = 0;
  updateTapStatus();
});

tapReset.addEventListener("click", startTapGame);

colorOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".color-option");

  if (!option || !colorState.active) {
    return;
  }

  if (option.dataset.color === colorState.target.name) {
    colorState.score += 1;
    colorState.round += 1;
    colorStatus.textContent = `答对了。第 ${colorState.round} 题，得分：${colorState.score}`;
    renderColorRound();
    return;
  }

  colorStatus.textContent = `选错了，本轮得分：${colorState.score}。点击开始再来。`;
  colorState.active = false;
  colorStart.textContent = "开始";
});

colorStart.addEventListener("click", startColorGame);

breathButton.addEventListener("click", () => {
  if (breathState.active) {
    stopBreath();
    return;
  }

  startBreath();
});

calorieButton.addEventListener("click", calculateCalories);

reversiBoard.addEventListener("click", (event) => {
  const cell = event.target.closest(".reversi-cell");

  if (!cell || reversiState.finished) {
    return;
  }

  const index = Number(cell.dataset.index);
  const flips = getReversiFlips(index, reversiState.current);

  if (flips.length === 0) {
    return;
  }

  reversiState.board[index] = reversiState.current;
  flips.forEach((flipIndex) => {
    reversiState.board[flipIndex] = reversiState.current;
  });
  switchReversiPlayer();
  renderReversiBoard();
});

reversiReset.addEventListener("click", resetReversi);

fishButton.addEventListener("click", () => {
  fishState.merit += 1;
  fishState.combo += 1;
  fishText.textContent = fishState.combo % 10 === 0 ? "大功德" : "咚";
  updateFishStatus();

  window.clearTimeout(fishState.timerId);
  fishState.timerId = window.setTimeout(() => {
    fishState.combo = 0;
    fishText.textContent = "敲一下";
    updateFishStatus();
  }, 1800);
});

fishReset.addEventListener("click", () => {
  fishState.merit = 0;
  fishState.combo = 0;
  fishText.textContent = "敲一下";
  updateFishStatus();
});

resetMemoryGame();
renderColorRound();
resetReversi();
updateFishStatus();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
