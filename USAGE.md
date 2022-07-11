curl localhost:3000  

curl localhost:3000/bye  

curl localhost:3000/bye?deprecated=true

 curl localhost:3000/secret -H "x-auth: secret" 

  curl localhost:3000/secret -H "x-auth: wrong" 

curl "localhost:3000/evens?v=2"  // note, pipes show for this, but not others, because others have no params

curl "localhost:3000/evens?v=3"  // note the special error

url "localhost:3000/error" // note generic error
