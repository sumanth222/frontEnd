module.exports = function(){return `
<html>
    <head>
        <style>
            body {
  text-align: center;
  margin: 10px;
}

canvas {
  margin: 20px auto;
}

button {
  color: white;
  background: orange;
  border: none;
  padding: 10px;
  font-weight: 300;
  font-size: 1.2em;
  font-family: 'Lato';
  margin: 10px;
  cursor: pointer;
  outline: none;
}
        </style>
    </head>
<body>
 

<button class="add">Add</button>
<button class="delete">Delete</button>
<button class="inc">Increase size</button>
<button class="dec">Decrease size</button>
<button class="force">Horizontal force</button>
<button class="vforce">Vertical force</button>
<button class="linear">Linear velocity</button>
</body>
</html>
`}
