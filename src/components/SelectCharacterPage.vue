<script setup>
import { ref } from "vue";

const selectedCharacter = ref(null);

const characters = [
  {
    class: "knight",
    name: "The Knight",
    hp: 240,
    str: 100,
    atk: 35,
    skill: 50,
    picture: "/Character/SwordMan/pixcel.png",
  },
  {
    class: "archer",
    name: "The Archer",
    hp: 180,
    str: 150,
    atk: 45,
    skill: 80,
    picture: "/Character/Archer/pixcel.png",
  },
  {
    class: "mage",
    name: "The Magician",
    hp: 200,
    str: 200,
    atk: 15,
    skill: 100,
    picture: "/Character/Mage/pixcel.png",
  },
];

const selectCharacter = (character) => {
  selectedCharacter.value = character;
};

const confirmSelection = () => {
  if (selectedCharacter.value) {
    alert(`Selected: ${selectedCharacter.value.name}`);
  }
};
</script>

<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center p-4"
    style="
      background-image: url('/Bg/VD8xY6.png');
      padding-left: 429px;
      padding-right: 523px;
    "
  >
    <h1
      class="press-start-2p text-yellow-300 text-4xl md:text-6xl relative z-10 drop-shadow-lg"
      style="width: 960px; margin-bottom: 100px"
    >
      Select Character
    </h1>

    <div
      class="flex justify-center items-center gap-6 mb-12 relative z-10 max-w-6xl"
    >
      <div
        v-for="character in characters"
        :key="character.class"
        @click="selectCharacter(character)"
        :class="[
          'character-card cursor-pointer transition-all duration-300',
          selectedCharacter?.class === character.class ? 'selected' : '',
          selectedCharacter?.class === 'knight' && character.class === 'knight'
            ? 'selected-knight'
            : '',
          selectedCharacter?.class === 'archer' && character.class === 'archer'
            ? 'selected-archer'
            : '',
          selectedCharacter?.class === 'mage' && character.class === 'mage'
            ? 'selected-mage'
            : '',
        ]"
      >
        <img
          :src="character.picture"
          :alt="character.name"
          class="w-full h-full object-contain"
        />

        <div
          style="
            background: rgba(255, 255, 255, 0.7);
            border-radius: 8px;
            padding: 12px;
            border: 2px solid #444;
          "
        >
          <h3
            class="press-start-2p text-black text-sm mb-3 text-center"
            style="margin-bottom: 10px"
          >
            {{ character.name }}
          </h3>
          <div>
            <div class="stat-row">
              <span class="text-blue-500">HP</span>
              <span class="text-black">{{ character.hp }}</span>
            </div>
            <div class="stat-row">
              <span class="text-blue-500">STR</span>
              <span class="text-black">{{ character.str }}</span>
            </div>
            <div class="stat-row">
              <span class="text-blue-500">ATK</span>
              <span class="text-black">{{ character.atk }}</span>
            </div>
            <div class="stat-row">
              <span class="text-blue-500">SKILL</span>
              <span class="text-black">{{ character.skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center" style="margin-top: 100px">
      <button
        @click="confirmSelection"
        :disabled="!selectedCharacter"
        class="select-button relative z-10"
      >
        Select
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.press-start-2p {
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
}
.character-card {
  width: 250px;
  background: linear-gradient(145deg, #000000);
  border-radius: 12px;
  padding: 12px;
  transform: translateY(0);
  margin-left: 50px
}

.character-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgb(255, 0, 242), inset 0 2px 14px rgb(255, 0, 234);
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
</style>
