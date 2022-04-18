(function(){
  var a;
  const YTR_CSSObj = {
    'CSSInfo': [
      {
        'YTRName': 'Danny Gonzalez',
        'defaultCursor': 'https://i.ibb.co/Wv32v9d/Nut-Cracker-Danny-Gonzalez.png',
        'PointerCursor': 'https://i.ibb.co/sthbwsP/GREG-Danny-Gonzalez.png'
      },
      {
        'YTRName': 'Markiplier',
        'defaultCursor': 'https://i.ibb.co/8XxwMHM/MARKIPLIER.png',
        'PointerCursor': 'https://i.ibb.co/smQvRPn/MARKIPLIER2.png'
      },
      {
        'YTRName': 'MiawAug',
        'defaultCursor': 'https://i.ibb.co/FndNSwM/MiawAug.png',
        'PointerCursor': 'https://i.ibb.co/3scr8XZ/MiawAug2.png'
      },
      {
        'YTRName': 'Jacksepticeye',
        'defaultCursor': 'https://i.ibb.co/2Mntsps/Jacksepticeye-SAM-the-mascot.png',
        'PointerCursor': 'https://i.ibb.co/h1QY33S/Jacksepticeye-Bell.png'
      }
    ],
    'CSSHandler': [
      [
        'html[YTR_Theme="YTChannelName"] * ',
        '{\n cursor: url(ImageLink), auto;\n}\n'
      ],
      [
        'html[YTR_Theme="YTChannelName"] a, html[YTR_Theme="YTChannelName"] a *, html[YTR_Theme="YTChannelName"] button, html[YTR_Theme="YTChannelName"] button *, html[YTR_Theme="YTChannelName"] div.YCS-optional-function-CONTAINER *, html[YTR_Theme="YTChannelName"] #CollapseButton, html[YTR_Theme="YTChannelName"] #button *, html[YTR_Theme="YTChannelName"] #button, html[YTR_Theme="YTChannelName"] tp-yt-paper-tab, html[YTR_Theme="YTChannelName"] tp-yt-paper-tab *, html[YTR_Theme="YTChannelName"] [CPointer] ',
        '{\n cursor: url(ImageLink), pointer !important;\n}\n'
      ]
    ]
  };
  for (var loopI=0; loopI<YTR_CSSObj.CSSInfo.length; loopI++) {
    a += '/* '+ YTR_CSSObj.CSSInfo[loopI].YTRName +' */\n';
    a += YTR_CSSObj.CSSHandler[0][0].replaceAll('YTChannelName', YTR_CSSObj.CSSInfo[loopI].YTRName) + YTR_CSSObj.CSSHandler[0][1].replaceAll('ImageLink', YTR_CSSObj.CSSInfo[loopI].defaultCursor);
    a += YTR_CSSObj.CSSHandler[1][0].replaceAll('YTChannelName', YTR_CSSObj.CSSInfo[loopI].YTRName) + YTR_CSSObj.CSSHandler[1][1].replaceAll('ImageLink', YTR_CSSObj.CSSInfo[0].PointerCursor);
    a += '\n';
  }
  console.log('%c'+a, 'color:purple;font-family:garamond;font-size:18px;');
})();
