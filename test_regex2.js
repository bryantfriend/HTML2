const tests = [
    "<p><b>Super</b></p>",
    "<P> <B>Super</B> </P>",
    "<p style='color:red'><b>Super</b></p>",
    "<pre><b>Super</b></pre>",
];

const regex1 = /<p(?:>|\\s[^>]*>).*<b(?:>|\\s[^>]*>)\\s*super\\s*<\\/b >.*<\\/p>/i;

tests.forEach(t => console.log(t, regex1.test(t)));
