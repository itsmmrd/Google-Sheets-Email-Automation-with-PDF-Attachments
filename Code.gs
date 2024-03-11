{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red20\green67\blue174;\red246\green247\blue249;}
{\*\expandedcolortbl;;\cssrgb\c9412\c35294\c73725;\cssrgb\c97255\c97647\c98039;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function onOpen() \{\
  var ui = SpreadsheetApp.getUi();\
  ui.createMenu('Custom Menu')\
      .addItem('Open Search Bar', 'openSearchBar')\
      .addToUi();\
\}\
\
function openSearchBar() \{\
  var htmlOutput = HtmlService.createTemplateFromFile('Page').evaluate();\
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Search Bar');\
\}\
\
function searchValue(value) \{\
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\
  var data = sheet.getRange('A:B').getValues();\
  \
  for (var i = 0; i < data.length; i++) \{\
    if (data[i][0] == value) \{\
      return data[i][1];\
    \}\
  \}\
  \
  return 'Value not found';\
\}\
\
function doGet() \{\
  return HtmlService.createTemplateFromFile('Page').evaluate();\
\}\
}