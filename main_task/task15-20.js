// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary and benefits,
//adds them to find the gross salary then uses  the gross salary to find the NHIF.

//Function to calculate the gross_salary;
function calculateGrossSalary(basic_salary, benefits) {
    let gross = basic_salary + benefits;
    return gross;
}
let basicSalary1 = Number(prompt("Enter Your Basic Salary:"));
let benefits1 = Number(prompt("Enter Your Benefits:"));
let gross_salary = calculateGrossSalary(basicSalary1, benefits1);
console.log("Your Gross Salary is: " + gross_salary);

// //Function to calculate NHIF
function calculateNHIF(sal_range) {
    let deductions = 0
    if (sal_range >= 0 && sal_range <= 5_999) {
        deductions = 150;
    }
    else if (sal_range >= 6_000 && sal_range <= 7_999) {
        deductions = 300;
    }
    else if (sal_range >= 8_000 && sal_range <= 11_999) {
        deductions = 400;
    } else if (sal_range >= 12_000 && sal_range <= 14_999) {
        deductions = 500;
    } else if (sal_range >= 15_000 && sal_range <= 19_999) {
        deductions = 600;
    } else if (sal_range >= 20_000 && sal_range <= 24_999) {
        deductions = 750;
    } else if (sal_range >= 25_000 && sal_range <= 29_999) {
        deductions = 850;
    } else if (sal_range >= 30_000 && sal_range <= 34_999) {
        deductions = 900;
    } else if (sal_range >= 35_000 && sal_range <= 39_999) {
        deductions = 950;
    } else if (sal_range >= 40_000 && sal_range <= 44_999) {
        deductions = 1000;
    } else if (sal_range >= 45_000 && sal_range <= 49_999) {
        deductions = 1100
    } else if (sal_range >= 50_000 && sal_range <= 59_999) {
        deductions = 1200
    } else if (sal_range >= 60_000 && sal_range <= 69_999) {
        deductions = 1300;
    } else if (sal_range >= 70_000 && sal_range <= 79_999) {
        deductions = 1400;
    } else if (sal_range >= 80_000 && sal_range <= 89_999) {
        deductions = 1500;
    } else if (sal_range >= 90_000 && sal_range <= 99_999) {
        deductions = 1600;
    } else {
        deductions = 1700;
    }
    return deductions;
}

let NHIF = calculateNHIF(gross_salary);
console.log("Your NHIF Deductions is: " + NHIF);


// TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the program above, then use the gross salary to find the NSSF.
// To find the Kenya NSSF Rate using 6% of the Gross Salary.
//BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF.


//Function to calculate nssf
function calculate_nssf(nssf1) {
    let nssf2 = 0;
    if (nssf1 >= 0 && nssf1 <= 18000) {
        nssf2 = 0.06 * nssf1;
    }
    else {
        nssf2 = 0.06 * 18000;
    }
    return nssf2;
}
let NSSF = calculate_nssf(gross_salary);
console.log("Your NSSF Contribution is: " + NSSF);


// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary * 0.015

function calculate_nhdf(pay) {
    let NHDF9 = gross_salary * 0.015;
    return NHDF9;
}
let NHDF = calculate_nhdf(gross_salary);
console.log("Your NHDF Contribution is: " + NHDF);



// Task 18: Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF)

function calculate_taxable_income(gross, nhif3, nhdf3, nssf3) {
    let tax_income = gross - (nhif3 + nhdf3 + nssf3);
    return tax_income;
}
let taxable_income = calculate_taxable_income(gross_salary, NHIF, NHDF, NSSF);
console.log("Your Taxable Income is: " + taxable_income);

// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person's PAYEE using the taxable income above.
function calculate_payee(tax_in, relief = 2400) {
    let tax_income1 = 0;
    if (tax_in >= 0 && tax_in <= 24000) {
        tax_income1 = 0
    } else if (tax_in > 24_000 && tax_in <= 32333) {
        tax_income1 = ((24_000 * 0.1) + ((tax_in - 24_000) * 0.25)) - relief;
    } else if (tax_in > 32333 && tax_in <= 500_000) {
        tax_income1 = ((24_000 * 0.1) + (8233 * 0.25) + ((tax_in - 32333) * 0.30)) - relief;
    } else if (tax_in > 500_000 && tax_in <= 800_000) {
        tax_income1 = ((24_000 * 0.1) + (8233 * 0.25) + (467_667 * 0.30) + ((tax_in - 500_000) * 0.325)) - relief;
    } else {
        tax_income1 = ((24_000 * 0.1) + (8233 * 0.25) + (467_667 * 0.30) + (300_000 * 0.325) + ((tax_in - 800_000) * 0.35)) - relief;
    }
    return tax_income1;
}

let PAYEE = calculate_payee(taxable_income);
console.log(`Your PAYEE is: ${PAYEE}`);

// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s Net Salary using:
// net_salary = gross_salary - (nhif + nhdf + nssf + payee)
function calculate_net_salary(gross, nhif, nhdf, nssf, payee) {
    let net_salary = gross - (nhif + nhdf + nssf + payee);
    return net_salary;
}
let net_salary = calculate_net_salary(gross_salary, NHIF, NHDF, NSSF, PAYEE);
console.log(`Your Net Salary is: ${net_salary}`);