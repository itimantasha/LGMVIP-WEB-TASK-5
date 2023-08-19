document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resultForm");
    const gradeInput = document.getElementById("grade");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const studentName = form.studentName.value;
        const examScore = parseFloat(form.examScore.value);
        let grade = "";

        if (examScore >= 90) {
            grade = "A";
        } else if (examScore >= 80) {
            grade = "B";
        } else if (examScore >= 70) {
            grade = "C";
        } else if (examScore >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        gradeInput.value = grade;

        const resultDisplay = document.getElementById("resultDisplay");
        resultDisplay.innerHTML = `
            <p>Student Name: ${studentName}</p>
            <p>Exam Score: ${examScore}</p>
            <p>Grade: ${grade}</p>
        `;
    });
});

