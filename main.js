/*
Create a bookmarklet with many features, like some sort of hacked client

Tab Cloak
History Spammer
games section
notepad
built in console
proxy?
Themes
page color change
autoclicker

*/

let style = document.createElement('style');
let title = document.createElement('h1');
let text = document.createElement('p');
let mainframe = document.createElement('div');
let gameframe = document.createElement('div');
let logo = document.createElement('img');
let topBar = document.createElement('div');
let minBar = document.createElement('div');

let close = document.createElement('button');
let min = document.createElement('button');
let open = document.createElement('button');
let bs1 = document.createElement('button');
let bs2 = document.createElement('button');
let bs3 = document.createElement('button');
let bs4 = document.createElement('button');
let bs5 = document.createElement('button');
let bs6 = document.createElement('button');
let bs7 = document.createElement('button');
let bs8 = document.createElement('button');
let bs9 = document.createElement('button');

let gt1 = document.createElement('button');
let gt2 = document.createElement('button');
let gt3 = document.createElement('button');
let gt4 = document.createElement('button');
let gt5 = document.createElement('button');
let gt6 = document.createElement('button');

mainframe.id = 'mainClient';
gameframe.id = 'gameFrame';
topBar.id = 'topBar';
close.id = 'close';
min.id = 'min';
open.id = 'open';
minBar.id = 'minBar';
bs1.id = 'btn1';
bs2.id = 'btn2';
bs3.id = 'btn3';
bs4.id = 'btn4';
bs5.id = 'btn5';
bs6.id = 'btn6';
bs7.id = 'btn7';
bs8.id = 'btn8';
bs9.id = 'btn9';

gt1.id = 'gt1';
gt2.id = 'gt2';
gt3.id = 'gt3';
gt4.id = 'gt4';
gt5.id = 'gt5';
gt6.id = 'gt6';

document.body.appendChild(mainframe);
document.body.appendChild(minBar);
mainframe.append(topBar,title,text,logo,bs1,bs2,bs3,bs4,bs5,bs6,bs7,bs8);
mainframe.append(style);
mainframe.append(gameframe);
gameframe.append(gt1,gt2,gt3,gt4,gt5,gt6);
topBar.append(close);
topBar.append(min);
topBar.append(open);

title.textContent = 'Luminesence';
text.textContent = 'An advanced hacked client.';
bs1.textContent = 'Tab Cloak';
bs2.textContent = 'History';
bs3.textContent = 'Themes';
bs4.textContent = 'Darkmode';
bs5.textContent = 'Notepad';
bs6.textContent = 'Adblock+';
bs7.textContent = 'Games';
bs8.textContent = 'Console';
bs9.textContent = 'Autoclicker';

gt1.textContent = 'Snake';
gt2.textContent = 'Pinball';
gt3.textContent = '2048';
gt4.textContent = 'The House';
gt5.textContent = 'The Wall';
gt6.textContent = 'Astroids';

dragElement(document.getElementById("mainClient"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

close.onclick = () => {
    mainframe.style.display = 'none';
}

minBar.style.display = 'none';
minBar.innerHTML = 'open';
min.onclick = () => {
    mainframe.style.display = 'none';
    minBar.style.display = 'block';
}

minBar.onclick = () => {
    mainframe.style.display = 'block';
    minBar.style.display = 'none';
}

open.onclick = () => {
    if (mainframe.style.width === '100%') {
        mainframe.style.width = '800px'
        mainframe.style.height = '600px'
        mainframe.style.top = '2rem'
    } else {
        mainframe.style.width = '100%';
        mainframe.style.height = '100%';
        mainframe.style.top = '0';
        mainframe.style.left = '0';
    }
}

bs1.onclick = () => {
    text.style.display = '';
    text.textContent = 'Activated tab cloak';
    document.title = prompt("Name of tab:");
}

bs2.onclick = () => {
    text.style.display = '';
    text.textContent = 'Activated Flood';
    javascript:var num=prompt('How Times Do You Want This Page To Show Up In your History?');done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert('Flooding Successful!\n '+window.location.href+' \nIs Now In Your History '+num+(num==1?' time.':' Times.'))}
}

bs3.onclick = () => {
    const themeMap = {
        dark: 'light',
        light: 'solar',
        solar: 'dark'
      };
      
      const theme = localStorage.getItem('theme')
        || (tmp = Object.keys(themeMap)[0],
            localStorage.setItem('theme', tmp),
            tmp);
      const bodyClass = mainframe.classList;
      bodyClass.add(theme);
      
      function toggleTheme() {
        const current = localStorage.getItem('theme');
        const next = themeMap[current];
      
        bodyClass.replace(current, next);
        localStorage.setItem('theme', next);
      }
      
      toggleTheme();  
}

bs4.onclick = () => {
    javascript:(function(){var newSS, styles='* { background: black !important; color: #C0C0C0 !important; line-height:1.7em !important} :link, :link * { color: #0099FF !important } :visited, :visited * { color: #6666CC !important }'; if(document.createStyleSheet) { document.createStyleSheet("javascript:'"+styles+"'"); } else { newSS=document.createElement('link'); newSS.rel='stylesheet'; newSS.href='data:text/css,'+escape(styles); document.getElementsByTagName("head")[0].appendChild(newSS); } })();
}

bs5.onclick = () => {
    javascript:(
        function hi() {  
          var parentID = 'a3q_parent';
          var dID = 'a3q_customNotes';  
          var buttonID = 'a3q_close_button';  
          var run = 'a3q_run_button';
          var saveThrottleSpeed = 100;  
          var lastSave = Date.now();  
          var waitCallback;  
          function a3q_Save(force) {    
            force = force || false;    
            clearTimeout(waitCallback);    
            if (force || Date.now() - lastSave >= saveThrottleSpeed) {      
              lastSave = Date.now();        
              localStorage.setItem('a3q_note', a3q_GetContents());    
            } else {      
              waitCallback = setTimeout(function() {        
                a3q_Save();      }, saveThrottleSpeed - Date.now());    }  };  
                function a3q_Load() {    
                  return localStorage.getItem('a3q_note') || '';  
                };  
                function a3q_GetContents() {    
                  return document.getElementById(dID).innerHTML;
                  };  
                  function a3q_Unload() {    
                    a3q_Save(true);    
                    d.removeEventListener('onkeyup', a3q_Save);    
                    d.parentNode.removeChild(d);    
                    e.removeEventListener('onkeyup', a3q_Save);    
                    e.parentNode.removeChild(e);  
                    c.removeEventListener('onclick', c.onclick);    
                    c.parentNode.removeChild(c);  };  
                    var d = document.getElementById(dID); 
                     var c = document.getElementById(buttonID);  
                     var e = document.getElementById(run)
                     if (d) {    
                      a3q_Unload();  
                    } else {    
                      var d = document.createElement('textarea');    
                      d.id = dID;    d.innerHTML = a3q_Load();    
                      d.style.backgroundColor = '#333';    
                      d.style.color = '#ccc';    
                      d.style.border = '1px solid #ccc';   
                      d.style.position = 'fixed';    
                      d.style.width = '20%';    
                      d.style.height = '20%';    
                      d.style.right = '2%';    
                      d.style.bottom = '2%';    
                      d.style.padding = '2px';    
                      d.style.zIndex = 10000;    
                      d.contentEditable = true;    
                      document.body.appendChild(d);    
                      d.focus();    
                      var lastRun = Date.now();    
                      d.onkeyup = a3q_Save;    
                      var c = document.createElement('button');    
                      var e = document.createElement('button');
                      c.style.position = 'fixed';    
                      c.id = buttonID;    
                      c.style.zIndex = 10000;    
                      c.style.bottom = '2%';    
                      c.style.right = '2%';    
                      c.innerHTML = 'Close';    
                      c.style.backgroundColor = '#333';    
                      c.style.color = '#ccc';    
                      c.onclick = function() {      
                        a3q_Unload();    
                      };    
                      document.body.appendChild(e);  
                      e.style.position = 'fixed';    
                      e.style.float = 'left';
                      e.id = run;    
                      e.style.zIndex = 10000;    
                      e.style.bottom = '2%';    
                      e.style.left = '78%';    
                      e.innerHTML = 'Run';    
                      e.style.backgroundColor = '#333';    
                      e.style.color = '#ccc';    
                      e.onclick = function() {      
                         var a3q_note = document.getElementById("a3q_customNotes").value;
                          if (a3q_note == !null) {
                            document.getElementById("a3q_customNotes").style.color = "red";
                            a3q_note = "Please enter a proper value";
                          }
                          eval(a3q_note);
                      };    
                      document.body.appendChild(c);  
                }})();
}

bs6.onclick = () => {
    
}

gameframe.style.display = 'none'
bs7.onclick = () => {
    if (gameframe.style.display === 'block') {
        gameframe.style.display = 'none';
    } else {
        gameframe.style.display = 'block';
    }
}

bs8.onclick = () => {
  let stylething = document.createElement('style');
  document.head.appendChild(stylething);
  let mainCommand = document.createElement('div');
  mainCommand.id = 'mainCommand';
  document.body.appendChild(mainCommand);
  mainCommand.appendChild(style);
  let goback = document.createElement('button');
  goback.id = 'goback';
  let console = document.createElement('input');
  let box = document.createElement('div');
  console.id = 'console';
  box.id = 'box';
  mainCommand.appendChild(console);
  mainCommand.appendChild(box);
  console.placeholder = 'Crwn help';
  goback.style.display = '';
  goback.textContent = 'Go back';
  mainCommand.appendChild(goback);
  goback.onclick = () => {
    mainCommand.style.display = 'none'
  }
  stylething.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
#console {
  width: 250px !important;
  border-style: none;
  height: 50px !important;
  background-color: black;
  color: green;
  font-family: 'Open Sans';
  margin: auto auto;
}
#console::placeholder {
  color: green;
  font-family: 'Open Sans';
}
#goback {
z-index: 999999 !important;
}
#box {
  color: green;
  width: 250px !important ;
  height: 250px !important;
  background-color: black;
  margin: auto auto;
  padding: 5px;
  font-family: 'Open Sans';
  border-style: none;
 overflow-y: scroll; 
}
`
  console.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var extra = "";
      let output = document.createElement('p')
      output.textContent = console.value
      box.appendChild(output)
      if (console.value.includes('crwn')) {
        output.value = console.value
      }
      else {
        output.textContent = 'Unknown command ~ ' + console.value + '~'
        output.style.color = 'red'
      }
      if (console.value == 'crwn console blue') {
        output.textContent = 'Changed console theme to blue'
        box.style.backgroundColor = 'blue'
      }
      else if (console.value == 'crwn console green') {
        output.value = console.value
        output.textContent = 'Changed console theme to green'
        box.style.backgroundColor = 'green'
      }
      else if (console.value == 'crwn custom theme') {
        let bozo = prompt('Enter Image URL')
        output.value = console.value
        document.body.style.backgroundImage = 'url(' + bozo + ')';
        output.textContent = 'Added custom theme to page'
      }
      else if (console.value == 'crwn new') {
        output.textContent = "if (console.value == ~command- name-here~ { code here } else {output.textContent ~Unknown command~ ' + console.value + ''' output.style.color = 'red'}"
      }
      else if (console.value == 'crwn edit') {
        javascript: document.body.contentEditable = true; document.designMode = 'on'; void 0;
        output.textContent = 'Edit Mode turned on.'
      }
      else if (console.value == 'crwn create cmd') {
        let name = prompt('Name your command')
        let prefix = 'crwn'
        let func = prompt('Paste your JS code. Do crwn new for the basic command creation guide.')
        let store = prefix + ' ' + name
        extra = store;
        eval(func);
        window.localStorage.setItem('store', store.toString());
        window.localStorage.setItem('func', func.toString());
        output.textContent = 'Executed ' + store
      }
      else if (console.value == 'crwn proxify site') {
        let proxify = prompt('Enter site URL')
        var code2 = ' width=100% height=100%>'; var proxyDomain = 'https://palladium-2.anirudhiscool.repl.co/service/gateway/?url='; var codeIP1 = code1.concat(proxyDomain); var codeIP2 = codeIP1.concat(proxify); var codeIP3 = codeIP2.concat(code2); document.write(codeIP3);
      }
      else if (console.value == 'crwn install pall') {
        output.textContent = 'Downloaded palladium proxy. Using repl.co domain.'
        let proxyDomain = 'https://palladium-2.anirudhiscool.repl.co/service/gateway/?url=';
      } 
      
      else if (console.value == 'crwn 3d') {
        output.textContent = '3D ifyed!'
      }
      else if (console.value == 'crwn delete css') {
        mainframe.style.display = 'none'
        javascript:(function(){var i,l,styles = document.styleSheets;for(i=0,l=styles.length;i<l;i++){styles[i].disabled = true;}})()
      }
      else if (console.value == 'crwn calc') {
        javascript:eval('function calc(){_o=prompt(_t,_z);if(_o!=\'\'&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())_z=eval(_o);}');_t='JAVASCRIPTER.NET Calculator - Input the expression to be calculated:';_z='';calc();while(_o!=''&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())calc()
      }
      else if (console.value == 'crwn help') {
        output.textContent = `Put crwn infront of any command: console green/blue, custom theme - makes custom theme, new, edit, create cmd, proxify site, install pall, clear cookies, delete css, calc, 3d, about:blank, ${localStorage.getItem('store')}`
      }
      else if (console.value == 'crwn clear cookies') {
        output.textContent = 'Cookies cleared!'
        javascript:(function(){document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); }); })();
        window.localStorage.clear();

        
      }
      else if (console.value == 'crwn about:blank') {
        location.href = 'https://' + prompt("Link adress:");
    }
      else if (console.value == localStorage.getItem('store')) {
        eval(window.localStorage.getItem('func'))
      }
      else {
        output.textContent = 'Unknown command  ' + console.value + ''
        output.style.color = 'red'
      }
    }
  });
}

bs9.onclick = () => {
    javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);
}

gt1.onclick = () => {
    javascript:Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement('p'));(X=x.style).position='fixed';X.left=X.top=0;X.background='#FFF';x.innerHTML='<p></p><canvas>';v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext('2d'); onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0>e?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++ +10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert('Game Over')):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):'Press P')):-e?(y=(a[e]=e<Q|e>=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle='hsl('+99*!a[e]+','+2*m+'%,'+50*y+'%)',c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1): p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void F(-1);
}

gt2.onclick = () => {
    javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/lupire.js"})();
}

gt3.onclick = () => {
    javascript:(t=>{var s=document.createElement(t);s.type='text/java'+t;s.src='https://sheeptester.github.io/javascripts/2048.js';document.body.appendChild(s);})('script');
}

gt4.onclick = () => {
    javascript:var s=document.createElement('script');s.type='text/javascript';s.src='https://sheeptester.github.io/thingkingland/bookmarklets/theHouse.js';document.body.appendChild(s);
}

gt5.onclick = () => {
    javascript:t=document.title;document.title="Loading...";r=new XMLHttpRequest();r.onload=function(e){eval(e.currentTarget.responseText)};r.open("GET","https://plainsightcollection.github.io/web/wallball/ldr.js",true);r.send();undefined;
}

gt6.onclick = () => {
    javascript:var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);
}

style.textContent = `
:root {
    font-size: 16px;
    font-family: 'Open Sans';
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
  }
.dark {
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    color: lightgray;
    background-color: #1f2223;
  }
  
  .light {
    --text-primary: #1f1f1f;
    --text-secondary: #000000;
    --bg-primary: #ffffff;
    --bg-secondary: #e4e4e4;
    color: black;
    background-color: lightgray;
  }
  
  .solar {
    --text-primary: #576e75;
    --text-secondary: #35535c;
    --bg-primary: #e6fafd;
    --bg-secondary: #fefefe;
    color: black;
  }
#close {
    background: #FF5D5B;
    border: 4px solid #CF544D;
    border-radius: 100%;
    max-height: 10px;
    right: 45px;
    padding: 3px;
    position: absolute;
}
#close :before, #close :after {
    background: #460100;
}
#min {
    background: #FFBB39;
    border: 4px solid #CFA64F;
    border-radius: 100%;
    max-height: 10px;
    right: 25px;
    padding: 3px;
    position: absolute;
}
#min :before, #min :after {
    background: #460100;
}
#open {
    background: #00CD4F;
    border: 4px solid #0EA642;
    border-radius: 100%;
    max-height: 10px;
    right: 5px;
    padding: 3px;
    position: absolute;
}
#open :before, #open :after {
    background: #024D0F;
}
#gameFrame {
    width: 800px;
    height: 600px;
    position: absolute;

}
#topBar {
    top: 0;
    position: absolute;
    background: linear-gradient(90deg, rgba(247,247,247,0.8043811274509804) 0%, rgba(237,237,237,0.7539609593837535) 44%, rgba(210,210,210,0.7007396708683473) 100%);    width: 800px;
    z-index: 100002;
    height: 15px;
    cursor: move;
    border-radius: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#minBar {
    bottom: -5px;
    left: 50px;
    position: fixed;
    width: 250px;
    height: 25px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 8px;
    z-index: 20;
    text-align: center;
    font-family: Inter,-apple-system,system-ui,'Segoe UI',Helvetica,Arial,sans-serif;
    background: rgb(247,247,247);
    background: linear-gradient(90deg, rgba(247,247,247,0.8043811274509804) 0%, rgba(237,237,237,0.7539609593837535) 44%, rgba(210,210,210,0.7007396708683473) 100%);
    animation-name: slidein;
    animation-duration: 1s;
}
#gameFrame {

}
#mainClient {
    background: linear-gradient(143deg, rgba(2,0,36,1) 0%, rgba(67,124,208,1) 0%, rgba(73,224,255,1) 100%);
    width: 800px;
    height: 600px;
    border-radius: 10px;
    animation-name: slidein;
    animation-duration: 2s;
    text-align: center;
    margin: auto auto;
    position: fixed;
    overflow: auto;
    top: 2rem;
    z-index: 10000; 
    box-shadow: 5px 10px 18px #888888;
    padding-left: 2rem;
    padding-right: 2rem;
    font-family: Inter,-apple-system,system-ui,'Segoe UI',Helvetica,Arial,sans-serif;
    color: white;
  }
  #mainCommand {
    background: black;
    width: 800px;
    height: 600px;
    border-radius: 10px;
    animation-name: slidein;
    animation-duration: 2s;
    text-align: center;
    margin: auto auto;
    position: fixed;
    overflow: auto;
    top: 2rem;
    z-index: 100000; 
    box-shadow: 5px 10px 18px #888888;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  #title, #author {
    color: white;
    font-family: 'Helvetica';
    padding: 10px;
  }
  #btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn10, #gt1, #gt2, #gt3, #gt4, #gt5, #gt6 {
    appearance: none;
    backface-visibility: hidden;
    background-color: #F82C79;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    margin: auto auto;
    font-family: Inter,-apple-system,system-ui,'Segoe UI',Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 13px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
    margin-right: 5px;
    margin-top: 5px;
  }
    #btn1:hover,#btn2:hover,#btn1:hover, #btn3:hover, #btn4:hover, #btn5:hover, #btn6:hover, #btn7:hover, #btn8:hover, #btn9:hover, #btn10:hover, #gt1:hover, #gt2:hover, #gt3:hover, #gt4:hover, #gt5:hover, #gt6:hover {
      background-color: E52A70;
      opacity: 1;
      transform: translateY(0);
      transition-duration: .35s;
    }
    #btn1:active, #btn2:active, #btn3:active, #btn4:active, #btn5:active, #btn6:active, #7btn:active, #btn8:active, #btn9:active, #btn10:active, #gt1:active, #gt2:active, #gt3:active, #gt4:active, #gt5:active, #gt6:active {
      transform: translateY(2px);
      transition-duration: .35s;
    }
    @keyframes slidein {
      0% {
        opacity: 0%
      } 
      100% {
        opactiy: 100%
      }
    }
`
