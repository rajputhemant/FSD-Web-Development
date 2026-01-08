document.getElementById("btn1").addEventListener("click", function () {

    let personName = document.getElementById("PersonName").value;
    let contactNumber = document.getElementById("ContactNumber").value;
    let email = document.getElementById("Email").value;
    let qualification = document.getElementById("Qualification").value;
    let college = document.getElementById("CollegeSchool").value;
    let year = document.querySelector(".Year").value;
    let branch = document.getElementById("Branch").value;
    let sourceInfo = document.querySelector(".SourceInformation").value;
    let executive = document.querySelector(".NameOfExecutive").value;

    
    let checkedCourses = [];
    document.querySelectorAll("input[name='choose']:checked").forEach((item) => {
      checkedCourses.push(item.nextSibling.textContent.trim());
    });

    
    let outputData = {
      Person_Name: personName,
      Contact_Number: contactNumber,
      Email: email,
      Qualification: qualification,
      College_School: college,
      Year: year,
      Branch: branch,
      Selected_Courses: checkedCourses,
      Source_of_Information: sourceInfo,
      Name_of_Executive: executive
    };

    console.log("=== Form Data Output ===");
    console.log(outputData);
  });

