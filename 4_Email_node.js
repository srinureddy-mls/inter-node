const sgMail = require('@sendgrid/mail');
     sgMail.setApiKey('YOUR_SENDGRID_API_KEY');
     const msg = {
       to: 'recipient@example.com',
       from: 'sender@example.com',
       subject: 'Test Email',
       text: 'Hello, this is a test email.'
     };
     sgMail
       .send(msg)
       .then(() => {
         console.log('Email sent');
       })
       .catch((error) => {
         console.error(error);
       });
