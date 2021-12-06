# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date

#### What we did: Decided on going with the Trading cards project.


#### What we'll do next: Learn how to use hax wiring and other features of the project.


## Status check ins
These are dedicated status check-ins as this is a multi-week project

### Check-in 1

- Starting to learn how to use hax wiring and other features of the project.
- Decided what our project was going to be, we selected a trading card.
- We will each be creating a seperate trading card per the prompt
- Created a new repo

### Check-in 2

- We met and talked about each of our responsibilities will be moving forward

- Since we will each be creating a card, we will have similar reponsibilities but we wanted to get specific with what we each wanted to do

- Perry: Will be in charge of implementing simple-colors since he did that in the last project as well as helping Andrew with basic slot composition for all the cards. 

- Khory: Will be looking into accessibility so that when the trading card is scaled down for mobile, the card will adjust to those changes.

- Andrew: Be in charge of basic slot composition so that our scalfolding will be consistent across all cards and the cards will be resuable for us in the future, this was something that we did a poor job of in the past so we really want to make sure we improve on

- Ethan: Working and learning on the map function to stamp data from an array into the card per the trading card prompt. Ethan will also be focusing on preparing our storybook.  We know this is something that we look at towards the end of the project but we struggled with this in the past and wanted to improve on that aspect of our projects.  

-We decided that each of us would spend Sunday/Monday learning up on each of our responsibilities then meet tuesday after class to work on implementation of this tasks.  We also worked Sunday on creating the basic outline of the 4 card elements as well as coloring on each of those cards. Obviously the tasks we have above does not cover everything but that will be specific tasks as the bigger tasks will be worked on as a group during our weekly meetings. 

### Check-in 3
- - We started working on the map function to stamp data from an array into our card as mentioned in the prompt. Each element in the array has a name, image, hometown, and major. What needs to be solved is how to print the element data in html. This will most likely be done using the getElementById function. More research needs to be done regarding this. The following code is being used to map the data:

var cardData = [
    {name:"Ethan",image:"./image/abc.jpg",age:"20",hometown:"Downingtown, PA",major:"Cybersecurity"},
    {name:"Khory",image:"./image/abc.jpg",age:"tbd",hometown:"tbd",major:"tbd"},
    {name:"Perry",image:"./image/abc.jpg",age:"tbd",hometown:"tbd",major:"tbd"},
    {name:"Andrew",image:"./image/abc.jpg",age:"tbd",hometown:"tbd",major:"tbd"},
]

cardData.map(user=>{
    console.log (
        user.name,
        user.image,
        user.age,
        user.hometown,
        user.major
    )
})
- Note: The html logic still needs to be finished. We are disussing better ways to make our card reusable. This is something we struggled in the past and want to get right. Things as simple as reusable variable names need to be considered. Changes to TradingCard1 will also not commit to github due to an unexpected console statement when outputting a message to the webconsole.
- 
### Check-in 4
- - This week we researched the videos on Hax and how to incorporate the wireframe. We began styling the card, but were slowed down on trying to implement our data from the array. It has definitely taken up alot of our time and we are struggling to figure out where exactly to initialize our array variable and where to map it. We believe mapping the user data will occur within the render function. We plan to meet with the TA or the professor either during class on tuesday or earlier to resolve this. Once that is concluded, we will be smooth sailing towards implementing our card.
- 
