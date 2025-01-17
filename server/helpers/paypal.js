const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYR0M-vn10SfU9RjhMGJtFE4TrjNKAlsL1xv06lG3XLc7-k3vPJ7ckRmTLXq9quAxSHiMrkBXD3oSkOO",
  client_secret: "EFDyZyUPFKKLFQJPrr1Re4ViYnVoJLx1YND_zfTqHwz6TcsiOUZSMYMMO1r1Z1kBes8cmRrfCyzJixu4",
});

module.exports = paypal;
