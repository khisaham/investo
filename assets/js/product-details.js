
var data = JSON.parse(localStorage.getItem("propertData"));
var description_property = data.data.property;
var dataImg = data.data.images[0].image_url;
var stats = description_property.statut;
var statuss;

$(document).ready(function(){
var jwt = localStorage.getItem("jwt");

if(stats ==1 ){
    statuss = "Available";
}
else if(stats == 3){
    statuss = "in deal";
}
else if(stats == 99){
    statuss = "Sold out";
}


// switch(description_property.statut){
// case '1':
// description_property.statut="Available";

// break;
// case '2':
// description_property.statut="In Deals";

// break;
// case '99':
// description_property.statut="Sold Out";
// break;
// default:
// console.log("No Status Remaining");

// }


// console.log(stat);

$.ajax({
url:"http://78.141.202.96/ewawe/public/api/returnBanks",
dataType:"json",
type:"GET",
beforeSend : function(xhr) {
xhr.setRequestHeader('Authorization', 'Bearer ' + jwt); 
$("#wait").css("display", "block");
},
success:function(data){
var Loans= data.data;
var finacancials = data.data;
for(let financial in finacancials){
// console.log(finacancials[financial].name);
$("select#allFinancials").append('<option value='+finacancials[financial].id+' data-id='+finacancials[financial].id+' >'+finacancials[financial].name+'</option>');


}
},complete:function(){
$("#wait").css("display", "none");
}});


function thousands_separators(num)
{
var num_parts = num.toString().split(".");
num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return num_parts.join(".");
}
// RETURN LAONS BY FIANCNIALS
$('select#allFinancials').on('change', function() {
var ids = this.value;
let myIdz = {
financialid:ids
}
$("#loans").empty();
$.ajax({
url:"http://78.141.202.96/ewawe/public/api/loanByFianc",
data:myIdz,
type:"POST",
dataType:"JSON",
beforeSend : function(xhr) {
xhr.setRequestHeader('Authorization', 'Bearer ' + jwt); 
$("#wait").css("display", "block");
},
success:function(data){
// console.log(data.data);
var loansByFinancial=  data.data;
for(let loan in loansByFinancial){
$("#loans").append("<tr>\n"+
"<td><input type=\"radio\" name=\"radio\" data-id=\""+loansByFinancial[loan].id+"\" id=\"type-loan\" class=\"form-radio\"></td>\n"+
"<td>"+loansByFinancial[loan].type+"</td>\n"+
// "<td><img src=\""+loansByFinancial[loan].image_url+"\" / id=\"provider-icon\"></td>\n"+
"<td>"+loansByFinancial[loan].monthlyCost+" %</td>\n"+
"<td>"+loansByFinancial[loan].interestRate+" %</td>\n"+
"<td>Diaspora Homes</td>\n"+
"<td>"+loansByFinancial[loan].maxLtv+" %</td>\n"+
"<td>"+thousands_separators(loansByFinancial[loan].overallCost)+" RWF</td>\n"+

"</tr>")
}

},
complete:function(){
$("#wait").css("display", "none");
}
})
});

// END OF RETURNIG LOANS BY FINANCIAL

function thousands_separators(num)
{
var num_parts = num.toString().split(".");
num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return num_parts.join(".");
}


var jwt = localStorage.getItem("jwt");
{/* <div class=\"col-md-6 col-sm-12\">\n"+
"<div class=\"product-view\">\n"+
"<div class=\"proimage-wrap\">\n"+
"<div class=\"pro-image\" id=\"pro_popup\">\n"+
"<a href=\""+dataImg+"\">\n"+
" <img class=\"img-fluid\" src=\""+dataImg+"\" alt=\"\" id=\"myImg-detail\">\n"+
"</a>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+ */}
$("#header-property").html("<div class=\"col-md-12 col-sm-12\">\n"+
"<div class=\"product-info\">\n"+

"<div class=\"list-group\">\n"+
"<a href=\"#\" class=\"list-group-item list-group-item-action \">\n"+
" <div class=\"d-flex w-100 justify-content-between\">\n"+
"<h4 class=\"mb-1\">Property Type</h4>\n"+
"<h4 class=\"mb-1\">"+description_property.type_of_property+"</h4>\n"+
"</div>\n"+
" <div class=\"d-flex w-100 justify-content-between\">\n"+
"<h4 class=\"mb-1\">Property Status:</h4>\n"+
"<small><p class=\"product_price\"><span class=\"badge badge-success-border\" id='status_now'>"+statuss+"</span></p></small>\n"+
"</div>\n"+
" <div class=\"d-flex w-100 justify-content-between\">\n"+
"<h4>Address : </h4>\n"+
"<h4 class=\"mb-1\">"+description_property.address+"</h4>\n"+
"</div>\n"+
"</a>\n"+
"<a href=\"#\" class=\"list-group-item list-group-item-action\">\n"+
"<div class=\"d-flex w-100 justify-content-between\">\n"+
"<h5 class=\"mb-1\">Property Price</h5>\n"+
"<small class=\"text-muted\"></small>\n"+
"</div>\n"+
"<p class=\"mb-1\"><p class=\"product_price\">(RWF) "+thousands_separators(description_property.price)+" </p>\n"+
"</a>\n"+
"<a href=\"#\" class=\"list-group-item list-group-item-action\">\n"+
"<div class=\"d-flex w-100 justify-content-between\">\n"+
"<h5 class=\"mb-1\">Property Information</h5>\n"+
"<small class=\"text-muted\"></small>\n"+
"</div>\n"+

"<div class=\"col-md-12\">\n"+
"<div class=\"row\">\n"+
"<div class=\"col-md\">\n"+
" <p>Bathrooms:</p>\n"+
"</div>\n"+
"<div class=\"col-md\">\n"+
"<p>"+description_property.bathrooms+"</p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+

"<div class=\"col-md-12\">\n"+
"<div class=\"row\">\n"+
"<div class=\"col-md\">\n"+
" <p>Bedrroms:</p>\n"+
"</div>\n"+
"<div class=\"col-md\">\n"+
"<p>"+description_property.bedroom+"</p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+


"<div class=\"col-md-12\">\n"+
"<div class=\"row\">\n"+
"<div class=\"col-md\">\n"+
" <p>Street number:</p>\n"+
"</div>\n"+
"<div class=\"col-md\">\n"+
"<p>"+description_property.street_No+"</p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+

"<div class=\"col-md-12\">\n"+
"<div class=\"row\">\n"+
"<div class=\"col-md\">\n"+
" <p>Gate number:</p>\n"+
"</div>\n"+
"<div class=\"col-md\">\n"+
"<p>"+description_property.gate_number+"</p>\n"+
"</div>\n"+



"<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"applynow\">\n"+
"<i class=\"fa fa-thumbs-up\"></i> Apply\n"+
"</button>\n"+
"</div>\n"+
"<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id=\"chooseLoan\">\n"+
"<strong>Please </strong> Please Choose a Loan First before click to apply\n"+
"</div>\n"+
"</div>\n"+
"</div>");


var props = document.querySelector("span#status_now");
if(props!== undefined){
if(props.textContent === "Available"){
$(props).css("color","green");
}
else if(props.textContent === "In Deals"){
$(props).css("color","orange");
}
else{
$(props).css("color","red"); 
}
}
else{
return false;
}



var images = data.data.images;
for(let image in images){
$("#lightgallery").append('<div class=" col-md-4 col-sm-12"><a class="example-image-link" href='+images[image].image_url+' data-lightbox="Property Image Gallery"><img class="example-image" src='+images[image].image_url+' alt=""/ id="garellyImg"></a>')
}
var user = JSON.parse(localStorage.getItem("user"));
var userId = user.data.user.client_nationalId;
$("#loans").on("change","input#type-loan",function(){
var ids = $(this).data("id");
var loanId = localStorage.getItem("laondId");
var propertyId = localStorage.getItem("propertyItem");
var dataToApply = {
nationalId:userId,
propertyId:propertyId,
loanId:ids
}
Myidz.splice(0,1,dataToApply) 
})
$("button#gotToEmpl").click(function(){
window.location.href="employment_info.html"
})
});
var Myidz = [];
var jwt = localStorage.getItem("jwt");
$("#header-property").on("click","button#applynow",function(){
let finance = $("select#allFinancials").val();
if(Myidz.length < 1 || finance === 'choose Financial'){
$("div#chooseLoan").fadeIn();
setTimeout(()=>{
$("div#chooseLoan").fadeOut();
},1500);
}
else{
$.ajax({
url:"http://78.141.202.96/ewawe/public/api/createApplication",
data:Myidz[0],
type:"POST",
beforeSend : function(xhr) {
xhr.setRequestHeader('Authorization', 'Bearer ' + jwt); 
$("#wait").css("display", "block");
},
success:function(data){
localStorage.setItem("ApplicationData",JSON.stringify(data.message));
if(data.message === 'create your employement details first'){
$("#msgs").html('<div class="alert alert-warning alert-dismissible fade show" role="alert" >\n'+
'<strong>'+data.message+'</strong>\n'+
'<button class="btn btn-primary" id="emp-detailsBtn"><a href="employment_info.html" >Create Employment Details</a></button>\n'+
'</div>');
}
else{
$("#msgs").html('<div class="col-md-12"><div class="alert alert-success alert-dismissible fade show" role="alert" >\n'+
'<strong>'+data.message+'</strong>\n'+
'</div>\n'+
'</div>');
setTimeout(()=>{
window.location.href="application";
},1500);

}

},error: function(xhr, resp, text) {
console.log(xhr, resp, text);
}
,complete:function(){
$("#wait").css("display", "none");}
})}})