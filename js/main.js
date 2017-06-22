$(function(){
  $(document).on('click', '.minus-button', subInputNumber);
  $(document).on('click', '.plus-button', addInputNumber);

  $(document).on('click', '.bill-item-check', checkBillItem);
  $(document).on('change', 'input[type=checkbox]', showBillDetail);

  $('.format-number').formatPriceNumber();
});

function subInputNumber(){
  var qttInput = $(this).closest('.bill-item-detail').find('input');
  var qttInputVal = qttInput.toInteger() - 1;
  qttInputVal = qttInputVal < 1 ? 1 : qttInputVal;
  qttInput.val(qttInputVal);

  calculateItemDetailPrice(qttInput, qttInputVal).formatPriceNumber();
}

function addInputNumber(){
  var qttInput = $(this).closest('.bill-item-detail').find('input');
  var qttInputVal = qttInput.toInteger() + 1;
  qttInput.val(qttInputVal);
  
  calculateItemDetailPrice(qttInput, qttInputVal).formatPriceNumber();
}

function checkBillItem(){
  var checkboxWrapper = $(this).closest('.check-bill-wrapper');
  checkboxWrapper.find('input[type=checkbox]').click();
}

function showBillDetail(){
  var checkboxWrapper = $(this).closest('.check-bill-wrapper');
  
  if(!checkboxWrapper.hasClass('checked-bill-item')) {
    checkboxWrapper.addClass('checked-bill-item');
    checkboxWrapper.find('.bill-item-detail').addClass('bill-item-detail-showed');
    checkboxWrapper.find('.bill-item-check').addClass('bill-item-check-showed');
  } else {
    checkboxWrapper.removeClass('checked-bill-item');
    checkboxWrapper.find('.bill-item-detail').removeClass('bill-item-detail-showed');
    checkboxWrapper.find('.bill-item-check').removeClass('bill-item-check-showed');
  }

  recalculateTotalPrice();
}

function calculateItemDetailPrice(inputField, qttInputVal){
  var itemPrice = $(inputField).closest('.bill-item-detail').find('.bill-item-detail-price');
  var itemPriceVal = itemPrice.toInteger('data-price');
  var itemPriceTotal = itemPriceVal * qttInputVal;
  itemPrice.text(itemPriceTotal);
  return itemPrice;
}

function recalculateTotalPrice(){
  $('input[type=checkbox]:checked').each(function(){
    var itemBillPrice = $(this).find('.bill-item-detail-price').toInteger();
    console.log(itemBillPrice);
  });
}