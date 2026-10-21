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
        print("Programming language", j, "is item number", i, "in the list of languages")

    print("That's all the programming languages in our list!")

##
## EXERCISE 2 - fix the other broken function
##
def list_fav_animals():
    fav_animals = ['dogs', 'cats', 'crows', 'otters']

    for i, j in enumerate(fav_animals):
        print("The", j, "are my top", i + 1, "favorite animal.")

    print("That's all my favorite animals that I listed!")

##
## EXERCISE 3 - cat's super silly thing
##

def cats_silly_thing():
    num1 = int(input("enter a number: "))
    num2 = int(input("enter another number: ")) #if you input a letter rip ig

    def payment_wall(): #yes its a function inside a function 
        payment_bool = input("are you willing to pay? y/n ")

        if (payment_bool == "y"):
            print("Congrats, you found out that", num1 , "+", num2, "is equal to", num1 + num2)
        elif (payment_bool == "n"):
            print("rip you will never know what", num1, "+", num2, "is")
        else:
            print("ERROR: please input either y or n.")
            payment_wall()
    
    payment_wall()




if __name__ == "__main__":
    #kits_broken_function()
    #list_fav_animals()
    cats_silly_thing()
