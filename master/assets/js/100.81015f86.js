(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{599:function(l,e,c){"use strict";c.r(e);var a=c(1),t=Object(a.a)({},(function(){var l=this,e=l.$createElement,c=l._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[c("h1",{attrs:{id:"adr-038-kvstore-state-listening"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#adr-038-kvstore-state-listening"}},[l._v("#")]),l._v(" ADR 038: KVStore state listening")]),l._v(" "),c("h2",{attrs:{id:"changelog"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[l._v("#")]),l._v(" Changelog")]),l._v(" "),c("ul",[c("li",[l._v("11/23/2020: Initial draft")])]),l._v(" "),c("h2",{attrs:{id:"status"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[l._v("#")]),l._v(" Status")]),l._v(" "),c("p",[l._v("Proposed")]),l._v(" "),c("h2",{attrs:{id:"abstract"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[l._v("#")]),l._v(" Abstract")]),l._v(" "),c("p",[l._v("This ADR defines a set of changes to enable listening to state changes of individual KVStores and exposing these data to consumers.")]),l._v(" "),c("h2",{attrs:{id:"context"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[l._v("#")]),l._v(" Context")]),l._v(" "),c("p",[l._v("Currently, KVStore data can be remotely accessed through "),c("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/building-modules/messages-and-queries.md#queries",target:"_blank",rel:"noopener noreferrer"}},[l._v("Queries"),c("OutboundLink")],1),l._v("\nwhich proceed either through Tendermint and the ABCI, or through the gRPC server.\nIn addition to these request/response queries, it would be beneficial to have a means of listening to state changes as they occur in real time.")]),l._v(" "),c("h2",{attrs:{id:"decision"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[l._v("#")]),l._v(" Decision")]),l._v(" "),c("p",[l._v("We will modify the "),c("code",[l._v("MultiStore")]),l._v(" interface and its concrete ("),c("code",[l._v("rootmulti")]),l._v(" and "),c("code",[l._v("cachemulti")]),l._v(") implementations and introduce a new "),c("code",[l._v("listenkv.Store")]),l._v(" to allow listening to state changes in underlying KVStores.\nWe will also introduce the tooling for writing these state changes out to files and configuring this service.")]),l._v(" "),c("h3",{attrs:{id:"listening-interface"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#listening-interface"}},[l._v("#")]),l._v(" Listening interface")]),l._v(" "),c("p",[l._v("In a new file, "),c("code",[l._v("store/types/listening.go")]),l._v(", we will create a "),c("code",[l._v("WriteListener")]),l._v(" interface for streaming out state changes from a KVStore.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gV3JpdGVMaXN0ZW5lciBpbnRlcmZhY2UgZm9yIHN0cmVhbWluZyBkYXRhIG91dCBmcm9tIGEgbGlzdGVua3YuU3RvcmUKdHlwZSBXcml0ZUxpc3RlbmVyIGludGVyZmFjZSB7CgkvLyBpZiB2YWx1ZSBpcyBuaWwgdGhlbiBpdCB3YXMgZGVsZXRlZAoJLy8gc3RvcmVLZXkgaW5kaWNhdGVzIHRoZSBzb3VyY2UgS1ZTdG9yZSwgdG8gZmFjaWxpdGF0ZSB1c2luZyB0aGUgdGhlIHNhbWUgV3JpdGVMaXN0ZW5lciBhY3Jvc3Mgc2VwYXJhdGUgS1ZTdG9yZXMKCS8vIHNldCBib29sIGluZGljYXRlcyBpZiBpdCB3YXMgYSBzZXQ7IHRydWU6IHNldCwgZmFsc2U6IGRlbGV0ZQogICAgT25Xcml0ZShzdG9yZUtleSBTdG9yZUtleSwga2V5IFtdYnl0ZSwgdmFsdWUgW11ieXRlLCBkZWxldGUgYm9vbCkgZXJyb3IKfQo="}}),l._v(" "),c("h3",{attrs:{id:"listener-type"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#listener-type"}},[l._v("#")]),l._v(" Listener type")]),l._v(" "),c("p",[l._v("We will create a concrete implementation of the "),c("code",[l._v("WriteListener")]),l._v(" interface in "),c("code",[l._v("store/types/listening.go")]),l._v(", that writes out protobuf\nencoded KV pairs to an underlying "),c("code",[l._v("io.Writer")]),l._v(".")]),l._v(" "),c("p",[l._v("This will include defining a simple protobuf type for the KV pairs. In addition to the key and value fields this message\nwill include the StoreKey for the originating KVStore so that we can write out from separate KVStores to the same stream/file\nand determine the source of each KV pair.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZUtWUGFpciB7CiAgb3B0aW9uYWwgc3RyaW5nIHN0b3JlX2tleSA9IDE7IC8vIHRoZSBzdG9yZSBrZXkgZm9yIHRoZSBLVlN0b3JlIHRoaXMgcGFpciBvcmlnaW5hdGVzIGZyb20KICByZXF1aXJlZCBib29sIHNldCA9IDI7IC8vIHRydWUgaW5kaWNhdGVzIGEgc2V0IG9wZXJhdGlvbiwgZmFsc2UgaW5kaWNhdGVzIGEgZGVsZXRlIG9wZXJhdGlvbgogIHJlcXVpcmVkIGJ5dGVzIGtleSA9IDM7CiAgcmVxdWlyZWQgYnl0ZXMgdmFsdWUgPSA0Owp9Cg=="}}),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIGlzIHVzZWQgdG8gY29uZmlndXJlIGxpc3RlbmluZyB0byBhIEtWU3RvcmUgYnkgd3JpdGluZyBvdXQgbGVuZ3RoLXByZWZpeGVkCi8vIHByb3RvYnVmIGVuY29kZWQgU3RvcmVLVlBhaXJzIHRvIGFuIHVuZGVybHlpbmcgaW8uV3JpdGVyCnR5cGUgU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIHN0cnVjdCB7Cgl3cml0ZXIgaW8uV3JpdGVyCgltYXJzaGFsbGVyIGNvZGVjLkJpbmFyeU1hcnNoYWxlcgp9CgovLyBOZXdTdG9yZUtWUGFpcldyaXRlTGlzdGVuZXIgd3JhcHMgY3JlYXRlcyBhIFN0b3JlS1ZQYWlyV3JpdGVMaXN0ZW5lciB3aXRoIGEgcHJvdmRpZWQgaW8uV3JpdGVyIGFuZCBjb2RlYy5CaW5hcnlNYXJzaGFsZXIKZnVuYyBOZXdTdG9yZUtWUGFpcldyaXRlTGlzdGVuZXIodyBpby5Xcml0ZXIsIG0gY29kZWMuQmluYXJ5TWFyc2hhbGVyKSAqU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyIHsKCXJldHVybiAmYW1wO1N0b3JlS1ZQYWlyV3JpdGVMaXN0ZW5lcnsKCQl3cml0ZXI6IHcsCgkJbWFyc2hhbGxlcjogbSwKCX0KfQoKLy8gT25Xcml0ZSBzYXRpc2ZpZXMgdGhlIFdyaXRlTGlzdGVuZXIgaW50ZXJmYWNlIGJ5IHdyaXRpbmcgbGVuZ3RoLXByZWZpeGVkIHByb3RvYnVmIGVuY29kZWQgU3RvcmVLVlBhaXJzCmZ1bmMgKHdsICpTdG9yZUtWUGFpcldyaXRlTGlzdGVuZXIpIE9uV3JpdGUoc3RvcmVLZXkgdHlwZXMuU3RvcmVLZXksIGtleSBbXWJ5dGUsIHZhbHVlIFtdYnl0ZSwgZGVsZXRlIGJvb2wpIGVycm9yIGVycm9yIHsKCWt2UGFpciA6PSBuZXcodHlwZXMuU3RvcmVLVlBhaXIpCglrdlBhaXIuU3RvcmVLZXkgPSBzdG9yZUtleS5OYW1lKCkKCWt2UGFpci5EZWxldGUgPSBEZWxldGUKCWt2UGFpci5LZXkgPSBrZXkKCWt2UGFpci5WYWx1ZSA9IHZhbHVlCglieSwgZXJyIDo9IHdsLm1hcnNoYWxsZXIuTWFyc2hhbEJpbmFyeUxlbmd0aFByZWZpeGVkKGt2UGFpcikKCWlmIGVyciAhPSBuaWwgewogICAgICAgICAgICAgICAgcmV0dXJuIGVycgoJfQogICAgICAgIGlmIF8sIGVyciA6PSB3bC53cml0ZXIuV3JpdGUoYnkpOyBlcnIgIT0gbmlsIHsKICAgICAgICAJcmV0dXJuIGVycgogICAgICAgIH0KICAgICAgICByZXR1cm4gbmlsCn0K"}}),l._v(" "),c("h3",{attrs:{id:"listenkvstore"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#listenkvstore"}},[l._v("#")]),l._v(" ListenKVStore")]),l._v(" "),c("p",[l._v("We will create a new "),c("code",[l._v("Store")]),l._v(" type "),c("code",[l._v("listenkv.Store")]),l._v(" that the "),c("code",[l._v("MultiStore")]),l._v(" wraps around a "),c("code",[l._v("KVStore")]),l._v(" to enable state listening.\nWe can configure the "),c("code",[l._v("Store")]),l._v(" with a set of "),c("code",[l._v("WriteListener")]),l._v("s which stream the output to specific destinations.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgaW1wbGVtZW50cyB0aGUgS1ZTdG9yZSBpbnRlcmZhY2Ugd2l0aCBsaXN0ZW5pbmcgZW5hYmxlZC4KLy8gT3BlcmF0aW9ucyBhcmUgdHJhY2VkIG9uIGVhY2ggY29yZSBLVlN0b3JlIGNhbGwgYW5kIHdyaXR0ZW4gdG8gYW55IG9mIHRoZQovLyB1bmRlcmx5aW5nIGxpc3RlbmVycyB3aXRoIHRoZSBwcm9wZXIga2V5IGFuZCBvcGVyYXRpb24gcGVybWlzc2lvbnMKdHlwZSBTdG9yZSBzdHJ1Y3QgewoJcGFyZW50ICAgIHR5cGVzLktWU3RvcmUKCWxpc3RlbmVycyBbXXR5cGVzLldyaXRlTGlzdGVuZXIKCXBhcmVudFN0b3JlS2V5IHR5cGVzLlN0b3JlS2V5Cn0KCi8vIE5ld1N0b3JlIHJldHVybnMgYSByZWZlcmVuY2UgdG8gYSBuZXcgdHJhY2VLVlN0b3JlIGdpdmVuIGEgcGFyZW50Ci8vIEtWU3RvcmUgaW1wbGVtZW50YXRpb24gYW5kIGEgYnVmZmVyZWQgd3JpdGVyLgpmdW5jIE5ld1N0b3JlKHBhcmVudCB0eXBlcy5LVlN0b3JlLCBwc2sgdHlwZXMuU3RvcmVLZXksIGxpc3RlbmVycyBbXXR5cGVzLldyaXRlTGlzdGVuZXIpICpTdG9yZSB7CglyZXR1cm4gJmFtcDtTdG9yZXtwYXJlbnQ6IHBhcmVudCwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHBhcmVudFN0b3JlS2V5OiBwc2t9Cn0KCi8vIFNldCBpbXBsZW1lbnRzIHRoZSBLVlN0b3JlIGludGVyZmFjZS4gSXQgdHJhY2VzIGEgd3JpdGUgb3BlcmF0aW9uIGFuZAovLyBkZWxlZ2F0ZXMgdGhlIFNldCBjYWxsIHRvIHRoZSBwYXJlbnQgS1ZTdG9yZS4KZnVuYyAocyAqU3RvcmUpIFNldChrZXkgW11ieXRlLCB2YWx1ZSBbXWJ5dGUpIHsKCXR5cGVzLkFzc2VydFZhbGlkS2V5KGtleSkKCXMucGFyZW50LlNldChrZXksIHZhbHVlKQoJcy5vbldyaXRlKGZhbHNlLCBrZXksIHZhbHVlKQp9CgovLyBEZWxldGUgaW1wbGVtZW50cyB0aGUgS1ZTdG9yZSBpbnRlcmZhY2UuIEl0IHRyYWNlcyBhIHdyaXRlIG9wZXJhdGlvbiBhbmQKLy8gZGVsZWdhdGVzIHRoZSBEZWxldGUgY2FsbCB0byB0aGUgcGFyZW50IEtWU3RvcmUuCmZ1bmMgKHMgKlN0b3JlKSBEZWxldGUoa2V5IFtdYnl0ZSkgewoJcy5wYXJlbnQuRGVsZXRlKGtleSkKCXMub25Xcml0ZSh0cnVlLCBrZXksIG5pbCkKfQoKLy8gb25Xcml0ZSB3cml0ZXMgYSBLVlN0b3JlIG9wZXJhdGlvbiB0byBhbGwgb2YgdGhlIFdyaXRlTGlzdGVuZXJzCmZ1bmMgKHMgKlN0b3JlKSBvbldyaXRlKGRlbGV0ZSBib29sLCBrZXksIHZhbHVlIFtdYnl0ZSkgewoJZm9yIF8sIGwgOj0gcmFuZ2Ugcy5saXN0ZW5lcnMgewoJCWlmIGVyciA6PSBsLk9uV3JpdGUocy5wYXJlbnRTdG9yZUtleSwga2V5LCB2YWx1ZSwgZGVsZXRlKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgLy8gbG9nIGVycm9yCiAgICAgICAgICAgICAgICB9Cgl9Cn0K"}}),l._v(" "),c("h3",{attrs:{id:"multistore-interface-updates"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#multistore-interface-updates"}},[l._v("#")]),l._v(" MultiStore interface updates")]),l._v(" "),c("p",[l._v("We will update the "),c("code",[l._v("MultiStore")]),l._v(" interface to allow us to wrap a set of listeners around a specific "),c("code",[l._v("KVStore")]),l._v(".\nAdditionally, we will update the "),c("code",[l._v("CacheWrap")]),l._v(" and "),c("code",[l._v("CacheWrapper")]),l._v(" interfaces to enable listening in the caching layer.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNdWx0aVN0b3JlIGludGVyZmFjZSB7CgkuLi4KCgkvLyBMaXN0ZW5pbmdFbmFibGVkIHJldHVybnMgaWYgbGlzdGVuaW5nIGlzIGVuYWJsZWQgZm9yIHRoZSBLVlN0b3JlIGJlbG9uZ2luZyB0aGUgcHJvdmlkZWQgU3RvcmVLZXkKCUxpc3RlbmluZ0VuYWJsZWQoa2V5IFN0b3JlS2V5KSBib29sCgoJLy8gQWRkTGlzdGVuZXJzIGFkZHMgV3JpdGVMaXN0ZW5lcnMgZm9yIHRoZSBLVlN0b3JlIGJlbG9uZ2luZyB0byB0aGUgcHJvdmlkZWQgU3RvcmVLZXkKCS8vIEl0IGFwcGVuZHMgdGhlIGxpc3RlbmVycyB0byBhIGN1cnJlbnQgc2V0LCBpZiBvbmUgYWxyZWFkeSBleGlzdHMKCUFkZExpc3RlbmVycyhrZXkgU3RvcmVLZXksIGxpc3RlbmVycyBbXVdyaXRlTGlzdGVuZXIpCn0K"}}),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDYWNoZVdyYXAgaW50ZXJmYWNlIHsKCS4uLgoKCS8vIENhY2hlV3JhcFdpdGhMaXN0ZW5lcnMgcmVjdXJzaXZlbHkgd3JhcHMgYWdhaW4gd2l0aCBsaXN0ZW5pbmcgZW5hYmxlZAoJQ2FjaGVXcmFwV2l0aExpc3RlbmVycyhzdG9yZUtleSB0eXBlcy5TdG9yZUtleSwgbGlzdGVuZXJzIFtdV3JpdGVMaXN0ZW5lcikgQ2FjaGVXcmFwCn0KCnR5cGUgQ2FjaGVXcmFwcGVyIGludGVyZmFjZSB7CgkuLi4KCgkvLyBDYWNoZVdyYXBXaXRoTGlzdGVuZXJzIHJlY3Vyc2l2ZWx5IHdyYXBzIGFnYWluIHdpdGggbGlzdGVuaW5nIGVuYWJsZWQKCUNhY2hlV3JhcFdpdGhMaXN0ZW5lcnMoc3RvcmVLZXkgdHlwZXMuU3RvcmVLZXksIGxpc3RlbmVycyBbXVdyaXRlTGlzdGVuZXIpIENhY2hlV3JhcAp9Cg=="}}),l._v(" "),c("h3",{attrs:{id:"multistore-implementation-updates"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#multistore-implementation-updates"}},[l._v("#")]),l._v(" MultiStore implementation updates")]),l._v(" "),c("p",[l._v("We will modify all of the "),c("code",[l._v("Store")]),l._v(" and "),c("code",[l._v("MultiStore")]),l._v(" implementations to satisfy these new interfaces, and adjust the "),c("code",[l._v("rootmulti")]),l._v(" "),c("code",[l._v("GetKVStore")]),l._v(" method\nto wrap the returned "),c("code",[l._v("KVStore")]),l._v(" with a "),c("code",[l._v("listenkv.Store")]),l._v(" if listening is turned on for that "),c("code",[l._v("Store")]),l._v(".")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocnMgKlN0b3JlKSBHZXRLVlN0b3JlKGtleSB0eXBlcy5TdG9yZUtleSkgdHlwZXMuS1ZTdG9yZSB7CglzdG9yZSA6PSBycy5zdG9yZXNba2V5XS4odHlwZXMuS1ZTdG9yZSkKCglpZiBycy5UcmFjaW5nRW5hYmxlZCgpIHsKCQlzdG9yZSA9IHRyYWNla3YuTmV3U3RvcmUoc3RvcmUsIHJzLnRyYWNlV3JpdGVyLCBycy50cmFjZUNvbnRleHQpCgl9CglpZiBycy5MaXN0ZW5pbmdFbmFibGVkKGtleSkgewoJCXN0b3JlID0gbGlzdGVua3YuTmV3U3RvcmUoa2V5LCBzdG9yZSwgcnMubGlzdGVuZXJzW2tleV0pCgl9CgoJcmV0dXJuIHN0b3JlCn0K"}}),l._v(" "),c("p",[l._v("We will also adjust the "),c("code",[l._v("cachemulti")]),l._v(" constructor methods and the "),c("code",[l._v("rootmulti")]),l._v(" "),c("code",[l._v("CacheMultiStore")]),l._v(" method to forward the listeners\nto and enable listening in the cache layer.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocnMgKlN0b3JlKSBDYWNoZU11bHRpU3RvcmUoKSB0eXBlcy5DYWNoZU11bHRpU3RvcmUgewoJc3RvcmVzIDo9IG1ha2UobWFwW3R5cGVzLlN0b3JlS2V5XXR5cGVzLkNhY2hlV3JhcHBlcikKCWZvciBrLCB2IDo9IHJhbmdlIHJzLnN0b3JlcyB7CgkJc3RvcmVzW2tdID0gdgoJfQoJcmV0dXJuIGNhY2hlbXVsdGkuTmV3U3RvcmUocnMuZGIsIHN0b3JlcywgcnMua2V5c0J5TmFtZSwgcnMudHJhY2VXcml0ZXIsIHJzLnRyYWNlQ29udGV4dCwgcnMubGlzdGVuZXJzKQp9Cg=="}}),l._v(" "),c("h3",{attrs:{id:"exposing-the-data"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#exposing-the-data"}},[l._v("#")]),l._v(" Exposing the data")]),l._v(" "),c("p",[l._v("We will introduce a new "),c("code",[l._v("StreamingService")]),l._v(" interface for exposing "),c("code",[l._v("WriteListener")]),l._v(" data streams to external consumers.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSG9vayBpbnRlcmZhY2UgdXNlZCB0byBob29rIGludG8gdGhlIEFCQ0kgbWVzc2FnZSBwcm9jZXNzaW5nIG9mIHRoZSBCYXNlQXBwCnR5cGUgSG9vayBpbnRlcmZhY2UgewoJTGlzdGVuQmVnaW5CbG9jayhjdHggc2RrLkNvbnRleHQsIHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrLCByZXMgYWJjaS5SZXNwb25zZUJlZ2luQmxvY2spIC8vIHVwZGF0ZSB0aGUgc3RyZWFtaW5nIHNlcnZpY2Ugd2l0aCB0aGUgbGF0ZXN0IEJlZ2luQmxvY2sgbWVzc2FnZXMKCUxpc3RlbkVuZEJsb2NrKGN0eCBzZGsuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdEVuZEJsb2NrLCByZXMgYWJjaS5SZXNwb25zZUVuZEJsb2NrKSAvLyB1cGRhdGUgdGhlIHN0ZWFtaW5nIHNlcnZpY2Ugd2l0aCB0aGUgbGF0ZXN0IEVuZEJsb2NrIG1lc3NhZ2VzCglMaXN0ZW5EZWxpdmVyVHgoY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0RGVsaXZlclR4LCByZXMgYWJjaS5SZXNwb25zZURlbGl2ZXJUeCkgLy8gdXBkYXRlIHRoZSBzdGVhbWluZyBzZXJ2aWNlIHdpdGggdGhlIGxhdGVzdCBEZWxpdmVyVHggbWVzc2FnZXMKfQoKLy8gU3RyZWFtaW5nU2VydmljZSBpbnRlcmZhY2UgZm9yIHJlZ2lzdGVyaW5nIFdyaXRlTGlzdGVuZXJzIHdpdGggdGhlIEJhc2VBcHAgYW5kIHVwZGF0aW5nIHRoZSBzZXJ2aWNlIHdpdGggdGhlIEFCQ0kgbWVzc2FnZXMgdXNpbmcgdGhlIGhvb2tzCnR5cGUgU3RyZWFtaW5nU2VydmljZSBpbnRlcmZhY2UgewoJU3RyZWFtKHdnICpzeW5jLldhaXRHcm91cCwgcXVpdENoYW4gJmx0Oy1jaGFuIHN0cnVjdHt9KSAvLyBzdHJlYW1pbmcgc2VydmljZSBsb29wLCBhd2FpdHMga3YgcGFpcnMgYW5kIHdyaXRlcyB0aGVtIHRvIHNvbWUgZGVzdGluYXRpb24gc3RyZWFtIG9yIGZpbGUKCUxpc3RlbmVycygpIG1hcFtzZGsuU3RvcmVLZXldW11zdG9yZVR5cGVzLldyaXRlTGlzdGVuZXIgLy8gcmV0dXJucyB0aGUgc3RyZWFtaW5nIHNlcnZpY2UncyBsaXN0ZW5lcnMgZm9yIHRoZSBCYXNlQXBwIHRvIHJlZ2lzdGVyCglIb29rCn0K"}}),l._v(" "),c("h4",{attrs:{id:"writing-state-changes-to-files"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#writing-state-changes-to-files"}},[l._v("#")]),l._v(" Writing state changes to files")]),l._v(" "),c("p",[l._v("We will introduce an implementation of "),c("code",[l._v("StreamingService")]),l._v(" which writes state changes out to files as length-prefixed protobuf encoded "),c("code",[l._v("StoreKVPair")]),l._v("s.\nThis service uses the same "),c("code",[l._v("StoreKVPairWriteListener")]),l._v(" for every KVStore, writing all the KV pairs from every KVStore\nout to the same files, relying on the "),c("code",[l._v("StoreKey")]),l._v(" field in the "),c("code",[l._v("StoreKVPair")]),l._v(" protobuf message to later distinguish the source for each pair.")]),l._v(" "),c("p",[l._v("The file naming schema is as such:")]),l._v(" "),c("ul",[c("li",[l._v("After every "),c("code",[l._v("BeginBlock")]),l._v(" request a new file is created with the name "),c("code",[l._v("block-{N}-begin")]),l._v(", where N is the block number. All\nsubsequent state changes are written out to this file until the first "),c("code",[l._v("DeliverTx")]),l._v(" request is received. At the head of these files,\nthe length-prefixed protobuf encoded "),c("code",[l._v("BeginBlock")]),l._v(" request is written, and the response is written at the tail.")]),l._v(" "),c("li",[l._v("After every "),c("code",[l._v("DeliverTx")]),l._v(" request a new file is created with the name "),c("code",[l._v("block-{N}-tx-{M}")]),l._v(" where N is the block number and M\nis the tx number in the block (i.e. 0, 1, 2...). All subsequent state changes are written out to this file until the next\n"),c("code",[l._v("DeliverTx")]),l._v(" request is received or an "),c("code",[l._v("EndBlock")]),l._v(" request is received. At the head of these files, the length-prefixed protobuf\nencoded "),c("code",[l._v("DeliverTx")]),l._v(" request is written, and the response is written at the tail.")]),l._v(" "),c("li",[l._v("After every "),c("code",[l._v("EndBlock")]),l._v(" request a new file is created with the name "),c("code",[l._v("block-{N}-end")]),l._v(", where N is the block number. All\nsubsequent state changes are written out to this file until the next "),c("code",[l._v("BeginBlock")]),l._v(" request is received. At the head of these files,\nthe length-prefixed protobuf encoded "),c("code",[l._v("EndBlock")]),l._v(" request is written, and the response is written at the tail.")])]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRmlsZVN0cmVhbWluZ1NlcnZpY2UgaXMgYSBjb25jcmV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBTdHJlYW1pbmdTZXJ2aWNlIHRoYXQgd3JpdGVzIHN0YXRlIGNoYW5nZXMgb3V0IHRvIGEgZmlsZQp0eXBlIEZpbGVTdHJlYW1pbmdTZXJ2aWNlIHN0cnVjdCB7CglsaXN0ZW5lcnMgbWFwW3Nkay5TdG9yZUtleV1bXXN0b3JlVHlwZXMuV3JpdGVMaXN0ZW5lciAvLyB0aGUgbGlzdGVuZXJzIHRoYXQgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIEJhc2VBcHAKCXNyY0NoYW4gJmx0Oy1jaGFuIFtdYnl0ZSAvLyB0aGUgY2hhbm5lbCB0aGF0IGFsbCBvZiB0aGUgV3JpdGVMaXN0ZW5lcnMgd3JpdGUgdGhlaXIgZGF0YSBvdXQgdG8KCWZpbGVQcmVmaXggc3RyaW5nIC8vIG9wdGlvbmFsIHByZWZpeCBmb3IgZWFjaCBvZiB0aGUgZ2VuZXJhdGVkIGZpbGVzCgl3cml0ZURpciBzdHJpbmcgLy8gZGlyZWN0b3J5IHRvIHdyaXRlIGZpbGVzIGludG8KCWRzdEZpbGUgKm9zLkZpbGUgLy8gdGhlIGN1cnJlbnQgd3JpdGUgb3V0cHV0IGZpbGUKCW1hcnNoYWxsZXIgY29kZWMuQmluYXJ5TWFyc2hhbGVyIC8vIG1hcnNoYWxsZXIgdXNlZCBmb3IgcmUtbWFyc2hhbGxpbmcgdGhlIEFCQ0kgbWVzc2FnZXMgdG8gd3JpdGUgdGhlbSBvdXQgdG8gdGhlIGRlc3RpbmF0aW9uIGZpbGVzCglzdGF0ZUNhY2hlIFtdW11ieXRlIC8vIGNhY2hlIHRoZSBwcm90b2J1ZiBiaW5hcnkgZW5jb2RlZCBTdG9yZUtWUGFpcnMgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHJlY2VpdmVkCn0K"}}),l._v(" "),c("p",[l._v("This streaming service uses a single instance of a simple intermediate "),c("code",[l._v("io.Writer")]),l._v(" as the underlying "),c("code",[l._v("io.Writer")]),l._v(" for its single "),c("code",[l._v("StoreKVPairWriteListener")]),l._v(",\nIt collects KV pairs from every KVStore synchronously off of the same channel, caching them in the order they are received, and then writing\nthem out to a file generated in response to an ABCI message hook. Files are named as outlined above, with optional prefixes to avoid potential naming collisions\nacross separate instances.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gaW50ZXJtZWRpYXRlV3JpdGVyIGlzIHVzZWQgc28gdGhhdCB3ZSBkbyBub3QgbmVlZCB0byB1cGRhdGUgdGhlIHVuZGVybHlpbmcgaW8uV3JpdGVyIGluc2lkZSB0aGUgU3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyCi8vIGV2ZXJ5dGltZSB3ZSBiZWdpbiB3cml0aW5nIHRvIGEgbmV3IGZpbGUKdHlwZSBpbnRlcm1lZGlhdGVXcml0ZXIgc3RydWN0IHsKCW91dENoYW4gY2hhbiAmbHQ7LVtdYnl0ZQp9CgovLyBOZXdJbnRlcm1lZGlhdGVXcml0ZXIgY3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIGludGVybWVkaWF0ZVdyaXRlciB0aGF0IHNlbmRzIHRvIHRoZSBwcm92aWRlZCBjaGFubmVsCmZ1bmMgTmV3SW50ZXJtZWRpYXRlV3JpdGVyKG91dENoYW4gY2hhbiAmbHQ7LVtdYnl0ZSkgKmludGVybWVkaWF0ZVdyaXRlciB7CglyZXR1cm4gJmFtcDtpbnRlcm1lZGlhdGVXcml0ZXJ7CgkJb3V0Q2hhbjogb3V0Q2hhbiwKCX0KfQoKLy8gV3JpdGUgc2F0aXNmaWVzIGlvLldyaXRlcgpmdW5jIChpdyAqaW50ZXJtZWRpYXRlV3JpdGVyKSBXcml0ZShiIFtdYnl0ZSkgKGludCwgZXJyb3IpIHsKCWl3Lm91dENoYW4gJmx0Oy0gYgoJcmV0dXJuIGxlbihiKSwgbmlsCn0KCi8vIE5ld0ZpbGVTdHJlYW1pbmdTZXJ2aWNlIGNyZWF0ZXMgYSBuZXcgRmlsZVN0cmVhbWluZ1NlcnZpY2UgZm9yIHRoZSBwcm92aWRlZCB3cml0ZURpciwgKG9wdGlvbmFsKSBmaWxlUHJlZml4LCBhbmQgc3RvcmVLZXlzCmZ1bmMgTmV3RmlsZVN0cmVhbWluZ1NlcnZpY2Uod3JpdGVEaXIsIGZpbGVQcmVmaXggc3RyaW5nLCBzdG9yZUtleXMgW11zZGsuU3RvcmVLZXksIG0gY29kZWMuQmluYXJ5TWFyc2hhbGVyKSAoKkZpbGVTdHJlYW1pbmdTZXJ2aWNlLCBlcnJvcikgewoJbGlzdGVuQ2hhbiA6PSBtYWtlKGNoYW4gW11ieXRlLCAwKQoJaXcgOj0gTmV3SW50ZXJtZWRpYXRlV3JpdGVyKGxpc3RlbkNoYW4pCglsaXN0ZW5lciA6PSBsaXN0ZW4uTmV3U3RvcmVLVlBhaXJXcml0ZUxpc3RlbmVyKGl3LCBtKQoJbGlzdG5lcnMgOj0gbWFrZShtYXBbc2RrLlN0b3JlS2V5XVtdc3RvcmVUeXBlcy5Xcml0ZUxpc3RlbmVyLCBsZW4oc3RvcmVLZXlzKSkKCS8vIGluIHRoaXMgY2FzZSwgd2UgYXJlIHVzaW5nIHRoZSBzYW1lIGxpc3RlbmVyIGZvciBlYWNoIFN0b3JlCglmb3IgXywga2V5IDo9IHJhbmdlIHN0b3JlS2V5cyB7CgkJbGlzdGVuZXJzW2tleV0gPSBsaXN0ZW5lcgoJfQoJLy8gY2hlY2sgdGhhdCB0aGUgd3JpdGVEaXIgZXhpc3RzIGFuZCBpcyB3cml0ZWFibGUgc28gdGhhdCB3ZSBjYW4gY2F0Y2ggdGhlIGVycm9yIGhlcmUgYXQgaW5pdGlhbGl6YXRpb24gaWYgaXQgaXMgbm90CgkvLyB3ZSBkb24ndCBvcGVuIGEgZHN0RmlsZSB1bnRpbCB3ZSByZWNlaXZlIG91ciBmaXJzdCBBQkNJIG1lc3NhZ2UKCWlmIGVyciA6PSBmaWxldXRpbC5Jc0RpcldyaXRlYWJsZSh3cml0ZURpcik7IGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoJcmV0dXJuICZhbXA7RmlsZVN0cmVhbWluZ1NlcnZpY2V7CgkJbGlzdGVuZXJzOiBsaXN0ZW5lcnMsCgkJc3JjQ2hhbjogbGlzdGVuQ2hhbiwKCQlmaWxlUHJlZml4OiBmaWxlUHJlZml4LAoJCXdyaXRlRGlyOiB3cml0ZURpciwKCQltYXJzaGFsbGVyOiBtLAoJCXN0YXRlQ2FjaGU6IG1ha2UoW11bXWJ5dGUsIDApLAoJfSwgbmlsCn0KCi8vIExpc3RlbmVycyByZXR1cm5zIHRoZSBTdHJlYW1pbmdTZXJ2aWNlJ3MgdW5kZXJseWluZyBXcml0ZUxpc3RlbmVycywgdXNlIGZvciByZWdpc3RlcmluZyB0aGVtIHdpdGggdGhlIEJhc2VBcHAKZnVuYyAoZnNzICpGaWxlU3RyZWFtaW5nU2VydmljZSkgTGlzdGVuZXJzKCkgbWFwW3Nkay5TdG9yZUtleV1bXXN0b3JlVHlwZXMuV3JpdGVMaXN0ZW5lciB7CglyZXR1cm4gZnNzLmxpc3RlbmVycwp9CgpmdW5jIChmc3MgKkZpbGVTdHJlYW1pbmdTZXJ2aWNlKSBMaXN0ZW5CZWdpbkJsb2NrKGN0eCBzZGsuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdEJlZ2luQmxvY2ssIHJlcyBhYmNpLlJlc3BvbnNlQmVnaW5CbG9jaykgewoJLy8gTk9URTogdGhpcyBjb3VsZCBlaXRoZXIgYmUgZG9uZSBzeW5jaHJvbm91c2x5IG9yIGFzeW5jaHJvbm91c2x5CgkvLyBjcmVhdGUgYSBuZXcgZmlsZSB3aXRoIHRoZSByZXEgaW5mbyBhY2NvcmRpbmcgdG8gbmFtaW5nIHNjaGVtYQoJLy8gd3JpdGUgcmVxIHRvIGZpbGUKCS8vIHdyaXRlIGFsbCBzdGF0ZSBjaGFuZ2VzIGNhY2hlZCBmb3IgdGhpcyBzdGFnZSB0byBmaWxlCgkvLyByZXNldCBjYWNoZQoJLy8gd3JpdGUgcmVzIHRvIGZpbGUKCS8vIGNsb3NlIGZpbGUKfQoKZnVuYyAoZnNzICpGaWxlU3RyZWFtaW5nU2VydmljZSkgTGlzdGVuRW5kQmxvY2soY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0QmVnaW5CbG9jaywgcmVzIGFiY2kuUmVzcG9uc2VCZWdpbkJsb2NrKSB7CgkvLyBOT1RFOiB0aGlzIGNvdWxkIGVpdGhlciBiZSBkb25lIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHkKCS8vIGNyZWF0ZSBhIG5ldyBmaWxlIHdpdGggdGhlIHJlcSBpbmZvIGFjY29yZGluZyB0byBuYW1pbmcgc2NoZW1hCgkvLyB3cml0ZSByZXEgdG8gZmlsZQoJLy8gd3JpdGUgYWxsIHN0YXRlIGNoYW5nZXMgY2FjaGVkIGZvciB0aGlzIHN0YWdlIHRvIGZpbGUKCS8vIHJlc2V0IGNhY2hlCgkvLyB3cml0ZSByZXMgdG8gZmlsZQoJLy8gY2xvc2UgZmlsZQp9CgpmdW5jIChmc3MgKkZpbGVTdHJlYW1pbmdTZXJ2aWNlKSBMaXN0ZW5EZWxpdmVyVHgoY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0RGVsaXZlclR4LCByZXMgYWJjaS5SZXNwb25zZURlbGl2ZXJUeCkgewoJLy8gTk9URTogdGhpcyBjb3VsZCBlaXRoZXIgYmUgZG9uZSBzeW5jaHJvbm91c2x5IG9yIGFzeW5jaHJvbm91c2x5CgkvLyBjcmVhdGUgYSBuZXcgZmlsZSB3aXRoIHRoZSByZXEgaW5mbyBhY2NvcmRpbmcgdG8gbmFtaW5nIHNjaGVtYQoJLy8gTk9URTogaWYgdGhlIHR4IGZhaWxlZCwgaGFuZGxlIGFjY29yZGluZ2x5CgkvLyB3cml0ZSByZXEgdG8gZmlsZQoJLy8gd3JpdGUgYWxsIHN0YXRlIGNoYW5nZXMgY2FjaGVkIGZvciB0aGlzIHN0YWdlIHRvIGZpbGUKCS8vIHJlc2V0IGNhY2hlCgkvLyB3cml0ZSByZXMgdG8gZmlsZQoJLy8gY2xvc2UgZmlsZQp9CgovLyBTdHJlYW0gc3BpbnMgdXAgYSBnb3JvdXRpbmUgc2VsZWN0IGxvb3Agd2hpY2ggYXdhaXRzIGxlbmd0aC1wcmVmaXhlZCBiaW5hcnkgZW5jb2RlZCBLViBwYWlycyBhbmQgY2FjaGVzIHRoZW0gaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSByZWNlaXZlZApmdW5jIChmc3MgKkZpbGVTdHJlYW1pbmdTZXJ2aWNlKSBTdHJlYW0od2cgKnN5bmMuV2FpdEdyb3VwLCBxdWl0Q2hhbiAmbHQ7LWNoYW4gc3RydWN0e30pIHsKCXdnLkFkZCgxKQoJZ28gZnVuYygpIHsKCQlkZWZlciB3Zy5Eb25lKCkKCQlmb3IgewoJCQlzZWxlY3QgewoJCQljYXNlICZsdDstcXVpdENoYW46CgkJCQlyZXR1cm4KICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBieSA6PSAmbHQ7LWZzcy5zcmNDaGFuOgogICAgICAgICAgICAgICAgICAgICAgICAJZnNzLnN0YXRlQ2FjaGUgPSBhcHBlbmQoZnNzLnN0YXRlQ2FjaGUsIGJ5KQoJCQl9CgkJfQoJfSgpCn0K"}}),l._v(" "),c("p",[l._v("Writing to a file is the simplest approach for streaming the data out to consumers.\nThis approach also provides the advantages of being persistent and durable, and the files can be read directly,\nor an auxiliary streaming services can read from the files and serve the data over a remote interface.")]),l._v(" "),c("h4",{attrs:{id:"auxiliary-streaming-service"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#auxiliary-streaming-service"}},[l._v("#")]),l._v(" Auxiliary streaming service")]),l._v(" "),c("p",[l._v("We will create a separate standalone process that reads and internally queues the state as it is written out to these files\nand serves the data over a gRPC API. This API will allow filtering of requested data, e.g. by block number, block/tx hash, ABCI message type,\nwhether a DeliverTx message failed or succeeded, etc. In addition to unary RPC endpoints this service will expose "),c("code",[l._v("stream")]),l._v(" RPC endpoints for realtime subscriptions.")]),l._v(" "),c("h4",{attrs:{id:"file-pruning"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#file-pruning"}},[l._v("#")]),l._v(" File pruning")]),l._v(" "),c("p",[l._v("Without pruning the number of files can grow indefinitely, this may need to be managed by\nthe developer in an application or even module-specific manner (e.g. log rotation).\nThe file naming schema facilitates pruning by block number and/or ABCI message.\nThe gRPC auxiliary streaming service introduced above will include an option to remove the files as it consumes their data.")]),l._v(" "),c("h3",{attrs:{id:"configuration"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[l._v("#")]),l._v(" Configuration")]),l._v(" "),c("p",[l._v("We will provide detailed documentation on how to configure a "),c("code",[l._v("FileStreamingService")]),l._v(" from within an app's "),c("code",[l._v("AppCreator")]),l._v(",\nusing the provided "),c("code",[l._v("AppOptions")]),l._v(" and TOML configuration fields.")]),l._v(" "),c("h4",{attrs:{id:"baseapp-registration"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#baseapp-registration"}},[l._v("#")]),l._v(" BaseApp registration")]),l._v(" "),c("p",[l._v("We will add a new method to the "),c("code",[l._v("BaseApp")]),l._v(" to enable the registration of "),c("code",[l._v("StreamingService")]),l._v("s:")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVnaXN0ZXJTdHJlYW1pbmdTZXJ2aWNlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzdHJlYW1pbmcgc2VydmljZSB3aXRoIHRoZSBCYXNlQXBwCmZ1bmMgKGFwcCAqQmFzZUFwcCkgUmVnaXN0ZXJIb29rcyhzIFN0cmVhbWluZ1NlcnZpY2UpIHsKCS8vIHNldCB0aGUgbGlzdGVuZXJzIGZvciBlYWNoIFN0b3JlS2V5Cglmb3Iga2V5LCBsaXMgOj0gcmFuZ2Ugcy5MaXN0ZW5lcnMoKSB7CgkJYXBwLmNtcy5BZGRMaXN0ZW5lcnMoa2V5LCBsaXMpCgl9CgkvLyByZWdpc3RlciB0aGUgc3RyZWFtaW5nIHNlcnZpY2UgaG9va3Mgd2l0aGluIHRoZSBCYXNlQXBwCgkvLyBCYXNlQXBwIHdpbGwgcGFzcyBCZWdpbkJsb2NrLCBEZWxpdmVyVHgsIGFuZCBFbmRCbG9jayByZXF1ZXN0cyBhbmQgcmVzcG9uc2VzIHRvIHRoZSBzdHJlYW1pbmcgc2VydmljZXMgdG8gdXBkYXRlIHRoZWlyIEFCQ0kgY29udGV4dCB1c2luZyB0aGVzZSBob29rcwoJYXBwLmhvb2tzID0gYXBwZW5kKGFwcC5ob29rcywgcykKfQo="}}),l._v(" "),c("p",[l._v("We will also modify the "),c("code",[l._v("BeginBlock")]),l._v(", "),c("code",[l._v("EndBlock")]),l._v(", and "),c("code",[l._v("DeliverTx")]),l._v(" methods to pass ABCI requests and responses to any streaming service hooks registered\nwith the "),c("code",[l._v("BaseApp")]),l._v(".")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBCZWdpbkJsb2NrKHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrKSAocmVzIGFiY2kuUmVzcG9uc2VCZWdpbkJsb2NrKSB7CgkKCS4uLgoJCgkvLyBDYWxsIHRoZSBzdHJlYW1pbmcgc2VydmljZSBob29rcyB3aXRoIHRoZSBCZWdpbkJsb2NrIG1lc3NhZ2VzCglmb3IgXywgaG9vayA6PSByYW5nZSBhcHAuaG9va3MgewoJCWhvb2suTGlzdGVuQmVnaW5CbG9jayhhcHAuZGVsaXZlclN0YXRlLmN0eCwgcmVxLCByZXMpCgl9CgkKCXJldHVybiByZXMKfQo="}}),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBFbmRCbG9jayhyZXEgYWJjaS5SZXF1ZXN0RW5kQmxvY2spIChyZXMgYWJjaS5SZXNwb25zZUVuZEJsb2NrKSB7CgkKCS4uLgoKCS8vIENhbGwgdGhlIHN0cmVhbWluZyBzZXJ2aWNlIGhvb2tzIHdpdGggdGhlIEVuZEJsb2NrIG1lc3NhZ2VzCglmb3IgXywgaG9vayA6PSByYW5nZSBhcHAuaG9va3MgewoJCWhvb2suTGlzdGVuRW5kQmxvY2soYXBwLmRlbGl2ZXJTdGF0ZS5jdHgsIHJlcSwgcmVzKQoJfQoJCglyZXR1cm4gcmVzCn0K"}}),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBEZWxpdmVyVHgocmVxIGFiY2kuUmVxdWVzdERlbGl2ZXJUeCkgYWJjaS5SZXNwb25zZURlbGl2ZXJUeCB7CgkKCS4uLgoKCWdJbmZvLCByZXN1bHQsIGVyciA6PSBhcHAucnVuVHgocnVuVHhNb2RlRGVsaXZlciwgcmVxLlR4KQoJaWYgZXJyICE9IG5pbCB7CgkJcmVzdWx0U3RyID0gJnF1b3Q7ZmFpbGVkJnF1b3Q7CgkJcmVzIDo9IHNka2Vycm9ycy5SZXNwb25zZURlbGl2ZXJUeChlcnIsIGdJbmZvLkdhc1dhbnRlZCwgZ0luZm8uR2FzVXNlZCwgYXBwLnRyYWNlKQoJCS8vIElmIHdlIHRocm93IGFuZCBlcnJvciwgYmUgc3VyZSB0byBzdGlsbCBjYWxsIHRoZSBzdHJlYW1pbmcgc2VydmljZSdzIGhvb2sKCQlmb3IgXywgaG9vayA6PSByYW5nZSBhcHAuaG9va3MgewoJCQlob29rLkxpc3RlbkRlbGl2ZXJUeChhcHAuZGVsaXZlclN0YXRlLmN0eCwgcmVxLCByZXMpCgkJfQoJCXJldHVybiByZXMKCX0KCglyZXMgOj0gYWJjaS5SZXNwb25zZURlbGl2ZXJUeHsKCQlHYXNXYW50ZWQ6IGludDY0KGdJbmZvLkdhc1dhbnRlZCksIC8vIFRPRE86IFNob3VsZCB0eXBlIGFjY2VwdCB1bnNpZ25lZCBpbnRzPwoJCUdhc1VzZWQ6ICAgaW50NjQoZ0luZm8uR2FzVXNlZCksICAgLy8gVE9ETzogU2hvdWxkIHR5cGUgYWNjZXB0IHVuc2lnbmVkIGludHM/CgkJTG9nOiAgICAgICByZXN1bHQuTG9nLAoJCURhdGE6ICAgICAgcmVzdWx0LkRhdGEsCgkJRXZlbnRzOiAgICBzZGsuTWFya0V2ZW50c1RvSW5kZXgocmVzdWx0LkV2ZW50cywgYXBwLmluZGV4RXZlbnRzKSwKCX0KCQoJLy8gQ2FsbCB0aGUgc3RyZWFtaW5nIHNlcnZpY2UgaG9va3Mgd2l0aCB0aGUgRGVsaXZlclR4IG1lc3NhZ2VzCglmb3IgXywgaG9vayA6PSByYW5nZSBhcHAuaG9va3MgewoJCWhvb2suTGlzdGVuRGVsaXZlclR4KGFwcC5kZWxpdmVyU3RhdGUuY3R4LCByZXEsIHJlcykKCX0KCQoJcmV0dXJuIHJlcwp9Cg=="}}),l._v(" "),c("h4",{attrs:{id:"toml-configuration"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#toml-configuration"}},[l._v("#")]),l._v(" TOML Configuration")]),l._v(" "),c("p",[l._v("We will provide standard TOML configuration options for configuring a "),c("code",[l._v("FileStreamingService")]),l._v(" for specific "),c("code",[l._v("Store")]),l._v("s.\nNote: the actual namespace is TBD.")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W3N0b3JlXQogICAgc3RyZWFtZXJzID0gWyAjIGlmIGxlbihzdHJlYW1lcnMpICZndDsgMCB3ZSBhcmUgc3RyZWFtaW5nCiAgICAgICAgJnF1b3Q7ZmlsZSZxdW90OywKICAgIF0KCltzdHJlYW1lcnNdCiAgICBbc3RyZWFtZXJzLmZpbGVdCiAgICAgICAga2V5cyA9IFsmcXVvdDtsaXN0JnF1b3Q7LCAmcXVvdDtvZiZxdW90OywgJnF1b3Q7c3RvcmUmcXVvdDssICZxdW90O2tleXMmcXVvdDssICZxdW90O3dlJnF1b3Q7LCAmcXVvdDt3YW50JnF1b3Q7LCAmcXVvdDt0byZxdW90OywgJnF1b3Q7ZXhwb3NlJnF1b3Q7LCAmcXVvdDtmb3ImcXVvdDssICZxdW90O3RoaXMmcXVvdDssICZxdW90O3N0cmVhbWluZyZxdW90OywgJnF1b3Q7c2VydmljZSZxdW90O10KICAgICAgICB3cml0ZURpciA9ICZxdW90O3BhdGggdG8gdGhlIHdyaXRlIGRpcmVjdG9yeSZxdW90OwogICAgICAgIHByZWZpeCA9ICZxdW90O29wdGlvbmFsIHByZWZpeCB0byBwcmVwZW5kIHRvIHRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lcyZxdW90Owo="}}),l._v(" "),c("p",[l._v("We will also provide a mapping of the TOML "),c("code",[l._v("store.streamers")]),l._v(' "file" configuration option to a helper functions for constructing the specified\nstreaming service. In the future, as other streaming services are added, their constructors will be added here as well.')]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RyZWFtaW5nU2VydmljZUNvbnN0cnVjdG9yIGlzIHVzZWQgdG8gY29uc3RydWN0IGEgc3RyZWFtaW5nIHNlcnZpY2UKdHlwZSBTdHJlYW1pbmdTZXJ2aWNlQ29uc3RydWN0b3IgZnVuYyhvcHRzIHNlcnZlcnR5cGVzLkFwcE9wdGlvbnMsIGtleXMgW11zZGsuU3RvcmVLZXkpIChTdHJlYW1pbmdTZXJ2aWNlLCBlcnJvcikKCi8vIFN0cmVhbWluZ1NlcnZpY2VUeXBlIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHR5cGUgb2YgU3RyZWFtaW5nU2VydmljZQp0eXBlIFN0cmVhbWluZ1NlcnZpY2VUeXBlIGludAoKY29uc3QgKAoJVW5rbm93biBTdHJlYW1pbmdTZXJ2aWNlVHlwZSA9IGlvdGEKCUZpbGUKCS8vIGFkZCBtb3JlIGluIHRoZSBmdXR1cmUKKQoKLy8gTmV3U3RyZWFtaW5nU2VydmljZVR5cGUgcmV0dXJucyB0aGUgU3RyZWFtaW5nU2VydmljZVR5cGUgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdmlkZWQgbmFtZQpmdW5jIE5ld1N0cmVhbWluZ1NlcnZpY2VUeXBlKG5hbWUgc3RyaW5nKSBTdHJlYW1pbmdTZXJ2aWNlVHlwZSB7Cglzd2l0Y2ggc3RyaW5ncy5Ub0xvd2VyKG5hbWUpIHsKCWNhc2UgJnF1b3Q7ZmlsZSZxdW90OywgJnF1b3Q7ZiZxdW90OzoKCQlyZXR1cm4gRmlsZQoJZGVmYXVsdDoKCQlyZXR1cm4gVW5rbm93bgoJfQp9CgovLyBTdHJpbmcgcmV0dXJucyB0aGUgc3RyaW5nIG5hbWUgb2YgYSBTdHJlYW1pbmdTZXJ2aWNlVHlwZQpmdW5jIChzc3QgU3RyZWFtaW5nU2VydmljZVR5cGUpIFN0cmluZygpIHN0cmluZyB7Cglzd2l0Y2ggc3N0IHsKCWNhc2UgRmlsZToKCQlyZXR1cm4gJnF1b3Q7ZmlsZSZxdW90OwoJZGVmYXVsdDoKCQlyZXR1cm4gJnF1b3Q7JnF1b3Q7Cgl9Cn0KCi8vIFN0cmVhbWluZ1NlcnZpY2VDb25zdHJ1Y3Rvckxvb2t1cFRhYmxlIGlzIGEgbWFwcGluZyBvZiBTdHJlYW1pbmdTZXJ2aWNlVHlwZXMgdG8gU3RyZWFtaW5nU2VydmljZUNvbnN0cnVjdG9ycwp2YXIgU3RyZWFtaW5nU2VydmljZUNvbnN0cnVjdG9yTG9va3VwVGFibGUgPSBtYXBbU3RyZWFtaW5nU2VydmljZVR5cGVdU3RyZWFtaW5nU2VydmljZUNvbnN0cnVjdG9yewoJRmlsZTogRmlsZVN0cmVhbWluZ0NvbnN0cnVjdG9yLAp9CgovLyBOZXdTdHJlYW1pbmdTZXJ2aWNlQ29uc3RydWN0b3IgcmV0dXJucyB0aGUgU3RyZWFtaW5nU2VydmljZUNvbnN0cnVjdG9yIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3ZpZGVkIG5hbWUKZnVuYyBOZXdTdHJlYW1pbmdTZXJ2aWNlQ29uc3RydWN0b3IobmFtZSBzdHJpbmcpIChTdHJlYW1pbmdTZXJ2aWNlQ29uc3RydWN0b3IsIGVycm9yKSB7Cglzc1R5cGUgOj0gTmV3U3RyZWFtaW5nU2VydmljZVR5cGUobmFtZSkKCWlmIHNzVHlwZSA9PSBVbmtub3duIHsKCQlyZXR1cm4gbmlsLCBmbXQuRXJyb3JmKCZxdW90O3VucmVjb2duaXplZCBzdHJlYW1pbmcgc2VydmljZSBuYW1lICVzJnF1b3Q7LCBuYW1lKQoJfQoJaWYgY29uc3RydWN0b3IsIG9rIDo9IFN0cmVhbWluZ1NlcnZpY2VDb25zdHJ1Y3Rvckxvb2t1cFRhYmxlW3NzVHlwZV07IG9rIHsKCQlyZXR1cm4gY29uc3RydWN0b3IsIG5pbAoJfQoJcmV0dXJuIG5pbCwgZm10LkVycm9yZigmcXVvdDtzdHJlYW1pbmcgc2VydmljZSBjb25zdHJ1Y3RvciBvZiB0eXBlICVzIG5vdCBmb3VuZCZxdW90Oywgc3NUeXBlLlN0cmluZygpKQp9CgovLyBGaWxlU3RyZWFtaW5nQ29uc3RydWN0b3IgaXMgdGhlIFN0cmVhbWluZ1NlcnZpY2VDb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBGaWxlU3RyZWFtaW5nU2VydmljZQpmdW5jIEZpbGVTdHJlYW1pbmdDb25zdHJ1Y3RvcihvcHRzIHNlcnZlcnR5cGVzLkFwcE9wdGlvbnMsIGtleXMgW11zZGsuU3RvcmVLZXkpIChTdHJlYW1pbmdTZXJ2aWNlLCBlcnJvcikgewoJZmlsZVByZWZpeCA6PSBjYXN0LlRvU3RyaW5nKG9wdHMuR2V0KCZxdW90O3N0cmVhbWVycy5maWxlLnByZWZpeCZxdW90OykpCglmaWxlRGlyIDo9IGNhc3QuVG9TdHJpbmcob3B0cy5HZXQoJnF1b3Q7c3RyZWFtZXJzLmZpbGUud3JpdGVEaXImcXVvdDspKQoJcmV0dXJuIHN0cmVhbWluZy5OZXdGaWxlU3RyZWFtaW5nU2VydmljZShmaWxlRGlyLCBmaWxlUHJlZml4LCBrZXlzKSwgbmlsCn0K"}}),l._v(" "),c("h4",{attrs:{id:"example-configuration"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration"}},[l._v("#")]),l._v(" Example configuration")]),l._v(" "),c("p",[l._v("As a demonstration, we will implement the state watching features as part of SimApp.\nFor example, the below is a very rudimentary integration of the state listening features into the SimApp "),c("code",[l._v("AppCreator")]),l._v(" function:")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdTaW1BcHAoCglsb2dnZXIgbG9nLkxvZ2dlciwgZGIgZGJtLkRCLCB0cmFjZVN0b3JlIGlvLldyaXRlciwgbG9hZExhdGVzdCBib29sLCBza2lwVXBncmFkZUhlaWdodHMgbWFwW2ludDY0XWJvb2wsCglob21lUGF0aCBzdHJpbmcsIGludkNoZWNrUGVyaW9kIHVpbnQsIGVuY29kaW5nQ29uZmlnIHNpbWFwcHBhcmFtcy5FbmNvZGluZ0NvbmZpZywKCWFwcE9wdHMgc2VydmVydHlwZXMuQXBwT3B0aW9ucywgYmFzZUFwcE9wdGlvbnMgLi4uZnVuYygqYmFzZWFwcC5CYXNlQXBwKSwKKSAqU2ltQXBwIHsKCgkuLi4KCglrZXlzIDo9IHNkay5OZXdLVlN0b3JlS2V5cygKCQlhdXRodHlwZXMuU3RvcmVLZXksIGJhbmt0eXBlcy5TdG9yZUtleSwgc3Rha2luZ3R5cGVzLlN0b3JlS2V5LAoJCW1pbnR0eXBlcy5TdG9yZUtleSwgZGlzdHJ0eXBlcy5TdG9yZUtleSwgc2xhc2hpbmd0eXBlcy5TdG9yZUtleSwKCQlnb3Z0eXBlcy5TdG9yZUtleSwgcGFyYW1zdHlwZXMuU3RvcmVLZXksIGliY2hvc3QuU3RvcmVLZXksIHVwZ3JhZGV0eXBlcy5TdG9yZUtleSwKCQlldmlkZW5jZXR5cGVzLlN0b3JlS2V5LCBpYmN0cmFuc2ZlcnR5cGVzLlN0b3JlS2V5LCBjYXBhYmlsaXR5dHlwZXMuU3RvcmVLZXksCgkpCgkKCS8vIGNvbmZpZ3VyZSBzdGF0ZSBsaXN0ZW5pbmcgY2FwYWJpbGl0aWVzIHVzaW5nIEFwcE9wdGlvbnMKCWxpc3RlbmVycyA6PSBjYXN0LlRvU3RyaW5nU2xpY2UoYXBwT3B0cy5HZXQoJnF1b3Q7c3RvcmUuc3RyZWFtZXJzJnF1b3Q7KSkKCWZvciBfLCBsaXN0ZW5lck5hbWUgOj0gcmFuZ2UgbGlzdGVuZXJzIHsKCQkvLyBnZXQgdGhlIHN0b3JlIGtleXMgYWxsb3dlZCB0byBiZSBleHBvc2VkIGZvciB0aGlzIHN0cmVhbWluZyBzZXJ2aWNlL3N0YXRlIGxpc3RlbmVycwoJCWV4cG9zZUtleVN0cnMgOj0gY2FzdC5Ub1N0cmluZ1NsaWNlKGFwcE9wdHMuR2V0KGZtdC5TcHJpbnRmKCZxdW90O3N0cmVhbWVycy4lcy5rZXlzJnF1b3Q7LCBsaXN0ZW5lck5hbWUpKQoJCWV4cG9zZVN0b3JlS2V5cyA9IG1ha2UoW11zdG9yZVR5cGVzLlN0b3JlS2V5LCAwLCBsZW4oZXhwb3NlS2V5U3RycykpCgkJZm9yIF8sIGtleVN0ciA6PSByYW5nZSBleHBvc2VLZXlTdHJzIHsKCQkJaWYgc3RvcmVLZXksIG9rIDo9IGtleXNba2V5U3RyXTsgb2sgewoJCQkJZXhwb3NlU3RvcmVLZXlzID0gYXBwZW5kKGV4cG9zZVN0b3JlS2V5cywgc3RvcmVLZXkpCgkJCX0KCQl9CgkJLy8gZ2V0IHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhpcyBsaXN0ZW5lciBuYW1lCgkJY29uc3RydWN0b3IsIGVyciA6PSBiYXNlYXBwLk5ld1N0cmVhbWluZ1NlcnZpY2VDb25zdHJ1Y3RvcihsaXN0ZW5lck5hbWUpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXRtb3MuRXhpdChlcnIuRXJyb3IoKSkgLy8gb3IgY29udGludWU/CgkJfQoJCS8vIGdlbmVyYXRlIHRoZSBzdHJlYW1pbmcgc2VydmljZSB1c2luZyB0aGUgY29uc3RydWN0b3IsIGFwcE9wdGlvbnMsIGFuZCB0aGUgU3RvcmVLZXlzIHdlIHdhbnQgdG8gZXhwb3NlCgkJc3RyZWFtaW5nU2VydmljZSwgZXJyIDo9IGNvbnN0cnVjdG9yKGFwcE9wdHMsIGV4cG9zZVN0b3JlS2V5cykKCQlpZiBlcnIgIT0gbmlsIHsKCQkJdG1vcy5FeGl0KGVyci5FcnJvcigpKQoJCX0KCQkvLyByZWdpc3RlciB0aGUgc3RyZWFtaW5nIHNlcnZpY2Ugd2l0aCB0aGUgQmFzZUFwcAoJCWJBcHAuUmVnaXN0ZXJTdHJlYW1pbmdTZXJ2aWNlKHN0cmVhbWluZ1NlcnZpY2UpCgkJLy8gd2FpdGdyb3VwIGFuZCBxdWl0IGNoYW5uZWwgZm9yIG9wdGlvbmFsIHNodXRkb3duIGNvb3JkaW5hdGlvbiBvZiB0aGUgc3RyZWFtaW5nIHNlcnZpY2UKCQl3ZyA6PSBuZXcoc3luYy5XYWl0R3JvdXApCgkJcXVpdENoYW4gOj0gbmV3KGNoYW4gc3RydWN0e30pKQoJCS8vIGtpY2sgb2ZmIHRoZSBiYWNrZ3JvdW5kIHN0cmVhbWluZyBzZXJ2aWNlIGxvb3AKCQlzdHJlYW1pbmdTZXJ2aWNlLlN0cmVhbSh3ZywgcXVpdENoYW4pIC8vIG1heWJlIHRoaXMgc2hvdWxkIGJlIGRvbmUgZnJvbSBpbnNpZGUgQmFzZUFwcCBpbnN0ZWFkPwoJfQoJCgkuLi4KCglyZXR1cm4gYXBwCn0K"}}),l._v(" "),c("h2",{attrs:{id:"consequences"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[l._v("#")]),l._v(" Consequences")]),l._v(" "),c("p",[l._v("These changes will provide a means of subscribing to KVStore state changes in real time.")]),l._v(" "),c("h3",{attrs:{id:"backwards-compatibility"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[l._v("#")]),l._v(" Backwards Compatibility")]),l._v(" "),c("ul",[c("li",[l._v("This ADR changes the "),c("code",[l._v("MultiStore")]),l._v(", "),c("code",[l._v("CacheWrap")]),l._v(", and "),c("code",[l._v("CacheWrapper")]),l._v(" interfaces, implementations supporting the previous version of these interfaces will not support the new ones")])]),l._v(" "),c("h3",{attrs:{id:"positive"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[l._v("#")]),l._v(" Positive")]),l._v(" "),c("ul",[c("li",[l._v("Ability to listen to KVStore state changes in real time and expose these events to external consumers")])]),l._v(" "),c("h3",{attrs:{id:"negative"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[l._v("#")]),l._v(" Negative")]),l._v(" "),c("ul",[c("li",[l._v("Changes "),c("code",[l._v("MultiStore")]),l._v(", "),c("code",[l._v("CacheWrap")]),l._v(", and "),c("code",[l._v("CacheWrapper")]),l._v(" interfaces")])]),l._v(" "),c("h3",{attrs:{id:"neutral"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[l._v("#")]),l._v(" Neutral")]),l._v(" "),c("ul",[c("li",[l._v("Introduces additional- but optional- complexity to configuring and running a cosmos application")]),l._v(" "),c("li",[l._v("If an application developer opts to use these features to expose data, they need to be aware of the ramifications/risks of that data exposure as it pertains to the specifics of their application")])])],1)}),[],!1,null,null,null);e.default=t.exports}}]);