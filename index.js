const crypto = require('crypto');
const bufSecret = Buffer(SECRET_TOKEN, "base64");

addEventListener('fetch', event => {
  const { request } = event
  return event.respondWith(handleRequest(request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    try {
      const auth = request.headers.get('authorization')
      const body = await request.json()
  
      var msgBuf = Buffer.from(JSON.stringify(body), 'utf8');
      var msgHash = "HMAC " + crypto.createHmac('sha256', bufSecret).update(msgBuf).digest("base64");
  
      if (msgHash === auth) {
        return new Response('{ "type": "message", "text": "You typed: ' + body.text + '" }')
      } else {
        return new Response('authentication failed', {status: 403})
      }
    } catch (err)  {
      return new Response('invalid request ' + err, {status: 400})
    }
  } else {
    return new Response('invalid method', {status: 400})
  }
}
