"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[3233],{66195:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return c}});var n,r=t(87462),i=t(63366),m=(t(15007),t(64983)),l=t(91515),o=["components"],s={},d=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:s},u=l.Z;function c(e){var a=e.components,t=(0,i.Z)(e,o);return(0,m.mdx)(u,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"configure-services-as-web-apis"},"Configure services as web APIs"),(0,m.mdx)("p",null,"You can configure an Adobe Commerce, Magento Open Source, or third-party service as a web ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API"),"."),(0,m.mdx)("p",null,"To ",(0,m.mdx)("a",{parentName:"p",href:"#configure-a-web-api"},"configure a web API"),", you define ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," elements and attributes in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," XML configuration file for the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," for the service. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"etc/webapi.xsd")," file for your module specifies an XML schema file for validation. The default XML schema validation rules are stored in ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Webapi/etc/webapi.xsd")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},"vendor/magento/module-webapi/etc/webapi.xsd")," file."),(0,m.mdx)("p",null,"Your module can use the default ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xsd")," file or you can create a customized XML schema file for validation."),(0,m.mdx)("p",null,"Users can make REST or SOAP calls to access the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/web-api"},"web API"),"."),(0,m.mdx)("p",null,"To configure a web API, read these topics:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#configure-a-web-api"},"Configure a web API")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#service-interface-requirements"},"Service interface requirements")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#webapixml-configuration-options"},"webapi.xml configuration options")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#sample-webapixml-file"},"Sample webapi.xml file")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#webapixsd-xml-schema-file"},"webapi.xsd XML schema file")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#forcing-request-parameters"},"Forcing Request Parameters"))),(0,m.mdx)("h2",{id:"configure-a-web-api"},"Configure a web API"),(0,m.mdx)("p",null,"To configure a web API for a service, you define XML elements and attributes in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/<MODULE>/etc/webapi.xml")," file, where ",(0,m.mdx)("inlineCode",{parentName:"p"},"<MODULE> is the module name.")," For example, the web API for the Customer service is defined in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Customer/etc/webapi.xml")," configuration file."),(0,m.mdx)("h2",{id:"service-interface-requirements"},"Service interface requirements"),(0,m.mdx)("p",null,"After a service class is configured using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," file, the application dynamically makes the service method available using the web API. Because this is automatically generated, it is important that the service class be formatted a very specific way."),(0,m.mdx)("p",null,"This makes sense when you consider that while a service class possibly expects objects of a specific class type (such a save method) and possibly returns a result that is a class or array of classes, neither SOAP nor REST are guaranteed to have that class defined on the client end or even to have a concept similar to a ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," class. Because of this, the application uses reflection to automatically create these classes and sets data that you have submitted in JSON or HTTP array syntax onto an instance of the expected PHP class when calling the service method."),(0,m.mdx)("p",null,"Conversely, if an object is returned from one of these methods, the application automatically converts that PHP object into a JSON or SOAP object before sending it over the web API."),(0,m.mdx)("p",null,"To do this conversion, the application must know information about both the parameters the service method is expecting and the return type of the result the service method delivers. PHP 5.x does not allow for type-hinting for scalar parameters or for return types so in order to convert the array or JSON object to or from the appropriate class type, PHP relies on the PHP doc block. Specifically, the lines containing ",(0,m.mdx)("inlineCode",{parentName:"p"},"@param")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"@return")," must follow certain rules for the application to be able to correctly convert between types."),(0,m.mdx)("p",null,"For SOAP and REST to work correctly, the following rules must be followed by the service interface's doc block:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"All methods exposed by the web API must follow these rules")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"All methods on objects expected as parameters or returned must follow these rules")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Parameters must be defined in the doc block as"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"@param type $paramName"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Return type must be defined in the doc block as"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"@return type"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Valid scalar types include: ",(0,m.mdx)("inlineCode",{parentName:"p"},"mixed")," (or ",(0,m.mdx)("inlineCode",{parentName:"p"},"anyType"),"), ",(0,m.mdx)("inlineCode",{parentName:"p"},"bool")," (or ",(0,m.mdx)("inlineCode",{parentName:"p"},"boolean"),"), ",(0,m.mdx)("inlineCode",{parentName:"p"},"str")," (or ",(0,m.mdx)("inlineCode",{parentName:"p"},"string"),"), ",(0,m.mdx)("inlineCode",{parentName:"p"},"integer")," (or ",(0,m.mdx)("inlineCode",{parentName:"p"},"int"),"), ",(0,m.mdx)("inlineCode",{parentName:"p"},"float"),", and ",(0,m.mdx)("inlineCode",{parentName:"p"},"double"),".")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Valid object types include a fully qualified class name or a fully qualified interface name.")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Any parameters or return values of type array can be denoted by following any of the previous types by an empty set of square brackets ",(0,m.mdx)("inlineCode",{parentName:"p"},"[]")))),(0,m.mdx)("p",null,"Following are some examples of various types and what they would look like in the doc block:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"A parameter $types which can be an array of strings:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"@param string[] $types"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"A parameter $id which can be an integer:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"@param int $id"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"A parameter $customer which is an object of class ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Api\\Data\\CustomerInterface"),":"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"@param \\Magento\\Customer\\Api\\Data\\CustomerInterface $customer"),(0,m.mdx)("p",{parentName:"li"},"Note that even if the class ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Api\\Data\\CustomerInterface")," is in the same namespace (or a sub-namespace) of the current class or a use statement has exists at the top of the class, the fully qualified namespace must be used or the web API throws an exception.")))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"A return which is an array of objects of type ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Customer\\Api\\Data\\CustomerInterface"),":"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"@return \\Magento\\Customer\\Api\\Data\\CustomerInterface[]")))),(0,m.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"If a service method argument is called ",(0,m.mdx)("inlineCode",{parentName:"p"},"item"),", there will be a problem during SOAP processing. All item nodes are removed during SOAP request processing. This is done to unwrap array items that are wrapped by the SOAP server into an ",(0,m.mdx)("inlineCode",{parentName:"p"},"item")," element."),(0,m.mdx)("h2",{id:"webapixml-configuration-options"},"webapi.xml configuration options"),(0,m.mdx)("p",null,"To define web API components, set these attributes on these XML elements in the\n",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," configuration file, as follows:"),(0,m.mdx)("table",{style:{width:"100%"}},(0,m.mdx)("tr",{bgcolor:"lightgray"},(0,m.mdx)("th",null,"XML element"),(0,m.mdx)("th",null,"Description"),(0,m.mdx)("th",null,"Attributes")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<routes>")),(0,m.mdx)("td",null,"Required. Root element that defines the namespace and location of the XML schema file."),(0,m.mdx)("td",null,(0,m.mdx)("ul",null,(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"xmlns:xsi"),". Required. Defines the namespace for the XML schema instance."),(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"xsi:noNamespaceSchemaLocation"),". Required. Defines the path and file name of the XML schema file to use to validate the web API.")))),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<route>")),(0,m.mdx)("td",null,"Required. Child element of ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<routes>"),". Defines the HTTP route for the web API method."),(0,m.mdx)("td",null,(0,m.mdx)("ul",null,(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"method"),". Required. String. HTTP method. Valid values are GET, POST, PUT, and DELETE."),(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"url"),". Required. String. The URL to the resource. The string must begin with /V1 (or ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<integer>"),") to indicate the version number. You must prepend any template parameters with a colon. Example: /V1/products/:sku"),(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"secure"),". Optional. Boolean. Indicates that the route is accessible over only HTTPS. Any attempts to access this route over non-secure causes an exception."),(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"soapOperation"),". Optional. String. Specifies the SOAP operation name to use instead of the interface's method name. Use this element to create multiple operations for the same service contract.")))),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<service>")),(0,m.mdx)("td",null,"Required. Child element of ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<route>"),". Defines the implemented interface and the web API method name."),(0,m.mdx)("td",null,(0,m.mdx)("ul",null,(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"class"),". Required. String. Location and name of implemented interface."),(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"method"),". Required. String. Web API method name.")))),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<resources>")),(0,m.mdx)("td",null,"Required. Child element of ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<route>"),". Container for one or more resource definitions."),(0,m.mdx)("td",null,"None.")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<resource>")),(0,m.mdx)("td",null,"Required. Child element of ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<resources>"),". Defines a resource to which the caller must have access."),(0,m.mdx)("td",null,(0,m.mdx)("ul",null,(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"ref"),". Required. Referenced resource. Valid values are self, anonymous, or a resource, such as ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"Magento_Customer::group"),".",(0,m.mdx)("strong",null,"Note:")," The web API framework enables guest users to access resources that are configured with anonymous permission. Any user that the framework cannot authenticate through existing ",(0,m.mdx)("a",{href:"https://devdocs.magento.com/guides/v2.4/get-started/authentication/gs-authentication.html"},"authentication mechanisms")," is considered a guest user.")))),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<data>")),(0,m.mdx)("td",null,"Optional. Child element of ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<route>"),". Container for one or more parameter definitions."),(0,m.mdx)("td",null,"None.")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<parameter>")),(0,m.mdx)("td",null,"Required if ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<data>")," is specified. Child element of ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"<data>"),". Defines a parameter."),(0,m.mdx)("td",null,(0,m.mdx)("ul",null,(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"name"),". String. Parameter name."),(0,m.mdx)("li",null,(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"force"),". Boolean. ",(0,m.mdx)("a",{href:"#forced-parameters"},"Forcing Request Parameters")))))),(0,m.mdx)("h2",{id:"sample-webapixml-file"},"Sample webapi.xml file"),(0,m.mdx)("p",null,"This excerpt is from the ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," file that defines the Customer service web API:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n    <routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">\n    \x3c!-- Customer Group Service--\x3e\n    <route url="/V1/customerGroups/:id" method="GET">\n        <service class="Magento\\Customer\\Api\\GroupRepositoryInterface" method="getById"/>\n        <resources>\n            <resource ref="Magento_Customer::group"/>\n        </resources>\n    </route>\n...\n    <route url="/V1/customers/me/billingAddress" method="GET">\n        <service class="Magento\\Customer\\Api\\AccountManagementInterface" method="getDefaultBillingAddress"/>\n        <resources>\n            <resource ref="self"/>\n        </resources>\n        <data>\n            <parameter name="customerId" force="true">%customer_id%</parameter>\n        </data>\n    </route>\n</routes>\n')),(0,m.mdx)("p",null,"In this ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," example:"),(0,m.mdx)("table",{style:{width:"100%"}},(0,m.mdx)("tr",{bgcolor:"lightgray"},(0,m.mdx)("th",null,"Line"),(0,m.mdx)("th",null,"Defines")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,"2"),(0,m.mdx)("td",null,"The XML schema file that is used to validate the XML. The XML schema file is ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd'),".")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,"4"),(0,m.mdx)("td",null,"The HTTP method and web resource through which to access the route. The HTTP method is GET. The resource is ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"/V1/customerGroups/:id"),". Users must substitute a customer ID for the ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"id")," template parameter.")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,"5"),(0,m.mdx)("td",null,"The interface that the route implements and the name of the web API method. The route implements the ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"Magento\\Customer\\Api\\GroupRepositoryInterface")," interface. The web API method name is ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"getById"),".")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,"7"),(0,m.mdx)("td",null,"The resource to which the caller must have access. The caller must have access to ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"Magento_Customer::group")," resource.")),(0,m.mdx)("tr",null,(0,m.mdx)("td",null,"17"),(0,m.mdx)("td",null,"A required parameter. The ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"id")," parameter is required on GET calls to ",(0,m.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"/V1/customers/me/billingAddress"),"."))),(0,m.mdx)("h2",{id:"webapixsd-xml-schema-file"},"webapi.xsd XML schema file"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," file for your module must specify an XML schema file for validation. Your ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," file can specify the default or a customized XML schema file.\nThe default ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xsd")," XML schema file can be found in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Webapi/etc")," directory."),(0,m.mdx)("p",null,"The following table defines the ",(0,m.mdx)("inlineCode",{parentName:"p"},"service")," node attributes:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute name"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"class")),(0,m.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,m.mdx)("td",{parentName:"tr",align:null},"The responsible class for handling the API request.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"method")),(0,m.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,m.mdx)("td",{parentName:"tr",align:null},"The class' method which handles the execution of the API.")))),(0,m.mdx)("h2",{id:"forcing-request-parameters"},"Forcing request parameters"),(0,m.mdx)("p",null,"Parameters in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml"),' can be forced. This ensures that on specific routes, a specific value is\nalways used. For instance, in the example "/V1/customers/me/billingAddress" route above, the ',(0,m.mdx)("inlineCode",{parentName:"p"},"customerId"),"\nparameter is forced to match the ID of the currently logged in user.\nAdditional parameter overrides can be registered via ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," by adding new items to the\n",(0,m.mdx)("inlineCode",{parentName:"p"},"paramOverriders")," argument for ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Webapi\\Controller\\Rest\\ParamsOverrider"),". Parameter\noverriders must implement ",(0,m.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Webapi\\Rest\\Request\\ParamOverriderInterface"),". An\nexample excerpt from ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Webapi\\Controller\\Rest\\ParamsOverrider">\n    <arguments>\n        <argument name="paramOverriders" xsi:type="array">\n            <item name="%my_value%" xsi:type="object">VENDOR\\MODULE\\Controller\\Rest\\ParamOverriderMyValue</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,m.mdx)("p",null,"The above example create a new parameter override available for use in ",(0,m.mdx)("inlineCode",{parentName:"p"},"webapi.xml"),". The value passed for\n",(0,m.mdx)("inlineCode",{parentName:"p"},"%my_value%")," will be the return value of\n",(0,m.mdx)("inlineCode",{parentName:"p"},"\\VENDOR\\MODULE\\Controller\\Rest\\ParamOverriderMyValue::getOverriddenValue"),". Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<route url="/V1/example/me/service" method="GET">\n    ...\n    <data>\n        <parameter name="myValue" force="true">%my_value%</parameter>\n    </data>\n    ...\n</route>\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-web-api-services-md-d6a6cc086625dff03e7b.js.map