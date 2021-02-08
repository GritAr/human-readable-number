module.exports = function toReadable (num=0) { 
    const zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['','','twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety'];
    const digitToString = String(num);
    const firstNum = +digitToString[0];
    const secondNum = +digitToString[1];
    const thirdNum = +digitToString[2];
  
    if(num<0 || num>999) throw new Error("incorrect number");
     
    if(num >= 100) {
      return `${zeroToNineteen[firstNum]} hundred${num%100 !== 0 ? ` ${toReadable(num%100)}` : '' }`;
    }

    if(num<20) return zeroToNineteen[num];
      
    if(20<num<100) {
      return secondNum===0 
        ? `${tens[firstNum]}` 
        : `${tens[firstNum]} ${zeroToNineteen[secondNum]}`;
    };
  }
