// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
lowest = inventory[0];
for (findLowest of inventory){
  if (findLowest.quantity < lowest.quantity){
    lowest = findLowest;
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowest.name} ซึ่งมี ${lowest.quantity} ชิ้น`);