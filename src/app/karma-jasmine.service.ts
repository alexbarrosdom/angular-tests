import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a:number, b:number): number{
    return a - b;
  }

  multiplicar(a:number, b:number): number{
    return a * b;
  }

  dividir(a:number, b:number): number{
    return a / b;
  }

  parImpar(a:number): boolean{
    if(a % 2 == 0){
        return(true);
    }else{
        return(false);
    }
  }

 esPalindromo(texto: string): boolean{
  let textoReverso = texto.split("").reverse().join("");
   if(texto == textoReverso){
    return true;
   }else{
    return false;
   }
  }

   factorial(a: number) : number {
    if (a == 0) { 
      return 1}
    else{
       return a * this.factorial(a - 1)
    }    
}

}
