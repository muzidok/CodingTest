function solution(my_string, n) {
    const arr = [...my_string];
  return arr.splice(my_string.length-n).join("");
}