(function(){var p=window.cfx,a=window.sfx,A={Version:"7.3.5518.20383"};p.density=A;var z=function m(){m._ic();this.a=this.c=this.b=this.d=0};z.prototype={_i:function(){this.a=this.c=this.b=this.d=0},f:function(){var m=this.a/100;if(-1==this.b)return m*=255,a.m.l(this.d,m,m,m);var d=this.b/60,f=this.c/100,o=a.a.k(d),d=d-o;0==(o&1)&&(d=1-d);var d=m*(1-f*d),n=0,i=0,b=0,f=a.a.o(0,a.a.p(m*(1-f),1)),d=a.a.o(0,a.a.p(d,1)),m=a.a.o(0,a.a.p(m,1));switch(o){case 6:case 0:n=m;i=d;b=f;break;case 1:n=d;i=m;b=f;
break;case 2:n=f;i=m;b=d;break;case 3:n=f;i=d;b=m;break;case 4:n=d;i=f;b=m;break;case 5:n=m,i=f,b=d}return a.m.l(this.d,255*n,255*i,255*b)},i:function(){return a.b.k(null,"{0:f2},{1:f2},{2:f2}",this.b,this.c,this.a)},_cf:function(a){this.d=a.d;this.b=a.b;this.c=a.c;this.a=a.a;return this},_nc:function(){var a=new z;a._cf(this);return a}};z.g=function(a){return z.h(a.a,a.r,a.g,a.b)};z.h=function(m,d,f,o){var d=d/255,f=f/255,o=o/255,n=0,i=0,b=new z,i=a.a.p(d,a.a.p(f,o)),n=a.a.o(d,a.a.o(f,o));n==i?(b.b=
-1,b.c=0):(b.b=60*((d==i?3:f==i?5:1)-(d==i?f-o:f==i?o-d:d-f)/(n-i)),b.c=100*((n-i)/n));b.a=100*n;b.d=m;return b};z._dt("CWGDH",a.W,0);var u=function d(){d._ic()};u.prototype={_0dN:function(a,f){this.b=a;this.a=f;return this},Sw:function(a){return this.b==a.b&&this.a==a.a},Sz:function(d){d=a.V.D(d,u);return null==d?!1:this.b==d.b&&this.a==d.a},SA:function(){return this.b+this.a},d:function(a,f){this.b=a;this.a=f},h:function(){return a.b.k(null,"{0}, {1}",this.b,this.a)}};u._dt("CWGDD",a.Sy,0,a.IEquatable_1);
var B=function f(){f._ic();this.e=0};B.prototype={_0dO:function(a,o,n){this.b=1;this.d=a;this.c=o;this.a=n;return this},id3:function(){return null},id4:function(){return 16},f:function(a){switch(a){case "XFrom":return this.a.k.getDataFormat().a(this.d);case "XTo":return this.a.k.getDataFormat().a(this.d+this.a.f);case "YFrom":return this.a.j.getDataFormat().a(this.c);case "YTo":return this.a.j.getDataFormat().a(this.c+this.a.e);case "Count":return this.b.toString()}return null},ifg:function(f){switch(f){case 1:return"g,"+
this.e.toString();case 0:var f=this.a.k.getDataFormat(),o=this.a.j.getDataFormat();return a.b.k(null,"X {0} to {1}\nY {2} to {3}\nCount {4}",f.a(this.d),f.a(this.d+this.a.f),o.a(this.c),o.a(this.c+this.a.e),this.b)}return null},ifh:function(a){return 1==a?0:null}};B._dt("CWGDD",a.Sy,0,p.iff);var H=function o(){o._ic();this.a=null};H.prototype={_0dP:function(){this.b=new a.d;return this}};H._dt("CWGDD",a.Sy,0);var I=function n(){n._ic();this.a=this.b=this.c=null};I.prototype={_0dQ:function(){return this}};
I._dt("CWGDD",a.Sy,0);var F=function i(){i._ic();this.a=0};A.DensityColor=F;F.prototype={_0_1:function(){this.b=new a.m;return this},getColor:function(){return this.b},setColor:function(i){i=a.m._t(i);this.b._cf(i)},getPosition:function(){return this.a},setPosition:function(a){this.a=a}};F._dt("density.DensityColor",a.Sy,0);var l=function b(){b._ic();this.a=this.j=this.k=this.l=null;this.e=this.h=this.p=this.f=this.i=this.q=this.n=0;this._0_1()};A.Density=l;l.prototype={_0_1:function(){this.b=40;
this.d=(new a._D)._0_D();this.c=(new a._L)._0_L();this.o=this.g=!0;this.x();return this},getSize:function(){return this.b},setSize:function(a){this.b!=a&&(this.b=a,this.g=!0,null!=this.l&&this.l.iM())},getTemplate:function(){return null==this.a?"":this.a.t()},setTemplate:function(a){l.r=a;null==a?this.a=null:(null==this.a&&(this.a=(new p.vector._Zt)._0_Zt()),this.a.st(a))},ic0:function(){},A:function(b){if(this.g){this.g=!1;var e=b.a.c.iaI();this.k=b.i;this.j=b.h;this.i=b.i.q;this.q=b.i.u;this.h=
b.h.q;this.p=b.h.u;this.f=a.a.d(this.q-this.i)/this.b;this.e=a.a.d(this.p-this.h)/this.b;var c=(new u)._0dN(0,0);this.d.clear();this.c.clear();for(var j=b.e=0;j<e;j++){b.aw();var g=b.w;c.d(a.a.k((b.aV-this.i)/this.f),a.a.k((g-this.h)/this.e));var h=null,h=new a._p1(h),g=this.d.tryGetValue(h,c),h=h.a;g?h.b++:(h=(new B)._0dO(this.i+c.b*this.f,this.h+c.a*this.e,this),h.e=this.c.Se(),this.c.Si(h),this.d.v((new u)._0dN(c.b,c.a),h));this.n=a.a.o(this.n,h.b);b.av(0,1)}}},ic1:function(){return!0},ic2:function(){this.g=
!0;return!1},u:function(a){0==a.getDataFormat().c&&a.getDataFormat().setDecimals(2);a.setStyle(a.o&-1073741825)},icV:function(b,e,c){b=null;switch(e){case 11:return this.w(c);case 13:b=c;b.a=l.z("TipDensity");b.h=!0;b.b=1;break;case 14:b=c;e=a.V.D(b.i,B);if(null!=e)return e.f(b.f);break;case 16:return this.y(c);case 18:return 2}return null},icW:function(){return 1},icX:function(){return 29184},y:function(b){try{var e=a.u.e(b);if(e<this.c.Se())return this.c.So(e)}catch(c){}return null},x:function(){if(void 0!=
p._Zt){var a=p.vector.eP.i("Density",!0);null!=a&&this.setTemplate(a)}},icY:function(b,e,c){b.b=a.a.d(c.p-c.o);b.a=0;this.A(c);var b=c.c,e=c.k._nc(),j=e.w/(this.b+1),g=e.h/(this.b+1),h=e.x,l=e.c();if(c.m_bDetecting)for(var e=c.m_xDetect,t=c.m_yDetect,v=this.d.Sb();!0==v.SI();){var w=v.SK(),r=w.k,C=h+r.b*j,r=l-(r.a+1)*g;if(e>=C&&t>=r&&e<=C+j&&t<=r+g){b.sidb(w.v);b.idS(a.aj.G(),C,r,j,g);break}}else{var e=(new a._D)._0_D(),k=null;c.b.a.a=!1;c.e=0;c.d=0;c.aw();c.R(!1);t=a.V.D(c.A,a.ar).j()._nc();0!=(b.ic$()&
8)&&(t=b.idc()._Gv("fill",t,"Attribute0",0));v=z.g(t);t=v._nc();t.a=20;v=v._nc();v.a=80;var q=Array(2);q[0]=(new F)._0_1();q[1]=(new F)._0_1();q[0].b._cf(t.f());q[0].a=0;q[1].b._cf(v.f());q[1].a=1;for(var u=q[q.length-1].b._nc(),t=c.A,v=c.r,E=(new a.d)._02c(0,0,j,g),B=this.d.Sb();!0==B.SI();){var w=B.SK(),r=w.k,C=h+r.b*j,r=l-(r.a+1)*g,s=w.v.b,G=0,x=0,k=new a._p1(k),x=e.tryGetValue(k,s),k=k.a;if(!x){x=s;c.V&&(x=1+(x-1)*c.bC);for(var G=x/this.n,k=!1,D=0;D<q.length;D++){var y=q[D];if(G>y.a){var k=y.b._nc(),
x=q[D+1].b._nc(),y=(G-y.a)/(q[D+1].a-y.a),A=1-y,G=a.a.k(k.r*y+x.r*A),D=a.a.k(k.g*y+x.g*A),k=a.a.k(k.b*y+x.b*A);u._cf(a.m.k(G,D,k));k=!0;break}}k||u._cf(q[q.length-1].b);k=(new I)._0dQ();k.c=(new a.ar)._0ar(u);this.o&&(k.a=(new a.ao)._01ao(u));null!=this.a&&(k.b=(new a._L)._0_L());e.v(s,k)}null!=this.a?(s=(new H)._0dP(),s.b._i2(C,r,j,g),s.a=w.v,k.b.Si(s)):(b.sidb(w.v),b.idS(k.c,C,r,j,g),this.o&&b.idC(k.a,C,r,j,g))}if(null!=this.a){g=this.a.bM();j=null;null!=g&&(j=g.a("background"),j=a.V.D(j,p.vector._Zt));
if(null!=j)for(g=e.B().Sb();!0==g.SI();){h=g.SK();for(w=j.id().Sb();!0==w.SI();)l=w.SK(),j.l(l,c,this,E);for(h=h.b.Sb();!0==h.SI();)s=h.SK(),b.sidb(s.a),E._cf(s.b),j.v(b,E,1,0)}for(j=e.B().Sb();!0==j.SI();){h=j.SK();c.A=h.c;c.r=h.a;for(g=this.a.id().Sb();!0==g.SI();)l=g.SK(),this.a.l(l,c,this,E);for(g=h.b.Sb();!0==g.SI();)s=g.SK(),b.sidb(s.a),E._cf(s.b),this.a.v(b,E,1,0)}c.A=t;c.r=v}for(b=e.Sb();!0==b.SI();)e=b.SK().v,e.c._d(),null!=e.a&&e.a._d()}c.W=1},reset:function(){},ic3:function(){return!1},
ieM:function(b,e){var c=new a._p1(this.b);e.ie1(c,"Size",40);this.b=c.a;c=new a._p1(l.r);e.ieV(c,"Template");l.r=c.a},ie$:function(b){this.l=b;b=a.V.D(this.l,p.Chart);null!=b&&(this.u(b.getAxisX()),this.u(b.getAxisY()))},w:function(a){a.a.e=16;return null},ic4:function(){return!1}};l.z=function(b){null==l.m&&(l.m=(new a.aO)._0aO("density.templates",null),l.t=l.m.b(a.aG.b(),!0,!0));return l.t.d(b)};l._dt("density.Density",a.Sy,0,p.icU,p.icZ,p.ieL,p.ie9);a["density.templates"]={TipDensity:'<T xmlns:x="a"><g M="3,0,3,0"><g.CD><CD W="Auto"/><CD W="Auto"/><CD W="Auto"/></g.CD><g.RD><RD H="Auto"/><RD H="Auto"/><RD H="Auto"/></g.RD><TextBlock g.R="0" g.C="0" Text="{B SeriesTX}" M="0,0,4,0"/><TextBlock g.R="0" g.C="1" Text="{B DataXFrom}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="0" g.C="2" Text="{B DataXTo}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="1" g.C="0" Text="{B SeriesTY}" M="0,0,4,0"/><TextBlock g.R="1" g.C="1" Text="{B DataYFrom}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="1" g.C="2" Text="{B DataYTo}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="2" g.C="0" Text="Count:" M="0,0,4,0"/><TextBlock g.R="2" g.C="2" Text="{B DataCount}" FontWeight="Bold" HorizontalAlignment="Right"/></g></T>'};
void 0!==p.UserInterface&&(p.UserInterface.prototype.galleryMap["2"].push("+density.Density,Density"),p.UserInterface.prototype.galleryMap["density.Density"]=[{Text:"Size",Type:"Range",Min:20,Max:60,API:"Size"}])})();
