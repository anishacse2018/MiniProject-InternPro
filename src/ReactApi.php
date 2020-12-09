<?php

function get_data(){
    $connect=mysqli_connect("localhost","root","","internprodb");
    $query="SELECT * FROM jobtable";
    $result=mysqli_query($connect,$query);
    $jobdata=array();
    while($row=mysqli_fetch_array($result))
    {
        $jobdata[]=array(
            
            'company'=>$row["company"],
            'stipend'=>$row["stipend"]
            
        );
    }
    return json_encode($jobdata);
}
echo '<pre>';
print_r(get_data());
echo '</pre>';

/*$file_name=date('d-m-Y').'.json';
if(file_put_contents($file_name,get_data()))
{
    echo $file_name.'file created';
}
else{
    echo 'Error';
}*/
?>



?>

