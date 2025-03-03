// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "sale50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (cart,code){
  let discountPercentage = Number(code.slice(4));
  
  let totalCart = 0;
  for (let i = 0; i < cart.length; i++) {
  totalCart += cart[i].price * cart[i].quantity;
  }

  let totalPrice = totalCart - ( totalCart * (discountPercentage / 100) );

  return totalPrice;
}

console.log(`ราคาสินค้าหลังจากลด: ${calculateTotalPrice(products, promotionCode)} บาท`);