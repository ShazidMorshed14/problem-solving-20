//anagram problem
//hello->llheo->anagram
//shazid->zishad->anagram

//condition
//first check both the length is same or not
//count of letter is same or not

//string hello
//{h:1,e:1,l:2,o:1}->mapping on first string
//decrement in mapping if found in the second string

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let counter = {};
  for (let letter of s1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let item of s2) {
    if (!counter[item]) {
      return false;
    } else {
      counter[item] = counter[item] - 1;
      //   console.log("item->", item);
      //   console.log("counter->", counter);
    }
  }

  return true;
}

const result = isAnagram("hello", "llheo");
console.log(result);
