/* ══════════════════════════════════════
   HOPE CHURCH — Web Application Configuration Template
   ══════════════════════════════════════
   Copy this file to 'config.js' in the same directory and fill in your keys.
   The 'config.js' file is ignored by Git to keep your credentials secure.
   ══════════════════════════════════════ */

window.CHURCH_CONFIG = {
  // YouTube Data API v3 Config
  // Generate a key at https://console.cloud.google.com/apis/library/youtube.googleapis.com
  youtubeApiKey: "", 
  
  // The ID of the playlist containing your sermon uploads (typically starts with 'UU' or 'PL')
  youtubePlaylistId: "",

  // PayPal Integration Config
  // Use 'sb' for testing (Sandbox). Replace with your Live PayPal Client ID for production.
  // Obtain it at https://developer.paypal.com/
  paypalClientId: "sb"
};
