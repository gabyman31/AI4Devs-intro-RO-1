const input = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const output = document.getElementById("output");

// Monitor real-time input
input.addEventListener("input", () => {
  const value = input.value.trim();

  if (value.length < 3) {
    reverseBtn.disabled = true;
    output.textContent = "The word should be longer than 3 characters";
    output.className = "error";
  } else {
    reverseBtn.disabled = false;
    // Show preview result immediately
    const reversed = value.split("").reverse().join("");
    output.innerHTML = `<span class="bold">${reversed}</span>`;
    output.className = "bold";
  }

  if (value === "") {
    output.textContent = "";
    output.className = "";
    reverseBtn.disabled = true;
  }
});

function reverseText() {
  const value = input.value.trim();
  if (value.length >= 3) {
    const reversed = value.split("").reverse().join("");
    output.innerHTML = `<span class="bold">${reversed}</span>`;
    output.className = "bold";
  }
}

function clearAll() {
  input.value = "";
  output.textContent = "";
  output.className = "";
  reverseBtn.disabled = true;
  input.focus();
}
