module.exports = function toReadable (num) { 
    
    const zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['','','twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety'];
    
    const digitToString = String(num);
    const firstNum = +digitToString[0];
    const secondNum = +digitToString[1];
    const thirdNum = +digitToString[2];
     
    if(num<20) return zeroToNineteen[num];
      
    if(num >= 100) {
      return `${zeroToNineteen[firstNum]} hundred ${thirdNum === 0 ? '' : toReadable(num%100)}`;
    }
      
    if(20<num<100) {
      return secondNum===0 
        ? `${tens[firstNum]}` 
        : `${tens[firstNum]} ${zeroToNineteen[secondNum]}`;
    };
  }
