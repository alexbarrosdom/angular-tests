import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it('debería restar dos números correctamente',() => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it('debería restar números negativos correctamente',() => {
    const resultado = service.restar(-2, -3);
    expect(resultado).toBe(1);
  });

  it('debería restar un número positivo y un número negativo correctamente',() => {
    const resultado = service.restar(2, -3);
    expect(resultado).toBe(5);
  });

  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it('debería multiplicar números negativos correctamente', () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(10, -5);
    expect(resultado).toBe(-50);
  });

  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(6, 3);
    expect(resultado).toBe(2);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-15, -3);
    expect(resultado).toBe(5);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);
  });

  it('debería saber determinar si un número positivo es par', () => {
    const resultado = service.parImpar(2);
    expect (resultado).toBe(true);
  });

  it('debería saber determinar si un número negativo es par', () => {
    const resultado = service.parImpar(-1);
    expect (resultado).toBe(false);
  });

  it('debería saber determinar si una palabra es un palíndromo', () => {
    const resultado = service.esPalindromo("radar");
    expect(resultado).toBe(true);
  });

  it('debería saber determinar si una palabra no es un palíndromo', () => {
    const resultado = service.esPalindromo("buque");
    expect(resultado).toBe(false);
  });

  it('debería calcular el factorial de un número correctamente', () => {
    const resultado = service.factorial(3);
    expect(resultado).toBe(6);
  });

  it('debería determinar qué número es mayor', () => {
    const resultado = service.maximo(9,108);
    expect(resultado).toBe(108);
  });

  it('debería determinar que un número positivo es mayor que uno negativo', () => {
    const resultado = service.maximo(-3,2);
    expect(resultado).toBe(2);
  });

  it('debería transformar una palabra en minúsculas a mayúsculas', () => {
    const resultado = service.mayus("dinosaurio");
    expect(resultado).toBe("DINOSAURIO");
  });

  it('debería transformar una palabra con letras minúsculas y mayúsculas totalmente a mayúsculas', () => {
    const resultado = service.mayus("DiNoSaUrIo");
    expect(resultado).toBe("DINOSAURIO");
  });

  it('debería determinar si un número es primo', () => {
    const resultado = service.esPrimo(7);
    expect(resultado).toBe(true);
  });

  it('debería determinar si un número no es primo', () => {
    const resultado = service.esPrimo(10);
    expect(resultado).toBe(false);
  });

  it('debería decir que un número positivo lo es', () => {
    const resultado = service.esPositivo(22);
    expect(resultado).toBe(true);
  });

  it('debería decir el número de elementos de un array', () => {
    const resultado = service.numeroElementos(['ola','que','tal']);
    expect(resultado).toBe(3);
  });

  it('debería decir que una subcadena está en el array', () => {
    const resultado = service.subString(['a','miña','casa'], 'casa');
    expect(resultado).toBe(true);
  });

  it('debería decir que una subcadena no está en el array', () => {
    const resultado = service.subString(['a','miña','casa'], 'lagarto');
    expect(resultado).toBe(false);
  });

  it('debería calcular la media correctamente',() => {
    const resultado = service.mediaNumeros([1,2,3,4,5]);
    expect(resultado).toBe(3);
  });

  it('debería convertir una cadena a un array correctamente',() => {
    const resultado = service.convertirAArray('cuervo');
    expect(resultado).toEqual(['c','u','e','r','v','o']);
  });

  it('debería sumar los dígitos de un número correctamente',() => {
    const resultado = service.sumaDigitos(108);
    expect(resultado).toBe(9);
  });

  it('debería verificar si una cadena es anagrama de otra',() =>{
    const resultado = service.esAnagrama('Cara','arca');
    expect(resultado).toBe(true);
  });

  it('debería determinar que una cadena no es anagrama de otra',() =>{
    const resultado = service.esAnagrama('lagarto','murciélago');
    expect(resultado).toBe(true);
  });

  it('debería calcular correctamente el área de un polígono regular',() =>{
    const resultado = service.areaPoligonoReg(5,6,6);
    expect(resultado).toBe(90);
  });

  



 







  





});
