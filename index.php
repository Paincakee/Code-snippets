<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['csv_file'])) {
    // handle file upload
    $csv_file = $_FILES['csv_file']['tmp_name'];

    if (($handle = fopen($csv_file, 'r')) !== false) {
        // loop through each line of the file
        while (($data = fgetcsv($handle)) !== false) {
            // output the email address
            echo $data[0] . '<br>';
        }

        // close the file
        fclose($handle);
    }
} else {
    // display file upload form
    echo '
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="csv_file">
        <input type="submit" value="Import">
    </form>';
}
?>