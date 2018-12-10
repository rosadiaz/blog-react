# Blog - React Front end

Create a Posts model with the following requirements:

It must have title and body columns. The body column must be of the type text.
It must have accompanying seeding code to generate at least 50 posts.
The title column must be present and unique.
The body column must be present and contain at least 50 characters.

Posts Controller
Create all CRUD actions for posts using RESTful route names. A user should be able to:
* See a listing of posts
* See individual posts
* Create new posts
* Delete posts
* Edit posts
* Display the creation date of a post in a human friendly way

Make the posts#index action the root page.

Posts Have Many Comments
Add the ability to comment on a post's show page. Comments will need a new table, a new controller with the create and destroy action. Look at the mockup for the posts' show page to see how comments should be created.

Make sure to that the Delete links for comments are functional.

Display a comment's creation date in human friendly way.
