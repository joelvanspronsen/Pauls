document.querySelector("html").addEventListener("mouseover" , setLetter);

function setLetter(){ let search = document.getElementById("letter").value.toLowerCase();
    if (search == "romans"){
        document.getElementById("find").href = "romans.html";
    
     } else if  (search == "galatians"){
        document.getElementById("find").href = "galatians.html";
       
      } else if  (search == "thessalonians 1"){
            document.getElementById("find").href = "thess1.html";
        
      }else if (search == "thessalonians 2"){
                document.getElementById("find").href = "thess2.html";
     
            
      
      }
            

      
    }