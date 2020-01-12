// custom menu function
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Save Data','saveData')
      .addItem('Save Predictions','savePredictions')
      .addToUi();
}

function saveData() {
  var symbol, close, changep, changev, rating, volume, marketcap, pte, eps, employees, sector, now;
  //var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheets()[0];
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live Data");
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Database");
  
  now = sheet.getRange(1, 12).getValue();
  
  for (var i = 2; i < 102; i++) {
    symbol = sheet.getRange(i, 1).getValue();
    close = sheet.getRange(i, 2).getValue();
    changep = sheet.getRange(i, 3).getValue();
    changev = sheet.getRange(i, 4).getValue();
    rating = sheet.getRange(i, 5).getValue();
    volume = sheet.getRange(i, 6).getValue();
    marketcap = sheet.getRange(i, 7).getValue();
    pte = sheet.getRange(i, 8).getValue();
    eps = sheet.getRange(i, 9).getValue();
    employees = sheet.getRange(i, 10).getValue();
    sector = sheet.getRange(i, 11).getValue();
    sheet2.appendRow([symbol,close,changep,changev,rating,volume,pte,eps,employees,sector,now]);
  }
    sheet2.appendRow(["————————","————————","————————","————————","————————","————————","————————","————————","————————","————————","————————"]);
}

function savePredictions() {
  var symbol, rating, magnitude, currentPrice, now;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Buy/Short");
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Predictions");
  
  now = sheet.getRange(2, 5).getValue();
  
  for (var i = 2; i < 102; i++) {
    symbol = sheet.getRange(i, 1).getValue();
    rating = sheet.getRange(i, 2).getValue();
    magnitude = sheet.getRange(i, 3).getValue();
    currentPrice = sheet.getRange(i, 4).getValue();
    if (symbol) {
    sheet2.appendRow([symbol,rating,magnitude,currentPrice,now]);
    }
  }
    sheet2.appendRow(["————————","————————","————————","————————","————————"]);
}
