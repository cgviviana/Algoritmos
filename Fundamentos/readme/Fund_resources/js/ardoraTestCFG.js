//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=1;
var successes=0; successesMax=15; attempts=0; attemptsMax=2;
var score=0; scoreMax=15; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Eres un Crack!"; messageTime=""; messageError="¡Puedes mejorar!"; messageErrorG="¡Puedes mejorar!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RnVuZA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Señala las 2  respuestas correctas ¿Cómo se codifica la información al digitalizarla ?","La mínima unidad de información es el","Sistema de numeración representados por el 0 y 1 es el","¿Cuáles son las 5 principales habilidades y/o capacidades para la resolución de problemas?","1.Delimitar el problema, 2. Analizar las alternativas de solución, 3. Diseñar el algoritmo, 4. Codificar, 5.Compilar o traducir el código escrito en un lenguaje de programación, 6. Depurar o identificar y corregir errores de programación, son","Escribir una secuencia de instrucciones en lenguaje que entienda la computadora, se relaciona con el concepto de","Para entender el problema de la vida real  y codificarlo es necesario","Según la definición de algorítmo, las 3 características fundamentales es que son:","Los algortímos según su naturaleza  de medición pueden ser (2):","La ciencia de las leyes formas y principios del pensamiento razón y conocimientoto y su relación con la verdad derivando la forma en la que el ser humano  actúa según su raciocinio se define bajo el nombre de","Entrada, Proceso y Salida son fases en que se da el (2)","Las 2 formas básicas en que se representa un algorítmo son","Los 3 tipos básicos de datos de los algorítmos son","Indique, cuáles frases (5) son correctas relacionado con los tipos de datos","Indique las 2 respuestas que correspondan a los tipos de estructuras de algorítmos"];
var answers1=["MVNpc3RlbWEgYmluYXJpbw==","MUJpdCB5IGJpdGVz","MEFsZ29yw610bW9z","MFZhcmlhYmxlcw==","MERGRA==","MFNpbWJvbG9nw61h","MFBzZXVkb2PDs2RpZ28="];
var answers2=["MUJpdA==","MEJ5dGU=","MEtpbG9ieXRl","MFRlcmFieXRl"];
var answers3=["MVNpc3RlbWEgQmluYXJpbw==","MFNpc3RlbWEgQWxmYW51bcOpcmljbw==","MFNpc3RlbWEgQWxnb3LDrXRtaWNv","MFNpc3RlbWEgUmVhbA=="];
var answers4=["MURvbWluaW8gZGUgbGEgY29tcGxlamlkYWQ=","MVRvbGVyYW5jaWEgYSBhbWJpZ8O8ZWRhZA==","MUNvbXVuaWNhY2nDs24=","MVRyYWJham8gY29sYWJvcmF0aXZv","MUNvbXByZW5zacOzbiBkZWwgZW50b3Jubw==","MExpZGVyYXpnbw==","MERvbWluaW8gZGUgbGFzIHRlY25vbG9nw61hcw==","MEdlc3Rpw7NuIGRlbCB0aWVtcG8=","MEFzZXJ0aXZpZGFk","MEVzY3VjaGEgYWN0aXZh"];
var answers5=["MUxvcyBwYXNvcyBwYXJhIGNyZWFyIGVsIGFsZ29yw610bW8=","MExhcyBjbGFzZXMgZGUgdmFyaWFibGVz","MExvcyB0aXBvcyBkZSBkYXRvcw==","MExvcyB0aXBvcyBkZSBhbGdvcsOtdG1vcw=="];
var answers6=["MVByb2dyYW1hciB1biBhbGdvcsOtdG1v","MENvbXBpbGFyIHVuIGFsZ29yw610bW8=","MFRhYnVsYXIgdW4gYWxnb3LDrXRtbw==","MERlcHVyYXIgdW4gYWxnb3LDrXRtbw==","MEVzdHJ1Y3R1cmFyIHVuIGFsZ29yw610bW8=","MERpZ2l0YWxpemFyIHVuIGFsZ29yw610bW8="];
var answers7=["MUV4cHJlc2FyIGxvcyBjb25jZXB0b3MgZGVsIHByb2JsZW1hIGVuIGRhdG9z","MENvbm9jZXIgbGVuZ3VhamVzIGRlIHByb2dyYW1hY2nDs24=","MFNlciBleHBlcnRvIHByb2dyYW1hZG9y","MFRlbmVyIHRlY25vbG9nw61hIGRlIHB1bnRh"];
var answers8=["MU9yZ2FuaXphZG9z","MVByZWNpc29z","MUZpbml0b3M=","MEN1YWxpdGF0aXZvcw==","MEN1YW50aXRhdGl2b3M=","MFJlYWxlcw==","MEzDs2dpY29z"];
var answers9=["MUN1YWxpdGF0aXZvcw==","MUN1YW50aXRhdGl2b3M=","MFJlYWxlcw==","MENvbmNyZXRvcw==","MERpc2NyZXRvcw==","MEzDs2dpY29z"];
var answers10=["MUzDs2dpY2E=","MFByb2dyYW1hY2nDs24=","MEFsZ29yw610bWlh","MFBlbnNhbWllbnRvIENvbXB1dGFjaW9uYWw=","MENvbm9jaW1pZW50bw=="];
var answers11=["MVRyYXRhbWllbnRvIGRlIGxhIGluZm9ybWFjacOzbg==","MVByb2Nlc2FtaWVudG8gZGUgZGF0b3M=","MENpY2xvIGRlIHVuIHNpc3RlbWE=","MFByb2Nlc28gZGUgbGEgbMOzZ2ljYQ==","MEFyZ3VtZW50byBkZSB1biBhbGdvcsOtdG1v"];
var answers12=["MURpYWdyYW1hcyBkZSBmbHVqbw==","MVBzZXVkb2PDs2RpZ28=","MFZhcmlhYmxlcw==","MERhdG9z","MEVzdHJ1Y3R1cmFz"];
var answers13=["MU7Dum1lcmljb3M=","MUFsZmFudW3DqXJpY29z","MUzDs2dpY29z","MFJlYWxlcw==","MElycmVhbGVz","MERpc2NyZXRvcw==","MENvbmNyZXRvcw=="];
var answers14=["MSJQZXBlIiBlcyB1bmEgY2FkZW5hIGFsZmFudW3DqXJpY2E=","MTMsMTQxNiBlcyB1biBuw7ptZXJpY28gcmVhbA==","MVZlcmRhZGVybyBlcyBsw7NnaWNv","MS0yIGVzIHVuIG51bcOpcmljbyBlbnRlcm8=","MSJhIiBlcyB1biBjYXLDoWN0ZXIgYWxmYW51bcOpcmljbw==","MFZlcmRhZGVybyBlcyB1bmEgY2FkZW5h","MC0xMjAwIGVzIGNhcsOhY3RlciBhbGZhbnVtw6lyaWNv","MCJWaXZpYW5hIiBlcyB1biBsw7NnaWNv","MDEyMzQ1ICBlcyB1bmEgY2FkZW5hIGFsZmFudW3DqXJpY2E="];
var answers15=["MVNlY3VlbmNpYWw=","MURlIGNvbnRyb2wgKENvbmRpY2lvbmFsZXMgeSBidWNsZXMp","MEzDs2dpY2Fz","MEFsZ29yw610bWljYXM=","MFZhbGlkYWRhcw==","MEN1YWxpdGF0aXZhcw==","MFJlYWxlcw=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11,answers12,answers13,answers14,answers15];
var err=["","","","","","","","","","","","","","",""];
var ima=["","","","","","","","","","","","","","",""];
var mp4=["","","","","","","","","","","","","","",""];
var ogv=["","","","","","","","","","","","","","",""];
var alt=["","","","","","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Fund_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
