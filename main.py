import string


def find_missing_letter_in(givenLetters):
    alpha = string.ascii_lowercase
    startindex = alpha.index(givenLetters[0])
    for letter in alpha[startindex:]:
        if letter not in givenLetters:
            return letter
    return "No Missing Letter In Sequence  "


# Testing Ouput
print(find_missing_letter_in("abcdeghi"))  # f
print(find_missing_letter_in("defgi"))  # h
print(find_missing_letter_in("xyz"))  # No Missing Letter In Sequence

print(string.ascii_lowercase)