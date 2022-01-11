function solve(text) {
 let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

 let matches = [];
 let validMatch;

 while ((validMatch = regEx.exec(text)) !== null) {
    matches.push(validMatch[0]);
 }
 
 console.log(matches.join(" "));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
