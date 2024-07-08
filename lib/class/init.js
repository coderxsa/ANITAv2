/*
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                             // 
//                                                                                                      // 
//                                         Ｖ：１．０                                                    // 
//                                                                                                      // 
//                                                                                                      //
//         ██████ ██    ██  ██████  ███    ██ ██    ██ ███████       ██████   ██████  ████████          //
//        ██       ██  ██  ██       ████   ██ ██    ██ ██            ██   ██ ██    ██    ██             //
//        ██        ████   ██   ███ ██ ██  ██ ██    ██ ███████ █████ ██████  ██    ██    ██             //   
//        ██         ██    ██    ██ ██  ██ ██ ██    ██      ██       ██   ██ ██    ██    ██             //  
//         ██████    ██     ██████  ██   ████  ██████  ███████       ██████   ██████     ██             //  
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : CYGNUS-BOTv2
   * @author : CODERXSA
   * @youtube : https://www.youtube.com/@coderxsa
   * @instagram : https://www.instagram.com/coderx.sa
   * @description : My Private build i made public for everone to use and easy hosting.
   * @version : 1.0
   * Donation : https://pay.yoco.com/coderx
   
   * For all my GitHub bots, I typically only check and update them when I have the time. My primary focus is on my main bots.
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By CODERX.
   * © 2024 CYGNUS-BOTv2.
*/



//══════════════════════════════════════════════════════════════════════════════════════════════════════//

'use strict';var _0x55bf51=_0x1e35;(function(_0x2e95be,_0x5baa65){var _0x395661=_0x1e35,_0x14bff2=_0x2e95be();while(!![]){try{var _0xdd444f=parseInt(_0x395661(0xf9))/0x1*(parseInt(_0x395661(0xe5))/0x2)+parseInt(_0x395661(0xfb))/0x3*(-parseInt(_0x395661(0xf1))/0x4)+-parseInt(_0x395661(0xe8))/0x5*(parseInt(_0x395661(0xeb))/0x6)+parseInt(_0x395661(0xef))/0x7*(-parseInt(_0x395661(0x101))/0x8)+parseInt(_0x395661(0xe1))/0x9*(parseInt(_0x395661(0x102))/0xa)+-parseInt(_0x395661(0xe7))/0xb+-parseInt(_0x395661(0xf8))/0xc*(-parseInt(_0x395661(0x104))/0xd);if(_0xdd444f===_0x5baa65)break;else _0x14bff2['push'](_0x14bff2['shift']());}catch(_0x3e947f){_0x14bff2['push'](_0x14bff2['shift']());}}}(_0x30ff,0xc8427));function _0x1e35(_0x41dcf1,_0xf72d07){var _0x30fff8=_0x30ff();return _0x1e35=function(_0x1e354b,_0xf24338){_0x1e354b=_0x1e354b-0xd9;var _0xeec58a=_0x30fff8[_0x1e354b];return _0xeec58a;},_0x1e35(_0x41dcf1,_0xf72d07);}function _0x30ff(){var _0x4c9a09=['audio','crypto','host','buildStringToSign','forEach','prototype','sample_rate','digest','196011hrEkDh','sha1','base64','from','1906BxgKbR','signature_version','13286174OjCRBh','30cFpnbC','data_type','POST','722832MqWGpR','append','createHmac','length','455gUilKc','generateFormData','4wcGuxf','join','audio_channels','then','keys','https://','form-data','306636oNPPms','477XOVRgr','getTime','1920927BwaKVF','toString','sign','access_key','audio_format','endpoint','39304PMTPwm','310izAmnU','access_secret','1313kuRUlN','identify-us-west-2.acrcloud.com'];_0x30ff=function(){return _0x4c9a09;};return _0x30ff();}var fetch=require('node-fetch'),FormData=require(_0x55bf51(0xf7)),crypto=require(_0x55bf51(0xda)),acr=(function(){var _0x5abfd8=_0x55bf51;function _0x37722e(_0x1bbc61){var _0x1ad983=_0x1e35;this[_0x1ad983(0x100)]='/v1/identify',this[_0x1ad983(0xe6)]='1';var _0x137cae=_0x1bbc61[_0x1ad983(0xdb)],_0x470595=_0x1bbc61[_0x1ad983(0xfe)],_0x3e847a=_0x1bbc61['access_secret'],_0x3e7b00=_0x1bbc61[_0x1ad983(0xe9)],_0x914bb5=_0x1bbc61[_0x1ad983(0xff)],_0x158554=_0x1bbc61[_0x1ad983(0xdf)],_0x1bec82=_0x1bbc61['audio_channels'];this[_0x1ad983(0xdb)]=_0x137cae||_0x1ad983(0x105),this[_0x1ad983(0xfe)]=_0x470595,this[_0x1ad983(0x103)]=_0x3e847a,this[_0x1ad983(0xe9)]=_0x3e7b00||_0x1ad983(0xd9),this[_0x1ad983(0xff)]=_0x914bb5||'',this[_0x1ad983(0xdf)]=_0x158554||'',this[_0x1ad983(0xf3)]=_0x1bec82||0x2;}return _0x37722e[_0x5abfd8(0xde)]['buildStringToSign']=function(_0x5b72d7,_0x54d118,_0x282539,_0x21288d,_0x55de26,_0x2c3e81){var _0x355fed=_0x5abfd8;return[_0x5b72d7,_0x54d118,_0x282539,_0x21288d,_0x55de26,_0x2c3e81][_0x355fed(0xf2)]('\x0a');},_0x37722e['prototype']['sign']=function(_0x120ee5,_0x2c7047){var _0x472775=_0x5abfd8;return crypto[_0x472775(0xed)](_0x472775(0xe2),_0x2c7047)['update'](Buffer[_0x472775(0xe4)](_0x120ee5,'utf-8'))[_0x472775(0xe0)]()[_0x472775(0xfc)](_0x472775(0xe3));},_0x37722e[_0x5abfd8(0xde)]['generateFormData']=function(_0x3fb71b){var _0x155ea5=_0x5abfd8,_0x22e756=new FormData();return Object[_0x155ea5(0xf5)](_0x3fb71b)[_0x155ea5(0xdd)](function(_0x52c387){var _0x1e3f11=_0x155ea5;_0x22e756[_0x1e3f11(0xec)](_0x52c387,_0x3fb71b[_0x52c387]);}),_0x22e756;},_0x37722e[_0x5abfd8(0xde)]['identify']=function(_0xbccdae){var _0x454d90=_0x5abfd8,_0x1b0218=new Date(),_0x11c40e=_0x1b0218[_0x454d90(0xfa)]()/0x3e8,_0x173ba8=this[_0x454d90(0xdc)](_0x454d90(0xea),this['endpoint'],this[_0x454d90(0xfe)],this[_0x454d90(0xe9)],this['signature_version'],_0x11c40e),_0x223d9a=this[_0x454d90(0xfd)](_0x173ba8,this['access_secret']),_0x4f5d04={'sample':_0xbccdae,'access_key':this[_0x454d90(0xfe)],'data_type':this[_0x454d90(0xe9)],'signature_version':this['signature_version'],'signature':_0x223d9a,'sample_bytes':_0xbccdae[_0x454d90(0xee)],'timestamp':_0x11c40e};return fetch(_0x454d90(0xf6)+this[_0x454d90(0xdb)]+'/'+this[_0x454d90(0x100)],{'method':_0x454d90(0xea),'body':this[_0x454d90(0xf0)](_0x4f5d04)})[_0x454d90(0xf4)](function(_0x2473bd){return _0x2473bd['json']();});},_0x37722e;}());module['exports']=acr;