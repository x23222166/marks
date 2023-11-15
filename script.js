// Variables to store the number of subjects and average results for each
const numOfSubjects = parseInt(prompt("Enter number of subjects"));
const subjectsResults = new Array(numOfSubjects);

for (let i = 0; i < numOfSubjects; i++) {
  const numOfMarks = parseInt(
    prompt(`Enter number of marks for subject ${i + 1}`)
  );
  // Varialbe to temporarily store the marks of a given subject
  let marks = new Array(numOfMarks);
  for (let j = 0; j < numOfMarks; j++) {
    marks[j] = parseInt(
      prompt(`Enter mark ${j + 1} for subject ${i + 1} (0-100)`)
    );
  }
  // Reduce method to count the average for each subject
  subjectsResults[i] = marks.reduce((a, b) => a + b, 0) / marks.length;
}

// Function to get the letter mark
const getLetterResult = (result) => {
  const letters = "ABCDF";
  const bottomLine = [90, 80, 70, 60, 0];
  // Find the first result in a range and converts it to a letter
  return letters[bottomLine.findIndex((markLine) => result >= markLine)];
};

// Create a div element for each subject to show the result
const containerDiv = document.querySelector(".container");
subjectsResults.forEach((result, index) => {
  const div = document.createElement("div");
  div.className = "row";
  div.innerHTML = `Subject ${index + 1} result: ${getLetterResult(
    result
  )} (avg: ${result}%)`;
  containerDiv.appendChild(div);
});
