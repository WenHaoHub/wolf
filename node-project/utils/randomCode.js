
function getCode(n) {
    var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
    var b = "";
    for (var i = 0; i < n; i++) {
      var index = Math.floor(Math.random() * 62);
      b += all.charAt(index);

    }

    return b;
  };
module.exports = getCode