(function(){var i=window.cfx,c=window.sfx,m={Version:"7.3.5518.20383"};i.bullet=m;var l=function n(){n._ic();this.a=this.b=0};l.prototype={_i:function(){this.a=this.b=0},d:function(c,b,e){c.a=e+b*this.b;c.b=b-b*this.a},c:function(i){this.a=1-c.a.p(100,c.a.o(0,i))/100;this.b=this.a/2}};l._dt("CWGV",c.W,0);var k=function b(){b._ic();this.d=this.a=null;this.i=0;this._0_1()};m.Bullet=k;k.prototype={_0_1:function(){this.j=new l;this.f=new c.d;this.h=new l;this.e=60;this.c=100;this.b=0;this.m();return this},
getActualVolume:function(){return this.e},setActualVolume:function(b){this.e=b},getTargetVolume:function(){return this.c},setTargetVolume:function(b){this.c=b},getTemplate:function(){return null==this.a?null:this.a.q},setTemplate:function(b){null==this.a&&(this.a=(new i._Zt)._0_Zt());this.a.st(b)},icV:function(b,c,a){switch(c){case 5:return"%s %v\n%s2 %v~";case 11:return this.l(a)}return null},icW:function(){return 2},icX:function(){var b=268980384;1==this.b&&(b|=2);return b},m:function(){if(void 0!=
i._Zt){var b=i.eP.i("Bullet",!0);null!=b&&this.setTemplate(b)}},icY:function(b,e,a){b.b=1;b.a=0;a.e==a.o&&((a.d==a.t&&(this.j.c(this.e),this.h.c(this.c),this.b=a.m_bDetecting?1:0),0==this.b)?this.i=c.i(a.d,2):1==this.b&&(a.b.a.a=!1,this.d=null,null!=this.a&&null!=this.a.j&&(b=this.a.j.a("templateLine"),this.d=c.V.D(b,i._Zt),this.f._i2(0,0,a.k.w,a.k.h))));var b=a.H,e=a.ak,d=a.K,g=a.y,f=a.ad,j=this.i,h=c.i(a.al-e+1,2),g=g+a.a.l*h,h=0;1<f?(h=g+a.a.l*k.g(j+1,e,f),g+=a.a.l*k.g(j,e,f),h=c.a.d(h-g)):h=e;
f=g-h;e=a.c;if(0==this.b){j=new c._p2(0,0);this.j.d(j,h,f);f=j.a;j=j.b;d=(new c.c)._02c(d,f,b-d,j);b=c.d.r(d);if(null!=this.a){for(f=this.a.id().Sb();!0==f.SI();)d=f.SK(),this.a.l(d,a,this,b);this.a.v(e,b,1,0)}else e.idQ(a.A,d);a.y=g+c.i(a.a.l*h,2);a.aR();a.m_bDetecting&&a.detectCheck()&&a.bB--}else if(1==this.b)if(d=new c._p2(0,0),this.h.d(d,h,f),g=d.a,h=d.b,d=(new i.b9)._01b9(a.d,a.e),d.e=!0,e.sidb(d),null!=this.d){for(f=this.d.id().Sb();!0==f.SI();)switch(d=f.SK(),d.b){case "X1":case "X2":d.sa(b);
break;case "Y1":d.sa(g);break;case "Y2":d.sa(g+h);break;default:this.a.l(d,a,this,this.f)}this.d.v(e,this.f,1,0)}else e.idr(a.r,b,g,b,g+h);a.e==a.p&&(this.b=0==this.b?1:0)},reset:function(){},ieM:function(b,e){var a=new c._p1(this.e);e.ie3(a,"ActualVolume",60);this.e=a.a;a=new c._p1(this.c);e.ie3(a,"TargetVolume",100);this.c=a.a},l:function(b){b.F=2;b.a.e=8;return null}};k.g=function(b,e,a){return c.i(b*e,a)};k._dt("bullet.Bullet",c.Sy,0,i.icU,i.ieL)})();
