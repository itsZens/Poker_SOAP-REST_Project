const express = require('express');
const app=express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var partidas = [
];

var cartasTotales = 
[ 
    { "imagen" : "https://lh3.googleusercontent.com/DK6rGopKWXReag31v8BCz9MyzfaxO6l9tKy712UhH6k=w156-h227-p-no",
      "numero" : 1,
      "id" : 1,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/Ossd-fPNegYULAYEjPHwEHtH0TrUqEBwW90Aq8_i90o=w157-h227-p-no",
      "numero" : 2,
      "id" : 2,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/HNrKDIo6yQ2B4otxMXA9By3ZIBwAnsTqyq02erDwxOg=w156-h227-p-no",
      "numero" : 3,
      "id" : 3,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/xbHgYuXmNIOQlFdVsTZ4qsOaObff_dPqwqCONP_mmvk=w156-h227-p-no",
      "numero" : 4,
      "id" : 4,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/h-d4p7qY5tDRCEAMBvlGyXWYrBTIuMHhqtidUck5u78=w156-h227-p-no",
      "numero" : 5,
      "id" : 5,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/8yQAYQziTtmCAcbQoN1Os8NsWhVfEHzgSfBf2gJnYfs=w156-h227-p-no",
      "numero" : 6,
      "id" : 6,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/RozU1nys5rIDOIok6SV6kapM-3Cc_chnuXALuMEdE5g=w156-h227-p-no",
      "numero" : 7,
      "id" : 7,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/gRwWfLj-qr_L8dtrfIfFsOsyHdq25oxWL3thYF1z5MY=w156-h227-p-no",
      "numero" : 8,
      "id" : 8,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/olSfF2FnDOTuI7cNRGNydub0zyFBF_SM9SeM7HwMw5M=w157-h227-p-no",
      "numero" : 9,
      "id" : 9,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/ueJVbwUmAC6s18_DPDI3BnzKKcHFUCEbZKuhekI7LZk=w156-h227-p-no",
      "numero" : 10,
      "id" : 10,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/h1BR0V-xnaUiPC72P9ve3h9HX9SUumbanReXXCreBwQ=w156-h227-p-no",
      "numero" : 11,
      "id" : 11,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/bLf4xv1dbeW9aG5f6UYBwuhTVokEIn6PugCQR5acUcU=w157-h227-p-no",
      "numero" : 12,
      "id" : 12,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/Pwr-ow94cJ92v05TO1F6u-5_GX9sAAt26Rvv62YRAUA=w148-h215-p-no",
      "numero" : 13,
      "id" : 13,
      "palo" : "trebol"
    },
    { "imagen" : "https://lh3.googleusercontent.com/LXwdoYzoP_ZyuEtKxDSLRtK6JLdQYCOgD74SqlHw7QU=w156-h227-p-no",
      "numero" : 1,
      "id" : 14,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh3.googleusercontent.com/fggW1Wo7cxBMyaoykhjcj4inE0eI0qTxwKpWznPxQIM=w156-h227-p-no",
      "numero" : 2,
      "id" : 15,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh3.googleusercontent.com/7nnWNUTaW9wQ78MPGhQs1-HWNfRtofdhnJWEznFTdTw=w156-h227-p-no",
      "numero" : 3,
      "id" : 16,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh6.googleusercontent.com/-eydz7tbeJPo/TXC0GSEUd6I/AAAAAAAAGDY/C-cMb32kTBA/w500-h726-no/4_of_diamonds.jpg",
      "numero" : 4,
      "id" : 17,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh6.googleusercontent.com/-_N1sd5hiDjE/TXC0GtqXgbI/AAAAAAAAGDs/QTEn1-SIeNQ/w500-h726-no/5_of_diamonds.jpg",
      "numero" : 5,
      "id" : 18,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh4.googleusercontent.com/-VGjMufCoKsA/TXC0GycloYI/AAAAAAAAGDo/0BWX1YckZs4/w500-h726-no/6_of_diamonds.jpg",
      "numero" : 6,
      "id" : 19,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh5.googleusercontent.com/7nJ3qumoKE3GxZWvzlt-zn2cqmlj4zdq7T4g-CHdB-U=w500-h726",
      "numero" : 7,
      "id" : 20,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh6.googleusercontent.com/-AZFOGwAjMc0/TXC0HmPhusI/AAAAAAAAGDM/eELXjLrBwPc/w500-h726-no/8_of_diamonds.jpg",
      "numero" : 8,
      "id" : 21,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh6.googleusercontent.com/-w0yapAcWY00/TXC0Hy2v6MI/AAAAAAAAGBQ/6LXFpR8F3i4/w500-h726-no/9_of_diamonds.jpg",
      "numero" : 9,
      "id" : 22,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh4.googleusercontent.com/-pdoSjGwP6Xs/TXC0IIN2VzI/AAAAAAAAGBU/mpsDd0pthME/w500-h726-no/10_of_diamonds.jpg",
      "numero" : 10,
      "id" : 23,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh3.googleusercontent.com/dAvFfxYglPKMQMOSLIrDyd-wLipEiqB_J385XEyf7L0=w148-h215-p-no",
      "numero" : 11,
      "id" : 24,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh3.googleusercontent.com/kLAs9u9OZ3TT1snW7QYdHCQp-Tq_kh0Hz7aL49VavCM=w148-h215-p-no",
      "numero" : 12,
      "id" : 25,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh3.googleusercontent.com/yf8KLTgeC0DXXYHw_fakZTHiOM1_gSXf0p2sX395NN8=w149-h215-p-no",
      "numero" : 13,
      "id" : 26,
      "palo" : "diamante"
    },
    { "imagen" : "https://lh3.googleusercontent.com/K6ZApDeNd3TCx6SnR7ovHqWtVVqnYffg6QVrfgUqocc=w148-h214-p-no",
      "numero" : 1,
      "id" : 27,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/b_TTtM39S1fAmqm1v_zEzy6zSZe5bHy5fncQlHwqMa8=w147-h214-p-no",
      "numero" : 2,
      "id" : 28,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/ieTlLxE9bROyh8ajZS0nUuQIrcI9KTyGPDNYS8msf8s=w147-h214-p-no",
      "numero" : 3,
      "id" : 29,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/unyClh6lclgoQB26iqZPjo5fm4Wr2FzIDBKtR05NYfg=w147-h214-p-no",
      "numero" : 4,
      "id" : 30,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/Ywx-_ZyzsKIyIXajo0DULPUZzeF9KhrFRTK29v16T9Q=w147-h214-p-no",
      "numero" : 5,
      "id" : 31,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/glYzOshDaDMweMNfF6nRJgio4mHzaeugrDq2HoX9bqM=w147-h214-p-no",
      "numero" : 6,
      "id" : 32,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/MSVr3jWBcmWLmehlNUyaZosjdDMqZH-xBfasZmUPjKs=w147-h214-p-no",
      "numero" : 7,
      "id" : 33,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/4qUl1Pbd0EbOR8K404MwAEnKsh8B3TuykH-Xjsc2E-8=w147-h214-p-no",
      "numero" : 8,
      "id" : 34,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/qBuRBEdWd73r-dZT6qFFh8cKshVTfF9CdohbMrNs0Fk=w148-h214-p-no",
      "numero" : 9,
      "id" : 35,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/jNrfHcA-HylTthHsqqMK-848u1h9Q8DVG6j_v0M1iFM=w147-h214-p-no",
      "numero" : 10,
      "id" : 36,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/fmIvbUfK-sWP8Jx3vFHdKS-R0o2b3dGHFjxesuHc1RM=w147-h214-p-no",
      "numero" : 11,
      "id" : 37,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/-mSsRtnxcyIu3DO2jLgkk7Ca6DCuY6c4ERD9Ldki2MY=w147-h214-p-no",
      "numero" : 12,
      "id" : 38,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/YUozILg2xS5DXg0FG5rRaJxFQsoyDpZ8SUAnsAJnScg=w147-h214-p-no",
      "numero" : 13,
      "id" : 39,
      "palo" : "corazon"
    },
    { "imagen" : "https://lh3.googleusercontent.com/OpfVPhBK5m8_QTZuZFDQLN_AhFQpi4hnsJWb4rhp5Vs=w146-h213-p-no",
      "numero" : 1,
      "id" : 40,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/VinsM9fzRLtabEi1uTTjpioBzChZrDoOeJjVHHXUdsw=w146-h213-p-no",
      "numero" : 2,
      "id" : 41,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/sl3VnI1EMnSWOMl4Gx2JMZCd3TCVqrxnhqsZORh_408=w146-h213-p-no",
      "numero" : 3,
      "id" : 42,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/0IzTto9jaTkob8Uh6taSYTZ4x6JmwtxrymHEniN0H2Y=w147-h213-p-no",
      "numero" : 4,
      "id" : 43,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/p-LZnF-Mu8ub7gGIAemvEJTHKKnN2oZECTNHAJY-Lfg=w147-h213-p-no",
      "numero" : 5,
      "id" : 44,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/dBGwxo7Dy-NCJioE1PrRSis3sB6X0Nnkhf1GMRBDmAY=w147-h213-p-no",
      "numero" : 6,
      "id" : 45,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/sDVCHB2f0QdGuCATNOaSKvzXdYF0TFMmoh53YNN0GvI=w146-h213-p-no",
      "numero" : 7,
      "id" : 46,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/8nxQMkJ40bbTubwXMLY4OIyXe6AcjlUbLTjfoR1tzR4=w146-h213-p-no",
      "numero" : 8,
      "id" : 47,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/3TfRrPMewHCCWer5PByddudMWaIi1fNry9Bnz6xpAJs=w146-h213-p-no",
      "numero" : 9,
      "id" : 48,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/-Ae12XqdUeKXGC10oC1h-QxtNxEs0jAZbbBpU-lVbHg=w146-h213-p-no",
      "numero" : 10,
      "id" : 49,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/89p-sFFjs54wA4GrB9PeUlrxGmmyd8wzP92iZhdHwo8=w146-h213-p-no",
      "numero" : 11,
      "id" : 50,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/NDv78qL1it4pzsSJHX_rjixWlkuBSSEYg3zsDC-skto=w147-h213-p-no",
      "numero" : 12,
      "id" : 51,
      "palo" : "pica"
    },
    { "imagen" : "https://lh3.googleusercontent.com/0rKfUC5ZgIzvHBH9ZAyZxv5xU5WoGpJDEBMeEk5wWgs=w147-h213-p-no",
      "numero" : 13,
      "id" : 52,
      "palo" : "pica"
    }
  ]

var CartasJugadors = [

];

function repartirCartas(){
    var p = [];
    var p1 = [];
    var p2 = [];
    for (var i = 0; i <= 10;) {
        k = Math.floor(Math.random() * cartasTotales.length);
        var numAlreadyIn = false;
        for (var j = 0; j < p.length; j++) {
            if (p[j] == k) {
                numAlreadyIn = true;
                break;
            } else {
                numAlreadyIn = false;
                
            }
        } 
        p.push(k);
        if (!numAlreadyIn) {
            if (i % 2 == 1) {
                p1.push(k);
            } else if (i % 2 == 0) {
                p2.push(k);
            }
            i++;
        }
    }
    return p1;
}

var baraja = repartirCartas();

app.get('/', (req, res)=>res.send('Buenas tardes.'));

app.post('/iniciarjoc/codiPartida', (req, res)=>{
  console.log('req.body.codi');
  var partida={codi: req.body.codi};
  partidas.push(partida);
  res.send("You have joined lobby "+ req.body.codi);
});

app.get('/obtenirCarta/codiPartida', (req, res)=>{
    res.send(baraja);

});

app.get('/mostrarCartes/codiPartida', (req, res)=>{
    var cartasMostrar = "";
    for (var i = 0; i < cartasTotales.length; i++){
        for(j=0;j<=5;j++){
            if(cartasTotales[i].id==baraja[j])
            cartasMostrar += `<img widht='20px' src=${JSON.stringify(cartasTotales[i].imagen)}/> `;
            //res.send(cartasTotales[i].palo);
        }
    }

    res.send(cartasMostrar);
});
app.put('/moureJugador/codiPartida/:aposta/:quantitat?', (req, res)=>{
  var apostar = parseInt(req.params.quantitat);
  var apostaBoolean = parseInt(req.params.aposta);
  if(apostaBoolean == 0){
    apostar = 0;
    res.send("no has apostado");
  }
  else if(apostaBoolean == 1){
      (apostar)?res.send("You have bet " + apostar):res.send("You must insert credits to bet");
  }else res.send("0 --> Not to bet || 1 --> To bet and insert the quantity you want to bet");
  
});
app.get('/obtenirCarta/codiPartida', (req, res)=>{
  res.send(baraja);

});
app.put('/tirarCarta/codiPartida/:carta', (req, res)=>{
  var borrado = parseInt(req.params.carta);
  console.log(borrado);
  for (var i = 0; i < baraja.length; i++) {
      if (baraja[i] == baraja[borrado-1]) {
          baraja.splice(i, 1);
        break;
      }
    }
    res.send(baraja);
    
});

app.listen(3000, ()=>console.log('Server started at localhost:3000'));

