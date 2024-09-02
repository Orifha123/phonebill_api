export default function totalPhoneBill(data) {
    var items = data.split(', ');
    
    var callCount = 0; // count call
    var smsCount = 0; // count sms
    
    for (var i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            callCount++;
        } else if (items[i] === 'sms') {
            smsCount++;
        }
    }
    
    // compute the total bill
    var callCost = callCount * 2.75;
    var smsCost = smsCount * 0.65;
    var totalBill = callCost + smsCost;
    
    return 'R' + totalBill.toFixed(2); // rounding off to two decimal
}
