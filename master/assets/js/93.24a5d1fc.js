(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{675:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-030-authorization-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-030-authorization-module"}},[e._v("#")]),e._v(" ADR 030: Authorization Module")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2019-11-06: Initial Draft")]),e._v(" "),a("li",[e._v("2020-10-12: Updated Draft")]),e._v(" "),a("li",[e._v("2020-11-13: Accepted")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This ADR defines the "),a("code",[e._v("x/authz")]),e._v(" module which allows accounts to grant authorizations to perform actions\non behalf of that account to other accounts.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The concrete use cases which motivated this module include:")]),e._v(" "),a("ul",[a("li",[e._v("the desire to delegate the ability to vote on proposals to other accounts besides the account which one has\ndelegated stake")]),e._v(" "),a("li",[e._v('"sub-keys" functionality, as originally proposed in '),a("a",{attrs:{href:"https://github.com/onomyprotocol/onomy-sdk/issues/4480",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4480"),a("OutboundLink")],1),e._v(" which\nis a term used to describe the functionality provided by this module together with\nthe "),a("code",[e._v("fee_grant")]),e._v(" module from "),a("RouterLink",{attrs:{to:"/architecture/adr-029-fee-grant-module.html"}},[e._v("ADR 029")]),e._v(" and the "),a("a",{attrs:{href:"https://github.com/regen-network/cosmos-modules/tree/master/incubator/group",target:"_blank",rel:"noopener noreferrer"}},[e._v("group module"),a("OutboundLink")],1),e._v(".")],1)]),e._v(" "),a("p",[e._v('The "sub-keys" functionality roughly refers to the ability for one account to grant some subset of its capabilities to\nother accounts with possibly less robust, but easier to use security measures. For instance, a master account representing\nan organization could grant the ability to spend small amounts of the organization\'s funds to individual employee accounts.\nOr an individual (or group) with a multisig wallet could grant the ability to vote on proposals to any one of the member\nkeys.')]),e._v(" "),a("p",[e._v("The current\nimplementation is based on work done by the "),a("a",{attrs:{href:"https://github.com/cosmos-ochainns/onomy-sdk/tree/hackatom/x/delegation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ochainn's team at Hackatom Berlin 2019"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We will create a module named "),a("code",[e._v("authz")]),e._v(" which provides functionality for\ngranting arbitrary privileges from one account (the "),a("em",[e._v("granter")]),e._v(") to another account (the "),a("em",[e._v("grantee")]),e._v("). Authorizations\nmust be granted for a particular "),a("code",[e._v("Msg")]),e._v(" service methods one by one using an implementation\nof "),a("code",[e._v("Authorization")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("Authorizations determine exactly what privileges are granted. They are extensible\nand can be defined for any "),a("code",[e._v("Msg")]),e._v(" service method even outside of the module where\nthe "),a("code",[e._v("Msg")]),e._v(" method is defined. "),a("code",[e._v("Authorization")]),e._v("s use the new "),a("code",[e._v("ServiceMsg")]),e._v(" type from\nADR 031.")]),e._v(" "),a("h4",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBdXRob3JpemF0aW9uIGludGVyZmFjZSB7CgkvLyBNZXRob2ROYW1lIHJldHVybnMgdGhlIGZ1bGx5LXF1YWxpZmllZCBNc2cgc2VydmljZSBtZXRob2QgbmFtZSBhcyBkZXNjcmliZWQgaW4gQURSIDAzMS4KCU1ldGhvZE5hbWUoKSBzdHJpbmcKCgkvLyBBY2NlcHQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgZ3JhbnQgcGVybWl0cyB0aGUgcHJvdmlkZWQgc2RrLlNlcnZpY2VNc2cgdG8gYmUgcGVyZm9ybWVkLCBhbmQgaWYKCS8vIHNvIHByb3ZpZGVzIGFuIHVwZ3JhZGVkIGF1dGhvcml6YXRpb24gaW5zdGFuY2UuCgkvLyBSZXR1cm5zOgoJLy8gKyBhbGxvdzogdHJ1ZSBpZiBtc2cgaXMgYXV0aG9yaXplZAoJLy8gKyB1cGRhdGVkOiBuZXcgQXV0aG9yaXphdGlvbiBpbnN0YW5jZSB3aGljaCBzaG91bGQgb3ZlcndyaXRlIHRoZSBjdXJyZW50IG9uZSB3aXRoIG5ldyBzdGF0ZQoJLy8gKyBkZWxldGU6IHRydWUgaWYgQXV0aG9yaXphdGlvbiBoYXMgYmVlbiBleGhhdXN0ZWQgYW5kIGNhbiBiZSBkZWxldGVkIGZyb20gc3RhdGUKCUFjY2VwdChtc2cgc2RrLlNlcnZpY2VNc2csIGJsb2NrIGFiY2kuSGVhZGVyKSAoYWxsb3cgYm9vbCwgdXBkYXRlZCBBdXRob3JpemF0aW9uLCBkZWxldGUgYm9vbCkKfQo="}}),e._v(" "),a("p",[e._v("For example a "),a("code",[e._v("SendAuthorization")]),e._v(" like this is defined for "),a("code",[e._v("MsgSend")]),e._v(" that takes\na "),a("code",[e._v("SpendLimit")]),e._v(" and updates it down to zero:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTZW5kQXV0aG9yaXphdGlvbiBzdHJ1Y3QgewoJLy8gU3BlbmRMaW1pdCBzcGVjaWZpZXMgdGhlIG1heGltdW0gYW1vdW50IG9mIHRva2VucyB0aGF0IGNhbiBiZSBzcGVudAoJLy8gYnkgdGhpcyBhdXRob3JpemF0aW9uIGFuZCB3aWxsIGJlIHVwZGF0ZWQgYXMgdG9rZW5zIGFyZSBzcGVudC4gSWYgaXQgaXMKCS8vIGVtcHR5LCB0aGVyZSBpcyBubyBzcGVuZCBsaW1pdCBhbmQgYW55IGFtb3VudCBvZiBjb2lucyBjYW4gYmUgc3BlbnQuCglTcGVuZExpbWl0IHNkay5Db2lucwp9CgpmdW5jIChjYXAgU2VuZEF1dGhvcml6YXRpb24pIE1ldGhvZE5hbWUoKSBzdHJpbmcgewoJcmV0dXJuICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZy9TZW5kJnF1b3Q7Cn0KCmZ1bmMgKGNhcCBTZW5kQXV0aG9yaXphdGlvbikgQWNjZXB0KG1zZyBzZGsuU2VydmljZU1zZywgYmxvY2sgYWJjaS5IZWFkZXIpIChhbGxvdyBib29sLCB1cGRhdGVkIEF1dGhvcml6YXRpb24sIGRlbGV0ZSBib29sKSB7Cglzd2l0Y2ggcmVxIDo9IG1zZy5SZXF1ZXN0Lih0eXBlKSB7CgljYXNlIGJhbmsuTXNnU2VuZDoKCQlsZWZ0LCBpbnZhbGlkIDo9IGNhcC5TcGVuZExpbWl0LlNhZmVTdWIocmVxLkFtb3VudCkKCQlpZiBpbnZhbGlkIHsKCQkJcmV0dXJuIGZhbHNlLCBuaWwsIGZhbHNlCgkJfQoJCWlmIGxlZnQuSXNaZXJvKCkgewoJCQlyZXR1cm4gdHJ1ZSwgbmlsLCB0cnVlCgkJfQoJCXJldHVybiB0cnVlLCBTZW5kQXV0aG9yaXphdGlvbntTcGVuZExpbWl0OiBsZWZ0fSwgZmFsc2UKCX0KCXJldHVybiBmYWxzZSwgbmlsLCBmYWxzZQp9Cg=="}}),e._v(" "),a("p",[e._v("A different type of capability for "),a("code",[e._v("MsgSend")]),e._v(" could be implemented\nusing the "),a("code",[e._v("Authorization")]),e._v(" interface with no need to change the underlying\n"),a("code",[e._v("bank")]),e._v(" module.")]),e._v(" "),a("h3",{attrs:{id:"msg-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-service"}},[e._v("#")]),e._v(" "),a("code",[e._v("Msg")]),e._v(" Service")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"c2VydmljZSBNc2cgewogIC8vIEdyYW50QXV0aG9yaXphdGlvbiBncmFudHMgdGhlIHByb3ZpZGVkIGF1dGhvcml6YXRpb24gdG8gdGhlIGdyYW50ZWUgb24gdGhlIGdyYW50ZXIncwogIC8vIGFjY291bnQgd2l0aCB0aGUgcHJvdmlkZWQgZXhwaXJhdGlvbiB0aW1lLgogIHJwYyBHcmFudEF1dGhvcml6YXRpb24oTXNnR3JhbnRBdXRob3JpemF0aW9uKSByZXR1cm5zIChNc2dHcmFudEF1dGhvcml6YXRpb25SZXNwb25zZSk7CgogIC8vIEV4ZWNBdXRob3JpemVkIGF0dGVtcHRzIHRvIGV4ZWN1dGUgdGhlIHByb3ZpZGVkIG1lc3NhZ2VzIHVzaW5nCiAgLy8gYXV0aG9yaXphdGlvbnMgZ3JhbnRlZCB0byB0aGUgZ3JhbnRlZS4gRWFjaCBtZXNzYWdlIHNob3VsZCBoYXZlIG9ubHkKICAvLyBvbmUgc2lnbmVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdyYW50ZXIgb2YgdGhlIGF1dGhvcml6YXRpb24uCiAgLy8gVGhlIGdyYW50ZWUgc2lnbmluZyB0aGlzIG1lc3NhZ2UgbXVzdCBoYXZlIGFuIGF1dGhvcml6YXRpb24gZnJvbSB0aGUgZ3JhbnRlci4KICBycGMgRXhlY0F1dGhvcml6ZWQoTXNnRXhlY0F1dGhvcml6ZWQpIHJldHVybnMgKE1zZ0V4ZWNBdXRob3JpemVkUmVzcG9uc2UpCgoKICAvLyBSZXZva2VBdXRob3JpemF0aW9uIHJldm9rZXMgYW55IGF1dGhvcml6YXRpb24gY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdmlkZWQgbWV0aG9kIG5hbWUgb24gdGhlCiAgLy8gZ3JhbnRlcidzIGFjY291bnQgdGhhdCBoYXMgYmVlbiBncmFudGVkIHRvIHRoZSBncmFudGVlLgogIHJwYyBSZXZva2VBdXRob3JpemF0aW9uKE1zZ1Jldm9rZUF1dGhvcml6YXRpb24pIHJldHVybnMgKE1zZ1Jldm9rZUF1dGhvcml6YXRpb25SZXNwb25zZSk7Cn0KCm1lc3NhZ2UgTXNnR3JhbnRBdXRob3JpemF0aW9uewogIHN0cmluZyBncmFudGVyID0gMTsKICBzdHJpbmcgZ3JhbnRlZSA9IDI7CiAgZ29vZ2xlLnByb3RvYnVmLkFueSBhdXRob3JpemF0aW9uID0gMyBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7XTsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGV4cGlyYXRpb24gPSA0Owp9CgptZXNzYWdlIE1zZ0V4ZWNBdXRob3JpemVkIHsKICAgIHN0cmluZyBncmFudGVlID0gMTsKICAgIHJlcGVhdGVkIGdvb2dsZS5wcm90b2J1Zi5BbnkgbXNncyA9IDI7Cn0KCm1lc3NhZ2UgTXNnUmV2b2tlQXV0aG9yaXphdGlvbnsKICBzdHJpbmcgZ3JhbnRlciA9IDE7CiAgc3RyaW5nIGdyYW50ZWUgPSAyOwogIHN0cmluZyBtZXRob2RfbmFtZSA9IDM7Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"router-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-middleware"}},[e._v("#")]),e._v(" Router Middleware")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("authz")]),e._v(" "),a("code",[e._v("Keeper")]),e._v(" will expose a "),a("code",[e._v("DispatchActions")]),e._v(" method which allows other modules to send "),a("code",[e._v("ServiceMsg")]),e._v("s\nto the router based on "),a("code",[e._v("Authorization")]),e._v(" grants:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLZWVwZXIgaW50ZXJmYWNlIHsKCS8vIERpc3BhdGNoQWN0aW9ucyByb3V0ZXMgdGhlIHByb3ZpZGVkIG1zZ3MgdG8gdGhlaXIgcmVzcGVjdGl2ZSBoYW5kbGVycyBpZiB0aGUgZ3JhbnRlZSB3YXMgZ3JhbnRlZCBhbiBhdXRob3JpemF0aW9uCgkvLyB0byBzZW5kIHRob3NlIG1lc3NhZ2VzIGJ5IHRoZSBmaXJzdCAoYW5kIG9ubHkpIHNpZ25lciBvZiBlYWNoIG1zZy4KICAgIERpc3BhdGNoQWN0aW9ucyhjdHggc2RrLkNvbnRleHQsIGdyYW50ZWUgc2RrLkFjY0FkZHJlc3MsIG1zZ3MgW11zZGsuU2VydmljZU1zZykgc2RrLlJlc3VsdGAKfQo="}}),e._v(" "),a("p",[e._v("This allows the functionality provided by "),a("code",[e._v("authz")]),e._v(" to be used for future inter-module object capabilities\npermissions as described in "),a("a",{attrs:{href:"https://github.com/onomyprotocol/onomy-sdk/7459",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 033"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("h4",{attrs:{id:"tx-exec-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-exec-method"}},[e._v("#")]),e._v(" "),a("code",[e._v("tx exec")]),e._v(" Method")]),e._v(" "),a("p",[e._v("When a CLI user wants to run a transaction on behalf of another account using "),a("code",[e._v("MsgExecAuthorized")]),e._v(", they\ncan use the "),a("code",[e._v("exec")]),e._v(" method. For instance "),a("code",[e._v("ochaincli tx gov vote 1 yes --from <grantee> --generate-only | ochaincli tx authz exec --send-as <granter> --from <grantee>")]),e._v("\nwould send a transaction like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"TXNnRXhlY0F1dGhvcml6ZWQgewogIEdyYW50ZWU6IG15a2V5LAogIE1zZ3M6IFtdc2RrLlNlcmljZU1zZ3sKICAgIFNlcnZpY2VNc2cgewogICAgICBNZXRob2ROYW1lOiZxdW90Oy9jb3Ntb3MuZ292LnYxYmV0YTEuTXNnL1ZvdGUmcXVvdDsKICAgICAgUmVxdWVzdDogTXNnVm90ZSB7CgkgICAgUHJvcG9zYWxJRDogMSwKCSAgICBWb3RlcjogY29zbW9zM3Roc2RnaDk4M2VnaDgyMwoJICAgIE9wdGlvbjogWWVzCiAgICAgIH0KICAgIH0KICB9Cn0K"}}),e._v(" "),a("h4",{attrs:{id:"tx-grant-grantee-authorization-from-granter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-grant-grantee-authorization-from-granter"}},[e._v("#")]),e._v(" "),a("code",[e._v("tx grant <grantee> <authorization> --from <granter>")])]),e._v(" "),a("p",[e._v("This CLI command will send a "),a("code",[e._v("MsgGrantAuthorization")]),e._v(" transaction. "),a("code",[e._v("authorization")]),e._v(" should be encoded as\nJSON on the CLI.")]),e._v(" "),a("h4",{attrs:{id:"tx-revoke-grantee-method-name-from-granter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-revoke-grantee-method-name-from-granter"}},[e._v("#")]),e._v(" "),a("code",[e._v("tx revoke <grantee> <method-name> --from <granter>")])]),e._v(" "),a("p",[e._v("This CLI command will send a "),a("code",[e._v("MsgRevokeAuthorization")]),e._v(" transaction.")]),e._v(" "),a("h3",{attrs:{id:"built-in-authorizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-authorizations"}},[e._v("#")]),e._v(" Built-in Authorizations")]),e._v(" "),a("h4",{attrs:{id:"sendauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendauthorization"}},[e._v("#")]),e._v(" "),a("code",[e._v("SendAuthorization")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gU2VuZEF1dGhvcml6YXRpb24gYWxsb3dzIHRoZSBncmFudGVlIHRvIHNwZW5kIHVwIHRvIHNwZW5kX2xpbWl0IGNvaW5zIGZyb20KLy8gdGhlIGdyYW50ZXIncyBhY2NvdW50LgptZXNzYWdlIFNlbmRBdXRob3JpemF0aW9uIHsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gc3BlbmRfbGltaXQgPSAxOwp9Cg=="}}),e._v(" "),a("h4",{attrs:{id:"genericauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genericauthorization"}},[e._v("#")]),e._v(" "),a("code",[e._v("GenericAuthorization")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gR2VuZXJpY0F1dGhvcml6YXRpb24gZ2l2ZXMgdGhlIGdyYW50ZWUgdW5yZXN0cmljdGVkIHBlcm1pc3Npb25zIHRvIGV4ZWN1dGUKLy8gdGhlIHByb3ZpZGUgbWV0aG9kIG9uIGJlaGFsZiBvZiB0aGUgZ3JhbnRlcidzIGFjY291bnQuCm1lc3NhZ2UgR2VuZXJpY0F1dGhvcml6YXRpb24gewogIHN0cmluZyBtZXRob2RfbmFtZSA9IDE7Cn0K"}}),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Users will be able to authorize arbitrary actions on behalf of their accounts to other\nusers, improving key management for many use cases")]),e._v(" "),a("li",[e._v("The solution is more generic than previously considered approaches and the\n"),a("code",[e._v("Authorization")]),e._v(" interface approach can be extended to cover other use cases by\nSDK users")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("Initial Hackatom implementation: https://github.com/cosmos-ochainns/onomy-sdk/tree/hackatom/x/delegation")]),e._v(" "),a("li",[e._v("Post-Hackatom spec: https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#delegation-module")]),e._v(" "),a("li",[e._v("B-Harvest subkeys spec: https://github.com/onomyprotocol/onomy-sdk/issues/4480")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);