<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Apply For a Loan</title>
  <!-- Custom fonts for this theme -->
  <link href="styles/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 
    <script src="assets/sweetalert2.min.js"></script>
     <link rel="stylesheet" href="assets/sweetalert2.min.css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  <!-- Theme CSS -->
  <link href="styles/freelancer.css" rel="stylesheet">
</head>
<body id="page-top">
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg  text-uppercase fixed-top shadow" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="">
        <!-- <img src="./ewaweMorgage/assets/img/ewawe.png" alt="ewawe_logo" id="ewawe-logo"/> -->
        <span class="sided-word">Investo</span>
      </a>
      <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">Home</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="" target="_blank">login</a>
            </li>
         
        
         
        </ul>
      </div>
    </div>
  </nav>


  <body>

            <div class="container">
                      
    <div class="mortgage-calc">
                    <h1>UWEZO LOAN APPLICATION FORM</h1>
                    <div class="row">
                        <div class="col-md-4">
                            <label>Branch:</label>
                            <input type="text" id="branch" class="form-control">
                        </div>
                        <div class="col-md-4">
                            <label>Group/Centre</label>
                            <input type="text" id="centre" class="form-control">
                            
                        </div>
                         <div class="col-md-4">
                            <label>Credit Officer</label>
                            <input type="text" id="creditofficer" class="form-control">
                            
                        </div>
                    </div>
                    <hr/>
                <div name="lpc_5" method="post" action="#" id="mortgage_calc_div_form1">
                    <h2 style="text-align: center;">Clients Details</h2>
                    <div class="row">
                      <div class="col-md-6">
                          <div class="col-md-12">
                              <label>Name</label>
                             <input class="form-control" name="clientname" type="text" id="clientname" step="any"/>
                          </div>
        
                          <div class="col-md-12">
                              <label>ID No./Passport</label>
                            <input class="form-control" name="idnumber" type="text" id="idnumber" step="any"/>
                          </div>
                         <div class="col-md-12">
                              <label>Phone Number</label>
                            <input class="form-control" name="phonenumber" type="text" id="phonenumber" step="any"/>
                          </div>
                           <div class="col-md-12">
                              <label>Nationality</label>
                            <input class="form-control" name="nationality" type="text" id="nationality" step="any"/>
                          </div>
                           <div class="col-md-12">
                              <label>Postal Address</label>
                            <input class="form-control" name="postaladdress" type="text" id="postaladdress" step="any"/>
                          </div>
                          <div class="col-md-12">
                              <label>Town</label>
                            <input class="form-control" name="town" type="text" id="town" step="any"/>
                          </div>
                           <div class="col-md-12">
                              <label>Residence</label>
                            <input class="form-control" name="residence" type="text" id="residence" step="any"/>
                          </div>
                      </div>
        
                      <div class="col-md-6">
                        
                              <div class="col-md-12">
                                  <label>Spouse/Co-loanee Name:</label>
                                  <input  class="form-control"  type="text" name="coloanee" id="coloanee"/>
                              </div>
                              <div  class="col-md-12">
                                  <label>ID No./Passport:</label>
                                  <input class="form-control"  type="text" name="coidnumber" id="coidnumber" />
                              </div>
                              <div  class="col-md-12">
                                  <label>Phone:</label><br>
                                  <input class="form-control"  type="text" name="cophone" id="cophone" />
                              </div>
                              <div  class="col-md-12">
                                  <label>Nationality:</label>
                                  <input class="form-control"  type="text" name="conationality" id="conationality"  />
                              </div>
                              <div  class="col-md-12">
                                  <label>Postal Address:</label>
                                  <input class="form-control"  type="text" name="copostaladdress" id="copostaladdress" />
                              </div>
                              <div class="col-md-12">
                              <label>Town</label>
                            <input class="form-control" name="town" type="text" id="cotown" step="any"/>
                          </div>
                           <div class="col-md-12">
                              <label>Residence</label>
                            <input class="form-control" name="residence" type="text" id="coresidence" step="any"/>
                          </div>
        
                      </div>
                   
                   </div>
                   <div class="col-md-4">
                       &nbsp;
                   </div>
                   <div class="col-md-4">
                       <button class="btn btn-success btn-lg pull-right" id="saveClient">Submit</button>
                   </div>
               </div>
            <div>
                <hr/>
                <form name="lpc_5" method="" action="#" id="mortgage_calc_div_form">
                    <h2 style="text-align: center;">Loan Details<span id="span1"></span></h2>
                    <input type="text" id="client_id" name="">
                    <div class="row">
                      <div class="col-md-6">
                          <div class="col-md-12">
                              <label>Loan Amount</label>
                             <input class="form-control" name="clientname" type="number" id="loanAmount" step="any"/>
                          </div>
        
                         <div class="col-md-12">
                              <label>Loan Term Months</label>
                            <input class="form-control" name="loanTerms" type="number" id="loanmonths" step="any"/>
                          </div>
                           <div class="col-md-12">
                              <label>Interest Rate</label>
                            <input class="form-control" name="interestRate" type="text" id="rate" step="any"/>
                          </div>
                           <div class="col-md-12">
                              <label>Total Amount</label>
                            <input class="form-control" name="totalAmount" type="text" id="tamount" step="any"/>
                          </div>
                          <div class="col-md-12">
                              <label>Monthly Instalments</label>
                            <input class="form-control" name="town" type="text" id="monthlyInstalments" step="any"/>
                          </div>
                      </div>
        
                      <div class="col-md-6">
                        
                              <div class="col-md-12">
                                  <label>Grace Period Months</label>
                                  <input  class="form-control"  type="text" name="graceperiod"   />
                              </div>
                              <div  class="col-md-12">
                                  <label>Penalty Rate %:</label>
                                  <input class="form-control"  type="text" name="penalityrate" />
                              </div>
                              <div  class="col-md-12">
                                  <label>Charges:</label><br>
                                  <input class="form-control"  type="text" name="charges" />
                              </div>
                              <div  class="col-md-12">
                                  <label>Purpose:</label>
                                  <textarea class="form-control" id="purpose">
                                      
                                  </textarea>
                              </div>
                              
                              
                           
        
                      </div>
                  </div>
              </form>
            </div>
            <hr/>
            <div class="row" id="deliverypoint">
                <label class="col-md-3" style="text-align: center;">Delivery Point:</label>
                <div class="col-md-7"><input type="text" name="deliverypoint" id="deliverypoint12" class="form-control" readonly></div>
            </div>
            <div class="row">
                &nbsp;
            </div>
            <div class="row">
                <div class="col-md-1">
                    
                </div>
                <div class="col-md-8" id="consent">
                                  <p><input type="checkbox"><span>I, the person stated above, being of sound mind, voluntarily pledge the items listed below
and others in the additional schedule to our group and Jirani Smart Ltd as security for my
loan:</span></p>  
                </div>

            </div>
            <div class="row" id="colateral">
                <div class="col-md-12">
                    <input type="text" name="" id="collateralValues">
                <table class="table table-responsive table-stripped col-md-12" id="coltable">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name of Item</th>
                            <th>Model</th>
                            <th>Serial No</th>
                            <th>Year Bought</th>
                            <th>Purchase Price</th>
                            <th>Estimated Value</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
            </div>
            </div>
                    <div class="row">
                    <div class="col-md-4">
                        &nbsp;
                    </div>
                    <div class="col-md-4">
                         <input type="submit" class="btn btn-primary" value="Submit" id="complete" />
                    </div>
                    <div class="col-md-4">
                        &nbsp;
                    </div>
                </div>
        </div>
    </div>
        
        <script type="text/javascript">
             $(document).ready(function() { 
                $('#mortgage_calc_div_form1').show();
                $('#mortgage_calc_div_form').hide();
                $('#colateral').hide();
                $('#deliverypoint').hide();
                $('#consent').hide();
            $("#saveClient").on('click', function(e){
                e.preventDefault();
                var client_name = $('#clientname').val();
                var client_phone = $('#phonenumber').val();
                var client_idnumber = $('#idnumber').val();
                var client_nationality = $('#nationality').val();
                var client_postaladdress = $('#postaladdress').val();
                var client_town = $('#town').val();
                var client_residence = $('#residence').val();

                var spouse_name = $('#coloanee').val();
                var spouse_phone = $('#cophone').val();
                var spouse_idnumber = $('#coidnumber').val();
                var spouse_nationality = $('#conationality').val();
                var spouse_postaladdress = $('#copostaladdress').val();
                var spouse_town = $('#cotown').val();
                var spouse_residence = $('#coresidence').val();

                var centre = $('#centre').val();
                var creditofficer = $('#creditofficer').val();
                var branch = $('#branch').val();

                console.log(client_name+client_phone+client_idnumber+client_nationality+client_postaladdress+client_town+client_residence+spouse_name+spouse_phone+spouse_idnumber+spouse_nationality+spouse_postaladdress+spouse_town+spouse_residence);
        $.ajax({
            url: 'saveClient.php',
            type: 'POST',
            dataType: 'json',
           data: {'save':'client','client_names':client_name,'client_phone':client_phone,'client_idnumber':client_idnumber,'client_nationality':client_nationality,'client_postaladdress':client_postaladdress,'client_town':client_town,'client_residence':client_residence,'spouseNames':spouse_name,'spouse_idnumber':spouse_idnumber,'spouse_phone':spouse_phone,'spouse_nationality':spouse_nationality,'spouse_postaladdress':spouse_postaladdress,'spouse_town':spouse_town,'spouse_residence':spouse_residence, 'branch':branch,'center':centre, 'creditofficer':creditofficer},
            success: function(response){
             //if(response.status)
             console.log(response)
             if(response.status == true){
                $('#mortgage_calc_div_form1').hide();
                $('#mortgage_calc_div_form').show();
                $('#client_id').val(response.last_id);
                $('#deliverypoint').val(response.fullnames);
                $('#span1').html(response.fullnames);
             }else{
                
             }
          
            }
          });
  //               $.ajax({

    // https://www.youtube.com/watch?v=zKnM1QCMNWg
  //   url : "saveClient.php",
  //   type: "POST",
  //   data: {'save':'client','client_names':client_name,'client_phone':client_phone,'client_idnumber':client_idnumber,'client_nationality':client_nationality,'client_town':client_town,'client_residence':client_residence},
  //   dataType: "JSON",
  // })
  // .done(function(data) {
  //     Swal.fire({
  //     position: 'center',
  //     type: 'error',
  //     title: 'Client Saved Successful',
  //     showConfirmButton: false,
  //     timer: 2000
  //   });
  // })
  // .fail(function() {
  //   Swal.fire({
  //     position: 'center',
  //     type: 'error',
  //     title: 'Our System is down now. Check again later',
  //     showConfirmButton: false,
  //     timer: 2000
  //   });
  // });
            });
    var singlTr = ' <tr><th>1</th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><a href="#" id="addTr">Add</a></th></tr>';
    $('#coltable').append(singlTr);

$('#addTr').on('click', function(e){
e.preventDefault();
//get the number of rown the add a single row at the top
  var addSinglTr = ' <tr><th>1</th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><input type="text" name="name" class="form-control"></th><th><a href="#" id="removeTr">Remove</a></th></tr>';
});

$('#complete').on('click', function(e){
    e.preventDefault();
    var client_id = $('#client_id').val();
    var loanAmount = $('#loanAmount').val();
    var loanTerms = $('#loanTerms').val();
    var interestRate = $('#interestRate').val();
    var totalAmount = $('#totalAmount').val();
    var monthlyInstalments = $('#monthlyInstalments').val();
    var graceperiod = $('#graceperiod').val();
    var penalityrate = $('#penalityrate').val();
    var charges = $('#charges').val();
    var purpose = $('#purpose').val();
    var collateral = $('#collateralValues').val();

        $.ajax({
            url: 'saveClient.php',
            type: 'POST',
            dataType: 'json',
           data: {'save':'loan','client_id':client_id, 'loanAmount':loanAmount, 'loanTerms':loanTerms,'interestRate':interestRate,'totalAmount':totalAmount,'monthlyInstalments':monthlyInstalments,'graceperiod':graceperiod,'penaltyrate':penalityrate,'charges':charges,'purpose':purpose},
            success: function(response){
             console.log(response)
             if(response.status == true){
                  Swal.fire({
                  position: 'center',
                  type: 'error',
                  title: 'Loan Saved Successful',
                  showConfirmButton: false,
                  timer: 2000
                });
                $('#mortgage_calc_div_form1').hide();
                $('#mortgage_calc_div_form').show();
                $('#client_id').val(response.last_id);
                $('#deliverypoint').val(response.fullnames);
                $('#span1').html(response.fullnames);
             }else{
                   Swal.fire({
                      position: 'center',
                      type: 'error',
                      title: 'Our System is down now. Check again later',
                      showConfirmButton: false,
                      timer: 2000
                    });
             }
          
            }
          });

});
        }); 
        </script>
      <!-- Footer -->
  </body>
  </html>