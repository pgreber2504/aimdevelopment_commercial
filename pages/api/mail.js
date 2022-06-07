const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    const message = `
                Imie i nazwisko: ${body.name}\r\n
                Email: ${body.email}\r\n
                ${body.phone ? `Numer telefonu: ${body.phone}` : ''}\r\n
                Wiadomość: ${body.message}
                `;

    mail.send({
        to: 'zamowienia@stylovehome.pl',
        from: 'zamowienia@stylovehome.pl',
        subject: 'Nowa wiadomość! Domy modułowe',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
    }).then(() => {
        res.status(200).json({ status: 'Ok' });
    });
}