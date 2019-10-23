// create profile form validation
function validateUserProfile(){
    var nationalId  = document.getElementById("inputBox");
    var date_of_birth = document.getElementById("dateofbirth");
    var spouse_id = document.getElementById("spouseId");
    var spouse_phone = document.getElementById("spousephone");
    var postal_code = document.getElementById("postalcode");
    var mobile = document.getElementById("Mobile");
    var residential = document.getElementById("residental");
    var dependants = document.getElementById("dependant");
    var country = document.getElementById("country");
    var estate = document.getElementById("input#estate");
    var block_no =document.getElementById("input#Block");
    var street =document.getElementById("input#Street");
    var residential_status=document.getElementById("select#Residential");
    var town =document.getElementById("input#town");
    var educationa_level=document.getElementById("select#educationlevel");
    var years_at_resident=document.getElementById("residentalnumber")
    var Telephone=document.getElementById("telephonehome")
    var postal_address=document.getElementById("input#postaladdress")
    var name_of_spouse =document.getElementById("input#spousename")
    var marital_status =document.getElementById("select#Martal")
    var gender=document.getElementById("select#gender")
    var nationality=document.getElementById("input#nationality")
  
    var invalidChars = [
      "-",
      "+",
      "e",
    ];
    var invalidCharPhone = [
      "-",
      "e",
    ]
    
  nationalId.addEventListener("input",function(){
      this.value = this.value.replace(/[e\+\-]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
   
    });
  
    nationalId.addEventListener("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });
  
    spouse_id.addEventListener("input",function(e){
      this.value = this.value.replace(/[e\+\-]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
    });
  
    spouse_id.addEventListener("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });
  
    spouse_phone.addEventListener("input",function(){
      this.value = this.value.replace(/[e]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
    });
  
    spouse_phone.addEventListener("keydown", function(e) {
      if (invalidCharPhone.includes(e.key)) {
        e.preventDefault();
      }
    });
  
    mobile.addEventListener("input",function(){
      this.value = this.value.replace(/[e]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
    });
    mobile.addEventListener("keydown", function(e) {
      if (invalidCharPhone.includes(e.key)) {
        e.preventDefault();
      }
    });
  
  
    years_at_resident.addEventListener("input",function(){
      this.value = this.value.replace(/[e\+\-]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
    });
    years_at_resident.addEventListener("keydown", function(e) {
      if (invalidCharPhone.includes(e.key)) {
        e.preventDefault();
      }
    });
  
  
  
    telephonehome.addEventListener("input",function(){
      this.value = this.value.replace(/[e\+\-]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
    });
    telephonehome.addEventListener("keydown", function(e) {
      if (invalidCharPhone.includes(e.key)) {
        e.preventDefault();
      }
    });
  
    dependants.addEventListener("input",function(){
      this.value = this.value.replace(/[e\+\-]/gi, "");
      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)
    });
    dependants.addEventListener("keydown", function(e) {
      if (invalidCharPhone.includes(e.key)) {
        e.preventDefault();
      }
    });
  
  }