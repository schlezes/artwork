# artwork

This repository is simple HTML and vanilla JavaScript for the purpose to determine how much easier it would be to code with Vue-CLI using the same set of images.

This post is vanilla JavaScript.

The next post will be with Vue CLI with the same set of images.

The page appears as follows with some comments:

![image](https://user-images.githubusercontent.com/89032071/167316069-85ca2db7-575e-4d5a-985e-1fcc07ef5bc4.png)

Some notes to the above screenshot.

1. All image heights and widths are 100px by 200px.
2. I use the white dashed border to verify the consistency of size across all images.
3. And the spacing between elements.
4. I use two fig caption elements for each image.
5. Extra text with fig captions can alter the width consistency to disrupt the presentation, so it is important to keep fig captions brief.
6. The images are placed into one object inside the main.js file.
7. I use an if statement on the click event to only allow the click on the button.
8. I use an array for each method to populate the display area with the images.
9. I use an image expand function to increase the size of an image by a click event.
10. I use an if statement to restrict the click event only to an image after the images are loaded.
11. There are margins and paddings surrounding the image that are interpreted by the browser as an "empty-string".
12. The rendering of these images are fully responsive down to the 234 px image width.

![image](https://user-images.githubusercontent.com/89032071/167317137-f7d1bef3-f4b8-4139-9f98-16c9668d57d7.png)


In summary,

This kind of project might be useful for showcasing artwork as part of a single page app.

Enclosed are 4 files.
