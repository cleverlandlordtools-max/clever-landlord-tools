body{
font-family:Arial, Helvetica, sans-serif;
background:#f4f6f8;
margin:0;
}

header{
background:#1f3c5c;
color:white;
text-align:center;
padding:30px;
}

nav{
background:#eee;
padding:15px;
text-align:center;
}

nav a{
margin:10px;
text-decoration:none;
font-weight:bold;
color:#333;
}

.container{
max-width:900px;
margin:auto;
padding:20px;
}

.card{
background:white;
padding:20px;
border-radius:8px;
margin-top:20px;
box-shadow:0 2px 6px rgba(0,0,0,0.1);
}

.button{
display:inline-block;
margin-top:10px;
padding:10px 15px;
background:#2a7ae2;
color:white;
text-decoration:none;
border-radius:5px;
}

.ad-placeholder{
margin-top:40px;
padding:30px;
text-align:center;
background:#ddd;
}

footer{
text-align:center;
padding:20px;
margin-top:40px;
background:#eee;
}
function calculateYield(){

let price = document.getElementById("price").value;
let rent = document.getElementById("rent").value;

let annualRent = rent * 12;

let yield = (annualRent / price) * 100;

document.getElementById("result").innerHTML =
"Gross Yield: " + yield.toFixed(2) + "%";

}

