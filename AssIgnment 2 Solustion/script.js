  
       /*For the local storage and web workers*/
      function pageloadfct(){
          
          /*Web Workers*/
          var w;
          if(typeof(Worker) !== "undefined") {
            if(typeof(w) == "undefined") {
                
              w = new Worker("demo_worker.js");
                
            }
            w.onmessage = function(event) {
             
                document.getElementById("mytime").innerHTML = event.data;
            }
          } else {
            document.getElementById("mytime").innerHTML = "Sorry, your browser does not support Web Workers...";
          }
          
        /*local storage*/  
        if(typeof(Storage) !== "undefined")
        {
            var c = 1;
             localStorage.setItem("numbeerofvisits" , c + Number( localStorage.getItem("numbeerofvisits") ) );
             document.getElementById('nbvisits').innerHTML = "this is your " + localStorage.getItem("numbeerofvisits") + "th visit";
             
         } 
       else
       {
        document.getElementById('nbvisits').innerHTML = "your browser not suppoerted :(";
       }
          
      }
   
        
        
       
       
      function showf1(){
          document.getElementById('f1').style.display = "block"; 
          document.getElementById('f2').style.display = "none"; 
          document.getElementById('f3').style.display = "none"; 
          document.getElementById('f4').style.display = "none"; 
         
      }
      
       function showf2(){
          document.getElementById('f1').style.display = "none"; 
          document.getElementById('f2').style.display = "block"; 
          document.getElementById('f3').style.display = "none"; 
          document.getElementById('f4').style.display = "none"; 
      }
       
       function showf3(){
          document.getElementById('f1').style.display = "none"; 
          document.getElementById('f2').style.display = "none"; 
          document.getElementById('f3').style.display = "block"; 
          document.getElementById('f4').style.display = "none"; 
      }
       
       function showf4(){
          document.getElementById('f1').style.display = "none"; 
          document.getElementById('f2').style.display = "none"; 
          document.getElementById('f3').style.display = "none"; 
          document.getElementById('f4').style.display = "block"; 
      }
       
    function draw(){
        
        var c = document.getElementById("dessin");
        var ctx = c.getContext("2d");
            
        
        
        var selectedcolor = document.getElementById("favcolor").value;
        var isfilled = document.getElementById("fill").checked;
        
    
        var shapee = document.querySelector('input[name = shape]:checked').value;
        //alert(shapee);
        switch(shapee) {
                
            case "line" : 
                var x1 = document.forms["form1"]["x1"].value;
                var y1 = document.forms["form1"]["y1"].value;
                var x2 = document.forms["form1"]["x2"].value;
                var y2 = document.forms["form1"]["y2"].value;
                 ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                    ctx.strokeStyle = selectedcolor;
                    ctx.stroke();
                break;
                
            case "rectangle" :
                
                var x1 = document.forms["form2"]["x1"].value;
                var y1 = document.forms["form2"]["y1"].value;
                var width  = document.forms["form2"]["width"].value;
                var height = document.forms["form2"]["height"].value;
                if (isfilled)
                    {
                      ctx.fillStyle = selectedcolor;
                      ctx.fillRect(x1, y1, width, height);  
                    }
                else{
                    ctx.strokeStyle = selectedcolor;
                    ctx.strokeRect(x1, y1, width, height);
                }
                
                break;
                
            case "triangle" :
                var x1 = document.forms["form3"]["x1"].value;
                var y1 = document.forms["form3"]["y1"].value;
                var x2 = document.forms["form3"]["x2"].value;
                var y2 = document.forms["form3"]["y2"].value;
                var x3 = document.forms["form3"]["x3"].value;
                var y3 = document.forms["form3"]["y3"].value;
                
                if (isfilled)
                    {
                        ctx.fillStyle = selectedcolor;
                         ctx.beginPath();
                         ctx.moveTo(x1,y1);
                         ctx.lineTo(x2,y2);
                         ctx.lineTo(x3,y3);
                         ctx.fill();
                    }
                else{
                    ctx.strokeStyle = selectedcolor;
                         ctx.beginPath();
                         ctx.moveTo(x1,y1);
                         ctx.lineTo(x2,y2);
                         ctx.lineTo(x3,y3);
                         ctx.stroke();
                }
                break;
            case "circle" : 
                  var x1 = document.forms["form4"]["x1"].value;
                  var y1 = document.forms["form4"]["y1"].value;
                  var raduis = document.forms["form4"]["raduis"].value;
                if(isfilled){
                     ctx.fillStyle = selectedcolor;
                     ctx.beginPath();
                     ctx.arc(x1, y1, raduis, 0, 2 * Math.PI);
                     ctx.fill();
                }
                else{
                     ctx.strokeStyle = selectedcolor;
                     ctx.beginPath();
                     ctx.arc(x1, y1, raduis, 0, 2 * Math.PI);
                     ctx.stroke();
                }
                
                break;
                
                    
        }
        
      
    }
       
       
       
   