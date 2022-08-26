# React Playground

This project was created with the intention of practicing my React skills. I have several 'apps' in this app and I plan to continue to add more. 

## Universal Components

Each app reuses the same components:

    <Header />
    and
    <Button />

Each component is set to receive props to determine what the header or button will display for text and the buttons also receive props to dictate the onClick function. I am quite proud of my design and use of the button component as it allowed me to continually reuse the same button with the same styling and props.

## Counter App

This is a simple counting machine, press increment or decrement to increase or decrease total value. The button components are each given corresponding functions to call on click which update the state of the counter by 1 either up or down.

## Greeting App

This app presented a new challenge of taking a text input and rendering it to the dom. Once again this uses a button component with its unique onClick function.

I used two instances of useState(). The first one captures the onChange value of the text input, the second one is triggered by the onClick function of the submit button to set its state the value of the first state and display that to the dom. I'm not sure if using two state hooks like this is the most efficient way or follows React best practices but this is the solution I came up with! I may update this down the road to reflect new techniques I may pick up.

## Notes App

This app is the most complicated of the three so far. This involved using three different components. This app also utilizes the .map() and .filter() methods to render the notes to the screen. This was a good learning curve for me as I have not used these methods extensively in the past, rather I've gotten used to for loops and .push(). These methods are much simpler and cleaner.

This app also uses to useState() hooks similar to the Greeting app, and again I'm not sure if this is efficient or follows best practices so I may update this functionality later as well. 

## Neumorphic Styling

This project utilizes a new to me styling idiom; neumorphic design. After a quick google search I was able to find the techniques to make this styling. The use of box-shadow in the css is very clever and powerful.

## Summary

All in all this React Playground has really helped me get a grasp on React ideas such as: state, hooks, props, and components. I hope to continue building on this project as a way to practice my React skills!
