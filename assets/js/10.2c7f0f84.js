(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{354:function(t,i,e){"use strict";e.r(i);var n={name:"comments",computed:{attrs:function(){var t=window.location,i=t.origin,e=t.pathname,n=i+e,s=this.$page.title;return console.log("attrs",n,e,s),{shortname:"abroadviser",url:n,identifier:e,title:s}}},watch:{"attrs.identifier":function(t){window&&window.DISQUS&&(console.log("watch",t),window.DISQUS.reset({reload:!0,config:function(){this.page.identifier=t}}))}}},s=e(22),o=Object(s.a)(n,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"page-edit"},[i("Disqus",this._b({key:this.attrs.identifier},"Disqus",this.attrs,!1))],1)}),[],!1,null,null,null);i.default=o.exports}}]);