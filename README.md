
A simple calculator program written in [Javascript,html and css] that performs basic arithmetic operations.

Features

- Addition
- Subtraction
- Multiplication
- Division
- Modulus
- and equlas and backspace like some buttons i used


EVENTLISTENERS:

An EventListener is a function or object that listens for and responds to specific events or actions triggered by a user, system, or other components.

PURPOSE:

EventListeners enable developers to:

1. Detect user interactions (e.g., clicks, keyboard input)
2. React to system events (e.g., network connectivity changes)
3. Handle errors or exceptions
4. Trigger actions or workflows

HOW IT WORKS:Eventlisteners work

1. Registration: Attach an EventListener to an element or object.
2. Event Trigger: An event occurs (e.g., user clicks a button).
3. EventListener Called: The registered EventListener function is executed.
4. Event Handling: The EventListener processes the event and performs actions.

In my project i used eventlisteners for clicking the buttons and in that
Most imp line (equal is the id  od symbol,addEventListener are the listeners and here the magic is eval(display.value))
bcz eval()in is a magic world in javascript that we dont need any operational calculations because it automatically evaluates the symbols and  display the value , it is used for equals button. 

slice is used for deleting the last digit number  ans 0 and -1 are the indexes this used for backspace button.

Benefits for using eventlistener:

1. Decoupling: Separate event handling from event triggering.
2. Flexibility: Easily add or remove EventListeners.
3. Reusability: EventListeners can be reused across multiple components.




