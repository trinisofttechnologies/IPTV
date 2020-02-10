class Parser{
  void method(String m3u8){
    List <String> list = m3u8.split("\n");
    for(var i=0,il=list.length;i<il;i++){
      if(list[i].matchAsPrefix("#EXTM3U")!= null){
        continue;
      }
      if(list[i].matchAsPrefix("#EXTINF")!= null){
        Map<String, Object> playlist = {};
        List<String> sSplit = list[i].split(',');
        List<String> ssSplit = sSplit[0].split(' ');

        for(var j=0,jl=ssSplit.length;j<jl;j++){
          List<String> tList = getNameValue(ssSplit[j]);
          print(tList);
          if(tList.length == 2){
            if(tList[0] == "tvg-id"){
              playlist["id"] = tList[1];
            }
            if(tList[0] == "tvg-name"){
              playlist["code"] = tList[1];
            }
            if(tList[0] == "tvg-logo"){
              playlist["logo"] = tList[1];
            }
            if(tList[0] == "group-title"){
              playlist["category"] = tList[1];
            }
          }
        }
        playlist["name"] = sSplit[1];
        playlist["url"] = list[i+1];
        print(playlist);
      }
    }
  }

  List<String> getNameValue(String small){
    List<String> list = [];
    List<String> sSplit = small.split("=");
    if(sSplit.length == 2){
      list[0] = sSplit[0];
      list[1] = sSplit[1];
    }
    return list;
  }
}

// Parser theParser = new Parser();
// theParse.method("Yeah");