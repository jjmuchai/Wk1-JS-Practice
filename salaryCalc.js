// Function to calculate Net Salary
function calculateNetSalary() {
    let basicSalary = Number(prompt("Enter basic salary:"));
    let benefits = Number(prompt("Enter benefits:"));
    
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }
    
    let grossSalary = basicSalary + benefits;
    
    // KRA PAYE Tax calculation
    function calculateTax(salary) {
        if (salary <= 24000) return salary * 0.1;
        else if (salary <= 32333) return 2400 + (salary - 24000) * 0.25;
        else return 4483.25 + (salary - 32333) * 0.3;
    }
    
    let payee = calculateTax(grossSalary);
    
    // NHIF Deductions (based on standard NHIF rates)
    function calculateNHIF(salary) {
        if (salary <= 5999) return 150;
        else if (salary <= 7999) return 300;
        else if (salary <= 11999) return 400;
        else if (salary <= 14999) return 500;
        else if (salary <= 19999) return 600;
        else if (salary <= 24999) return 750;
        else if (salary <= 29999) return 850;
        else if (salary <= 34999) return 900;
        else if (salary <= 39999) return 950;
        else if (salary <= 44999) return 1000;
        else if (salary <= 49999) return 1100;
        else if (salary <= 59999) return 1200;
        else if (salary <= 69999) return 1300;
        else if (salary <= 79999) return 1400;
        else if (salary <= 89999) return 1500;
        else if (salary <= 99999) return 1600;
        else return 1700;
    }
    
    let nhifDeductions = calculateNHIF(grossSalary);
    
    // NSSF Deductions (assuming tier I contributions only)
    let nssfDeductions = Math.min(grossSalary * 0.06, 1080);
    
    // Net Salary Calculation
    let netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);
    
    alert(`Gross Salary: ${grossSalary}\nPAYE Tax: ${payee}\nNHIF Deductions: ${nhifDeductions}\nNSSF Deductions: ${nssfDeductions}\nNet Salary: ${netSalary}`);
}

calculateNetSalary();
