<template>
    <div class="questionnaire">
      <div v-if="currentQuestion < questions.length">
        <h2>{{ questions[currentQuestion].question }}</h2>
        <div v-for="(answer, index) in questions[currentQuestion].answers" :key="index">
          <button @click="selectAnswer(answer.value)">{{ answer.text }}</button>
        </div>
      </div>
      <div v-else>
        <h2>Recommended Package: {{ recommendedPackage.name }}</h2>
        <p>{{ recommendedPackage.description }}</p>
        <p><strong>Price:</strong> £{{ recommendedPackage.price }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestion: 0,
        answers: [],
        questions: [
          {
            question: "How often do you feel fatigued?",
            answers: [
              { text: "Frequently", value: "fatigue_high" },
              { text: "Sometimes", value: "fatigue_medium" },
              { text: "Rarely", value: "fatigue_low" }
            ]
          },
          {
            question: "Do you have issues with muscle recovery?",
            answers: [
              { text: "Yes", value: "muscle_recovery_high" },
              { text: "No", value: "muscle_recovery_low" }
            ]
          },
          {
            question: "Are you looking to improve skin, hair, and nail health?",
            answers: [
              { text: "Yes", value: "beauty_high" },
              { text: "No", value: "beauty_low" }
            ]
          }
        ],
        recommendedPackage: null,
        packages: {
          energy_boost: {
            name: "Energy Boost Package",
            description: "Includes B12 and Vitamin B Complex for boosting energy and improving overall vitality.",
            price: 120
          },
          recovery_plus: {
            name: "Recovery Plus Package",
            description: "Includes Vitamin C and Magnesium to aid muscle recovery and reduce fatigue.",
            price: 135
          },
          beauty_bundle: {
            name: "Beauty Bundle",
            description: "Includes Biotin and Vitamin C to enhance skin, hair, and nail health.",
            price: 110
          }
        }
      };
    },
    methods: {
      selectAnswer(value) {
        this.answers.push(value);
        this.currentQuestion++;
        if (this.currentQuestion >= this.questions.length) {
          this.recommendPackage();
        }
      },
      recommendPackage() {
        const result = this.analyzeAnswers();
        this.recommendedPackage = this.packages[result];
      },
      analyzeAnswers() {
        if (this.answers.includes("fatigue_high") || this.answers.includes("muscle_recovery_high")) {
          return "energy_boost";
        } else if (this.answers.includes("muscle_recovery_high") && this.answers.includes("beauty_low")) {
          return "recovery_plus";
        } else if (this.answers.includes("beauty_high")) {
          return "beauty_bundle";
        } else {
          return "energy_boost"; // Default package
        }
      }
    }
  };
  </script>
  
  <style>
  .questionnaire {
    max-width: 600px;
    margin: 0 auto;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  