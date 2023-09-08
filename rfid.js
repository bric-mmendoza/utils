var barcode = process.argv[2]

const agency = parseInt(barcode.substring(0, 4), 10);
const tag = parseInt(barcode.substring(4, 14), 10);

const agencyHex = "670"
const tagHex = tag.toString(16)

var rfid = agencyHex+tagHex

console.log(barcode+rfid.padStart(20,'0').padEnd(24,'0'))
