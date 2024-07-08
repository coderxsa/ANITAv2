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

const _0x58777e=_0x4f5a;(function(_0x568194,_0x5b4c28){const _0xa4580c=_0x4f5a,_0x5e7144=_0x568194();while(!![]){try{const _0x3225a0=-parseInt(_0xa4580c(0x1dc))/0x1*(parseInt(_0xa4580c(0x1e1))/0x2)+-parseInt(_0xa4580c(0x1d4))/0x3*(-parseInt(_0xa4580c(0x1ec))/0x4)+-parseInt(_0xa4580c(0x1d5))/0x5+-parseInt(_0xa4580c(0x1e8))/0x6*(-parseInt(_0xa4580c(0x1e4))/0x7)+parseInt(_0xa4580c(0x1e2))/0x8+parseInt(_0xa4580c(0x1e0))/0x9*(parseInt(_0xa4580c(0x1e5))/0xa)+-parseInt(_0xa4580c(0x1e9))/0xb;if(_0x3225a0===_0x5b4c28)break;else _0x5e7144['push'](_0x5e7144['shift']());}catch(_0x15efa2){_0x5e7144['push'](_0x5e7144['shift']());}}}(_0x26bb,0x57bef));function _0x4f5a(_0x2f695f,_0x3fc0b7){const _0x26bb3c=_0x26bb();return _0x4f5a=function(_0x4f5aa3,_0x311871){_0x4f5aa3=_0x4f5aa3-0x1d4;let _0x33b776=_0x26bb3c[_0x4f5aa3];return _0x33b776;},_0x4f5a(_0x2f695f,_0x3fc0b7);}class TicTacToe{constructor(_0x50811b='x',_0xf1ab92='o'){const _0x1df4b8=_0x4f5a;this['playerX']=_0x50811b,this[_0x1df4b8(0x1ea)]=_0xf1ab92,this[_0x1df4b8(0x1df)]=![],this['_x']=0x0,this['_o']=0x0,this[_0x1df4b8(0x1e7)]=0x0;}get[_0x58777e(0x1d7)](){return this['_x']|this['_o'];}get[_0x58777e(0x1eb)](){const _0x3622cb=_0x58777e;return this['_currentTurn']?this[_0x3622cb(0x1ea)]:this[_0x3622cb(0x1db)];}get[_0x58777e(0x1da)](){const _0x47abda=_0x58777e;return this['_currentTurn']?this[_0x47abda(0x1db)]:this['playerO'];}static['check'](_0x1c0237){for(let _0x29c38e of[0x7,0x38,0x49,0x54,0x92,0x111,0x124,0x1c0])if((_0x1c0237&_0x29c38e)===_0x29c38e)return!0x0;return!0x1;}static['toBinary'](_0x424fb5=0x0,_0x43f555=0x0){if(_0x424fb5<0x0||_0x424fb5>0x2||_0x43f555<0x0||_0x43f555>0x2)throw new Error('invalid\x20position');return 0x1<<_0x424fb5+0x3*_0x43f555;}[_0x58777e(0x1dd)](_0x595c7c=0x0,_0x6f20ef=0x0,_0x5dd278){const _0x2ded0b=_0x58777e;if(this[_0x2ded0b(0x1d7)]===0x1ff)return-0x3;let _0x4ec080=0x0;if(_0x5dd278==null){if(_0x6f20ef<0x0||_0x6f20ef>0x8)return-0x1;_0x4ec080=0x1<<_0x6f20ef;}else{if(_0x6f20ef<0x0||_0x6f20ef>0x2||_0x5dd278<0x0||_0x5dd278>0x2)return-0x1;_0x4ec080=TicTacToe[_0x2ded0b(0x1d9)](_0x6f20ef,_0x5dd278);}if(this['_currentTurn']^_0x595c7c)return-0x2;if(this[_0x2ded0b(0x1d7)]&_0x4ec080)return 0x0;return this[this['_currentTurn']?'_o':'_x']|=_0x4ec080,this[_0x2ded0b(0x1df)]=!this[_0x2ded0b(0x1df)],this[_0x2ded0b(0x1e7)]++,0x1;}static[_0x58777e(0x1e6)](_0x348a15=0x0,_0x27410b=0x0){const _0x5ec6f2=_0x58777e;let _0x29cd33=parseInt(_0x348a15[_0x5ec6f2(0x1de)](0x2),0x4),_0x56a3e3=parseInt(_0x27410b['toString'](0x2),0x4)*0x2;return[...(_0x29cd33+_0x56a3e3)[_0x5ec6f2(0x1de)](0x4)['padStart'](0x9,'0')][_0x5ec6f2(0x1e3)]()['map']((_0x22ab63,_0x3760e1)=>_0x22ab63==0x1?'X':_0x22ab63==0x2?'O':++_0x3760e1);}[_0x58777e(0x1e6)](){return TicTacToe['render'](this['_x'],this['_o']);}get[_0x58777e(0x1d8)](){const _0x1bbc8e=_0x58777e;let _0x4757e3=TicTacToe[_0x1bbc8e(0x1d6)](this['_x']),_0x218cc=TicTacToe[_0x1bbc8e(0x1d6)](this['_o']);return _0x4757e3?this[_0x1bbc8e(0x1db)]:_0x218cc?this[_0x1bbc8e(0x1ea)]:![];}}function _0x26bb(){const _0x2936ca=['currentTurn','4dDwDFm','exports','1763967bdHmei','2086425YpdNpc','check','board','winner','toBinary','enemyTurn','playerX','15647HOdPKv','turn','toString','_currentTurn','8298IpVxZR','30NyEcVU','319800hTCLoO','reverse','9947GoiqFh','5840QDjwMI','render','turns','2958VyleuQ','9411248WknzOv','playerO'];_0x26bb=function(){return _0x2936ca;};return _0x26bb();}new TicTacToe()[_0x58777e(0x1dd)],module[_0x58777e(0x1ed)]=TicTacToe;