var _0x1c39=["\x70\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x70\x32","\x72\x65\x73\x65\x74","\x73\x63\x6F\x72\x65\x50\x31","\x73\x63\x6F\x72\x65\x50\x32","\x63\x6C\x69\x63\x6B","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];var p1=document[_0x1c39[1]](_0x1c39[0]);var p2=document[_0x1c39[1]](_0x1c39[2]);var reset=document[_0x1c39[1]](_0x1c39[3]);var resultadop1=0;var resultadop2=0;var p1resultado=document[_0x1c39[1]](_0x1c39[4]);var p2resultado=document[_0x1c39[1]](_0x1c39[5]);var gameOver=false;var winningScore=5;p1[_0x1c39[8]](_0x1c39[6],function(){if(!gameOver){resultadop1++;if(resultadop1=== winningScore){gameOver= true};p1resultado[_0x1c39[7]]= resultadop1}});p2[_0x1c39[8]](_0x1c39[6],function(){if(!gameOver){resultadop2++;if(resultadop2=== winningScore){gameOver= true};p2resultado[_0x1c39[7]]= resultadop2}});reset[_0x1c39[8]](_0x1c39[6],function(){if(gameOver== true|| gameOver== false){p1resultado[_0x1c39[7]]= 0;p2resultado[_0x1c39[7]]= 0;gameOver= false;resultadop1= 0;resultadop2= 0}})