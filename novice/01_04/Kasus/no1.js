var re = /s?([A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{1,2})/g
function testInfo(platInput) {
  var OK = re.exec(platInput.value);
  if (!OK) {
    alert(platInput.value + ' ini bukan plat nomer Indonesia!'); 
  } else {
    alert('Plat Nomer Anda adalah ' + OK[0]);}
} 