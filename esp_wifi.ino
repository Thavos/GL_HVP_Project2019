#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

WiFiClient client;

void setup() {
  Serial.begin(115200);
  Serial.println();

  WiFi.begin("GL-Visitors");
 
  Serial.print("Connecting to ");
  Serial.print(WiFi.SSID());

  while(WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }

  

  Serial.println();

  Serial.print("Connected to ");
  Serial.println(WiFi.SSID());
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());

  


  
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
 
    HTTPClient http;
 
    http.begin("https://gl-hvp-project2019.herokuapp.com/get");  //Specify request destination
    //http.addHeader("Content-Type", "text/plain");

    int httpCode = http.GET();                                                                
    Serial.println(httpCode);
    
    //if (httpCode > 0) { //Check the returning code
 
    String payload = http.getString();   
    Serial.println(payload);                   

   
   http.end();
  }
   
  
 
delay(30000);
}
