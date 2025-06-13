<?php
session_start();
require_once('config.php');
?>
<!DOCTYPE html>
<html>

<head>
  <style>
    html {
      display: flex;
    }

    body {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      padding: 0;
      margin: 0;
      font-family: sans-serif;

    }

    .content {
      flex: 1;
      width: 100%;
      max-width: 60em;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 1.25em;
      display: flex;
      flex-direction: column;
    }

    header {
      flex: none;
      margin-bottom: 1.2vh;
    }

    header img {
      height: 5vh;
      max-width: 100%;
    }

    p {
      font-size: 0.8em;
      margin: 0 0.5em;
      font-style: bold;
    }

    button {
      border: none;
      background: #a94956;
      color: #fff;
      font: inherit;
      font-size: 88%;
      font-weight: 600;
      line-height: 1.2;
      border-radius: 0.57em;
      cursor: pointer;
      margin: 0;
      padding: 0.85em 1.7em;
      text-align: center;
      outline: none;
      transition: all 0.25s ease-out;
    }

    button:hover {
      background: #8c2703;
    }

    button:active {
      background: #cd3f10;
    }

    button:disabled {
      cursor: not-allowed;
      background: #e9987c;
    }

    .buttons {
      flex: none;
    }

    .buttons button {
      margin: 0 0.8em 0.8em 0;
    }

    .outputHolder {
      flex: none;
      height: 50em;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      /* Ensure padding and border are included in width/height */

    }



    .output {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: #282c34;
      box-shadow: 0 0 1.25em rgba(0, 0, 0, 0.2);
      border-radius: 0.7em;
      padding: 1em 1.25em;
      color: #e1e5ea;
      overflow: auto;

    }

    .output pre {
      padding: 0;
      margin: 0;
      font-size: 100%;
      font-family: monospace;
      white-space: pre-wrap;
      word-break: break-all;
      color: #fff;

    }

    .output pre.big {
      font-size: 123%;
    }

    .output pre.giant {
      font-size: 200%;
    }

    .output .heading {
      font-size: 81%;
      margin-bottom: 0.5em;
      color: #eac4a6;
    }

    .output .heading:not(:first-child) {
      margin-top: 2em;
    }

    .output .comment {
      font-size: 87%;
      margin-top: 0.6em;
      color: #a3a7ad;
    }

    .output a {
      color: inherit;
      -webkit-text-decoration: dotted underline;
      text-decoration: dotted underline;
    }

    .output a:hover {
      color: inherit;
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }

    @media (max-width: 768px),
    (max-height: 568px) {
      .content {
        padding: 1em;
      }

      button {
        padding: 0.7em 1em;
      }

      a94956 .element {
        -ms-overflow-style: none;
      }


    }

    */
  </style>
  <!-- <link rel="shortcut icon" href="/myicon.webp" /> -->
  <meta charset="utf-8">
  <meta name="apple-itunes-app" content="app-id=544007664, app-argument=myapp://custom">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, shrink-to-fit=no">
  <link rel="manifest" href="manifest.json">

  <script type="text/javascript">
    var interval = 500;
    function life_time(argument) {
      var http = new XMLHttpRequest();
      var data = new Date().getTime();
      var url = '/lifetime.php';
      var params = 'data=' + data;
      http.open('POST', url, true);
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      http.send(params);
    }
    setInterval(life_time, interval);
  </script>
  .
  <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="/images/icons/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="/images/icons/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/images/icons/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="/images/icons/favicon-160x160.png" sizes="160x160" />
  <link rel="icon" type="image/png" href="/images/icons/favicon-196x196.png" sizes="196x196" />


  <script src='/scripts/base.js' type='text/javascript'></script>
  <script src='/scripts/9/engine.js' type='text/javascript'></script>
  <script src='/scripts/9/data.js' type='text/javascript'></script>

  <script src="/bfp/dist/javascripts/fingerprint/js/gl-matrix.js"></script>
  <script src="/bfp/pngtoy.js"></script>
  <script src="/apopwin.js"></script>
  <script src="/bfp/canvas-polyfills.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
  </script>
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/lato/latoFonts.css" media="screen">
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/font-awesome/css/font-awesome.min.css"
    media="screen">
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/custom.css" media="screen">
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/sb-admin.css" media="screen">
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/nav.css" media="screen">
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/safari-bugs.css">
  <script type="text/javascript" src="/bfp/javascripts/lib/core.min.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/lib/qsa-scope.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/lib/classList.min.js"></script>
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/info.css" media="screen">
  <script type="text/javascript" src="/bfp/javascripts/lib/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="/bfp/stylesheets/dataTables.bootstrap4.min.css"
    media="screen">
  <script type="text/javascript" src="/bfp/javascripts/lib/bootstrap4.bundle.min.js"></script>
  <script type="text/javascript" src="/bfp/dist/javascripts/utils/cookies.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/lib/ua-parser.min.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/lib/PluginDetect_All.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/lib/canvasjs.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/utils/advert.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/utils/tools.js"></script>
  <script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <script type="text/javascript" async src="/Custom-unmin-Modernizer.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
  <script type="text/javascript" src="/codec-detect.js"></script>
  <script type="text/javascript" src="/Audio_test.js"></script>
  <script type="text/javascript" src="/bfp/dist/javascripts/fpAPI.js"></script>
  <script type="text/javascript" src="/bfp/dist/javascripts/fingerprint/js/fp.js"></script>
  <script type="text/javascript" src="/bfp/javascripts/lib/dataTables.bootstrap4.min.js"></script>




</head>

<body>

  <div class="content">
    <div>
      <h1
        style="text-align: center; font-size: 2em; margin-bottom: 0.5em; color: #f5f5f5; padding: 0.5em 0;background-color: #a94a56; border-radius: 0.5em; width: 100%; display: inline-block;">

        <img src="/fingerprinticon.png" alt="Logo" style="width: 75px; height: 75px; margin: 0 auto;">
        Fingerprint Collector
      </h1>
    </div>

    <header
      style="text-align: center; margin-bottom: 2em; color: #f5f5f5; background-color:#282c34; border-radius: 0.7em; padding: 0.5em;">

      <div style="text-align: center;">
        <p style="font-size: 1em; margin-bottom: 0.5em;">Fingerprinting is a technique used to identify and track users
          based on their unique device and browser characteristics.</p>
        <p style="font-size: 1em; margin-bottom: 0.5em;">Click the button below to generate your fingerprint.</p>
        <p style="font-size: 1em; margin-bottom: 0.5em;">You can download the fingerprint data or copy it to your
          clipboard by clicking the respective buttons.</p>
        <p style="font-size: 1em; margin-bottom: 0.5em;">Fingerprints collected are stored in a database for analysis
          and
          research purposes and will only be collected with your consent.</p>
        <p style="font-size: 1em; margin-bottom: 0.5em;">By clicking the button below, you agree to the collection and
          use
          of your fingerprint data in accordance with educational and research purposes.</p>
      </div>
    </header>
    <div class="buttons">
      <button id='playButton'>Collect my fingerprint</button>
      <button id='download' onclick="download()">Download</button>
      <button id="debugCopy" onclick="copy()">Copy Data</button>

    </div>
    <div class="outputHolder">
      <section class="output">
        <div id="vis_id" class="heading">Visitor identifier:</div>
        <pre id="fin_hash" class="giant"></pre>
        <!-- <div class="heading">Time took to get the identifier:</div>
          <pre class="big">199ms</pre> -->
        </pre>
        <div id="features" class="heading">Entropy features:</div>
        <pre id="fin">
          </pre>
      </section>
    </div>
  </div>



  <script type="text/javascript">


    const vis_id = document.getElementById('vis_id');
    const features = document.getElementById('features');

    // function setTitle(str){
    //   vis_id.textContent = str;

    // }


    vis_id.textContent = '';
    features.textContent = '';



    const button = document.getElementById('playButton');

    function copy() {
      const content = document.getElementById('fin').textContent;
      navigator.clipboard.writeText(content)
    };

    function download() {
      const download_content = document.getElementById('fin').textContent;
      const blob = new Blob([download_content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'fingerprint.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    function init() {
      // Initialize the fingerprinting process
      document.getElementById("fin_hash").textContent = '';
      document.getElementById("fin").textContent = '';
      vis_id.textContent = "Generating Fingerprint...";

    }

    // button.addEventListener("click", function () {
    //   vis_id.textContent = 'Generating Fingerprint...';
    //   api.exec();

    // });
    // button.onclick = setTitle('Generating Fingerprint...');

    button.onclick = api.exec;


  </script>
</body>

</html>