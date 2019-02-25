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
public class Carta
 
 { // Abre clase Carta

 public String cara;
 public String palo;
 public Carta( String caraCarta, String paloCarta)
 {   // Abre constructor
 cara = caraCarta;
 palo = paloCarta;

 }   // Cierra constructor

 public String toString()
 {   // Abre metodo toString
 return cara + " de " + palo;
 }   // Cierra metodo toString
 } // Cierra clase Carta