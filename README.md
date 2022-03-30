# some-protos-ts

A repo containing TypeScript code compiled from protobufs contained in 
[some-protos](https://github.com/kevinmichaelchen/some-protos).

This build is powered by the [ts-proto](https://github.com/stephenh/ts-proto) 
library.

There are lots of [build options](https://github.com/stephenh/ts-proto#supported-options)
worth considering:
* `context=true` — allows for a Go-style `ctx` parameter for logging and tracing
* `forceLong=long` — all 64-bit numbers will be parsed with the [long](https://www.npmjs.com/package/long) library
* `esModuleInterop=true` — `esModuleInterop` compliance
* and more