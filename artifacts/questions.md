# Module 3 - Front end Questions

## `App` Component

### Q1. Why do we need the `renderView` method?

<!-- renderView conditionally renders Posts, Create, or Post components depending on the user click event that triggers the changeView method that's responsible for changing the state of this.state.view. -->

### Q2. What value do we expect `this.state.view` to be in order to render the Post component?

<!-- this.state.view !== create || this.state.view !== posts. renderView by default renders the Posts component when it is called. In order to access Post component, any value but 'posts' or 'create' can be used. However, in order to access specific post, this.state.view === postId. -->

### Q3. Why do we need to bind `this.changeView` to the keyword this (on line 16)?

<!-- without binding changeView, 'this' gets bound to the global, window object. Without explicitly binding changeView to the App component, the changeView would not produce the desired outcome. -->

## `Posts` Component

### Q4. What interactions with the server will be required in order to fully implement this component?

<!-- The Posts component makes a GET request to the server (which routes to the DB) that fetches all the existing posts (seeded from dummy) -->

### Q5. What information should be kept inside `this.state` in this component?

<!-- the state should hold an array of all the posts, including the new posts to be made later. -->

### Q6. What props does this component receive from its parent component?

<!-- The Posts component receives viewPost (changeView function) and postId  -->

### Q7. What additional components might we create to help implement this component?

<!-- Your answer here! -->

## `Post` Component

### Q8. What interactions with the server will be required in order to fully implement this component?

<!-- The Post component makes a POST request to server to update the votes and another POST request to post new comments on each of the posts. The response recieved from these requests updates the state with current information. -->

### Q9. What information should be kept inside `this.state` in this component?

<!-- The Post component has 1) a comment state that accepts new string comments to be sent to the db 2) an array of existing comments that gets updated with the response from the server, and 3) vote counter. -->

### Q10. What props does this component receive from its parent component?

<!-- the parent component sends the postId prop, which contains each post's data such title, body, etc -->

### Q11. What additional components might we create to help implement this component?

<!-- Your answer here! -->

## `Create` Component

### Q12. What interactions with the server will be required in order to fully implement this component?

<!-- a POST request with title and body to store store new posts -->

### Q13. What information should be kept inside `this.state` in this component?

<!-- title and body strings -->

### Q14. What props does this component receive from its parent component?

<!-- none -->

### Q15. What additional components might we create to help implement this component?

<!-- Your answer here! -->
