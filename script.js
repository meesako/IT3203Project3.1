// Toggle mobile navigation
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
  }

  // Quiz logic (only runs on quiz page)
  const quizForm = document.querySelector("#quiz-form");
  if (quizForm) {
    quizForm.addEventListener("submit", handleQuizSubmit);
    quizForm.addEventListener("reset", handleQuizReset);
  }
});

function handleQuizSubmit(event) {
  event.preventDefault();

  let score = 0;
  let totalQuestions = 5;

  // 1. Fill-in-the-blank: HTML stands for ______
  const q1Input = document.querySelector("input[name='q1']");
  const q1Feedback = document.querySelector("#q1-feedback");
  if (q1Input && q1Feedback) {
    const answer = q1Input.value.trim().toLowerCase();
    if (answer === "hypertext markup language") {
      score++;
      q1Feedback.textContent = "Correct: HTML stands for HyperText Markup Language.";
      q1Feedback.className = "quiz-feedback correct";
    } else {
      q1Feedback.textContent = "HTML stands for HyperText Markup Language.";
      q1Feedback.className = "quiz-feedback incorrect";
    }
  }

  // 2. Single-choice: Which language controls style?
  const q2Correct = document.querySelector("input[name='q2'][value='css']");
  const q2Feedback = document.querySelector("#q2-feedback");
  if (q2Correct && q2Feedback) {
    if (q2Correct.checked) {
      score++;
      q2Feedback.textContent = "Correct: CSS controls the look and layout.";
      q2Feedback.className = "quiz-feedback correct";
    } else {
      q2Feedback.textContent = "CSS is the language for styling web pages.";
      q2Feedback.className = "quiz-feedback incorrect";
    }
  }

  // 3. Single-choice: JavaScript mainly does what?
  const q3Correct = document.querySelector("input[name='q3'][value='interactivity']");
  const q3Feedback = document.querySelector("#q3-feedback");
  if (q3Correct && q3Feedback) {
    if (q3Correct.checked) {
      score++;
      q3Feedback.textContent = "Correct: JavaScript adds interactivity and behavior.";
      q3Feedback.className = "quiz-feedback correct";
    } else {
      q3Feedback.textContent = "JavaScript is mainly used to add interactivity to pages.";
      q3Feedback.className = "quiz-feedback incorrect";
    }
  }

  // 4. Single-choice: Which tag creates a link?
  const q4Correct = document.querySelector("input[name='q4'][value='a']");
  const q4Feedback = document.querySelector("#q4-feedback");
  if (q4Correct && q4Feedback) {
    if (q4Correct.checked) {
      score++;
      q4Feedback.textContent = "Correct: The <a> tag creates hyperlinks.";
      q4Feedback.className = "quiz-feedback correct";
    } else {
      q4Feedback.textContent = "The <a> tag is used to create links.";
      q4Feedback.className = "quiz-feedback incorrect";
    }
  }

  // 5. Multi-select: Which are frontend technologies?
  const q5Feedback = document.querySelector("#q5-feedback");
  if (q5Feedback) {
    const html = document.querySelector("input[name='q5-html']");
    const css = document.querySelector("input[name='q5-css']");
    const js = document.querySelector("input[name='q5-js']");
    const python = document.querySelector("input[name='q5-python']");

    const correctHtml = html && html.checked;
    const correctCss = css && css.checked;
    const correctJs = js && js.checked;
    const incorrectPython = python && python.checked;

    if (correctHtml && correctCss && correctJs && !incorrectPython) {
      score++;
      q5Feedback.textContent = "Correct: HTML, CSS, and JavaScript are core frontend technologies.";
      q5Feedback.className = "quiz-feedback correct";
    } else {
      q5Feedback.textContent = "HTML, CSS, and JavaScript are frontend; Python is usually used on the backend.";
      q5Feedback.className = "quiz-feedback incorrect";
    }
  }

  const results = document.querySelector("#quiz-results");
  if (results) {
    const pass = score >= 4; // pass if 4 or 5 correct
    results.style.display = "block";
    results.textContent = `You scored ${score} out of ${totalQuestions}. ` +
      (pass ? "Pass – nice work!" : "Keep practicing and try again.");
  }
}

function handleQuizReset() {
  const feedbacks = document.querySelectorAll(".quiz-feedback");
  feedbacks.forEach(fb => {
    fb.textContent = "";
    fb.className = "quiz-feedback";
  });

  const results = document.querySelector("#quiz-results");
  if (results) {
    results.style.display = "none";
    results.textContent = "";
  }
}

