fetch("student.json")
.then(function(response){
   document.getElementById("data-output").value = JSON.stringify(response);
   return response.json();
})
.then(function(students){
   let placeholder = document.querySelector("#data-output");
   let output = "";
   for(let student of students){
      output += `
         <tr>
            <td> <img src='${student.PersonImage}' alt='Profile Image'> </td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.gender}</td>
             <td>${student.birth}</td>
                <td>${student.department}</td>
                   <td>${student.Languages}</td>
                    <td>${student.ambition}</td>
                     <td>${student.cgpa}</td>
                      <td>${student.profile}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = output;
});


