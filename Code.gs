function indexify(header) {
  header = header.toUpperCase();
  header = header.split("").reverse().join("");
  var i, index=0;
  for (i=0; i<header.length; i++) {
    index += ( Math.pow(26, i) * (header.charCodeAt(i)-64) );
  }
  return index;
}
