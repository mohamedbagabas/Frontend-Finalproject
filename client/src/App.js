"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Footer_1 = __importDefault(require("./Footer/Footer"));
const LoginPage_1 = __importDefault(require("./Login/LoginPage"));
const Nav_1 = __importDefault(require("./Navbar/Nav"));
// import Register from "./Register/Register";
const Register_1 = require("./Register/Register");
const react_router_dom_1 = require("react-router-dom");
const Building_1 = __importDefault(require("./Building/Building"));
const navigation = {
    brand: { name: 'Rentar', to: '/' },
    links: [
        { name: 'Login', to: '/' },
        { name: 'Building', to: '/Building' },
        { name: 'Tenant', to: '/tenant' }
    ]
};
function App() {
    const { brand, links } = navigation;
    return (<>
   
    <Nav_1.default brand={brand} links={links}/>
    
      <react_router_dom_1.BrowserRouter>
       <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<LoginPage_1.default />}/>
        <react_router_dom_1.Route path="/Register" element={<Register_1.Register />}/>
        <react_router_dom_1.Route path="/Building" element={<Building_1.default />}/>
        
        {/* <Route el ement={<ProtectedRoute />}/> */}
          
       </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
      <Footer_1.default />
      
     

    </>);
}
exports.default = App;
