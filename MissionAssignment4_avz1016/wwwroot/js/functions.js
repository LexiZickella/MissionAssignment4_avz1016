/*id for the button */
$("#btnSend").click(function () {
    /*id for the assingments*/
    let assignments = parseFloat($("#assignments").val());
    /*id for the group projects*/
    let groupProject = parseFloat($("#groupProject").val());
    /*id for the quizzes*/
    let quizzes = parseFloat($("#quizzes").val());
    /*id for the midterm*/
    let midtermExam = parseFloat($("#midtermExam").val());
    /*id for the final exam*/
    let finalExam = parseFloat($("#finalExam").val());
    /*id for intex*/
    let intex = parseFloat($("#intex").val());

    /*Calculation for overall final grade*/
    let gradeFinal = ((assignments * 0.5) + (groupProject * 0.1) + (quizzes * 0.1) + (midtermExam * 0.1) + (finalExam * 0.1) + (intex * 0.1));
    let lettergrade = "";

    /*If statement for the LetterGrade Calculations*/
    if (gradeFinal >= 94) {
        lettergrade = "A";
    }
    else if (gradeFinal >= 90) {
        lettergrade = "A-";
    }
    else if (gradeFinal >= 87) {
        lettergrade = "B+";
    }
    else if (gradeFinal >= 84) {
        lettergrade = "B";
    }
    else if (gradeFinal >= 80) {
        lettergrade = "B-";
    }
    else if (gradeFinal >= 77) {
        lettergrade = "C+";
    }
    else if (gradeFinal >= 74) {
        lettergrade = "C";
    }
    else if (gradeFinal >= 70) {
        lettergrade = "C-";
    }
    else if (gradeFinal >= 67) {
        lettergrade = "D+";
    }
    else if (gradeFinal >= 64) {
        lettergrade = "D";
    }
    else if (gradeFinal >= 60) {
        lettergrade = "D-";
    }
    else {
        lettergrade = "E";
    }
    /*the Id's for the final grade and the final letter grade*/
    document.getElementById("overallGrade").innerHTML = gradeFinal.toFixed(2);
    document.getElementById("letterGrade").innerHTML = lettergrade;
});