var ws = require('../lib/ws.js')

var handlers = [new ws.Addr("http://www.w3.org/2005/08/addressing")
  , new ws.Http()
]

var request = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" +
  "<soap:Body>" +
  "<Add xmlns='http://tempuri.org/'>" +
  "<intA>999</intA>" +
  "<intB>100002</intB>" +
  "</Add>" +
  "</soap:Body>" +
  "</soap:Envelope>"

var ctx = {
  request: request
  , url: "http://www.dneonline.com/calculator.asmx"
  , action: "http://tempuri.org/Add"
  , contentType: "text/xml; charset=utf-8"
}

ws.get(handlers, ctx).then((res) => {
  console.log("status " + res.statusCode);
  console.log(res.response);
});