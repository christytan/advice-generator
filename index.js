const adviceTitle = document.querySelector(".advice-title");
const adviceContent = document.querySelector(".advice-content");

let advice = "";

const fetchAdvice = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`cannot find the response, ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const renderAdvice = async function () {
  advice = await fetchAdvice();
  console.log(advice);
  adviceTitle.textContent = `Advice # ${advice.slip.id}`;
  adviceContent.textContent = `"${advice.slip.advice}"`;
};

renderAdvice();
