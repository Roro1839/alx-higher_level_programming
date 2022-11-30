#!/usr/bin/python3
import random
your_investment = input("Enter a money invested: ")
expected_interest = input("Enter expected interest: ")
your_float = float((your_investment + expected_interest) / 100)
print("Round to 2 digit : {:.2f}".format(your_float))
