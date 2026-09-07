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


if __name__ == "__main__":
    kits_broken_function()