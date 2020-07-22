<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Power of two</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

    <style>
        @media (min-width: 300px) {
            button{
                margin-top: 10px;
            }
        }

        h2{
            margin-top: 10px;
            margin-bottom: 30px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <center>
            <h2>Josephus Problem</h2>

            <p>
                <span style="background-color: #e74c3c; padding: 5px 20px 5px 20px; color: #ffffff;">Value range : 1 to 200,000,000</span>
            </p>

            <form onsubmit="window.calculate(event);">

                <label for="val">Number of Humans : </label>
                <input type="number" id="val" style="padding: 5px; width: 150px;" oninput="Validation()">

                <div class="clearfix">
                    <br>
                    <p id="wait" style="display: none">
                        <span id="load">Please wait...</span>
                    </p>

                    <h3 id="res" style="display: none">
                        <span id="result"></span>
                    </h3>

                    <button type="submit" class="btn btn-info" id="btnResult">Result</button>
                </div>
            </form>
        </center>
    </div>
</body>
</html>

<script src="js/controller.js"></script>
