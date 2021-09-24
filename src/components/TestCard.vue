<template>
  <div style="margin-bottom: 20px;">
    <v-card flat color="#F6E2ED" style="margin: 10px;">
      <v-img height="140" :src="test.data.cover" @click="sheet = !sheet">
      </v-img>

      <v-card-title
        class="text"
        style="font-size: 18px; line-height: 1.4; opacity: 0.9;"
        >{{ test.data.title }}</v-card-title
      >

      <v-card-text style="opacity: 0.7; font-weight: 500;">Вопросов: {{ test.data.questionsCount }}</v-card-text>

      <v-row class="mr-1 pb-2 pt-1" align="center" justify="end">
        <v-card-actions>
          <v-btn class="cardTextBtn" text color="#688AED">
            Пройти тест
          </v-btn>
          <v-icon class="cardBtn" text color="#688AED" @click="sheet = !sheet"
            >mdi-information-variant</v-icon
          >
        </v-card-actions>
      </v-row>
    </v-card>

    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" color="#F6E2ED">
        <v-btn class="mt-2" text color="#688AED" @click="sheet = !sheet">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="mt-2 mb-3" style="font-size: 18px; font-weight: 500;">
          {{ test.data.title }}
        </div>
        <div
          :style="
            `max-height: ${sheetHeight}px; overflow-y: auto; padding: 10px 10px 100px 10px;`
          "
        >
          <div
            v-if="test.data.ps"
            class="py-1 mb-4"
            style="font-size: 14px; font-weight: 500; opacity: 0.6;"
          >
            {{ test.data.ps }}
          </div>
          <div
            class="py-1"
            style="text-align: left; opacity: 0.9; font-size: 14px; font-weight: 500;"
            v-html="test.data.description"
          ></div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
// import bridge from "@vkontakte/vk-bridge";

export default {
  name: "TestCard",
  props: ["test"],
  data() {
    return {
      sheet: false,
      sheetHeight: 0,
    };
  },
  mounted() {
    this.sheetHeight = document.documentElement.scrollHeight;
  },
};
</script>

<style scoped></style>
