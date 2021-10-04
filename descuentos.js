function calcularPrecioConDescuento(precio, descuento) {
  let porcentaje_precio_con_descuento = 100 - descuento;
  let precio_con_descuento = (precio * porcentaje_precio_con_descuento) / 100;

  return precio_con_descuento;
}

function onClickButtonPriceDiscount() {
  let inputPrice = document.getElementById("InputPrice");
  let priceValue = inputPrice.value;
  
  let inputDiscount = document.getElementById("InputDiscount");
  let discountValue = inputDiscount.value;

  let precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  let resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}