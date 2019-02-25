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
    
    //public int cPartida;
    /**
     * Web service operation
     */
    @WebMethod(operationName = "iniciarJoc")
    public Boolean iniciarJoc(@WebParam(name = "codiPartida") int codiPartida) {
        //this.cPartida=codiPartida;
        al.add(codiPartida);
        System.out.println("Codigo de partida" + codiPartida);
        return true;
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "acabarJoc")
    public Boolean acabarJoc(@WebParam(name = "codiPartida") int codiPartida) {
        
        al.remove((Integer)codiPartida);
        
        return true;
    }
    
    
    /**
     * Web service operation
     */
    @WebMethod(operationName = "moureJugador")
    public String moureJugador(@WebParam(name = "codiPartida") int codiPartida, @WebParam(name = "aposta") boolean aposta, @WebParam(name = "quantitat") int quantitat) {
        boolean ans = al.contains((Integer)codiPartida);
            if(ans){
                if(aposta){
                    return "Has apostat " + quantitat + " €";
                }else return "no vols apostar";
            }else return "no es troba codi partida";
    }
    
  
 @WebMethod(operationName = "mostrarCartes")
    public String mostrarCartes(@WebParam(name = "codiPartida") int codiPartida) {
        boolean ans = al.contains((Integer)codiPartida);
        
        if(ans){
        
        ArrayList<Carta> myBaraja = new ArrayList<Carta>();
        String numero[] = { "As", "Dos", "Tres", "Cuatro", "Cinco", "Seis", 
         "Siete", "Ocho", "Nueve", "Diez", "Jota", "Qüina", "Rey" };
      String palos[] = { "Corazones", "Diamantes", "Tréboles", "Espadas" };
      
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
        
        
        //Carta Carta[]= {new Carta("1","Trebol"),new Carta("2","Picas"),new Carta("3","Rombos")};
        
        return str;
        
        }else return "No ha puesto un codigo valido";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "obtenirCarta")
    public String obtenirCarta(@WebParam(name = "codiPartida") int codiPartida) {
        
        return null;
    }
}
