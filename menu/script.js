const menuPrices = {
  menu1: 8000,
  menu2: 7000,
  menu3: 7000,
  menu4: 5000,
  menu5: 5000,
  menu6: 8000,
  menu7: 7000,
  menu8: 7000,
  menu9: 5000,
  menu10: 5000,
  menu11: 8000,
  menu12: 7000,
  menu13: 7000,
  menu14: 5000,
  menu15: 5000,
  menu16: 5000,
  menu17: 7000,
  menu18: 7000,
  menu19: 5000,
  menu20: 5000,
};

const menuNasiSelect = document.getElementById("menuNasi");
const addToOrderButton = document.getElementById("addToOrderButton");
const orderList = document.getElementById("orderList");
const totalHarga = document.getElementById("totalHarga");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutMessage = document.getElementById("checkoutMessage");

const order = [];

menuNasiSelect.addEventListener("change", () => {
  const selectedValue = menuNasiSelect.value;
  const harga = menuPrices[selectedValue] || 0;
  totalHarga.textContent = `Rp ${harga}`;
});

addToOrderButton.addEventListener("click", () => {
  const selectedValue = menuNasiSelect.value;

  if (selectedValue !== "0") {
    order.push(selectedValue);
    const menuItem = menuNasiSelect.options[menuNasiSelect.selectedIndex].text;
    const orderItem = document.createElement("li");
    orderItem.textContent = menuItem;
    orderList.appendChild(orderItem);
  }
});

checkoutButton.addEventListener("click", () => {
  let totalPrice = 0;

  order.forEach((item) => {
    totalPrice += menuPrices[item] || 0;
  });

  if (totalPrice > 0) {
    checkoutMessage.textContent = `Total pembayaran: Rp ${totalPrice}`;
  } else {
    checkoutMessage.textContent = "Pesanan Anda kosong. Silakan pilih menu terlebih dahulu.";
  }
});
