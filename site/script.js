function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'it',
      includedLanguages: 'en,it,fr,de,es,pt',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById('lang-toggle');
    const translateBox = document.getElementById('google_translate_element');
  
    langToggle.addEventListener('click', () => {
      if (translateBox.style.display === "none" || !translateBox.style.display) {
        translateBox.style.display = "block";
      } else {
        translateBox.style.display = "none";
      }
    });
  });