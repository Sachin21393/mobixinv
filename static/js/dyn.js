async function runOnLoad() {
    const response = await fetch("/list/user");
    const data = await response.json();
    var listHTML = "";
    data.forEach(element => {
      listHTML += `
      <div class="overflow-auto">
      <table class="table table-bordered table-dark ">
      <thead>
        <tr>
     
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">Aadharno</th>
          <th scope="col">Phone No</th>
          <th scope="col">Vaccine</th>
          <th scope="col">Age</th>
          <th scope="col">Area name</th>




        </tr>
      </thead>
      <tbody>
        <tr>
     
          <td>${element.fname}</td>
          <td>${element.email}</td>
          <td>${element.Aadharno}</td>
          <td>${element.phoneno}</td>
          <td>${element.dose}</td>
          <td>${element.age}</td>
          <td>${element.area}</td>




        </tr>
      
      </tbody>
    </table>
    </div>
          
        `;
    });
  
    document.getElementById("myUL").innerHTML = listHTML;
  }
  