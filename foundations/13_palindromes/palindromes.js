const palindromes = function (str) {
  const cl = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('')
    .join('');

    let left = 0, right = cl.length - 1;
    while (left < right) {
        if (cl[left] !== cl[right]) return false;
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
