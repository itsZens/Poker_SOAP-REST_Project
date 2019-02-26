/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WebServices;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import java.util.ArrayList; // import the ArrayList class

import java.util.*; 

/**
 *
 * @author ferran
 */


@WebService(serviceName = "NewWebService")
public class NewWebService {


   ArrayList<Integer> al = new ArrayList<Integer>();
   ArrayList<Carta> myBaraja = new ArrayList<Carta>();
   ArrayList<TirarCarta> Cards = new ArrayList<TirarCarta>();
    String numero[] = { "As", "Dos", "Tres", "Quatre", "Cinc", "Sis", 
         "Set", "Vuit", "Nou", "Deu", "J", "Q", "Rei" };
      String palos[] = { "Cors", "Diamants", "Trebols", "Espases" };
    
    
    /**
     * Web service operation
     */
    @WebMethod(operationName = "iniciarJoc")
    public String iniciarJoc(@WebParam(name = "codiPartida") int codiPartida) {
        
              
                al.add(codiPartida);
                return "Game code" + codiPartida;
              
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "acabarJoc")
    public String acabarJoc(@WebParam(name = "codiPartida") int codiPartida) {
        
            boolean ans = al.contains((Integer)codiPartida);
              if(ans){
                   al.remove((Integer)codiPartida);
                   return "Delete game "+codiPartida;

                  
              }else return "Error this game doasn't exist";
    }
    
    
    /**
     * Web service operation
     */
    @WebMethod(operationName = "moureJugador")
    public String moureJugador(@WebParam(name = "codiPartida") int codiPartida, @WebParam(name = "aposta") boolean aposta, @WebParam(name = "quantitat") int quantitat) {
        boolean ans = al.contains((Integer)codiPartida);
            if(ans){
                if(aposta){
                    return "You have bet " + quantitat + " $";
                }else return "You don't want to bet, you pass  turn";
            }else return "Error, these game doesn't exist!!";
    }
    
  
 @WebMethod(operationName = "mostrarCartes")
    public String mostrarCartes(@WebParam(name = "codiPartida") int codiPartida) {
        boolean ans = al.contains((Integer)codiPartida);
        
        if(ans){
               ArrayList<Carta> myBaraja = new ArrayList<Carta>();
              String numero[] = { "As", "Dos", "Tres", "Quatre", "Cinc", "Sis", 
         "Set", "Vuit", "Nou", "Deu", "J", "Q", "Rei" };
      String palos[] = { "Cors", "Diamants", "Trebols", "Espases" };
        
        
      
      
        for(int cuenta=0;cuenta<5;cuenta++  ){
            myBaraja.add(new Carta(numero[cuenta%13],palos[cuenta/2]));
            
        }
        Collections.shuffle(myBaraja);
        
        StringBuffer sb = new StringBuffer();
      
      for (Object s : myBaraja) {
         sb.append(s);
         sb.append(" ");
      }
      String str = sb.toString();
      System.out.println(str);
        
        
       
        
        return str;
        
        }else return "You didn't put the correct code";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "obtenirCarta")
    public String obtenirCarta(@WebParam(name = "codiPartida") int codiPartida) {
        
        boolean ans = al.contains((Integer)codiPartida);
        
        if(ans){
        
       
        
      
        for(int cuenta=0;cuenta<1;cuenta++  ){
            myBaraja.add(new Carta(numero[cuenta%13],palos[cuenta/2]));
            Cards.add(new TirarCarta(numero[cuenta%13],palos[cuenta/2]));
        }
        Collections.shuffle(myBaraja);
        
        StringBuffer sb = new StringBuffer();
      
      for (Object s : myBaraja) {
         sb.append(s);
         sb.append(" ");
      }
      String str = sb.toString();
      System.out.println(str);
        
        
       
        
        return str;
        
        }else return "You didn't put the correct code";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "tirarCarta")
    public String tirarCarta(@WebParam(name = "codiPartida") int codiPartida, @WebParam(name = "carta") String carta) {
         
         boolean ans = Cards.contains((String)carta);
          boolean ans1 = al.contains((Integer)codiPartida);
            if(ans || ans1){
        
                Cards.remove(carta);
        
                //TODO write your implementation code here:
                return "You have droped "+carta;
            }else return "The card or Code of game doesn't exist";
    }
}
