var elements = 3;
bestbuy();
function bestbuy (){
    t = setInterval(function(){
  var mybuy = 0;
  var maxprice = 999999999999999999;
  var myprice = 0;
  var mycps = 0;
    c=0
    for (let i = 0; i < elements; i++){
        mycps = (Game.ObjectsById[i].storedTotalCps)/Game.ObjectsById[i].amount * Game.globalCpsMult;
        myprice = Game.ObjectsById[i].getPrice();
        myprice = myprice /mycps;
        if(maxprice > myprice){
            mybuy = i;
            maxprice = myprice;
        }
    }
//console.log(mybuy);
Game.ObjectsById[mybuy].buy();

}, 1000);}

function stopBestBuy(){
    clearInterval(t);
}
