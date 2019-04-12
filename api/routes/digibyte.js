var express = require("express");
var router = express.Router();
const { exec } = require('child_process');

// TODO: Pass custom message (hash)
router.get("/send", function(req, res, next) {
    exec('cd /var/www/html/php-OP_RETURN; php send-OP_RETURN.php D7C4HHgDv94qMgxYwhAGEAQbB1vzZHANfx 0.001 "<custom message>"', 
    (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return;
        }
      
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
});

// TODO: Implement check wallet capability
router.get("/check", function(req, res, next) {
    exec('cat *.js bad_file | wc -l', (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return;
        }
      
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
});
module.exports = router;