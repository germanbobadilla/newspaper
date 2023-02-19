# German Bobadilla

# Let's import the random library
import random

# Here, we create the rooms
rooms = {
    'Porch': {'North': 'Great Hall'},
    'Great Hall': {'South': 'Bedroom'},
    'Bedroom': {'North': 'Great Hall', 'East': 'Cellar'},
    'Cellar': {'West': 'Bedroom', 'East': 'Kitchen'},
    'Kitchen': {'North': 'Cellar', 'South': 'Bathroom'},
    'Main bedroom': {'South': 'Great Hall', 'West': 'Jacuzzi'},
    'Bathroom': {'East': 'Main bedroom', 'West': 'Kitchen'},
    'Jacuzzi': {'South': 'Porch'}
}

# Initialize the global variable to count the diamonds picked.
score = 0

# For each room, we want to have a diamond (gem) inside
diamonds = {room: True for room in rooms}

# This function calls the villain
# I wanted to call it (Diamond Collector)


def diamond_collector(rooms):
    # randomly choose a room for the villain to land on
    villain_position = random.choice(list(rooms.keys()))
    print(
        f"Oh no! The diamond collector is on the loose and has landed on {villain_position}!")
    # This variable is used inside the main function
    return villain_position

# This function calls the player's picking up each diamond every time lands on a room


def diamond_picker(room):
    global score
    # check if the room still has a diamond to pick
    if not diamonds[room]:
        return

    # prompt the player to pick the diamond
    answer = input(
        f"There's a diamond in the {room}. Do you want to pick it? (yes/no)").lower()
    if answer == 'yes':
        # Once yes is selected, add 1 to score
        print("You picked the diamond in the", room)
        score = score + 1
        print(f"Your score is now {score}")
        # Remove the diamond in the room
        diamonds[room] = False


def main(rooms):
    global score
    # Set the initial position of the player to the Great Hall.
    current_room = 'Great Hall'
    # Continuously prompt the player for direction until they choose to exit
    while True:
        # check if the player has picked all the diamonds
        if score == 8:
            print("Congratulations! You have collected all diamonds and defeated the villain!\nThanks for playing the game. Hope you enjoyed it.")
            break

        # Tell the player in which room s/he is currently in then ask where to go.
        print("You are in the", current_room)
        diamond_picker(current_room)
        print("From here you can go:")
        # Loop through the available doors in the current room
        for door in rooms[current_room]:
            print("\t", door)

        # Ask the player for the direction they want to move
        # Capitalize the input from the user to the variable.
        direction = input("Which direction do you want to go? ").capitalize()

        # Check if the direction is valid and move the player to the new room if it is
        if direction in rooms[current_room]:
            current_room = rooms[current_room][direction]
            # check if the player has landed on the same room as the villain
            if current_room == villain_position:
                print(
                    f"Oh no! The diamond collector caught you in {current_room}!")
                print(
                    "NOM NOM...GAME OVER! Thanks for playing the game. Hope you enjoyed it.")
                break
        # Check if the user inputs "Exit" or "Quit" to break the game
        elif direction == "Exit" or direction == "Quit":
            break
        else:
            # Inform the player if they entered an invalid direction
            print("Invalid direction. Please try again.")


# Call the main function to start the game
villain_position = diamond_collector(rooms)
main(rooms)
