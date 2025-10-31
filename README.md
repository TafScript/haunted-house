THE HAUNTED HOUSE 



PART 1: Ghosts!

The Ghosts are so strong… they have their own components! Create a Light component to even the playing field. 

1. Create a Light component
2. Instead of the img tag in the Bedroom, Kitchen, Bathroom, and Closet, render the Light component instead
3. The Light component should return the img tag it's replacing 
4. Pass the Light component any props (data from the parent) it needs 

PROGRESS CHECK: Every room light should still be functional. For now, the lights should randomly turn off. 




Part 2: Let there be light!

This is hard work turning on all these lights… hook up the SmartBulb by lifting the state to the Haunted House component.

5. Replace the local variable "light" in the Haunted House component with state that is identical to the one found in the Bedroom component 
6. Remove all state from the Bedroom, Kitchen, Bathroom, and Closet
7. Pass down the state and setter function from the Haunted House component to the Bedroom, Kitchen, Bathroom, and Closet components as props
8. Pass down the setter function from the Haunted House component to the SmartBulb component 

PROGRESS CHECK: Clicking one light should turn on all lights in every room. The lights will still turn off randomly. 




Part 3: The Closet

They still don’t stay on… and this SmartBulb is broken! Yoink a new light bulb from the Closet to fix the main SmartBulb of the Haunted House with some inverse data flow

9. Pass the "yoink" function from the Haunted House component to the Bedroom, then to the Closet, then to the Drawer component as props
10. Inside the Drawer component, call the "yoink" function and pass it the "newLightBulb" from inside the "open" function
11. Inside the Haunted House component, call the setter function and pass it the "bulb" from inside the "yoink" function
12. Click on the secret drawer in the closet 

PROGRESS CHECK: The light bulb next to the words "Haunted House" should no longer be broken.




Part 4 (Final): Here goes nothing...

13. Click the light bulb next to the words "Haunted House"



