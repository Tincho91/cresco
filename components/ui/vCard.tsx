import { QRCodeSVG } from "qrcode.react"

const VCardQR = () => {
  const vcardData = `
BEGIN:VCARD
VERSION:3.0
N:CRESCO;;;;
FN:CRESCO RISK MANAGEMENT
ORG:CRESCO RISK MANAGEMENT
TITLE:Gestione crediti anomali
TEL;TYPE=WORK,VOICE:+39 340 4931607
EMAIL;TYPE=INTERNET:crescosrls@gmail.com
EMAIL;TYPE=INTERNET:crescosrls@pec.it
URL:https://crescorisk.com
ADR;TYPE=WORK:;;Contrada Macchialonga, 21;Rende (Cs);;;87036;Italy
NOTE:P.I. - C.F. R.I. CCIAA di CS 03866940780
END:VCARD
  `.trim()

  return (
    <div className="flex flex-col">
      <p className="mb-2 text-sm text-gray-700">Scansiona per salvare il nostro contatto</p>
      <QRCodeSVG value={vcardData} size={180} />
    </div>
  )
}


export default VCardQR