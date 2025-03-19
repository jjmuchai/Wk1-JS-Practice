Wk1 JS Practice
Week 1 Toy problems Prerequisites

This repository contains three JavaScript functions designed to perform essential calculations:

Student Grade Calculator - Determines a student's grade based on input marks.

Speed Detector - Evaluates a driver's speed and assigns demerit points based on a predefined speed limit.

Net Salary Calculator - Computes net salary after deducting PAYE tax, NHIF, and NSSF contributions.

1. Student Grade Calculator

Description

This function accepts student marks (0-100) and assigns a corresponding grade based on the following grading system:

Marks Range

Grade

80 - 100

A

60 - 79

B

50 - 59

C

40 - 49

D

Below 40

E

How It Works

The function prompts the user to input marks.

It validates whether the input is a number within the allowed range.

Based on the marks, it determines the grade and returns the result.

2. Speed Detector

Description

This function checks a vehicle's speed against a set limit of 70 km/h and assigns demerit points if the driver exceeds this limit. If the accumulated points exceed 12, the driver's license is suspended.

How It Works

The function prompts the user to enter the vehicle's speed.

It verifies that the input is a valid number.

If the speed is within the allowed range (70 km/h or lower), it returns "Ok."

If the speed exceeds the limit, demerit points are assigned at a rate of 1 point per 5 km/h over the limit.

If the total demerit points exceed 12, the driver's license is suspended.

3. Net Salary Calculator

Description

This function computes an employee's net salary based on basic salary and benefits, considering deductions for PAYE tax, NHIF, and NSSF.

How It Works

The function requests user input for basic salary and benefits.

It calculates gross salary as the sum of basic salary and benefits.

It determines applicable PAYE tax, NHIF, and NSSF contributions based on predefined government rates.

Finally, it subtracts all deductions from the gross salary to compute the net salary.

How to Run the Code

Open a web browser.

Open the Developer Console (Press F12 -> Select Console tab).

Copy and paste the function you want to run into the console.

Press Enter to execute the function and see the result.

Author

GitHub: @jjmuchai
