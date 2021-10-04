<?php>
$data = [
    ["artist_name"=> "The Weeknd","name"=>"Save Your Tears", "id"=>"u6lihZAcy4s"],
    ["artist_name"=> "Alan Walker","name"=>"Different World", "id"=>"m-PJmmvyP10"],
    ["artist_name"=> "Cairokee","name"=>"I Thought There Was Still Time", "id"=>"IWDTzP2mHv8"],
    ["artist_name"=> "Coldplay","name"=>"Orphans", "id"=>"goyq7GDYEkE"],
    ["artist_name"=> "The Beatles","name"=>"Here Comes The Sun", "id"=>"KQetemT1sWc"],
    ["artist_name"=> "flora cash","name"=>"They Own This Town", "id"=>"PLVTkAEQJSA"],
    ["artist_name"=> "Mumford & Sons","name"=>"Beloved", "id"=>"IqFsRt0uYzA"],
    ];
header('Content-Type: application/json');
echo json_encode($data);