##
## EXERCISE 1 - fix the broken function
##
def kits_broken_function():
    """
    Creates a list of programming languages and prints them to the console in order.
    """

    # TODO: this function is broken – run this file to see what is wrong. Your task is to fix it.
    languages = ["Python", "Java", "C++"]

    for i, j in enumerate(languages):
        print("Programming language", i, "is item number", j, "in the list of languages")

    print("That's all the programming languages in our list!")

##
## EXERCISE 2 - fill in the variables
##
def introduce_yourself():
    """
    Prints and introduction to the person who wrote this function.
    """

    # TODO: fill the the following variables with values that make the print statement true about yourself
    name = ""
    major= ""

    print("My name is", name, "and I am majoring in", major)


if __name__ == "__main__":
    kits_broken_function()