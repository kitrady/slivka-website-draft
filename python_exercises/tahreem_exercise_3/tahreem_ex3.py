#exercise 3

def colors(color):
    newColor = color.lower()
    if newColor == "red":
        print("Your favorite color is red, like blood?")
    else:
        print(f"{newColor.title()} is a nice color!")


if __name__ == "__main__":
    colors("blue")
    colors("red")