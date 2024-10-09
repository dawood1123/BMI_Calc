function w() { 
    var w = document.getElementById('weight_input');
    var w_value = w.value; 

    var h = document.getElementById('height_input');
    var h_value = h.value; 

    // Check if either field is empty
    if (w_value === "" || h_value === "") { 
        alert("Please fill in both fields");
    }
    else { 
        var calculate = w_value / (h_value * h_value); 

        var bmi = document.getElementById('bmi-value');     
        bmi.innerHTML = `BMI: ${calculate.toFixed(2)}`; 

        var massage = document.getElementById('message');

        if (calculate < 18.5) { 
            massage.innerHTML = "Underweight";
        }
        else if (calculate >= 18.5 && calculate < 24.9) { 
            massage.innerHTML = "Normal weight";
        }
        else if (calculate >= 25 && calculate < 29.9) { 
            massage.innerHTML = "Overweight";
        }
        else if (calculate >= 30) { 
            massage.innerHTML = "Obesity";
        }
        
        // Clear input fields
        h.value = "";
        w.value = "";
    }
}
