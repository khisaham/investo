<?php
$servername = "127.0.0.1";
$username = "root";
$password = "tumaxpr355";
$dbname = "uwezo";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if($_POST['save']=='client'){
$cnames = $_POST['client_names'];$passport = $_POST['client_idnumber'];
$phone = $_POST['client_phone']; $nationality = $_POST['client_nationality'];
$address = $_POST['client_postaladdress']; $town = $_POST['client_town'];
$residence = $_POST['client_residence'];

$spouse = $_POST['spouseNames']; $spouseID = $_POST['spouse_idnumber'];
$spousePhone = $_POST['spouse_phone']; $spouseNationality = $_POST['spouse_nationality']; $spouseAddress = $_POST['spouse_postaladdress'];
$spouseTown = $_POST['spouse_town'];
$spouseResidence = $_POST['spouse_residence'];
$branch = $_POST['branch']; $creditofficer = $_POST['creditofficer'];
$centre = $_POST['centre'];

$query = "INSERT into client (full_names, passport, phone, nationality, address, town, residence, spouse, spouseID, spousePhone, spouseNationality, spouseAddress,spouseTown, spouseResidence, branch, centre, creditOfficer) values('$cnames', '$passport', '$phone', '$nationality','$address', '$town','$residence', '$spouse', '$spouseID', '$spousePhone', '$spouseNationality', '$spouseAddress', '$spouseTown', '$spouseResidence', '$branch', '$centre', '$creditofficer')";

// $sql = "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($conn, $query)) {
	$data['status'] = true;
	$data['msg'] = 'New record created successfully';
	$data['last_id'] = $conn->insert_id;
	$data['fullnames'] = $cnames;
    echo json_encode($data);
} else {
	$data['status'] = false;
	$data['msg'] = "Error: " . $sql . "<br>" . mysqli_error($conn);
    echo json_encode($data);
}

}
if($_POST['save'] == 'loan'){
	$clientid = $_POST['client_id'];
$loanAmount = $_POST['loanAmount'];
$loanTerms = $_POST['loanTerms'];
$interestRate = $_POST['interestRate'];
$totalAmount = $_POST['totalAmount'];
$monthlyInstalments = $_POST['monthlyInstalments'];
$graceperiod = $_POST['graceperiod'];
$penaltyrate = $_POST['penaltyrate'];
$purpose = $_POST['purpose'];
$charges = $_POST['charges'];

$query = "INSERT into loan_details (clientid, loanAmount, loanTerm,interestRate, totalAmount, monthlyInstalments, gracePeriod, penaltyRate, charges, purpose) values ('$clientid','$loanAmount', '$loanTerms', '$interestRate','$totalAmount','$monthlyInstalments','$graceperiod','$penaltyrate','$charges','$purpose')";

$query2 = "INSERT INTO collateral (clientid, collateral) VALUES ('$clientid','$collateral')";

}
else{
	echo 'You cannot access this server directly. <b><a href="mailto:serverservant@gmail.com">contact admin</a>';
}


mysqli_close($conn);
?>