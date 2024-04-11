function add(a, b) {
    // Initialize result
    let result = "";
  
    // Initialize digit sum
    let sum = 0;
  
    // Initialize carry
    let carry = 0;
  
    // Add digits from right to left
    for (
      let i = a.length - 1, j = b.length - 1;
      i >= 0 || j >= 0 || carry > 0;
      i--, j--
    ) {
      // Get digits from both numbers
      let x = 0;
      let y = 0;
      if (i >= 0) {
        x = a[i] - "0";
      }
      if (j >= 0) {
        y = b[j] - "0";
      }
  
      // Add digits and carry
      sum = x + y + carry;
  
      // Update carry
      carry = Math.floor(sum / 10);
  
      // Update result
      result = (sum % 10) + result;
    }
  
    // Return result
    return result;
  }