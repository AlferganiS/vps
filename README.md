### Profiling Website

Plan to add this code in "www.fpwebseccispa.com".

### Files and Configuration

nginx.conf -> This has set up related to forwarding requests and SSL certificates. The basic idea reflected is that anyfiles that are requested should be redirect to a single location file "main.php"

html -> This is the actual content that is used for profling the visitor. Please note: if you visit this URL, you are being Profiled too :blush:

 <ol>
     <li>.wellknown - SSL Certificate related validation </li>
     <li>bfp - The code from https://amiunique.org/</li>
     <li>config - The configuration to capture network data</li>
     <li>lifetime - Captures the visitors lifespan</li>
     <li>main - the default page - which captures all browser fingerprints, visitors profile information and all artifacts </li>
  </ol>
  
  
  
