
let page=document.createElement('div');
document.body.append(page)



page.innerHTML=`<div class="container">
<div class="pagination">
<button class="btn1">Prev</button>
<ul>
<li  class="arrow" onclick="activelink()">&laquo;</li>
<li class="link active" value="1" onclick="activelink()">1</li>
<li class="link" value="2" onclick="activelink()">2</li>
<li class="link" value="3" onclick="activelink()">3</li>
<li class="link" value="4"onclick="activelink()">4</li>
<li class="link" value="5"onclick="activelink()">5</li>
<li class="link" value="6"onclick="activelink()">6</li>
<li class="link" value="7"onclick="activelink()">7</li>
<li class="link" value="8" onclick="activelink()">8</li>
<li class="link" value="9"onclick="activelink()">9</li>
<li class="link" value="10"onclick="activelink()">10</li>
<li  class="arrow" onclick="activelink()" >&raquo;</li>

</ul>
<button class="btn2">Next</button>

</div>
`
