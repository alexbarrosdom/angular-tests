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
  
  maximo(a: number, b: number): number {
    if (a > b){
      return a;
    }else if (a == b){
      return null;
    }
    else{
      return b;
    }
  }

  mayus(palabra: string): string  {
    return (palabra.toUpperCase());
  }

  esPrimo(a: number): boolean{
    for(let i=2; i<a; i++){
        if (a % i == 0) {
            return false;
        }
    }
    return a >1;
}

esPositivo(a:number): boolean {
  if(a > 0){
    return true;
  }
  else{
    return false;
  }
}

numeroElementos(array: string[]): number {
return array.length;
}

subString(cadena:string[], subcadena:string): boolean {
  if(cadena.includes (subcadena)){
    return true;
  }
  else{
    return false;
  }
}


}


