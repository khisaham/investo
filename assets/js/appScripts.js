

$(document).ready(function (){
includeHTML()
validateClientLogin()
validateClientRegistration()
validatePersonalInfo()
validateProfile()
$('#logging-out').click(function (event){
event.preventDefault()
$.jStorage.deleteKey('data')
$(location).attr('href','./../login.html')
})})
function includeHTML(){
var z, i, elmnt, file, xhttp;
z = document.getElementsByTagName("*");
for (i = 0; i < z.length; i++) {
elmnt = z[i];

file = elmnt.getAttribute("include-html");
if (file) {
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4) {
if (this.status == 200) {elmnt.innerHTML = this.responseText;}
if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
elmnt.removeAttribute("include-html");
includeHTML();
}} 
xhttp.open("GET", file, true);
xhttp.send();
return;
}}
var user = JSON.parse( localStorage.getItem("user"));
if(user!== null)
{
  let usernames = Array.from(user.data.user.names);
$("span#user-name").html(usernames[0]);

if(user.data.user.image_url == "undefined"){

$("span#user_logo").html("<img class='rounded-circle' src=../img/placeholder-thumb.jpg width='50' heigh ='50' alt='?' id='userimg'><span class='status online'></span>")
}
if(user.message === "user_have_no_profile")
{
  $("li#appsMe").fadeOut();
$("a#editpro").css("display","none");
// $("div#solid-rounded-justified-tab2 ").css("display","none");
// $("div#solid-rounded-justified-tab3").css("display","none");
$("div#solid-rounded-justified-tab1").html('<div class=" alert alert-danger alert-dismissible fade show" role="alert">\n'+
'<strong><h2>Welcome '+user.data.user.names+'</h2></strong> <p> Before You make an Application we encourage you to Create a Profile first.</p>\n'+
'</div>');
$("div#solid-rounded-justified-tab2").html('<div class=" alert alert-danger alert-dismissible fade show" role="alert">\n'+
'<strong><h2>Welcome '+user.data.user.names+'</h2></strong> <p> Before You make an Application we encourage you to Create a Profile first.</p>\n'+
'</div>');
$("div#solid-rounded-justified-tab3").html('<div class=" alert alert-danger alert-dismissible fade show" role="alert">\n'+
'<strong><h2>Welcome '+user.data.user.names+'</h2></strong> <p> Before You make an Application we encourage you to Create a Profile first.</p>\n'+
'</div>');
$("div#profilesms").html("<div class='d-flex flex-row-reverse bd-highlight'> <img src='../assets/img/hand-finger-pointing-down.png'  id='myindicator' /></div>");

function blinker() {
$('div#profilesms').fadeOut(500);

}
$("ul#myTabsNav").children().last().click(function(){
$(".tab-content").show();
setInterval(blinker, 100);
})
}
else{
$("ul#myTabsNav").children().last().empty();
$("li#appsMe").fadeIn();
}
}
else{
return true;
}


$("a#logout").click(function(){
localStorage.clear();
window.location.replace("./../login.html");
})


// TRY REPLACE STATE
// $('div#sidebar-menu').on("click","a",function () {
//   $(this).addClass("Activated");
//   var $this = $(this),
//     url = $this.attr("href"),
//     title = $this.text();
//     console.log(url);
//     $(".page-wrapper").load(url)
//   return false;
// });


//   var load = function (url) {
//     $.get(url).done(function (data) {
//       $(".page-wrapper").html(data);
//     })
//   };

// $(document).on('click', 'a#myTesteerBtn', function (e) {

//   $(this).addClass("Activated");
//   var $this = $(this),
//     url = $this.attr("href"),
//     title = $this.text();
//   history.pushState({url: url,title: title}, title, url);
//   document.title = title;
//   e.preventDefault();
//   load(url);
//   e.preventDefault();
// });



// END OF REPLACE STATE



// making maobile nav

$("a#mobile_btn ").on("click","i.fa.fa-bars",function(){
  $(".overlay").fadeIn();
  $("a#mobile_btn").html('<i class="fa fa-times" aria-hidden="true">')
});
$("a#mobile_btn ").on("click","i.fa.fa-times",function(){
  console.log("great")
  $("a#mobile_btn").html('<i class="fa fa-bars" aria-hidden="true">');
  $(".overlay").fadeOut();
})
}





function validateClientLogin(){
var email    = "";
var password = "";
//validate E-mail
$('#email-login').keyup(function (){
$('#email-validation-login').html('');
email = $(this).val()
var re=new RegExp();
re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if((email.length  < 2) || re.test(email) != true){
$('#email-validation-login').html('*Enter Valid Email Address');
email = ""
}else{
$('#email-validation-login').html('');
}

})
//validate Password
$('#password-login').keyup(function (){
$('#password-validation-login').html('');
password = $(this).val()
if((password.length  < 6 && password.length  > 0)){
$('#password-validation-login').html('*Enter at least 6 characters minumun');
password = ""
}else{
$('#password-validation-login').html('');
}
})
$('#login_client').click(function (){
if(!email.length <1 ){
if(!password.length <1 ){
const data = {
'email':email,
'password':password,
}
$(location).attr('href','index')
}else{
$('#password-validation-login').html('*Enter at least 6 characters minumun');
}
}else{
$('#email-validation-login').html('*Enter Valid Email Address');
}
})
}




// client registration form validation
function validateClientRegistration(){
var email           = "";
var first_name      = "";
var last_name       = "";
var password        = "";
var confirm_password= "";
//validate Email
$('#email').keyup(function (){
$('#email-validation').html('');
email = $(this).val()
var re=new RegExp();
re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if((email.length  < 2) || re.test(email) != true){
$('#email-validation').html('*Enter Valid Email Address');
email = ""
}else{
$('#email-validation').html('');
}

})
//validate First Name
$('#first_name').keyup(function (){
$('#first_name-validation').html('');
first_name = $(this).val()
if((first_name.length  < 3 && first_name.length  > 0)){
$('#first_name-validation').html('*Enter at least 3 characters minumun');
first_name =""
}else{
$('#first_name-validation').html('');
}
})
//validate LastName
$('#last_name').keyup(function (){
$('#last_name-validation').html('');
last_name = $(this).val()
if((last_name.length  < 3 && last_name.length  > 0)){
$('#last_name-validation').html('*Enter at least 3 characters minumun');
last_name = ""
}else{
$('#last_name-validation').html('');

}
})
//validate Password
$('#password').keyup(function (){
$('#password-validation').html('');
password = $(this).val()
if((password.length  < 6 && password.length  > 0)){
$('#password-validation').html('*Enter at least 6 characters minumun');
password = ""
}else{
$('#password-validation').html('');
}
})
$('#confirm_password').keyup(function (){
$('#confirm_password-validation').html('');
confirm_password = $(this).val()
if(confirm_password == password){
$('#confirm_password-validation').html('Password matched');
$('#confirm_password-validation').css('color', '#58D68D');
}else{
confirm_password = ""
$('#confirm_password-validation').html('Password do not matched');
$('#confirm_password-validation').css('color', 'orange');
}
})
$('#register').click(function (event){

$('#email-validation').html('');
if(first_name != ""){

$('#first_name-validation').html('');
if(last_name != ""){
if(email != ""){
$('#last_name-validation').html('');
if(password != ""){
$('#password-validation').html('');
if(confirm_password != ""){
$('#confirm_password-validation').html('');

const data = {
  'names': first_name + " " +last_name,
  'email': email,
  'password':password,
  'password_confirmation': confirm_password,
}
$.ajax({
url:"http://78.141.202.96/ewawe/public/api/registerclient",
dataType:"json",
type:"POST",
data:data,
beforeSend:function(){
  // $("#wait").fadeIn();
},
success:function(data){
  if(data.message==="success"){
    $("div#msgnote").html(' <div class="alert alert-success alert-dismissible fade show" role="alert">\n'+
                            '<strong>Great </strong> Successfull Registered!\n'+
                        '</div>');

  setTimeout(()=>{
    window.location.href = "./../login.html"
  },2000);
  return;
}
else{
  $("div#msgnote").html(' <div class="alert alert-warning alert-dismissible fade show" role="alert">\n'+
  '<strong> </strong> '+data.message+'!\n'+
  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"\n'+
   ' <span aria-hidden="true">&times;</span\n'+
  '</button\n'+
'</div>');

return;
}},complete:function(){
  // $("#wait").fadeOut();
}
})
}else{
$('#confirm_password-validation').html('Password do not matched');
$('#confirm_password-validation').css('color', 'orange');
}
}else{
$('#password-validation').html('*Enter at least 6 characters minumun');
}
}else{
$('#email-validation').html('*invald Email Address');
}
}else{
$('#last_name-validation').html('*Enter at least 3 characters minumun');
}
}else{
$('#first_name-validation').html('*Enter at least 3 characters minumun');
}

});


// end of clcick event listener


// make enter button to work

window.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    $('#email-validation').html('');
    if(first_name != ""){
    $('#first_name-validation').html('');
    if(last_name != ""){
    if(email != ""){
    $('#last_name-validation').html('');
    if(password != ""){
    $('#password-validation').html('');
    if(confirm_password != ""){
    $('#confirm_password-validation').html('');
    
    const data = {
      'names': first_name + " " +last_name,
      'email': email,
      'password':password,
      'password_confirmation': confirm_password,
    }
    $.ajax({
    url:"http://78.141.202.96/ewawe/public/api/registerclient",
    dataType:"json",
    type:"POST",
    data:data,
    beforeSend:function(){
      // $("#wait").fadeIn();
    },
    success:function(data){
      if(data.message==="success"){
        $("div#msgnote").html(' <div class="alert alert-success alert-dismissible fade show" role="alert">\n'+
                                '<strong>Great </strong> Successfull Registered!\n'+
                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"\n'+
                                 ' <span aria-hidden="true">&times;</span\n'+
                                '</button\n'+
                            '</div>');
    
      setTimeout(()=>{
        window.location.href = "./../login.html"
      },2000);
      return;
    }
    else{
      $("div#msgnote").html(' <div class="alert alert-warning alert-dismissible fade show" role="alert">\n'+
      '<strong> </strong> '+data.message+'!\n'+
    '</div>');
    
    return;
    }},complete:function(){
      // $("#wait").fadeOut();
    }
    })
    }else{
    $('#confirm_password-validation').html('Password do not matched');
    $('#confirm_password-validation').css('color', 'orange');
    }
    }else{
    $('#password-validation').html('*Enter at least 6 characters minumun');
    }
    }else{
    $('#email-validation').html('*invald Email Address');
    }
    }else{
    $('#last_name-validation').html('*Enter at least 3 characters minumun');
    }
    }else{
    $('#first_name-validation').html('*Enter at least 3 characters minumun');
    }

  }
})

// end of making enter to work register
}

// enf of client registration validation form






// end of profile client validation form






var image_name    = "";
var FileUploadPath= "";
function ValidateFileUpload() {
var fuData = document.getElementById('fileChooser');
FileUploadPath = fuData.value;

//To check if user upload any file
if (FileUploadPath == '') {
alert("Please upload an image");

} else {

var Extension = FileUploadPath.substring(
FileUploadPath.lastIndexOf('.') + 1).toLowerCase();

//The file uploaded is an image

if (Extension == "gif" || Extension == "png" || Extension == "bmp"
  || Extension == "jpeg" || Extension == "jpg") {

// To Display
if (fuData.files && fuData.files[0]) {
var reader = new FileReader();
image_name = fuData.files[0].name;
reader.onload = function(e) {
$('#image').attr('src', e.target.result);
}
reader.readAsDataURL(fuData.files[0]);
}

} //The file upload is NOT an image
else {
alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");
}
}
}
function validatePersonalInfo(){

var nid  ="" 
var nationality        = "" 
var date_of_birth      = ""  
var gender             = ""
var image_url          = ""  
var marital_status     = ""  
var spouse_id          = ""  
var name_of_spouse     = ""  
var spouse_phone       = ""  
var postal_address     = ""  
var postal_code        = ""  
var home_phone         = "" 
var mobile             = ""     
var email              = ""  
var residential_address= ""  
var years_at_resident  = ""  
var nbr_of_dependant   = ""  
var educationa_level   = ""  
var country            = ""  
var town               = ""     
var estate             = ""  
var street             = ""  
var block_no           = ""  
var residential_status = ""
var isAllValidated     = false;

//validate NID
$('#nid').keyup(function (){
$('#nid-validation').html('');
nid = $(this).val()
if((nid.length  < 6  && nid.length  > 0) || nid.length >16){
$('#nid-validation').html('*invald National ID or Passport');
nid = ""
}else{
$('#nid-validation').html('');

}
})
//validate nationality 
$('#nationality').keyup(function (){
$('#nationality-validation').html('');
nationality = $(this).val()
if((nationality.length  < 2) ){
$('#nationality-validation').html('*Enter Valid Nationality');
nationality = ""
}else{
$('#nationality-validation').html('');
}
})

$('#date_of_birth').keyup(function (){
$('#date_of_birth-validation').html('');
date_of_birth = $(this).val()
if((date_of_birth.length  == 0) ){
$('#date_of_birth-validation').html('*Select Valid Date of Birth');
date_of_birth = ""
}else{
$('#date_of_birth-validation').html('');
}
})

$('#date_of_birth').keyup(function (){
$('#date_of_birth-validation').html('');
date_of_birth = $(this).val()
if((date_of_birth.length  == 0) ){
$('#date_of_birth-validation').html('*Select Valid Date of Birth');
date_of_birth = ""
}else{
$('#date_of_birth-validation').html('');
}
})
$('#gender').change('ifChanged',function(){
gender = $(this).val()
if(gender == "none"){
$('#gender-validation').html('*Choose Your Gender');
gender = ""
}else{
$('#gender-validation').html('');

}
})
$('#marital_status').change('ifChanged',function(){
marital_status = $(this).val()
if(marital_status == "none"){
$('#marital_status-validation').html('*Choose Your Marital Status');
marital_status = ""
}else{
$('#marital_status-validation').html('');

}
})
$('#name_of_spouse').keyup(function (){
$('#name_of_spouse-validation').html('');
name_of_spouse = $(this).val()
if((name_of_spouse.length  < 3) ){
$('#name_of_spouse-validation').html('*Enter Valid Spause Name');
name_of_spouse = ""
}else{
$('#name_of_spouse-validation').html('');
}
})
//validate Spouse NID
$('#spouse_id').keyup(function (){
$('#spouse_id-validation').html('');
spouse_id = $(this).val()
if((spouse_id.length  < 6  && spouse_id.length  > 0) || spouse_id.length >20){
$('#spouse_id-validation').html('*invald National ID or Passport');
spouse_id = ""
}else{
$('#spouse_id-validation').html('');

}
})
$('#spouse_phone').keyup(function (){
$('#spouse_phone-validation').html('');
spouse_phone = $(this).val()
if((spouse_phone.length  < 2) ){
$('#spouse_phone-validation').html('*Enter Valid Spouse Telephone Number');
spouse_phone = ""
}else{
$('#spouse_phone-validation').html('');
}
})
$('#postal_address').keyup(function (){
$('#postal_address-validation').html('');
postal_address = $(this).val()
if((postal_address.length  < 2) ){
$('#postal_address-validation').html('*Enter Valid Postal Address');
postal_address = ""
}else{
$('#postal_address-validation').html('');
}
})
//Postal Code
$('#postal_code').keyup(function (){
$('#postal_code-validation').html('');
postal_code = $(this).val()
if((postal_code.length  < 1) ){
$('#postal_code-validation').html('*Enter Valid Postal Code');
postal_code = ""
}else{
$('#postal_code-validation').html('');
}
})
//validate Telephone Home
$('#home_phone').keyup(function (){
$('#home_phone-validation').html('');
home_phone = $(this).val()
if((home_phone.length  < 2) ){
$('#home_phone-validation').html('*Enter Valid Home Telephone');
home_phone = ""
}else{
$('#home_phone-validation').html('');
}
})
//validate Mobile Number
$('#mobile').keyup(function (){
$('#mobile-validation').html('');
mobile = $(this).val()
if((mobile.length  < 2) ){
$('#mobile-validation').html('*Enter Valid mobile number');
mobile = ""
}else{
$('#mobile-validation').html('');
}
})
//validate Email
$('#email').keyup(function (){
$('#email-validation').html('');
email = $(this).val()
var re=new RegExp();
re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if((email.length  < 2) || re.test(email) != true){
$('#email-validation').html('*Enter Valid Email Address');
email = ""
}else{
$('#email-validation').html('');
}

})
//validate Present residential address
$('#residential_address').keyup(function (){
$('#residential_address-validation').html('');
residential_address = $(this).val()
if((residential_address.length  < 2) ){
$('#residential_address-validation').html('*Enter Valid Present Residential Address');
residential_address = ""
}else{
$('#residential_address-validation').html('');
}
})
//validate Number of years at present physical address
$('#years_at_resident').keyup(function (){
$('#years_at_resident-validation').html('');
years_at_resident = $(this).val()

})
//validate number of dependants
$('#nbr_of_dependant').keyup(function (){
$('#nbr_of_dependant-validation').html('');
nbr_of_dependant = $(this).val()
if((nbr_of_dependant.length  < 2) ){
$('#nbr_of_dependant-validation').html('*Enter Valid Number of dependants');
nbr_of_dependant = ""
}else{
$('#nbr_of_dependant-validation').html('');
}
})
//validate Education Level
$('#educationa_level').keyup(function (){
$('#educationa_level-validation').html('');
educationa_level = $(this).val()
if((educationa_level.length  < 2) ){
$('#educationa_level-validation').html('*Enter Valid Educational Level');
educationa_level = ""
}else{
$('#educationa_level-validation').html('');
}
})
//validate Country
$('#country').keyup(function (){
$('#country-validation').html('');
country = $(this).val()
if((country.length  < 2) ){
$('#country-validation').html('*Enter Valid country');
country = ""
}else{
$('#country-validation').html('');
}
})
//validate Town
$('#town').keyup(function (){
$('#town-validation').html('');
town = $(this).val()
if((town.length  < 2) ){
$('#town-validation').html('*Enter Valid Town');
town = ""
}else{
$('#town-validation').html('');
}
})
//validate Estate
$('#estate').keyup(function (){
$('#estate-validation').html('');
estate = $(this).val()
if((estate.length  < 2) ){
$('#estate-validation').html('*Enter Valid Estate');
estate = ""
}else{
$('#estate-validation').html('');
}
})
//validate Street
$('#street').keyup(function (){
$('#street-validation').html('');
street = $(this).val()
if((street.length  < 1) ){
$('#street-validation').html('*Enter Valid street');
street = ""
}else{
$('#street-validation').html('');
}
})
//validate Block No
$('#block_no').keyup(function (){
$('#block_no-validation').html('');
block_no = $(this).val()
if((block_no.length  < 2) ){
$('#block_no-validation').html('*Enter Valid Block No');
block_no = ""
}else{
$('#block_no-validation').html('');
}
})
//validate Residential Status Owned
$('#residential_status').change('ifChanged',function(){
residential_status = $(this).val()
if(residential_status == "none"){
$('#residential_status-validation').html('*Choose Your Residential Status');
residential_status = ""
}else{
$('#residential_status-validation').html('');

}
})
//alert("working");
$('#save_changes').on('click',function (){
if(!FileUploadPath.length <1){
image_url = FileUploadPath
}
const data = {
'client_nationalId'  : nid, 
'nationality'        : nationality, 
'date_of_birth'      : date_of_birth, 
'gender'             : gender, 
'image_name'         : image_name, 
'image_url'          : image_url, 
'marital_status'     : marital_status, 
'spouse_id'          : spouse_id, 
'name_of_spouse'     : name_of_spouse, 
'spouse_phone'       : spouse_phone, 
'postal_address'     : postal_address, 
'postal_code'        : postal_code, 
'home_phone'         : home_phone, 
'mobile'             : mobile,
'email'              : email, 
'residential_address': residential_address, 
'years_at_resident'  : years_at_resident, 
'nbr_of_dependant'   : nbr_of_dependant, 
'educationa_level'   : educationa_level, 
'country'            : country, 
'town'               : town,
'estate'             : estate, 
'street'             : street, 
'block_no'           : block_no, 
'residential_status' : residential_status

};
$(location).attr('href','employment_info.html')
})

}

function validateEmployementInfo(){
$("input[name='employment']:checked").change('ifChanged', function(){
alert($(this).val())
})
$('emp_save_changes').click(function (){
//employement info
var nationalId          = ""
var status              = ""
var employer_name       = ""
var station             = ""
var date_of_employement = ""
var staff_no            = ""
var department          = "" 
var terms_of_employement= "" 
var date_of_expiry      = "" 
var gross_salary        = ""
var net_salary          = ""
var physical_address    = ""
var street              = "" 
var block_no            = "" 
var postal_address      = "" 
var postal_code         = "" 
var town                = ""
var country             = ""
var office_tel          = ""
var fax_no              = "" 
var website             = ""
var email               = ""

//relative informations
var client_id        = "" 
var relative_name    = ""  
var idnumber_one     = ""  
var email_one        = ""  
var no_relative_names= ""  
var idnumber_two     = ""  
var email_two        = "" 

const data ={
'nationalId'          : nationalId,
'status'              : status, 
'employer_name'       : employer_name,
'station'             : station,
'date_of_employement' : date_of_employement, 
'staff_no'            : staff_no,
'department'          : department,
'terms_of_employement': terms_of_employement,
'date_of_expiry'      : date_of_expiry,
'gross_salary'        : gross_salary,
'net_salary'          : net_salary,
'physical_address'    : physical_address, 
'street'              : street, 
'block_no'            : block_no, 
'postal_address'      : postal_address, 
'postal_code'         : postal_code,
'town'                : town, 
'country'             : country,
'office_tel'          : office_tel, 
'fax_no'              : fax_no, 
'website'             : website,
'email'               : email,
};

})
}


function validateProfile(){
  let nationalIdNumber = $("input#inputBoxifds").val();
let clientImage = $("input#image_name").val();
let mobilenUmber = $("input#Mobile").val();
let gender = $("select#gender").val();
let dob= $("input#dateofbirth").val();
let nationality = $("select#Nationallity").val();
let nYpresent =$("input#residentalnumber").val();
let dependantNumber = $("input#dependant").val();
//  $("input#Register-user").click(function(){
//   if(nationalIdNumber == "" || clientImage == "" || mobilenUmber == "" || gender == "" || dob == "" || nationality == "" || nYpresent == "" || dependantNumber ==""){
//     $("div#warnEmp").fadeIn();
//     setTimeout(()=>{
//       $("div#warnEmp").fadeOut();
//     },1500)
  
//     return false;
//     }
//     else{
//     return true;
//     }
//  }
//  )
}
