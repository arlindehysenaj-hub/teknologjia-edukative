const quizForm = document.querySelector("#quiz-form");
const feedback = document.querySelector("#feedback");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');
  feedback.className = "feedback";

  if (!selectedAnswer) {
    feedback.textContent = "Zgjidh një përgjigje përpara se ta kontrollosh.";
    feedback.classList.add("error");
    return;
  }

  if (selectedAnswer.value === "procesori") {
    feedback.textContent = "Saktë! Procesori (CPU) përpunon udhëzimet dhe quhet truri i kompjuterit.";
    feedback.classList.add("success");
  } else {
    feedback.textContent = "Jo tamam. Provo përsëri: truri i kompjuterit është procesori (CPU).";
    feedback.classList.add("error");
  }
});

quizForm.addEventListener("change", () => {
  feedback.textContent = "";
  feedback.className = "feedback";
});
