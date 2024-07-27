const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
// Define a route for GET requests
app.get("/api", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "test api" });
});

app.get("/api/public", (req, res) => {
  res.json({ message: "public api" });
});

app.get('/api/homepage', (req, res) => {
  // Read the image file asynchronously
  const imagePath = path.join(__dirname, 'public', 'image.jpg');
  fs.readFile(imagePath, (err, imageData) => {
    if (err) {
      console.error('Error reading image file:', err);
      res.status(500).send('Internal  Server Error');
      return;
    }

    // Construct the HTML content with the image
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image File Example </title>
      </head>
      <body>
        <h1>Image ExampleExampleExampleExampleExample</h1>
        <img src="https://r.mobirisesite.com/584444/assets/images/photo-1467685790346-20bfe73a81f0.jpeg">
      </body>
      </html>
    `;

    // Send the HTML content as response
    res.send(htmlContent);
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
