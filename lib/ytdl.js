function _0x2f90(){const _0xd723ef=['.mp3','album','split','searchTrack','response','progress','node-youtube-music','artists','./function','publishDate','name','test','lengthSeconds','replace','write','jpeg','slice','statSync','join','cursorTo','length','20BtVmkD','exec','duration','front\x20cover','\x20-\x20','artist','605131UYrhrC','videos','formats','youtube-yts','mp4','fluent-ffmpeg-7','Video\x20ID\x20or\x20YouTube\x20Url\x20is\x20required','crypto','WriteTags','Artist','node-id3','12101194VXpvFO','isYTUrl','search','getVideoID','mp3','Album','w120-h120','title','12367544TqGVfl','size','w600-h600','toFixed','minutes\x20','Title','toString','keys','./DeepakMedia/audio/','1303595XVKroD','audioCodec','getInfo','Cover\x20of\x20','chooseFormat','description','audioFrequency','hex','stdout','ownerChannelName','isArray','audioChannels','minutes','moveCursor','audioQuality','%\x20downloaded\x20','once','youtubeId','toFormat','downloadMusic','2349426mEzwif','audioonly','3413808PFpZiD','2qSECmW','https://www.youtube.com/watch?v=','is\x20not\x20YouTube\x20URL','audioBitrate','videoDetails','4308255KXrhNv','https://youtu.be/','searchMusics','author','thumbnails','url','now','save','map','buffer','Image','label','end'];_0x2f90=function(){return _0xd723ef;};return _0x2f90();}function _0x234f(_0x42218e,_0x3fc46f){const _0x2f9057=_0x2f90();return _0x234f=function(_0x234ff2,_0x5d3950){_0x234ff2=_0x234ff2-0x11e;let _0x5f2ed3=_0x2f9057[_0x234ff2];return _0x5f2ed3;},_0x234f(_0x42218e,_0x3fc46f);}const _0x147211=_0x234f;(function(_0x57c892,_0x2b21af){const _0x2caa53=_0x234f,_0x5720ef=_0x57c892();while(!![]){try{const _0x5aff1a=-parseInt(_0x2caa53(0x137))/0x1*(-parseInt(_0x2caa53(0x16a))/0x2)+parseInt(_0x2caa53(0x167))/0x3+parseInt(_0x2caa53(0x131))/0x4*(-parseInt(_0x2caa53(0x153))/0x5)+parseInt(_0x2caa53(0x169))/0x6+-parseInt(_0x2caa53(0x142))/0x7+parseInt(_0x2caa53(0x14a))/0x8+parseInt(_0x2caa53(0x16f))/0x9;if(_0x5aff1a===_0x2b21af)break;else _0x5720ef['push'](_0x5720ef['shift']());}catch(_0x13bb6e){_0x5720ef['push'](_0x5720ef['shift']());}}}(_0x2f90,0xe7d26));const ytdl=require('@distube/ytdl-core'),yts=require(_0x147211(0x13a)),readline=require('readline'),ffmpeg=require(_0x147211(0x13c)),NodeID3=require(_0x147211(0x141)),fs=require('fs'),{fetchBuffer}=require(_0x147211(0x124)),ytM=require(_0x147211(0x122)),{randomBytes}=require(_0x147211(0x13e)),ytIdRegex=/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;class YT{constructor(){}static [_0x147211(0x143)]=_0xaff08a=>{const _0x5c52cd=_0x147211;return ytIdRegex[_0x5c52cd(0x127)](_0xaff08a);};static ['getVideoID']=_0x52160f=>{const _0x34ef13=_0x147211;if(!this['isYTUrl'](_0x52160f))throw new Error(_0x34ef13(0x16c));return ytIdRegex[_0x34ef13(0x132)](_0x52160f)[0x1];};static ['WriteTags']=async(_0xa07a53,_0x4f20f2)=>{const _0x4b4dae=_0x147211;NodeID3[_0x4b4dae(0x12a)]({'title':_0x4f20f2[_0x4b4dae(0x14f)],'artist':_0x4f20f2[_0x4b4dae(0x140)],'originalArtist':_0x4f20f2[_0x4b4dae(0x140)],'image':{'mime':_0x4b4dae(0x12b),'type':{'id':0x3,'name':_0x4b4dae(0x134)},'imageBuffer':(await fetchBuffer(_0x4f20f2[_0x4b4dae(0x179)]))[_0x4b4dae(0x178)],'description':_0x4b4dae(0x156)+_0x4f20f2[_0x4b4dae(0x14f)]},'album':_0x4f20f2[_0x4b4dae(0x147)],'year':_0x4f20f2['Year']||''},_0xa07a53);};static [_0x147211(0x144)]=async(_0x48ce77,_0xb713f8={})=>{const _0x13c84c=_0x147211,_0x113d2c=await yts[_0x13c84c(0x144)]({'query':_0x48ce77,'hl':'id','gl':'ID',..._0xb713f8});return _0x113d2c[_0x13c84c(0x138)];};static [_0x147211(0x11f)]=_0x5baa77=>{return new Promise(async(_0x90e47a,_0x456afa)=>{const _0x3e00fb=_0x234f;try{let _0xda42ad=await ytM[_0x3e00fb(0x171)](_0x5baa77),_0x5e6ff9=[];for(let _0x3e5f27=0x0;_0x3e5f27<_0xda42ad[_0x3e00fb(0x130)];_0x3e5f27++){_0x5e6ff9['push']({'isYtMusic':!![],'title':_0xda42ad[_0x3e5f27]['title']+_0x3e00fb(0x135)+_0xda42ad[_0x3e5f27][_0x3e00fb(0x123)][_0x3e00fb(0x177)](_0x8b5dc4=>_0x8b5dc4['name'])[_0x3e00fb(0x12e)]('\x20'),'artist':_0xda42ad[_0x3e5f27][_0x3e00fb(0x123)][_0x3e00fb(0x177)](_0x49c5c6=>_0x49c5c6['name'])[_0x3e00fb(0x12e)]('\x20'),'id':_0xda42ad[_0x3e5f27][_0x3e00fb(0x164)],'url':_0x3e00fb(0x170)+_0xda42ad[_0x3e5f27][_0x3e00fb(0x164)],'album':_0xda42ad[_0x3e5f27][_0x3e00fb(0x17d)],'duration':{'seconds':_0xda42ad[_0x3e5f27][_0x3e00fb(0x133)]['totalSeconds'],'label':_0xda42ad[_0x3e5f27][_0x3e00fb(0x133)][_0x3e00fb(0x17a)]},'image':_0xda42ad[_0x3e5f27]['thumbnailUrl'][_0x3e00fb(0x129)](_0x3e00fb(0x148),_0x3e00fb(0x14c))});}_0x90e47a(_0x5e6ff9);}catch(_0x30978d){_0x456afa(_0x30978d);}});};static [_0x147211(0x166)]=async _0x39238b=>{const _0x32a073=_0x147211;try{const _0x13e4d3=Array[_0x32a073(0x15d)](_0x39238b)?_0x39238b:await this[_0x32a073(0x11f)](_0x39238b),_0x40075e=_0x13e4d3[0x0],_0x1b84d1=await ytdl[_0x32a073(0x155)](_0x32a073(0x16b)+_0x40075e['id'],{'lang':'id'});let _0x2f457f=ytdl(_0x40075e['id'],{'filter':_0x32a073(0x168),'quality':0x8c}),_0x1bb16e=_0x32a073(0x152)+randomBytes(0x3)[_0x32a073(0x150)](_0x32a073(0x15a))+_0x32a073(0x17c);_0x2f457f['on']('error',_0x4175f5=>console['log'](_0x4175f5));const _0x46903b=await new Promise(_0x315a16=>{const _0x9ad2f0=_0x32a073;ffmpeg(_0x2f457f)[_0x9ad2f0(0x159)](0xac44)['audioChannels'](0x2)[_0x9ad2f0(0x16d)](0x80)[_0x9ad2f0(0x154)]('libmp3lame')[_0x9ad2f0(0x161)](0x5)[_0x9ad2f0(0x165)](_0x9ad2f0(0x146))[_0x9ad2f0(0x176)](_0x1bb16e)['on'](_0x9ad2f0(0x17b),()=>_0x315a16(_0x1bb16e));});return await this[_0x32a073(0x13f)](_0x46903b,{'Title':_0x40075e[_0x32a073(0x149)],'Artist':_0x40075e[_0x32a073(0x136)],'Image':_0x40075e['image'],'Album':_0x40075e[_0x32a073(0x17d)],'Year':_0x1b84d1['videoDetails'][_0x32a073(0x125)]['split']('-')[0x0]}),{'meta':_0x40075e,'path':_0x46903b,'size':fs[_0x32a073(0x12d)](_0x1bb16e)[_0x32a073(0x14b)]};}catch(_0x59d159){throw new Error(_0x59d159);}};static [_0x147211(0x13b)]=async(_0x98035,_0x11cf1d=0x86)=>{const _0x52f427=_0x147211;try{if(!_0x98035)throw new Error(_0x52f427(0x13d));const _0x1788a1=this[_0x52f427(0x143)](_0x98035)?this[_0x52f427(0x145)](_0x98035):_0x98035,_0x5c95c0=await ytdl[_0x52f427(0x155)](_0x52f427(0x16b)+_0x1788a1,{'lang':'id'}),_0x1dfce1=ytdl[_0x52f427(0x157)](_0x5c95c0[_0x52f427(0x139)],{'format':_0x11cf1d,'filter':'videoandaudio'});return{'title':_0x5c95c0[_0x52f427(0x16e)]['title'],'thumb':_0x5c95c0[_0x52f427(0x16e)]['thumbnails'][_0x52f427(0x12c)](-0x1)[0x0],'date':_0x5c95c0[_0x52f427(0x16e)][_0x52f427(0x125)],'duration':_0x5c95c0['videoDetails'][_0x52f427(0x128)],'channel':_0x5c95c0[_0x52f427(0x16e)][_0x52f427(0x15c)],'quality':_0x1dfce1['qualityLabel'],'contentLength':_0x1dfce1['contentLength'],'description':_0x5c95c0[_0x52f427(0x16e)][_0x52f427(0x158)],'videoUrl':_0x1dfce1['url']};}catch(_0x48fcb3){throw _0x48fcb3;}};static ['mp3']=async(_0x4d4e1b,_0x3d56fe={},_0x39b3cf=![])=>{const _0xcb3317=_0x147211;try{if(!_0x4d4e1b)throw new Error(_0xcb3317(0x13d));_0x4d4e1b=this[_0xcb3317(0x143)](_0x4d4e1b)?'https://www.youtube.com/watch?v='+this['getVideoID'](_0x4d4e1b):_0x4d4e1b;const {videoDetails:_0x2ddd2a}=await ytdl['getInfo'](_0x4d4e1b,{'lang':'id'});let _0x4b1319=ytdl(_0x4d4e1b,{'filter':_0xcb3317(0x168),'quality':0x8c}),_0x19c45b=_0xcb3317(0x152)+randomBytes(0x3)[_0xcb3317(0x150)]('hex')+_0xcb3317(0x17c),_0x18daff;_0x4b1319[_0xcb3317(0x163)](_0xcb3317(0x120),()=>{const _0x3b1b51=_0xcb3317;_0x18daff=Date[_0x3b1b51(0x175)]();}),_0x4b1319['on'](_0xcb3317(0x121),(_0x4f673b,_0x10ab6e,_0x3c4ac0)=>{const _0x49e600=_0xcb3317,_0x566b04=_0x10ab6e/_0x3c4ac0,_0x5c792a=(Date[_0x49e600(0x175)]()-_0x18daff)/0x3e8/0x3c,_0x4379e1=_0x5c792a/_0x566b04-_0x5c792a;readline[_0x49e600(0x12f)](process[_0x49e600(0x15b)],0x0),process[_0x49e600(0x15b)]['write']((_0x566b04*0x64)['toFixed'](0x2)+_0x49e600(0x162)),process[_0x49e600(0x15b)]['write']('('+(_0x10ab6e/0x400/0x400)[_0x49e600(0x14d)](0x2)+'MB\x20of\x20'+(_0x3c4ac0/0x400/0x400)[_0x49e600(0x14d)](0x2)+'MB)\x0a'),process[_0x49e600(0x15b)][_0x49e600(0x12a)]('running\x20for:\x20'+_0x5c792a[_0x49e600(0x14d)](0x2)+_0x49e600(0x15f)),process[_0x49e600(0x15b)][_0x49e600(0x12a)](',\x20estimated\x20time\x20left:\x20'+_0x4379e1[_0x49e600(0x14d)](0x2)+_0x49e600(0x14e)),readline[_0x49e600(0x160)](process[_0x49e600(0x15b)],0x0,-0x1);}),_0x4b1319['on'](_0xcb3317(0x17b),()=>process[_0xcb3317(0x15b)][_0xcb3317(0x12a)]('\x0a\x0a')),_0x4b1319['on']('error',_0x1056f0=>console['log'](_0x1056f0));const _0xd08342=await new Promise(_0x34ca36=>{const _0x2dff6e=_0xcb3317;ffmpeg(_0x4b1319)[_0x2dff6e(0x159)](0xac44)[_0x2dff6e(0x15e)](0x2)[_0x2dff6e(0x16d)](0x80)[_0x2dff6e(0x154)]('libmp3lame')['audioQuality'](0x5)['toFormat'](_0x2dff6e(0x146))[_0x2dff6e(0x176)](_0x19c45b)['on'](_0x2dff6e(0x17b),()=>{_0x34ca36(_0x19c45b);});});return Object[_0xcb3317(0x151)](_0x3d56fe)[_0xcb3317(0x130)]!==0x0&&await this[_0xcb3317(0x13f)](_0xd08342,_0x3d56fe),_0x39b3cf&&await this[_0xcb3317(0x13f)](_0xd08342,{'Title':_0x2ddd2a[_0xcb3317(0x149)],'Album':_0x2ddd2a[_0xcb3317(0x172)][_0xcb3317(0x126)],'Year':_0x2ddd2a[_0xcb3317(0x125)][_0xcb3317(0x11e)]('-')[0x0],'Image':_0x2ddd2a[_0xcb3317(0x173)][_0xcb3317(0x12c)](-0x1)[0x0][_0xcb3317(0x174)]}),{'meta':{'title':_0x2ddd2a[_0xcb3317(0x149)],'channel':_0x2ddd2a[_0xcb3317(0x172)][_0xcb3317(0x126)],'seconds':_0x2ddd2a[_0xcb3317(0x128)],'image':_0x2ddd2a[_0xcb3317(0x173)]['slice'](-0x1)[0x0]['url']},'path':_0xd08342,'size':fs[_0xcb3317(0x12d)](_0x19c45b)['size']};}catch(_0x3aa80b){throw _0x3aa80b;}};}module['exports']=YT;