// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

const haystack = "leetcode";
const needle = "leeto";

function strStr(haystack, needle) {
  const res = haystack.indexOf(needle);
  return res;
}

console.log(strStr(haystack, needle));
