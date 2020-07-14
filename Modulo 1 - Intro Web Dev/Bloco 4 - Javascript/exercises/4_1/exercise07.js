// Percentage to grade

let grade = -1;

if (grade > 100 || grade < 0) {
  console.log("Error: inexistent grade!");
} else if (grade >= 90) {
  console.log(grade + " ==> A");
} else if (grade >= 80) {
  console.log(grade + " ==> B");
} else if (grade >= 70) {
  console.log(grade + " ==> C");
} else if (grade >= 60) {
  console.log(grade + " ==> D");
} else if (grade >= 50) {
  console.log(grade + " ==> E");
} else {
  console.log(grade + " ==> F")
}