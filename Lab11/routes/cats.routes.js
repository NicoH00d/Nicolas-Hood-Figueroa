const express = require('express');
const router = express.Router();

const html_header =`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>L A B O R A T O R I O  11</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="https://www.onepointesolutions.com/wp-content/uploads/2022/05/5-Types-of-Chemistry.jpg" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
          
                <a class="navbar-item" href="/gato">
                  Juega Gato
                </a>
                <a class="navbar-item" href="/historia">
                Un poco de historia
              </a>
              <a class="navbar-item" href="/nombre">
              Dinos tu nombre
            </a>
            <a class="navbar-item" href="/sorpresa!">
            Sorpresa
          </a>
              </div>
            </div>
          </nav>

        <section class="section">
            <div class="container">
`;
const html_footer = `
<footer class="footer">
  <div class="content has-text-centered">
    <p>
    Nico Hood, Construccion de software, Lab 10
    </p>
  </div>
</footer>
`;
const pics =`
<div>
<img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" width="500" height="500">
<img src="https://ih1.redbubble.net/image.3202742907.8616/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" width="375" height="500">
<br><img src="https://i.pinimg.com/736x/05/61/0b/05610be4999bef621561e92c26112314.jpg" width="375" height="500">
</div>
`;

router.get('/sorpresa', (request, response, next)=> {
    let html =html_header;
    html += pics;
    html +=html_footer;
    response.send(html);
  });
module.exports = router;
