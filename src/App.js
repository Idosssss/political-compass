import React, { useState } from "react";
import { quizzes } from "./quizzes";

function interpolateColor(value) {
  // value from -400 to 400 scaled 0 to 1
  let t = (value + 400) / 800;
  if (t <= 0.5) {
    const p = t / 0.5;
    return lerpColor("#4422aa", "#ffffff", p);
  } else {
    const p = (t - 0.5) / 0.5;
    return lerpColor("#ffffff", "#ff1e1e", p);
  }
}

function lerpColor(a, b, t) {
  const c1 = hexToRgb(a);
  const c2 = hexToRgb(b);
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b_ = Math.round(c1.b + (c2.b - c1.b) * t);
  return `rgb(${r},${g},${b_})`;
}

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return m
    ? {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16),
      }
    : null;
}

export default function App() {
  const [languageSelected, setLanguageSelected] = useState(false);
  const [country, setCountry] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!languageSelected) {
    return (
      <div className="start-screen">
        <h1>Political Compass Quiz</h1>
        <p>Choose your language / בחר שפה</p>
        <div className="lang-buttons">
          <button
            onClick={() => {
              setCountry("US");
              setAnswers(Array(quizzes["US"].questions.length).fill(null));
              setLanguageSelected(true);
            }}
            className="lang-btn"
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => {
              setCountry("IL");
              setAnswers(Array(quizzes["IL"].questions.length).fill(null));
              setLanguageSelected(true);
            }}
            className="lang-btn"
          >
            🇮🇱 עברית
          </button>
        </div>
      </div>
    );
  }

  const quiz = quizzes[country];
  const score = answers.reduce((sum, val) => sum + (val ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  if (showResult && allAnswered) {
    const color = interpolateColor(score);

    return (
      <div className="result-screen">
        <h1>Your Result / התוצאה שלך</h1>

        <div className="score-line" style={{ position: "relative" }}>
          <div className="score-line-label left">Far Left</div>
          <div className="score-line-label right">Far Right</div>

          <div
            className="score-marker"
            style={{
              left: `${((score + 400) / 800) * 100}%`,
              backgroundColor: color,
              boxShadow: `0 0 15px 5px ${color}`,
            }}
          />

          <div className="score-gradient" />
        </div>

        <button
          className="restart-btn"
          onClick={() => {
            setShowResult(false);
            setAnswers(Array(quiz.questions.length).fill(null));
            setCurrentQuestionIndex(0);
          }}
        >
          Retake Quiz / נסה שוב
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-screen">
      <h1>Political Compass Quiz</h1>
      <p>
        {country === "IL"
          ? "ענה על כל השאלות כדי לראות את התוצאה"
          : "Answer all questions to see your result"}
      </p>

      <div className="questions-container">
        <div className="question-block">
                <div
        className="question-text"
        dir={country === "IL" ? "rtl" : "ltr"}
        >
        {quiz.questions[currentQuestionIndex].q}
        </div>
          <div className="answers-list">
            {quiz.questions[currentQuestionIndex].options.map((opt, j) => {
              const selected =
                answers[currentQuestionIndex] ===
                quiz.questions[currentQuestionIndex].values[j];
              return (
                <div
                  key={j}
                  className={`answer-item ${selected ? "selected" : ""}`}
                  onClick={() =>
                    handleAnswer(
                      currentQuestionIndex,
                      quiz.questions[currentQuestionIndex].values[j]
                    )
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      handleAnswer(
                        currentQuestionIndex,
                        quiz.questions[currentQuestionIndex].values[j]
                      );
                  }}
                >
                  {opt}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "right" }}>
        <button
          className="submit-btn"
          disabled={answers[currentQuestionIndex] === null}
          onClick={() => {
            if (currentQuestionIndex + 1 < quiz.questions.length) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              setShowResult(true);
            }
          }}
        >
          {currentQuestionIndex + 1 === quiz.questions.length
            ? country === "IL"
              ? "סיים"
              : "Finish"
            : country === "IL"
            ? "הבא"
            : "Next"}
        </button>
      </div>
    </div>
  );
}
