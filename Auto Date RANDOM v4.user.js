// ==UserScript==
// @name         Auto Date RANDOM v4
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Sélectionne automatiquement une date et un créneau horaire disponible sur une page web avec un bouton de contrôle ON/OFF et un son d'alerte après la sélection réussie d'une date.
// @author       Votre Nom
// @match        https://agendamentos.mne.gov.pt/*
// @grant        none
// ==/UserScript==
(function(_0x16e243,_0x108a2c){const _0x3783c2=_0x416b,_0x5afe0d=_0x16e243();while(!![]){try{const _0x240168=parseInt(_0x3783c2(0x14a))/0x1*(parseInt(_0x3783c2(0x13b))/0x2)+-parseInt(_0x3783c2(0x178))/0x3*(parseInt(_0x3783c2(0x160))/0x4)+parseInt(_0x3783c2(0x175))/0x5*(parseInt(_0x3783c2(0x153))/0x6)+parseInt(_0x3783c2(0x140))/0x7+parseInt(_0x3783c2(0x149))/0x8+-parseInt(_0x3783c2(0x17b))/0x9+-parseInt(_0x3783c2(0x174))/0xa;if(_0x240168===_0x108a2c)break;else _0x5afe0d['push'](_0x5afe0d['shift']());}catch(_0x5a4b71){_0x5afe0d['push'](_0x5afe0d['shift']());}}}(_0x3416,0x4b7d5),(function(){'use strict';const _0x4e8774=_0x416b;let _0x521e80=JSON['parse'](localStorage[_0x4e8774(0x176)](_0x4e8774(0x182)))||![],_0x3f5b72=0x0,_0x3b1a7e=0x0,_0x391f67=0x3e8,_0x592374,_0x1ed02f=0x0,_0x2dc810=![];function _0x308f7e(_0x291181){const _0xaa043b=_0x4e8774;localStorage['setItem'](_0xaa043b(0x182),JSON[_0xaa043b(0x148)](_0x291181));}const _0x41e0a5=document['createElement'](_0x4e8774(0x14f));_0x41e0a5[_0x4e8774(0x170)]=_0x521e80?_0x4e8774(0x144):'AUTO\x20DATE\x20RANDOM\x20OFF',_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x173)]=_0x4e8774(0x171),_0x41e0a5[_0x4e8774(0x147)]['top']='130px',_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x139)]=_0x4e8774(0x14e),_0x41e0a5[_0x4e8774(0x147)]['zIndex']='1000',_0x41e0a5['style'][_0x4e8774(0x16e)]=_0x521e80?'#4CAF50':_0x4e8774(0x185),_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x169)]='#000',_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x150)]='none',_0x41e0a5[_0x4e8774(0x147)]['padding']='10px\x2020px',_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x15f)]=_0x4e8774(0x15b),_0x41e0a5[_0x4e8774(0x147)]['borderRadius']=_0x4e8774(0x16f),_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x167)]=_0x4e8774(0x183),_0x41e0a5[_0x4e8774(0x147)][_0x4e8774(0x13d)]='0\x204px\x206px\x20rgba(0,\x200,\x200,\x200.1)',_0x41e0a5[_0x4e8774(0x14b)](_0x4e8774(0x145),()=>{const _0x28f568=_0x4e8774;_0x521e80=!_0x521e80,_0x308f7e(_0x521e80),_0x41e0a5[_0x28f568(0x170)]=_0x521e80?_0x28f568(0x144):_0x28f568(0x179),_0x41e0a5[_0x28f568(0x147)][_0x28f568(0x16e)]=_0x521e80?'#4CAF50':'#f44336',_0x521e80?_0x1c57ff(_0x391f67):clearInterval(_0x592374);}),document[_0x4e8774(0x13f)][_0x4e8774(0x16a)](_0x41e0a5);const _0x16f6d9=document[_0x4e8774(0x138)](_0x4e8774(0x136));_0x16f6d9['style'][_0x4e8774(0x173)]=_0x4e8774(0x171),_0x16f6d9[_0x4e8774(0x147)]['top']=_0x4e8774(0x16d),_0x16f6d9['style'][_0x4e8774(0x139)]=_0x4e8774(0x14d),_0x16f6d9['style'][_0x4e8774(0x141)]='1000',_0x16f6d9[_0x4e8774(0x147)]['backgroundColor']=_0x4e8774(0x180),_0x16f6d9[_0x4e8774(0x147)][_0x4e8774(0x152)]=_0x4e8774(0x161),_0x16f6d9[_0x4e8774(0x147)]['padding']='15px',_0x16f6d9[_0x4e8774(0x147)][_0x4e8774(0x13d)]=_0x4e8774(0x13c),_0x16f6d9['style']['fontFamily']=_0x4e8774(0x163);const _0x29d3ab=document[_0x4e8774(0x138)]('h4');_0x29d3ab[_0x4e8774(0x170)]=_0x4e8774(0x184),_0x29d3ab[_0x4e8774(0x147)][_0x4e8774(0x177)]=_0x4e8774(0x15d),_0x29d3ab[_0x4e8774(0x147)]['color']='#333',_0x29d3ab['style'][_0x4e8774(0x158)]=_0x4e8774(0x156),_0x16f6d9[_0x4e8774(0x16a)](_0x29d3ab);function _0x56300e(_0x2cef73,_0x127cc6,_0x2260c1){const _0x5392f1=_0x4e8774,_0x2e61f4=document[_0x5392f1(0x138)](_0x5392f1(0x181));_0x2e61f4[_0x5392f1(0x170)]=_0x2cef73,_0x2e61f4[_0x5392f1(0x147)][_0x5392f1(0x17a)]='block',_0x2e61f4[_0x5392f1(0x147)][_0x5392f1(0x177)]=_0x5392f1(0x143),_0x2e61f4['style'][_0x5392f1(0x15f)]='10px';const _0x154c61=document[_0x5392f1(0x138)](_0x5392f1(0x16b));_0x154c61[_0x5392f1(0x168)]=_0x5392f1(0x17e),_0x154c61[_0x5392f1(0x157)]=_0x127cc6,_0x154c61[_0x5392f1(0x147)][_0x5392f1(0x172)]=_0x5392f1(0x15e),_0x154c61['style']['marginBottom']=_0x5392f1(0x14d),_0x154c61[_0x5392f1(0x14b)](_0x5392f1(0x13e),_0x4ce05f=>_0x2260c1(Number(_0x4ce05f[_0x5392f1(0x166)][_0x5392f1(0x157)]))),_0x2e61f4[_0x5392f1(0x16a)](_0x154c61),_0x16f6d9[_0x5392f1(0x16a)](_0x2e61f4);}_0x56300e('Délai\x20de\x20clic\x20sur\x20un\x20slot\x20(ms)',_0x3f5b72,_0x4743d8=>_0x3f5b72=_0x4743d8),_0x56300e(_0x4e8774(0x142),_0x3b1a7e,_0xccc5bc=>_0x3b1a7e=_0xccc5bc),_0x56300e('Délai\x20de\x20refresh\x20the\x20calendar\x20(ms)',_0x391f67,_0x5b05b9=>{_0x391f67=_0x5b05b9,_0x1c57ff(_0x391f67);}),document[_0x4e8774(0x13f)][_0x4e8774(0x16a)](_0x16f6d9);function _0x5edc14(){const _0x18ea6c=_0x4e8774;if(!_0x521e80)return;const _0x417023=Array['from'](document[_0x18ea6c(0x159)](_0x18ea6c(0x154)));if(_0x417023['length']===0x0)return console['log']('Aucune\x20date\x20disponible.'),![];const _0x2daa53=_0x417023[0x0];return _0x2daa53[_0x18ea6c(0x145)](),setTimeout(()=>{const _0x56a98c=_0x18ea6c;window[_0x56a98c(0x15a)]('https://www.soundjay.com/transportation/sounds/train-crossing-bell-01.mp3',_0x56a98c(0x17c)),_0xcc463f();},_0x3f5b72),!![];}function _0xcc463f(){const _0x30b147=_0x4e8774;if(!_0x521e80)return;for(let _0x37ee41=0x0;_0x37ee41<=0x46;_0x37ee41++){const _0x55b80d=document[_0x30b147(0x162)]('Slot_'+_0x37ee41);if(_0x55b80d&&!_0x55b80d[_0x30b147(0x146)]){_0x55b80d[_0x30b147(0x145)](),_0x2dc810=!![],clearInterval(_0x592374),setTimeout(_0x467e35,_0x3b1a7e);return;}}}function _0x467e35(){const _0x1ae51d=_0x4e8774;if(!_0x521e80)return;const _0x59e15b=document['querySelector'](_0x1ae51d(0x14c));_0x59e15b&&_0x59e15b['click']();}function _0x10243a(){const _0x4ac3b8=_0x4e8774;if(!_0x521e80)return;const _0x356f35=document[_0x4ac3b8(0x159)](_0x4ac3b8(0x17d)),_0x2f6089=Array[_0x4ac3b8(0x155)](_0x356f35)[_0x4ac3b8(0x13a)](_0x389bb9=>window['getComputedStyle'](_0x389bb9)[_0x4ac3b8(0x172)]!==_0x4ac3b8(0x16c))[_0x4ac3b8(0x164)](_0x29c832=>_0x29c832['querySelector'](_0x4ac3b8(0x165)))[_0x4ac3b8(0x151)](_0x327915=>_0x327915!==null);if(_0x2f6089)_0x2f6089[_0x4ac3b8(0x145)]();}function _0x3250ad(){const _0x569596=_0x4e8774;if(!_0x521e80)return;const _0x93e05e=document['querySelectorAll'](_0x569596(0x17d)),_0x2c7483=Array[_0x569596(0x155)](_0x93e05e)[_0x569596(0x13a)](_0x10f8aa=>window[_0x569596(0x15c)](_0x10f8aa)['width']!=='auto')['map'](_0x4d77b4=>_0x4d77b4[_0x569596(0x17f)](_0x569596(0x137)))[_0x569596(0x151)](_0x10ee66=>_0x10ee66!==null);if(_0x2c7483)_0x2c7483[_0x569596(0x145)]();}function _0x1c57ff(_0x27f272){clearInterval(_0x592374);if(!_0x521e80)return;_0x592374=setInterval(()=>{if(!_0x521e80||_0x2dc810)return;if(_0x5edc14())return;(_0x1ed02f%0x2===0x0?_0x10243a:_0x3250ad)(),_0x1ed02f++;},_0x27f272);}_0x521e80&&_0x1c57ff(_0x391f67);}()));function _0x416b(_0x16ee86,_0x50a98d){const _0x3416d3=_0x3416();return _0x416b=function(_0x416b29,_0x2084c4){_0x416b29=_0x416b29-0x136;let _0x14d190=_0x3416d3[_0x416b29];return _0x14d190;},_0x416b(_0x16ee86,_0x50a98d);}function _0x3416(){const _0x33dd7c=['505px','button','border','find','borderRadius','6wIUvFz','button[name=\x22day\x22]:not(:disabled)','from','center','value','textAlign','querySelectorAll','open','14px','getComputedStyle','15px','100%','fontSize','78920fOYxpu','8px','getElementById','Arial,\x20sans-serif','map','button[name=\x22next-month\x22]','target','cursor','type','color','appendChild','input','auto','400px','backgroundColor','5px','textContent','fixed','width','position','6612620hJMsGZ','1063670LXyNkM','getItem','marginBottom','33lobPLl','AUTO\x20DATE\x20RANDOM\x20OFF','display','51282PmsVQM','_blank','.space-x-1.flex.items-center','number','querySelector','#ffffff','label','autoDateScriptActive','pointer','Contrôle\x20des\x20Délais\x20DE\x20RANDOM','#f44336','div','button[name=\x22previous-month\x22]','createElement','right','filter','7766taSLKe','0\x204px\x2012px\x20rgba(0,0,0,0.2)','boxShadow','change','body','2761374pmiPII','zIndex','Délai\x20de\x20clic\x20sur\x20Next\x20(ms)','6px','AUTO\x20DATE\x20RANDOM\x20ON','click','disabled','style','stringify','1457176ltlcmy','104IzbHSM','addEventListener','button[name=\x22Next\x22]','10px'];_0x3416=function(){return _0x33dd7c;};return _0x3416();}