function extractData() {
  const text = document.getElementById("inputText").value;
  const resultsDiv = document.getElementById("results");

  const patterns = {
    "📧 Email Addresses": {
      regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
      color: "#007acc"
    },
    "📞 Phone Numbers": {
      regex: /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}/g,
      color: "#008000"
    },
    "⏰ Time": {
      regex: /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APap][Mm])?\b/g,
      color: "#ff6600"
    },
    "💳 Credit Card Numbers": {
      regex: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
      color: "#cc0000"
    },
    "💰 Currency Amounts": {
      regex: /(?:\$|€|£|Rwf|USD|EUR|GBP)\s?\d+(?:,\d{3})*(?:\.\d{2})?/g,
      color: "#9900cc"
    }
  };

  let output = "";
  for (const [label, { regex, color }] of Object.entries(patterns)) {
    const matches = text.match(regex) || [];
    output += `<h3>${label} (${matches.length})</h3><ul>`;
    matches.forEach(match => {
      output += `<li><span style="color:${color}; font-weight:bold;">${match}</span></li>`;
    });
    output += `</ul>`;
  }

  resultsDiv.innerHTML = output;
}
// Added these lines to connect buttons to functions:
document.getElementById("extractData").onclick = extractData;
document.getElementById("clearbutton").onclick = function() {
    document.getElementById("inputText").value = "";
    document.getElementById("results").classList.remove('show');
};