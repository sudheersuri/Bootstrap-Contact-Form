<?php
    if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["phone"]) ||empty($_POST["text"]))
    {
        echo json_encode(["status"=>500,"error"=>"Your OTP is 1234"]);
    }
    else{
        echo json_encode(["status"=>200,"message"=>"Form was submitted successfully!"]);
    }
?>