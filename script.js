const questions = [
  "Beni ilk gördüğünde ne hissettin?",
  "Birlikte yaşamak ister miydin?",
  "Bende en çok sevdiğin özellik ne?",
  "Benimle ilgili en komik anın hangisi?",
  "Şu an bana bir şey söylemek zorunda olsan ne derdin?"
];

let current = 0;
let answers = [];

document.getElementById("question").innerText = questions[current];

function submitAnswer() {
  const answer = document.getElementById("answer").value;
  if (!answer) return;

  answers.push(answer);
  document.getElementById("answer").value = "";

  if (answers.length === 2) {
    document.getElementById("result").innerHTML = `
      <p>❤️ Cevaplar:</p>
      <p>1️⃣ ${answers[0]}</p>
      <p>2️⃣ ${answers[1]}</p>
    `;
    answers = [];
    current = (current + 1) % questions.length;
    document.getElementById("question").innerText = questions[current];
  }
}
