document.addEventListener("DOMContentLoaded", function () {
  const serviceSelect = document.getElementById("service");
  const catQuantityInput = document.getElementById("number-of-cats");
  const priceOutput = document.getElementById("estimated-price");
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");

  const prices = {
    "daily-drop-ins": 15,
    "extended-stay-visits": 20,
    "overnight-stays": 50,
    "medication-administration": 20,
    "additional-cats": 5,
  };

  function calculatePrice() {
    const service = serviceSelect.value;
    const catQuantity = parseInt(catQuantityInput.value) || 1;
    let basePrice = prices[service];
    let additionalCatPrice = prices["additional-cats"];
    let price = basePrice;

    if (catQuantity > 1) {
      price += additionalCatPrice * (catQuantity - 1);
    }

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    if (startDate && endDate && endDate >= startDate) {
      const timeDiff = endDate - startDate;
      const daysBooked = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Include both start and end dates

      price *= daysBooked;
    }

    priceOutput.value = `£${price.toFixed(2)}`;
  }

  serviceSelect.addEventListener("change", calculatePrice);
  catQuantityInput.addEventListener("input", calculatePrice);
  startDateInput.addEventListener("change", calculatePrice);
  endDateInput.addEventListener("change", calculatePrice);
});
