  (function() {
      class ButtonElement {
          constructor(element, name) {
              this.e = document.createElement(element);
              this.e.id = name;
          }
          setOnClickHandler(onClickHandler) {
              this.e.onclick = onClickHandler;
          }
      }

      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var isDragging = false; // Track if the element is being dragged
      
        if (document.getElementById(elmnt.id + "header")) {
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          if (e.target.tagName === "INPUT") {
            // If the clicked element is an input box, don't initiate dragging
            return;
          }
      
          e.preventDefault();
          isDragging = true;
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          if (!isDragging) {
            return;
          }
          e = e || window.event;
          e.preventDefault();
          
          // Calculate the new position of the element
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          
          // Calculate the maximum and minimum allowed X and Y positions
          const maxX = window.innerWidth - elmnt.offsetWidth;
          const maxY = window.innerHeight - elmnt.offsetHeight;
          const minX = 0;
          const minY = 0;
      
          // Apply constraints to the new position
          const newX = Math.max(minX, Math.min(elmnt.offsetLeft - pos1, maxX));
          const newY = Math.max(minY, Math.min(elmnt.offsetTop - pos2, maxY));
      
          elmnt.style.top = newY + "px";
          elmnt.style.left = newX + "px";
        }
      
        function closeDragElement() {
          isDragging = false;
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
      const mainframe = new ButtonElement("div", "mainframe");
      const topbar = new ButtonElement("div", "topBar");
      const topContainer = new ButtonElement("div", "topContainer");
      const gameframe = new ButtonElement("div", "gameframe");
      const minbar = new ButtonElement("div", "minbar");
      const close = new ButtonElement("button", "close");
      const min = new ButtonElement("button", "min");
      const open = new ButtonElement("button", "open");
      const h1 = new ButtonElement("h1", "h1");
      const text = new ButtonElement("p", "text");

      mainframe.e.appendChild(topContainer.e);
      mainframe.e.appendChild(h1.e);
      mainframe.e.appendChild(text.e);
      topContainer.e.appendChild(topbar.e);
      topbar.e.appendChild(close.e);
      topbar.e.appendChild(min.e);
      topbar.e.appendChild(open.e);
      h1.e.textContent = "Luminesence"
      minbar.e.textContent = "Open";
      text.e.textContent = "An advanced hack client"
      const buttons = [];
      const buttonContent = [
          "Change Tabname",
          "Flood History",
          "Change Theme",
          "Darkmode Page",
          "Notepad",
          "Games",
          "Local Storage Viewer",
          "Autoclicker",
          "Popup Browser",
          "Lumi Console",
      ];

      while (buttons.length < 10) {
          const buttonName = `button_${buttons.length + 1}`;
          const newButton = new ButtonElement("button", buttonName);
          newButton.e.innerText = buttonContent[buttons.length];
          newButton.e.className = "btn";
          buttons.push(newButton);
      }

      for (const button of buttons) {
          mainframe.e.appendChild(button.e);
      }

      const buttonClickHandlers = {
          0: () => {
              text.e.textContent = 'Activated tab cloak';
              document.title = prompt("Name of tab:");
          },
          1: () => {
            text.e.textContent = "Activating history flood.";
            javascript:var num=prompt('How Times Do You Want This Page To Show Up In your History?');done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert('Flooding Successful!\n '+window.location.href+' \nIs Now In Your History '+num+(num==1?' time.':' Times.'))}      
          },
          2: () => {
            text.e.textContent = "Toggling theme.";

            const themeMap = {
              dark: 'dark',
              light: 'light',
              solar: 'solar'
            };
            
            const theme = localStorage.getItem('theme')
              || (tmp = Object.keys(themeMap)[0],
                  localStorage.setItem('theme', tmp),
                  tmp);
            const bodyClass = document.getElementById("mainframe").classList;
            bodyClass.add(theme);
            
            function toggleTheme() {
              const current = localStorage.getItem('theme');
              const next = themeMap[current];
            
              bodyClass.replace(current, next);
              localStorage.setItem('theme', next);
            }
              
            toggleTheme();
          },
          3: () => {
            javascript:(function(){var newSS, styles='* { background: black !important; color: #C0C0C0 !important; line-height:1.7em !important} :link, :link * { color: #0099FF !important } :visited, :visited * { color: #6666CC !important }'; if(document.createStyleSheet) { document.createStyleSheet("javascript:'"+styles+"'"); } else { newSS=document.createElement('link'); newSS.rel='stylesheet'; newSS.href='data:text/css,'+escape(styles); document.getElementsByTagName("head")[0].appendChild(newSS); } })();
          },
          4: () => {
            text.e.textContent = "Opened notepad.";
            const notepad = new ButtonElement("div", "notepad");
            notepad.e.classList.add("notepad-container");
        
            const notepadContainer = new ButtonElement("div", "notepadContainer");
            notepad.e.appendChild(notepadContainer.e);
        
            const textarea = new ButtonElement("textarea", "textarea");
            textarea.e.classList.add("notepad-textarea");
            notepadContainer.e.appendChild(textarea.e);
        
            const buttonContainer = new ButtonElement("div", "buttonContainer");
            buttonContainer.e.classList.add("notepad-button-container");
            notepadContainer.e.appendChild(buttonContainer.e);

            const storedValue = localStorage.getItem("notepadValue");
            if (storedValue) {
              textarea.e.value = storedValue;
            }
        
            const run = new ButtonElement("button", "run");
            run.e.classList.add("notepad-button", "notepad-run");
            run.e.innerText = "Run";
            buttonContainer.e.appendChild(run.e);

            run.e.addEventListener("click", () => {
              try {
                eval(textarea.e.value);
              } catch (error) {
                alert(`Error: ${ error.message }`);
              }
            })
        
            const cl = new ButtonElement("button", "cl");
            cl.e.classList.add("notepad-button");
            cl.e.innerText = "Close";
            buttonContainer.e.appendChild(cl.e);

            cl.e.addEventListener("click", () => {
              localStorage.setItem("notepadValue", textarea.e.value);
              notepad.e.remove();
            })
        
            document.body.appendChild(notepad.e);
          },
          5: () => {
            const gameContent = [
              "Snake",
              "Pinball",
              "2048",
              "The House",
              "The Wall",
              "Astroids",
            ];
            const gameOnclick = [
              function() {javascript:Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement('p'));(X=x.style).position='fixed';X.left=X.top=0;X.background='#FFF';x.innerHTML='<p></p><canvas>';v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext('2d'); onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0>e?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++ +10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert('Game Over')):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):'Press P')):-e?(y=(a[e]=e<Q|e>=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle='hsl('+99*!a[e]+','+2*m+'%,'+50*y+'%)',c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1): p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void F(-1);},
              function() {javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/lupire.js"})();},
              function() {javascript:(t=>{var s=document.createElement(t);s.type='text/java'+t;s.src='https://sheeptester.github.io/javascripts/2048.js';document.body.appendChild(s);})('script');},
              function() {javascript:var s=document.createElement('script');s.type='text/javascript';s.src='https://sheeptester.github.io/thingkingland/bookmarklets/theHouse.js';document.body.appendChild(s);},
              function() {javascript:t=document.title;document.title="Loading...";r=new XMLHttpRequest();r.onload=function(e){eval(e.currentTarget.responseText)};r.open("GET","https://plainsightcollection.github.io/web/wallball/ldr.js",true);r.send();undefined;},
              function() {javascript:var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);},
            ]; 
            if (document.getElementById("gameframe")) {
              text.e.textContent = "Closed Games.";
              while (gameframe.e.childNodes.length > 0) {
                gameframe.e.removeChild(gameframe.e.lastChild);
              }
              gameframe.e.remove();
              return;
            } else {
              text.e.textContent = "Opened Games.";
              mainframe.e.appendChild(gameframe.e);
              const games = [];
              for (let i = 0; i < 6; i++) {
                const gameName = `game_${i + 1}`;
                const newGame = new ButtonElement("button", gameName);
                newGame.e.innerText = gameContent[i];
                newGame.e.className = "btn";
                if (gameOnclick[i]) {
                  newGame.e.addEventListener("click", gameOnclick[i]);
                }
                games.push(newGame);
              }

              for (const game of games) {
                gameframe.e.appendChild(game.e);
              }
            }      
          },
          6: () => {
            javascript:(function(){function l(a,b){b=a.target,a.preventDefault();var d=b.getAttribute("data-k");switch(b.className){case"lc":h.removeItem(d),k();break;case"lv":b.parentNode.innerHTML="<pre>"+h[d]+"</pre>";break;case"lca":h.clear(),k();break;case"sc":i.removeItem(d),k();break;case"sv":b.parentNode.innerHTML="<pre>"+i[d]+"</pre>";break;case"sca":i.clear(),k();break;case"x":c.style.display="none"}}function k(){e=j+"<tr><th colspan=3><h1>localStorage inspector</h1><th><a href=# class=x>close</a><tr><th>storage key<th>size<th><th><a href=# class=lca>clear all</a>",e+=h.length?"":"<tr><td>No Data";for(d=0;d<h.length;d++)g=h.key(d),e+=("<tr><td>$<td>"+h[g].length+"<td><a href=# data-k=\"$\" class=lv>view</a><td><a href=# data-k=\"$\" class=lc>clear</a>").replace(/\$/g,g);e+="<tr><th colspan=3><h1>sessionStorage</h1><tr><th>storage key<th>size<th><th><a href=# class=sca>clear all</a>",e+=i.length?"":"<tr><td>No Data";for(d=0;d<i.length;d++)g=i.key(d),e+=("<tr><td>$<td>"+i[g].length+"<td><a href=# data-k=\"$\" class=sv>view</a><td><a href=# data-k=\"$\" class=sc>clear</a>").replace(/\$/g,g);c.innerHTML=e}var a=document,b="localStorageList",c=a.getElementById(b),d,e,f,g,h=window.localStorage,i=window.sessionStorage,j="<style>$ th, $ td {padding:0 1em;text-align:left;}$ th{font-weight:bold}$ pre{max-width:400px;max-height:300px;overflow:auto;white-space:pre-wrap;}$ h1{font:16px/32px sans-serif;}</style>".replace(/\$/g,"#"+b);c||(c=a.createElement("table"),a.body.appendChild(c),c.addEventListener("click",l,!1)),c.setAttribute("id",b),c.setAttribute("style","position:fixed;top:20px;right:20px;padding:20px;background:#fff;font:12px/20px monospace;z-index:99999;max-height:100%;overflow:auto;border-radius:10px;border:2px solid #000"),c.style.display="block",k()})()
          },
          7: () => {
              eval("javascript:(function(x,y){if(!window.click){window.click=!0,document.body.style.cursor='crosshair';var cps=prompt('Autoclicker CPS: (Under 200 recommended)');if(!cps||isNaN(cps)?(alert(%27You entered something wrong. Try running the script again.%27),end()):alert(%27Autoclicker activated at %27+cps+%27 CPS! Do [ctrl+e] to stop.%27),addEventListener(%27mousemove%27,e=>{x=e.clientX,y=e.clientY}),addEventListener(%27keydown%27,e=>{%27e%27===e.key&&e.ctrlKey&&(alert(%27Autoclicker deactivated! Click the bookmark again to reactivate!%27),end())}),window.click)var int=setInterval(function(){var e=document.elementFromPoint(x,y);e&&e.click()},1e3/cps);function end(){clearInterval(int),window.click=!1,document.body.style.cursor=%27default%27}}})();")
          },
          8: () => {
            const site = window.prompt("What site do you want opened?");
            window.open(site, site, "toolbar=no, location=no");
            return text.e.textContent = "Popup Window";
          },
          9: () => {
            if (document.getElementById("mainCommand")) {
              document.getElementById("mainCommand").remove();
              return text.e.textContent = "Closed crwn console"
            }
            const mainCommand = new ButtonElement("div", "mainCommand");
            const input = new ButtonElement("input", "input");
            const box = new ButtonElement("div", "box");
            const output = new ButtonElement("span", "output");
            mainframe.e.appendChild(mainCommand.e);
            mainCommand.e.appendChild(input.e);
            mainCommand.e.appendChild(box.e);
            box.e.appendChild(output.e);
            text.e.textContent = "Opened crwn console";
            input.e.style.color = "black";
            input.e.placeholder = "crwn help";
            input.e.addEventListener('keyup', (event) => {
              if (event.keyCode === 13) {
                /* put any functions in here */
                if (!input.e.value.includes("crwn")) {
                  output.e.innerHTML += "Please put crwn in front of any commands. See 'crwn help'.<br/>"
                }
                let value = input.e.value.replace("crwn", "");
                function end(props) {
                  try {
                    const result = eval(props);
                    output.e.innerHTML += `Input: ${props}<br/>`;
                    output.e.innerHTML += `Result: ${result}<br/>`;
                  } catch (error) {
                    return (output.e.innerHTML += `Error: ${error.message}<br/>`);
                  }
                }
                if (value.includes("!ignore")) {
                  value = value.replace("!ignore", "");
                  return end(value);
                }
                if (value.includes("console")) {
                  const words = value.split(" ");
                  const consoleIndex = words.findIndex(word => word === "console");
                  
                  if (consoleIndex !== -1 && consoleIndex + 1 < words.length) {
                    const color = words[consoleIndex + 1].trim();
                    mainframe.e.style.background = color;
                    output.e.innerHTML += `Changed background to ${color}<br/>`;
                  }
                  const remainingWords = words.slice(consoleIndex + 2);
                  value = remainingWords.join(" ");
                }
                if (value.includes("text")) {
                  const words = value.split(" ");
                  const textIndex = words.findIndex(word => word === "text");
                  
                  if (textIndex !== -1 && textIndex + 1 < words.length) {
                    const color = words[textIndex + 1].trim();
                    document.getElementById("mainframe").style.color = color;
                    output.e.innerHTML += `Changed text to ${color}<br/>`;
                  }
                  const remainingWords = words.slice(textIndex + 2);
                  value = remainingWords.join(" ");
                }
                if (value.includes("edit")) {
                  javascript:document.body.contentEditable = true; document.designMode = 'on'; void 0;
                  output.e.innerHTML += "Edit mode enabled<br/>";
                }
                if (value.includes("xray")) {
                  javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())
                  output.e.innerHTML += "Xray enabled<br/>";
                }
                if (value.includes("about:blank")) {
                  const words = value.split(" ");
                  const aboutBlankIndex = words.findIndex(word => word === "about:blank");
                  
                  if (aboutBlankIndex !== -1 && aboutBlankIndex + 1 < words.length) {
                    const tab = words[aboutBlankIndex + 1].trim();
                    if (!tab.startsWith("https://")) {
                      output.e.innerHTML += "Please use https://<br/>";
                    }
                    
                    const win = window.open();
                    win.document.body.style.margin = "0";
                    win.document.body.style.height = "100vh";
                    
                    const iframe = win.document.createElement("iframe");
                    iframe.style.border = "none";
                    iframe.style.width = "100%";
                    iframe.style.height = "100%";
                    iframe.style.margin = "0";
                    iframe.referrerpolicy = "no-referrer";
                    iframe.allow = "fullscreen";
                    iframe.src = tab;
                    win.document.body.appendChild(iframe);
                    
                    const script = win.document.createElement("script");
                    script.innerHTML = `
                      const local_title = localStorage.getItem("title");
                      const local_icon = localStorage.getItem("icon");
                      if (window.localStorage.hasOwnProperty("title")) {
                        document.title = local_title;
                        console.log("Title set to: " + local_title);
                      } else {
                        console.log("Title not set :(");
                      }
                      if (window.localStorage.hasOwnProperty("icon")) {
                        document.querySelector("link[rel=icon]").href = local_icon;
                        console.log("Icon set to: " + local_icon);
                      } else {
                        console.log("Icon not set :(");
                      }`;
                    win.document.body.appendChild(script);
                    
                    output.e.innerHTML += `Opened about:blank ${tab}<br/>`;
                  }
                }
                if (value.includes("delete css")) {
                  javascript:(function(){var i,l,styles = document.styleSheets;for(i=0,l=styles.length;i<l;i++){styles[i].disabled = true;}})()
                  output.e.innerHTML += "Deleted CSS<br/>";
                }
                if (value.includes("3d")) {
                  eval('javascript:krazete:!function(){var d={menu:document.createElement("div"),limit:document.createElement("input"),gap:document.createElement("input"),sag:document.createElement("input"),fov:document.createElement("input"),flo:document.createElement("input"),off:document.createElement("input"),non:document.createElement("input"),end:document.createElement("input"),tgl:document.createElement("input"),cssStatic:document.createElement("style"),cssDynamic:document.createElement("style"),orientation:{yaw:0,pitch:0,roll:0},mouseMove:function(e){d.orientation.yaw=180*-Math.cos(Math.PI*e.clientX/innerWidth)*d.limit.value,d.orientation.pitch=180*Math.cos(Math.PI*e.clientY/innerHeight)*d.limit.value,d.updateBody()},gyroMove:function(e){innerWidth>innerHeight?(d.orientation.yaw=-(e.alpha+e.beta),d.orientation.pitch=e.gamma-90*Math.sign(90-Math.abs(e.beta))):(d.orientation.yaw=-(e.alpha+e.gamma),d.orientation.pitch=e.beta-90),d.updateBody()},updateOrigin:function(e){document.body.style.transformOrigin=innerWidth/2+pageXOffset+"px "+(innerHeight/2+pageYOffset)+"px"},updateBody:function(){document.body.style.transform="perspective("+Math.pow(2,d.fov.value)+"px) translateZ(-"+d.gap.value+"px) rotateX("+d.orientation.pitch+"deg) rotateY("+d.orientation.yaw+"deg)"},updateCSS:function(){if(d.non.checked)d.cssDynamic.innerHTML="";else if(d.off.checked)d.cssDynamic.innerHTML="* { transform-style: preserve-3d; }";else{for(var e=0;document.querySelector("body"+" > *".repeat(e));e++);var t=d.gap.value/e,n=-Math.PI*d.sag.value/e;d.cssDynamic.innerHTML=` * { transform: translateZ(${t}px) rotateX(${n}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${d.flo.checked?"overflow: visible !important;":""} } *:hover { transform: translateZ(${2*t}px) rotateX(${2*n}rad); ${d.flo.checked?"":"overflow: visible;"} } `}},toggle:function(){"active"==d.menu.className?d.menu.removeAttribute("class"):d.menu.className="active"},quit:function(){window.removeEventListener("deviceorientation",d.gyroMove),window.removeEventListener("mousemove",d.mouseMove),window.removeEventListener("scroll",d.updateOrigin),window.addEventListener("resize",d.updateOrigin),d.menu.remove(),d.cssStatic.remove(),d.cssDynamic.remove(),document.body.removeAttribute("style")},newRange:function(e,t,n,o,i,a,r){d.menu.appendChild(e),e.type="range",e.min=n,e.max=i,e.step=o,e.value=a,e.addEventListener("input",r),d.menu.appendChild(document.createElement("span")).innerHTML=t,d.menu.appendChild(document.createElement("br"))},newCheckbox:function(e,t,n){d.menu.appendChild(e),e.type="checkbox",e.addEventListener("click",n),d.menu.appendChild(document.createElement("span")).innerHTML=t,d.menu.appendChild(document.createElement("br"))},newButton:function(e,t,n){d.menu.appendChild(e),e.type="button",e.value=t,e.addEventListener("click",n)},init:function(){document.body.parentNode.appendChild(d.menu).id="tri-menu",d.newRange(d.limit,"limit",0,.03125,1,.125,d.updateBody),d.newRange(d.gap,"gap / distance",0,32,512,128,function(){d.updateCSS(),d.updateBody()}),d.newRange(d.sag,"sag",-.25,.03125,.25,0,d.updateCSS),d.newRange(d.fov,"field of view",7,1,13,10,d.updateBody),d.newCheckbox(d.flo,"force overflow",d.updateCSS),d.flo.setAttribute("checked",""),d.newCheckbox(d.off,"flatten layers",d.updateCSS),d.newCheckbox(d.non,"flatten everything",d.updateCSS),d.newButton(d.end,"Quit",d.quit),d.newButton(d.tgl,"≡",d.toggle),d.tgl.id="tri-toggle",d.menu.appendChild(d.cssStatic).innerHTML=` html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; }` %60,d.menu.appendChild(d.cssDynamic),d.updateCSS(),window.addEventListener("deviceorientation",d.gyroMove),window.addEventListener("mousemove",d.mouseMove),window.addEventListener("scroll",d.updateOrigin),window.addEventListener("resize",d.updateOrigin),window.scrollBy(0,1)}};d.init()}();')
                  output.e.innerHTML += "Page 3D<br/>";
                }
                if (value.includes("neon")) {
                  javascript:a=document.createElement('style');a.innerHTML=['@import url(https://fonts.googleapis.com/css?family=Audiowide&display=swap); img{filter:sepia(100%) hue-rotate(30deg) saturate(15);box-shadow:0px 0px 10px chartreuse;transition:1s all linear} img:hover{box-shadow:0px 0px 50px chartreuse !important} *{cursor:url(http://www.rw-designer.com/cursor-extern.php?id=94635),auto !important;font-family:Audiowide !important;color:chartreuse !important;background:black !important;text-shadow:0px 0px 10px chartreuse;border-color:chartreuse !important}'];document.body.appendChild(a)
                  output.e.innerHTML += "Page Neon<br/>";
                }
                if (value.includes("clear cookies")) {
                  javascript:(function(){document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); }); })();
                  window.localStorage.clear();
                  output.e.innerHTML += "Cookies Cleared<br/>";
                }
                if (value.includes("install Vengeance")) {
                  javascript:(function () {var v = document.createElement('script');v.src = 'https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@v1.2.0/script.min.js';document.body.appendChild(v);}())
                  output.e.innerHTML += "Installed Vengeance<br/>"
                }
                if (value.includes("help")) {
                  output.e.innerHTML += "The commands are: console {color}, text {color}, edit, xray, about:blank, delete css, 3d, neon, install Vengeance. Use !ignore to eval statements without commands.<br/>";
                }
              }
            });
          },
      };

      function handleButtonClick(index) {
          const customClickLogic = buttonClickHandlers[index];
          if (customClickLogic) {
              customClickLogic();
          } else {
              console.log(`Button ${index + 1} clicked!`);
          }
      }

      buttons.forEach((button, index) => {
          button.setOnClickHandler(() => handleButtonClick(index));
      });

      close.e.onclick = () => {
        mainframe.e.remove();
        minbar.e.remove();
      }

      min.e.onclick = () => {
        mainframe.e.style.display = 'none';
        minbar.e.style.display = 'block';
      }
    
      minbar.e.onclick = () => {
          mainframe.e.style.display = 'block';
          minbar.e.style.display = 'none';
      }
      
      open.e.onclick = () => {
          if (mainframe.e.style.width === '100%') {
              mainframe.e.style.width = '800px'
              mainframe.e.style.height = '600px'
              mainframe.e.style.top = '2rem'
          } else {
              mainframe.e.style.width = '100%';
              mainframe.e.style.height = '100%';
              mainframe.e.style.top = '0';
              mainframe.e.style.left = '0';
          }
      }
      
      document.body.appendChild(mainframe.e);
      document.body.appendChild(minbar.e);
      dragElement(document.getElementById("mainframe"))

      const style = `
        .dark,.light,.solar,:root{
            --text-primary:#fff
        }
        #mainframe .btn,:root{
            font-size:16px
        }
        #mainframe,.btn{
            overflow:hidden
        }
        #mainframe .btn:active,.btn:hover{
            transition-duration:.35s
        }
        #mainframe #input #input input:hover,#input #submit button:hover,.btn{
            cursor:pointer
        }
        #mainframe #input #input input:focus,#input #submit button:focus,.btn{
            outline:0
        }
        #mainframe #close,#min,#open{
            max-height:10px;
            padding:3px;
            position:absolute
        }
        #mainframe #close,#inputArea,#min,#open{
            position:absolute
        }
        #mainframe,#minbar{
            position:fixed;
            animation-name:slidein
        }
        :root{
            font-family:'Open Sans';
            --text-secondary:#E7E7E7;
            --bg-primary:linear-gradient(143deg,rgba(2,0,36,1) 0%,rgba(67,124,208,1) 0%,rgba(73,224,255,1) 100%);
            --bg-secondary:#add8e6;
            --transition-speed:600ms
        }
        .dark{
            --text-secondary:#ececec;
            --bg-primary:linear-gradient(180deg,rgba(40,40,40,1) 48%,rgba(0,0,0,1) 96%);
            --bg-secondary:#141418;
            background-color:#1f2223
        }
        .light{
            --text-secondary:#E7E7E7;
            --bg-primary:linear-gradient(143deg,rgba(2,0,36,1) 0%,rgba(67,124,208,1) 0%,rgba(73,224,255,1) 100%);
            --bg-secondary:#add8e6;
            background:linear-gradient(143deg,#020024 0,#437cd0 0,#49e0ff 100%)
        }
        .solar{
            --text-secondary:#35535c;
            --bg-primary:linear-gradient(180deg,rgba(247,247,247,.8043811274509804) 0%,rgba(139,214,110,1) 0%,rgba(29,128,8,1) 100%);
            --bg-secondary:#fefefe;
            color:#000
        }
        #mainframe{
            background:var(--bg-primary);
            width:800px;
            height:600px;
            border-radius:10px;
            animation-duration:2s;
            text-align:center;
            margin:auto;
            left:var(--x-axis,2rem);
            top:var(--y-axis,2rem);
            z-index:10000;
            box-shadow:rgba(50,50,93,.25) 0 6px 12px -2px,rgba(0,0,0,.3) 0 3px 7px -3px;
            padding-left:2rem;
            padding-right:2rem;
            padding-top:10px;
            font-family:Inter,-apple-system,system-ui,'Segoe UI',Helvetica,Arial,sans-serif!important;
            color:var(--text-primary)
        }
        #minbar,.btn{
            text-align:center;
            font-family:Inter,-apple-system,system-ui,'Segoe UI',Helvetica,Arial,sans-serif
        }
        #mainframe #topContainer{
            width:100%;
            display:flex;
            justify:center;
            align-items:center
        }
        #mainframe #topBar{
            top:15px;
            position:relative;
            background:linear-gradient(90deg,rgba(247,247,247,.8043811274509804) 0,rgba(237,237,237,.7539609593837535) 44%,rgba(210,210,210,.7007396708683473) 100%);
            width:736px;
            z-index:100002;
            height:15px;
            cursor:move;
            border-radius:15px;
            margin:auto auto 1rem;
            box-shadow:rgba(149,157,165,.2) 0 8px 24px
        }
        #mainframe .btn{
            appearance:none;
            backface-visibility:hidden;
            background-color:#f82c79;
            border-radius:8px;
            border-style:none;
            box-shadow:rgba(39,174,96,.15) 0 4px 9px;
            box-sizing:border-box;
            color:#fff;
            margin:5px 5px auto auto;
            font-weight:600;
            letter-spacing:normal;
            line-height:1.5;
            padding:13px 20px;
            position:relative;
            text-decoration:none;
            transform:translate3d(0,0,0);
            transition:.3s;
            user-select:none;
            -webkit-user-select:none;
            touch-action:manipulation;
            vertical-align:top;
            white-space:nowrap
        }
        #mainframe .btn:hover{
            background-color:#e52a70;
            opacity:1;
            transform:translateY(0)
        }
        #mainframe .btn:active{
            transform:translateY(2px)
        }
        @keyframes slidein{
            0%{
                opacity:0
            }
            100%{
                opactiy:100%
            }
        }
        #mainframe #inputArea{
            display:flex;
            justify-content:center;
            align-items:center
        }
        #mainframe #command{
            z-index:0;
            top:0;
            left:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            overflow:auto
        }
        #mainframe #input{
            padding:5px 5px 5px 7px;
            border-radius:5px;
            background:#fff
        }
        #mainframe #input div{
            display:inline-block;
            font-size:12px
        }
        #mainframe #input #input input{
            margin-right:0;
            border:none;
            font-size:inherit;
            transition:width .2s;
            padding-top:5px;
            padding-left:5px;
            padding-bottom:5px;
            width:55px;
            color:black!important;
            border-bottom:1px solid #eee
        }
        #mainframe #input #input input:focus{
            width:150px
        }
        #mainframe #input #submit button{
            margin-left:0;
            border:none;
            font-size:1.15em;
            background-color:red;
            padding-top:2px;
            padding-bottom:2px;
            transition:color .2s;
            color:red
        }
        #mainframe #input #submit button:hover{
            color:#3498db
        }
        #mainframe #output{
            border:2px solid #fff;
            display:flex;
            flex-direction:column;
            gap:2px;
            line-height:150%;
            overflow-y:scroll;
            height:250px
        }
        #mainframe #button{
            width:30px;
            height:30px;
            padding:5px;
            background:red;
            border-radius:5px
        }
        #mainframe #close{
            background:#ff5d5b;
            border:4px solid #cf544d;
            border-radius:100%;
            right:45px
        }
        #mainframe #close :after,#close :before,#min :after,#min :before{
            background:#460100
        }
        #mainframe #min{
            background:#ffbb39;
            border:4px solid #cfa64f;
            border-radius:100%;
            right:25px
        }
        #mainframe #open{
            background:#00cd4f;
            border:4px solid #0ea642;
            border-radius:100%;
            right:5px
        }
        #mainframe #open :after,#open :before{
            background:#024d0f
        }
        #mainframe #minbar{
            display:none;
            bottom:-5px;
            left:50px;
            width:250px;
            height:25px;
            box-shadow:rgba(60,64,67,.3) 0 1px 2px 0,rgba(60,64,67,.15) 0 2px 6px 2px;
            border-radius:8px;
            z-index:20;
            background:#f7f7f7;
            background:linear-gradient(90deg,rgba(247,247,247,.8043811274509804) 0,rgba(237,237,237,.7539609593837535) 44%,rgba(210,210,210,.7007396708683473) 100%);
            animation-duration:1s
        }
        #mainframe h1 {
            background-image:linear-gradient(to right,#0f0,#ec4899,#8b5cf6);
            -webkit-background-clip:text;
            background-clip:text;
            color:transparent;
            text-align: center;
        }
        #notepad {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0,0,0,.8);
          z-index: 10000
        }
        #textrea {
          border: 2px solid white;
        }
        #notepad #notepadContainer,#notepadContainer,.notepad-container {
            width: 800px;
            height: 600px;
            background-color: #333;
            color: #ccc;
            border: 1px solid #ccc;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between
        }
        
        #notepad #textarea,#textarea,.notepad-textarea {
            resize: none;
            padding: 10px;
            font-family: Arial,sans-serif;
            font-size: 14px;
            border: 0;
            background-color: transparent;
            color: #ccc;
            flex: 1
        }
        
        #buttonContainer,#notepad #buttonContainer,.notepad-button-container {
            display: flex;
            justify-content: space-between;
            margin-top: 10px
        }
        
        #cl,#notepad #cl,#notepad #run,#run,.notepad-button {
            padding: 8px 16px;
            font-size: 14px;
            color: #ccc;
            background-color: #333;
            border: 1px solid #ccc;
            cursor: pointer
        }
        
        #notepad #run,#run,.notepad-run {
            margin-right: 10px
        }
      `;

      const styleElement = document.createElement("style");
      styleElement.innerHTML = style;
      styleElement.setAttribute("scoped", "");
      mainframe.e.appendChild(styleElement);
}())