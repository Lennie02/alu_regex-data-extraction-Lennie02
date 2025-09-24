## 🧠 Data Extractor Web App

A lightweight, browser-based tool that extracts structured data from raw text using regular expressions. Designed for educational and practical use, this app highlights and organizes matches for emails, phone numbers, time formats, credit card numbers, and currency amounts.

---

### 📁 File Structure
~~~
alu_regex-data-extraction-Lennie02/
├── index.html      # HTML interface
├── regex.js        # Regular expressions fonctions
├── style.css       # CSS interface
└── readmefile
~~~
---

### 📌 Assignment Requirements

The app must extract the following data types from user input:

- 📧 Email addresses:
  - `user@example.com`,
  - `firstname.lastname@company.co.uk`

- - 📞 Phone numbers (various formats):
  - `(123) 456-7890`,
  - `123-456-7890`,
  - `123.456.7890`


- ⏰ Time formats:
  - `14:30` (24-hour),
  - `2:30 PM` (12-hour)

- 💳 Credit card numbers:
  - `1234 5678 9012 3456`,
  - `1234-5678-9012-3456`

- 💰 Currency amounts:
  - `$19.99`,
  - `$1,234.56`

---
### 🔍 Regex Summary

| Data Type            | Regex Pattern |
|----------------------|---------------|
| 📧 Email Addresses       | /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g |
| 📞 Phone Numbers         | /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}/g |
| ⏰ Time                  | /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APap][Mm])?\b/g |
| 💳 Credit Card Numbers   | /\b(?:\d{4}[-\s]?){3}\d{4}\b/g |
| 💰 Currency Amounts      | /(?:\$|€|£|Rwf|USD|EUR|GBP)\s?\d+(?:,\d{3})*(?:\.\d{2})?/g |


