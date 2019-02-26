/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WebServices;

/**
 *
 * @author ferran
 */
public class TirarCarta {
      // Abre clase Carta

 public String cara;
 public String palo;
 public TirarCarta( String caraTirarCarta, String paloTirarCarta)
 {   // Abre constructor
 cara = caraTirarCarta;
 palo = paloTirarCarta;

 }   // Cierra constructor

 public String toString()
 {   // Abre metodo toString
 return cara + " de " + palo;
 }   // Cierra metodo toString
 } // Cierra clase Carta
    

