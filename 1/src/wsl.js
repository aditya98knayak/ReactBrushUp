const xml2js = require("xml2js");
const xml1 = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<wsdl:definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
                  xmlns:tns="http://www.cleverbuilder.com/BookService/"
                  xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
                  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                  name="BookService"
                  targetNamespace="http://www.cleverbuilder.com/BookService/">
  <wsdl:documentation>Definition for a web service called BookService,
    which can be used to add or retrieve books from a collection.
  </wsdl:documentation>
  <wsdl:types>
    <xsd:schema targetNamespace="http://www.cleverbuilder.com/BookService/">
      <xsd:element name="Book">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ID" type="xsd:string" minOccurs="0"/>
            <xsd:element name="Title" type="xsd:string"/>
            <xsd:element name="Author" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Books">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element ref="tns:Book" minOccurs="0" maxOccurs="unbounded"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>

      <xsd:element name="GetBook">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ID" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="GetBookResponse">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element ref="tns:Book" minOccurs="0" maxOccurs="1"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>

      <xsd:element name="AddBook">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element ref="tns:Book" minOccurs="1" maxOccurs="1"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AddBookResponse">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element ref="tns:Book" minOccurs="0" maxOccurs="1"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="GetAllBooks">
        <xsd:complexType/>
      </xsd:element>
      <xsd:element name="GetAllBooksResponse">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element ref="tns:Book" minOccurs="0" maxOccurs="unbounded"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:schema>
  </wsdl:types>


  <wsdl:message name="GetBookRequest">
    <wsdl:part element="tns:GetBook" name="parameters"/>
  </wsdl:message>
  <wsdl:message name="GetBookResponse">
    <wsdl:part element="tns:GetBookResponse" name="parameters"/>
  </wsdl:message>
  <wsdl:message name="AddBookRequest">
    <wsdl:part name="parameters" element="tns:AddBook"></wsdl:part>
  </wsdl:message>
  <wsdl:message name="AddBookResponse">
    <wsdl:part name="parameters" element="tns:AddBookResponse"></wsdl:part>
  </wsdl:message>
  <wsdl:message name="GetAllBooksRequest">
    <wsdl:part name="parameters" element="tns:GetAllBooks"></wsdl:part>
  </wsdl:message>
  <wsdl:message name="GetAllBooksResponse">
    <wsdl:part name="parameters" element="tns:GetAllBooksResponse"></wsdl:part>
  </wsdl:message>
  <wsdl:portType name="BookService">
    <wsdl:operation name="GetBook">
      <wsdl:input message="tns:GetBookRequest"/>
      <wsdl:output message="tns:GetBookResponse"/>
    </wsdl:operation>
    <wsdl:operation name="AddBook">
      <wsdl:input message="tns:AddBookRequest"></wsdl:input>
      <wsdl:output message="tns:AddBookResponse"></wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="GetAllBooks">
      <wsdl:input message="tns:GetAllBooksRequest"></wsdl:input>
      <wsdl:output message="tns:GetAllBooksResponse"></wsdl:output>
    </wsdl:operation>
  </wsdl:portType>
  <wsdl:binding name="BookServiceSOAP" type="tns:BookService">
    <soap:binding style="document"
                  transport="http://schemas.xmlsoap.org/soap/http"/>
    <wsdl:operation name="GetBook">
      <soap:operation
              soapAction="http://www.cleverbuilder.com/BookService/GetBook"/>
      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="AddBook">
      <soap:operation
              soapAction="http://www.cleverbuilder.com/BookService/AddBook"/>
      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="GetAllBooks">
      <soap:operation
              soapAction="http://www.cleverbuilder.com/BookService/GetAllBooks"/>
      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="BookService">
    <wsdl:port binding="tns:BookServiceSOAP" name="BookServiceSOAP">
      <soap:address location="http://www.example.org/BookService"/>
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>`

const xml2 = `<definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tns="http://tempuri.org/" xmlns:s="http://www.w3.org/2001/XMLSchema" targetNamespace="http://tempuri.org/" xmlns="http://schemas.xmlsoap.org/wsdl/">
  <message name="GetMessageRequest">
    <part name="message" type="s:string"/>
  </message>
  <message name="GetMessageResponse">
    <part name="message" type="s:string"/>
  </message>
  <portType name="MessageServicePortType">
    <operation name="GetMessage">
      <input message="tns:GetMessageRequest"/>
      <output message="tns:GetMessageResponse"/>
    </operation>
  </portType>
  <binding name="MessageServiceBinding" type="tns:MessageServicePortType">
    <soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>
    <operation name="GetMessage">
      <soap:operation soapAction="http://tempuri.org/GetMessage"/>
      <input>
        <soap:body use="literal"/>
      </input>
      <output>
        <soap:body use="literal"/>
      </output>
    </operation>
  </binding>
  <service name="MessageService">
    <port name="MessageServicePort" binding="tns:MessageServiceBinding">
      <soap:address location="http://localhost:8080/MessageService"/>
    </port>
  </service>
</definitions>`;

const xml3 = `<wsdl:definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:tns="http://tempuri.org/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" targetNamespace="http://tempuri.org/">
<wsdl:types>
<s:schema elementFormDefault="qualified" targetNamespace="http://tempuri.org/">
<s:element name="Add">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="intA" type="s:int"/>
<s:element minOccurs="1" maxOccurs="1" name="intB" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="AddResponse">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="AddResult" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="Subtract">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="intA" type="s:int"/>
<s:element minOccurs="1" maxOccurs="1" name="intB" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="SubtractResponse">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="SubtractResult" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="Multiply">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="intA" type="s:int"/>
<s:element minOccurs="1" maxOccurs="1" name="intB" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="MultiplyResponse">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="MultiplyResult" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="Divide">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="intA" type="s:int"/>
<s:element minOccurs="1" maxOccurs="1" name="intB" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
<s:element name="DivideResponse">
<s:complexType>
<s:sequence>
<s:element minOccurs="1" maxOccurs="1" name="DivideResult" type="s:int"/>
</s:sequence>
</s:complexType>
</s:element>
</s:schema>
</wsdl:types>
<wsdl:message name="AddSoapIn">
<wsdl:part name="parameters" element="tns:Add"/>
</wsdl:message>
<wsdl:message name="AddSoapOut">
<wsdl:part name="parameters" element="tns:AddResponse"/>
</wsdl:message>
<wsdl:message name="SubtractSoapIn">
<wsdl:part name="parameters" element="tns:Subtract"/>
</wsdl:message>
<wsdl:message name="SubtractSoapOut">
<wsdl:part name="parameters" element="tns:SubtractResponse"/>
</wsdl:message>
<wsdl:message name="MultiplySoapIn">
<wsdl:part name="parameters" element="tns:Multiply"/>
</wsdl:message>
<wsdl:message name="MultiplySoapOut">
<wsdl:part name="parameters" element="tns:MultiplyResponse"/>
</wsdl:message>
<wsdl:message name="DivideSoapIn">
<wsdl:part name="parameters" element="tns:Divide"/>
</wsdl:message>
<wsdl:message name="DivideSoapOut">
<wsdl:part name="parameters" element="tns:DivideResponse"/>
</wsdl:message>
<wsdl:portType name="CalculatorSoap">
<wsdl:operation name="Add">
<wsdl:documentation xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">Adds two integers. This is a test WebService. ©DNE Online</wsdl:documentation>
<wsdl:input message="tns:AddSoapIn"/>
<wsdl:output message="tns:AddSoapOut"/>
</wsdl:operation>
<wsdl:operation name="Subtract">
<wsdl:input message="tns:SubtractSoapIn"/>
<wsdl:output message="tns:SubtractSoapOut"/>
</wsdl:operation>
<wsdl:operation name="Multiply">
<wsdl:input message="tns:MultiplySoapIn"/>
<wsdl:output message="tns:MultiplySoapOut"/>
</wsdl:operation>
<wsdl:operation name="Divide">
<wsdl:input message="tns:DivideSoapIn"/>
<wsdl:output message="tns:DivideSoapOut"/>
</wsdl:operation>
</wsdl:portType>
<wsdl:binding name="CalculatorSoap" type="tns:CalculatorSoap">
<soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>
<wsdl:operation name="Add">
<soap:operation soapAction="http://tempuri.org/Add" style="document"/>
<wsdl:input>
<soap:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap:body use="literal"/>
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Subtract">
<soap:operation soapAction="http://tempuri.org/Subtract" style="document"/>
<wsdl:input>
<soap:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap:body use="literal"/>
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Multiply">
<soap:operation soapAction="http://tempuri.org/Multiply" style="document"/>
<wsdl:input>
<soap:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap:body use="literal"/>
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Divide">
<soap:operation soapAction="http://tempuri.org/Divide" style="document"/>
<wsdl:input>
<soap:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap:body use="literal"/>
</wsdl:output>
</wsdl:operation>
</wsdl:binding>
<wsdl:binding name="CalculatorSoap12" type="tns:CalculatorSoap">
<soap12:binding transport="http://schemas.xmlsoap.org/soap/http"/>
<wsdl:operation name="Add">
<soap12:operation soapAction="http://tempuri.org/Add" style="document"/>
<wsdl:input>
<soap12:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap12:body use="literal"/>
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Subtract">
<soap12:operation soapAction="http://tempuri.org/Subtract" style="document"/>
<wsdl:input>
<soap12:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap12:body use="literal"/>
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Multiply">
<soap12:operation soapAction="http://tempuri.org/Multiply" style="document"/>
<wsdl:input>
<soap12:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap12:body use="literal"/>
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Divide">
<soap12:operation soapAction="http://tempuri.org/Divide" style="document"/>
<wsdl:input>
<soap12:body use="literal"/>
</wsdl:input>
<wsdl:output>
<soap12:body use="literal"/>
</wsdl:output>
</wsdl:operation>
</wsdl:binding>
<wsdl:service name="Calculator">
<wsdl:port name="CalculatorSoap" binding="tns:CalculatorSoap">
<soap:address location="http://www.dneonline.com/calculator.asmx"/>
</wsdl:port>
<wsdl:port name="CalculatorSoap12" binding="tns:CalculatorSoap12">
<soap12:address location="http://www.dneonline.com/calculator.asmx"/>
</wsdl:port>
</wsdl:service>
</wsdl:definitions>`
// try {
// xml2js.parseString(xml2, (err, result) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(result)
//         const operations = result.definitions.portType[0].operation;
//         operations.forEach(operation => {
//             console.log(operation.$.name);
//             const inputMessage = result.definitions.message.find(message => message.$.name === operation.input[0].$.message.split(':')[1]);
//             console.log(inputMessage.part[0].$.name);
//         });
//     }
// });

//     xml2js.parseString(xml2, (err, result) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const requestTemplate = {
//                 "soap:Envelope": {
//                     "$": {
//                         "xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
//                         "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
//                         "xmlns:xsd": "http://www.w3.org/2001/XMLSchema"
//                     },
//                     "soap:Body": [
//                         {
//                             "GetMessage": [
//                                 {
//                                     "message": "message"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             };

//             const builder = new xml2js.Builder();
//             const xmlRequest = builder.buildObject(requestTemplate);
//             console.log(xmlRequest);
//         }
//     });
// }
// catch (err) {
//     console.log(err)
// }

// xml2js.parseString(xml1, (err, result) => {
//     if (err) throw err;

//     const bindings = result.definitions.binding;
//     const operations = bindings[0].operation.map(operation => operation.$.name);
//     console.log('SOAP operations:', operations);

//     const operationName = operations[0];  // choose the first operation
//     const operation = bindings[0].operation.find(operation => operation.$.name === operationName);
//     const xmlTemplate = operation.operation[0].$.soapAction;
//     console.log(`XML template for ${operationName}:`, xmlTemplate);
// });

const soap = require('soap');
const wsdlUrl = 'http://www.dneonline.com/calculator.asmx?WSDL';
// soap.createClient(wsdlUrl, (err, client) => {
//     if (err) throw err;

//     // Get the list of SOAP operations
//     // console.log(client.wsdl.definitions.bindings["CalculatorSoap"].methods)
//     // const operations = client.wsdl.definitions.bindings[0].operations;
//     // console.log('SOAP operations:', operations);

//     // Get the XML template for a specific operation
//     // const operationName = 'someOperationName';
//     // const xmlTemplate = client.getXml(operationName);
//     // console.log(`XML template for ${operationName}:`, xmlTemplate);


//     const services = client.wsdl.definitions.services;
//     // console.log("🚀 ~ file: wsl.js:439 ~ soap.createClient ~ services", Object.keys(services))
//     const operationNames = Object.keys(services).reduce((acc, serviceKey) => {
//         console.log(acc, serviceKey)
//         const service = services[serviceKey];
//         return acc.concat(Object.keys(service.ports[0].methods));
//     }, []);
//     // console.log("🚀 ~ file: wsl.js:443 ~ operationNames ~ operationNames", operationNames)
// });