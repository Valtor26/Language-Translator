document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("user-text-input");
  const langSelect = document.getElementById("lang-select");
  const submitButton = document.getElementById("submit-button");

  const langSpan = document.getElementById("result-language");
  const alphabetSpan = document.getElementById("result-alphabet");
  const translationSpan = document.getElementById("result-translation");
  const statusDiv = document.getElementById("result-status");

  submitButton.addEventListener("click", () => {
    const text = textInput.value;
    const targetLang = langSelect.value;

    langSpan.textContent = "";
    alphabetSpan.textContent = "";
    translationSpan.textContent = "";
    statusDiv.textContent = "Processing with AI...";

    fetch("/process-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_text: text,
        target_lang: targetLang,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server responded with an error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received from backend:", data);

        if (data.error) {
          statusDiv.textContent = "Error: " + data.error;
        } else {
          langSpan.textContent = data.language;
          alphabetSpan.textContent = data.alphabet;
          translationSpan.textContent = data.translation;
          statusDiv.textContent = "Success!";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        statusDiv.textContent = "Error connecting to backend.";
      });
  });
});
