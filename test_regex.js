const val = "<p><b>super</b></p>";
const isNested = /<p[>\s]>.*<b[>\s]>\s*super\s*<\/b>.*<\/p>/i.test(val);
console.log(isNested);
