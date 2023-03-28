// 'use strict'
//
// function calculate(liters) {
//     const potatoesPerLiter = 4;
//     const weightPerPotato = 75; // в граммах
//     const pricePerKg = 13;
//     return (liters * potatoesPerLiter * weightPerPotato / 1000 ) * pricePerKg;
// }
// const borschtLiters = 48;
// const totalPrice = Math.ceil(calculate (borschtLiters));
// console.log(`Стоимость покупки картошки для приготовления ${borschtLiters} литров борща: ${totalPrice} грн`);




'use strict'

function calculate(liters) {
    const potatoesPerLiter = 4;
    const weightPerPotato = 75;
    const pricePerKg = 13;
    return Math.ceil(liters * potatoesPerLiter * weightPerPotato / 1000 * pricePerKg);
}
const borschtLiters = 48;
console.log(`Стоимость покупки картошки для приготовления ${borschtLiters} литров борща: ${calculate(borschtLiters)} грн`);
