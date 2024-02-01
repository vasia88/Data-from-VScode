function scramble(str1, str2) {
    if (str2.length > str1.length) return false;
     const counts = {};
     for (let c of str1) {
       counts[c] = (counts[c] || 0) + 1
     }
     for (let c of str2) {
       if (!counts[c]) return false;
       counts[c]--;
     }
     return true;
   }