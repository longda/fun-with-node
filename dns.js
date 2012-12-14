var dns = require('dns');


// resolve all IPV4 (A records)
dns.resolve4('www.google.com', function (err, addresses) {
  if (err) throw err;

  console.log('resolved ipv4 addresses: ' + JSON.stringify(addresses));

  addresses.forEach(function (a) {
    dns.reverse(a, function (err, domains) {
      if (err) {
        throw err;
      }

      console.log('reverse for ' + a + ': ' + JSON.stringify(domains));
    });
  });
});


// resolve all (the first one found?) DNS records (A, AAAA, MX, TXT, SRV, PTR, NS, CNAME)
dns.resolve('github.com', function (err, addresses) {
  if (err) throw err;

  console.log('resolved addresses: ' + JSON.stringify(addresses));
});


// resolve the mx record

dns.resolveMx('davecancode.com', function (err, addresses) {
  if (err) throw err;

  console.log('resolved mx addresses: ' + JSON.stringify(addresses));
});