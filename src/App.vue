<script setup>
import { ref, watch } from "vue";

const currentPage = ref("home");
const showTutorial = ref(false);
const showSettings = ref(false);
const showWinning = ref(false);
const showLosing = ref(false);
const selectedCharacter = ref(null);
const currentBoss = ref(0);

const bossHp = ref(0);
const bossMaxHp = ref(0);
const heroHp = ref(0);
const heroMaxHp = ref(0);

const heroSta = ref(0);
const heroMaxSta = ref(0);
const enableSkill = ref(false);
const disableSkillTurn = ref(0);

const turn = ref(1);
const isBossTurn = ref(false);
const potionCount = ref(3);
const potionSta = 30;

const bossCharacters = [
  {
    class: "1",
    name: "The Skeleton",
    hp: 200,
    atk: 10,
    picture: "/images/character/bossStage1.png",
  },
  {
    class: "2",
    name: "The Cured Armor",
    hp: 300,
    atk: 20,
    specialAtk: 25,
    picture: "/images/character/bossStage2.png",
  },
  {
    class: "3",
    name: "The Lich",
    hp: 500,
    atk: 35,
    specialAtk: 55,
    picture: "/images/character/bossStage3.png",
  },
];

const characters = [
  {
    class: "knight",
    name: "The Knight",
    hp: 240,
    sta: 100,
    atk: 35,
    skill: 50,
    atkUsage: 10,
    skillUsage: 25,
    picture: "/images/character/knight.png",
    pictureGameplay: "/images/character/knight1.png",
    atkPicture: "/images/playerAction/knight_atk.png",
    skillPicture: "/images/playerAction/knight_skill.png",
  },
  {
    class: "archer",
    name: "The Archer",
    hp: 180,
    sta: 150,
    atk: 45,
    skill: 80,
    atkUsage: 25,
    skillUsage: 40,
    picture: "/images/character/archer.png",
    pictureGameplay: "/images/character/archer1.png",
    atkPicture: "/images/playerAction/archer_atk.png",
    skillPicture: "/images/playerAction/archer_skill.png",
  },
  {
    class: "mage",
    name: "The Magician",
    hp: 200,
    sta: 200,
    atk: 15,
    skill: 100,
    atkUsage: 10,
    skillUsage: 60,
    picture: "/images/character/magician.png",
    pictureGameplay: "/images/character/magician1.png",
    atkPicture: "/images/playerAction/magician_atk.png",
    skillPicture: "/images/playerAction/magician_skill.png",
  },
];

const goToHome = () => {
  currentPage.value = "home";
  selectedCharacter.value = null;
  showSettings.value = false;
  showLosing.value = false;
  showWinning.value = false;
  potionCount.value = 3;
  resetLog();
};

const toggleTutorial = () => {
  showTutorial.value = !showTutorial.value;
};

const tutorialSteps = [
  "/src/assets/tutorial/text.png",
  "/src/assets/tutorial/selectCharacters.png",
  "/src/assets/tutorial/stage.png",
  "/src/assets/tutorial/menu.png",
  "/src/assets/tutorial/nextStage.png",
  "/src/assets/tutorial/lose.png",
  "/src/assets/tutorial/win.png",
];

const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < tutorialSteps.length - 1) {
    currentStep.value += 1;
  } else {
    // ถึงขั้นสุดท้ายก็ปิด tutorial
    showTutorial.value = false;
    currentStep.value = 0; 
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value -= 1;
  }
};

const goToSelectCharacter = (character) => {
  currentPage.value = "selectCharacter";
  selectedCharacter.value = null;
  currentBoss.value = 0;
  showSettings.value = false;
  showLosing.value = false;
  showWinning.value = false;
  turn.value = 1;
  heroHp.value = character.hp;
  heroMaxHp.value = character.hp;
  heroSta.value = character.sta;
  heroMaxSta.value = character.sta;
  bossMaxHp.value = bossCharacters[currentBoss.value].hp;
  bossHp.value = bossMaxHp.value;
  potionCount.value = 3;
  enableSkill.value = false;
  resetLog();
};

const toggleSettings = () => {
  showSettings.value = !showSettings.value;
};

const selectCharacter = (character) => {
  selectedCharacter.value = character;
  turn.value = 1;
  heroHp.value = character.hp;
  heroMaxHp.value = character.hp;
  heroSta.value = character.sta;
  heroMaxSta.value = character.sta;
  bossMaxHp.value = bossCharacters[currentBoss.value].hp;
  bossHp.value = bossMaxHp.value;
  potionCount.value = 3;
  enableSkill.value = false; 
};

const goToGamePlay = () => {
  if (selectedCharacter.value) {
    currentPage.value = "gamePlay";
    showSettings.value = false;
    enableSkill.value = false; 
  }
};

const goToNextStage = () => {
  currentBoss.value += 1;
  if (currentBoss.value < bossCharacters.length) {

    bossMaxHp.value = bossCharacters[currentBoss.value].hp;
    bossHp.value = bossMaxHp.value;

    heroHp.value = selectedCharacter.value.hp;
    heroMaxHp.value = selectedCharacter.value.hp;
    heroSta.value = selectedCharacter.value.sta;
    heroMaxSta.value = selectedCharacter.value.sta;

    turn.value = 1;
    isBossTurn.value = false;
    enableSkill.value = false;
    showWinning.value = false;
    currentPage.value = "gamePlay";
    resetLog();
  } else {
    goToHome();
  }
};

const skillBoss = () => {
  const damageToBoss = selectedCharacter.value.skill;
  bossHp.value = Math.max(0, bossHp.value - damageToBoss);
  disableSkillTurn.value = turn.value + 2;
  enableSkill.value = true;
  isBossTurn.value = true;
  heroSta.value = Math.max(0, heroSta.value - selectedCharacter?.value.skillUsage);

  addLog(
    `${selectedCharacter.value?.name} unleashes a powerful Skill!, Deals ${selectedCharacter.value.skill} damage!`
  );

  setTimeout(() => {
    attackHero();
  }, 1500);

  if (bossHp.value === 0) {
    enableSkill.value = false;
    showWinning.value = true;
  }
};

const attackBoss = () => {
  const damageToBoss = selectedCharacter.value.atk;
  bossHp.value = Math.max(0, bossHp.value - damageToBoss);
  isBossTurn.value = true;
  heroSta.value = Math.max(0, heroSta.value - selectedCharacter?.value.atkUsage);

  addLog(
    `${selectedCharacter.value?.name} attacks ${bossCharacters[currentBoss.value].name}, Deals ${damageToBoss}`
  );

  setTimeout(() => {
    attackHero();
  }, 1500);

  if (bossHp.value === 0) {
    enableSkill.value = false;
    showWinning.value = true;
  }
};

const usePotion = () => {
  if (potionCount.value > 0) {
    potionCount.value -= 1;
    const healAmount = heroMaxHp.value * 0.4;
    heroHp.value = Math.min(heroMaxHp.value, heroHp.value + healAmount);
    heroSta.value = Math.min(heroMaxSta.value, heroSta.value + potionSta);

    addLog(
      `${selectedCharacter.value?.name} gulps a Potion!, Restores HP +${healAmount}, STA +${potionSta}`
    );

    isBossTurn.value = true;
    setTimeout(() => {
      attackHero();
    }, 1500);
  }
};

const attackHero = () => {
  if (bossHp.value === 0 || showWinning.value) return;
  const damageToHero = bossCharacters[currentBoss.value].atk;
  heroHp.value = Math.max(0, heroHp.value - damageToHero);
  
  addLog(
    `${bossCharacters[currentBoss.value].name} strikes ${selectedCharacter.value?.name}, Deals ${damageToHero}`
  );

  if (turn.value >= disableSkillTurn.value) {
    enableSkill.value = false;
  }
  if (heroHp.value > 0) {
    turn.value += 1;
    isBossTurn.value = false;
  } else {
    showLosing.value = true;
  }
};

const logQueue = [];
const currentLog = ref("");

function addLog(text) {
  logQueue.push(text);
  showNextLog();
}

function showNextLog() {
  if (logQueue.length === 0) return;

  const text = logQueue.shift();
  currentLog.value = text;

  if (logQueue.length > 0) {
    setTimeout(showNextLog, 800);
  }
}

const resetLog = () => {
  logQueue.length = 0; 
  currentLog.value = "";
};

</script>

<template>
  <div v-if="currentPage === 'home'">
    <div class="w-screen h-screen bg-cover bg-center bg-no-repeat relative bg-[url('/images/bg/homePageBG.jpg')]">
      <div class="bg-white/25 rounded-md absolute top-[8vw] left-[12vw] w-[40vw] h-[28vw]">
        <div class="text-center pt-[5vw] text-7xl text-white">
          <h1 class="press-start-2p-regular pb-3">Solo</h1>
          <h1 class="press-start-2p-regular">Fantasy</h1>
          <div class="flex justify-center gap-[10vw] pt-[5vw]">
            <button @click="goToSelectCharacter" class="icon-button cursor-pointer">
              <img src="./assets/images/element/playButton.png" style="transform: scale(3.5)" />
            </button>
            <button @click="toggleTutorial" class="icon-button cursor-pointer">
              <img src="./assets/images/element/Tutorial.png" style="transform: scale(3.5)" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tutorial Popup -->
  <div v-if="showTutorial" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
    <!-- กล่องหลัก Tutorial -->
    <div class="relative w-[800px] h-[500px] rounded-lg p-6 flex flex-col items-center justify-start"
        style="border: 4px solid #BF6F4A; background-color: #8A4836;">
      
      <!-- ปุ่ม Home (ปิด Tutorial) -->
      <button @click="toggleTutorial" class="icon-button absolute top-4 right-4">
        <img src="./assets/images/element/home.png" style="transform: scale(2)" />
      </button>

      <!-- หัวข้อ -->
      <h1 class="press-start-2p text-white text-4xl mb-4">Tutorial</h1>

      <!-- กรอบเนื้อหา -->
      <div class="w-[560px] h-[400px] bg-white/20 rounded-md flex items-center justify-center relative">
        <!-- รูป tutorial ปัจจุบัน -->
        <img :src="tutorialSteps[currentStep]" class="max-w-full max-h-full object-contain" />

        <!-- Previous button -->
        <button v-if="currentStep > 0" @click="prevStep"
                class="absolute left-[-16%] top-1/2 -translate-y-1/2 icon-button">
          <img src="./assets/images/element/playButton.png" class="rotate-180 w-16 h-16" />
        </button>

        <!-- Next button -->
        <button @click="nextStep"
                class="absolute right-[-16%] top-1/2 -translate-y-1/2 icon-button">
          <img v-if="currentStep < tutorialSteps.length - 1"
              src="./assets/images/element/playButton.png" class="w-16 h-16" />
          <span v-else class="text-white text-lg"></span>
        </button>
      </div>
    </div>
  </div>

  <div v-if="currentPage === 'selectCharacter'" class="relative">
    <div
      class="w-screen h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center bg-[url('/src/assets/images/bg/selectCharacterBG.png')]">
      <button @click="goToHome" class="icon-button absolute top-[3vw] left-[5vw]">
        <img src="./assets/images/element/back.png" style="transform: scale(2)" />
      </button>
      <h1 class="press-start-2p text-white text-6xl relative drop-shadow-lg pt-[1vw]">
        Select Character
      </h1>

      <div class="flex justify-center items-center relative gap-[5vw] pt-[3vw]">
        <div v-for="character in characters" :key="character.class" @click="selectCharacter(character)" :class="[
            'character-card cursor-pointer transition-all duration-300',
            selectedCharacter?.class === character.class ? 'selected' : '',
            selectedCharacter?.class === 'knight' &&
            character.class === 'knight'
              ? 'selected-knight'
              : '',
            selectedCharacter?.class === 'archer' &&
            character.class === 'archer'
              ? 'selected-archer'
              : '',
            selectedCharacter?.class === 'mage' && character.class === 'mage'
              ? 'selected-mage'
              : '',
          ]">
          <img :src="character.picture" :alt="character.name" />

          <div style="
              background: rgba(255, 240, 231, 100);
              border-radius: 8px;
              padding: 12px;
              border: 2px solid #444;
            ">
            <h3 class="press-start-2p text-black text-sm mb-3 text-center" style="margin-bottom: 10px">
              {{ character.name }}
            </h3>
            <div>
              <div class="stat-row">
                <span class="text-black">HP</span>
                <span class="text-black">{{ character.hp }}</span>
              </div>
              <div class="stat-row">
                <span class="text-black">STA</span>
                <span class="text-black">{{ character.sta }}</span>
              </div>
              <div class="stat-row">
                <span class="text-black">ATK</span>
                <span class="text-black">
                  {{ character.atk }}<span> ({{ character.atkUsage }})</span>
                </span>
              </div>
              <div class="stat-row">
                <span class="text-black">SKILL</span>
                <span class="text-black">
                  {{ character.skill
                  }}<span> (-{{ character.skillUsage }} STA)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center pt-[3vw]">
        <button @click="goToGamePlay" :disabled="!selectedCharacter" class="select-button relative">
          Select
        </button>
      </div>
    </div>
  </div>
  <div v-if="currentPage === 'gamePlay'"
    class="w-screen h-screen bg-cover bg-center bg-no-repeat relative bg-[url('/src/assets/images/bg/gamePlayBG.jpg')] press-start-2p">
    <div class="absolute inset-0 bg-black/30">
      <button @click="toggleSettings" class="icon-button absolute top-[3.5vw] left-[93vw]">
        <img src="./assets/images/element/setting.png" style="transform: scale(2.5)" />
      </button>
      <div class="absolute h-100 w-90 py-7 left-185">
        <img :src="bossCharacters[currentBoss].picture" :alt="bossCharacters[currentBoss].name" class="h-78 w-73" />
      </div>
      <div class="absolute w-[400px] h-[140px] top-[50px] left-[240px]">
        <img src="./assets/images/element/boxHpAndSta.png" class="w-full h-full" />
        <div class="absolute top-[27px] left-[60px] text-white text-lg">
          <span>{{ bossCharacters[currentBoss].name }}</span>
        </div>
        <div class="absolute top-[60px] flex left-[60px] text-white text-lg">
          <span>HP </span>
          <div class="w-50 h-6 bg-gray-700 relative overflow-hidden">
            <div class="h-full bg-[#FF3A3A] transition-all duration-500"
              :style="{ width: (bossHp / bossMaxHp) * 100 + '%' }"></div>
          </div>
        </div>
        <div class="absolute top-[90px] left-[130px] text-white text-md">
          {{ bossHp }} / {{ bossMaxHp }}
        </div>
      </div>
      <div class="absolute h-100 w-90 py-54 left-74">
        <img :src="selectedCharacter?.pictureGameplay" :alt="selectedCharacter.name" class="h-80 w-75" />
      </div>
      <div class="absolute w-[400px] h-[140px] top-[50px] left-[220px]">
        <div class="absolute w-[570px] h-[170px] top-[300px] left-[630px]">
          <img src="./assets/images/element/boxHpAndSta.png" class="w-full h-full" />
          <div class="absolute top-[40px] left-[60px] text-white text-lg">
            <span>{{ selectedCharacter?.name }}</span>
          </div>
          <div class="absolute top-[80px] flex left-[40px] text-white text-lg">
            <span>HP</span>
            <div class="w-50 h-6 bg-gray-700 relative overflow-hidden">
              <div class="h-full bg-[#FF3A3A] transition-all duration-500"
                :style="{ width: (heroHp / heroMaxHp) * 100 + '%' }"></div>
            </div>
          </div>
          <div class="absolute top-[110px] left-[115px] text-white text-md">
            {{ heroHp }} / {{ heroMaxHp }}
          </div>
          <div class="absolute top-[80px] flex right-[30px] text-white text-lg">
            <span>STA</span>
            <div class="w-50 h-6 bg-gray-700 relative overflow-hidden">
              <div class="h-full bg-[#3ab7ff] transition-all duration-500"
                :style="{ width: (heroSta / heroMaxSta) * 100 + '%' }"></div>
            </div>
          </div>
          <div class="absolute top-[110px] right-[60px] text-white text-md">
            {{ heroSta }} / {{ heroMaxSta }}
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full h-52 bg-white/60 flex text-black">
        <div class="flex-1 flex items-center justify-center border-r-2 border-black">
          <div class="absolute top-5 left-5 flex gap-2 z-50">
            <div class="bg-white px-4 py-2 border-2 border-black">
              <p>Stage {{ bossCharacters[currentBoss].class }}</p>
            </div>
            <div class="bg-white px-4 py-2 border-2 border-black">
              <p>Turn {{ turn }}</p>
            </div>

            <div class="absolute
              w-[50vw] overflow-hidden p-20
              text-black text-2xl rounded-md flex justify-center press-start-2p">
              <transition name="fade" mode="out-in">
                <div :key="currentLog" class="text-center">
                  {{ currentLog }}
                </div>
              </transition>
            </div>
          </div>

        </div>
        <div class="flex-1 flex items-center justify-center">
          <div class="flex-1 border-r h-full">
            <div class="flex flex-col py-7 items-center justify-center">
              <p class="text-2xl pb-3">ATK</p>
              <div class="relative w-27 h-27">
                <img src="./assets/images/playerAction/itemBox.png" class="w-full h-full object-cover shadow-md" />
                <button @click="attackBoss" :disabled="isBossTurn"
                  class="absolute top-1/2 left-1/2 w-21 h-21 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  :class="{ 'opacity-50 cursor-not-allowed': isBossTurn }">
                  <img v-if="selectedCharacter" :src="selectedCharacter.atkPicture"
                    class="w-full h-full object-contain" />
                </button>
              </div>
            </div>
          </div>
          <div class="flex-1 flex justify-center border-r h-full">
            <div class="flex flex-col py-7 items-center justify-center">
              <p class="pb-3 text-2xl">SKILL</p>
              <div class="relative w-27 h-27">
                <img src="./assets/images/playerAction/itemBox.png" class="w-full h-full object-cover shadow-md" />
                <button @click="skillBoss" :disabled="isBossTurn || enableSkill"
                  class="absolute top-1/2 left-1/2 w-21 h-21 -translate-x-1/2 -translate-y-1/2 cursor-pointer" :class="{
                    'opacity-50 cursor-not-allowed': isBossTurn || enableSkill,
                  }">
                  <img v-if="selectedCharacter" :src="selectedCharacter.skillPicture"
                    class="w-full h-full object-contain" />
                </button>
              </div>
            </div>
          </div>
          <div class="flex-1 flex justify-center h-full">
            <div class="flex flex-col py-7 items-center justify-center">
              <p class="pb-3 text-2xl">POTION</p>
              <div class="relative w-27 h-27">
                <img src="./assets/images/playerAction/itemBox.png" class="w-full h-full object-cover shadow-md" />
                <button @click="usePotion" :disabled="isBossTurn || potionCount === 0"
                  class="absolute top-1/2 left-1/2 w-21 h-21 -translate-x-1/2 -translate-y-1/2 cursor-pointer" :class="{
                    'opacity-50 cursor-not-allowed': isBossTurn || potionCount === 0,
                  }">
                  <img src="./assets/images/playerAction/potion.png" class="w-full h-full object-contain" />
                  <div
                    class="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm border-2 border-black">
                    {{ potionCount }}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showSettings" class="settings-modal fixed inset-0 flex items-center justify-center z-50">
    <div class="settings-panel-container relative">
      <img src="./assets/images/element/settingBox.png" class="settings-box-bg w-[280px] h-[320px] object-contain" />
      <div class="settings-content absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 class="press-start-2p text-white text-3xl text-center pb-[2vw]">
          Setting
        </h1>
        <div class="flex flex-col items-center gap-6">
          <div class="flex justify-center gap-[4vw]">
            <button @click="toggleSettings" class="icon-button">
              <div class="Play">
                <div class="icon-content">
                  <img src="./assets/images/element/playButton.png" style="transform: scale(2.5)" />
                </div>
              </div>
            </button>
            <button @click="goToSelectCharacter" class="icon-button">
              <div class="Back">
                <div class="icon-content">
                  <img src="./assets/images/element/playAgain.png" style="transform: scale(2.5)" />
                </div>
              </div>
            </button>
          </div>

          <div class="flex justify-center pt-[1vw]">
            <button @click="goToHome" class="icon-button">
              <div class="Home">
                <div class="icon-content">
                  <img src="./assets/images/element/home.png" style="transform: scale(2.5)" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showWinning" class="fixed inset-0 flex items-center justify-center z-50 bg-black/25">
    <div class="settings-panel-container relative">
      <img src="./assets/images/element/settingBox.png" class="settings-box-bg w-[280px] h-[320px] object-contain" />
      <div class="settings-content absolute inset-0 flex flex-col items-center justify-center p-4 pb-[3vw]">
        <h1 class="press-start-2p text-white text-3xl text-center pt-[1vw] pb-[1vw]">
          {{ selectedCharacter?.name }}
        </h1>
        <h1 class="press-start-2p text-green-500 text-3xl text-center pb-[1vw]">
          Win
        </h1>
        <div class="flex flex-row items-center justify-center">
          <div class="w-[80px] h-[80px]">
            <button @click="goToHome" class="icon-button">
              <img src="./assets/images/element/home.png" class="w-[80px] h-[80px]" />
            </button>
          </div>

          <div class="w-[80px] h-[80px]">
            <button @click="goToSelectCharacter" class="icon-button">
              <img src="./assets/images/element/playAgain.png" class="w-[80px] h-[80px]" />
            </button>
          </div>

          <div class="w-[80px] h-[80px]">
            <button @click="goToNextStage" class="icon-button">
              <img src="./assets/images/element/next.png" class="w-[80px] h-[80px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showLosing" class="fixed inset-0 flex items-center justify-center z-50 bg-black/25">
    <div class="settings-panel-container relative">
      <img src="./assets/images/element/settingBox.png" class="settings-box-bg w-[280px] h-[320px] object-contain" />
      <div class="settings-content absolute inset-0 flex flex-col items-center justify-center p-4 pb-[3vw]">
        <h1 class="press-start-2p text-white text-3xl text-center pt-[1vw] pb-[1vw]">
          {{selectedCharacter?.name}}
        </h1>
        <h1 class="press-start-2p text-red-500 text-3xl text-center pb-[1vw]">
          Lose
        </h1>
        <div class="flex flex-row items-center justify-center gap-8">
          <div class="w-[80px] h-[80px]">
            <button @click="goToHome" class="icon-button">
              <img src="./assets/images/element/home.png" class="w-[80px] h-[80px]" />
            </button>
          </div>
          <div class="w-[80px] h-[80px]">
            <button @click="goToSelectCharacter" class="icon-button">
              <img src="./assets/images/element/playAgain.png" class="w-[80px] h-[80px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.press-start-2p-regular,
.press-start-2p {
  font-family: "Press Start 2P", system-ui;
  font-weight: 600;
  font-style: normal;
}

.character-card {
  width: 15vw;
  background: linear-gradient(145deg, #000000);
  padding: 5px;
  transform: translateY(0);
}

.character-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgb(255, 255, 255),
    inset 0 2px 14px rgb(255, 255, 255);
}

.character-card.selected-knight {
  box-shadow: 0 0 20px rgb(255, 0, 0), inset 0 2px 4px rgb(255, 0, 0);
  transform: translateY(-4px);
}

.character-card.selected-archer {
  box-shadow: 0 0 20px rgb(21, 255, 0), inset 0 2px 4px rgb(72, 255, 0);
  transform: translateY(-4px);
}

.character-card.selected-mage {
  box-shadow: 0 0 20px rgb(98, 0, 255), inset 0 2px 4px rgb(111, 0, 255);
  transform: translateY(-4px);
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Press Start 2P", system-ui;
  font-size: 10px;
}

.select-button {
  font-family: "Press Start 2P", system-ui;
  font-size: 24px;
  color: #ffd700;
  background: linear-gradient(145deg, #4a4a4a, #2a2a2a);
  border: 4px solid #666;
  border-radius: 12px;
  padding: 16px 48px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
}

.select-button:hover:not(:disabled) {
  background: linear-gradient(145deg, #5a5a5a, #3a3a3a);
  border-color: #ffd700;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3);
}

.select-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.select-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.settings-modal {
  background-color: rgba(0, 0, 0, 0.5);
}

.settings-panel-container {
  z-index: 100;
  transform: scale(1.2);
}

.settings-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.settings-panel {
  width: 300px;
  background: #8b4513;
  border: 8px solid #654321;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3);
}

.icon-button {
  cursor: pointer;
  transition: all 0.2s ease;
}

.icon-button:hover {
  transform: scale(1.1);
}

.icon-button:active {
  transform: scale(0.95);
}

.icon-content {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
}

.stroke-black {
  -webkit-text-stroke: 2px black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>