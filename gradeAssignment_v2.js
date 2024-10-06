// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Convert the input score to a number
score = parseInt(score);

// Use conditional ternary operators to assign grades
let equivalentGrade = score >= 97 ? "1.00" :
  score >= 94 ? "1.25" :
  score >= 91 ? "1.50" :
  score >= 88 ? "1.75" :
  score >= 85 ? "2.00" :
  score >= 82 ? "2.25" :
  score >= 79 ? "2.50" :
  score >= 76 ? "2.75" :
  score >= 75 ? "3.00" :
  score >= 72 ? "4.00" :
  "5.00";

// Use if...else if...else statements to assign final remarks
let finalRemarks = score >= 90 ? "HIGH PASS, Candidate for Cum Laude" :
  score >= 80 ? "AVERAGE PASS" :
  score >= 75 ? "LOW PASS" :
  "FAILED, Needs Improvement";

// Log the results to the console
console.log("Result:");
console.log(`Your equivalent Grade is "${equivalentGrade}" ${equivalentGrade === "1.00" || equivalentGrade === "1.25" ? "Excellent" :
  equivalentGrade === "1.50" || equivalentGrade === "1.75" ? "Above Average" :
  equivalentGrade === "2.00" || equivalentGrade === "2.25" ? "Average" :
  equivalentGrade === "2.50" || equivalentGrade === "2.75" || equivalentGrade === "3.00" ? "Below Average" :
  equivalentGrade === "4.00" ? "Poor" :
  "Poor"}`);
console.log(`Final Remarks: ${finalRemarks}`);
