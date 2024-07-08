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

const _0x56b247=_0x4bfc;(function(_0x1292da,_0x3998ff){const _0x1b8568=_0x4bfc,_0x180866=_0x1292da();while(!![]){try{const _0x2ef66d=-parseInt(_0x1b8568(0x110))/0x1*(parseInt(_0x1b8568(0x114))/0x2)+parseInt(_0x1b8568(0x142))/0x3+-parseInt(_0x1b8568(0x12d))/0x4*(-parseInt(_0x1b8568(0x120))/0x5)+parseInt(_0x1b8568(0x12f))/0x6*(parseInt(_0x1b8568(0x11f))/0x7)+-parseInt(_0x1b8568(0x11b))/0x8+parseInt(_0x1b8568(0x113))/0x9+-parseInt(_0x1b8568(0x129))/0xa;if(_0x2ef66d===_0x3998ff)break;else _0x180866['push'](_0x180866['shift']());}catch(_0x258ab8){_0x180866['push'](_0x180866['shift']());}}}(_0x536b,0xc87e8));let antiCallMessage=process['env']['ANTICALL_MESSAGE']||_0x56b247(0x125),antiCallCountries=[],antiCallusers={},bots=![];function _0x4bfc(_0xc5d11e,_0x4ef7fd){const _0x536bab=_0x536b();return _0x4bfc=function(_0x4bfc44,_0x33ce06){_0x4bfc44=_0x4bfc44-0x10f;let _0x1310fb=_0x536bab[_0x4bfc44];return _0x1310fb;},_0x4bfc(_0xc5d11e,_0x4ef7fd);}const {smd,botpic,send,Config,tlang,sleep,smdBuffer,prefix,bot_}=require(_0x56b247(0x118));smd({'pattern':_0x56b247(0x128),'desc':'Detects\x20calls\x20and\x20decline\x20them.\x20','category':_0x56b247(0x11a),'use':'<on\x20|\x20off>','filename':__filename},async(_0x4bb937,_0x67dd44)=>{const _0x3354c3=_0x56b247;let _0x3037b5=await bot_[_0x3354c3(0x11c)]({'id':_0x3354c3(0x115)+_0x4bb937[_0x3354c3(0x127)]})||await bot_[_0x3354c3(0x123)]({'id':_0x3354c3(0x115)+_0x4bb937[_0x3354c3(0x127)]}),_0x58daf4=_0x67dd44?_0x67dd44[_0x3354c3(0x119)]()[_0x3354c3(0x12b)]():'';if(_0x58daf4['startsWith'](_0x3354c3(0x131))||_0x58daf4[_0x3354c3(0x132)](_0x3354c3(0x136))||_0x58daf4[_0x3354c3(0x132)](_0x3354c3(0x112))){if(_0x3037b5[_0x3354c3(0x128)]==='false')return await _0x4bb937[_0x3354c3(0x12e)](_0x3354c3(0x13a));return await bot_[_0x3354c3(0x140)]({'id':_0x3354c3(0x115)+_0x4bb937[_0x3354c3(0x127)]},{'anticall':_0x3354c3(0x13e)}),await _0x4bb937[_0x3354c3(0x12e)]('*anticall\x20Disable\x20Succesfully!*');}else{if(!_0x67dd44)return await _0x4bb937[_0x3354c3(0x12e)](_0x3354c3(0x116)+(_0x3037b5['anticall']===_0x3354c3(0x13e)?_0x3354c3(0x121):_0x3354c3(0x139)+_0x3037b5['anticall']+'\x22')+_0x3354c3(0x11e));}let _0x4325fe=_0x58daf4[_0x3354c3(0x122)](_0x3354c3(0x137))?_0x3354c3(0x137):_0x67dd44?_0x67dd44[_0x3354c3(0x124)](',')[_0x3354c3(0x12a)](_0x50a17e=>parseInt(_0x50a17e))[_0x3354c3(0x138)](_0x55b9ef=>!isNaN(_0x55b9ef))['join'](','):![];return!_0x67dd44||!_0x4325fe?await _0x4bb937['send']('*_Please\x20provide\x20country\x20code\x20to\x20block\x20calls_*\x0a*_eg:\x20'+prefix+_0x3354c3(0x13c)):_0x4325fe?(await bot_[_0x3354c3(0x140)]({'id':_0x3354c3(0x115)+_0x4bb937[_0x3354c3(0x127)]},{'anticall':''+_0x4325fe}),await _0x4bb937['send'](_0x3354c3(0x13f)+_0x4325fe+_0x3354c3(0x11d))):await _0x4bb937[_0x3354c3(0x12e)](_0x3354c3(0x117)+prefix+_0x3354c3(0x13b));}),smd({'call':_0x56b247(0x134)},async _0x53d1de=>{const _0x4bd900=_0x56b247;try{!bots&&(bots=await bot_[_0x4bd900(0x11c)]({'id':_0x4bd900(0x115)+_0x53d1de['user']}));if(_0x53d1de[_0x4bd900(0x10f)]||!bots||!bots[_0x4bd900(0x128)]||bots[_0x4bd900(0x128)]===_0x4bd900(0x13e))return;(!antiCallCountries||!antiCallCountries[0x0])&&(antiCallCountries=bots['anticall']?.[_0x4bd900(0x124)](',')||[],antiCallCountries=antiCallCountries['filter'](_0x2601b2=>_0x2601b2[_0x4bd900(0x12b)]()!==''));let _0x176353=(''+bots[_0x4bd900(0x128)])[_0x4bd900(0x122)]('all')?_0x4bd900(0x137):'',_0xb632b6=_0x176353==_0x4bd900(0x137)?!![]:antiCallCountries[_0x4bd900(0x130)](_0x4d882f=>_0x53d1de[_0x4bd900(0x141)]?.[_0x4bd900(0x12c)]()?.[_0x4bd900(0x132)](_0x4d882f));if(_0xb632b6||_0x53d1de[_0x4bd900(0x13d)])try{return(!antiCallusers||!antiCallusers[_0x53d1de[_0x4bd900(0x141)]])&&(antiCallusers[_0x53d1de['from']]={'warn':0x0}),antiCallusers[_0x53d1de['from']][_0x4bd900(0x111)]<0x2&&await _0x53d1de[_0x4bd900(0x12e)](antiCallMessage),antiCallusers[_0x53d1de[_0x4bd900(0x141)]][_0x4bd900(0x111)]++,await _0x53d1de[_0x4bd900(0x12e)]('*_'+antiCallusers[_0x53d1de['from']][_0x4bd900(0x111)]+_0x4bd900(0x126)+_0x53d1de[_0x4bd900(0x141)][_0x4bd900(0x124)]('@')[0x0]+_0x4bd900(0x135),{'mentions':[_0x53d1de[_0x4bd900(0x141)]]},'asta','',_0x53d1de['user']),await _0x53d1de[_0x4bd900(0x133)]();}catch{}}catch{}});function _0x536b(){const _0x5efd26=['\x22!*','\x20Country\x20Code!_*\x0a\x20*Provide\x20Country\x20code\x20to\x20Update\x20Status*\x0a*Eg:\x20_.anticall\x20all\x20|\x20212,\x2091_*','2244914KJFnjh','65AtwhPN','Not\x20set\x20to\x20any','includes','new','split','```Hii\x20this\x20is\x20ANITA\x20a\x20Personal\x20Assistant!!\x0a\x0a\x09Sorry\x20for\x20now,\x20we\x20cannot\x20receive\x20calls,\x20whether\x20in\x20a\x20group\x20or\x20personal\x20\x0a\x0a\x20if\x20you\x20need\x20help\x20or\x20request\x20features\x20please\x20chat\x20owner\x0a\x0a\x0aPowered\x20by\x20ANITA```','\x20Call\x20rejected\x20From\x20User\x20@','user','anticall','13278090RNmvUp','map','trim','toString','422548MlazGt','send','12ktpTzX','some','off','startsWith','decline','offer','..!!_*','deact','all','filter','set\x20to\x20\x22','*anticall\x20Already\x20Disabled\x20In\x20Current\x20Chat!*','anticall\x20all,212,91,231,27_*','anticall\x20all\x20|\x2092_*','isBot','false','*anticall\x20Succesfully\x20set\x20to\x20\x22','updateOne','from','3958509IrClhe','fromMe','1rGrixu','warn','disable','4109022rsZmFn','1597698XfLtzt','bot_','*_anticall\x20','*_Please\x20provide\x20a\x20Valid\x20country\x20code_*\x0a*example:\x20','../lib','toLowerCase','owner','6742912vzJdbI','findOne'];_0x536b=function(){return _0x5efd26;};return _0x536b();}