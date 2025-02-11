function calculateBMI() {
    let gender = document.getElementById("gender").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    console.log("Gender:", gender);
    console.log("Weight:", weight);
    console.log("Height:", height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-value").textContent = bmi;

    let category = "";
    let rotation = 90;

    if (gender === "male") {
        if (bmi < 18.5) {
            category = "Underweight";
            rotation = 50;
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal Weight";
            rotation = 90;
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
            rotation = 130;
        } else {
            category = "Obese";
            rotation = 170;
        }
    } else {
        if (bmi < 18.0) {
            category = "Underweight";
            rotation = 50;
        } else if (bmi >= 18.0 && bmi < 24) {
            category = "Normal Weight";
            rotation = 90;
        } else if (bmi >= 24 && bmi < 29) {
            category = "Overweight";
            rotation = 130;
        } else {
            category = "Obese";
            rotation = 170;
        }
    }

    document.getElementById("bmi-category").textContent = category;
    document.getElementById("needle").style.transform =`rotate(${rotation}deg)`;

    console.log("BMI:", bmi, "Category:", category);
}
