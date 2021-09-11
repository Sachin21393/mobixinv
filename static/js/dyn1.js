async function runOnLoad() {
    const response = await fetch("/list/listt");
    const data = await response.json();
    var listHTML = "";
    data.forEach(element => {
      listHTML += `
      <div class="overflow-auto">
      <table class="table table-bordered table-dark ">
      <thead>
        <tr>
     
        
          <a href="/agform"> <th scope="col">email</th></a>
     
          <th scope="col">Area name</th>




        </tr>
      </thead>
      <tbody>
        <tr>
     
    
          <a href="/agform"><td>${element.email}</td></a>
       <td>${element.area}</td>
          




        </tr>
      
      </tbody>
    </table>
    </div>
          
        `;
    });
  
    document.getElementById("myUL").innerHTML = listHTML;
  }
  