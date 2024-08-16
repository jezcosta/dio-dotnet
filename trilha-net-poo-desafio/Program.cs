using DesafioPOO.Models;

Smartphone nokia = new Nokia(numero: "1234567", modelo: "nokia1", imei: "1234356547", memoria: 2048);
nokia.Ligar();
nokia.InstalarAplicativo("Whatsapp");


Smartphone iphone = new Iphone(numero: "7654321", modelo: "iphone1", imei: "7464516456", memoria: 4096);
iphone.Ligar();
iphone.InstalarAplicativo("Whatsapp");