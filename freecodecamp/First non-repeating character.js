function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
      let current = s.charAt(i);
      const restOfString =
        s.substring(0, i) + s.substring(i + 1);
      if (!restOfString.toLowerCase().includes(current.toLowerCase())) {
        if (s.includes(current)) {
          return current;
        }
      }
    }
    return "";
  }