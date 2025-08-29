const lifeCount = document.querySelector("#lifeCount");
const coin = document.querySelector("#coinCount");
let historySection = document.querySelector("#historySection");
const copyCount = document.querySelector("#copyCount");
let life = 0;
let coinValue = 100;
let copyValue = 0;
document.querySelectorAll(".love_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    lifeCount.innerHTML = ++life;
  });
});

document.querySelectorAll(".call_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const fullCard = btn.closest(".card");
    const cardTitle = fullCard.querySelector(".card-title").innerText;
    const cardNumber = fullCard.querySelector(".number").innerText;

    e.preventDefault();
    if (coinValue >= 20) {
      if (confirm(`Calling ${cardTitle} ${cardNumber} `)) {
        coin.innerText = coinValue -= 20;
        const date = new Date();
        historySection.innerHTML += `
           <div
          class="flex items-center justify-between bg-gray-300 p-3 rounded-xl mt-3"
        >
          <div>
            <p>${cardTitle}</p>
            <p>${cardNumber}</p>
          </div>

          <div>
          ${date.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
        `;
      } else return;
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
});

document.querySelector("#historyClearBtn").addEventListener("click", (e) => {
  e.preventDefault();
  historySection.innerHTML = "";
});

document.querySelectorAll(".copy_btn").forEach((copyBtn) => {
  copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const fullCard = copyBtn.closest(".card");
    const cardNum = fullCard.querySelector(".number").innerText;
    copyCount.innerText = ++copyValue;
    navigator.clipboard.writeText(cardNum);
    alert(`নম্বর কপি হয়েছেঃ ${cardNum}`);
  });
});