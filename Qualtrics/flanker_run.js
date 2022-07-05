<!DOCTYPE html>
<html>

<head>
  <title>Flanker Task</title>
  <script src="Flanker_Qualtrics/Qualtrics/jspsych.js"></script>
  <script src="Flanker_Qualtrics/Qualtrics/plugins/jspsych-html-keyboard-response.js"></script>
  <script src="Flanker_Qualtrics/Qualtrics/plugins/jspsych-image-keyboard-response.js"></script>
  <link rel="stylesheet" href="Flanker_Qualtrics/Qualtrics/css/jspsych.css">
  <script src="Qualtrics/flanker_main.js"></script>
</head>

<body>
</body>
<script>
  /*start experiment*/
  jsPsych.init({
    timeline: timeline,
    on_finish: function () {
      jsPsych.data.displayData();
    }
  });
</script>

</html>
