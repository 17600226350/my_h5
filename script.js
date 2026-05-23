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
const songSelect = document.querySelector("#songSelect");
const songGuide = document.querySelector("#songGuide");
const musicPads = document.querySelector("#musicPads");
const songPlay = document.querySelector("#songPlay");
const songPractice = document.querySelector("#songPractice");
const songStop = document.querySelector("#songStop");
const musicStatus = document.querySelector("#musicStatus");
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
const gomokuBoard = document.querySelector("#gomokuBoard");
const gomokuStatus = document.querySelector("#gomokuStatus");
const gomokuReset = document.querySelector("#gomokuReset");
const fishWrap = document.querySelector("#fishWrap");
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

const musicSongs = {
  mama: {
    name: "妈妈的爱",
    guide: "偏温柔一点，Pad 1 到 Pad 4 是主旋律，Pad 9 到 Pad 12 是氛围和收尾。",
    palette: [
      ["#ef4444", "#be123c"],
      ["#fb7185", "#e11d48"],
      ["#f97316", "#ea580c"],
      ["#f59e0b", "#d97706"],
      ["#22c55e", "#15803d"],
      ["#14b8a6", "#0f766e"],
      ["#3b82f6", "#2563eb"],
      ["#6366f1", "#4338ca"],
      ["#8b5cf6", "#7c3aed"],
      ["#d946ef", "#c026d3"],
      ["#ec4899", "#be185d"],
      ["#f43f5e", "#be123c"],
    ],
    pads: [
      { label: "主歌 A", sequence: [["G4", 0.24], ["A4", 0.24], ["B4", 0.38]] },
      { label: "主歌 B", sequence: [["A4", 0.24], ["G4", 0.24], ["E4", 0.4]] },
      { label: "副歌 A", sequence: [["D4", 0.24], ["G4", 0.24], ["A4", 0.34], ["B4", 0.4]] },
      { label: "副歌 B", sequence: [["B4", 0.24], ["A4", 0.24], ["G4", 0.45]] },
      { label: "和声 1", sequence: [["E4", 0.28, "pad"], ["G4", 0.28, "pad"], ["B4", 0.52, "pad"]] },
      { label: "和声 2", sequence: [["D4", 0.28, "pad"], ["F#4", 0.28, "pad"], ["A4", 0.52, "pad"]] },
      { label: "低音 1", sequence: [["G3", 0.38, "bass"], ["D4", 0.3, "bass"]] },
      { label: "低音 2", sequence: [["E3", 0.38, "bass"], ["B3", 0.3, "bass"]] },
      { label: "点缀 1", sequence: [["B4", 0.18], ["D5", 0.18], ["B4", 0.18], ["A4", 0.34]] },
      { label: "点缀 2", sequence: [["G4", 0.18], ["A4", 0.18], ["G4", 0.18], ["E4", 0.34]] },
      { label: "收束", sequence: [["D4", 0.24], ["G4", 0.28], ["B4", 0.55]] },
      { label: "尾音", sequence: [["G4", 0.7, "pad"]] },
    ],
    demo: [0, 1, 2, 3, 4, 6, 2, 3, 10, 11],
    melody: [0, 1, 2, 3, 2, 3, 10, 11],
  },
  send51: {
    name: "第51次发送",
    guide: "这一套更偏电子感，前四个 Pad 是主句，中间是节奏和氛围，后面是爆点。",
    palette: [
      ["#06b6d4", "#0f766e"],
      ["#22c55e", "#15803d"],
      ["#84cc16", "#4d7c0f"],
      ["#f59e0b", "#b45309"],
      ["#fb7185", "#be185d"],
      ["#c084fc", "#7c3aed"],
      ["#60a5fa", "#2563eb"],
      ["#38bdf8", "#0369a1"],
      ["#14b8a6", "#115e59"],
      ["#34d399", "#047857"],
      ["#f97316", "#c2410c"],
      ["#ef4444", "#991b1b"],
    ],
    pads: [
      { label: "句子 1", sequence: [["E4", 0.2], ["G4", 0.2], ["B4", 0.2], ["G4", 0.28]] },
      { label: "句子 2", sequence: [["D4", 0.2], ["E4", 0.2], ["G4", 0.2], ["E4", 0.3]] },
      { label: "句子 3", sequence: [["A4", 0.18], ["B4", 0.18], ["D5", 0.22], ["B4", 0.34]] },
      { label: "句子 4", sequence: [["G4", 0.18], ["A4", 0.18], ["B4", 0.18], ["G4", 0.36]] },
      { label: "氛围 1", sequence: [["E4", 0.5, "pad"], ["B4", 0.5, "pad"]] },
      { label: "氛围 2", sequence: [["D4", 0.5, "pad"], ["A4", 0.5, "pad"]] },
      { label: "低频 1", sequence: [["E3", 0.24, "bass"], ["E3", 0.24, "bass"], ["B3", 0.24, "bass"]] },
      { label: "低频 2", sequence: [["D3", 0.24, "bass"], ["D3", 0.24, "bass"], ["A3", 0.24, "bass"]] },
      { label: "副句 1", sequence: [["B4", 0.18], ["A4", 0.18], ["G4", 0.22], ["E4", 0.35]] },
      { label: "副句 2", sequence: [["D5", 0.18], ["B4", 0.18], ["A4", 0.22], ["G4", 0.35]] },
      { label: "爆点 1", sequence: [["E5", 0.14], ["D5", 0.14], ["B4", 0.18], ["G4", 0.32]] },
      { label: "爆点 2", sequence: [["G4", 0.18], ["B4", 0.18], ["D5", 0.18], ["E5", 0.4]] },
    ],
    demo: [0, 1, 4, 6, 2, 3, 5, 7, 8, 9, 10, 11],
    melody: [0, 1, 2, 3, 8, 9, 10, 11],
  },
  faded: {
    name: "Faded",
    guide: "这套更像电音 Pad，前四块是经典旋律，中间是铺底，后面是推进和收尾。",
    palette: [
      ["#0ea5e9", "#1d4ed8"],
      ["#38bdf8", "#0284c7"],
      ["#60a5fa", "#2563eb"],
      ["#818cf8", "#4338ca"],
      ["#a78bfa", "#7c3aed"],
      ["#c084fc", "#9333ea"],
      ["#f472b6", "#db2777"],
      ["#fb7185", "#e11d48"],
      ["#f97316", "#ea580c"],
      ["#facc15", "#ca8a04"],
      ["#4ade80", "#16a34a"],
      ["#2dd4bf", "#0f766e"],
    ],
    pads: [
      { label: "Hook 1", sequence: [["A4", 0.22], ["G4", 0.22], ["E4", 0.32], ["D4", 0.38]] },
      { label: "Hook 2", sequence: [["A4", 0.22], ["G4", 0.22], ["E4", 0.32], ["C4", 0.38]] },
      { label: "Hook 3", sequence: [["C5", 0.22], ["B4", 0.22], ["G4", 0.3], ["E4", 0.42]] },
      { label: "Hook 4", sequence: [["A4", 0.22], ["G4", 0.22], ["E4", 0.32], ["B3", 0.42]] },
      { label: "Pad 1", sequence: [["A4", 0.62, "pad"], ["E5", 0.62, "pad"]] },
      { label: "Pad 2", sequence: [["F4", 0.62, "pad"], ["C5", 0.62, "pad"]] },
      { label: "Bass 1", sequence: [["A3", 0.3, "bass"], ["A3", 0.3, "bass"], ["E4", 0.3, "bass"]] },
      { label: "Bass 2", sequence: [["F3", 0.3, "bass"], ["F3", 0.3, "bass"], ["C4", 0.3, "bass"]] },
      { label: "Rise 1", sequence: [["E4", 0.16], ["G4", 0.16], ["A4", 0.16], ["C5", 0.32]] },
      { label: "Rise 2", sequence: [["D4", 0.16], ["E4", 0.16], ["G4", 0.16], ["B4", 0.32]] },
      { label: "Drop 1", sequence: [["A4", 0.12], ["E5", 0.12], ["D5", 0.12], ["C5", 0.3]] },
      { label: "Drop 2", sequence: [["G4", 0.12], ["B4", 0.12], ["A4", 0.12], ["E4", 0.34]] },
    ],
    demo: [4, 6, 0, 1, 5, 7, 2, 3, 8, 9, 10, 11],
    melody: [0, 1, 2, 3, 0, 1, 10, 11],
  },
};

const noteFrequencies = {
  C3: 130.81,
  D3: 146.83,
  E3: 164.81,
  F3: 174.61,
  G3: 196.0,
  A3: 220.0,
  B3: 246.94,
  C4: 261.63,
  "C#4": 277.18,
  D4: 293.66,
  "D#4": 311.13,
  E4: 329.63,
  F4: 349.23,
  "F#4": 369.99,
  G4: 392.0,
  "G#4": 415.3,
  A4: 440.0,
  "A#4": 466.16,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
};

const musicState = {
  currentSong: "mama",
  practiceIndex: 0,
  practiceMode: false,
  audioContext: null,
  playTimers: [],
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

const gomokuDirections = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
];

const gomokuState = {
  board: Array(15 * 15).fill(""),
  current: "black",
  finished: false,
};

const fishState = {
  merit: 0,
  combo: 0,
  timerId: null,
  audioContext: null,
};

const fishBlessings = [
  "大运+1",
  "幸运+1",
  "平安+1",
  "福气+1",
  "顺利+1",
  "灵感+1",
  "气场+1",
  "自律+1",
  "专注+1",
  "状态+1",
  "元气+1",
  "开心+1",
  "财气+1",
  "桃花+1",
  "健康+1",
  "耐心+1",
  "智慧+1",
  "清醒+1",
];

const dailyTips = [
  "先玩一局节奏连击，把手感热起来。",
  "做 3 轮呼吸节拍，再去做正事。",
  "试试五子棋，练一下判断和耐心。",
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

const getMusicAudioContext = () => {
  if (!musicState.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    musicState.audioContext = new AudioContextClass();
  }

  return musicState.audioContext;
};

const renderMusicPads = () => {
  const song = musicSongs[musicState.currentSong];

  musicPads.querySelectorAll(".music-pad").forEach((pad, index) => {
    const clip = song.pads[index];
    const [topColor, bottomColor] = song.palette[index];
    pad.textContent = clip.label;
    pad.style.setProperty("--pad-top", topColor);
    pad.style.setProperty("--pad-bottom", bottomColor);
  });
};

const flashMusicPad = (padIndex) => {
  const pad = musicPads.querySelector(`[data-pad="${padIndex}"]`);

  if (!pad) {
    return;
  }

  pad.classList.add("is-active");
  window.setTimeout(() => {
    pad.classList.remove("is-active");
  }, 180);
};

const playMusicNote = async (note, duration = 0.34, tone = "lead") => {
  const audioContext = getMusicAudioContext();

  if (!audioContext) {
    return;
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  const nowTime = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const filterNode = audioContext.createBiquadFilter();

  oscillator.type = tone === "bass" ? "sawtooth" : tone === "pad" ? "sine" : "triangle";
  oscillator.frequency.setValueAtTime(noteFrequencies[note], nowTime);
  filterNode.type = "lowpass";
  filterNode.frequency.setValueAtTime(tone === "bass" ? 1200 : tone === "pad" ? 1800 : 2400, nowTime);

  gainNode.gain.setValueAtTime(0.0001, nowTime);
  gainNode.gain.exponentialRampToValueAtTime(tone === "pad" ? 0.18 : 0.24, nowTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, nowTime + duration);

  oscillator.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(nowTime);
  oscillator.stop(nowTime + duration + 0.03);
};

const clearMusicTimers = () => {
  musicState.playTimers.forEach((timerId) => window.clearTimeout(timerId));
  musicState.playTimers = [];
};

const updateSongSelection = () => {
  songSelect.querySelectorAll(".song-chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.song === musicState.currentSong);
  });
};

const updateMusicGuide = () => {
  const song = musicSongs[musicState.currentSong];
  songGuide.textContent = `${song.name}：${song.guide}`;
};

const selectSong = (songKey) => {
  musicState.currentSong = songKey;
  musicState.practiceIndex = 0;
  musicState.practiceMode = false;
  updateSongSelection();
  updateMusicGuide();
  renderMusicPads();
  musicStatus.textContent = `当前歌曲：${musicSongs[songKey].name}。点任意 Pad 就能出片段，也可以点“自动连播”或“主旋律”。`;
};

const autoplaySong = () => {
  const song = musicSongs[musicState.currentSong];
  clearMusicTimers();
  musicState.practiceMode = false;
  musicState.practiceIndex = 0;
  musicStatus.textContent = `正在示范：${song.name}`;

  song.demo.forEach((padIndex, index) => {
    const timerId = window.setTimeout(() => {
      playPadSequence(padIndex);

      if (index === song.demo.length - 1) {
        musicStatus.textContent = `示范结束。现在可以自己弹 ${song.name}。`;
      }
    }, index * 430);

    musicState.playTimers.push(timerId);
  });
};

const startPracticeMode = () => {
  clearMusicTimers();
  musicState.practiceMode = true;
  musicState.practiceIndex = 0;
  const firstPad = musicSongs[musicState.currentSong].melody[0];
  const firstLabel = musicSongs[musicState.currentSong].pads[firstPad].label;
  musicStatus.textContent = `主旋律开始。先点 ${firstLabel}`;
  flashMusicPad(firstPad);
};

const stopMusicMode = () => {
  clearMusicTimers();
  musicState.practiceMode = false;
  musicState.practiceIndex = 0;
  musicStatus.textContent = `已停止。继续自由打 Pad，或者重新开始 ${musicSongs[musicState.currentSong].name}。`;
};

const playPadSequence = (padIndex) => {
  const clip = musicSongs[musicState.currentSong].pads[padIndex];
  let elapsed = 0;

  flashMusicPad(padIndex);

  clip.sequence.forEach(([note, duration, tone = "lead"]) => {
    const timerId = window.setTimeout(() => {
      playMusicNote(note, duration, tone).catch(() => {});
    }, elapsed * 1000);

    musicState.playTimers.push(timerId);
    elapsed += duration;
  });
};

const handleMusicInput = (padIndex) => {
  playPadSequence(padIndex);

  if (!musicState.practiceMode) {
    return;
  }

  const song = musicSongs[musicState.currentSong];
  const expectedPad = song.melody[musicState.practiceIndex];

  if (padIndex !== expectedPad) {
    const expectedLabel = song.pads[expectedPad].label;
    musicStatus.textContent = `这一步应该点 ${expectedLabel}，再试一次。`;
    flashMusicPad(expectedPad);
    return;
  }

  musicState.practiceIndex += 1;

  if (musicState.practiceIndex >= song.melody.length) {
    musicState.practiceMode = false;
    musicStatus.textContent = `${song.name} 主旋律完成。再打一遍会更顺。`;
    return;
  }

  const nextPad = song.melody[musicState.practiceIndex];
  const nextLabel = song.pads[nextPad].label;
  musicStatus.textContent = `对了。下一步点 ${nextLabel}`;
  flashMusicPad(nextPad);
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

const getGomokuIndex = (row, col) => row * 15 + col;

const renderGomoku = () => {
  gomokuBoard.innerHTML = "";

  gomokuState.board.forEach((piece, index) => {
    const cell = document.createElement("button");
    cell.className = "gomoku-cell";
    cell.type = "button";
    cell.dataset.index = `${index}`;

    if (piece) {
      cell.classList.add(piece === "black" ? "is-black" : "is-white");
    }

    gomokuBoard.append(cell);
  });

  if (!gomokuState.finished) {
    gomokuStatus.textContent = `${gomokuState.current === "black" ? "黑棋" : "白棋"}落子，先连成五子获胜。`;
  }
};

const hasGomokuWinner = (row, col, piece) => {
  return gomokuDirections.some(([rowStep, colStep]) => {
    let count = 1;

    [-1, 1].forEach((direction) => {
      let nextRow = row + rowStep * direction;
      let nextCol = col + colStep * direction;

      while (nextRow >= 0 && nextRow < 15 && nextCol >= 0 && nextCol < 15) {
        if (gomokuState.board[getGomokuIndex(nextRow, nextCol)] !== piece) {
          break;
        }

        count += 1;
        nextRow += rowStep * direction;
        nextCol += colStep * direction;
      }
    });

    return count >= 5;
  });
};

const resetGomoku = () => {
  gomokuState.board = Array(15 * 15).fill("");
  gomokuState.current = "black";
  gomokuState.finished = false;
  renderGomoku();
};

const updateFishStatus = () => {
  fishStatus.textContent = `功德：${fishState.merit}
连击：${fishState.combo}`;
};

const getFishAudioContext = () => {
  if (!fishState.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    fishState.audioContext = new AudioContextClass();
  }

  return fishState.audioContext;
};

const playFishSound = async () => {
  const audioContext = getFishAudioContext();

  if (!audioContext) {
    return;
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  const nowTime = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const filterNode = audioContext.createBiquadFilter();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(220, nowTime);
  oscillator.frequency.exponentialRampToValueAtTime(170, nowTime + 0.12);

  filterNode.type = "bandpass";
  filterNode.frequency.setValueAtTime(720, nowTime);
  filterNode.Q.setValueAtTime(2.6, nowTime);

  gainNode.gain.setValueAtTime(0.0001, nowTime);
  gainNode.gain.exponentialRampToValueAtTime(0.32, nowTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, nowTime + 0.22);

  oscillator.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(nowTime);
  oscillator.stop(nowTime + 0.24);
};

const spawnFishFloatText = () => {
  const floatText = document.createElement("span");
  const message =
    Math.random() < 0.7
      ? "功德+1"
      : fishBlessings[Math.floor(Math.random() * fishBlessings.length)];
  const randomOffset = Math.round((Math.random() - 0.5) * 90);

  floatText.className = "fish-float";
  floatText.textContent = message;
  floatText.style.left = `calc(50% + ${randomOffset}px)`;
  fishWrap.append(floatText);

  window.setTimeout(() => {
    floatText.remove();
  }, 1400);

  return message;
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

if (songSelect && musicPads && songPlay && songPractice && songStop && musicStatus) {
  songSelect.addEventListener("click", (event) => {
    const songButton = event.target.closest(".song-chip");

    if (!songButton) {
      return;
    }

    selectSong(songButton.dataset.song);
  });

  musicPads.addEventListener("click", (event) => {
    const pad = event.target.closest(".music-pad");

    if (!pad) {
      return;
    }

    handleMusicInput(Number(pad.dataset.pad));
  });

  songPlay.addEventListener("click", autoplaySong);
  songPractice.addEventListener("click", startPracticeMode);
  songStop.addEventListener("click", stopMusicMode);
}

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

gomokuBoard.addEventListener("click", (event) => {
  const cell = event.target.closest(".gomoku-cell");

  if (!cell || gomokuState.finished) {
    return;
  }

  const index = Number(cell.dataset.index);
  if (gomokuState.board[index]) {
    return;
  }

  const row = Math.floor(index / 15);
  const col = index % 15;
  const piece = gomokuState.current;

  gomokuState.board[index] = piece;

  if (hasGomokuWinner(row, col, piece)) {
    gomokuState.finished = true;
    renderGomoku();
    gomokuStatus.textContent = `${piece === "black" ? "黑棋" : "白棋"}获胜。`;
    return;
  }

  if (gomokuState.board.every(Boolean)) {
    gomokuState.finished = true;
    renderGomoku();
    gomokuStatus.textContent = "平局。";
    return;
  }

  gomokuState.current = piece === "black" ? "white" : "black";
  renderGomoku();
});

gomokuReset.addEventListener("click", resetGomoku);

fishButton.addEventListener("click", () => {
  fishState.merit += 1;
  fishState.combo += 1;
  const fishMessage = spawnFishFloatText();
  fishText.textContent = fishMessage;
  updateFishStatus();
  playFishSound().catch(() => {});
  fishButton.classList.remove("is-hit");
  window.requestAnimationFrame(() => {
    fishButton.classList.add("is-hit");
  });

  window.clearTimeout(fishState.timerId);
  fishState.timerId = window.setTimeout(() => {
    fishState.combo = 0;
    fishText.textContent = "敲一下";
    fishButton.classList.remove("is-hit");
    updateFishStatus();
  }, 1800);
});

fishReset.addEventListener("click", () => {
  fishState.merit = 0;
  fishState.combo = 0;
  window.clearTimeout(fishState.timerId);
  fishText.textContent = "敲一下";
  fishButton.classList.remove("is-hit");
  fishWrap.querySelectorAll(".fish-float").forEach((node) => node.remove());
  updateFishStatus();
});

if (songSelect && musicPads && songPlay && songPractice && songStop && musicStatus) {
  selectSong(musicState.currentSong);
}
renderColorRound();
resetGomoku();
updateFishStatus();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
