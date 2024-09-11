const axios = require('axios');
const cheerio = require('cheerio');

// Function to extract emails
function extractEmails(text) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(emailRegex) || [];
}

// Main function to scrape emails from a webpage
async function scrapeEmails(url) {
  try {
    // Fetch the HTML content of the webpage
    const { data } = await axios.get(url);
    
    // Load the HTML content into cheerio for parsing
    const $ = cheerio.load(data);
    
    // Extract text from the webpage
    const pageText = $('body').text();
    
    // Extract emails from the text
    const emails = extractEmails(pageText);
    
    // Filter HR-related emails
    const hrEmails = emails.filter(email => email.includes('hr') || email.includes('careers'));

    if (hrEmails.length > 0) {
      console.log('Found HR or Careers related emails:');
      hrEmails.forEach(email => console.log(email));
    } else {
      console.log('No HR-related emails found.');
    }
    
  } catch (error) {
    console.error(`Error fetching the webpage: ${error.message}`);
  }
}

// Usage: Pass the URL of the webpage to scrape
const websiteURL = 'https://google.com/'; // Replace with the actual URL
scrapeEmails(websiteURL);
